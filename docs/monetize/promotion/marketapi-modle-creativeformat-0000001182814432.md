---
title: "CreativeFormat"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-creativeformat-0000001182814432
---
# CreativeFormat

| 字段 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| category | O | Integer | 场景。枚举值如下：   - 0：合约 - 1：推荐 - 2：搜索 |
| creativeFormatId | O | String | 创意规格ID。 |
| creativeFormatType | O | String | 展示类型枚举值：大卡单图、大卡双图、大卡三图、大卡GIF、大卡视频、竖版视频等。 |
| creativeFormatTypeDesc | O | String | 展示类型中文描述。 |
| creativeFormatTypeDescEn | O | String | 展示类型英文描述。 |
| materialFormats | O | List&lt;[MaterialFormat](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-materialformat-0000001227735035)&gt; | 素材规格列表。 |
