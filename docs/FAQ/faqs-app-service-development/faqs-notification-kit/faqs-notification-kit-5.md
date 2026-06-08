---
title: "如何监听系统公共事件，如熄屏、亮屏、开机等"
original_url: /docs/FAQ/faqs-app-service-development/faqs-notification-kit/faqs-notification-kit-5
format: md
upstream_id: FAQ/faqs-app-service-development/faqs-notification-kit/faqs-notification-kit-5
last_sync: 2026-06-07
sync_hash: 6388a684
---
CES（Common Event Service，公共事件服务）为应用程序提供订阅、发布和退订公共事件的能力。可以通过订阅系统公共事件来监听熄屏、亮屏和开机事件。开机事件使用“COMMON\_EVENT\_BOOT\_COMPLETED”来监听。

参考代码如下：

```
import { commonEventManager } from '@kit.BasicServicesKit';

let subscriber:commonEventManager.CommonEventSubscriber;
let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
  events: ['usual.event.SCREEN_OFF'], // Subscribe to screen out public events
  priority:80
}
commonEventManager.createSubscriber(subscribeInfo, (err, data) => {
  if (err) {
    console.error(`Failed to create subscriber. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in creating subscriber1.');
  subscriber = data;
  // Subscribe to public event callbacks
  commonEventManager.subscribe(subscriber, (err, data) => {
    if (err) {
      console.error(`Failed to subscribe common event. Code is ${err.code}, message is ${err.message}`);
      return;
    } else {
      console.info(`Succeeded in subscribe common event Succeeded1 `);
    }
  })
})
```

**参考链接**

[系统定义的公共事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/commoneventmanager-definitions)
