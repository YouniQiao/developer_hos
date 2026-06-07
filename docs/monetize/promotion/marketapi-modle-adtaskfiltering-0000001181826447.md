---
title: "AdTaskFiltering"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-adtaskfiltering-0000001181826447
format: md
---

# AdTaskFiltering

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appIds | O | List&lt;String&gt;(10) | 需要查询推广数据的应用ID，一次最多支持查询10个应用，您的应用ID需要使用<strong>直客账号</strong>参考[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)获取。合作伙伴投放时需联系直客代为获取。 |
| taskIds | O | List&lt;String&gt;(10) | 需要查询推广数据的推广任务ID，一次最多支持查询10个推广任务，待查询的推广任务必须是appIds中指定应用的推广任务。推广任务ID可登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“管理推广任务”列表中查看。 |
| taskName | O | String | 任务名称查询，要求全词匹配。  最大长度50。 |
| appName | O | String | 应用名称，要求全词匹配。  最大长度512。 |
| deliverStartTime | O | String | 投放开始时间。  时间格式：YYYY-MM-DD  最大长度128。 |
| deliverEndTime | O | String | 投放结束时间。  时间格式：YYYY-MM-DD  最大长度128。 |
| status | O | String | 任务状态。  取值范围：   - DELETE：删除状态 - RUN：运行状态 - DRAFT：草稿状态 |
| regions | O | List&lt;String&gt;(10) | 任务投放区域，取值为ISO国家码。  一次最多支持查询10个区域。  具体国家码列表参考[国家码](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-reference-countrycode-0000001111845110)。 |
| pricingType | O | String | 计费类型。  取值范围：   - CPD：下载付费，根据实际下载量收费 - CPT：按时长付费 - OCPD：系统智能调价，按下载次数计费 - CPM：按展示计费 - CPC：按点击计费 |
| deliveryMode | O | String | 投放模式。  取值范围：   - 0：系统投放 - 1：影子投放 - 4：搜索大卡 - 5：RTA |
| mediaChannel | O | String | 推荐位类型。  取值范围：   - 243728192482956951：精选推荐 - 243728192482999989：全域推荐 - STARCOUPON：耀星推荐 - SEARCH：应用搜索 - SPARKLESEARCH：焦点展台 - 609388172356808219：创意推广 - 609388166390025910：图文合约-套餐 - 609388166345521113：图文合约-单资源 - 243728192431670031：图文合约-单资源（二叶草） - 243728192430492145：榜单合约 - 609388166675156141：品牌推荐区（新） - 243728192460783726 ：卸载召回-推荐 - 243728192460784109：卸载召回-搜索 - 461314520535104927：NOBID - 389256930994255706：推广 |
