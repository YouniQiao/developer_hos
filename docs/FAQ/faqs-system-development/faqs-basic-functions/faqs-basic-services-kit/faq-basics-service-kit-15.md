---
format: md
title: "通过公共事件服务CES发布、订阅事件，发布事件达到一定数量后，订阅者接收不到发布的事件"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-15
---


通过commonEventManager.createSubscriber()创建订阅者时，需要保存返回的订阅者对象subscriber。应用切换后台之后，如果预测能回收的对象尺寸大于2M会触发一次[Full GC](/docs/dev/app-dev/application-framework/arkts/arkts-runtime/gc-introduction#hpp-gc的类型)，未保存的subscriber会被清理掉，进而导致订阅取消、收不到数据。

**参考链接**

[动态订阅公共事件](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription)
