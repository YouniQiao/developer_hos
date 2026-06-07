---
title: "批量查询子任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-subtask-batchsearch-0000001218695334
format: md
---

# 批量查询子任务

## 功能介绍

批量查询推广任务子任务详情。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

此接口不支持查询合约型的子任务。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/query/subTaskList |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_2fd9a2d3b065.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| subTaskName | O | String | 子任务名称，支持模糊查询。 |
| subTaskStatus | O | List&lt;String&gt; | 子任务状态。 |
| appId | O | String | 应用ID。 |
| deliveryMode | O | Integer | 投放模式。  取值范围：   - 0：系统投放 - 1：影子投放 - 4：搜索大卡 - 5：RTA |
| taskType | O | List&lt;String&gt; | 任务类型。  取值范围：   - 243728192482956951：精选推荐 - 243728192482999989：全域推荐 - STARCOUPON：耀星推荐 - SEARCH：应用搜索 - SPARKLESEARCH：焦点展台 - 609388172356808219：创意推广 - 609388166390025910：图文合约-套餐 - 609388166345521113：图文合约-单资源 - 243728192431670031：图文合约-单资源（二叶草） - 243728192430492145：榜单合约 - 609388166675156141：品牌推荐区（新） - 243728192460783726 ：卸载召回-推荐 - 243728192460784109：卸载召回-搜索 - 389256930994255706：推广 |
| pricingType | O | List&lt;String&gt; | 计费类型。  取值范围：   - CPD：按下载次数计费 - OCPD：系统智能调价，按下载次数计费 - CPC：按点击计费 - CPM：按展示计费 - CPT：按时长计费 |
| conversionBehaviorId | O | String | 转换目标。  取值范围：   - 1：激活应用，历史首次激活应用。 - 2：启动应用。 - 3：次日留存，次日仍然使用应用。 - 4：付费，在应用内发生付费行为。 - 5：提交表单，在应用内提交表单。 - 6：授信，发生应用内的授信行为。 - 7：注册，注册应用或服务。 - 9：线索收集页面访问，用户在线索留资界面的访问行为。 - 14：申请，申请服务。 - 18：下单，购物清单正式生成订单。 - 21：预约，预约商品、内容或服务。 - 101：关键行为1，自定义关键行为1。 - 102：关键行为2，自定义关键行为2。 |
| subTaskKey | O | String | 搜索词。 |
| subTaskKeyMatchType | O | String | 匹配类型。  取值范围:   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskRtaId | O | String | RTA ID。 |
| page | O | Integer | 子任务列表页页数。 |
| pageSize | O | Integer | 单页任务条数。  取值范围：[1,200] |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/query/subTaskList
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 

{
        "subTaskName": "querySubTask",
	"appId": "546215",
	"deliveryMode": 0,
	"pricingType": ["OCPD"],
	"page": 1,
	"pageSize": 20
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| totalCount | O | Integer | 总数。  最大长度64。 |
| subTaskDetail | O | List&lt;[SubTaskDetailExt](/docs/monetize/promotion/marketapi-modle-subtaskdetailext-0000001182370048#ZH-CN_TOPIC_0000001741123784__table181165012410)&gt; | 失败任务原因说明。 |

## 响应示例

```
{
  "code": 20770001,
  "msg": "Success",
  "totalCount": 1,
  "subTaskDetail": [
    {
      "subTaskId": 563324,
      "subTaskName": "querySubTask",
      "subTaskPrice": 20.0,
      "subTaskStatus": "ON",
      "subTaskPricingType": "OCPD",
      "taskId": 533315
    }
  ]
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/status  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"code":20770001,"msg":"Success","totalCount":1,"subTaskDetail":[{"subTaskId":563324,"subTaskName":"querySubTask","subTaskPrice":20.0,"subTaskStatus":"ON","subTaskPricingType":"OCPD","taskId":533315}]}'
```
