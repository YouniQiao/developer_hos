---
title: "访问应用文件"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-app-file-access
---

应用需要对应用文件目录下的应用文件进行查看、创建、读写、删除、复制、获取属性等访问操作，下文介绍具体方法。

## 接口说明

开发者通过基础文件操作接口（[ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)）实现应用文件访问能力，主要功能如下表所示。

**表1** 基础文件操作接口功能

| 接口名 | 功能 | 接口类型 | 支持同步 | 支持异步 |
| --- | --- | --- | --- | --- |
| access | 检查文件是否存在 | 方法 | √ | √ |
| close | 关闭文件 | 方法 | √ | √ |
| copyFile | 复制文件 | 方法 | √ | √ |
| listFile | 列出文件夹下所有文件名 | 方法 | √ | √ |
| mkdir | 创建目录 | 方法 | √ | √ |
| open | 打开文件 | 方法 | √ | √ |
| read | 从文件读取数据 | 方法 | √ | √ |
| rename | 重命名文件或文件夹 | 方法 | √ | √ |
| rmdir | 删除整个目录 | 方法 | √ | √ |
| stat | 获取文件详细属性信息 | 方法 | √ | √ |
| unlink | 删除单个文件 | 方法 | √ | √ |
| write | 将数据写入文件 | 方法 | √ | √ |
| File.fd | 获取文件描述符 | 属性 | - | - |
| OpenMode | 设置文件打开标签 | 属性 | - | - |
| Filter | 设置文件过滤配置项 | 类型 | - | - |

## 开发示例

在对应用文件开始访问前，开发者需要[获取应用文件路径](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-context-stage#获取应用文件路径)。以从UIAbilityContext获取HAP级别的文件路径为例进行说明，UIAbilityContext的获取方式请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

下面介绍几种常用操作示例。

### 新建并读写一个文件

以下示例代码演示了如何新建一个文件并对其读写。

```
// pages/xxx.ets
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { buffer } from '@kit.ArkTS';

// 获取应用文件路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

function createFile(context: common.UIAbilityContext): void {
  let filesDir = context.filesDir;
  // 新建并打开文件
  let file = fileIo.openSync(filesDir + '/test.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  // 写入一段内容至文件
  let writeLen = fileIo.writeSync(file.fd, "Try to write str.");
  console.info("The length of str is: " + writeLen);
  // 从文件读取一段内容
  let arrayBuffer = new ArrayBuffer(1024);
  class Option {
    public offset: number = 0;
    public length: number = 0;
  }
  let option = new Option();
  option.length = arrayBuffer.byteLength;
  let readLen = fileIo.readSync(file.fd, arrayBuffer, option);
  let buf = buffer.from(arrayBuffer, 0, readLen);
  console.info("the content of file: " + buf.toString());
  // 关闭文件
  fileIo.closeSync(file);
}
```

### 新建并读写一个gbk编码格式文件

以下示例代码演示了如何新建一个文件并对其读写。

```
// pages/xxx.ets
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { buffer } from '@kit.ArkTS';
import { util } from '@kit.ArkTS';

// 获取应用文件路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
//编码格式转换
export function StringToBuffer(content: string) {
    let textEncoder = new util.TextEncoder("gbk");
    let resultBuf = textEncoder.encodeInto(content);
    return resultBuf;
}

function createFile(context: common.UIAbilityContext): void {
  let filesDir = context.filesDir;
  // 新建并打开文件
  let file = fileIo.openSync(filesDir + '/test.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  // 写入一段内容至文件

  let writeLen = fileIo.writeSync(file.fd, StringToBuffer("Try to write str.").buffer);
  console.info("The length of str is: " + writeLen);
  // 从文件读取一段内容
  let arrayBuffer = new ArrayBuffer(1024);
  class Option {
    public offset: number = 0;
    public length: number = 0;
  }
  let option = new Option();
  option.length = arrayBuffer.byteLength;
  let readLen = fileIo.readSync(file.fd, arrayBuffer, option);
  let buf = buffer.from(arrayBuffer, 0, readLen);
  console.info("the content of file: " + buf.toString());
  // 关闭文件
  fileIo.closeSync(file);
}
```

### 读取文件内容并写入到另一个文件

以下示例代码演示了如何从一个文件读写内容到另一个文件。

```
// pages/xxx.ets
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

// 获取应用文件路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

function readWriteFile(context: common.UIAbilityContext): void {
  let filesDir = context.filesDir;
  // 打开文件
  let srcFile = fileIo.openSync(filesDir + '/test.txt', fileIo.OpenMode.READ_WRITE);
  let destFile = fileIo.openSync(filesDir + '/destFile.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  // 读取源文件内容并写入至目的文件
  let bufSize = 4096;
  let readSize = 0;
  let buf = new ArrayBuffer(bufSize);
  class Option {
    public offset: number = 0;
    public length: number = bufSize;
  }
  let option = new Option();
  option.offset = readSize;
  let readLen = fileIo.readSync(srcFile.fd, buf, option);
  while (readLen > 0) {
    readSize += readLen;
    fileIo.writeSync(destFile.fd, buf);
    option.offset = readSize;
    readLen = fileIo.readSync(srcFile.fd, buf, option);
  }
  // 关闭文件
  fileIo.closeSync(srcFile);
  fileIo.closeSync(destFile);
}
```

![](./img/0ea3c37c.png)

使用读写接口时，需注意可选项参数offset的设置。对于已存在且读写过的文件，文件偏移指针默认在上次读写操作的终止位置。

### 查看文件列表

以下示例代码演示了如何查看文件列表：

```
import { fileIo, Filter } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

// 获取应用文件路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext

// 查看文件列表
function getListFile(context: common.UIAbilityContext): void {
  class ListFileOption {
    public recursion: boolean = false;
    public listNum: number = 0;
    public filter: Filter = {};
  }
  let option = new ListFileOption();
  option.filter.suffix = ['.png', '.jpg', '.txt'];          // 匹配文件后缀名为'.png','.jpg','.txt'
  option.filter.displayName = ['test*'];                    // 匹配文件全名以'test'开头
  option.filter.fileSizeOver = 0;                           // 匹配文件大小大于0
  option.filter.lastModifiedAfter = new Date(0).getTime();  // 匹配文件最近修改时间在1970年1月1日之后
  let filesDir = context.filesDir;
  let files = fileIo.listFileSync(filesDir, option);
  for (let i = 0; i < files.length; i++) {
    console.info(`The name of file: ${files[i]}`);
  }
}
```
