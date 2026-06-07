---
title: "AddDeviceInfo"
original_url: /docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-adddeviceinfo-0000002236201314
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceName | M | String(100) | 设备名称。 |
| udid | M | String(64) | 设备UDID。 |
| deviceType | M | Integer(32) | 设备类型。  取值范围：   * 1：运动手表 * 2：智能手表 * 4：手机 * 5：平板 * 8：智慧屏 * 19：PC/2in1 |
