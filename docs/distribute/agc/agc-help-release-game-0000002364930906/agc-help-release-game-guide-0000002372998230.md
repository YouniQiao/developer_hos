---
title: "发布指引"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-guide-0000002372998230
format: md
---


为了给玩家提供良好、安全、可靠的游戏体验，在游戏正式上架到华为应用市场前，华为工作人员会审核提交的游戏信息。

* **联系华为技术支持，验收游戏软件包**

  在AppGallery Connect平台正式提交上架审核前，要求游戏开发者联系华为技术支持人员验收软件包。

  |  |  |  |  |
  | --- | --- | --- | --- |
  | ![](../img/agc-help-release-game-guide-0000002372998230_0.png) | ![](../img/agc-help-release-game-guide-0000002372998230_1.png) |  |  |

  在游戏软件包通过技术支持的验收后，才能前往AppGallery Connect平台提交上架审核。

  若软件包未通过验收而直接在AppGallery Connect平台提审上架，华为审核人员将以未通过验收驳回上架申请。
* **了解上架规则，准备游戏素材**

  提前了解游戏的上架规则，并提前准备游戏素材，有助于快速通过游戏上架审核。详情请参见[准备工作](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-prepare-0000002406557837)。
* **[上传软件包](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-upload-pkg-0000002399249081)**

  上传符合要求的游戏软件包，以便游戏测试或用于正式上架。

  成功上传后，AppGallery Connect平台会对软件包进行合法性检测，请根据报告或者错误码修复软件包问题。
* **[配置支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-devicetype-0000002398650613)**

  选择游戏的发布设备，例如手机、平板，以便玩家在对应设备上体验您的游戏。

  默认发布设备为创建游戏时选择的设备类型。
* **配置本地化基础信息**

  游戏发布至不同语言的国家或地区，需要使用不同的语言展示游戏信息。若不配置，只能展示默认语言的游戏信息。

  选择游戏支持的语言，并依次配置对应语言的游戏信息：

  + [配置本地化基础信息（名称、图标）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-name-0000002365090802)
  + [配置本地化基础信息（介绍、特性、素材）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-intro-0000002400209657)
* **[配置应用分类标签](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-class-0000002398530749)**

  选择游戏分类和游戏标签，方便玩家通过应用市场的分类和标签发现游戏。
* **[配置开发者服务信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-devinfo-0000002365729266)**

  填写开发者服务信息，方便玩家咨询或反馈游戏相关问题。
* **[选取软件包版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-choose-pkg-0000002365569342)**

  在已上传的游戏软件包中选择用于正式上架、且已通过合法性检测的游戏软件包。
* **[配置发布国家或地区](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-area-0000002399129161)**

  选择发布的国家或地区，方便对应国家或地区的玩家体验您的游戏。
* **[配置应用内资费](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-pay-0000002366729768)**

  若游戏涉及付费，要求按照业务场景选择游戏内的资费类型，用于标识玩家在游戏内的付费类型。
* **[配置内容分级](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-rating-0000002400329549)**

  内容分级是通过AppGallery Connect调查问卷计算出游戏适宜的年龄分级，年龄分级在应用市场的游戏详情页向玩家展示，帮助玩家找到适合其年龄段的游戏。

  要求根据调查问卷自动生成的年龄分级，并结合游戏内的适龄提示，最终选择游戏的年龄分级。
* **配置隐私信息**
  + [配置应用隐私说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-privacy-desc-0000002513751229)：当AppGallery Connect检测到您的游戏中涉及获取敏感隐私权限或者使用受限开放权限时，需要您说明使用权限理由、使用场景。
  + [配置隐私声明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-privacy-state-0000002401219281)：游戏要求提供隐私声明的网站，帮助玩家了解游戏的数据收集和使用情况。隐私声明网站可以是游戏自有的，也可以使用隐私声明托管服务进行生成。
  + [配置隐私标签信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-privacy-tag-0000002367539634)：若发布的设备类型包含手机、平板、PC/2in1、智慧屏，要求配置隐私标签信息。隐私标签展示在游戏详情页，帮助玩家提前了解游戏使用个人数据的情况。
* **[配置AI功能声明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-ai-0000002509382903)**

  按照法律法规要求，应用程序在上架或上架审核时，应用程序服务提供者应说明是否提供人工智能生成合成服务。
* **上传游戏资质材料**

  按照法律法规，要求游戏上架时提供相关资质材料：

  + [配置版权信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-copyright-0000002401259413)
  + [配置版号信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-version-0000002401837705)

  资质材料不规范可能影响游戏的上架进度。

* **[配置应用内商品](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-goods-0000002367699526)**

  首次提审或追加新类型的数据商品时，需要随游戏版本一起提交审核。

  数字商品类型分为消耗型、非消耗型、自动续期订阅、非续期订阅。
* **[配置核准（备案）信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-record-0000002401219285)**

  根据[《工业和信息化部关于开展移动互联网应用程序备案工作的通知》](https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2023/art_920db564162e4312916a01bed6540ad8.html)要求，APP主办者未履行核准（备案）手续的，不得从事APP互联网信息服务。

  要求在游戏上架前完成核准（备案），并保留核准（备案）信息。
* **[配置应用审核信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-review-0000002368317832)**

  若游戏的部分功能要求对玩家进行身份验证，提交审核时需要向审核人员提供测试账号信息，方便审核人员使用该账号完成相关功能的审核。
* **[配置联系方式](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-contact-0000002401757581)**

  若账号归属地为中国大陆，请填写游戏负责人的联系方式，方便华为审核人员与您沟通游戏上架的审核问题。
* **[配置上架时间](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-time-0000002368157928)**

  设置上架时间，以便游戏顺利在期望时间内上架至应用市场，支持游戏通过审核后立即上架，也支持在指定时间上架。

  若已设置在指定时间上架，游戏通过审核后如希望在指定时间前上架，您还可以手动发布上架。
* **[提交审核](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-game-submit-0000002408726077)**

  完成游戏信息和版本信息的配置后，即可将游戏提交上架审核。

  前往待发布版本界面查看审核状态。若上架审核驳回，可以参考审核报告进行修改。
