---
title: "scan（星闪扫描能力）"
upstream_id: "harmonyos-references/nearlink-scan"
catalog: "harmonyos-references"
content_hash: "4e194cbc2c6a"
synced_at: "2026-07-09T00:59:26.798838"
---

# scan（星闪扫描能力）

本模块提供了星闪扫描相关功能。

起始版本： 5.0.1(13)

#### 导入模块

```
import { scan } from '@kit.NearLinkKit';
```

#### startScan

startScan(filters: Array<ScanFilters>, options?: ScanOptions): Promise<void>

发起星闪扫描。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filters | Array | 是 | 表示扫描过滤器，配置期望扫描的设备名称、地址等信息。 其中表示过滤条件的ScanFilters中全部字段均为可选字段，所有字段都未配置的ScanFilters代表一组空过滤器，视为无效过滤器而忽略。 不允许filters中的所有ScanFilters都配置为空过滤器，否则返回错误码[401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败)。 |
| options | [ScanOptions](#scanoptions) | 否 | 表示扫描选项。默认为低功耗模式。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |
| 1009700003 | Nearlink is off. |
| 1009700099 | Operation failed. |

示例：

```
import { scan } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let scanFilter: scan.ScanFilters = {
  address: '11:22:33:44:AA:FF', // 期望扫描到的外围设备地址
  deviceName: 'device name' // 期望扫描到的外围设备名称
};
let scanOptions: scan.ScanOptions = {
  scanMode: scan.ScanMode.SCAN_MODE_LOW_POWER
};
try {
  scan.startScan([scanFilter], scanOptions).then(() => {
    console.info('start scan success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### startScan

startScan(filters: Array<ScanFilters> | null, options?: ScanOptions): Promise<void>

发起星闪扫描。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filters | Array | null | 是 | 扫描星闪广播的过滤条件集合，符合过滤条件的设备会被上报。若不使能过滤器则传入null。 若该参数设置为null，将扫描所有可发现的周边星闪设备，但是不建议使用此方式，可能扫描到非预期设备，并增加功耗。 |
| options | [ScanOptions](#scanoptions) | 否 | 表示扫描选项。默认为低功耗模式。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 1009700003 | Nearlink is off. |
| 1009700099 | Operation failed. |

示例：

```
import { scan } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 不使用过滤器进行扫描
try {
  scan.startScan(null).then(() => {
    console.info('start scan without filter success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

// 使用过滤器进行扫描
let scanFilter: scan.ScanFilters = {
  address: '11:22:33:44:AA:FF',
  deviceName: 'device name'
};
try {
  scan.startScan([scanFilter]).then(() => {
    console.info('start scan with filter success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### stopScan

stopScan(): Promise<void>

停止星闪扫描。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 1009700003 | Nearlink is off. |
| 1009700099 | Operation failed. |

示例：

```
import { scan } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  scan.stopScan().then(() => {
    console.info('stop scan success');
  }).catch ((err: BusinessError) => {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### on( 'deviceFound')

on(type: 'deviceFound', callback: Callback<Array<ScanResults>>): void

订阅星闪扫描结果。使用callback异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'deviceFound'，表示星闪设备扫描结果上报事件。 当[scan.startScan](#startscan)调用完成，发起星闪扫描，若扫描到星闪设备，触发该事件。 |
| callback | Callback‌‌> | 是 | 回调函数，返回星闪扫描结果数组对象。扫描结果携带远端设备的随机地址。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |

示例：

```
import { scan } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let onReceiveEvent:(data: Array<scan.ScanResults>) => void = (data: Array<scan.ScanResults>) => {
  console.info('scan result addr:' + data[0].address + 'name:' + data[0].deviceName);
};
try {
  scan.on('deviceFound', onReceiveEvent);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### off( 'deviceFound')

off(type: 'deviceFound', callback?: Callback<Array<ScanResults>>): void

取消订阅星闪扫描结果。使用callback异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'deviceFound'，表示星闪设备扫描结果上报事件。 |
| callback | Callback> | 否 | 回调函数，返回星闪扫描结果数组对象。 填写该参数则取消当前callback订阅。不填写该参数则取消该type对应的所有回调。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |

示例：

```
import { scan } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  scan.off('deviceFound');
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### ScanResults

表示扫描结果。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| address | string | 否 | 否 | 表示扫描到设备地址。地址格式参考：11:22:33:AA:BB:FF。 |
| rssi | number | 否 | 否 | 表示扫描到的设备rssi值，取值范围[-128, 127]，单位dBm，其中127表示无效值。 |
| data | ArrayBuffer | 否 | 否 | 表示广播包数据。 |
| deviceName | string | 否 | 否 | 表示扫描到的设备名称。字符串长度范围[0, 30]。 |
| isConnectable | boolean | 否 | 否 | 表示扫描到的广播是否可连接。true：可连接，false：不可连接 |
| deviceClass | [constant.DeviceClass](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-constant#deviceclass) | 否 | 是 | 表示扫描到的设备类型 **起始版本：** 5.1.0(18) |

#### ScanFilters

表示扫描过滤条件。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| address | string | 否 | 是 | 表示设备地址，若未配置则默认不过滤该字段。地址格式参考：11:22:33:AA:BB:FF。 |
| deviceName | string | 否 | 是 | 表示设备名称，字符串长度范围[0, 30]。若未配置则默认不过滤该字段。 |
| manufacturerId | number | 否 | 是 | 表示厂商ID，取值范围[1, 65535]，若未配置则默认不过滤该字段。 |
| manufacturerData | ArrayBuffer | 否 | 是 | 表示厂商数据，若未配置则默认不过滤该字段。配置该字段需同时配置manufacturerId。 |
| manufacturerDataMask | ArrayBuffer | 否 | 是 | 表示厂商数据掩码，若未配置则默认不过滤该字段。配置该字段需同时配置manufacturerData，且二者长度必须一致。 |

#### ScanOptions

表示扫描选项。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| scanMode | [ScanMode](#scanmode) | 否 | 是 | 表示扫描模式。默认值为'SCAN_MODE_LOW_POWER' |
| duration | number | 否 | 是 | 表示扫描持续时间。单位second，取值范围[10, 60]，默认值为全时段扫描 |

#### ScanMode

表示扫描模式，为枚举值。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 5.0.1(13)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SCAN_MODE_LOW_POWER | 0 | 表示低功耗扫描模式，扫描频率低，功耗低。默认值。 |
| SCAN_MODE_BALANCED | 1 | 表示均衡扫描模式，扫描频率中等，功耗中等。 |
