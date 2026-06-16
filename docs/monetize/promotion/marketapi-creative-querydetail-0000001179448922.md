---
title: "查询任务创意详情"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-creative-querydetail-0000001179448922
format: md
upstream_id: monetize/promotion/marketapi-creative-querydetail-0000001179448922
last_sync: 2026-06-07
sync_hash: 09fed949
---
# 查询任务创意详情

## 功能介绍

查询推广任务创意详情。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | &lt;https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/task/queryDetail&gt; |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_2df59b02ea23.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| taskId | M | Long | 推广任务唯一ID。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/task/queryDetail
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 
{   
   "customerId": "",   
   "taskId": 200188313
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| rtnCode | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| rtnDesc | M | String | 返回描述。 |
| creativeMode | O | Integer | 创意播放模式。  取值范围：   - 1：轮播 - 2：优选 |
| creatives | O | List&lt;[AdCreative](/docs/monetize/promotion/marketapi-modle-adcreative-0000001225503661)&gt; | 创意的集合。 |

## 响应示例

```
{
  "creativeMode": 2,
  "creatives": [
  {
      "attachment": "https://xxx.xxx.com/promote-cpfile-cn_7069f51a-291f-45c1-8db5-60ac624daaa576558F6F411EAA7D32C2CB52128D5A17_312-442.png",
      "creativeFormatId": "d5fd79de079811e***17fa163e74a934",
      "creativeName": "横版视频_2021914_14_8_421",           
      "creativeStatus": "TERMINATE",           
      "creativeType": 1,           
      "id": 14376597** **1719301, 
      "belongCreativeId": 14376597** **1719302, 
      "taskId": 14376597** **1719303, 
      "subTaskId": 14376597** **1719304,  
      "groupName": "创意分组",  
      "groupNameEN": "groupName",  
      "templateGroupName": "预审创意分组",  
      "externalCreativeId": "14376597** **1719305",  
      "creativeSwitch":"ON" 
      "createTime":"2025-11-01 00:00:00"  
      "lastUpdateTime":"2025-11-02 00:00:00"            
      "introCreative": {},           
      "materials": [               
      {                   
         "materialKey": "slogan",                   
         "materialValue": "slogan"               
      },               
      {                   
         "materialFileName": "example.gif",
         "materialKey": "pic1"               
      }           
      ],           
      "openCreative": {               
         "deepLink": "https://www.baidu.com"           
      }, 
      "recallWindowContent":{ 
         "windowType":2, 
         "details":"召回详情", 
         "giftCodeFileName":"xxx.xlsx", 
         "giftCodeFileUrl":"https://xx.xx.xx/xxx.xlsx", 
         "giftCodeUsageDesc":"礼包码使用方法", 
         "giftCodeQuantity":"10"  
      }, 
       "tagList": [               
      {                   
         "thirdTagId": "thirdTagId",                   
         "thirdTagName": "thirdTagName"               
      }           
      ],       
},       
{           
      "attachment": "https://xxx.xxx.com/promote-cpfile-cn_7069f51a-291f-45c1-8db5-60ac624daaa576558F6F411EAA7D32C2CB52128D5A17_312-442.png", 
      "creativeFormatId": "d5fd79de079811ec** **fa163e74a934",           
      "creativeName": "横版视频_2021914_14_8_421",           
      "creativeStatus": "CREATIVE MODIFY AUDIT PENDING",           
      "creativeType": 1,           
      "id": 14376597** **1719302,          
      "introCreative": {},           
      "materials": [               
      {                   
         "materialKey": "slogan",                   
         "materialValue": "sloganValue"               
      },               
      {                   
         "materialFileName": "example.gif",
         "materialKey": "pic1"               
      }           
      ],           
      "openCreative": {               
         "deepLink": "https://www.baidu.com"           
      }       
    }   
  ],   
      "retCode": 20770001,   
      "codeDesc": "success" 
}
```

## 调用示例

```
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/task/queryDetail -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d '{"customerId": "","taskId":200188313}'
```
