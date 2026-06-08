---
title: "查询搜索类推广任务统计报表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-searchadreport-0000001181946363
format: md
upstream_id: monetize/promotion/marketapi-searchadreport-0000001181946363
last_sync: 2026-06-07
sync_hash: 03c1e19e
---
# 查询搜索类推广任务统计报表

## 功能介绍

获取搜索类推广任务的报表数据。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/searchad |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String(header) | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String(header) | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access\_token。 |

![](./img/caution_3.0-zh-cn_106d64d57ad5.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| startDate | M | String(16) | 查询开始时间。  格式：YYYY-MM-DD |
| endDate | M | String(16) | 查询结束时间。  格式：YYYY-MM-DD  不能超过开始时间31天。 |
| page | O | Integer | 分页查询时指定返回数据的页码。  取值范围大于等于1。  默认值：1，表示第1页。 |
| pageSize | O | Integer | 分页查询时指定返回数据每页的条数。  取值范围：[1,1000]  默认值：20 |
| pricingType | O | String | 计费类型。  取值范围：   - CPD：按下载次数计费 - OCPD：系统智能调价，按下载次数计费 - CPC：按点击计费 - CPT：按时长计费 |
| orderField | O | String(16) | 返回数据的排序方式。  取值范围：   - DATE：按统计日期排序 - COST：按消耗金额排序 - SHOW：按服务端展示量排序 - EXPOSURE：按展示量排序 - CLICK：按点击量排序 - DOWNLOAD：按下载量排序   默认值：DATE |
| orderType | O | String(16) | 返回数据升序还是降序排序。  取值范围：   - DESC：降序排序 - ASC：升序排序   默认值：DESC |
| groupby | O | List&lt;String&gt;(10) | 返回数据的分组方式。  取值范围：   - statDate：按统计日期分组 - taskId：按任务ID分组 - region：按任务投放区域分组 - searchkey: 搜索词 - matchType：匹配方式 - matchKey：任务中匹配的投放词 - subTaskId：按子任务ID分组   默认值：statDate  可同时支持多种分组方式。 |
| customerId | O | String(64) | 直客团队协作者的内部ID。  直客团队协作者查询时必须携带，该字段请使用<strong>协作者账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。  <strong>说明：</strong>   - 协作者查询时，会使用此字段与直客管理者账户ID校验从属关系，再根据此字段查询报表。 - 代理模式不支持携带此字段。 |
| filtering | O | [SearchAdTaskReportFiltering](/docs/monetize/promotion/marketapi-modle-searchadtaskreportfiltering-0000001181946373) | 本次查询的过滤条件。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/searchad
Content-type: application/json
Authorization: Bearer ***
client_id:***

{
    "startDate":"2021-04-06",
    "endDate":"2021-04-20",
    "page": 1,
    "pageSize": 10,
    "pricingType": "CPD",
    "orderField": "DATE",
    "orderType": "ASC",
    "customerId": "12345",
    "groupby": [
	"statDate","taskId","region","searchkey","matchType","matchKey","subTaskId"
    ],
    "filtering": {
      "subTaskIds": [],
      "taskIds":[],
      "appIds":[],
      "regions":[],
      "searchkeys":[]
  }
}
```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回码描述信息。 |
| total | O | Integer(64) | 总记录数。 |
| datas | O | List&lt;[SearchAdTaskStatistic](/docs/monetize/promotion/marketapi-modle-searchadtaskstatistic-0000001135467064)&gt; | 推广任务详情。 |

## 响应示例

```
{
    "code": 20770001,
    "msg": "success",
    "total": 1,
    "datas": [{
        "statDate": "2021-04-19",
        "taskId": "0", // 不是按照任务ID分组，默认0
        "subTaskId": "1390472483966025472", // 不是按照任务ID分组，默认0
        "region": "CN",
        "searchKey": "斗",
        "matchKey": "抖抖",
        "matchType": "FUZZY",
        "cost": 16.32,
        "show": 0,
        "exposure": 76,
        "download": 12,
        "downloadRate": 0.024,
        "downloadAverageCost":  1.36,
        "rank": 3.46
}]
}
```

## 调用示例

```
“Curl”
curl-X POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/searchad -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json"  -d '{"startDate":"2021-04-06","endDate":"2021-04-20"}'
```
