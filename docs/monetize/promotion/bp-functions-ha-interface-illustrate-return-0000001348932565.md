---
title: "HA回传接口"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-ha-interface-illustrate-return-0000001348932565
format: md
upstream_id: monetize/promotion/bp-functions-ha-interface-illustrate-return-0000001348932565
last_sync: 2026-06-07
sync_hash: dbb0305c
---
# HA回传接口

HA平台可以通过此章节调用接口，回传转化事件到华为应用市场应用推广平台，广告主仅做了解即可。

## 功能介绍

此接口用于HA平台回传用户在广告应用内的行为数据。

## 使用约束

接口调用者的角色：广告投放分析平台。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 广告投放分析平台 &gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/datasource/attribution/event |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/monetize/promotion/bp-functions-ocpx-return-0000001282520037#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。获取access\_token请参见[获取Token](/docs/monetize/promotion/bp-functions-ocpd-interface-token-0000001238324536)。 |

### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| channel | M | String(64) | 广告投放分析工具提供商名称，由华为应用市场应用推广平台分配，线下联系华为运营获取。 |
| appId | M | String(32) | 应用ID，您的应用ID需要使用<strong>直客账号</strong>参考[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)获取。 |
| oaid | M | String(128) | 用户标识ID类型，请填写oaid原值。 |
| actionTime | M | Long | 用户在广告应用内的行为UTC时间戳，精确到毫秒，例如1593608299858。 |
| actionType | M | String(64) | 用户发生的标准行为。  当前回传的是字符串格式的数字。  取值范围：   - 1：应用激活 - 2：启动应用 - 3：次日留存 - 4：首次付费、每次付费 说明：  全部付费量回传到回传值“4”，由系统自动拆分“首次付费量”和“每次付费量”两个指标，分别用于“首次付费”目标和“每次付费”目标的投放。    - “首次付费量”按自然日对用户去重。   - “每次付费量”则计入全部回传量，不做去重。 例：一个用户推广下载后在T日付费2次，则T日的首次付费量为1，每次付费量为2。 - 5：提交表单 - 6：授权 - 7：注册 说明：  <strong>说明：</strong>此处的注册仅为进入一个App需要的账号注册，例如使用手机号码注册此App。 - 9：关键页面访问 - 14：申请 - 18：下单 - 21：预约 - 101：关键行为1 - 102：关键行为2   具体取值在支持<strong>oCPD单转化目标</strong>和<strong>oCPD双目标</strong>的能力细节说明如下：  当前支持投放<strong>oCPD的单转化目标</strong>：  “1”（应用激活）、“3”（次日留存）、“4”（首次付费、每次付费）、“7”（注册）、“6”（授权）  当前支持投放<strong>oCPD的双目标</strong>：   - <strong>激活-次日留存双目标</strong>：回传“1”（应用激活）、“3”（次日留存）。 - <strong>激活-首日ROI双目标</strong>：回传“1”（应用激活）、“4”（首次付费、每次付费）、首日付费金额。   其余取值只支持回传归因和报表展示。 |
| missType | O | String(1) | 此次记录是否为补报记录。非必填项，一般请求中无需有此字段。因为服务器故障导致字段未正常上报，次日或之后请使用此字段。   - Y：补报 - 不传此参数或设为空字符串：非补报   说明：  此字段为Y时，请使用actionTime字段填写转化实际发生时间。比如5号补报4号的转化数据，actionTime字段应该填写4号转化实际发生的时间，这样转化数据才会正确展示在4号的任务报表上。 |
| callback | M | String(1024) | 请回传通过对接归因方案获取的callback原值。 |
| clickTraceback | O | Integer | 点击归因的追溯时间（天），下载、安装等非曝光归因共用此参数，支持配置7~30天，默认为30天。 |
| exposureTraceback | O | Integer | 曝光归因的追溯时间（天），支持配置1~7天，默认为7天。 |
| trackingEnable | O | String(1) | 是否启用基于oaid的广告跟踪，取值示例：  0：不启用广告跟踪  1：启用广告跟踪 |
| ip | O | String(32) | 发生转发事件的终端设备IPv4地址。 |
| userAgent | O | String(4096) | 用户代理的UTF-8编码。 |
| carrier | O | String(16) | 移动国家码+移动网号，如 46002。 |
| networkType | O | String(16) | 网络类型：“WIFI”、“5G”、“4G”。 |
| customAction | O | String(64) | 自定义行为名称。 |
| actionParam | O | String(10240) | 用户行为属性。  用于oCPD投放首日ROI目标，作为“付费”行为的参数回传（首日ROI的“付费”行为需回传首日付费行为），请在value值中回传首日付费金额，单位是“元”。  格式为数组，数组里为json字符串，示例如下：   ``` [\{'name':'付费金额','value':8\}] ```   注意：  oCPD投放首日ROI双目标出价需要同时回传“应用激活”、“首日付费行为”和“首日付费金额”。 |

