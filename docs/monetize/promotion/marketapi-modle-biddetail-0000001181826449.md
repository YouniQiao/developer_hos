---
title: "BidDetail"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-biddetail-0000001181826449
format: md
---

# BidDetail

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskId | M | Long | 返回码。 |
| promoteDay | M | String | 推广日。 |
| isProxyBid | M | String | 是否自动加价。 |
| proxyMaxPrice | M | Double | 代理加价最高价。  取值为整数。  单位：元 |
| bidStatus | M | String | 竞标状态。  取值范围：   - LEAD：领先 - BACKWARD：落后 - WIN：中标 |
| price | M | Double | 当前竞标价格。 |
| bidTime | M | String | 竞标时间。 |
| backwardReason | M | String | 落后原因。 |
