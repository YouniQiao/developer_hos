---
title: "TaskDetail"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-taskdetail-0000001135467068
format: md
---

# TaskDetail

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| appId | O | String | 任务关联APPID。 |
| appName | O | String | 任务关联APP名称。 |
| channelPkgId | O | String | 智能分包渠道号。 |
| channelPkgName | O | String | 智能分包名称。 |
| channel | O | String | 开发者指定渠道号。 |
| userId | O | String | 创建者ID。 |
| taskType | O | String | 任务类型。  取值范围：   - 243728192482956951：精选推荐 - 243728192482999989：全域推荐 - STARCOUPON：耀星推荐 - SEARCH：应用搜索 - SPARKLESEARCH：焦点展台 - 609388172356808219：创意推广 - 609388166390025910：图文合约-套餐 - 609388166345521113：图文合约-单资源 - 243728192431670031：图文合约-单资源（二叶草） - 243728192430492145：榜单合约 - 609388166675156141：品牌推荐区（新） - 243728192460783726 ：卸载召回-推荐 - 243728192460784109：卸载召回-搜索 - 461314520535104927：NOBID - 389256930704904878：应用促活 - 244367601397077345：大卡智投CPD - 244367601465651123：大卡智投oCPD - 460540374561610146：首页焦点图 - 389256930994255706：推广 |
| deliveryMode | O | String | 投放模式。  取值范围：   - 0：系统投放 - 1：影子跟随 - 3：助推计划 - 4：搜索大卡 - 5：RTA - 6：合约 - 7：内容推荐 |
| trafficScenarios | O | List&lt;Integer&gt; | 流量场景。  取值范围：   - 1：应用市场。表示投放到华为应用市场及精选流量。 - 2：同1含义相同。 - 3：华为媒体。表示投放到除华为应用市场之外的其他华为媒体。 - 4：联盟媒体。表示投放到非华为的其他三方合作媒体。 |
| pricingType | O | String | 计费类型。  取值范围：   - CPD：按下载次数计费 - OCPD：系统智能调价，按下载次数计费 - CPC：按点击计费 - CPM：按展示计费 - CPT：按时长计费 |
| taskId | M | Long | 任务ID。 |
| taskName | O | String | 任务名称。 |
| status | O | String | 任务状态。  <strong>BIDDING PENDING</strong>（竞价中-待处理），<strong>BIDDING LEAD</strong>（竞价中-领先），<strong>BIDDING BACKWARD</strong>（竞价中-落后），这三个取值对应的竞得资源或未竞得资源是针对CPT任务。竞价成功才会投放此CPT任务。  取值范围：   - DRAFT：草稿 - AUDIT PENDING：待审核 - AUDITED：审核通过 - REJECTED：驳回 - RUN：执行 - SUSPENDED：暂停 - DONE：完成 - CANCELED：取消 - TERMINATE：强制取消 - DELETE：删除 - BIDDING PENDING：竞价中-待处理 - BIDDING LEAD：竞价中-领先 - BIDDING BACKWARD：竞价中-落后 - WIN THE BID：竞得资源 - LOSS THE BID：未竞得资源 - FROZEN：冻结 - DONE DELETE：完成状态被删除 |
| materialStatus | O | String | 素材状态。 |
| siteId | O | String | 站点ID。 |
| siteName | O | String | 站点名称。 |
| slotId | O | String | 展位ID。  仅在字词推荐/品牌推荐的场景下使用。 |
| budget | O | Double | 每日预算。 |
| startDate | O | String | 投放开始日期。  格式：YYYY-MM-DD |
| endDate | O | String | 投放结束日期。  格式：YYYY-MM-DD |
| deliveryHours | O | List&lt;[DeliveryHour](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-deliveryhour-0000001181826453)&gt; | 投放时段。  允许为空数组。 |
| conversionBehavior | O | String | 转换目标行为。  格式为数字，1代表激活，7代表注册。 |
| excludeBehavior | O | String | 排除目标行为。 |
| regions | O | String | 投放区域，使用ISO国家码。  中国默认CN。多个区域用逗号分割。 |
| negativeRegions | O | String | 反向投放区域，使用ISO国家码。  中国默认CN。多个区域用逗号分隔。 |
| isPositiveRegion | O | String | 是否正向选择区域。  取值范围：   - Y：是，表示投放在region范围内 - N：否，表示投放在region范围外的其他国家 - All：表示在所有国家投放 |
| deliverySwitch | O | Integer | 通投任务开关。  取值范围：   - 0：关 - 1：开   默认值：0 |
| deliveryPrice | O | Double | 出价。 |
| autoAddPrice | O | Integer | 是否自动加价。 |
| maxPrice | O | Double | 最高出价。 |
| subTasks | O | List&lt;[SubTaskDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-subtaskdetail-0000001181826459)&gt; | 子任务列表。 |
| negativeKeyWords | O | List&lt;[NegativeKeyWordDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-negativekeyworddetail-0000001135626858)&gt; | 否向关键词。 |
| isExcludeInstalledApp | O | Integer | 是否排除已安装。 |
| attributionMode | O | Integer | 归因方式。  取值范围：   - 0：无归因监测 - 1：自定义归因监测 - 2：华为分析归因监测 |
| impAdMonitorReportUrl | O | String | 精准曝光上报监控链接。 |
| clickAdMonitorReportUrl | O | String | 点击上报监控链接。 |
| downloadAdMonitorReportUrl | O | String | 下载上报监控链接。 |
| installAdMonitorReportUrl | O | String | 安装上报监控链接。 |
| deeplinkClickAdMonitorReportUrl | O | String | 大卡点击上报监控链接。 |
| searchBrandContent | O | [SearchBrandContent](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-searchbrandcontent-0000001135626860) | 搜索大卡相关素材信息。 |
| brandContent | O | [BrandContent](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-brandcontent-0000001181946367) | 品牌/字词推荐CPT任务。 |
| cpdVideoContent | O | [CpdVideoContent](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-cpdvideocontent-0000001135467060) | 普通CPD素材信息。 |
| browserContent | O | [BrowserContent](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-browsercontent-0000001135467058) | 浏览器信息流素材信息。 |
| fixPositionContent | O | [FixPositionContent](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-fixpositioncontent-0000001135467070) | 固定活动位相关素材信息。 |
| physChannelPkgId | O | String | 物理渠道包ID。 |
| installExp | O | Integer | 是否支持应用秒开。  取值范围：   - 0：不支持秒开/关闭秒开 - 1：开启秒开 |
| physChannelPkgName | O | String | 物理渠道包名称。 |
