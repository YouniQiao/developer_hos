---
title: "申请受限ACL权限"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-applyacl-0000002502198721
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-applyacl-0000002502198721
last_sync: 2026-06-07
sync_hash: 1d3a49d2
---
#### 功能介绍

此接口用于申请受限ACL权限。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/provision/v1/user/permission/apply |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-applyacl-0000002502198721_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| attachment | O | String | 附件的objectId。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。 |
| aclPermissionList | M | [OpenApplyPermissionInfo](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-applypermissioninfo-0000002469038756) | 受限ACL权限申请列表。 |

#### 请求示例

```
POST /api/provision/v1/user/permission/apply HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
{
  "attachment": "CN/2025102002/********.app",
  "aclPermissionList": [
    {
      "name": "ohos.permission.********",
      "reason": "因为需要***所以需要**权限"
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  }
}
```
