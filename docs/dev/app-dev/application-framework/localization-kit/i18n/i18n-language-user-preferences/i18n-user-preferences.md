---
title: "用户偏好"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-user-preferences
format: md
---


## 使用场景

除区域设置和应用偏好语言设置外，系统还可以设置用户偏好，当前支持本地数字和时制两种偏好。用户偏好设置会保存到系统区域及应用偏好语言中，最终体现在用户界面的国际化特性上。

## 开发步骤

接口具体使用方法和说明请参考[System](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#system9)的API接口文档。

1. 导入模块。

   ```
   import { i18n } from '@kit.LocalizationKit';
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/LanguagePreferenceSetting.ets#L18-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LanguagePreferenceSetting.ets</a></div>

2. 使用场景。

* 获取用户偏好。

  ```
  // 判断系统当前是否使用本地数字
  let usingLocalDigit: boolean = i18n.System.getUsingLocalDigit();

  // 判断系统当前是否使用24小时制
  let is24HourClock: boolean = i18n.System.is24HourClock();

  // 通过监听公共事件COMMON_EVENT_TIME_CHANGED可以感知系统时制变化
  let timeSubscriber: commonEventManager.CommonEventSubscriber; // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作
  let timeSubscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
    events: [commonEventManager.Support.COMMON_EVENT_TIME_CHANGED]
  };
  // 创建订阅者
  commonEventManager.createSubscriber(timeSubscribeInfo)
    .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {
      console.info('CreateSubscriber');
      timeSubscriber = commonEventSubscriber;
      commonEventManager.subscribe(timeSubscriber, (err, data) => {
        if (err) {
          console.error(`Failed to subscribe common event. error code: ${err.code}, message: ${err.message}.`);
          return;
        }
        // 用于区分系统时间和系统时制变化
        if (data.data != undefined && data.data == '24HourChange') {
          console.info('The subscribed event has occurred.'); // 系统时制变化时执行
        }
      })
    })
    .catch((err: BusinessError) => {
      console.error(`CreateSubscriber failed, code is ${err.code}, message is ${err.message}`);
    });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/LanguagePreferenceSetting.ets#L82-L113" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LanguagePreferenceSetting.ets</a></div>
