---
title: "C#"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-initializing-signatures-csharp-0000002359707102
format: md
---


为了提升服务的安全性，防止非法用户冒用合法的openId接入游戏多媒体服务，游戏多媒体服务SDK支持通过验签的方式校验玩家身份。在您的服务端，您需要通过游戏ID、游戏密钥、玩家openId等信息计算出游戏签名，然后发送给游戏客户端。客户端在游戏多媒体SDK初始化时传入签名，并完成验签。

## 前提条件

* 您已[开通游戏多媒体服务](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-enable-0000002338511697)。
* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-0000002359547042)。
* 您已[开启接入安全加固](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-console-servicemanagement-0000002338391901#section92517364165)。
* 您已[记录下游戏私钥信息](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-console-servicemanagement-0000002338391901#ZH-CN_TOPIC_0000002382054353__zh-cn_topic_0000001255134391_li2471125718563)。

## 签名计算方式

计算签名涉及字段如下：

| 字段名 | 类型 | 含义 |
| --- | --- | --- |
| appId | string | 应用ID。  说明：  在AGC创建项目和添加应用后，记录的应用下的“APP ID”信息，具体请参见[准备游戏信息](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-gameinformation-0000002304472612)。 |
| nonce | string | 随机数，最小长度1字节，最大长度1024字节。 |
| openId | string | 玩家ID。  说明：  可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。 |
| timestamp | string | 时间戳。 |
| gameSecret | string | 游戏密钥。  说明：  开通“游戏服务”后记录下的“游戏私钥”。 |

1. 拼接签名信息。

   ```
   // 注意字段的顺序为appId、nonce、openId、timestamp
   // 字段和值之间使用=连接
   // 不同字段之间使用&连接
   String sourceStr = "appId=" + appId + "&nonce=" + nonce + "&openId=" + openId + "&timestamp=" + timestamp;
   ```
2. 以gameSecret作为私钥计算出sourceStr的SHA256withRSA值，然后使用Base64对签名进行编码。

   ![](./img/bb601090.png)

   签名算法需采用SHA256withRSA/PSS，PSS构造器的参数（具体参见使用示例）：

   * mdName：消息摘要算法，使用“SHA-256”。
   * mgfName：掩码生成函数，使用“MGF1”。
   * mgfSpec：掩码生成函数的参数，使用“MGF1ParameterSpec.SHA256”。
   * saltLen：盐值，32。
   * trailerField：尾部字段值，1。

   ```
   // 使用gameSecret作为私钥计算sourceStr的SHA256withRSA值
   // 然后使用Base64编码
   String sign = Base64.encode(SHA256withRSA(sourceStr, gameSecret));
   ```

## 使用示例

### 服务端

服务端可使用通用的SHA256withRSA算法生成签名，返回给客户端。计算签名的示例代码如下：

```
“Java”
public static final String ALGORITHM_NAME = "SHA256withRSA/PSS";
public static final String MD_NAME = "SHA-256";
public static final String MGF_NAME = "MGF1";
public static final int SALT_LEN = 32;
public static final int TRAILER_FIELD = 1;
public static String generate(String appId, String openId, String nonce, String timestamp, String privateKey) {
	if (Utils.isEmpty(privateKey)) {
		LogUtil.e(TAG, "privateKey is empty.");
		return null;
	}
	PrivateKey priKey = getPrivateKey(privateKey);
	if (priKey == null) {
		LogUtil.e(TAG, "getPrivateKey failed.");
		return null;
	}
	String sourceStr = "appId=" + appId + "&nonce=" + nonce + "&openId=" + openId + "&timestamp=" + timestamp;
	return sign(sourceStr, priKey);
}

public static PrivateKey getPrivateKey(String privateKeyStr) {
	try {
		byte[] privatekey = Base64.decode(privateKeyStr, Base64.NO_WRAP);
		PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privatekey);
		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		return keyFactory.generatePrivate(keySpec);
	} catch (IllegalArgumentException e) {
		LogUtil.e(TAG, "base64 decode IllegalArgumentException");
	} catch (GeneralSecurityException e) {
		LogUtil.e(TAG, "load Key Exception:" + e.getMessage());
	} catch (Exception e) {
		LogUtil.e(TAG, "base64 decode Exception" + e.getMessage());
	}
	return null;
}

private static String sign(String data, PrivateKey priKey) {
	try {
		Signature signature = Signature.getInstance(ALGORITHM_NAME);
		signature.setParameter(
			new PSSParameterSpec(MD_NAME, MGF_NAME, MGF1ParameterSpec.SHA256, SALT_LEN, TRAILER_FIELD));
		signature.initSign(priKey);
		signature.update(data.getBytes(StandardCharsets.UTF_8));
		byte[] result = signature.sign();
		return Base64.encodeToString(result, Base64.NO_WRAP);
	} catch (NoSuchAlgorithmException e) {
		LogUtil.e(TAG, "sign NoSuchAlgorithmException: " + e.getMessage());
	} catch (InvalidKeyException e) {
		LogUtil.e(TAG, "sign InvalidKeyException: " + e.getMessage());
	} catch (SignatureException e) {
		LogUtil.e(TAG, "sign SignatureException: " + e.getMessage());
	} catch (InvalidAlgorithmParameterException e) {
		LogUtil.e(TAG, "sign InvalidAlgorithmParameterException: " + e.getMessage());
	} catch (Exception e) {
		LogUtil.e(TAG, "sign Exception: " + e.getMessage());
	}
	return null;
}
```

```
“Node.js”
const crypto = require("crypto");

function buildInputStr(appId, nonce, openId, timestamp) {
  return`appId=${appId}&nonce=${nonce}&openId=${openId}&timestamp=${timestamp}`;
}

function sha256withRSA(inputString, privateKey) {
  const signature = crypto.createSign("RSA-SHA256");
  signature.update(inputString, "utf-8");
  const sign = signature.sign({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: 32,
  }, "base64");
  return sign;
}

/**
 * 生成签名
 * @param privateKey {string} 游戏密钥
 * @param appId {string} 应用 ID
 * @param openId {string} 玩家 ID
 */
function getSignature(privateKey, appId, openId) {
  const nonce = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
  const timestamp = Math.floor(Date.now() / 1000);
  const str = buildInputStr(appId, nonce, openId, timestamp);
  const sign = sha256withRSA(str, privateKey);
  return { sign, nonce, timestamp };
}
export default getSignature;
```

### 客户端

客户端在初始化游戏多媒体SDK时，调用创建游戏多媒体实例方法，并在入参对象中额外再传入sign、nonce、timestamp三个参数即可。代码示例如下：

* Native

  ```
  EngineCreateParams params = new EngineCreateParams();
  engineParams.OpenId = openId; // 玩家ID
  engineParams.ClientId = clientId; // 客户端ID
  engineParams.ClientSecret = clientSecret; // 客户端密钥
  engineParams.AppId = appId; // 应用ID
  engineParams.ApiKey = apiKey; // API密钥
  engineParams.LogEnable = true; // 开启SDK日志记录
  engineParams.LogPath = Application.persistentDataPath; // 日志路径
  engineParams.LogSize = 10240; // 日志存储大小
  engineParams.CpAccessToken = cpAccessToken; // AGC接入凭证
  Timestamp = timestamp, // 时间戳
  Nonce = nonce, // 随机数
  Sign = sign  // 签名
  ```
* 小游戏

  ```
  EngineCreateParamsForMiniGames engineParams = new();
  engineParams.OpenId = openId;                          // 玩家ID
  engineParams.ClientId = clientId;                      // 客户端ID
  engineParams.ClientSecret = clientSecret;              // 客户端密钥
  engineParams.AppId = appId;                            // 应用ID
  engineParams.CpAccessToken = cpAccessToken;            // AGC接入凭证（推荐）
  engineParams.Timestamp = timestamp;                    // 时间戳
  engineParams.Nonce = nonce;                            // 随机数
  engineParams.Sign = sign;                              // 签名
  ```
