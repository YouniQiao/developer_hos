---
title: "推荐-系统投放-OCPC任务"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-recommend-sys-ocpc-0000002489881848
---
# 推荐-系统投放-OCPC任务

## 功能介绍

创建“推荐-系统投放-OCPC任务”推广任务。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | &lt;https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task&gt; |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_d89b6368eb9b.png) 

若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。

若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| appId | M | String | 关联APP信息，填写联盟的ID，从[查询APP列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-queryappinfo-0000001181826439)中获取[allianceAppId](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-appinfo-0000001135626852#ZH-CN_TOPIC_0000001741282932__zh-cn_topic_0000001104833782_p4415152544620)字段。不以C开头的纯数字，例如101386125。 |
| taskType | M | String | 任务类型。本场景下固定配置为<strong>461314520477184955（即推荐）</strong>。 |
| deliveryMode | M | String | 投放模式。本场景下固定配置为<strong>0</strong> <strong>（即系统投放）</strong>。 |
| trafficScenarios | O | List&lt;Integer&gt; | 流量场景。本场景下固定配置为<strong>1（即应用市场</strong>）。枚举值说明如下：1：应用市场。表示投放到华为应用市场及精选流量。 |
| isExcludeInstalledApp | O | Integer | 仅投安装用户。0：不针对安装情况进行过滤，2：仅投放已安装APP用户。 |
| pricingType | M | String | 计费类型。本场景下固定配置为<strong>OCPC</strong>。枚举值说明如下：OCPC：系统智能调价，按点击次数计费。 |
| taskName | M | String | 推广任务名称。最长50个字符，不能包含如下特殊字符：&lt;>$#`;^。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到“华为账号”。 |
| budget | M | String | 每日预算，限制每天的花费。每天消耗超过本预算后，系统将会停止推广，第二天再推广。请填写整数，最低为500元，最高为10,000,000元（允许为0，代表不限制日预算）。修改后的日预算金额，不能低于当前已消费金额的105%，以整数为单位向上取整。 |
| startDate | M | String | 投放开始日期。格式为：YYYY-MM-DD此日期的00:00开始投放，未设置表示立即开始。 |
| endDate | M | String | 投放结束日期。格式为：YYYY-MM-DD此日期的23:59结束投放。说明结束日期和开始时间必须同时设置或者同时不设置，不设置的场景下表示会一直投放，直到余额用完。 |
| deliveryHours | M | List[[DeliveryHour](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-deliveryhour-0000001181826453)] | 投放时段。允许为空数组。 |
| regions | M | String | 投放区域，使用ISO国家码。默认中国CN。多个区域用逗号分隔isPositiveRegion为Y时，此字段必填。 |
| isPositiveRegion | M | String | 是否正向选择区域。国内投放填写为Y。取值范围：  Y：是，表示投放在region范围内，此时对应字段regions生效。  N：否，表示投放在region范围外的其他国家。  All：表示在所有国家投放，regions不生效。 |
| attributionMode | O | Integer | 记录行为监测归因方式。  3：应用归因  99：多方式归因 |
| impAdMonitorReportUrl | O | String | 精准曝光上报监控链接。格式如下，其中key需要您自定义，value为应用推广支持的宏参数，取值请参见[宏参数列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-macro-para-0000001454518626)。https://\*\*\*xxx.xxx.xxx/xxx\*\*\*?\*\*\*key1=value1&key2=value2\*\*\* |
| clickAdMonitorReportUrl | O | String | 点击上报监控链接。格式和样例参考[impAdMonitorReportUrl](https://developer.huawei.com/consumer/cn/doc/promotion/mktapi-adtask-top-sys-cpd-0000001313837264#ZH-CN_TOPIC_0000001741282852__zh-cn_topic_0000001176165925_p24321722553)参数。 |
| subTasks | M | List[CreateSubTask] | 子任务。 |
| campaignId | O | String | 计划Id；campaignId存在时表示用户选择已有草稿计划；否则取campaignInfo创建计划。 |
| campaignInfo | O | / | 创建计划请求体。 |

<strong>CreateSubTask</strong>

![](./img/caution_3.0-zh-cn_b43acbf7702b.png) 

此类型任务的子任务数上限为10。

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| subTaskName | M | String | 子任务名称。 |
| subTaskPrice | M | Double | 子任务出价。取值范围：[1,1000]，单位：元。 |
| conversionBehaviorId | M | String | 归因目标ID。格式为数字，1002代表平台激活，1003代表下载。 |
| subTaskUserGroupId | O | String | 子任务对应的定向ID，只能选择已启动定向。说明定向ID请从[新增标签定向](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-addtag-0000001181826407)或者[查询定向列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-querytaglist-0000001181946327)接口中获取。 |

<strong>CreateCampaignInfo</strong>

创建计划请求体。

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| campaignName | M | String | 计划名称。 |
| buyMode | M | Integer | 采买模式：  1：竞价；2：合约 |
| marketingGoal | M | Integer | 营销目标：  1：应用推广 |
| adNetwork | M | Integer | 网络类型：  1：应用市场推广网络 |
| type | M | Integer | 计划类型：  1：应用市场推广 |
| dailyBudget | M | Double | 计划日预算，单位：元。保留小数后2位，不限制使用默认值0.00，范围是[500,999999998]。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task 
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 
{
  "appId":"300158591",
  "taskType":"243728192482956951",
  "deliveryMode":"0",
  "trafficScenarios":[
      1
  ],  
  "isExcludeInstalledApp":0,
  "pricingType":"OCPC",
  "taskName":"推荐-系统投放-OCPC任务",   
  "budget":500,   
  "startDate":"2021-07-09",   
  "endDate":"2021-07-10",   
  "regions":"CN",   
  "isPositiveRegion":"Y",   
  "impAdMonitorReportUrl":"https://www.example.com?taskId=__AID__&taskName=__AID_NAME__&appid=__APP_ID__&appName=__APP_NAME__&channelId=__CHANNEL_ID__&channelName=__CHANNEL_NAME__&groupId=__GROUP_ID__&groupName=__GROUP_NAME__&reqId=__REQUEST_ID__&oaid=__OAID__&action=__ACTION_TYPE__&timestamp=__TS__&callBack=__CALLBACK__",   
  "clickAdMonitorReportUrl":"https://www.example.com?taskId=__AID__&taskName=__AID_NAME__&appid=__APP_ID__&appName=__APP_NAME__&channelId=__CHANNEL_ID__&channelName=__CHANNEL_NAME__&groupId=__GROUP_ID__&groupName=__GROUP_NAME__&oaid=__OAID__&action=__ACTION_TYPE__&timestamp=__TS__&callBack=__CALLBACK__",   
  "deliveryHours":[       
  {           
     "day":"Monday",           
     "startHMs":"0330",           
     "endHMs":"1630"       
  },       
  {           
     "day":"Tuesday",           
     "startHMs":"0330",           
     "endHMs":"1630"       
  }   
  ],   
  "subTasks":[       
  {           
     "subTaskName":"任务1111",           
     "subTaskPrice":"11.00",           
     "conversionBehaviorId":"1002"       
   }   
   ],   
   "campaignInfo":{       
     "adNetwork":1,       
     "buyMode":1,       
     "campaignName":"计划名称",       
     "dailyBudget":500,       
     "marketingGoal":1,       
     "type":1   
} 
}
```

## 响应参数

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| taskId | O | Long | 推广任务唯一ID。 |

## 响应示例

```
{"code": 20770001, "msg": "success", "taskId": 39,"campaignId":"1111","campaignName":"计划名称"}
```

## 调用示例

```
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d '{"appId":"300158591","taskType":"243728192482956951","deliveryMode":"0","trafficScenarios":[1],"isExcludeInstalledApp":0,"pricingType":"OCPC","taskName":"推荐-系统投放-OCPC任务","budget":500,"startDate":"2021-07-09","endDate":"2021-07-10","regions":"CN","isPositiveRegion":"Y","impAdMonitorReportUrl":"https://www.example.com?taskId=__AID__&taskName=__AID_NAME__&appid=__APP_ID__&appName=__APP_NAME__&channelId=__CHANNEL_ID__&channelName=__CHANNEL_NAME__&groupId=__GROUP_ID__&groupName=__GROUP_NAME__&reqId=__REQUEST_ID__&oaid=__OAID__&action=__ACTION_TYPE__&timestamp=__TS__&callBack=__CALLBACK__","clickAdMonitorReportUrl":"https://www.example.com?taskId=__AID__&taskName=__AID_NAME__&appid=__APP_ID__&appName=__APP_NAME__&channelId=__CHANNEL_ID__&channelName=__CHANNEL_NAME__&groupId=__GROUP_ID__&groupName=__GROUP_NAME__&oaid=__OAID__&action=__ACTION_TYPE__&timestamp=__TS__&callBack=__CALLBACK__","deliveryHours":[{"day":"Monday","startHMs":"0330","endHMs":"1630"},{"day":"Tuesday","startHMs":"0330","endHMs":"1630"}],"subTasks":[{"subTaskName":"任务1111","subTaskPrice":"11.00","conversionBehaviorId":"1002"}],"campaignInfo":{"adNetwork":1,"buyMode":1,"campaignName":"计划名称","dailyBudget":500,"marketingGoal":1,"type":1}}'
```
