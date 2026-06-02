---
title: "支付"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-faq-payment-0000002458692481
---

## 调用支付接口

### 调用支付接口时，出现Uncaught Error: Java exception was raised during method invocation，如何处理？

请检查组装完订单信息后，是否将订单信息转化为JSON格式后赋值给orderInfo，即是否执行了示例代码中的var param2 = \&#123;"orderInfo":JSON.stringify(param1)\&#125;。

### 支付时返回-1005错误码（game pay fail -1005），如何处理？

出现此错误提示，表示调试的手机非华为手机，请尽量使用华为手机进行调试。

### 快游戏的支付是否可以使用快应用的支付3.0接口？

请参见[应用内支付服务](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-iap-consumable-0000002317894836)。

## 支付报错或失败

### 支付时返回1的错误码，如何处理？

出现错误码1，表示调试手机上没有安装“HMS Core”，一般华为手机会预装此应用，请尽量使用华为手机调试，如果手机应用管理中没有找到“HMSCore”的应用，请到华为应用市场下载安装。

### 为什么邮箱会收到很多重复的订单支付失败的通知？

若开发者返回华为非成功的响应（返回非0的result值），华为将对同一笔订单的通知进行周期性重发。

### 快游戏支付时提示30102错误码，如何处理？

说明此华为账号未进行实名认证，不允许接入支付。

### 应用内支付提示请求异常，要退出此次支付后重试，如何处理？

一般是支付参数错误导致的，请检查参数的正确性。

### 支付失败提示Unable to use payment services.Please change your HUAWEI ID service area？，如何处理？

某些国家还不支持IAP支付，选择游戏发布国家时请必须选择支持IAP的国家。

### 点击支付拉起华为应用内支付，提示网络错误，请重新连接，如何处理？

可能是支付订单参数类型错误。

## 支付验签和限制

### 快游戏应用内支付的金额有大额限制吗？

目前没有限制，金额由开发者设定。

### 文档中只描述需要对游戏时长做防沉迷处理，那么未成年人支付如何处理？

不需要额外处理。

未成年人账号登录后，登录时就会自动拉起实名认证框，只有先实名认证后才可以支付，且未成年人支付有限额。

### 支付验签时，使用华为支付公钥进行签名时，一直报错RSA key format is not supported，但是检查公钥格式是正确的，是否公私钥生成时会进行加密？

使用AppGallery Connect获取的公钥是没有问题的，请检查支付传递参数时，是否缺失部分导致参数格式出现错误。

### 快游戏如何正确生成支付签名字符串？

1. 快游戏用户发起购买后，开发者需要生成orderInfo订单信息。
2. 开发者将原始orderInfo通过安全通道（比如HTTPS）发送到自己的服务器做签名，签名算法如下：
   1. 构造源串

      支付参数中需要参与签名的参数（参见orderInfo中标识需要签名的参数，sign和值为空&lt;包括null和""&gt;的不参与签名），按参数名的ASCII码的增序排序，若遇到相同首字母，则看第二个字母，以此类推。

      拼接后的源串格式为 a=xxxxxx&b=xxxxxxx&c=xxxxxxxxxxx 。
   2. 生成签名值
      1. 将源串使用RSA算法（SHA256WithRSA）进行签名。
      2. 将签名后的字符数组经过Base64编码，生成签名值。

服务端java代码如下：

