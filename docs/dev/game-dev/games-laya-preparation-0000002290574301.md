---
title: "适配准备"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-preparation-0000002290574301
---

## 引擎适配准备

* Laya1.0：引擎IDE升级到[1.8.16及以上版本](https://ldc.layabox.com/layadownload/?type=layaairide-LayaAir IDE 1.8.16)。
* Laya2.0：引擎IDE升级到[2.13.7及以上版本](https://ldc2.layabox.com/layadownload/?type=layaairide-LayaAir IDE 2.13.7)。
* Laya3.0：引擎IDE升级到[3.2.3及以上版本](https://layaair.layabox.com/#/engineDownload/LayaAir 3.2.3)。

## 安装DevEco Studio

1. 请前往下载并安装最新的release版本[DevEco Studio](https://developer.huawei.com/consumer/cn/download/)。

   ![](./img/fdba5883.png)

   * HarmonyOS SDK已嵌入DevEco Studio中，无需额外下载配置。HarmonyOS SDK可以在DevEco Studio安装位置下DevEco Studio\sdk目录中查看。
   * 如需进行OpenHarmony应用开发，**Windows环境**可通过“Settings &gt; OpenHarmony SDK”页签下载OpenHarmony SDK，**macOS环境**可通过“DevEco Studio &gt; Preferences &gt; OpenHarmony SDK”页签下载OpenHarmony SDK。
2. 诊断开发环境。

   您可以在欢迎页面单击Diagnose进行诊断。如果您已经打开了工程开发界面，也可以在菜单栏单击“Help &gt; Diagnostic Tools &gt; Diagnose Development Environment”进行诊断。

   ![](./img/6b150a31.png)

## 知识准备

### 学习ArkTS语言

ArkTS是HarmonyOS 5.0及以上系统的游戏开发的官方高级语言，其中ArkUI（方舟UI框架）更为游戏UI开发提供了完整的基础设施，包括简洁的UI语法、丰富的UI功能。ArkTS语言更多介绍请参见[学习ArkTS语言](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/learning-arkts)。

### 了解Stage模型

了解Stage模型可以帮助开发者更好地理解应用程序的架构和设计，有助于开发者对不同阶段的应用程序包形态有更加清晰的认知，提升HarmonyOS 5.0及以上系统的开发效率和性能。Stage模型更多介绍请参见[Stage模型开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stage-model-development)。

## AGC控制台准备

### 注册开发者账号

若您还没有实名认证的华为开发者账号，请前往华为开发者联盟网站注册开发者账号并完成实名认证，详细操作请参见[注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

### 创建项目及在项目上添加游戏

前往AGC控制台创建游戏类应用，具体操作请参见[创建HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506)。其中：

* “应用类型”：选择“HarmonyOS应用”。
* “应用分类”：选择“游戏”。

![](./img/aa7f9cad.png)

正式上架的游戏包名建议不要包含test、dev等信息。

### 获取游戏包名

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“开发与服务”，在项目列表中选择项目及项目下的HarmonyOS游戏，获取游戏包名。

![](./img/538d5e59.png)
