---
title: "获取服务端授权"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661
---

要发起一个基本的AppGallery Connect API调用，您需要先获得AppGallery Connect服务端的授权。目前您可以通过以下方式获得授权：

* **[（推荐）Service Account方式](#section104621343151212)**

  使用Service Account（服务账号），您可以实现服务器与服务器之间接口的鉴权，相比API客户端方式更安全。

  ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_0.png)

  Service Account即将替代API客户端，新创建凭据请您选择Service Account，并请尽快将您使用的API客户端切换到Service Account。
* **[API客户端方式](#section1679462873111)**

  使用API客户端，您可以以应用的身份进行API操作，API访问权限由API客户端的角色来确定。此方式适合开发者自己的IT系统对接AppGallery Connect时使用。
* **[OAuth客户端方式](#section797720532313)**

  使用OAuth客户端，您的应用可以向用户提供应用的各种管理服务，您的用户可以是华为的开发者。用户可以使用华为账号登录您的应用，并以该用户自己的身份进行API操作，用户的API访问权限由其在团队内的角色来确定。此方式适合第三方IDE、工具对接AppGallery Connect时使用。

  ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_1.png)

  OAuth客户端方式仅面向平台类的开发者开放，普通应用开发者暂无法使用。

#### （推荐）Service Account方式

要发起一个基本的Service Account方式的API调用，您需要在AppGallery Connect中管理您的Service Account。

基本流程如下：

1. [创建Service Account](#section17426104123117)
2. [获取鉴权令牌](#section2077912527316)
3. [访问API](#section1851497326)

#### [h2]创建Service Account

Service Account是AppGallery Connect用于管理用户访问AppGallery Connect API的身份凭据，您可以给不同角色创建不同的Service Account，使不同角色可以访问对应权限的AppGallery Connect API。在访问某个API前，必须创建有权访问该API的Service Account。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“用户与访问”。
2. 左侧导航栏选择“API密钥 > Connect API”，选择“Service Account”页签，点击“创建”。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_2.png)
3. 在“创建Service Account”窗口，配置Service Account信息。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_3.png)

   | 参数 | 说明 |
   | --- | --- |
   | 名称 | 输入自定义的Service Account名称。 |
   | 类型 | 选择创建的Service Account类型。  Connect API要求使用开发者级凭据，请选择“开发者级”。最多可以创建100个“开发者级”的Service Account。 |
   | 角色 | 选择的角色决定了该Service Account具有的权限，具体角色对应的权限请参考[角色与权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-rolepermission-0000002271930352)。 |
4. Service Account创建成功后，将自动下载对应的“\*\*\*\*\*\*private.json”格式的凭据文件，信息如下。请妥善保存。

   ```
   {
       "project_id": "",
       "key_id": "79******b9",
       "private_key": "-----BEGIN PRIVATE KEY-----\n******\n-----END PRIVATE KEY-----\n",
       "sub_account": "10*****19",
       "auth_uri": "https://******",
       "token_uri": "https://oauth-login.cloud.huawei.com/oauth2/v3/token",
       "auth_provider_cert_uri": "https://******",
       "client_cert_uri": "https://******"
   }
   ```
5. （可选）点击Service Account“操作”列的“添加”，AGC将为您新生成一个密钥，并自动下载包含新密钥的凭据文件。最多可为一个Service Account添加10个密钥。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_4.png)

   如需删除添加的密钥，在“密钥ID”列点击对应密钥的删除按钮即可。如密钥总数超过3个，可点击“更多”打开“管理密钥ID”窗口进行删除。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_5.png)

   删除密钥，会导致密钥关联的API权限和资源都被删除，无法继续正常使用，请谨慎操作。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_6.png)
6. （可选）Service Account创建成功即自动启用。您也可以通过点击“操作”列的“停用”，来停用该Service Account。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_7.png)

   停用Service Account会阻止账号向API进行身份验证，且可能会使资源无法正常使用该账号，请谨慎操作。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_8.png)

   如需重新启用Service Account，点击“操作”列的“启用”。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_9.png)

#### [h2]获取鉴权令牌