## 请求示例

- 回传激活应用示例代码如下：

  ```
  POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/datasource/attribution/event
  Content-type: application/json
  Authorization: Bearer ***
  client_id:***

  {
      "channel":"***",
      "appId":"10***68",
      "oaid"："17cac808-57d4-49c7-a883-0c5c58ec6058",
      "actionTime":1593608299858,
      "actionType":"1",
      "callback":"security:E12B2C8633** **B040872600:** ** ** ** **"
      "clickTraceback":30,
      "exposureTraceback":7,
      "trackingEnable":"1",
      "ip":"*.*.5.23",
      "userAgent":"Mozilla/5.0 (Linux; Android 10; WLZ-AL10 Build/HUAWEIWLZ-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile     Safari/537.36", 
      "carrier":"4***2",
      "networkType":"WIFI"
  }
  ```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| code | M | Integer(32) | 返回码，0表示成功，参考[错误码](#section495318432241)。 |
| msg | O | String | 返回码描述信息。 |

## 错误码

| 错误码（errorCode） | 错误描述（errorMsg） |
| --- | --- |
| 136118275 | - 用户id无权限。 - 用户id和channel不匹配。 |
| 136183813 | 回传用户行为数据的数据源不存在。  数据回传需要广告主在华为应用市场应用推广平台创建数据源，出现此错误的可能原因有：   - 未在华为应用市场应用推广平台创建华为分析数据源。 - 请求中appid不对，需要纯数字格式。 |
| 136183814 | 回传用户行为数据的应用不在允许清单内。 |
| 136183815 | 回传用户行为数据的请求参数错误。 |
| 136183816 | 请求为非归因数据，出现此错误的原因为：请求中callback为0。 |
| 136183817 | 回传行为不存在，出现此错误的原因为：actionType字段传值错误。 |
| 136183818 | 回传数据归因不匹配，出现此错误可能的原因为：   - 请求中callback参数错误。 - 请求中appId与callback不匹配。 - 请求中oaid与callback不匹配。 - 传递的请求中的callback归因方式不匹配，即传递的callback非HA归因任务产生的callback。 |
| 136183819 | 回传数据重复。 |
| 136183820 | 内部错误。 |

## 响应示例

```
{
    "code": 0
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/datasource/attribution/event  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"channel":"***","appId":"10***68","oaid"："***","actionTime":15936***99858,"actionType":"1","callBack":"0"}'
```

```
“Java”
/**
 * 第三方分析平台回传归因数据
 * @param domain agc网关
 * @param clientId 用户id
 * @param token 认证信息
 * @throws InvocationTargetException
 * @throws IllegalAccessException
 */
public static void attributionEventCallback(String domain, String clientId, String token) throws InvocationTargetException, IllegalAccessException {
 /** 第三方分析提供商 */
 String channel = "***";
 
 /** 应用ID */
 String appId = "10***68";
 
 /** 用户设备标识 */
 String oaid = "***";
 
 /**  行为时间戳，UTC时间 */
 Long actionTime = 1593608299858L;

 /** 用户发生的标准行为 */
 String actionType = "1";

 /** callback匹配参数 call_back callback任务请求匹配标记 必填，按监测传递参数回传,如果非任务归因回传，则填0，系统生成callback不含0 */
 String callBack = "security:37453531323243363133394535443438423***435413534384442313232:5DDD0F5A81CBEBD54** ** **CCB2FEABE4A4A802526D25FC88F2B56F3494D383390DB993D140EE597B06837CC585051";
 
 /**  新建上传用户在应用内行为数据的请求条件，并插入数据 */
 AttributionEventCallback reqInfo = new AttributionEventCallback();
 reqInfo.setChannel(channel);
 reqInfo.setAppId(appId);
 reqInfo.setOaid(oaid);
 reqInfo.setActionTime(actionTime);
 reqInfo.setActionType(actionType);
 reqInfo.setCallBack(callBack);

 /** 发送请求 */
 AttributionEventReport.reportAttributionData(domain, clientId, token, reqInfo);
}
 
/**
 * 第三方分析平台回传归因数据
 *
 * @author xxxxxxxxx
 * @since 2022-02-28
 */
public class AttributionEventReport {
 
 public static void reportAttributionData(String domain, String clientId, String token, AttributionEventCallback req)
            throws InvocationTargetException, IllegalAccessException{
 
        try {
            /** 新建POST请求 */
            HttpPost post = new HttpPost(domain + "/marketing-api/v2/datasource/attribution/event");
 
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