```
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.*;
import org.apache.commons.codec.binary.Base64;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class PayVerify {
    public static void main(String args[]) {
        PayVerify pv = new PayVerify();
        System.out.println(pv.getSign());
    }
    private String getSign() {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("merchantId", "2850086000458411220");
        params.put("applicationID", "103775827");
        params.put("amount", "10.00");
        params.put("productName", "111");
        params.put("productDesc", "111");
        params.put("requestId", "5f435bad2a24dfdd9a779249f9d00b8e");
        params.put("sdkChannel", 3);
        params.put("urlver", "2");
        //注意：这里的key值为urlver ,v是小写。
        params.put("country", "CN");
        params.put("currency", "CNY");
        params.put("url", "https://mzapi.mirmzhy.com/huawei/fee");
        //对参数按照key做升序排序，对map的所有value进行处理，转化成string类型
        //拼接成key=value&key=value&....格式的字符串
        StringBuffer content = new StringBuffer();
        // 按照key做排序
        List<String> keys = new ArrayList<String>(params.keySet());
        Collections.sort(keys);
        String value = null;
        Object object = null;
        for (int i = 0; i < keys.size(); i++) {
            String key = (String) keys.get(i);
            object = params.get(key);
            if (object instanceof String) {
                value = (String) object;
            } else {
                value = String.valueOf(object);
            }
            if (value != null) {
                content.append((i == 0 ? "" : "&") + key + "=" + value);
            } else {
                continue;
            }
        }
        //待签名的字符串
        String signOri = content.toString();
        return rsaSign(signOri);
    }
    /**
     * 使用开发者联盟网站分配的支付私钥对支付信息进行签名
     * 强烈建议在商户服务端做签名处理，且私钥存储在服务端，防止信息泄露
     * CP通过服务器获取服务器端的签名之后，再进行支付请求
     *
     * @param content
     * @return
     */
    public static String rsaSign(String content) {
        if (null == content) {
            return null;
        }
        //开发者联盟网站申请的支付私钥，请妥善保管，最好存储在服务器端
        String privateKey = "MIIG/gIBADANBgkqhkiG9w0BAQEFAASCBugwggbkAgEAAoIBgQDLTopl7d3PQQtLrjzLsjpdTAGxOd2rbn5gHidEeB6lYO90xHu6IjZIbeQCIbeeHyR44jAzGWSxZ5RnlXCQZkVFK9p3to61ftUy80U7Klfax ";
        //使用加密算法规则
        String SIGN_ALGORITHMS = "SHA256WithRSA";
        String charset = "UTF-8";
        try {
            //Base64请采用服务器端标准的Base64算法库。
            PKCS8EncodedKeySpec priPKCS8 = new PKCS8EncodedKeySpec(Base64.decodeBase64(privateKey));
            KeyFactory keyf = KeyFactory.getInstance("RSA");
            PrivateKey priKey = keyf.generatePrivate(priPKCS8);
            Signature signature = Signature.getInstance(SIGN_ALGORITHMS);
            signature.initSign(priKey);
            signature.update(content.getBytes(charset));
            byte[] signed = signature.sign();
            //Base64请采用服务器端标准的Base64算法库。
            return Base64.encodeBase64String(signed);
        } catch (NoSuchAlgorithmException e) {
            System.out.println("sign NoSuchAlgorithmException");
        } catch (InvalidKeySpecException e) {
            System.out.println("sign InvalidKeySpecException");
        } catch (InvalidKeyException e) {
            System.out.println("sign InvalidKeyException");
        } catch (SignatureException e) {
            System.out.println("sign SignatureException");
        } catch (UnsupportedEncodingException e) {
            System.out.println("sign UnsupportedEncodingException");
        }
        return null;
    }
}
```

## 其他

### 快游戏从旧账号转移到新账号后，旧账号下的应用内支付服务无效了，如何处理？

当前应用内支付服务不支持直接账号转移，转移后需要使用新账号重新申请应用内支付服务，并修改代码中相关支付信息。

### 支付拉起华为应用内支付后，点击支付宝支付和微信支付没有反应，如何处理?

出现该异常是由于华为支付在调用支付宝sdk和微信sdk时传参校验不通过导致的，而参数是开发者调用支付时传入的，一般为url等参数不合法导致的，比如传入\t、空格等，请重点检查支付参数中的url字段。

### 支付完成后服务器端收到回调内容后，需要返回什么内容？

需要响应华为服务器，游戏需要完成验签后给服务器返回\&#123;result:0\&#125;。

### 手机点击支付没有反应，无法拉起支付收银台，如何处理？

在支付接口调用前、后加日志判断是否正确成功调用支付接口，否则无论成功还是失败都会返回对应的错误码。

### 手机支付后未收到支付回调，如何处理？

检查AppGallery Connect配置的回调地址和支付传参时的url是否正确，在AppGallery Connect配置的值优先使用。

### 快游戏支付是否支持沙盒测试？

支持。请参见[沙盒测试](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-iap-public-0000002317894840)。

### 有笔订单华为方查询是超时的，但游戏侧确认已经成功进账，该如何处理？

超时是由于游戏服务器没有及时给华为\&#123;result:0\&#125;的回调响应，重新对此订单给予响应即可。

### 快游戏使用托管支付时，提示商品信息不存在，请联系应用厂商，如何处理？

说明在AppGallery Connect上配置的商品信息有问题，请检查商品的配置。

### 点击支付，拉起2次华为应用内支付，如何处理？

支付代码逻辑可能有问题，请检查是否存在重复调用支付接口的情况。

### 托管支付中的商品如何批量导入？

下载对应的添加或者修改excel模板，按格式填写后导入AppGallery Connect。详细操作参见[批量导入商品](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-product-0000001099854866#section173850553264)。

### 针对没发货成功的问题订单，在华为开发者联盟进行补发会触发什么流程？

补发会触发华为支付服务器向开发者服务器发送支付成功的回调。
