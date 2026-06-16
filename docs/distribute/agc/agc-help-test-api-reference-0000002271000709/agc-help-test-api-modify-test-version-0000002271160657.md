---
title: "更新测试版本"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-modify-test-version-0000002271160657
format: md
upstream_id: distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-modify-test-version-0000002271160657
last_sync: 2026-06-07
sync_hash: 4508d899
---
#### 功能介绍

此接口用于更新已创建的测试版本。

![](../img/agc-help-test-api-modify-test-version-0000002271160657_0.png)

在架的测试版本不允许调用此接口。

* 如果需要修改生效版本，请参考[更新测试生效版本](/docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-release-test-version-0000002271000713)。
* 如果需要修改测试版本时间和额度信息，请参考[更新有效期内的测试版本时间和额度信息](/docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-update-test-version-opentest-0000002236041530)。
* 如果需要改其他参数，请新建一个测试版本。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/app/version |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-modify-test-version-0000002271160657_1.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String | 应用ID。 |

#### [h2]Body

请求Body中使用JSON格式携带需要更新的测试版本信息，参数如下表所示。

![](../img/agc-help-test-api-modify-test-version-0000002271160657_2.png)

测试信息默认继承全网版本信息或最近一个测试版本填写的信息。如需调整，请在当前测试版本提交前重新审视并修改，测试信息配置不影响全网版本的应用信息。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| versionId | M | String(32) | 需要更新的测试版本ID。 |
| pkgId | O | String(32) | 需要上传的软件包ID。  说明：  请确保上传的软件包是正常状态，即确认[查询软件包编译状态接口](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-query-compile-status-0000002236041434)中的响应参数**successStatus**为0。 |
| languages | O | `List&lt;[AppLanguage](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-applanguage-0000002237496312)>` | 版本多语言本地化信息。  数组长度不超过100。 |
| deviceTypes | O | `List&lt;[DeviceTypeInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-devicetypeinfo-0000002237336488)>` | 版本的设备类型信息。  数组长度不超过6。 |
| distCountryList | O | String(1024) | 版本发布国家的国家码。  多个国家以英文逗号分隔，例如：“CN,DE,MC”。  如果取值为“OTHER”，则表示当AppGallery支持的国家或地区列表中新增某个国家或地区时，版本将自动分发到新增的国家和地区。国家码列表请参见[国家码](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-countrycode-0000002236201362)。  注意：  取值不能只包含OTHER。仅公开测试支持填写此字段。 |
| extInfo | O | [VersionExtInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-versionextinfo-0000002272455645) | 版本扩展信息。 |
| openTestInfo | O | [OpenTestInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-opentestinfo-0000002272575553) | 测试版本信息，包含测试版本开始时间和结束时间。 |
| packagePermissionIntroVideoList | O | `List&lt;[PackagePermissionIntroVideo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-packagepermissionintrovideo-0000002237496316)>` | 软件包权限使用场景说明视频。  数组长度不超过100。 |
| versionVocReq | O | `List&lt;[VersionVocReq](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-publish-api-data-versionvoc-0000002527368597)>` | 应用版本已解决问题。  数组长度不超过1000。  仅公开测试支持填写此字段。  说明：  调用[查询应用未处理的问题工单](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-post-app-version-voc-0000002495233986)接口可以查询用户反馈的应用问题。如果在应用版本更新时某些问题已经解决，可以将这些问题提交审核，工单平台验证通过后会关闭工单。 |

#### 请求示例

```
 PUT /api/publish/v2/test/app/version?appId=6917********65 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
{
  "versionId": "1425*********60",
  "pkgId": "1426********56",
  "languages": [
    {
      "language": "zh-CN",
      "appName": "应用名称demo",
      "appDesc": "应用介绍demo",
      "briefInfo": "应用简介demo",
      "newFeatures": "测试说明demo",
      "deviceMaterials": [
        {
          "deviceType" : 4,
          "showType" : 1,
          "appIcon" : "CN/2024072501/**************************d505c9.png",
           "screenShots" : ["CN/2024072502/**************************77ff8e.png", "CN/2024072502/**************************de7e9a.png", "CN/2024072502/**************************acaaea.png"]
        },
        {
          "deviceType" : 5,
          "showType" : 1,
          "appIcon" : "CN/2024072501/**************************37fd1b.png",
          "screenShots" : ["CN/2024072502/**************************32d622.png", "CN/2024072502/**************************5d3050.png", "CN/2024072502/**************************d6eedc.png", "CN/2024072502/**************************a9a829.png"]
        },
        {
          "deviceType" : 12,
          "showType" : 1,
          "appIcon" : "CN/2024072501/**************************1a8716.png",
          "screenShots" : ["CN/2024072502/**************************949260.png", "CN/2024072502/**************************e71f72.png", "CN/2024072502/**************************572790.png", "CN/2024072502/**************************5c904e.png", "CN/2024072502/**************************6b7bff.png"],
          "promoGraphics" : ["CN/2024072502/**************************f48560.png", "CN/2024072502/**************************fc084b.png", "CN/2024072502/**************************a3d4a5.PNG"]
        }
      ]
    }
  ],
  "deviceTypes": [
    {
      "deviceType": 4,
      "appAdapters": ""
    }
  ],
  "distCountryList": "CN",
  "extInfo": {
    "privacyPolicy": "http://**********",
    "privacyRightsUrl": "http://*********"
  },
  "openTestInfo": {
    "startTime": 1716*****000,
    "endTime": 1717*****000,
    "testDesc": "版本描述demo",
    "testTaskInfo": {
      "groupInfos": [
        {
          "groupId": "761e*****************008"
        }
      ],
    "needShareLink": 0,
    "displayArea": "1",
    "needNotify": 0
    }
  },
  "packagePermissionIntroVideoList": [
    {
      "lang": "zh-CN",
      "permissionName": "*****",
      "deviceType": 4,
      "objectId": "CN/2024052102/********.app"
    }
  ],
  "versionVocReq": [
    {
      "versionId": "10*****528",
      "packageId": "1573*******5952",
      "vocId": "18******24"
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-connectret-0000002272455641) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
     "ret": {
         "code": 0,
         "msg": "success"
     }
}
```
