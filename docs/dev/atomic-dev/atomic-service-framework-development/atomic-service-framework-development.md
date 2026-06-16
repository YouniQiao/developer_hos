---
title: "元服务框架开发"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-framework-development
---

## 应用模型

元服务的应用模型只支持Stage模型，参考[Stage模型开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stage-model-development-overview)。

元服务与传统应用的应用模型差异点主要体现在ExtensionAbility，具体如下：

* 元服务ExtensionAbility组件只支持FormExtensionAbility这一种类型。
* 应用上下文ExtensionContext只能被FormExtensionContext继承。

此外，元服务还有如下约束限制：

* 不支持启动UIAbility时指定窗口模式。
* 不支持通过Call调用实现UIAbility交互。
* 不支持使用ApplicationContext订阅回调低内存判断。
* 不支持使用createBundleContext(bundleName:string)方法，创建其他应用的Context信息。
* 不支持使用createModuleContext(bundleName:string, moduleName:string)方法，获取指定应用指定Module的上下文信息。

## 访问控制

元服务针对访问控制的开发与传统应用的开发方式大致相同，详见[访问控制开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-token-overview)。

* **[分包加载](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-subpackage-loading)**
* **[跳转](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-routing)**
* **[拉起其他元服务](https://developer.huawei.com/consumer/cn/doc/atomic-guides/start-other-atomicservices)**
* **[元服务更新](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-update)**
