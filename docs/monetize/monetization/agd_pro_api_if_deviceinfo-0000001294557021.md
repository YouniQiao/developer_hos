---
title: "DeviceInfo"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_deviceinfo-0000001294557021
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| oaid | O | `String` | 设备广告ID。  请按实际获取情况填写，如获取不到，请传入空值。  注意：  **oaid**字段不传的情况，可能会导致没有填充。 |
| udid | O | `String` | 设备唯一标识。  注意：  华为内部应用必填，三方应用无需填写。 |
| deviceId | O | `String` | 三方唯一设备标识符。媒体可填入匿名化后的IMEI。  **deviceId**字段请传IMEI号的MD5加密32位小写形式。 |
| deviceModel | M | `String` | 设备型号。  说明：  Android设备可调用系统接口：android.os.Build.MODEL。 |
| deviceType | O | `String` | 设备类型。  取值范围：   * 0：手机 * 4：Pad   默认值：0 |
| manufacturer | O | `String` | 设备厂商。  说明：  Android设备可调用系统接口：android.os.Build.MANUFATURER。如获取不到请填写“unknown”。 |
| locale | M | `String` | 语言环境。ISO语言编码。  例如：zh\_CN，en\_US |
| country | M | `String` | 服务国家或地区。ISO国家编码。  例如：CN |
| mcc | O | `String` | 移动国家码。  例如：454，460 |
| androidApiLevel | O | `Integer` | android接口级别。 |
| harmonyApiLevel | O | `Integer` | harmony API接口级别。 |
| emuiApiLevel | O | `Integer` | EMUI API接口级别。 |
| emuiVersion | O | `String` | EMUI版本。 |
| gmsSupport | O | `Integer (32)` | 是否支持GMS。  取值范围：   * 0：不支持 * 1：支持   默认值：0 |
| os | O | `Integer (32)` | 设备OS类型。  取值范围：   * 1：Android设备 此时**androidApiLevel**字段请尽量传递值，**harmonyApiLevel**字段如果获取不到的，则**harmonyApiLevel**字段可不传。 * 2：纯鸿蒙设备 此时**harmonyApiLevel**字段请尽量传递值，**androidApiLevel**字段如果获取不到的，则**androidApiLevel**字段可不传。 * 3：鸿蒙双框架系统 此时**androidApiLevel**和**harmonyApiLevel**字段请尽量传递值，如果获取不到的，则可不传。 |
| osv | O | `String` | 设备操作系统版本号。  例如：8.0.0  关于具体版本号，以华为手机举例，在“设置 > 系统 > 关于手机”中查看“Android版本”或“HarmonyOS版本”字段对应的版本号。 |
| abis | O | `String` | 设备Abis，即设备的CPU类型。  此字段用于携带设备的芯片位数，例如32位或64位。 |
