---
title: "分层模块化实践"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058
---

![](./img/3a71fe9a.png)

应用通过分层架构设计以及各层模块不同的包类型设计，实现“[一次开发，多端部署](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-ui-development)”的开发实践。

## 分层设计

HarmonyOS应用的分层架构主要包括三个层次：产品定制层、基础特性层和公共能力层。开发者可以根据实际应用的复杂度，在三层的基础上在各层内部二次分层。

产品定制层：不同设备的个性化业务，包含UI，资源，配置，编译成不同设备Entry类型HAP包；开发者根据实际情况采用Entry分包还是共包。

基础特性层：抽象应用基础特性，每个特性高内聚，低耦合，灵活部署。

* 需要单独部署，设计为Feature类型的[HAP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package)包。
* 不需要单独部署，设计为[HAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package)包或者[HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp)包。

公共能力层：基础特性层依赖的公共能力，如UI组件，工具类，编译成HAR包或HSP包。

分层设计指导参见[应用分层设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)。

## 模块包类型实践

实践中，单Entry HAP包多HAR包在比较常见，多见于单设备且没有动态部署要求的 应用。

包类型划分参考流程：

**图1** 包类型划分参考流程
![](./img/0ce037d3.png "点击放大")

模块设计指导参见[模块化设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-modular-design)。

## 模块分包/共包建议

同一个模块特性在不同设备上是分包还是共包，取决于不同设备的特性差异：

* 有桌面应用图标的应用，平板和PC差异化小，建议采用Entry共包方案。
* 模块特性在不同设备上差异化较大的，建议采用分包方案。
* 不同设备同一断点布局结构差异化大的，建议分包，反之共包。

Entry分包：针对不同单独规划一个Entry类型HAP包。

Entry共包：规划一个Default Entry类型HAP包，分发到多设备。
