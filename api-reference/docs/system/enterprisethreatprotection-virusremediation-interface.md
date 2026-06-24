---
title: "virusRemediation（病毒检测与处置）"
upstream_id: "harmonyos-references/enterprisethreatprotection-virusremediation-interface"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:38.116494"
---

# virusRemediation（病毒检测与处置）

病毒检测与处置功能旨在保障数据安全，为安全防护类应用提供威胁文件的扫描与处置、威胁进程终止能力。其主要功能包括文件打开、应用目录扫描，以及文件隔离、已隔离文件恢复、已隔离文件删除、隔离文件查询和终止进程等处置操作。本服务需由安全防护类应用申请相应[权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-enterprise-apps#ohospermissionscan_remediate_virus)后使用。

起始版本： 6.1.1(24)

#### 导入模块

```
import { virusRemediation } from '@kit.EnterpriseThreatProtectionKit';
```

#### IsolatedFileInfo

隔离文件信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力：SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | string | 否 | 否 | 表示隔离ID，UUID格式，长度为36个字符。 |
| absolutePath | string | 否 | 否 | 表示文件的原始路径。 |
| size | number | 否 | 否 | 表示文件大小，单位: byte。 |
| isolatedTime | number | 否 | 否 | 表示文件隔离时间，单位: ms。 |

#### ScanTargetType

扫描对象类型的枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| BUNDLE | 0 | 应用安装包目录。 |
| SANDBOX | 1 | 应用el2级别加密数据目录。 |

#### ScanCallback

扫描结果的回调类。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

#### [h2]onReceive

onReceive(paths: string[]): void

文件目录扫描结果回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| paths | string[] | 是 | 表示扫描文件的绝对路径列表。 |

示例：

```
let onReceive: (paths: string[]) => void = (files: Array<string>) => {
  files.forEach((value: string, index: number) => {
    console.info(`Succeeded in getting file: ${value}.`);
  })
};
```

#### [h2]onComplete

onComplete(): void

文件目录扫描完成信息获取回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

示例：

```
let onComplete: () => void = () => {
  console.info(`Query completed`);
};
```

#### [h2]onError

onError(code: number, message: string): void

文件目录扫描报错信息获取回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | 错误码。 |
| message | string | 是 | 错误信息。 |

示例：

```
let onError: (code: number, message: string) => void = (code: number, message: string) => {
  console.error(`Query error, error code: ${code}, message: ${message}`);
};
```

#### QueryCallback

查询隔离文件信息的回调类。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

#### [h2]onQuery

onQuery(files: IsolatedFileInfo[]): void

隔离文件信息查询结果回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| files | [IsolatedFileInfo](#isolatedfileinfo)[] | 是 | 表示隔离文件信息的列表。 |

示例：

```
let onQuery: (files: virusRemediation.IsolatedFileInfo[]) => void = (files: virusRemediation.IsolatedFileInfo[]) => {
  files.forEach((value: virusRemediation.IsolatedFileInfo, index: number) => {
    console.info(`Succeeded in getting isolated file, file id: ${value.id}.`);
  })
};
```

#### [h2]onComplete

onComplete(): void

隔离文件信息查询完成信息获取回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

示例：

```
let onComplete: () => void = () => {
  console.info(`Query completed`);
};
```

#### [h2]onError

onError(code: number, message: string): void

隔离文件信息查询报错信息获取回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | 错误码。 |
| message | string | 是 | 错误信息。 |

示例：

```
let onError: (code: number, message: string) => void = (code: number, message: string) => {
  console.error(`Query error, error code: ${code}, message: ${message}`);
};
```

#### scanBundleFiles

scanBundleFiles(type: ScanTargetType, callback: ScanCallback, bundleName?: string, batchNum?: number): void

扫描目标应用目录文件，调用前需确保已获取权限且入参符合规范，否则调用失败。使用callback异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | [ScanTargetType](#scantargettype) | 是 | 扫描对象类型，取值为0或1，其余取值无效。其中，0代表BUNDLE，即应用安装包目录；1代表SANDBOX，即应用el2级别加密数据目录。当需要扫描特定应用的安装包目录时，选择BUNDLE。 |
| callback | [ScanCallback](#scancallback) | 是 | 回调函数，返回文件列表和扫描结束通知。 |
| bundleName | string | 否 | 扫描的应用包名。参数为空时，则返回所有允许扫描的应用的文件。 |
| batchNum | number | 否 | 每一轮调用回调函数时返回的文件列表数量。取值范围为[1,200]，超出此范围则参数设置无效不执行扫描任务。不填则取默认值100。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023802002 | Access and disposal denied for this path. |

示例：

```
// 启动文件扫描任务，通过指定回调函数处理扫描过程中接收到的文件路径、扫描完成和错误信息
function startFileScanTask() {
  // 接收扫描结果的回调函数，用于处理扫描得到的文件路径列表
  let onReceive: (paths: string[]) => void = (files: Array<string>) => {
    files.forEach((value: string, index: number) => {
      console.info(`Succeeded in getting file: ${value}.`);
    })
  };
  let onComplete: () => void = () => {
    console.info(`Scan completed`);
  };
  let onError: (code: number, message: string) => void = (code: number, message: string) => {
    console.error(`Scan error, error code: ${code}, message: ${message}`);
  }
  let scanFileCallback: virusRemediation.ScanCallback = {
    onReceive: onReceive,
    onComplete: onComplete,
    onError: onError
  };
  // 调用 scanBundleFiles 方法扫描应用安装包目录下的文件，并通过 scanFileCallback 回调处理结果
  try {
    virusRemediation.scanBundleFiles(virusRemediation.ScanTargetType.BUNDLE, scanFileCallback);
  } catch (error) {
    console.error(`Failed to scan bundle files. Error: ${error}`);
  }
}
```

#### openFile

openFile(path: string): Promise<number>

打开文件。使用Promise异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | [默认路径范围](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisethreatprotection-introduction#文件访问限制)下的绝对路径，路径长度不做限制。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回文件描述符。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023802001 | File not found. |
| 1023802002 | Access and disposal denied for this path. |
| 1023803001 | Access to other users' files is restricted. |
| 1023804001 | Invalid file type. |

示例：

```
import { fileIo } from '@kit.CoreFileKit';

function openFilePromise() {
  let path: string = '/example/path/to/file.txt';
  virusRemediation.openFile(path).then((fd: number) => {
    console.info(`Succeeded in opening file. path: ${path} , fd: ${fd}.`);
    fileIo.closeSync(fd);
  }).catch((err: BusinessError) => {
    console.error(`Failed to open file. Code: ${err.code}, message: ${err.message}.`);
  });
}
```

#### queryIsolatedFiles

queryIsolatedFiles(callback: QueryCallback, batchNum?: number): void

查询隔离文件信息。使用callback异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [QueryCallback](#querycallback) | 是 | 回调函数，返回隔离文件信息列表，并在所有信息成功返回后通知用户查询结束。 |
| batchNum | number | 否 | 每一轮调用回调函数时返回的文件列表数量。取值范围为[1,200]，超出此范围则参数设置无效不执行查询任务。不填则取默认值100。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |

示例：

```
function startQueryTask() {
  // 查询隔离文件信息回调
  let onQuery: (files: virusRemediation.IsolatedFileInfo[]) => void = (files: virusRemediation.IsolatedFileInfo[]) => {
    files.forEach((value: virusRemediation.IsolatedFileInfo, index: number) => {
      console.info(`Succeeded in getting isolated file, file id: ${value.id}.`);
    })
  };
  // 查询隔离文件信息结束通知
  let onComplete: () => void = () => {
    console.info(`Query completed`);
  };
  // 查询隔离文件信息错误报告
  let onError: (code: number, message: string) => void = (code: number, message: string) => {
    console.error(`Query error, error code: ${code}, message: ${message}`);
  }
  let cb: virusRemediation.QueryCallback = {
    onQuery: onQuery,
    onComplete: onComplete,
    onError: onError
  };
  try {
    virusRemediation.queryIsolatedFiles(cb);
  } catch (error) {
    console.error(`Failed to get isolated file. Error: ${error}`);
  }
}
```

#### isolateThreatFile

isolateThreatFile(path: string): Promise<string>

隔离指定路径的文件，在调用前应确保当前路径正确有效且隔离区磁盘空间充足。使用Promise异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待隔离文件的绝对路径，路径长度不做限制。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回隔离ID。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023802001 | File not found. |
| 1023802002 | Access and disposal denied for this path. |
| 1023803001 | Access to other users' files is restricted. |
| 1023804001 | Invalid file type. |
| 1023804002 | Disposal is not supported. Please handle it manually. |
| 1023805001 | Quarantine storage space is full. |

示例：

```
function isolateFilePromise() {
  let path: string = '/data/service/el2/test/test.txt';
  virusRemediation.isolateThreatFile(path).then((id: string) => {
    console.info(`Succeeded in isolating file. path: ${path} , id: ${id}.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to isolate file. Code: ${err.code}, message: ${err.message}.`);
  });
}
```

#### restoreIsolatedFile

restoreIsolatedFile(id: string): Promise<string>

恢复指定隔离ID的文件。使用Promise异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 待恢复文件的隔离ID。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回文件恢复的路径。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023802003 | A file with the same name already exists in the restored path. |
| 1023803001 | Access to other users' files is restricted. |
| 1023804003 | Invalid operation. |
| 1023806001 | Database corruption detected. |

示例：

```
function restoreFilePromise() {
  let id: string = 'example-id-12345';
  virusRemediation.restoreIsolatedFile(id).then((path: string) => {
    console.info(`Succeeded in restoring file. restore path: ${path} , id: ${id}.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to restore file. Code: ${err.code}, message: ${err.message}.`);
  });
}
```

#### removeIsolatedFile

removeIsolatedFile(id: string): Promise<void>

删除指定隔离ID的文件。使用Promise异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 待删除文件的隔离ID。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023803001 | Access to other users' files is restricted. |
| 1023804003 | Invalid operation. |
| 1023806001 | Database corruption detected. |

示例：

```
function removeIsolatedFilePromise() {
  let id: string = 'example-id-12345';
  virusRemediation.removeIsolatedFile(id).then(() => {
    console.info(`Succeeded in removing file.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to remove file. Code: ${err.code}, message: ${err.message}.`);
  });
}
```

#### terminateProcess

terminateProcess(pid: number): Promise<void>

终止正在运行的指定进程。使用Promise异步回调。

需要权限： ohos.permission.SCAN_REMEDIATE_VIRUS

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.VirusRemediation

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pid | number | 是 | 待终止的威胁进程号。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-threat-protection)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1023801001 | System service exception. |
| 1023807001 | Process not found. |
| 1023807002 | Access and disposal are denied for this process. |
| 1023807003 | Access to other users' processes is not allowed. |

示例：

```
function terminateProcessPromise() {
  let pid: number = 0;
  virusRemediation.terminateProcess(pid).then(() => {
    console.info(`Succeeded in terminating process.`);
  }).catch((err: BusinessError) => {
    if (err.code === 1023807001) {
      console.error('Process not found.');
    } else if (err.code === 1023807002) {
      console.error('Access and disposal are denied for this process.');
    } else if (err.code === 1023807003) {
      console.error(`Access to other users' processes is not allowed.`);
    } else {
      console.error(`Failed to terminate process. Code: ${err.code}, message: ${err.message}.`);
    }
  });
}
```