创建Service Account后，您可以使用凭据文件中返回的key\_id和private\_key来获取鉴权令牌，从而访问AppGallery Connect API。

Service Account鉴权令牌为JWT（JSON Web Token）格式字符串，JWT数据格式包括Header（头部）、Payload（负载）和Signature（签名），示例：eyJraWQiOiIx\*\*\*\*\*\*.eyJhdWQiOiJodHR\*\*\*\*\*\*.QRodgXa2xeXSt4Gp\*\*\*\*\*\*

1. 生成JWT Header数据。

   根据文件中的key\_id字段拼接JSON体，对JSON体进行BASE64编码，生成Header数据，示例：eyJraWQiOiIx\*\*\*\*\*\*。

   ```
   {
     "kid": "79******b9",
     "typ": "JWT",
     "alg": "PS256"
   }
   ```

   | 参数 | 说明 |
   | --- | --- |
   | kid | 填写JSON凭据文件中的key\_id字段的值。 |
   | typ | 数据类型，固定为：JWT。 |
   | alg | 算法类型，固定为：PS256。 |
2. 生成JWT Payload数据。

   根据文件中的sub\_account字段拼接JSON体，对JSON体进行BASE64编码，生成Payload数据，示例：eyJhdWQiOiJodHR\*\*\*\*\*\*。

   ```
   {
     "aud": "https://oauth-login.cloud.huawei.com/oauth2/v3/token",
     "iss": "10*****19",
     "exp": 1581410664,
     "iat": 1581407064
   }
   ```

   | 参数 | 说明 |
   | --- | --- |
   | aud | 固定为：https://oauth-login.cloud.huawei.com/oauth2/v3/token 。 |
   | iss | JSON凭据文件中sub\_account字段的值，标识数据生成者。 |
   | exp | JWT到期时间，UTC时间戳，比iat晚3600秒。 |
   | iat | JWT签发时间，UTC时间戳，为自UTC时间1970年1月1日00:00:00的秒数（您的服务器时间需要校准为标准时间）。 |
3. 生成JWT Signature数据。

   将完成BASE64编码后的Header字符串与Payload字符串，通过“.”进行连接，并在业务应用中，通过密钥JSON文件中的private\_key（华为不进行存储，请您妥善保管），使用SHA256withRSA/PSS算法对拼接的字符串签名，生成Signature数据，示例：QRodgXa2xeXSt4Gp\*\*\*\*\*\*。

您可以在应用程序中参考如下代码来获取鉴权令牌，完整Demo请参见[服务端示例代码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Examples/server-sample-code-0000001057110387)。

```
public class JWTGenerateDemo {
    // please replace it with the private_key in your json file
    // this is the plain text in this demo, please encrypt the private key in your code, only get the string between
    // '-----BEGIN PRIVATE KEY-----\n' and '\n-----END PRIVATE KEY-----\n'
    private static final String PRIVATE_KEY = "******";

    // please replace it with the sub_account in your json file
    private static final String ISS = "10*****19";

    // please replace it with the key_id in your json file
    private static final String KID = "79******b9";

    private static final String AUD = "https://oauth-login.cloud.huawei.com/oauth2/v3/token";

    private static final String ALG_PS256 = "PS256";

    private static final String DOT = ".";

    private static PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decodeBase64(key));
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePrivate(keySpec);
    }

    private static byte[] decodeBase64(String Base64Str) {
        return Base64.decodeBase64(Base64Str.getBytes(StandardCharsets.UTF_8));
    }

    private String createJwt()
        throws NoSuchAlgorithmException, InvalidKeySpecException, InvalidKeyException, SignatureException {
        long iat = System.currentTimeMillis() / 1000;
        long exp = iat + 3600;

        // jwt header
        JSONObject header = new JSONObject();
        header.put("alg", ALG_PS256);
        header.put("kid", KID);
        header.put("typ", "JWT");

        // jwt payload
        JSONObject payload = new JSONObject();
        payload.put("aud", AUD);
        payload.put("iss", ISS);
        payload.put("exp", exp);
        payload.put("iat", iat);

        // jwt signature
        byte[] encodeHeaderBytes = Base64.encodeBase64URLSafe(header.toString().getBytes(StandardCharsets.UTF_8));
        byte[] encodePayloadBytes = Base64.encodeBase64URLSafe(payload.toString().getBytes(StandardCharsets.UTF_8));
        String encodeHeader = new String(encodeHeaderBytes, StandardCharsets.UTF_8);
        String encodePayload = new String(encodePayloadBytes, StandardCharsets.UTF_8);
        String jwtHeaderAndPayload = encodeHeader + DOT + encodePayload;
        Signature signatureInstance = Signature.getInstance("SHA256withRSA/PSS", new BouncyCastleProvider());
        signatureInstance.initSign(getPrivateKey(PRIVATE_KEY));
        signatureInstance.update(jwtHeaderAndPayload.getBytes(StandardCharsets.UTF_8));
        String signature =
            new String(Objects.requireNonNull(Base64.encodeBase64URLSafe(signatureInstance.sign())), StandardCharsets.UTF_8);

        return jwtHeaderAndPayload + DOT + signature;
    }

    public static void main(String args[])
        throws InvalidKeySpecException, NoSuchAlgorithmException, SignatureException, InvalidKeyException {
        JWTGenerateDemo JWTGenerateDemo = new JWTGenerateDemo();
        System.out.println(JWTGenerateDemo.createJwt());
    }
}
```

