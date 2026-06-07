---
title: "如何让事件只在一个UIAbility实例中传递"
original_url: /docs/FAQ/faqs-app-service-development/faqs-notification-kit/faqs-notification-kit-2
format: md
---


在UIAbility中使用EventHub订阅事件，EventHub模块提供了事件中心，订阅、取消订阅、触发事件的能力。

参考代码如下：

```
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    this.context.eventHub.on('myEvent', this.eventFunc);
    // result：
    // eventFunc is called,undefined,undefined
    this.context.eventHub.emit('myEvent');
    // result：
    // eventFunc is called,1,undefined
    this.context.eventHub.emit('myEvent', 1);
    // result：
    // eventFunc is called,1,2
    this.context.eventHub.emit('myEvent', 1, 2);
  }

  eventFunc(argOne: number, argTwo: number) {
    console.log(`eventFunc is called, ${argOne}, ${argTwo}`);
  }
}
```

**参考链接**

[使用EventHub进行数据通信](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui#使用eventhub进行数据通信)
