---
title: "推送基于账号的订阅消息"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-send-sub-noti
---

## 场景介绍

当用户授权同意订阅消息模板后，元服务的服务端主动调用服务通知REST API接口，向登录了账号的设备发送订阅消息（服务通知消息）。

## 频控规则

若订阅模板类型为“一次性订阅”，推送消息数量受控于元服务发起订阅请求并获得用户授权的次数。每次发送订阅消息都需要获取用户授权。当用户勾选 “总是保持以上选择” 之后，下次订阅调用[serviceNotification.requestSubscribeNotification](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-servicenotification#section11384539111610)()不会再向用户弹窗，保持之前的选择。

若订阅模板类型为“长期性订阅”，推送消息数量将在服务通知的模板详情页说明，元服务可在模板限制的订阅周期及频次内多次下发通知，而无需用户再次进行订阅操作，详情见[选用订阅模板](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-service-noti#section880418143379)。

## 开发指导

推送订阅消息的消息示例如下，更多详情请见[服务通知](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-api-service-noti)。

```
// Request URL
POST https://push-api.cloud.huawei.com/v1/[projectId]/service_notification/send

// Request Header
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****

// Request Body
{
  "msgId": "20240514ABCDE",
  "appId": "6**********972",
  "toOpenId": "A**********O",
  "templateId": "1**********2",
  "templateParams": {
    "thing_0": "待取号",
    "time_1": "2024年5月30日 13:00~2024年5月30日 14:00",
    "thing_2": "XX银行XX支行"
  }
}
```

* [projectId]：项目ID，登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。
* Authorization：JWT格式字符串，可参见[Authorization](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-struct#section20573634202313)获取。
* msgId：消息id，唯一确定一条消息，由元服务自行设置。
* appId：元服务的APP ID，登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择“APP与元服务”，在HarmonyOS页签下点击对应元服务，左侧导航栏选择“应用信息 &gt; 基本信息”，在该页面获取。
* toOpenId：接收者（用户）账号登录的openID。使用从端侧上报的openID，或请求华为账号服务器[获取用户信息](https://developer.huawei.com/consumer/cn/doc/atomic-guides/account-atomic-silent-login)。可参考元服务[账号使用规范](https://developer.huawei.com/consumer/cn/doc/design-guides/accounts-0000001967444380)进行华为账号登录的设计和接入。
* templateId：订阅消息对应的模板ID，与发起订阅请求时用户授权订阅的entityId相同，详情见[开发指导](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-request-sub#section2982164213594)。
* templateParams：订阅消息模板中的占位符需要被替换的变量值。

  以“上门取件通知”模板为例：

  ![](./img/090047e9.png "点击放大")

  templateParams中的参数项为元服务领用的模板中的配置参数。具体可配置项请见[选用订阅模板](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-service-noti#section880418143379)。

  ![](./img/c440ac6c.png)

  填写templateParams时，请确保填入元服务领用模板的所有已勾选模板参数。

## 点击消息动作

### 点击消息进入元服务首页或指定页并传递数据

消息示例如下，更多详情请见[服务通知](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-api-service-noti)。

1. 发送消息时，在clickAction中携带data字段并设置actionType字段为0：

   ```
   // Request URL
   POST https://push-api.cloud.huawei.com/v1/[projectId]/service_notification/send

   // Request Header
   Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****

   // Request Body
   {
     "msgId": "2**********80",
     "appId": "6**********972",
     "toOpenId": "A**********O",
     "templateId": "1**********2",
     "templateParams": {
       "thing_0": "N0001",
       "time_1": "2024年4月27日 22:22",
       "thing_2": "软件大道101号"
     },
     "clickAction": {
       "actionType": 0,
       "data": { "testKey": "testValue" }
   }
   ```

   * actionType：点击消息的动作，0表示点击消息后默认进入首页。

     支持通过指定 data 参数跳转至该元服务内指定页面，详情请见**[调用方UIAbility指定启动页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-intra-device-interaction#调用方uiability指定启动页面)**。
   * data：点击消息时携带的JSON格式的数据，必须是key-value格式，最大长度1024字节。示例：\&#123;"key1": "value1", "key2": "value2"\&#125;
2. data数据获取：点击消息首次进入元服务页面时，需在[onCreate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)方法中获取消息data数据；当元服务进程存在时，需在[onNewWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onnewwant)方法中获取消息data数据。

   在元服务首页中（通常为项目模块级别下的**src/main/module.json5**中**mainElement**的值）的[onCreate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)方法中覆写如下代码：

   ```
   import { UIAbility, Want } from '@kit.AbilityKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   export default class MainAbility extends UIAbility {
     onCreate(want: Want): void {
       // 获取消息中传递的data数据
       const data = want.parameters;
       hilog.info(0x0000, 'testTag', 'Succeeded in getting message data');
       // 根据实际业务场景对data进行处理
     }
   }
   ```

   [onNewWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onnewwant)方法中覆写如下代码：

   ```
   import { UIAbility, Want } from '@kit.AbilityKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   export default class MainAbility extends UIAbility {
     onNewWant(want: Want): void {
       // 获取消息中传递的data数据
       const data = want.parameters;
       hilog.info(0x0000, 'testTag', 'Succeeded in getting message data');
       // 根据实际业务场景对data进行处理
     }
   }
   ```

   ![](./img/b9a13378.png)

   onNewWant()方法仅在单例（[singleton](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-launch-type#singleton启动模式)）模式下可用。
3. 对于ascf框架开发的元服务，可通过clickAction中的data传入启动参数，内容需为&#123; ascfPara: [key: string]: Object &#125;结构，详情请见[want参数解析](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/develop-want-parameter-parsing)。

   示例如下：

   ```
   {
     "clickAction": {
     "actionType": 0,
     "data": {
   "ascfPara": {
     "path" : "pages/index?key1=value1&key2=value2" // 指定携带数据{'key1'：'value1', 'key2'：'value2'}跳转到pages/index页面
   }
     }
   }
   }
   ```

   元服务获取启动参数：

   可以在ASCF元服务的App的onLaunch、onShow或Page的onLoad生命周期中获取传递的启动参数信息。

   ```
   App({
     onLaunch(options) {
       let path = options.path;       // 例如：pages/index
       let data = options.query;      // 例如：{'key1'：'value1', 'key2'：'value2'}
       console.info('data = ', data);
       console.info('path = ', path);
     }

     onShow(options) {
       let path = options.path;       // 例如：pages/index
       let data = options.query;      // 例如：{'key1'：'value1', 'key2'：'value2'}
       console.info('data = ', data);
       console.info('path = ', path);
     }
   });

   Page({
              onLoad(query)
   {
         console.info('query = ', query);  // 例如：{'key1'：'value1', 'key2'：'value2'}
   }
   });
   ```

业务响应码报错问题请参考[业务响应码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-api-service-noti#section166432213518)。

## 示例代码

可参考[服务端示例代码](https://gitee.com/harmonyos_samples/Push-kit-service-notification-sample-code-java)进行开发接入，同时还可通过[自助测试](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-service-self)能力模拟服务器推送基于账号的订阅消息，并生成请求参数报文用于构造发送请求。
