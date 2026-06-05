---
title: "批量修改搜索关键词出价"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-searchkeywordprice-0000001135467046
format: md
---

# 批量修改搜索关键词出价

## 功能介绍

批量修改搜索关键词的出价。

## 使用约束

- 当前只支持计费类型为CPD，推荐位类型为应用搜索和焦点展台的推广任务。
- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/searchKeywordprice |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_a422c3466e7a.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskSearchKeyWord | M | List&lt;[SearchKeyWord](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-searchkeyword-0000001181826457)&gt; | 需要修改的任务关键词。 |
| price | M | Double | 新的出价。  最多保留两位小数。  例如：2.21 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/searchKeywordprice
Content-type: application/json
Authorization: Bearer ***
client_id:***

{
         
  "taskSearchKeyWord":
  [
   {
     "taskId": 200052685,
     "subTaskId": 1447707506246942744,
     "keyword": "331",
     "matchType": "FUZZY",
   }
  ],
  "price":14
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| failedTasks | O | List&lt;[TaskFailedDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-taskfaileddetail-0000001135626864)&gt; | 失败任务原因说明。 |

## 响应示例

```
{   
    "code": 20770001,
    "msg": "success",
    "failedTasks": []
}
```

## 调用示例

```
“Curl”
curl -H "Content-type: application/json" -H "Authorization:Bearer   ***" -H "client_id:***"
 -X PUT -d '{"customerId":"","taskSearchKeyWord":[{"taskId": 200052685,"keyword": "331","matchType": "FUZZY","subTaskId": 1447707506246942744}],"price":14}' https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/searchKeywordprice
```
