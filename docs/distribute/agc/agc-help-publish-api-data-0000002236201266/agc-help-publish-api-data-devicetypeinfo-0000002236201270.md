---
title: "DeviceTypeInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicetypeinfo-0000002236201270
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicetypeinfo-0000002236201270
last_sync: 2026-06-07
sync_hash: 404f95b3
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceType | M | Integer(32) | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 8：智慧屏 * 12：智能手表 * 14：运动手表 * 19：PC/2in1 |
| appAdapters | O | String(32) | 适配设备类型。  取值范围：   * 5：平板 说明：  当deviceType为4（手机）时，系统会默认兼容分发到平板设备，即给appAdapters赋值5。 * 19：PC/2in1 |
| remoteControl | O | String(16) | 遥控设备。  取值范围：   * 1：遥控器   说明：  当设备类型为智慧屏，即deviceType为8时，此字段才需填写。 |
