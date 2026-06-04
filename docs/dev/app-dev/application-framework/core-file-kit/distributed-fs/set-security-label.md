---
title: "设置分布式文件数据等级"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/set-security-label
---

不同设备本身的安全能力差异较大，一些小的嵌入式设备安全能力远弱于平板等设备类型。用户或者应用不同的文件数据有不同安全诉求，例如个人的健康信息和银行卡信息等不期望被弱设备读取。因此，HarmonyOS提供一套完整的数据分级、设备分级标准，并针对不同设备制定不同的数据流转策略，具体规则请参见[数据、设备安全分级](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-control-by-device-and-data-level)。

## 接口说明

API详细介绍请参见[ohos.file.securityLabel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-securitylabel)。

**表1** 设置文件数据等级，其中“√”表示支持。

| 接口名 | 功能 | 接口类型 | 支持同步 | 支持异步 |
| --- | --- | --- | --- | --- |
| setSecurityLabel | 设置文件安全标签。 | 方法 | √ | √ |
| getSecurityLabel | 获取文件安全标签。 | 方法 | √ | √ |

![](./img/df3f6c0e.png)

1. 对于不满足安全等级的文件，跨设备仍然可以看到该文件，但是无权限打开访问该文件。
2. 分布式文件系统的数据等级默认为S3，应用可以主动设置文件的安全等级。

## 开发示例

获取通用文件沙箱路径，并设置数据等级标签。示例中的context的获取方式请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { securityLabel } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';
```

```
// 获取需要设备数据等级的文件沙箱路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;
let filePath = pathDir + '/test.txt';

// 打开文件
let file: fileIo.File | null = null;
try {
  file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  // 设置文件的数据等级为s0
  securityLabel.setSecurityLabel(filePath, 's0').then(() => {
    console.info('Succeeded in setting security label.');
    fileIo.closeSync(file);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set security label. Code: ${err.code}, message: ${err.message}`);
    if (file) {
      try {
        fileIo.closeSync(file);
      } catch (closeErr) {
        console.error(`Failed to close file`);
      }
    }
  });
} catch (err) {
  console.error(`Failed to open file. Code: ${err.code}, message: ${err.message}`);
  if (file) {
    try {
      fileIo.closeSync(file);
    } catch (closeErr) {
      console.error(`Failed to close file`);
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/FileApiFileSample/entry/src/main/ets/pages/Index.ets#L356-L371" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>
