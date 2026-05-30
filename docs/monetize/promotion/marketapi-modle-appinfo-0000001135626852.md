---
title: "AppInfo"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-appinfo-0000001135626852
---
# AppInfo

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| appId | M | String | APP唯一标识。 |
| allianceAppId | M | String | 联盟ID。 |
| name | M | String | 应用名。 |
| icon | M | String | 应用icon地址。 |
| pkgName | M | String | 应用包名。 |
| intro | O | String | 一句话描述。  最大长度128。 |
| oneLevelId | M | String | 一级分类ID。 |
| secondLevelId | O | String | 二级分类ID。 |
| promoteRegions | M | List&lt;String&gt; | 可推广的国家列表。 |
