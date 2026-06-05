---
title: "ReportMediaInfo"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_if_reportmediainfo-0000001456160032
format: md
---



![](./img/agd_pro_sdk_if_reportmediainfo-0000001456160032_0.png)

* **timeSwitch**字段为**1**时（即按天统计），**mediaPkgName**和**slotIds**字段不能同时为空。
* **timeSwitch**字段为**2**时（即按小时统计），**mediaPkgName**、**slotIds**和**channelIds**字段不能同时为空。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| mediaPkgName | O | `String` | 媒体包名。 |
| slotIds | O | List`String` | 展示位ID。  一个媒体包名最大支持传100个展示位ID。 |
| channelIds | O | List`String` | 渠道号。  一个媒体包名最大支持传100个渠道号。 |
