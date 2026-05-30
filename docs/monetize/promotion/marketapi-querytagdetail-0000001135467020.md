---
title: "查询定向详情"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-querytagdetail-0000001135467020
---
# 查询定向详情

## 功能介绍

查看定向任务的详情。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/detail |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_bb5bde9d996e.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupId | M | String | 定向任务ID。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/detail 
client_id: ***
Authorization: Bearer ***
Content-Type: application/json
{
    "groupId":"792323491122256116"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码，参考[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| userGroupDetail | O | [UserGroupDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-usergroupdetail-0000001181946379) | 用户分群列表。 |

## 响应示例

```
{
         "code": 20770001,
         "codeDesc": "",
         "userGroupDetail": {
                   "condition":"{\"carrier_score_dev\":\"在线_p1#在线_p2#在线_p3\",\"hispace_pay_user_cd_dev\":\"1\"},
                   "userGroupInfo": {
                            "groupType": "TAG",
                            "groupName": "save",
                            "userCount": 0,
                            "createTime": "2020-10-21 20:19:02",
                            "groupID": "136636050038310235",
                            "status": "ON"
                   },
                   "relatedTaskIds": [
                            1122114433,
                            1122114434
                   ]
         }
}
```

## 调用示例

```
“Curl”
curl -X GET  https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/detail -H "client_id:***" -H "Authorization:Bearer ***" -H "Content-type: application/json" -d '{"groupId":"792323491122256116"}'
```
