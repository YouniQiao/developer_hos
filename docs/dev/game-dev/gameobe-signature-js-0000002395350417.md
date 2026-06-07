---
title: "使用签名初始化SDK"
original_url: /docs/dev/game-dev/gameobe-signature-js-0000002395350417
format: md
---


为了提升服务的安全性，在初始化SDK时，您还可以选择使用签名的方式进行安全加固，增强数据防篡改能力。在您的服务器端，您需要通过游戏ID、游戏密钥、玩家openId等信息计算出游戏签名，然后发送给游戏客户端。客户端在SDK初始化、掉线重连等场景中均会验证玩家签名信息。

## 前提条件

* 您已[开通联机对战服务](/docs/dev/game-dev/gameobe-enable-0000002395350369)。
* 您已[集成联机对战SDK](/docs/dev/game-dev/gameobe-integratingsdk-js-0000002361670432)。
* 您已[开启接入安全加固](/docs/dev/game-dev/gameobe-console-servicemanagement-0000002361510560#section1499524456)。
* 您已[记录下游戏私钥信息](/docs/dev/game-dev/gameobe-console-servicemanagement-0000002361510560#ZH-CN_TOPIC_0000002361510560__li1235121816449)。

## 签名计算方式

计算签名涉及字段如下：

| 字段名 | 类型 | 含义 |
| --- | --- | --- |
| appId | string | 应用ID。  说明：  您可登录AGC控制台，进入“我的项目 \&gt; 项目设置 \&gt; 常规 \&gt; 应用” 获取“APP ID”信息，具体请参见[准备游戏信息](/docs/dev/game-dev/gameobe-gameinformation-0000002361670424)。 |
| nonce | uint64 | 安全随机数，取值范围8~128字节。 |
| openId | string | 玩家ID。  说明：  “玩家ID”可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。 |
| timestamp | uint64 | 时间戳。 |
| gameSecret | string | 游戏密钥。  说明：  * “游戏密钥”为开通“游戏服务”后记录下的“游戏私钥”信息。 * 当以Node.js作为开发语言时，如使用gameSecret，则需做如下拼接：    ```   `-----BEGIN PRIVATE KEY-----   $\&#123;gameSecret\&#125;   -----END PRIVATE KEY-----`;   ``` |

1. 拼接一个字符串str。

   ```
   “Node.js”
   // 注意字段的顺序为appId、nonce、openId、timestamp
   // 字段和值之间使用=连接
   // 不同字段之间使用&连接
   const str = "appId=应用ID&nonce=安全随机数&openId=玩家ID&timestamp=时间戳"
   ```

   ```
   “Java”
   // 注意字段的顺序为appId、nonce、openId、timestamp
   // 字段和值之间使用=连接
   // 不同字段之间使用&连接
   string str = "appId=应用ID&nonce=安全随机数&openId=玩家ID&timestamp=时间戳"
   ```
2. 以gameSecret作为密钥，使用SHA256withRSA/PSS填充签名算法对str进行签名，并使用BASE64对签名进行编码。

   ```
   “Node.js”
   // 使用SHA256withRSA/PSS签名算法，对str进行签名
   const signature = crypto.createSign("RSA-SHA256").update(str, "utf-8")；
   // 以gameSecret作为密钥，使用Base64编码
   const privateKey = `-----BEGIN PRIVATE KEY-----
   ${gameSecret}
   -----END PRIVATE KEY-----`;
   const sign = signature.sign({
     key: privateKey,
     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
     saltLength: 32,
   }, "base64")；
   ```

   ```
   “Java”
   // 使用SHA256withRSA/PSS填充签名算法，以gameSecret作为密钥对str进行签名
   Security.addProvider(new BouncyCastleProvider());
   Signature signature = Signature.getInstance("SHA256withRSA/PSS");
   signature.initSign(gameSecret);
   signature.update(data);
   // 使用BASE64对签名进行编码
   return Base64.encodeBase64String(signature.sign());
   ```

## 使用示例

### 服务端

服务端可使用一个HTTPS服务计算签名，然后将签名sign、安全随机数nonce、时间戳timestamp返回给客户端。计算签名的示例代码如下：

```
“Node.js”
const crypto = require("crypto");

function buildInputStr(appId, nonce, openId, timestamp) {
  return `appId=${appId}&nonce=${nonce}&openId=${openId}&timestamp=${timestamp}`;
}

function sha256withRSA(inputString, gameSecret) {
  const privateKey = `-----BEGIN PRIVATE KEY-----
${gameSecret}
-----END PRIVATE KEY-----`;
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
 * @param gameSecret {string} 游戏密钥
 * @param appId {string} 应用 ID
 * @param openId {string} 玩家 ID
 */
function getSignature(gameSecret, appId, openId) {
  const nonce = Math.floor(Math.random() * (Math.pow(2, 32) - 1)).toString();
  const timeStamp = Math.floor(Date.now() / 1000);
  const str = buildInputStr(appId, nonce, openId, timeStamp);
  const sign = sha256withRSA(str, gameSecret);
  return { sign, nonce, timeStamp };
}

export default getSignature;
```

```
“Java”
/**
 * RAS签名示例,采用SHA256withRSA/PSS算法
 * 算法实现jar包:
 *     <dependency>
 *       <groupId>org.bouncycastle</groupId>
 *       <artifactId>bcprov-ext-jdk15on</artifactId>
 *       <version>1.68</version>
 *     </dependency>
 *
 */
public class RsaCryptUtil {
    /**
     * SHA256withRSA + pss填充 签名
     *
     * @param appId appId
     * @param openId 玩家Id
     * @param gameSecret 私钥
     * @return 签名
     */
    public static String signRSAWithPSS(String appId, String openId, String gameSecret)
        throws GeneralSecurityException {
        String nonce = genSecureRandomBytesToHex(8);
        long timeStamp = System.currentTimeMillis();
        String signData = RsaCryptUtil.signData(appId, nonce, openId, timeStamp);
        try {
            byte[] data = signData.getBytes();
            // 获取私钥
            byte[] keyBytes = Base64.decodeBase64(gameSecret.getBytes(StandardCharsets.UTF_8));
            PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(keyBytes);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PrivateKey priKey = keyFactory.generatePrivate(pkcs8KeySpec);

            Security.addProvider(new BouncyCastleProvider());
            Signature signature = Signature.getInstance("SHA256withRSA/PSS");
            signature.initSign(priKey);
            signature.update(data);

            return Base64.encodeBase64String(signature.sign());
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    /**
     * 签名的数据
     *
     * @param appId 应用Id
     * @param nonce 安全随机数
     * @param openId 玩家Id
     * @param timestamp 时间戳
     * @return 签名数据
     */
    public static String signData(String appId, String nonce, String openId, long timestamp) {
        return "appId=" + appId + "&" + "nonce=" + nonce + "&" + "openId=" + openId + "&" + "timestamp=" + timestamp;
    }

    /**
     * 获取安全随机数
     *
     * @param byteArraylenth 字节数组长度
     * @return 安全随机数
     * @throws GeneralSecurityException 异常
     */
    public static String genSecureRandomBytesToHex(int byteArraylenth) throws GeneralSecurityException {
        return toHex(generateSecureRandomBytes(byteArraylenth));
    }

    public static byte[] generateSecureRandomBytes(int byteSize) throws GeneralSecurityException {
        SecureRandom source = SecureRandom.getInstanceStrong();
        boolean predictionResistant = true;
        BlockCipher cipher = new AESEngine();
        int cipherLen = 256;
        int entropyBitesRequired = 384;
        byte[] nonce = new byte[cipherLen / 8];
        source.nextBytes(nonce);
        boolean reSeed = false;
        SecureRandom random =
            (new SP800SecureRandomBuilder(source, predictionResistant)).setEntropyBitsRequired(entropyBitesRequired)
                .buildCTR(cipher, cipherLen, nonce, reSeed);

        byte[] bytes = new byte[byteSize];
        random.nextBytes(bytes);
        return bytes;
    }

    public static String toHex(byte[] byteArr) {
        StringBuilder builder = new StringBuilder();
        if (null == byteArr) {
            return null;
        } else {
            for (byte b : byteArr) {
                String hv = Integer.toHexString(b & 255);
                if (hv.length() < 2) {
                    builder.append(0);
                }
                builder.append(hv);
            }
            return builder.toString();
        }
    }

}
```

### 客户端

客户端在初始化SDK时，需要实现一个[createSignature](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-clientconfig-js-0000002395195997#ZH-CN_TOPIC_0000002395195997__p611992815711)签名函数，从服务端获取签名信息然后回调给SDK。示例代码如下:

```
const { Client } = window.GOBE;
const client = new Client({
  clientId: '{clientId}',
  clientSecret: '{clientSecret}',
  openId: '{openId}',
  appId:'{appId}',
  createSignature: () => {
    return fetch('https://example.com/sign')
        .then((rsp) =>rsp.json())
        .then((json) => {
           const { sign, nonce, timeStamp } = json.data;
           return { sign, nonce, timeStamp };
      });
  },
});
```
