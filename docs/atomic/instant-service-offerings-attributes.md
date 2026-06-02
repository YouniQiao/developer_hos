---
title: "商品属性说明"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-offerings-attributes
---

商品属性是描述商品特征的核心信息，其结构由商品所属类目决定，不同类目对应不同的属性集合。开发者在创建更新商品时，仅可传入当前类目下定义的合法属性。商品属性分为公共属性和类目特有属性：公共属性适用于所有类目；类目特有属性则针对特定类目定义。此外，属性还分为商品级属性和SKU级属性，分别用于描述商品整体信息和具体规格（SKU）的差异化信息。开发者在调用接口时，需依据类目属性定义准确传入对应属性值，确保数据合规与展示正确。

## 商品属性

### 公共属性

| 属性Key | 是否必选 | 参数类型 | 描述 | 示例值 |
| --- | --- | --- | --- | --- |
| sellingPointTag | 否 | List\&lt;String\&gt; | 导购标签。  每组推荐词不超过6个字符，最多10组。 | ["标签1","标签2"] |
| supportedDeliveryMode | 否 | List\&lt;DeliveryMode\&gt; | 实物商品支持的配送信息：商品配送方式及门店列表。 | [&#123;  "deliveryTypeIds": [1,2],  "shopIds": [  "13047733319470939112",  "13047733319470939113"  ],  "allShops": false  &#125;] |
| venueApplicableScope | 否 | Object | 虚拟商品（票务、兑换码、优惠券等），门店适用范围。  isAllVenuesAvailable 是否全部门店适用。  availableVenueIds 当isAllVenuesAvailable为false时填入该字段，该字段取值必须是审核通过的平台侧门店ID venueId。 | &#123;  "isAllVenuesAvailable": false,  "availableVenueIds": [  "4694271539463639964",  "1041997528824971688"  ]  &#125; |

**DeliveryMode**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| deliveryTypeIds | 是 | List\&lt;Integer\&gt; | 配置方式ID列表。配送方式ID定义：  1 支持自提。  2 支持同城外送。  3 快递。 |
| allShops | 是 | Boolean | 通过门店管理录入的全部门店是否均支持配送。 |
| shopIds | 条件必选 | List\&lt;String\&gt; | allShops为true时不需要填入。allShops为false时必须填入。  对应配送方式的门店ID列表。取值为通过门店管理录入通过的平台侧门店ID（venueId）。 |

### 电影票务（30000399）属性

| 属性Key | 是否必选 | 参数类型 | 描述 | 示例值 |
| --- | --- | --- | --- | --- |
| directors | 是 | List\&lt;String\&gt; | 导演列表。 | ["导演1","导演2"] |
| mainActors | 是 | List\&lt;String\&gt; | 主演列表。 | ["主演1","主演2"] |
| duration | 是 | Integer | 时长。 | 120 |
| distributor | 是 | String | 发行商。 | 万达 |
| releaseDate | 是 | String | 上映日期。  yyyy-MM-dd格式。 | 2025-02-02 |
| rating | 否 | String | 评分。 | 8.85 |
| genre | 是 | List\&lt;String\&gt; | 影片类型。 | ["科幻", "冒险"] |

### 微短剧（30000012）属性

| 属性Key | 是否必选 | 参数类型 | 描述 | 示例值 |
| --- | --- | --- | --- | --- |
| directors | 是 | List\&lt;String\&gt; | 导演列表。 | ["导演1","导演2"] |
| mainActors | 是 | List\&lt;String\&gt; | 主演列表。 | ["主演1","主演2"] |
| genre | 是 | List\&lt;String\&gt; | 影片类型。 | ["科幻", "冒险"] |
| totalEpisodes | 否 | Integer | 总集数。 | 50 |
| releaseYear | 否 | String | 发行年份。 | 2025 |
| recordNumber | 是 | String | 广电备案号。 | （浙）剧审字（2024）第012号 |

## SKU属性

### 电影票务（30000399）SKU属性

| 属性Key | 是否必选 | 参数类型 | 描述 | 示例值 |
| --- | --- | --- | --- | --- |
| venueId | 否 | String | 电影院ID。  该字段取值必须是审核通过的平台侧门店ID venueId。 | "6481315716830333000" |
| showStartTimes | 否 | List\&lt;String\&gt; | 电影场次时间列表。  格式化时间数组，每个元素的格式为YYYY-MM-DDTHH:mm:ss±HH:mm。 | ["2025-08-01T19:30:03+08:00","2025-08-01T19:30:03+08:00"] |
