---
title: "DeviceInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-deviceinfo-0000002271000697
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String(32) | 设备信息的ID。 |
| deviceName | O | String(256) | 设备名称。 |
| udid | O | String(64) | 设备UDID。 |
| deviceType | O | Integer(32) | 设备类型。  取值范围：   * 1：运动手表 * 2：智能手表 * 4：手机 * 5：平板 * 8：智慧屏 * 19：PC/2in1 |
| createTime | O | String(100) | 设备创建时间。  UTC格式：*yyyy-MM-dd*'T'*HH:mm:ss.SSSZZ*  示例：2024-06-14 11:55:28.676 |
