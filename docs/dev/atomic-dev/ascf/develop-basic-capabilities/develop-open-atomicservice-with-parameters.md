---
title: "携带参数拉起ASCF元服务"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/develop-open-atomicservice-with-parameters
format: md
---


ASCF元服务是使用ASCF框架开发的元服务，无法像ArkTS语言开发的元服务一样自定义接收want参数。ASCF规定了一套标准：需要拉起方按照固定的参数格式（Want.parameters.ascfPara）进行传参，ASCF才能接收到want参数并传递给页面。

ascfPara对象结构如下：

```
interface ascfPara {
  path: string; // 页面路由，跳转的页面路径，可通过?携带自定义参数
  extraData: object; // 额外参数对象
}
```

下面是各个渠道拉起ASCF元服务并携带参数的说明及示例。

## 通过API拉起ASCF元服务

通过want传参，Want.parameters传ascfPara，ascfPara可作为对象或者JSON格式字符串传入，可接受字段path、extraData。

**示例：**

```
import { common, Want } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('打开')
        .onClick(() => {
          const context =  this.getUIContext().getHostContext() as common.UIAbilityContext;
          const wantInfo: Want = {
            deviceId: '', // deviceId为空表示本设备
            bundleName: 'com.atomicservice.xxx', // 被拉起方的bundleName
            abilityName: 'xxx', // 被拉起方的abilityName
            parameters: {
              // 如果参数有中文，最好进行转码
              // ascfPara: encodeURIComponent(JSON.stringify({
              // path: 'pages/index/index?data=中文',
              // extraData: {}
              // }))
              ascfPara: {
                path: 'pages/index/index?data=testData',
                extraData: {}
              }
            },
          };
          context.startAbility(wantInfo);
        })
    }
  }
}
```

## 通过卡片拉起ASCF元服务

参考文档[卡片跳转到应用页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-router)。使用postCardAction接口实现卡片和元服务的交互。参考want传参，postCardAction的params参数对应的就是Want.parameters参数。与通过API拉起ASCF元服务的不同是：通过此方法拉起ASCF元服务，ascfPara只支持JSON格式字符串传入。

**示例：**

```
@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('打开')
        .onClick(() => {
          postCardAction(this, {
            action: 'router',
            abilityName: 'xxx', // 被拉起方的abilityName
            params: {
              ascfPara: encodeURIComponent(JSON.stringify({
                path: 'pages/index/index?data=testData',
                extraData: Object({})
              }))
            }
          });
        })
    }
  }
}
```

## 通过服务通知订阅消息拉起ASCF元服务

参考文档[推送基于账号的订阅消息](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-send-sub-noti#section561410563213)。服务端通过配置消息参数clickAction拉起元服务。参考want传参，其中data字段对应的是Want.parameters参数，ascfPara可作为对象或者JSON格式字符串传入。

**示例：**

```
// Request URL
POST 'https://push-api.cloud.huawei.com/v1/[projectId]/service_notification/send'

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
    "time_1": "2026年4月17日 22:22",
    "thing_2": "xxx"
  },
  "clickAction": {
    "actionType": 0,
    "data": {
      "ascfPara": {
        "path": "pages/index/index?data=testData",
        "extraData": {}
      }
    }
  }
}
```

## 通过appLinking拉起ASCF元服务

参考文档[使用元服务链接跳转元服务](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-applinking)。在AGC平台创建appLinking，传参有2种方式，静态传参和动态传参。

静态传参参考[获取元服务链接](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/ascf-applinking)即可。

动态传参ASCF目前尚未适配，需要开发者自行处理。

* 在appLinking后面添加动态参数，链接示例：https://hoas.drcn.agconnect.link/xxx​?​ascfPara=value， 其中?后为动态参数，由开发者自行拼接，无需在AGC平台进行额外配置。value传值参考：

  ```
  encodeURIComponent(JSON.stringify({
    path: 'page/index/index?data=testData',
    extraData: {}
  }))
  ```
* 开发者在被拉起方元服务的EntryAbility里面自行处理动态参数然后再传给ASCF框架层处理。

  **示例：**

  ```
  import { AscfUIAbility } from '@atomicservice/ascfapi';
  import AbilityConstant from '@ohos.app.ability.AbilityConstant';
  import { Want } from '@kit.AbilityKit';
  import { url } from '@kit.ArkTS';

  export default class EntryAbility extends AscfUIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
      this.handleUri(want);
      super.onCreate(want, launchParam);
    }
    onNewWant(want: Want): void {
      this.handleUri(want);
      super.onNewWant(want);
    }
    handleUri(want: Want): void {
      // 如果想保留appLinking静态参数可以先拿到Want.parameters['ascfPara']的值，然后再进行合并。
      let uri = want?.uri;
      if (uri) {
        try {
          let urlObject = url.URL.parseURL(uri);
          let ascfPara = urlObject.params.get('ascfPara');
          if(ascfPara) {
            want.parameters = {
              'ascfPara': ascfPara
            }
          }
        } catch (error) {
          console.error('Failed to parse url');
        }
      }
    }
  }
  ```

![](./img/18923511.png)

使用意图框架拉起ASCF元服务无法携带参数：

参考文档[意图框架服务-位置推荐方案-接入方案](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-local-rec)。目前只能拉起ASCF元服务首页，无法接收ascfPara参数进行页面跳转。

ASCF目前只在onCreate和onNewWant回调函数中对ascfPara参数进行接收处理。而意图框架的传参需要先在AGC平台中配置POI参数，通过意图实现类InsightIntentExecutorImpl中的onExecuteInUIAbilityForegroundMode回调来获取对应的参数。参考[意图执行基类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor#onexecuteinuiabilityforegroundmode)的生命周期执行顺序，onCreate、onNewWant会早于onExecuteInUIAbilityForegroundMode调用，此时，开发者通过使用onExecuteInUIAbilityForegroundMode回调函数对ascfPara进行参数构建后无法传参给onCreate、onNewWant。

## 被拉起方ASCF元服务获取参数

通过以上方式拉起ASCF元服务后存在几种情况：

1. 如果拉起方在ascfPara里传入了path且path对应的页面存在，则会拉起元服务后跳转到对应的path页面；
2. 如果未传path，或者path对应页面不存在，则会跳转到对应元服务的首页。

启动参数信息获取：

1. 在被拉起方元服务下的ascf/ascf\_src/app.js文件的App()方法的onLaunch或onShow回调函数中获取；
2. 在被拉起方元服务对应path页面对应的js文件的Page()方法的onLoad回调中获取。

![](./img/588e78f3.png)

extraData参数只能在App()方法的onLaunch、onShow回调函数里获取。

**示例：**

```
// app.js
App({
  onLaunch(options) {
    let path = options.path; // page/index/index
    let data = options.query; // {'data': 'testData'}
    let extraData = options.referrerInfo.extraData;
    console.info('data = ', data);
    console.info('path = ', path);
    console.info('extraData = ', extraData);
  },
  onShow(options) {
    let path = options.path; // page/index/index
    let data = options.query; // {'data': 'testData'}
    let extraData = options.referrerInfo.extraData;
    console.info('data = ', data);
    console.info('path = ', path);
    console.info('extraData = ', extraData);
  }
});

// page/index/index.js
Page({
  onLoad(query){
    console.info('query = ', query); // {'data': 'testData'}
  }
});
```
