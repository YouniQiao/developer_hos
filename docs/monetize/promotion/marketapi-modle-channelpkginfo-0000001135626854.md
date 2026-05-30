---
title: "ChannelPkgInfo"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-channelpkginfo-0000001135626854
---
# ChannelPkgInfo

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| appId | M | String | 应用ID。  最大长度32。 |
| appCnName | M | String | APP中文名称。  最大长度512。 |
| appEnName | M | String | APP英文名称。  最大长度512。 |
| channel | M | String | 智能分包渠道号。  最大长度128。 |
| channelPkgId | M | Long | 智能分包ID。 |
| channelPkgName | M | String | 智能分包名称。  最大长度128。 |
| pkgName | M | String | 包名。  最大长度256。 |
| lastUpdateTime | M | String | 最近一次更新时间。  格式：YYYY-MM-DD hh:mm:ss |
| status | M | Integer | 智能分包状态。  取值范围：   - 1：已审核 - 2：已删除 |
