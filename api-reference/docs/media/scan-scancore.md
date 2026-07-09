---
title: "scanCore (扫码公共信息)"
upstream_id: "harmonyos-references/scan-scancore"
catalog: "harmonyos-references"
content_hash: "b9092a77eefb"
synced_at: "2026-07-09T01:00:49.659751"
---

# scanCore (扫码公共信息)

本模块提供扫码公共信息。

起始版本： 4.0.0(10)

#### 导入模块

```
import { scanCore } from '@kit.ScanKit';
```

#### ScanType

枚举，码类型。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Scan.Core

起始版本： 4.0.0(10)

| **名称** | **值** | **说明** |
| --- | --- | --- |
| FORMAT_UNKNOWN | 0 | 未知类型，用于事先不知道要扫哪种类型码的场景，此参数不可用作码图生成 |
| AZTEC_CODE | 1 | AZTEC |
| CODABAR_CODE | 2 | CODABAR |
| CODE39_CODE | 3 | CODE 39 |
| CODE93_CODE | 4 | CODE 93 |
| CODE128_CODE | 5 | CODE 128 |
| DATAMATRIX_CODE | 6 | DATA MATRIX |
| EAN8_CODE | 7 | EAN-8 |
| EAN13_CODE | 8 | EAN-13 |
| ITF14_CODE | 9 | ITF-14 |
| PDF417_CODE | 10 | PDF417 |
| QR_CODE | 11 | QR CODE |
| UPC_A_CODE | 12 | UPC-A |
| UPC_E_CODE | 13 | UPC-E |
| MULTIFUNCTIONAL_CODE | 14 | MULTIFUNCTIONAL CODE，暂不支持码图生成 |
| ONE_D_CODE | 100 | 条形码，包含：CODABAR、CODE 39、CODE 93、CODE 128、EAN-8、EAN-13、ITF-14、UPC-A、UPC-E，此参数不可用作码图生成 |
| TWO_D_CODE | 101 | 二维码，包含：AZTEC、DATA MATRIX、PDF417、QR CODE、MULTIFUNCTIONAL CODE，此参数不可用作码图生成 |
| ALL | 1001 | 以上所有类型，此参数不可用作码图生成 |

#### ScanErrorCode

枚举，扫码错误码类型。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Multimedia.Scan.Core

起始版本： 4.1.0(11)

| **名称** | **值** | **说明** |
| --- | --- | --- |
| INTERNAL_ERROR | 1000500001 | Internal error. **元服务API：** 从版本4.1.0(11)开始，该接口支持在元服务中使用。 |
| SCAN_SERVICE_CANCELED | 1000500002 | The user canceled the barcode scanning. **元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。 **起始版本：** 5.0.0(12) |

#### ScanSource

枚举，扫码结果来源。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本6.0.2(22)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Scan.Core

起始版本： 6.0.2(22)

| **名称** | **值** | **说明** |
| --- | --- | --- |
| CAMERA | 0 | 表示相机流扫码。 |
| PHOTO | 1 | 表示照片扫码。 |

#### isDefaultScanSupported

isDefaultScanSupported(): boolean

查询当前设备是否支持默认界面扫码。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Scan.Core

起始版本： 26.0.0

返回值：

| **类型** | **说明** |
| --- | --- |
| boolean | 返回查询结果。true代表支持默认界面扫码，false代表不支持默认界面扫码。 |

示例：

```
import { scanCore } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let isSupported: boolean = scanCore.isDefaultScanSupported();
if (isSupported) {
  hilog.info(0x0001, '[Scan Sample]', 'Default scan is supported on this device.');
  // 当前设备支持默认界面扫码，可以调用接口拉起扫码页面或进行下一步处理
  // ...
} else {
  // 当前设备不支持默认界面扫码
  hilog.info(0x0001, '[Scan Sample]', 'Default scan is not supported on this device.');
}
```

#### isCustomScanSupported

isCustomScanSupported(): boolean

查询当前设备是否支持自定义界面扫码。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Multimedia.Scan.Core

起始版本： 26.0.0

返回值：

| **类型** | **说明** |
| --- | --- |
| boolean | 返回查询结果。true代表支持自定义界面扫码，false代表不支持自定义界面扫码。 |

示例：

```
import { scanCore } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let isSupported: boolean = scanCore.isCustomScanSupported();
if (isSupported) {
  hilog.info(0x0001, '[Scan Sample]', 'Custom scan is supported on this device.');
  // 当前设备支持自定义界面扫码，可以拉起扫码页面或进行下一步处理
  // ...
} else {
  // 当前设备不支持自定义界面扫码
  hilog.info(0x0001, '[Scan Sample]', 'Custom scan is not supported on this device.');
}
```
