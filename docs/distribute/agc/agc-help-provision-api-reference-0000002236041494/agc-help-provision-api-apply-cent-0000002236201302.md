---
title: "申请证书"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-apply-cent-0000002236201302
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-apply-cent-0000002236201302
last_sync: 2026-06-07
sync_hash: d34e6746
---
#### 功能介绍

此接口用于申请二进制证书、In-house发布证书、调试证书或发布证书。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/cert |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-apply-cent-0000002236201302_0.png)

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

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| csr | M | String(2048) | 证书的CSR。 |
| certName | M | String(100) | 证书名称。 |
| certType | M | Integer(32) | 证书类型。  取值范围：   * 1：调试 * 2：发布 * 3：In-house发布 * 4：二进制证书（用于二进制程序签名） 说明：  二进制证书目前为受限开放，如需体验可通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/)与我们联系。  工单“问题分类”请选择“AppGallery Connect > 证书、APP ID和Profile > 证书”，并在“问题描述”中提供如下信息：    + 企业名称与资质   + 应用名称及APP ID   + 应用的业务场景与用途   + 申请的证书类型：二进制证书 |

#### 请求样例

```
POST /api/publish/v3/cert HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "csr": "-----BEGIN NEW CERTIFICATE REQUEST-----****-----END NEW CERTIFICATE REQUEST-----",
  "certName": "test",
  "certType": 1
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| certInfo | O | [CertInfo](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-certinfo-0000002236041510) | 证书信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "certInfo": {
    "id": "14***************72",
    "certName": "test",
    "certType": 1,
    "createTime": 1844593505000,
    "expireTime": 1718363106749,
    "certDownloadUrl": "https://****de0d.cer?X-Amz-Algorithm=****"
  }
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject createCert(String domain, String clientId, String token, String csr, String certName,
    Integer certType) {
    HttpPost post = new HttpPost(domain + "/publish/v3/cert");
    post.setHeader("Authorization", "Bearer " + token);
    post.setHeader("client_id", clientId);

    JSONObject keyString = new JSONObject();
    keyString.put("csr", csr);
    keyString.put("certName", certName);
    keyString.put("certType", certType);

    StringEntity entity = new StringEntity(keyString.toString(), StandardCharsets.UTF_8);
    entity.setContentEncoding("UTF-8");
    entity.setContentType("application/json");
    post.setEntity(entity);

    try {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = httpClient.execute(post);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {
            BufferedReader br = new BufferedReader(
                new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();
            return JSON.parseObject(result);
        }
    } catch (Exception ignored) {
    }
    return null;
}
```
