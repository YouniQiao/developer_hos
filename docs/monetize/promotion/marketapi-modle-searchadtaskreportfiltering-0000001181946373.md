---
title: "SearchAdTaskReportFiltering"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-searchadtaskreportfiltering-0000001181946373
---
# SearchAdTaskReportFiltering

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appIds | O | List&lt;String&gt;(10) | 需要查询推广数据的应用ID，一次最多支持查询10个应用。您的应用ID需要使用<strong>直客账号</strong>参考[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)获取。合作伙伴投放时需联系直客代为获取。 |
| taskIds | O | List&lt;Long&gt;(1000) | 需要查询推广数据的推广任务ID，一次最多支持查询10个推广任务，待查询的推广任务必须是appIds中指定应用的推广任务。推广任务ID可登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“管理推广任务”列表中查看。 |
| regions | O | List&lt;String&gt;(10) | 任务投放区域，取值为ISO国家码，一次最多支持查询10个区域，具体国家码列表参考[国家码](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-reference-countrycode-0000001111845110)。默认为CN。 |
| searchkeys | O | List&lt;String&gt;(50) | 搜索词。 |
| subTaskIds | O | List&lt;String&gt;(1000) | 需要查询推广数据的子任务ID。 |
