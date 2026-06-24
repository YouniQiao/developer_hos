---
title: "@ohos.file.statvfs (文件系统空间统计)"
upstream_id: "harmonyos-references/js-apis-file-statvfs"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:14.011092"
---

# @ohos.file.statvfs (文件系统空间统计)

该模块提供文件系统相关存储信息的功能：向应用程序提供获取文件系统总字节数、空闲字节数的ArkTS接口。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { statfs } from '@kit.CoreFileKit';
```

#### statfs.getFreeSize

getFreeSize(path:string): Promise<number>

异步方法获取指定文件系统空闲字节数，以Promise形式返回结果。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回空闲字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
statfs.getFreeSize(path).then((number: number) => {
  console.info("Succeeded in getting free size: " + number);
}).catch((err: BusinessError) => {
  console.error("Failed to get free size. Code: " + err.code + ", message: " + err.message);
});
```

#### statfs.getFreeSize

getFreeSize(path:string, callback:AsyncCallback<number>): void

异步方法获取指定文件系统空闲字节数，使用callback形式返回结果。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |
| callback | AsyncCallback | 是 | 回调函数，返回空闲字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
statfs.getFreeSize(path, (err: BusinessError, number: number) => {
  if (err) {
    console.error("Failed to get free size. Code: " + err.code + ", message: " + err.message);
  } else {
    console.info("Succeeded in getting free size: " + number);
  }
});
```

#### statfs.getFreeSizeSync10+

getFreeSizeSync(path:string): number

以同步方法获取指定文件系统空闲字节数。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回空闲字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
let number = statfs.getFreeSizeSync(path);
console.info("Succeeded in getting free size: " + number);
```

#### statfs.getTotalSize

getTotalSize(path: string): Promise<number>

异步方法获取指定文件系统总字节数，以Promise形式返回结果。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回总字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
statfs.getTotalSize(path).then((number: number) => {
  console.info("Succeeded in getting total size: " + number);
}).catch((err: BusinessError) => {
  console.error("Failed to get total size. Code: " + err.code + ", message: " + err.message);
});
```

#### statfs.getTotalSize

getTotalSize(path: string, callback: AsyncCallback<number>): void

异步方法获取指定文件系统总字节数，使用callback形式返回结果。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |
| callback | AsyncCallback | 是 | 回调函数，返回总字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
statfs.getTotalSize(path, (err: BusinessError, number: number) => {
  if (err) {
    console.error("Failed to get total size. Code: " + err.code + ", message: " + err.message);
  } else {
    console.info("Succeeded in getting total size: " + number);
  }
});
```

#### statfs.getTotalSizeSync10+

getTotalSizeSync(path: string): number

以同步方法获取指定文件系统总字节数。

系统能力：SystemCapability.FileManagement.File.FileIO

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 需要查询的文件系统的文件路径。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回总字节数，单位为Byte。 |

错误码：

接口抛出错误码的详细介绍请参见[基础文件IO错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement#基础文件io错误码)。

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call. |
| 13900005 | I/O error. |
| 13900008 | Bad file descriptor. |
| 13900011 | Out of memory. |
| 13900012 | Permission denied. |
| 13900013 | Bad address. |
| 13900018 | Not a directory. |
| 13900030 | File name too long. |
| 13900031 | Function not implemented. |
| 13900033 | Too many symbolic links encountered. |
| 13900038 | Value too large for defined data type. |
| 13900042 | Unknown error. |

示例：

```
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
let number = statfs.getTotalSizeSync(path);
console.info("Succeeded in getting total size: " + number);
```
