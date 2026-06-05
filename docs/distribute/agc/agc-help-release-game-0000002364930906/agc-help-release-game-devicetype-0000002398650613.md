---
title: "配置支持设备"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-devicetype-0000002398650613
format: md
---


发布时，您可以为游戏配置分发至多种设备，默认发布设备为您创建游戏时选择的设备类型，您可以根据实际情况进行修改。

您只需发布一次，用户即可在多种设备上使用您的游戏。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，选择待上架的游戏。
2. 左侧导航栏选择“应用上架 > 应用信息”。
3. 进入右侧页面的“基本信息”区域，配置游戏的支持设备。
   * **游戏分发至中国大陆地区时：**
     + 支持选择手机、平板、PC/2in1、智慧屏、智能手表、运动手表设备。
     + 当设备类型包含手机时，即便包里未声明平板，游戏也会默认以兼容的方式分发到平板。若您已在包中声明了平板设备，请直接在“支持设备”栏勾选“平板”。
     + 手机和平板游戏经过测试后会默认发布到PC/2in1，为了提供更好的用户体验，请了解PC/2in1设备相对其他设备的[差异](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-pc-guide#section1650910471918)。如有疑问，请联系华为接口人或者[客服](https://developer.huawei.com/consumer/cn/support/feedback/#/)。
     + 智慧屏设备还支持选择遥控器作为操作设备。
     + 在游戏提交上架前，您可随时修改设备，支持由单设备改为多设备，或多设备改为单设备。但是游戏一旦发布，升级版本只支持增加设备，无法删除已选择的设备。
     + 请确保您软件包里声明的设备（即module.json5配置文件中[“deviceTypes”标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#devicetypes标 签)的枚举值）范围大于等于AppGallery Connect上最终勾选的支持设备范围。
   * **游戏分发至中国大陆以外的国家或地区时：**
     + 当前仅智能手表和运动手表游戏支持分发至中国大陆以外的国家或地区，因此请勾选智能手表或运动手表。
     + 在游戏提交上架前，您可随时修改设备，支持由单设备改为多设备，或多设备改为单设备。但是游戏一旦发布，升级版本只支持增加设备，无法删除已选择的设备。
     + 请确保您软件包里声明的设备（即module.json5配置文件中[“deviceTypes”标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#devicetypes标 签)的枚举值）范围大于等于AppGallery Connect上最终勾选的支持设备范围。

   ![](../img/agc-help-release-game-devicetype-0000002398650613_0.png)
