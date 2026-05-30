---
title: "功能介绍"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-marketing_api-introduction-0000001435753917
---
# 功能介绍

您可以使用Marketing API创建投放任务，也可以查询华为应用市场应用推广平台中的推广任务统计报表和搜索类推广任务统计报表数据。

## API调用前提

您在调用Marketing API之前，需要在开发者联盟后台完成账号注册，实名认证等准备工作。

直客请参考[直客操作指南](https://developer.huawei.com/consumer/cn/doc/promotion/bp-start-guest-overview-0000001294014938)，客户投放伙伴请参考[客户投放伙伴操作指南](https://developer.huawei.com/consumer/cn/doc/promotion/bp-start-customer-partner-0000001323978477)。

只支持已实名认证的直客账户或者客户投放伙伴主账户（一级服务商）调用。若您的直客账户或者客户投放伙伴主账户下有多个应用，使用直客账户或者客户投放伙伴主账户的API权限直接调用即可。

## 获取API客户端授权

Marketing API只支持API客户端方式访问，在访问前您需获取服务端授权，包括创建API客户端和获取访问API的Access Token，具体参见[获取API客户端授权](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section1679462873111)。

![](./img/0000000000011111111.20260303164840.51244444084638904388401875534845:50001231000000:2800:D292A331C627BA3B3D53D58F38068CE3036D01D71CAA2A394B4FBE3EF9B6DBC5_beb55de544c0.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账户</strong>创建API客户端和获取Access Token。

## 创建投放任务

请根据您的适用场景，参考对应接口创建投放任务：

| 任务类型 | 投放模式 | 计费类型 | API接口 |
| --- | --- | --- | --- |
| 精选推荐 | 系统投放 | CPD | [精选推荐-系统投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-top-sys-cpd-0000001313837264) |
| 系统投放 | oCPD | [精选推荐-系统投放-OCPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-top-sys-ocpd-0000001366046005) |
| 影子投放 | CPD | [精选推荐-影子投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-top-shadow-cpd-0000001366205869) |
| RTA | CPD | [精选推荐-RTA投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-top-rat-cpd-0000001314157208) |
| 全域推荐 | 系统投放 | CPD | [全域推荐-系统投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-global-sys-cpd-0000001366206389) |
| 系统投放 | oCPD | [全域推荐-系统投放-OCPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-global-sys-ocpd-0000001314157736) |
| 影子投放 | CPD | [全域推荐-影子投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-global-shadow-cpd-0000001366526321) |
| RTA | CPD | [全域推荐-RTA投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-global-rat-cpd-0000001366366345) |
| 耀星榜单 | 系统投放 | CPD | [耀星榜单-系统投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask14-0000001135626822) |
| 应用搜索 | 系统投放 | CPD | [应用搜索-系统投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask15-0000001181826425) |
| 系统投放 | oCPD | [应用搜索-系统投放-OCPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask16-0000001181946343) |
| 影子投放 | CPD | [应用搜索-影子投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask17-0000001135467036) |
| 搜索大卡 | CPM | [应用搜索-搜索大卡-CPM任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask18-0000001135626826) |
| 焦点展台 | 系统投放 | CPD | [焦点展台-系统投放-CPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask19-0000001181826427) |
| 系统投放 | oCPD | [焦点展台-系统投放-OCPD任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask20-0000001181946345) |
| 图文合约区 | 系统投放 | CPT | [图文合约区-系统投放-CPT任务](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adtask21-0000001135626832) |

## 获取报表数据

您可以通过Marketing API查询推广平台的大部分数据报告，包括推广任务的展示量、点击量、下载量、深度转化次数等，请使用[查询推广任务统计报表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adreport-0000001181826445)、[查询推广子任务统计报表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-adsubtaskreport-0000001200757735)、[查询搜索类推广任务统计报表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-searchadreport-0000001181946363)或[查询推广任务列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-queryadtasklist-0000001135467040)接口直接从推广平台服务端获取该报表数据。
