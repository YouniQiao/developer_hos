---
title: "获取分片上传地址"
original_url: /docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490
format: md
upstream_id: distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490
last_sync: 2026-06-07
sync_hash: a5b6e640
---
#### 功能介绍

此接口用于获取文件所有分片的上传地址，调用此接口前必须先调用[分片上传初始化](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-init-0000002271000677)接口完成分片初始化。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/upload/multipart/parts |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-upload-api-obbfile-uploadurl-0000002236041490_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| objectId | M | String | 对象ID。  必须与[分片上传初始化](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-init-0000002271000677)时生成的**objectId**参数一致。 |
| nspUploadId | M | String | 上传ID。  必须与[分片上传初始化](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-init-0000002271000677)时生成的**nspUploadId**参数一致。 |

#### [h2]Body

请求Body中使用JSON格式携带详细的分片信息，参数如下所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| additionalProp*X* | M | [FilePartInfo](/docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartinfo-0000002237498540) | 详细分片信息。  其中参数名中的X为分片的编号，从1开始顺序编号，例如additionalProp1、additionalProp2。 |

#### 请求示例

```
POST /api/publish/v2/upload/multipart/parts?objectId=*******&nspUploadId=***** HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
    "additionalProp1": {
        "sha256": "",
        "length": 5242880
    },
    "additionalProp2": {
        "sha256": "",
        "length": 3519290
    }
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-connectret-0000002273607369) | 包含返回码及描述信息的结果。 |
| uploadInfoMap | M | Hash`Map&lt;String, [FilePartUploadInfo](/docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartuploadinfo-0000002237338748)>` | 包含分片地址的Map对象。   * key为分片的编号。例如“additionalProp1”, “additionalProp2”。 * value为包含对应分片地址信息的[FilePartUploadInfo](/docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartuploadinfo-0000002237338748)实体类。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
     },
    "uploadInfoMap": {
            "additionalProp1": {
                    "url": "https://xxx.xxx.com/CN/20200728/1595904761905-6f2cca88-73fe-403e-9fc0-a49648aac596.jpg?partNumber=1&uploadId=000001739*****CEBAEC4E5A",
                   "method": "PUT",
                   "partObjectId": "",
                   "headers": {
                            "Authorization": "AWS4-HMAC-SHA256 Credential=I06FNCS*********ZC/20200728/cn-north-4/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=51015****************224b1281931781",
                           "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                           "x-amz-date": "202****022Z",
                           "Host": "agc-fhs-dev-test.obs.cn-north-4.****.com",
                           "Content-Type": "application/octet-stream"
                     }
               },
            "additionalProp2": {
                 ....
              }
      }
}
```
