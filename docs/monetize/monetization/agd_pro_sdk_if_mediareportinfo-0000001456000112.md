---
title: "MediaReportInfo"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_if_mediareportinfo-0000001456000112
format: md
upstream_id: monetize/monetization/agd_pro_sdk_if_mediareportinfo-0000001456000112
last_sync: 2026-06-07
sync_hash: 761077d4
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| mediaPkgName | M | `String` | 媒体包名。 |
| mediaName | M | `String` | 媒体名称。 |
| slotId | M | `String` | 展示位ID。 |
| slotName | M | `String` | 展示位名称。 |
| date | M | `String` | 日期。 |
| impression | M | `String` | 展示量。 |
| clickAmount | M | `String` | 点击量。 |
| ecpm | M | float | eCPM。  单位：分/千次曝光 |
| estimatedBenefits | M | `String` | 预估收益。  实际结算金额请以结算单为准。  单位：元 |
| channelId | M | `String` | 渠道号。  **说明：**仅**timeSwitch**字段为**2**时（即按小时统计的报表），支持**channelId**字段。 |
