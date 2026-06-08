---
title: "修改投放任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modifyadtask-0000001181946349
format: md
upstream_id: monetize/promotion/marketapi-modifyadtask-0000001181946349
last_sync: 2026-06-07
sync_hash: b58e0659
---
# 修改投放任务

## 功能介绍

修改推广任务。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_2d5c3c4cf3f6.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| <strong>公共字段</strong> | | | |
| taskId | M | Long | 任务ID。 |
| taskName | O | String | 推广任务名称。  最长50个字符，不能包含如下特殊字符：  &lt;>$#`;^ |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| <strong>投放控制</strong> | | | |
| budget | O | Double | 每日预算，限制每天的花费。每天消耗超过本预算后，系统将会停止推广，第二天再推广。  请填写整数，最低为100￥，最高为10，000，000￥（允许为0，代表不限制日预算）。  修改后的日预算金额，不能低于当前已消费金额的105%，以整数为单位向上取整。 |
| startDate | O | String | 投放开始日期。  格式为：YYYY-MM-DD |
| endDate | O | String | 投放结束日期。  格式为：YYYY-MM-DD  说明：  不设置的场景下表示会一直投放。 |
| deliveryHours | O | List&lt;[DeliveryHour](/docs/monetize/promotion/marketapi-modle-deliveryhour-0000001181826453)&gt; | 投放时段。  允许为空数组。 |
| conversionBehavior | O | String | 归因目标。  格式为数字，1代表激活，7代表注册。 |
| regions | O | String | 投放区域，使用ISO国家码。  中国默认CN。多个区域用逗号分隔。 |
| negativeRegions | O | String | 反向投放区域，使用ISO国家码。  中国默认CN。多个区域用逗号分隔。 |
| isPositiveRegion | O | String | 是否正向选择区域。  取值范围：   - Y：是，表示投放在region范围内 - N：否，表示投放在region范围外的其他国家 - All：表示在所有国家投放 |
| <strong>否定条件</strong> | | | |
| negativeKeyWords | O | List&lt;String&gt; | 负向关键词列表。 |
| isExcludeInstalledApp | O | Integer | 是否排除已安装。  取值范围：   - 0：关 - 1：开 |
| <strong>通用投放</strong>  说明：  当其他投放都匹配不到的时候，默认设置，用来保证能够正常投放 | | | |
| autoAddPrice | O | Integer | 自动加价。  取值范围：   - 0：关 - 1：开 |
| maxPrice | O | Double | 自动加价的场景下最高出价。 |
| deliverySwitch | O | Integer | 通投任务开关。  取值范围：   - 0：关 - 1：开   默认值：0 |
| deliveryPrice | O | Double | 通投出价。  取值范围：[2,1000]  单位：元 |
| <strong>归因监控</strong> | | | |
| impAdMonitorReportUrl | O | String | 精准曝光上报监控链接。  格式如下，其中key需要您自定义，value为应用推广支持的宏参数，取值请参见[宏参数列表](/docs/monetize/promotion/marketapi-macro-para-0000001454518626)。   ``` https://xxx.xxx.xxx/xxx?key1=value1&key2=value2 ``` |
| clickAdMonitorReportUrl | O | String | 点击上报监控链接。  格式和样例参考[impAdMonitorReportUrl](#ZH-CN_TOPIC_0000001741123596__zh-cn_topic_0000001091866348_p826816421818)参数。 |
| installAdMonitorReportUrl | O | String | 安装上报监控链接。  格式和样例参考[impAdMonitorReportUrl](#ZH-CN_TOPIC_0000001741123596__zh-cn_topic_0000001091866348_p826816421818)参数。 |
| downloadAdMonitorReportUrl | O | String | 下载上报监控链接。  格式和样例参考[impAdMonitorReportUrl](#ZH-CN_TOPIC_0000001741123596__zh-cn_topic_0000001091866348_p826816421818)参数。 |
| deeplinkClickAdMonitorReportUrl | O | String | 大卡点击上报监控链接  格式和样例参考[impAdMonitorReportUrl](#ZH-CN_TOPIC_0000001741123596__zh-cn_topic_0000001091866348_p826816421818)参数。 |
| <strong>素材绑定</strong> | | | |
| searchBrandContent | O | [SearchBrandContent](/docs/monetize/promotion/marketapi-modle-searchbrandcontent-0000001135626860) | 搜索大卡使用。 |
| browserContent | O | [BrowserContent](/docs/monetize/promotion/marketapi-modle-browsercontent-0000001135467058) | 信息流使用。 |
| brandContent | O | [BrandContent](/docs/monetize/promotion/marketapi-modle-brandcontent-0000001181946367) | 品牌/字词推荐CPT任务。 |
| cpdVideoContent | O | [CpdVideoContent](/docs/monetize/promotion/marketapi-modle-cpdvideocontent-0000001135467060) | 视频流类型任务使用。 |
| <strong>子任务</strong> | | | |
| subTasks | O | List&lt;[SubTaskDetail](/docs/monetize/promotion/marketapi-modle-subtaskdetail-0000001181826459)&gt; | 子任务。 |
| physChannelPkgId | O | String | 物理渠道包ID。 |
| installExp | O | Integer | 是否支持应用秒开。  取值范围：   - 0：不支持秒开/关闭秒开 - 1：开启秒开 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task
Content-type: application/json
Authorization: Bearer *** 
client_id:***

{
  "taskId":200029168,
  "budget":100
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |

## 响应示例

```
{   
    "code": 20770001,
    "msg": "success"
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"taskId":"200029168","budget":100}'
```
