---
title: "配置隐私声明"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-privacy-state-0000002401219281
---

游戏要求提供隐私声明网站，便于玩家了解游戏收集、使用隐私数据的情况。

#### 方式一：自定义隐私政策

若游戏已有描述隐私政策、隐私权利的网站，游戏可以使用“自定义隐私政策”方式。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，选择待上架的游戏。
2. 左侧导航栏选择“应用上架 > 版本信息”下待发布的版本。
3. 进入右侧页面的“隐私声明”区域，选择“自定义隐私政策”，并分别填写网站地址。

   ![](../img/agc-help-release-game-privacy-state-0000002401219281_0.png)

   | 配置项 | 必填/选填 | 说明 |
   | --- | --- | --- |
   | 隐私政策网址 | 必填 | 请填写网址。  玩家通过访问该网站，可以了解游戏如何处理玩家的敏感数据和设备数据。 |
   | 隐私权利 | 选填 | 请填写网址。  玩家通过访问该网站，可以了解允许玩家实施的权利，以及实施权利的方式。例如，删除、修改、导出个人数据的入口。 |

#### 方式二：隐私托管（推荐）

若游戏无隐私声明的网站，支持使用AppGallery Connect提供的隐私托管服务，让游戏基于标准化模板生成游戏自己的隐私政策和用户协议。

#### [h2]前提条件

* 已参考[配置隐私政策（HarmonyOS应用）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-policy-app-0000002282162168)，生成游戏的隐私政策。
* 已参考[配置用户协议](https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-user-agreement-0000002282265450)，生成游戏的用户协议。

#### [h2]操作步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，选择待上架的游戏。
2. 左侧导航栏选择“应用上架 > 版本信息”下待发布的版本。
3. 进入右侧页面的“隐私声明”区域，选择“隐私托管”，分别选择对应的隐私政策和用户协议。

   ![](../img/agc-help-release-game-privacy-state-0000002401219281_1.png)
