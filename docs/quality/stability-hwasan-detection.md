---
title: "使用HWASan检测内存错误"
original_url: /docs/quality/stability-hwasan-detection
---


# 使用HWASan检测内存错误

HWASan的能力概述和检测原理可参考[地址越界检测能力概述](/docs/quality/stability-address-sanitizer-overview)以及[HWASan检测原理](/docs/quality/stability-address-sanitizer-principle#section187526511146)，适用于开发态调试压测场景。

## 使用约束

* ROM版本5.0.0.107及以上支持。
* ASan、TSan、UBSan、HWASan、GWP-ASan不能同时开启，五个只能开启其中一个。

## 配置参数

HWASAN\_OPTIONS：在运行时配置HWASan的行为，包括设置检测级别、输出格式、内存错误报告的详细程度等。常用参数请查看[表1](#table152415255816)。

HWASAN\_OPTIONS支持在“app.json5”中配置。

### 在app.json5中配置环境变量

打开AppScope > app.json5文件，添加配置示例如下。

```
{
  "app": {
    "appEnvironments": [
      {
        "name": "HWASAN_OPTIONS",
        "value": "abort_on_error=0 heap_history_size_main_thread=102300" // 示例仅供参考，具体以实际为准
      },
    ],
    ...
  }
}
```

## 配置HWASan

可通过方式一和方式二整体使能HWASan，每种方式分为DevEco Studio场景和流水线场景，还可通过方式三对单个so库使能HWASan。

### 方式一 调试窗口快速使能

**DevEco Studio****场景**

点击**Run > Edit Configurations >****Diagnostics**，勾选**Hardware-Assisted Address Sanitizer**开启检测。

![](./img/da02f092.png)

**流水线场景**

1. 修改工程目录下的AppScope/app.json5文件，添加HWASan配置开关。

   ```
   "hwasanEnabled": true
   ```

   ![](./img/a250b872.png)
2. 在hvigorw命令后加上**-p** **ohos-enable-hwasan=true**的选项，执行hvigorw命令，更多options参考[hvigorw文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-commandline)。

   ```
   hvigorw [taskNames...] -p ohos-enable-hwasan=true  <options>
   ```

### 方式二 配置文件方式使能

**DevEco Studio场景**

1. 修改工程目录下的AppScope/app.json5文件，添加HWASan配置开关。

   ```
   "hwasanEnabled": true
   ```

   ![](./img/bf3ad68e.png)
2. 在需要使能HWASan的模块中，通过添加构建参数开启HWASan检测插桩，在对应模块的模块级build-profile.json5中添加命令参数。

   ```
   "arguments": "-DOHOS_ENABLE_HWASAN=ON"
   ```

   ![](./img/1d502d13.png)

**流水线场景**

在AppScope/app.json5和模块build-profile.json5配置对应HWASan项后，可直接执行hvigorw命令，更多options参考[hvigorw文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-commandline)。

```
hvigorw [taskNames...] -p ohos-enable-hwasan=true  <options>
```

### 方式三 针对单个动态库使能

**CMAKE编译**

如果要对单个so文件进行插桩编译，可在其对应的CMakeLists.txt中添加以下编译选项：

```
set(CMAKE_CXX_FLAGS "$CMAKE_CXX_FLAGS -shared-libasan -fsanitize=hwaddress -mllvm -hwasan-globals=0 -fno-emulated-tls -fno-omit-frame-pointer")
```

![](./img/866246a5.png)

1. 如果按方式一DevEco Studio场景勾选Hardware-Assisted Address Sanitizer以后，配置app.json5中的hwasanEnabled为false，HWASan仍生效。
2. 如需同步开启MemDebug，可选择方式一或方式二使能。

   方式一：在app.json5中增加如下参数：memory\_debug=1 heap\_quarantine\_max=1025 enable\_heap\_quarantine\_debug=1。

   方式二：进入控制台执行hdc shell param set wrap.bundleName asan\_wrapper命令，其中bundleName为需要使能检测能力的应用完整包名。若要关闭MemDebug检测能力，可通过在控制台执行hdc shell param set wrap.bundleName 0命令。通过以上命令开启或关闭MemDebug，均需要重新启动应用生效。本方式不支持自定义HWASAN\_OPTIONS中的参数。

## 插桩验证

当应用依赖未经过HWASan插桩的第三方或第四方库时，HWASan无法检测这些库中可能存在的越界错误。因此，对于应用所引用的第三方或第四方动态库，必须单独进行HWASan插桩适配处理，以确保内存错误能够被完整捕获。 动态库插桩状态检查方法，可使用llvm-readelf工具检查目标动态库是否已完成HWASan插桩，当前默认以动态库的方式链接，查询是否插桩成功命令如下：

```
llvm-readelf -d libthird_party.so | grep 'libclang_rt.hwasan.so'
```

若是静态链接，可使用如下命令查询：

```
llvm-readelf -s libthird_party.so | grep '__hwasan_init'
```

## 运行HWASan

1. 运行或调试当前应用。
2. 当程序出现内存错误时，弹出HWASan log信息，点击信息中的链接即可跳转至引起内存错误的代码处。

   ![](./img/f0c97f86.png)

## HWASan异常检测类型

### stack tag-mismatch

**背景**

“stack tag-mismatch”在HWASan中指的是栈内存标签不匹配错误。这种错误通常发生在访问栈内存时，指针携带的标签与栈内存中存储的标签不一致，触发其异常检测码字的异常类型有：stack-buffer-overflow/underflow、stack-use-after-return。

**代码实例**

```
// stack-buffer-overflow
int stackBufferOverflowEx() {
    int subscript = 43;
    char buffer[42];
    buffer[subscript] = 42;
    printf("address: %p", buffer);
    return 0;
}

// stack-buffer-underflow
int stackBufferUnderflowEX() {
    int subscript = -1;
    char buffer[42];
    buffer[subscript] = 42;
    printf("address: %p", buffer);
    return 0;
}

// stack-use-after-return
int *ptrEx;
__attribute__((noinline))
void FunctionThatEscapesLocalObjectEx()
{
    int local[100];
    ptrEx = &local[0];
    printf("address: %p", local);
}

int Run(int argc)
{
    FunctionThatEscapesLocalObjectEx();
    return ptrEx[argc];
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/MemoryDetection/entry/src/main/cpp/address_problems.cpp#L166-L200">address_problems.cpp</a></div>

**影响**

导致程序存在安全漏洞，并有崩溃风险。

开启HWASan检测后，触发demo中的函数，应用闪退报HWASAN，包含字段：

HWAddressSanitizer: tag-mismatch on address

Cause: stack tag-mismatch

**定位思路**

如果有工程代码，直接开启HWASan检测，debug模式运行后复现该错误，可以触发HWASan，直接点击堆栈中的超链接定位到代码行，能看到错误代码的位置。

![](./img/2a14877e.png)

**优化建议**

stack-buffer-overflow/underflow：访问索引要落在给定的范围内

stack-use-after-return：在作用域内使用局部变量，如果需要在函数返回后继续使用某些数据，考虑将它们存储在静态或全局变量中

### heap-buffer-overflow

**背景**

访问堆内存越界（上下界），触发其异常检测码字的异常类型有：heap-buffer-overflow、heap-buffer-underflow

**代码实例**

```
// heap-buffer-overflow
void HeapBufferOverflowEx()
{
    char *buffer;
    buffer = (char *)malloc(10);
    *(buffer + 11) = 'n';
    *(buffer + 12) = 'n';
    printf("address: %p", buffer);
    free(buffer);
}

// heap-buffer-underflow
void HeapBufferUnderflowEx()
{
    char *buffer;
    buffer = (char *)malloc(10);
    *(buffer - 11) = 'n';
    *(buffer - 12) = 'n';
    printf("address: %p", buffer);
    free(buffer);
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/MemoryDetection/entry/src/main/cpp/address_problems.cpp#L209-L229">address_problems.cpp</a></div>

**影响**

导致程序存在安全漏洞，并有崩溃风险。

开启HWASan检测后，触发demo中的函数，应用闪退报HWASan，包含字段：

HWAddressSanitizer: tag-mismatch

Cause: heap-buffer-overflow

**定位思路**

如果有工程代码，直接开启HWASan检测，debug模式运行后复现该错误，可以触发HWASan，直接点击堆栈中的超链接定位到代码行，能看到错误代码的位置。

![](./img/dc82d3e1.png)

**修改方法**

注意数组长度，不能越界

heap-buffer-overflow：数组访问位置不要越上界

heap-buffer-underflow：访问数组位置不要越下界

**推荐建议**

已知大小的数组注意访问不要越界，访问已知大小数组前先判断访问位置是否落在边界外

### Use-after-free

**背景**

触发其异常检测码字的异常类型有：heap-use-after-free、double-free

heap-use-after-free：当指针指向的内存被释放后，仍然通过该指针访问已经被释放的内存，就会触发heap-use-after-free

double-free：重复释放内存

**代码实例**

```
// heap-use-after-free
int UseAfterFreeEx(int argc)
{
    int *array = new int[100];
    delete[] array;
    return array[argc];
}

// double free
void DoubleFreeEx()
{
    char *p = (char *)malloc(32 * sizeof(char));
    printf("address: %p", p);
    free(p);
    free(p);
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/MemoryDetection/entry/src/main/cpp/address_problems.cpp#L238-L253">address_problems.cpp</a></div>

**影响**

导致程序存在安全漏洞，并有崩溃风险。

开启HWASan检测后，触发demo中的函数，应用闪退报HWASan，包含字段：

HWAddressSanitizer: tag-mismatch

Cause: use-after-free

**定位思路**

如果有工程代码，直接开启ASan检测，debug模式运行后复现该错误，可以触发ASan，直接点击堆栈中的超链接定位到代码行，能看到错误代码的位置。

![](./img/3390be44.png)

**修改方法**

heap-use-after-free：已经释放的指针不要再使用，将指针设置为NULL/nullptr。

double-free：已经释放一次的指针，不要再重复释放。

**推荐建议**

heap-use-after-free：使用智能指针，或实现一个free()函数的替代版本或者delete析构器来保证指针的重置。

double-free：变量定义声明时初始化为NULL，释放内存后也应立即将变量重置为NULL，这样每次释放之前都可以通过判断变量是否为NULL来判断是否可以释放。

## 日志规格和日志获取方式

请参看[日志获取方式](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines#日志获取方式)和[HWASan日志规格](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines#hwasan日志规格)。
