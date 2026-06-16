---
title: "Web组件概述"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomicserviceweb-guidelines
---

![](./img/059b59c4.png)

除海外元服务可以使用ArkWeb外，其他场景的元服务内只能使用AtomicServiceEnhancedWeb组件，不允许使用ArkWeb。请您务必使用AtomicServiceEnhancedWeb开发元服务，避免上架被拦截。

## AtomicServiceEnhancedWeb

AtomicServiceEnhancedWeb是AtomicServiceWeb的增强版，为开发者提供Web页面加载、页面交互、更多H5高阶开放能力等，保障开发者在H5混合ArkTS开发的场景有更加连续的体验。推荐您优先使用AtomicServiceEnhancedWeb组件。

* 在元服务内，可使用AtomicServiceEnhancedWeb组件显示Web页面，且需要配置[业务域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-business-domain)。AtomicServiceEnhancedWeb不需要注入ASCF框架即可运行，请按照AtomicServiceEnhancedWeb相关指南进行配置开发。

  请参考：[AtomicServiceEnhancedWeb开发指南](https://developer.huawei.com/consumer/cn/doc/atomic-guides/develop-atomicserviceenhancedweb)、[配置业务域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-business-domain)
* html中，如果需要调用元服务API，可集成元服务JS SDK，调用相关API进行访问。

  请参考：[AtomicServiceEnhancedWeb JS SDK](https://developer.huawei.com/consumer/cn/doc/atomic-guides/components-atomicserviceenhancedweb)

## AtomicServiceWeb（不再推荐）

元服务AtomicServiceWeb组件用于在元服务内显示Web页面内容，为开发者提供Web页面加载、页面交互等能力。

![](./img/017d9094.png)

AtomicServiceWeb将不再演进，存量元服务可继续使用AtomicServiceWeb组件不受影响。如需使用更多H5高阶开放能力或获得更好的Web体验，请升级为AtomicServiceEnhancedWeb。AtomicServiceEnhancedWeb完全兼容AtomicServiceWeb，导入AtomicServiceEnhancedWeb工程后，无需修改代码，即可兼容原AtomicServiceWeb接口。

## ArkWeb切换为AtomicServiceEnhancedWeb

存量使用ArkWeb的元服务，需要参考[ArkWeb组件升级为AtomicServiceEnhancedWeb](https://developer.huawei.com/consumer/cn/doc/atomic-guides/web-upgraded-to-atomicserviceweb)升级指南切换为AtomicServiceEnhancedWeb组件。
