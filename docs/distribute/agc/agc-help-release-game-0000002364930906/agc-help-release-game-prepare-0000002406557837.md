---
title: "准备工作"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-prepare-0000002406557837
format: md
---


提前了解游戏的上架规则，并提前准备游戏素材，有助于快速通过游戏上架审核。

#### 了解上架规则

仔细阅读[应用审核指南](https://developer.huawei.com/consumer/cn/doc/app/50104)、[应用审核FAQ](https://developer.huawei.com/consumer/cn/doc/app/50106)、[游戏审核FAQ](https://developer.huawei.com/consumer/cn/doc/app/50118)，了解游戏上架至应用市场需要遵循的规则和要求。

#### 准备游戏软件包

| 要求项 | 说明 |
| --- | --- |
| APP包名 | 软件包中设置的游戏包名必须与[创建HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506)时配置的包名一致。 |
| APP包签名 | 在DevEco Studio编译发布包时，要求使用[申请发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729)和[申请发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)手动签名。 |
| APP包公钥指纹 | 公钥指纹是应用签名证书（.cer文件）的摘要信息，用于校验游戏的真实性。请配置发布证书指纹，详情请参见[配置公钥指纹](https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-fingerprint-0000002278002933)。 |
| APP包大小 | 不超过4GB。 |
| 游戏名称 | 要求与软件包安装后的游戏名称保持一致。 |
| 华为服务 | 游戏必须集成[基础游戏服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-dev)。 |

#### 准备游戏信息和素材

| 准备项 | 说明 |
| --- | --- |
| 本地化基础信息 | 准备支持语言的游戏图标、游戏介绍截图、游戏介绍视频等游戏素材，具体要求请参见[应用信息审核规范](https://developer.huawei.com/consumer/cn/doc/app/50104-01)和[素材规范](https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-visual-asset-spec-0000002277607976#section20566531191713)。 |
| 隐私声明 | 若游戏无描述隐私声明的网站，我们为您提供了隐私托管服务：   * 参考[配置隐私政策（HarmonyOS应用）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-policy-app-0000002282162168)，生成游戏的隐私政策。 * 参考[配置用户协议](https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-user-agreement-0000002282265450)，生成游戏的用户协议。 |
| 游戏版权、版号材料 | 准备游戏版权、版号资质材料，具体要求请参见[游戏版权、版号要求](https://developer.huawei.com/consumer/cn/doc/80301#h1-1584931854487-2)。 |
| 应用内商品 | 若有未经审核的数字商品类型，请添加数字商品，具体操作请参见[数字商品](https://developer.huawei.com/consumer/cn/doc/games-guides/games-center-products-manage-0000002286057092)。 |
| 游戏核准（备案） | 游戏核准（备案）的具体要求请参见[APP核准（APP备案）指引](https://developer.huawei.com/consumer/cn/doc/App/50130)。  完成核准（备案）后保存好核准（备案）信息。 |
| 应用审核信息 | 审核人员需要测试您的游戏。  若您的游戏存在特殊情况，例如，您的游戏在测试过程中需要连接设备、或您的游戏需要运行在特殊环境，您需要准备自测文件，例如测试录屏（.mp4）或指导文档（.docx）。  要求如下：   * 单个docx文件不得超过15MB；单个mp4文件不限制大小。 * 最多支持上传5个文件，总大小不超过500MB。 |

#### 其它准备项

| 准备项 | 说明 |
| --- | --- |
| 版署实名认证申请 | 在网络游戏防沉迷实名认证系统获取“bizID（游戏备案识别码）”后，将bizID配置到AppGallery Connect，具体操作请参见[版署实名认证申请](https://developer.huawei.com/consumer/cn/doc/games-guides/game-center-identification-applyfor-0000002392353221)。 |
| 关联Android游戏 | 若HarmonyOS 5.0及以上游戏有对应的Android游戏，要求关联两个系统的游戏，具体操作请参见[关联Android应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-associate-android-app-0000002385678957)。  关联成功后，若设备系统升级至HarmonyOS 5.0及以上时，支持系统快速将设备上的Android游戏替换为HarmonyOS 5.0及以上游戏。 |
| 高频驳回案例 | 根据[高频驳回案例](https://developer.huawei.com/consumer/cn/blog/topic/03180266460952010)，提前发现并解决问题，降低游戏上架驳回的风险，有效提高审核通过率。 |
