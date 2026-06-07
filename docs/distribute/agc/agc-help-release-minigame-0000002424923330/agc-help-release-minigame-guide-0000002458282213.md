---
title: "发布指引"
original_url: /docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-guide-0000002458282213
format: md
---


为了给玩家提供良好、安全、可靠的游戏体验，在小游戏正式上架到华为应用市场前，华为工作人员会审核提交的小游戏信息。

* **了解上架规则，准备小游戏素材**

  提前了解小游戏的上架规则，并提前准备小游戏素材，有助于快速通过小游戏上架审核。详情请参见[准备工作](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-prepare-0000002424763490)。
* **申请ACL权限和开放能力**

  申请上架小游戏所必须的ACL权限和开放能力，并在小游戏代码内配置相关信息：

  + [JSVM权限](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section13637635175211)
  + [存储空间管理服务](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section17374114165216)
* **[上传软件包](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-upload-pkg-0000002458362097)**

  上传符合要求的小游戏软件包，以便小游戏测试或用于正式上架。

  成功上传后，AppGallery Connect平台会对软件包进行合法性检测，请根据报告或者错误码修复软件包问题。
* **[选择设备类型](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-devicetype-0000002424923334)**

  选择小游戏的发布设备，例如手机、平板，以便玩家在对应设备上体验您的小游戏。

  默认发布设备为创建小游戏时选择的设备类型。
* **配置本地化基础信息**

  小游戏发布至不同语言的国家或地区，需要使用不同的语言展示小游戏信息。若不配置，只能展示默认语言的小游戏信息。

  选择小游戏支持的语言，并依次配置对应语言的小游戏信息：

  + [配置本地化基础信息（游戏名称、游戏图标）](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-name-0000002458282217)
  + [配置本地化基础信息（介绍、特性、素材）](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-intro-0000002424763498)
* **[选择游戏分类和游戏标签](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-class-0000002424763494)**

  选择游戏分类和游戏标签，方便玩家通过应用市场的分类和标签发现小游戏。
* **[填写开发者服务信息](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-devinfo-0000002458362101)**

  填写开发者服务信息，方便玩家咨询或反馈小游戏相关问题。
* **[选择正式上架的软件包](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-choose-pkg-0000002424923338)**

  在已上传的小游戏软件包中选择用于正式上架、且已通过合法性检测的小游戏软件包。
* **选择发布国家或地区**

  选择发布的国家或地区，方便对应国家或地区的玩家体验您的小游戏。当前小游戏仅支持发布到中国大陆地区。
* **[选择游戏内资费](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-pay-0000002458362105)**

  若小游戏涉及付费，要求按照业务场景选择小游戏内的资费类型，用于标识玩家在小游戏内的付费类型。
* **[配置内容分级](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-rating-0000002424923342)**

  内容分级是通过AppGallery Connect调查问卷计算出小游戏适宜的年龄分级，年龄分级在应用市场的小游戏详情页向玩家展示，帮助玩家找到适合其年龄段的小游戏。

  要求根据调查问卷自动生成的年龄分级，并结合小游戏内的适龄提示，最终选择小游戏的年龄分级。
* **[配置隐私声明](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-privacy-state-0000002458282225)**
  + 隐私说明：当AGC检测到您的小游戏中涉及获取敏感隐私权限或者使用受限开放权限时，需要您说明使用权限理由、使用场景。具体参见[配置隐私说明](/docs/distribute/agc/agc-help-release-atomic-0000002327731065/agc-help-release-atomic-privacy-desc-0000002327610837)。
  + 隐私声明：您需要提供声明隐私政策的网站，便于用户了解小游戏的数据收集和使用情况。小游戏必须使用AGC的隐私声明托管服务生成自己的隐私声明，具体参见[配置隐私声明](/docs/distribute/agc/agc-help-release-atomic-0000002327731065/agc-help-release-atomic-privacy-state-0000002293811150)。
* **[配置AI功能声明](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-ai-0000002546985293)**

  按照法律法规要求，应用程序在上架或者上线审核时，应用程序服务提供者应说明是否提供人工智能生成合成服务。
* **上传游戏资质材料**

  按照法律法规，要求小游戏上架时提供相关资质材料：

  + [上传版权材料](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-copyright-0000002458362109)
  + [上传版号材料](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-version-0000002424763506)

  资质材料不规范可能影响小游戏的上架进度。

* **[添加数字商品](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-goods-0000002424923350)**

  首次提审或追加新类型的数字商品时，需要随小游戏版本一起提交审核。

  数字商品类型分为消耗型、非消耗型、自动续期订阅、非续期订阅。
* **[配置备案信息](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-record-0000002458282229)**

  根据[《工业和信息化部关于开展移动互联网应用程序备案工作的通知》](https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2023/art_920db564162e4312916a01bed6540ad8.html)要求，APP主办者未履行备案手续的，不得从事APP互联网信息服务。

  要求在游戏上架前完成备案，并保留备案信息。
* **[填写游戏审核信息](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-review-0000002458362113)**

  若小游戏的部分功能要求对玩家进行身份验证，提交审核时需要向审核人员提供测试账号信息，方便审核人员使用该账号完成相关功能的审核。
* **[填写联系方式](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-contact-0000002424923354)**

  若账号归属地为中国大陆，请填写小游戏负责人的联系方式，方便华为审核人员与您沟通小游戏上架的审核问题。
* **[设置上架时间](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-time-0000002458282233)**

  设置上架时间，以便小游戏顺利在期望时间内上架至应用市场，支持小游戏通过审核后立即上架，也支持在指定时间上架。

  若已设置在指定时间上架，小游戏通过审核后如希望在指定时间前上架，您还可以手动发布上架。
* **[提交审核](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-submit-0000002424763510)**

  完成小游戏信息和版本信息的配置后，即可将小游戏提交上架审核。

  前往待发布版本界面查看审核状态。若上架审核驳回，可以参考审核报告进行修改。
