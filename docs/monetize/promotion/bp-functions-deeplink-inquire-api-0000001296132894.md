---
title: "通过API接口查询(方式二)"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-inquire-api-0000001296132894
format: md
---

# 通过API接口查询(方式二)

## 功能介绍

此接口用于开发者查询应用的延迟Deeplink信息。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

![](./img/32769364e6c7.png) 

- 用户已关闭限制广告标识符开关。
- 仅用户首次打开通过配置延迟Deeplink任务下载的应用时才可以发起接口调用。
- 使用固定的智能分包渠道号创建配置延迟Deeplink的任务，当应用打开时，若该应用配置了延迟Deeplink，您可以发起接口调用。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/deferredDeeplink |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-ocpx-return-0000001282520037#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-ocpd-interface-token-0000001238324536)中获取的access\_token。 |

![](./img/e57bd6d73bfe.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账户</strong>创建API客户端和获取Access Token。

### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| oaid | M | String(64) | 用户的设备唯一标识。  注意：  如果此字段值为一串0，则会造成所有这种用户获取的Deeplink都一样，这个Deeplink不一定是当前投放任务的链接，最终导致跳转到其他页面。 |
| packageName | M | String(1024) | 应用包名。 |
| customerId | O | String(64) | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>。登录[华为应用市场应用推广平台](https://developer.huawei.com/consumer/cn/service/apcs/app/home.html)后在“我的账号信息”中查看“华为账号”。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/deferredDeeplink
Content-type: application/json
Authorization: Bearer ***
client_id:***

{
    "oaid":"3503ba53-** **-** **-8ca3-edd777c627ef",
    "packageName":"com.huawei.xxx"
}
```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| code | M | Integer(32) | 返回码，20770001表示成功，参考错误码。 |
| msg | O | String | 返回码描述信息。 |
| deferredDeeplink | O | String | 延迟Deeplink信息。 |

## 错误码

| 错误码 | 错误描述 |
| --- | --- |
| 20770002 | 用户允许清单校验出错。 |
| 20770003 | 请求参数错误。出现该错误的原因有：   - 入参oaid或packageName无效。 - 该packageName不属于该用户推广，不能查询。 |
| 20770004 | 内部错误，如微服务调用异常、获取用户推广应用信息失败等。 |
| 20770027 | 系统错误。出现该错误的原因有：   - 应用包名匹配不到相应的Store应用Id。 - 应用包名对应的Store应用Id匹配不到相应的联盟应用Id。 - 应用包名对应的联盟应用Id没有添加到延迟deeplink应用允许清单中。 - 根据应用包名对应的联盟应用Id、oaid查询不到deeplink信息。 |

## 响应示例

```
{
    "code": 20770001,
    "deferredDeeplink":"myapp://test"
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/deferredDeeplink  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"oaid":"3503ba53-** **-** **-8ca3-edd777c627ef","packageName":"com.huawei.xxx"}' 

“Java”
/**
 * 查询延时Deeplink
 * @param token 认证信息
 * @throws InvocationTargetException
 * @throws IllegalAccessException
 */
public static void queryDeferredDeeplink(String domain, String clientId, String token) throws InvocationTargetException, IllegalAccessException {
 /** 用户设备标识*/
 String oaid = "3503ba53-** **-** **-8ca3-edd777c627ef";
 
 /** 应用包名*/
 String packageName = "com.huawei.xxx";
 
 /** 一级代理用户的内部ID */
 String customerId = null;
 
 /**  新建查询延时Deeplink的请求条件 */
QueryDeferredDeeplinkReq reqInfo = new QueryDeferredDeeplinkReq();
 reqInfo.setOaid(oaid);
 reqInfo.setPackageName(packageName);
 reqInfo.setCustomerId(customerId);
  
 /** 发送请求 */
 QueryDeferredDeeplinkImpl.queryDeferredDeeplink(domain, clientId, token, reqInfo);
}
 
/**
 * 查询延时Deeplink
 *
 * @author xxxxxxxxx
 * @since 2022-01-01
 */
public class QueryDeferredDeeplinkImpl {
 
    public static void queryDeferredDeeplink(String domain, String clientId, String token, QueryDeferredDeeplinkReq req)
            throws InvocationTargetException, IllegalAccessException {
 
        try {
            /** 新建POST请求 */
            HttpPost post = new HttpPost(domain + "/marketing-api/v2/deferredDeeplink");
 
            /** 设置Header认证信息 */
            post.setHeader("Authorization", "Bearer " + token);
            post.setHeader("client_id", clientId);
 
            /** 组装请求Body，使用JSON格式携带查询信息 */
            String reqStr = JSON.toJSONString(req);
            StringEntity entity = new StringEntity(reqStr, Charset.forName("UTF-8"));
            entity.setContentEncoding("UTF-8");
            entity.setContentType("application/json");
 
            /** 设置请求Body */
            post.setEntity(entity);
 
            /** 发送请求 */
            CloseableHttpClient httpClient = HttpClients.createDefault();
            CloseableHttpResponse httpResponse = httpClient.execute(post);
 
            /** 处理返回参数 */
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            if (statusCode == HttpStatus.SC_OK) {
                BufferedReader br =
                        new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
                String result = br.readLine();
 
                JSONObject object = JSON.parseObject(result);
                System.out.println(object);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
```
