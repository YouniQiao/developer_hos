---
title: "QuerySubTaskCondition"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-querysubtaskcondition-0000001227855463
---
# QuerySubTaskCondition

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| subTaskName | O | String | 子任务名称，支持模糊查询。 |
| subTaskStatus | O | List&lt;String&gt; | 子任务状态。 |
| appId | O | String | 应用ID。 |
| deliveryMode | O | Integer | 投放模式。  取值范围：   - 0：系统投放 - 1：影子投放 - 4：搜索大卡 - 5：RTA |
| taskType | O | List&lt;String&gt; | 任务类型。  枚举值如下：   - 243728192482956951：精选推荐 - 389256930994255706：推广 - 243728192482999989：全域推荐 - STARCOUPON：耀星推荐 - SEARCH：应用搜索 - SPARKLESEARCH：焦点展台 - 609388172356808219：创意推广 - 609388166390025910：图文合约-套餐 - 609388166345521113：图文合约-单资源 - 243728192431670031：图文合约-单资源（二叶草） - 243728192430492145：榜单合约 - 609388166675156141：品牌推荐区（新） - 243728192460783726 ：卸载召回-推荐 - 243728192460784109：卸载召回-搜索 |
| pricingType | O | List&lt;String&gt; | 计费类型。  取值范围：   - CPD：按下载次数计费 - OCPD：系统智能调价，按下载次数计费 - CPC：按点击计费 - CPM：按展示计费 - CPT：按时长计费 |
| conversionBehaviorId | O | String | 转换目标。枚举值参考如下：  1：激活应用，历史首次激活应用。  2：启动应用。  3：次日留存，次日仍然使用应用。  4：付费，在应用内发生付费行为。  5：提交表单，在应用内提交表单。  6：授信，发生应用内的授信行为。  7：注册，注册应用或服务。  9：线索收集页面访问，用户在线索留资界面的访问行为。  10：老客激活，流失用户再次激活。  14：申请，申请服务。  18：下单，购物清单正式生成订单。  21：预约，预约商品、内容或服务。  101：关键行为1，自定义关键行为1。  102：关键行为2，自定义关键行为2。 |
| subTaskKey | O | String | 搜索词。 |
| subTaskKeyMatchType | O | String | 匹配类型。枚举值如下：   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskRtaId | O | String | RTA ID。 |
| page | O | Integer | 子任务列表页页数。 |
| pageSize | O | Integer | 单页任务条数。 |
