---
title: "账号"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-faq-account-0000002425293754
format: md
---


## 调用登录接口

### 调用登录接口时，出现“auth fail -1”的错误，如何处理？

出现此错误，表示鉴权失败。如果调试时使用打包的正式版本，版本中使用的指纹证书与[华为开发者联盟配置的指纹证书](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-generate-fingerprint-0000002318054644)保持一致。

### 调用登录接口时，出现6004的错误码，如何处理？

出现此错误，请检查如下几点：

1. 是否已经[打开游戏服务API开关](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-enable-game-kit-0000002351893445#ZH-CN_TOPIC_0000002382054097__zh-cn_topic_0000001113292730_li1450624175912)和[打开华为账号API开关](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-enable-game-kit-0000002351893445#ZH-CN_TOPIC_0000002382054097__zh-cn_topic_0000001113292730_li9525185314593)。
2. 登录传入的参数appid是否和华为开发者联盟获取的保持一致。获取方式请参见[获取APP ID](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-enable-account-kit-0000002317894820#section1148753814717)。
3. RPK包使用的指纹证书是否与AGC控制台配置账号服务时填写的一致。

如果以上配置没有问题，可能是网关权限有延迟，请在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)多次尝试关闭再重新开通账号服务和游戏服务，清空 HMS Core 的数据，同时清除手机应用设置中花瓣轻游的缓存和数据。

清除数据方法请参见[如何清除HMS账号服务的缓存数据？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-faq-0000001129279483#section16747619527)。

### 调用登录接口没有反应，如何处理？

在“onGameLoginResult”回调里面打印str.code的值，根据获取的错误码，在FAQ中查看是否有此错误码的处理方式。

### 调用游戏登录接口时，出现3001错误，例如：response:\&#123;"rtnCode":3001,"errMsg":"param [ts:1564034573508] should between [1564034852866,1564035452866] ."\&#125;，如何处理？

出现此错误提示，表示ts已经失效，ts的有效期为5分钟，超过有效期，需要重新获取。

### 账号登录接口的forceLogin设置为1，接口调用成功，但是为什么返回结果为空？

出现此异常情况，如果继续调用登录接口可能会出现死循环，建议设置重试登录的次数，超过次数不再登录。或者等待游戏场景加载完成再进行登录。

### 调用接口登录授权后获取的playerId和openId是否一样？是否都是华为账号的唯一标识？

快游戏建议使用playerId作为用户标识，playerId和openId区别如下：

* openId：应用使用华为账号登录后，会获得当前登录的华为账号对这个应用开放的唯一标识，这个唯一标识就是openID。不同的应用使用相同的华为账号登录获得的openID是不同且唯一的。即同一个华为账号，不同应用，openID不同。
* playerId：游戏登录使用了华为账号服务的登录授权能力，游戏登录授权成功后不使用华为账号分配的openId作为玩家标识，开发者需要调用游戏服务接口获取玩家的playerId作为玩家标识。playerId可在游戏内唯一标识该用户，playerId是华为游戏中心给每个华为账号分配的唯一标识，支持跨项目、跨游戏。同一个玩家，在所有的华为游戏平台上的playerId都是相同的。

## 登录游戏

### 登录游戏出现7001的错误码，如何处理？

如果调试手机没有登录华为账号，而登录参数forceLogin设置为0，则不会拉起登录界面，从而导致提示登录异常。出现此错误，请检查手机是否未登录华为账号，并且forceLogin设置为0。

### 登录时提示7005错误码，如何处理？

7005错误码表示传入参数有误，请检查登录接口传入参数是否做了JSON.stringify(param)转换。

### 取消安装HMS Core后，收到玩家登录失败错误码code=13，如何处理？

错误码13表示HMS Core版本过低，提示用户升级时，用户取消了升级。此种情况需要用户安装HMS Core或者更新到最新版本。

### 未登录可以玩游戏吗？用户登录时，选择退出，游戏要如何处理？

用户需要登录后才可以玩游戏，如果用户退出登录，可以让用户退出游戏或者再次提示用户登录。

### 登录游戏时返回7错误码（game login fail:Login FAIL, code:7），如何处理？

出现此错误提示，表示调试的手机非华为手机，请尽量使用华为手机进行调试。

### 用户取消登录，快游戏需要如何处理？

如果用户点击返回键取消登录，需停留在游戏某个场景，该场景需提供登录按钮引导用户再次登录。

### 登录华为账号时，弹出账号授权界面为什么不显示icon？

请检查游戏rpk包里manifest文件中的icon图片和在AppGallery Connect 创建快游戏时提交的图片是否正确。

## 登录校验

### 校验登录签名时返回404错误，如何处理？

请检查HTTP报文格式是否符合规范，游戏服务器校验接口使用POST协议。例如在如下POST报文中，参数却在URL中使用&拼接的方式（即误用了GET报文），则会出现此错误。

```
+0800|0.003|0.003|POST /gameservice/api/gbClientApi?method=external.hms.gs.checkPlayerSign&appId=100534287&cpId=900086000020922936&ts=1545203887700&playerId=1178831663400831&playerLevel=1&playerSSign=fGlBTYOw3QME9%20EyNLY4jI3sFhSOub0Yzt2mtSdG7Tz95pPcHLkJRMx2wozDKPr5MwhmJmLUs%204Cpao6BmC7XUdRmP61USNGCZtI8txZA0N87d6cxJ2dKAhyQyZT53ibbDepXmEKJrr5EIuFKrn2CvocMlCoRJEKDR%20qcgAqeRL%20IO7ExEqXGXFOZLnYMBO1nnZ0q3TwTQWCN%20SFSrhGqE/019H2qVYfQRUmL9LuNrYBoVVmFYoO3KtgAzlbHFPw0n9asNluZIXIPzmzTn5ca/bnYKvf9sBRpuU6Ylsf2yEHheTBLRupD/J6pIW5UElJqZ0YDrVH4%206b9IB8lqltAA==&cpSign=G3B0/d7t6USJ8iQAF7VbLTZw/p5UuWzf5c7wD0JNFO59RxkEdUOGscJEpFTTl7tNqBaM3xXtitdk HTTP/1.1|404|0|866|116|-|PostmanRuntime/7.4.0|gss-cn.game.hicloud.com|10.11.12.30:8080|404|-|http|"external.hms.gs.checkPlayerSign"|"-"|"-"|"-"
```

### 运行游戏Demo的登录，为什么会鉴权失败？

每个应用都有自己的指纹信息，并且会在开发者联盟上配置相关服务的指纹信息，由于demo中的指纹和开发者应用指纹不匹配，所以会鉴权失败。

### 登录校验成功进入游戏，在下次断线重连的时候再拿之前登录成功的数据去校验， 获得30001错误码，如何处理？

调用校验登录接口时，来自华为账号登录接口返回的ts是有时效性的，断连后重新登录校验需要使用新返回的ts，否则会返回30001错误码，即参数错误。

### 账号登录验签失败，rtncode报-1，如何处理？

请检查是否以下参数错误导致验签失败。

| 参数 | 典型错误 |
| --- | --- |
| appid和cpid | 验签时传的appid、cpid和AppGallery Connect上获取的不一致导致验签失败。 |
| playerSSign | 原始值取自login接口返回的gameAuthSign参数,可以打印下请求的playerSSign值，是否有空格，如有则是获取发生错误或者应用客户端传输至开发者服务器过程中发生转义。 |
| ts | 验签时使用的ts不是客户端登录成功后华为服务器返回的原始ts，而是错误使用了当前服务器的本地时间。 |
| cpSign | 将请求参数中需要参与签名参数进行拼接字符串时错误，进行加密时使用的游戏私钥错误或者加密算法错误。 |

### 校验登录签名时返回-1，\&#123;"errMsg":"[4001]can not find publicKey of the cp:xxxxxx"\&#125;，如何处理？

出现此错误信息，一般是CPID值传递错误，请检查此参数，必须与申请应用内支付服务时获取的“[支付ID](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-enable-account-kit-0000002317894820#section17706640132116)”保持一致。

### 快游戏如何校验登录签名？

快游戏开发者调用账号登录接口成功后，会收到华为服务器返回的登录签名gameAuthSign，建议开发者调用“[校验登录签名接口](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/verify-login-signature-0000001050123503)”对返回的签名进行校验，以确保登录结果的准确性。gameAuthSign的参数说明请参见[快游戏登录接口](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-account-0000002365996984)中的success回调参数函数表。

服务端java代码如下。

Loginmain.java代码（入口文件，传入参与签名校验的参数）：

```
/**
 * 本程序可以用于应用服务端发送验证登录签名请求时，使用真实数据测试验签结果。
 */
package com.huawei.test;
import java.util.HashMap;
import java.util.Map;
public class Loginmain {
    public static void main(String[] args)
    {
        // CP签名游戏私钥
        final String CP_AUTH_SIGN_PRIVATE_KEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALQ8JRusTb3swpvmeOXbVjuJmf3e8PMbwhr5670hI8IgrYykszXBNOXCSaysr6m6MFw8zRG4BPDxFmauBYMVWZKpcce/lKfmw8s9DwYXQ+weu ==";
        // 游戏服务器提供给CP签名接口URL
        final String requestUri = "https://jos-api.cloud.huawei.com/gameservice/api/gbClientApi";
        // CP请求参数
        Map<String,String> mockRequestParams = new HashMap<>();
        mockRequestParams.put("method","external.hms.gs.checkPlayerSign");
        mockRequestParams.put("appId","103573859");
        mockRequestParams.put("cpId","900086000034703063");
        mockRequestParams.put("ts","1609388135341");
        mockRequestParams.put("playerId","1180392374801211");
        mockRequestParams.put("playerLevel","1");
        mockRequestParams.put("playerSSign","NZWHB7q4cgAvX2L2E9ZCdDnUkUJYrswOFNVAjHMKgMO8SgFRxderjzpRqDrYZv6n0UuJC4MYG1fBCPjW8%2FKJa4%2Bm90j12%2FiyEZz7VwXkIi6Azgk6ILdRW%2BH4lNjINl3th7PN7qo%2F0C%2BNWOFuPXRoCcntm%2FYWOG0Ak1a0keSdLeqRZZ0w9OyyQMkzRKVllL1hOEpVia3CwpEzHnrGe8IrV%2Bchr8ERj4I9oYvU9PTjyyCv%2FTWJ7eF0Xe5Ws3JfdBeR8R1dINj%2Fr%2BSaPViVDBY%2BMvduDGTjMyD5dPRN4QaK%2FYtOFqNPscW%2B0%2FCq18wSsnpihdbC5TmTrDEylThZf5Yt2Q%3D%3D");
        GameServiceCallDemo.callGameService(requestUri,mockRequestParams,CP_AUTH_SIGN_PRIVATE_KEY);
    }
}
```

GameServiceCallDemo.java代码（用于调用签名校验接口进行校验）：

```
package com.huawei.test;
import com.alibaba.fastjson.JSON;
import org.apache.commons.codec.binary.Base64;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.ssl.SSLContexts;
import org.apache.http.util.Asserts;
import org.apache.http.util.EntityUtils;
import javax.net.ssl.SSLContext;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.*;
public class GameServiceCallDemo
{
    private static final String RETURN_CODE_SUCCEED = "0";
    private static final int HTTP_RESPONSE_STATUS_CODE_OK = 200;
    /**
     *
     * @param requestUri 请求URL
     * @param requestParams 请求参数对
     * @param cpAuthKey CP侧签名私钥
     */
    public static void callGameService(String requestUri, Map<String,String> requestParams, final String cpAuthKey)
    {
        requestParams.put("cpSign",generateCPSign(requestParams,cpAuthKey));
        // 响应消息中返回参数
        Map<String,Object> responseParamPairs = doPost(requestUri,requestParams);
        if(responseParamPairs.isEmpty())
        {
            System.out.println("None response parameter.");
        }
        else
        {
            if(RETURN_CODE_SUCCEED.equalsIgnoreCase(getString("rtnCode",responseParamPairs)))
            {
                System.out.println("rtnCode: " + getString("rtnCode",responseParamPairs));
                System.out.println("ts: " + getString("ts",responseParamPairs));
                System.out.println("rtnSign: " + getString("rtnSign",responseParamPairs));
            }
            else
            {
                System.out.println("rtnCode: " + getString("rtnCode",responseParamPairs));
                System.out.println("errMsg: " + getString("errMsg",responseParamPairs));
            }
        }
    }
    private static String getString(String key,Map<String,Object> responseParamPairs)
    {
        Asserts.notNull(responseParamPairs, "responseParamPairs");
        Object value = responseParamPairs.get(key);
        if (value == null) {
            return null;
        }
        return value.toString();
    }
    /**
     *     创建跳过SSL验证的httpClient实例，https://jos-api.cloud.huawei.com/gameservice/api/gbClientApi这个地址暂时没有添加SSL证书，所以需要跳过SSL验证
     */
    private static CloseableHttpClient getIgnoeSSLClient() throws Exception {
        SSLContext sslContext = SSLContexts.custom().loadTrustMaterial(null, new TrustStrategy() {
            @Override
            public boolean isTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {
                return true;
        }
    }).build();
    //创建httpClient
    CloseableHttpClient client = HttpClients.custom().setSSLContext(sslContext).
            setSSLHostnameVerifier(new NoopHostnameVerifier()).build();
        return client;
}
    private static Map<String,Object> doPost(String url, Map<String, String> parameters)
    {
        HttpPost httpReq = new HttpPost(url);
        // 创建无需SSL验证的httpClient实例.
        CloseableHttpClient httpclient = null ;
        try {
            httpclient = getIgnoeSSLClient();
        } catch (Exception e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
        try
        {
            if (parameters != null)
            {
                List<NameValuePair> paramPairs = new ArrayList<NameValuePair>();
                BasicNameValuePair bnv;
                for (Map.Entry<String, String> entry : parameters.entrySet())
                {
                    bnv = new BasicNameValuePair(entry.getKey(), entry.getValue());
                    paramPairs.add(bnv);
                }
                httpReq.setEntity(new UrlEncodedFormEntity(paramPairs, "UTF-8"));
            }
            Map<String,Object> responseParamPairs = new HashMap<>();
            HttpResponse resp = httpclient.execute(httpReq);
            if(null != resp && HTTP_RESPONSE_STATUS_CODE_OK == resp.getStatusLine().getStatusCode())
            {
                responseParamPairs = JSON.parseObject(EntityUtils.toString(resp.getEntity()));
            }
            return responseParamPairs;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return null;
        }
        finally
        {
            try
            {
                httpclient.close();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
        }
    }
    private static String sign(byte[] data, String privateKey)
    {
        try
        {
            byte[] e = Base64.decodeBase64(privateKey);
            PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(e);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PrivateKey privateK = keyFactory.generatePrivate(pkcs8KeySpec);
            Signature signature = Signature.getInstance("SHA256WithRSA");
            signature.initSign(privateK);
            signature.update(data);
            String signs = Base64.encodeBase64String(signature.sign());
            return signs;
        }
        catch (Exception var)
        {
            System.out.println("SignUtil.sign error." + var);
            return "";
        }
    }
    /**
     * 根据参数Map构造排序好的参数串
     *
     * @param params
     * @return
     */
    private static String format(Map<String, String> params)
    {
        StringBuffer base = new StringBuffer();
        Map<String, String> tempMap = new TreeMap<String, String>(params);
        // 获取计算nsp_key的基础串
        try
        {
            for (Map.Entry<String, String> entry : tempMap.entrySet())
            {
                String k = entry.getKey();
                String v = entry.getValue();
                base.append(k).append("=").append(URLEncoder.encode(v, "UTF-8")).append("&");
            }
        }
        catch (UnsupportedEncodingException e)
        {
            System.out.println("Encode parameters failed.");
            e.printStackTrace();
        }
        String body = base.toString().substring(0, base.toString().length() - 1);
        // 空格和星号转义
        body = body.replaceAll("\\+", "%20").replaceAll("\\*", "%2A");
        return body;
    }
    private static String generateCPSign(Map<String,String> requestParams,final String cpAuthKey)
    {
        // 对消息体中查询字符串按字典序排序并且进行URLCode编码
        String baseStr = format(requestParams);
        // 用CP侧签名私钥对上述编码后的请求字符串进行签名
        String cpSign = sign(baseStr.getBytes(Charset.forName("UTF-8")), cpAuthKey);
        return cpSign;
    }
}
```

## 防沉迷

### 游戏开通强制实名认证的流程是怎样的？

1. 游戏使用防沉迷接口gameLoginWithReal登录，且manifest.json中最小版本号大于等于1078。
2. 线上玩家进入游戏时，登录接口会先识别该玩家是否未实名认证，未实名认证会弹出强制实名认证框。

![](./img/62ce6991.png)

游戏在本地加载器中测试时，不会弹出强制实名认证框。需要游戏上线后，并且已开启强制实名认证，才会出现实名认证框。

### 如何控制未成年人的支付限额？

针对未成年人的支付限额由华为自动控制，无需游戏额外处理。

### 如何判断玩家是否已成年？

使用防沉迷接口gameLoginWithReal登录后，调用getPlayerExtraInfo接口，成功回调返回的isAdult参数为true表示成年。

### 如何查询玩家游戏时长？

使用防沉迷接口gameLoginWithReal登录后，调用getPlayerExtraInfo接口，成功回调返回的playerDuration参数为玩家游戏时长，单位为分钟。

## 其他

### 如何实现快游戏与APK游戏的华为账号互通？

* **方案一：**
  1. 通过[qg.gameLoginWithReal](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-account-0000001083874630#section73325514166)获取playerId。
  2. 通过[批量查询openId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-openid-0000001452874029)接口，使用playerId获取对应的openId。
  3. 使用[通过OpenID获取UnionID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-unionid)接口获取对应的unionId。
* **方案二：**
  1. APK游戏在登录时调用[PlayersClient.getGamePlayer](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/playersclient-0000001050121668#section42711354164416)接口，并将参数isRequirePlayerId设置为true，得到openId、unionId以及playerId。

     ```
     public void getGamePlayer() {
         // 调用getPlayersClient方法初始化
         PlayersClient client = Games.getPlayersClient(this);
         // 执行游戏登录
         Task<Player> task = client.getGamePlayer(true);
         task.addOnSuccessListener(new OnSuccessListener<Player>() {
             @Override
             public void onSuccess(Player player) {
                 String displayName = player.getDisplayName(); // 免授权登录场景下无法获取玩家昵称
                 String unionId = player.getUnionId();
                 String openId = player.getOpenId();
                 String playerId = player.getPlayerId();
                 // 获取玩家信息成功，校验服务器端的玩家信息，校验通过后允许进入游戏
             }
         }).addOnFailureListener(new OnFailureListener() {
             @Override
             public void onFailure(Exception e) {
                 if (e instanceof ApiException) {
                     String result = "rtnCode:" + ((ApiException) e).getStatusCode();
                     // 获取玩家信息失败，不允许进入游戏，并根据错误码处理
                     if (7400 == ((ApiException) e).getStatusCode()||7018 == ((ApiException) e).getStatusCode()) {
                         // 7400表示用户未签署联运协议，需要继续调用init接口
                         // 7018表示初始化失败，需要继续调用init接口
                         init();
                     }
                 }
             }
         });
     }
     ```
  2. 快游戏在登录时调用[qg.gameLoginWithReal](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-account-0000002365996984#section73325514166)得到playerId。

     ```
     gamelogin(){
         console.log("Sign-in");
         qg.gameLoginWithReal({
             forceLogin:1,
             appid:"103***5",
             success:function(data){
                 // 登录成功后，可以存储账号信息。
                 console.log(" game login with real success:" + JSON.stringify(data));
             },
             fail:function(data,code){
                 console.log("game login with real fail:" + data + ", code:" + code);
                 //根据状态码处理游戏的逻辑。
                 //状态码为7004或者2012，表示玩家取消登录。
                 //此时，建议返回游戏界面，可以让玩家重新进行登录操作。
                 if(code ==7004||code ==2012){
                     console.log("玩家取消登录，返回游戏界面让玩家重新登录。")
                 }
                 //状态码为7021表示玩家取消实名认证。
                 //在中国大陆的情况下，此时需要禁止玩家进入游戏。
                 if(code ==7021){
                     console.log("The player has canceled identity verification. Forbid the player from entering the game.")
                 }
             }
         });
     }
     ```
  3. 使用playerId将快游戏和APK游戏进行关联互通。
