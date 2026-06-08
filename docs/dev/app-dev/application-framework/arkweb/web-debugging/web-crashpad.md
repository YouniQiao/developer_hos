---
title: "使用Crashpad收集Web组件崩溃信息"
original_url: /docs/dev/app-dev/application-framework/arkweb/web-debugging/web-crashpad
format: md
upstream_id: dev/app-dev/application-framework/arkweb/web-debugging/web-crashpad
last_sync: 2026-06-07
sync_hash: 7ff1e89c
---
Web组件支持使用Crashpad记录进程崩溃信息。Crashpad是Chromium内核提供的进程崩溃信息处理工具，在应用使用Web组件导致的进程（Web渲染进程）崩溃出现后，Crashpad会在应用主进程沙箱目录写入dmp文件。该文件为二进制格式，后缀为dmp，其记录了进程崩溃的原因、线程信息、寄存器信息等，应用可以使用该文件分析Web组件相关进程崩溃问题。Web组件分别从API version 9和API version 12开始支持接口onRenderExited和onRenderProcessNotResponding，开发者可以分别通过Web接口[onRenderExited](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onrenderexited9)和[onRenderProcessNotResponding](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onrenderprocessnotresponding12)来检测渲染进程退出和渲染进程不响应，也可以在这些接口中增加应用处理的逻辑。

使用步骤如下：

1. 在应用使用Web组件导致的进程崩溃出现后，Crashpad收到信号，对应Hilog日志（节选部分）如下

```
pid-30069             I     [crashpad_ohos.cc:254] crashpad SandboxedHandler::HandleCrash, received signo = 6
pid-30069             I     [crashpad_ohos.cc:182] crashpad SandboxedHandler::HandleCrashNonFatal, connect to handler successfully, need to request dump
...
arkweb_cr..._handler  I     [crash_report_database.cc:91] crash dmp path : /data/storage/el2/log/crashpad/new/xxx.dmp
```

这时Crashpad开始请求dump，成功之后，会在应用主进程沙箱目录下产生对应的dmp文件，对应的沙箱路径如下：

```
/data/storage/el2/log/crashpad
```

1. 参考[Native访问应用沙箱](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-file-native-side)实现访问应用沙箱dmp文件；也可将存放dmp文件的沙箱路径的文件复制到可以查看的路径。示例如下

```
import { fileIo as fs } from '@kit.CoreFileKit'
import { BusinessError } from '@kit.BasicServicesKit'
import { webview } from '@kit.ArkWeb'

@Entry
@Component
struct Index {
  controller: webview.WebviewController = new webview.WebviewController();
  uiContext: UIContext = this.getUIContext();
  build() {
    RelativeContainer() {
      Web({src:'chrome://memory-exhaust/', controller:this.controller})
      Button('file')
        .onClick(() => {
          let pathDir = this.uiContext.getHostContext()?.filesDir;
          console.info("pathdir=" + pathDir);
          fs.copyDir("/data/storage/el2/log/crashpad/pending/", pathDir, 0)
            .then(()=>{
              console.info("copy files success");
            })
            .catch((err: BusinessError)=>{
              console.error("copy failed with error message: " + err.message + ", error code: " + err.code);
            })
        })
    }
    .height('100%')
    .width('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ArkWebGetDmpFiles/entry/src/main/ets/pages/Index.ets#L15-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


以上示例将所有的dmp文件都复制到可查看的沙箱路径中，也可以搜索Hilog日志“.dmp”得到dmp文件名，这样就可以将某个dmp文件复制到另一个沙箱路径下了，具体的路径为

```
/data/app/el2/100/base/com.example.myapplication/haps/entry/files/
```

这个路径可以利用DevEco Studio查看。

![](./img/47316ace.png)

1. 获取dmp文件后进行解析，具体步骤如下：

   * 通过minidump\_stackwalk工具解析dmp文件，可以得到上述dmp文件对应的进程崩溃信息（崩溃的原因、线程信息、寄存器信息等），示例如下（Linux环境）：

     ```
     ./minidump_stackwalk b678e0b5-894b-4794-9ab3-fb5d6dda06a3.dmp > parsed_stacktrace.txt
     ```

     minidump\_stackwalk由Breakpad项目源码编译得到，编译方法见项目仓库：[Breakpad仓库地址](https://chromium.googlesource.com/breakpad/breakpad)。
   * 查看解析后的文件，以下示例列出部分内容：

     ```
     Crash reason:  SIGSEGV /SEGV_MAPERR    表示导致进程crash的信号，此处示例为段错误
     Crash address: 0x0
     Process uptime: 12 seconds

     Thread 0 (crashed)                     表示Thread 0发生crash
      0  libweb_engine.so + 0x2e0b340       0层调用栈，0x2e0b340为so偏移地址，可用来反编译解析crash源码（依赖unstripped so）
          x0 = 0x00000006a5719ff8    x1 = 0x000000019a5a28c0
          x2 = 0x0000000000020441    x3 = 0x00000000000001b6
          x4 = 0x0000000000000018    x5 = 0x0000000000008065
          x6 = 0x0000000000008065    x7 = 0x63ff686067666d60
          x8 = 0x0000000000000000    x9 = 0x5f129cf9e7bf008c
         x10 = 0x0000000000000001   x11 = 0x0000000000000000
         x12 = 0x000000069bfcc6d8   x13 = 0x0000000009a1746e
         x14 = 0x0000000000000000   x15 = 0x0000000000000000
         x16 = 0x0000000690df4850   x17 = 0x000000010c0d47f8
         x18 = 0x0000000000000000   x19 = 0x0000005eea827db8
         x20 = 0x0000005eea827c38   x21 = 0x00000006a56b1000
         x22 = 0x00000006a8b85020   x23 = 0x00000020002103c0
         x24 = 0x00000006a56b8a70   x25 = 0x0000000000000000
         x26 = 0x00000006a8b84e00   x27 = 0x0000000000000001
         x28 = 0x0000000000000000    fp = 0x0000005eea827c10
          lr = 0x000000069fa4b33c    sp = 0x0000005eea827c10
          pc = 0x000000069fa4b340
         Found by: given as instruction pointer in context
      1  libweb_engine.so + 0x2e0b338
          fp = 0x0000005eea827d80    lr = 0x000000069fa48d44
          sp = 0x0000005eea827c20    pc = 0x000000069fa4b33c
         Found by: previous frame's frame pointer
      2  libweb_engine.so + 0x2e08d40
          fp = 0x0000005eea827e50    lr = 0x00000006a385cef8
          sp = 0x0000005eea827d90    pc = 0x000000069fa48d44
         Found by: previous frame's frame pointer
      3  libweb_engine.so + 0x6c1cef4
          fp = 0x0000005eea828260    lr = 0x00000006a0f11298
          sp = 0x0000005eea827e60    pc = 0x00000006a385cef8
      ......
     ```
   * 使用LLVM工具链解析崩溃源码位置，需要注意的是，要解析的so文件必须是带有符号表的so文件，如果栈显示和web的so相关，开发者可以在社区提issue或IR单。示例如下（Linux环境）：

     ```
     ./llvm-addr2line -Cfpie libweb_engine.so 0x2e0b340
     ```

     llvm-addr2line工具链位于SDK中。
