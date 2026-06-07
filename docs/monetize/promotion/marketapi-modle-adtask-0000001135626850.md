---
title: "AdTask"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-adtask-0000001135626850
format: md
---

# AdTask

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| taskId | O | String | 任务ID。  可登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)查看。 |
| taskName | O | String | 任务名称。 |
| appId | O | String | 应用ID。 |
| appName | O | String | 应用名称。 |
| status | O | String | 任务状态。  <strong>BIDDING PENDING</strong>（竞价中-待处理），<strong>BIDDING LEAD</strong>（竞价中-领先），<strong>BIDDING BACKWARD</strong>（竞价中-落后），这三个取值对应的竞得资源或未竞得资源是针对CPT任务。竞价成功才会投放此CPT任务。  取值范围：   - DRAFT：草稿 - AUDIT PENDING：待审核 - AUDITED：审核通过 - REJECTED：驳回 - RUN：执行 - SUSPENDED：暂停 - DONE：完成 - CANCELED：取消 - TERMINATE：强制取消 - DELETE：删除 - BIDDING PENDING：竞价中-待处理 - BIDDING LEAD：竞价中-领先 - BIDDING BACKWARD：竞价中-落后 - WIN THE BID：竞得资源 - LOSS THE BID：未竞得资源 - FROZEN：冻结 - DONE DELETE：完成状态被删除 |
| pricingType | O | String | 计费模式：  取值范围：   - CPD：按下载次数计费 - CPT：按时长付费 - CPC：按点击计费 - OCPD：系统智能调价，按下载次数计费。 - CPM：按展示计费 - CPF：按次计费。此值为预留字段，实际未使用。 |
| deliveryMode | O | String | 投放模式。  取值范围：   - SYSTEMDELIVERY：系统投放 - BIDFOLLOW：影子跟随 |
| trafficScenarios | O | List&lt;Integer&gt; | 流量场景。  取值范围：   - 1：应用市场。表示投放到华为应用市场及精选流量。 - 2：同1含义相同。 - 3：华为媒体。表示投放到除华为应用市场之外的其他华为媒体。 - 4：联盟媒体。表示投放到非华为的其他三方合作媒体。 |
| mediaChannel | O | String | 推荐位类型。  取值范围：   - 243728192482956951：精选推荐 - 389256930994255706：推广 - 243728192482999989：全域推荐 - STARCOUPON：耀星推荐 - SEARCH：应用搜索 - SPARKLESEARCH：焦点展台 - 609388172356808219：创意推广 - 609388166390025910：图文合约-套餐 - 609388166345521113：图文合约-单资源 - 243728192431670031：图文合约-单资源（二叶草） - 243728192430492145：榜单合约 - 609388166675156141：品牌推荐区（新） - 243728192460783726 ：卸载召回-推荐 - 243728192460784109：卸载召回-搜索 - 461314520535104927：NOBID - 389256930704904878：应用促活 - 244367601397077345：大卡智投CPD - 244367601465651123：大卡智投oCPD - 460540374561610146：首页焦点图 |
| deliverStartTime | O | String | 投放开始时间。 |
| deliverEndTime | O | String | 投放结束时间。 |
| deliveryHours | O | List&lt;[DeliveryHour](/docs/monetize/promotion/marketapi-modle-deliveryhour-0000001181826453)&gt; | 投放时段。  允许为空数组。 |
| price | O | Double | 通用出价。  单位：元 |
| budget | O | Double | 每日预算。  单位：元 |
