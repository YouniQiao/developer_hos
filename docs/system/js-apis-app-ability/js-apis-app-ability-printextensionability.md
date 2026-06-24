---
title: "@ohos.app.ability.PrintExtensionAbility (打印扩展能力)"
upstream_id: "harmonyos-references/js-apis-app-ability-printextensionability"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:06.563994"
---

# @ohos.app.ability.PrintExtensionAbility (打印扩展能力)

该模块为打印扩展能力的操作API，提供调用打印扩展能力的接口。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 14开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
```

#### PrintExtensionAbility

#### [h2]onCreate

onCreate(want: Want): void

初始化扩展能力，会在系统首次连接打印扩展时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-want#want) | 是 | 表示调用打印页面需要参数。 |

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onCreate(want: Want): void {
        console.info('onCreate');
        // ...
    }
}
```

#### [h2]onStartDiscoverPrinter

onStartDiscoverPrinter(): void

开始发现与设备连接的打印机时调用。

系统能力： SystemCapability.Print.PrintFramework

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStartDiscoverPrinter(): void {
        console.info('onStartDiscoverPrinter enter');
        // ...
    }
}
```

#### [h2]onStopDiscoverPrinter

onStopDiscoverPrinter(): void

停止发现打印机时调用。

系统能力： SystemCapability.Print.PrintFramework

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStopDiscoverPrinter(): void {
        console.info('onStopDiscoverPrinter enter');
        // ...
    }
}
```

#### [h2]onConnectPrinter

onConnectPrinter(printerId: number): void

连接到特定打印机时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | number | 是 | 表示打印机ID。 |

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onConnectPrinter(printerId: number): void {
        console.info('onConnectPrinter enter');
        // ...
    }
}
```

#### [h2]onDisconnectPrinter

onDisconnectPrinter(printerId: number): void

断开与特定打印机的连接时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | number | 是 | 表示打印机ID。 |

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDisconnectPrinter(printerId: number): void {
        console.info('onDisconnectPrinter enter');
        // ...
    }
}
```

#### [h2]onStartPrintJob24+

onStartPrintJob(jobInfo: print.PrintJob): void

开始打印任务时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| jobInfo | [print.PrintJob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-print#printjob24) | 是 | 表示打印任务的信息。 |

示例：

```
import { print, PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStartPrintJob(jobInfo: print.PrintJob): void {
        console.info('onStartPrintJob, jobId is: ' + jobInfo.jobId);
        // ...
    }
}
```

#### [h2]onCancelPrintJob24+

onCancelPrintJob(jobInfo: print.PrintJob): void

移除已开始的打印任务时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| jobInfo | [print.PrintJob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-print#printjob24) | 是 | 表示打印任务的信息。 |

示例：

```
import { print, PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onCancelPrintJob(jobInfo: print.PrintJob): void {
        console.info('onCancelPrintJob, jobId is: ' + jobInfo.jobId);
        // ...
    }
}
```

#### [h2]onRequestPrinterCapability24+

onRequestPrinterCapability(printerId: number): print.PrinterCapability

请求打印机能力时调用。

系统能力： SystemCapability.Print.PrintFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | number | 是 | 表示打印机ID。 |

返回值：

| **类型** | **说明** |
| --- | --- |
| [print.PrinterCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-print#printercapability24) | 表示打印能力。 |

示例：

```
import { print, PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onRequestPrinterCapability(printerId: number): print.PrinterCapability {
        console.info('onRequestPrinterCapability enter');
        // ...
        let tmp : print.PrinterCapability = {
            colorMode : 1,
            duplexMode : 1,
            pageSize : []
        };
        return tmp;
    }
}
```

#### [h2]onDestroy

onDestroy(): void

结束打印扩展时调用。

系统能力： SystemCapability.Print.PrintFramework

示例：

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDestroy(): void {
        console.info('onDestroy');
    }
}
```
