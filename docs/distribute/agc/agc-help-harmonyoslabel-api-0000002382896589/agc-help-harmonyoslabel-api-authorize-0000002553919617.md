---
title: "获取服务端API授权"
original_url: /docs/distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-authorize-0000002553919617
format: md
---


在向AppGallery Connect服务端发起REST API请求前，您需要先获得AppGallery Connect服务端的授权。

获得授权的方式有如下两种：

* **[（推荐）Service Account方式](#section104621343151212)**

  使用Service Account（服务账号），您可以实现服务器与服务器之间接口的鉴权，相比API客户端方式更安全。

  ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_0.png)

  Service Account即将替代API客户端，新创建凭据请您选择Service Account，并请尽快将您使用的API客户端切换到Service Account。

* **[API客户端方式](#section1539134785114)**

  使用API客户端，您可以以应用的身份进行API操作，API访问权限由API客户端的角色来确定。此方式适合开发者自己的IT系统对接AppGallery Connect时使用。

#### （推荐）Service Account方式

要发起一个基本的Service Account方式的API调用，您需要在AppGallery Connect中管理您的Service Account。

基本流程如下：

1. [创建Service Account](#section1885111102543)
2. [获取鉴权令牌](#section4210133812541)
3. [访问API](#section199381217552)

#### [h2]创建Service Account

Service Account是AppGallery Connect用于管理用户访问AppGallery Connect API的身份凭据，您可以给不同角色创建不同的Service Account，使不同角色可以访问对应权限的AppGallery Connect API。在访问某个API前，必须创建有权访问该API的Service Account。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“用户与访问”。
2. 左侧导航栏选择“API密钥 > Connect API”，选择“Service Account”页签，点击“创建”。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_1.png)
3. 在“创建Service Account”窗口，配置Service Account信息。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_2.png)

   | 参数 | 说明 |
   | --- | --- |
   | 名称 | 输入自定义的Service Account名称。 |
   | 类型 | 选择创建的Service Account类型。  如果API要求使用开发者级凭据，请选择“开发者级”。如果API要求使用项目级凭据，请选择“项目级”。  此处请选择“项目级”。 |
   | 项目 | 仅当“类型”选择“项目级”时展示。  选择你希望通过创建的项目级凭据访问的项目。 |
   | 角色 | 选择的角色决定了该Service Account具有的权限，具体角色对应的权限请参考[角色与权限](/docs/distribute/agc/agc-help-developid-0000002235870038/agc-help-rolepermission-0000002271930352)。 |
4. Service Account创建成功后，将自动下载对应的“\*\*\*\*\*\*private.json”格式的凭据文件，信息如下。请妥善保存。

   ```
   {
       "project_id": "244********17868",
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

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_3.png)

   如需删除添加的密钥，在“密钥ID”列点击对应密钥的删除按钮即可。如密钥总数超过3个，可点击“更多”打开“管理密钥ID”窗口进行删除。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_4.png)

   删除密钥，会导致密钥关联的API权限和资源都被删除，无法继续正常使用，请谨慎操作。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_5.png)
6. （可选）Service Account创建成功即自动启用。您也可以通过点击“操作”列的“停用”，来停用该Service Account。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_6.png)

   停用Service Account会阻止账号向API进行身份验证，且可能会使资源无法正常使用该账号，请谨慎操作。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_7.png)

   如需重新启用Service Account，点击“操作”列的“启用”。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_8.png)

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

要发起一个基本的API客户端方式的API调用，您需要在AppGallery Connect中管理您的API客户端。

基本流程如下：

1. [创建API客户端](#section14162113625516)
2. [获取访问API的Token](#section208586300556)
3. [访问API](#section18584134711568)

#### [h2]创建API客户端

API客户端是AppGallery Connect用于管理用户访问AppGallery Connect API的身份凭据，您可以给不同角色创建不同的API客户端，使不同角色可以访问对应权限的AppGallery Connect API。在访问某个API前，必须创建有权访问该API的API客户端。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“用户与访问”。
2. 左侧导航栏选择“API密钥 > Connect API”，选择“API客户端”页签，点击“创建”。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_9.png)
3. 在“创建API客户端”窗口，配置API客户端信息。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_10.png)

   | 参数 | 说明 |
   | --- | --- |
   | 名称 | 输入自定义的API客户端名称。 |
   | 项目 | 选择服务所属的项目。  注意：  请务必选择服务所属的项目，表示创建的API客户端为项目级的。不能选择“N/A”，否则将会导致调用API时返回错误。 |
   | 角色 | 选择的角色决定了该API客户端具有的权限，具体角色对应的权限请参考[角色与权限](/docs/distribute/agc/agc-help-developid-0000002235870038/agc-help-rolepermission-0000002271930352)。 |
4. 客户端创建成功后，客户端信息列表中会记录“ID”和“密钥”的值。后续您需要使用ID和密钥获取访问API的Token。

   ![](../img/agc-help-harmonyoslabel-api-authorize-0000002553919617_11.png)

#### [h2]获取访问API的Token

创建完API客户端后需要到华为AppGallery Connect平台进行鉴权，鉴权通过后将获得用于访问AppGallery Connect API的Access Token。用户凭借该Access Token即可访问REST API。您可以调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain-token-project-0000001477336048)接口来获取Access Token。

#### [h2]访问API

获取鉴权通过后的Access Token后，您即可以调用对应的服务API来完成相应的功能开发。
