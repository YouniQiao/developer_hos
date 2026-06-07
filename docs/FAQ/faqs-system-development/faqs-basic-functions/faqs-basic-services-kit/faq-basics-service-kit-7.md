---
format: md
title: "eventId一样时，Emitter多次调用on是否能注册多个回调"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-7
---


**解决方案**

针对同一个eventId多次注册订阅时，若关联的回调对象为同一个，则只会生效第一次注册的回调对象，若关联的回调对象不同，则多个回调对象均生效，由on的顺序决定回调顺序。使用off注销时，eventId与回调对象需配对，否则回调注销失败。

**参考资料**

[events.emitter (Emitter)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-emitter)
