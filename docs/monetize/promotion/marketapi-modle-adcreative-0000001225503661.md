---
title: "AdCreative"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-adcreative-0000001225503661
format: md
---

# AdCreative

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| id | O | Long | 创意ID。 |
| belongCreativeId | O | Long | 预审创意Id。 |
| taskId | O | Long | 任务ID。 |
| subTaskId | O | Long | 子任务Id。 |
| groupName | O | String | 创意分组中文名称。 |
| groupNameEN | O | String | 创意分组英文名称。 |
| templateGroupName | O | String | 预审创意分组名称。 |
| externalCreativeId | O | String | 外部创意ID。 |
| creativeName | O | String | 创意名称。 |
| creativeType | O | Integer | 创意类型。取值范围：  1：用户自定义创意  2：系统自动生成创意  3：合约创意  4：三方DSP创建的创意 |
| creativeFormatId | O | String | 创意规格ID。 |
| creativeStatus | O | String | 创意状态。枚举值如下：  CREATIVE DRAFT：草稿(合约使用)  CREATIVE AUDIT PENDING：新建待审核  APPROVED：审核通过  CREATIVE MODIFY AUDIT PENDING：修改待审核  REJECTED：新建审核驳回  MODIFY REJECTED：修改审核驳回 |
| creativeSwitch | O | String | 创意开关。 |
| attachment | O | String | 创意使用资质证明。 |
| createTime | O | String | 创建时间。 |
| lastUpdateTime | O | String | 最近修改时间。 |
| materials | O | List[Material] | 创意素材信息。 |
| introCreative | O | [IntroCreative](/docs/monetize/promotion/marketapi-modle-introcreative-0000001180071292) | 介绍创意。 |
| openCreative | O | [OpenCreative](/docs/monetize/promotion/marketapi-modle-opencreative-0000001180229844) | 打开创意信息。 |
| recallWindowContent | O | RecallWindowContent | 召回弹窗内容。 |
| tagList | O | List&lt;CreativeThirdTag&gt; | 创意标签。 |

<strong>Material</strong>

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| materialKey | O | String | 素材类型Key值。 |
| materialValue | O | String | 素材内容。 |
| materialFileName | O | Integer | 素材文件名称。 |

<strong>RecallWindowContent</strong>

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| windowType | O | Integer | 弹窗类型。1-召回详情介绍，2-召回礼包。 |
| details | O | String | 召回详情介绍。 |
| giftCodeFileName | O | String | 礼包码文件名称。 |
| giftCodeFileUrl | O | String | 礼包码文件地址。 |
| giftCodeUsageDesc | O | String | 礼包码使用方法说明。 |
| giftCodeQuantity | O | Integer | 当前礼包码文件内的礼包码数量（礼包码容量）。 |

<strong>CreativeThirdTag</strong>

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| thirdTagId | O | String | 三级分类ID。 |
| thirdTagName | O | String | 三级分类名称。 |
