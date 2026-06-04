---
title: "emitter.off取消订阅某个事件后，是不是所有订阅该事件的地方都不会再收到该事件的消息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-notification-kit-9
---

是的，emitter.off取消订阅某个事件后，所有订阅这个事件的地方都不会再收到这个事件的消息。

参考代码如下：

```
emitter.off(1);
```

**参考链接**

[emitter.off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-emitter#emitteroff)
