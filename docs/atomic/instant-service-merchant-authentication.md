---
title: "商家直接接入鉴权方式"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-merchant-authentication
---

企业开发者接入服务直达的鉴权方式为Service Account鉴权。服务账号（Service Account）是一种可实现服务器与服务器之间接口鉴权的账号，在华为开发者联盟的[API Console](https://developer.huawei.com/consumer/cn/console/api/myApi)上创建服务账号，可根据返回的公私钥在业务应用中生成鉴权令牌，调用支持此类鉴权的华为公开API。

服务账号令牌为JWT（JSON Web Token）格式字符串，JWT数据格式包括三个部分：

* Header（头部）
* Payload（负载）
* Signature（签名）

这三个部分通过“.”进行连接，其中Signature为使用SHA256withRSA/PSS算法对Header与Payload拼接的字符串进行签名生成的字符串。

**示例**

```
eyJra*****JjNjBjMXXX.
eyJhd*****JodHRXXX.
BRNss*****7az5oU7-Zp5g9X2WJVXXX
```

更多JWT的相关知识请参见[Introduction to JSON Web Tokens](https://jwt.io/introduction/)。

## 开发步骤

1. 创建服务账号密钥文件。

   需在华为开发者联盟的[API Console](https://developer.huawei.com/consumer/cn/console/api/myApi)上创建并下载推送服务API的服务账号密钥文件。凭证创建入口如下图所示，开发者须拥有该元服务、应用的“管理员”或“开发者”权限，选择“开发者级凭证”，创建“服务账号密钥“凭证。相关创建步骤请参见[API服务操作指南-服务账号密钥](https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591#section3554194116341)。

   ![](./img/b53b8114.png "点击放大")

   申请的服务账号密钥样例文件形式可参考（文件内容已经经过脱敏处理）：

   ```
   {
       "key_id": "*****",
       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQCKw6kJKtCh7qmMvp1u1dI27z2TKZrPOzHbQaXO/Eez0AWZ2EN+ouF496R3pfo7fQXC1XOT/YTbVC4DNZwWSMA54fu3/AOCY9Zzyi46OK*****==\n-----END PRIVATE KEY-----\n",
       "sub_account": "*****",
       "auth_uri": "https://oauth-login.cloud.huawei.com/oauth2/v3/authorize",
       "token_uri": "https://oauth-login.cloud.huawei.com/oauth2/v3/token",
       "auth_provider_cert_uri": "https://oauth-login.cloud.huawei.com/oauth2/v3/certs",
       "client_cert_uri": "https://oauth-login.cloud.huawei.com/oauth2/v3/x509?client_id="
   }
   ```
2. 生成JWT Header数据。

   根据服务账号密钥文件中的key\_id（对应示例中的kid）字段拼接以下JSON体，对JSON体进行BASE64编码。

   **示例**

   ```
   {
     "kid": "*****",
     "typ": "JWT",
     "alg": "PS256"
   }
   ```

   | 字段名 | 描述 |
   | --- | --- |
   | kid | 服务账号密钥文件中key\_id字段。 |
   | typ | 数据类型，固定为：JWT。 |
   | alg | 算法类型，固定为：PS256。 |
3. 生成JWT Payload数据。

   根据服务账号密钥文件中的sub\_account（对应示例中的iss）字段拼接以下JSON体，对JSON体进行BASE64编码。

   **示例**

   ```
   {
     "aud": "https://oauth-login.cloud.huawei.com/oauth2/v3/token",
     "iss": "*****",
     "exp": 1581410664,
     "iat": 1581407064
   }
   ```

   | 字段名 | 描述 |
   | --- | --- |
   | iss | 服务账号密钥文件中sub\_account字段，标识数据生成者。 |
   | aud | 固定为：https://oauth-login.cloud.huawei.com/oauth2/v3/token。 |
   | iat | JWT签发UTC时间戳，为自UTC时间1970年1月1日00:00:00的秒数（您的服务器时间需要校准为标准时间）。 |
   | exp | JWT到期UTC时间戳，比iat晚3600秒。 |
4. 生成JWT Token。

   将完成BASE64编码后的Header字符串与Payload字符串，通过“.”进行连接，可在业务应用中，使用服务账号密钥文件中的private\_key（华为不进行存储，请您妥善保管），通过SHA256withRSA/PSS算法对拼接的字符串签名。

   至此，服务账号鉴权令牌JWT Token的生成已完成。

## 调用服务直达API

商家应用服务器调用服务直达API时，须将已获得的服务账号鉴权令牌放在Authorization头部来进行鉴权。

**鉴权Header字段说明**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息（JWT Token）。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |

**示例**

```
GET https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues?venueId=1773242566167455872
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845
```

![](./img/d3b72c09.png)

Authorization格式：Bearer后面拼接空格，再拼接获取的鉴权信息。
