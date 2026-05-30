---
title: "DeviceTypeInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-devicetypeinfo-0000002237336488
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceType | M | Integer | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 12：智能手表 * 14：运动手表   说明：  其他设备类型暂未开放。 |
| appAdapters | O | String | 适配设备类型。   * 5：平板 说明：  当deviceType为4（手机）时，系统会默认兼容分发到平板设备，即给appAdapters赋值5。 |