#### [h2]访问API

在调用API时，把已获取的鉴权令牌置于Authorization头部以完成鉴权。

```
GET /v1/demo/indexes HTTP/1.1
Authorization: Bearer eyJraWQiOiIx******.eyJhdWQiOiJodHR******.QRodgXa2xeXSt4Gp******
Host: connect-api.cloud.huawei.com
```

#### API客户端方式

要发起一个基本的API客户端方式的API调用，您需要在AppGallery Connect中管理您的API客户端，API只能由您的团队账号所有者管理。

基本流程如下：

1. [创建API客户端](#section103mcpsimp)
2. [获取访问API的Token](#section104mcpsimp)
3. [访问API](#section105mcpsimp)

![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_10.png)

为了帮助您更好地开发，我们提供了[示例代码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-demo-0000002238448026)。您可以参考Demo工程中的示例代码编写您的应用程序。

#### [h2]创建API客户端

API客户端是AppGallery Connect用于管理用户访问AppGallery Connect API的身份凭据，您可以给不同角色创建不同的API客户端，使不同角色可以访问对应权限的AppGallery Connect API。在访问某个API前，必须创建有权访问该API的API客户端。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“用户与访问”。
2. 左侧导航栏选择“API密钥 > Connect API”，选择“API客户端”页签，点击“创建”。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_11.png)
3. 在“创建API客户端”窗口，配置API客户端信息。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_12.png)

   | 参数 | 说明 |
   | --- | --- |
   | 名称 | 输入自定义的API客户端名称。 |
   | 项目 | 保持默认值“N/A”，表示创建团队级的API客户端。  注意：  如果不为N/A，将会导致调用API时返回403错误。 |
   | 角色 | 选择的角色决定了该API客户端具有的权限，具体角色对应的权限请参考[角色与权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-rolepermission-0000002271930352)。 |
4. 客户端创建成功后，客户端信息列表中会记录“ID”和“密钥”的值。后续您需要使用ID和密钥获取访问API的Token。

   ![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_13.png)

#### [h2]获取访问API的Token

创建完API客户端后需要到华为AppGallery Connect平台进行鉴权，鉴权通过后将获得用于访问AppGallery Connect API的Access Token。用户凭借该Access Token即可访问AppGallery Connect API。您可以调用[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)接口来获取Access Token。

Java代码示例如下：

```
public static String getToken(String domain, String clientId, String clientSecret) {
    String token = null;
    try {
        HttpPost post = new HttpPost(domain + "/oauth2/v1/token");

        JSONObject keyString = new JSONObject();
        keyString.put("client_id", "18893***83957248");
        keyString.put("client_secret", "B15B497B44E080EBE2C4DE4E74930***52409516B2A1A5C8F0FCD2C579A8EB14");
        keyString.put("grant_type", "client_credentials");

        StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
        entity.setContentEncoding("UTF-8");
        entity.setContentType("application/json");
        post.setEntity(entity);

        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpResponse response = httpClient.execute(post);
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {

            BufferedReader br =
                new BufferedReader(new InputStreamReader(response.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();
            JSONObject object = JSON.parseObject(result);
            token = object.getString("access_token");
        }

        post.releaseConnection();
        httpClient.close();
    } catch (Exception e) {

    }
    return token;
}
```

获取Access Token后，您在访问AppGallery Connect API接口时可携带该Access Token进行身份验证。该Access Token的有效期由返回参数expires\_in指定，如果Access Token失效，则需要重新调用[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)接口获取。

#### [h2]访问API

获取鉴权通过后的Access Token后，您即可以调用对应的AppGallery Connect API来完成相应的功能开发，具体如何调用请参考对应的API文档。

#### OAuth客户端方式

![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_14.png)

OAuth客户端方式仅面向平台类的开发者开放，普通应用开发者暂无法使用。

要发起一个基本的OAuth客户端方式的API调用，您需要向华为获取用于访问API的用户授权凭证，API访问权限由开发者在团队内的角色来确定。

基本流程具体如下：

1. [申请使用Scope](#section172443596398)
2. [对接华为账号服务](#section9167172375)
3. [获取用户授权码](#section949717114392)
4. [访问API](#section9924124194013)

#### [h2]申请使用Scope

如果您希望使用OAuth客户端方式访问AppGallery Connect API，请填写申请表格，并发邮件至agconnect@huawei.com申请。申请时可以通过Scope指定需要访问的API。

申请模板：

* 标题：[申请开通OAuth服务]-[公司名称]-[开发者账号]-[服务器应用ID]
* 附件：申请表格[AppGallery Connect API Scope Application Form.xlsx](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310182653.13851674259216935450610317574294%3A20260531165958%3A2800%3ABF8ED59C2D33E250F2B3724AC4CADD64D8AD9BBC1166625464DC6A027484E91C.xlsx?needInitFileName=true)。

AppGallery Connect开放的Scope清单如下：

| API类别 | Scope Url |
| --- | --- |
| Testing API | https://www.huawei.com/auth/agc/publish |
| Upload Management API | https://www.huawei.com/auth/agc/publish |
| Publishing API | 不支持OAuth客户端方式 |
| Provisioning API | https://www.huawei.com/auth/agc/develop |
| Domain Management API | 不支持OAuth客户端方式 |
| Reports API | https://www.huawei.com/auth/agc/report/read |

![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_15.png)

以上均为敏感Scope，使用这些Scope需要事先经过华为运营人员的审核。

#### [h2]对接华为账号服务

AppGallery Connect API的OAuth认证机制由华为账号服务提供，在发起OAuth客户端方式的API调用前，您需要完成华为账号服务的接入开发。

* 如果您的应用是HarmonyOS应用，请参考[Account Kit开发指南（HarmonyOS应用）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-introduction)。
* 如果您的应用是元服务，请参考[Account Kit开发指南（元服务）](https://developer.huawei.com/consumer/cn/doc/atomic-guides/account-guide-atomic-introduction)。

#### [h2]获取用户授权码

华为账号服务对接开发完成后，您可以获取登录授权成功后的Access Token，用于OAuth客户端方式的API访问。

* 如果您的应用是HarmonyOS应用，请参考[登录华为账号（HarmonyOS应用）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login)。
* 如果您的应用是元服务，请参考[登录华为账号（元服务）](https://developer.huawei.com/consumer/cn/doc/atomic-guides/account-atomic-silent-login)。

#### [h2]访问API

获取鉴权通过后的Access Token后，您即可以调用对应的AppGallery Connect API来完成相应的功能开发，详细API的调用方法请参见对应的API文档。

![](../img/agc-help-connect-api-obtain-server-auth-0000002271134661_16.png)

您的用户在访问相关API时，需要具有该API对应的权限，如果因为权限不足导致失败，您需要提示用户向其团队所有者申请赋予拥有该权限的角色。

#### 获取Token

#### [h2]功能介绍

在使用API客户端方式调用AppGallery Connect API的接口前，需要通过华为开放平台进行鉴权，并获取认证通过后的Token。

#### [h2]接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/oauth2/v1/token |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### [h2]请求参数

请求参数以JSON格式传入，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| grant\_type | M | String(256) | 固定传入“client\_credentials”。 |
| client\_id | M | String(256) | 客户端ID，即[创建API客户端](#section103mcpsimp)中生成的“ID”。 |
| client\_secret | M | String(2048) | 客户端密钥，即[创建API客户端](#section103mcpsimp)中生成的“密钥”。 |

#### [h2]请求示例

```
POST /api/oauth2/v1/token
Host: connect-api.cloud.huawei.com
Content-Type: application/json
{
   "grant_type":"client_credentials",
   "client_id":"26********20",
   "client_secret":"************************"
}
```

#### [h2]响应参数

返回值为JSON格式的字符串，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| access\_token | O | String | 认证Token，用于AppGallery Connect API接口调用。  说明：  此参数只在获取成功时返回。 |
| expires\_in | O | Long | access\_token的有效期。  单位：秒  您需要在过期时间到达时重新调用本接口获取新的access\_token。有效期为48小时，如果在有效期内再次调用接口获取access\_token时，新老access\_token都是有效的。  说明：  此参数只在获取成功时返回。 |
| ret | O | String(100) | 获取Token失败时的错误信息，包含错误码及描述信息的JSON字符串。  格式：\{"code":*retcode*, "msg": "*description*"}  其中：retcode为错误码，description为错误码描述信息。 |

#### [h2]响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU****************",
    "expires_in": 172800
}
```

#### 获取Token（项目级）

#### [h2]功能介绍

在使用API客户端方式调用AppGallery Connect API的接口前，需要通过华为开放平台进行鉴权，并获取认证通过后的Token。

#### [h2]接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://*`{domain}`*/api/oauth2/v1/token   * 中国站点的domain：connect-api.cloud.huawei.com * 德国站点的domain：connect-api-dre.cloud.huawei.com * 新加坡站点的domain：connect-api-dra.cloud.huawei.com * 俄罗斯站点的domain：connect-api-drru.cloud.huawei.com 注意：  本接口使用的domain必须是项目设置的数据处理位置对应的domain，例如：项目设置数据处理位置为中国，那么本接口中的domain必须使用“connect-api.cloud.huawei.com”； |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### [h2]请求参数

请求参数以JSON格式传入，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| grant\_type | M | String(256) | 固定传入“client\_credentials”。 |
| client\_id | M | String(256) | 客户端ID，即[下载项目级凭证](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started-server-0000001058092593#section1778162811430)agc-apiclient-\*.json文件中的client\_id。 |
| client\_secret | M | String(2048) | 客户端密钥，即[下载项目级凭证](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started-server-0000001058092593#section1778162811430)agc-apiclient-\*.json文件中的client\_secret。 |

#### [h2]请求示例

```
POST /api/oauth2/v1/token
Host: connect-api.cloud.huawei.com
Content-Type: application/json
{
   "grant_type":"client_credentials",
   "client_id":"26********20",
   "client_secret":"************************"
}
```

#### [h2]响应参数

返回值为JSON格式的字符串，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| access\_token | O | String | 认证Token，用于AppGallery Connect API接口调用。  说明：  此参数只在获取成功时返回。 |
| expires\_in | O | Long | access\_token的有效期。  单位：秒  您需要在过期时间到达时重新调用本接口获取新的access\_token。有效期为48小时，如果在有效期内再次调用接口获取access\_token时，新老access\_token都是有效的。  说明：  此参数只在获取成功时返回。 |
| ret | O | String(100) | 获取Token失败时的错误信息，包含错误码及描述信息的JSON字符串。  格式：\{"code":*retcode*, "msg": "*description*"}  其中：retcode为错误码，description为错误码描述信息。 |

#### [h2]响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU****************",
    "expires_in": 172800
}
```
