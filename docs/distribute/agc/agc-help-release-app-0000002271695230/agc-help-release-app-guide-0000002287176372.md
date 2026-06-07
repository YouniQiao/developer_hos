---
title: "发布指引"
original_url: /docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-guide-0000002287176372
format: md
---


为了给用户提供良好、安全、可靠的应用体验，在应用正式发布到华为应用市场前，我们会审核您提交的所有信息，请了解发布应用的要求、需要提供的信息，以便尽可能顺利通过发布审核。

* **提前了解发布规则，准备材料**

  在提交发布审核前，您需要了解发布需要遵循的规则、要求，基于规则和要求对发布包进行自检，并提前准备好发布所需的各种材料。具体参见[发布准备工作](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-prepare-0000002306311921)。
* **上传软件包**

  提前将待发布的软件包上传至AGC，以便后续发布时能选择到对应的版本。上传时，AGC会对软件包进行基础合法检测。如果上传失败，可提前根据报告或者错误码完成问题的修改。具体参见[上传软件包](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-upload-pkg-0000002277983368)。
* **配置应用分发的设备类型**

  您的应用可以分发至手机、平板等多种设备，默认发布设备为您创建应用时选择的设备类型。配置后，您只需发布一次，用户即可在多种设备上使用您的应用。具体参见[配置支持设备](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-devicetype-0000002271592112)。
* **本地化应用信息**

  如果您的应用需要分发至不同语言的国家或地区，需要用每种语言描述应用信息。如果不配置，则所有地区用户都只看到默认语言描述的信息。

  例如，当您设置简体中文为默认语言，并且只配置中文的本地化信息，那么应用在所有设置的发布国家或地区的信息都将显示中文。如果您还设置了英文的本地化信息，那么语言设置为英文的用户就能看到英文的信息；在支持英文但不支持中文的国家或地区，用户也会看到英文的应用信息。

  关于应用名称、图标、应用介绍、特性、素材等内容配置方式，具体参见[配置本地化基础信息（应用名称、图标）](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-nameicon-0000002306265009)和[配置本地化基础信息（介绍、特性、素材）](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-intro-0000002313477961)。
* **[配置应用分类、标签](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-class-tag-0000002271695234)**

  用户会通过应用市场上的类别来发现他们想要的应用，设置的类别将影响到应用的曝光度。
* **[配置开发者服务信息](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-devinfo-0000002306311925)**

  您可以将作为开发者的信息提供给用户，以便获取用户的咨询问题和反馈。
* **[选择待发布软件包](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-choose-pkg-0000002278981434)**

  上传软件包并通过基础合法检查后，就可以从上传的版本中选择需要发布的软件包。
* **[配置发布国家或地区](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-area-0000002313510997)**

  设置应用分发的国家或地区后，对应国家或区域的用户即可发现获取您的应用。
* **[配置应用内资费类型和商品](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-goods-0000002278981442)**

  如果您应用涉及到收费，您可以设置应用内资费类型，用于标识用户使用应用时需要付费的类型。基于业务场景，支持选择多个类型。

  数字商品分为消耗型、非消耗型、自动续期订阅和非续期订阅四类，当需要在应用中添加新类型数字商品时，需要随版本一起发布。
* **配置内容分级**

  内容分级用于标识您的应用适宜用户的年龄段。年龄分级作为应用的重要属性，在华为应用市场的应用详情页展示给用户，帮助用户找到适合其年龄段的应用。

  AGC提供了调查问卷，根据您回答的内容，自动生成年龄分级结果。具体参见[配置内容分级](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-rating-0000002313511005)。
* **配置隐私信息**
  + 隐私说明：当AGC检测到您的应用中涉及获取敏感隐私权限或者使用受限开放权限时，需要您说明使用权限理由、使用场景。具体参见[配置隐私说明](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-privacy-desc-0000002313477969)。
  + 隐私声明：您需要提供声明隐私政策的网站，便于用户了解应用的数据收集和使用情况。隐私政策的网站可以是您自有的，也可以使用AGC的隐私声明托管服务新建一个。具体参见[配置隐私声明](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-privacy-state-0000002278878296)。
  + 隐私标签信息：隐私标签将展示在应用详情页面，帮助用户提前了解应用使用个人数据的情况。只有支持手机、平板、PC/2in1或智慧屏的HarmonyOS应用才需要配置此信息。
* **[配置AI功能声明](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-ai-0000002485431261)**

  按照法律法规要求，在应用程序在上架或者上线审核时，应用程序服务提供者应说明是否提供人工智能生成合成服务。
* **[配置版权信息](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-copyright-0000002278981450)**

  按照法律法规要求，应用上架需要提供相应的资质材料。资质材料不规范将影响您发布的进度。
* **[配置核准（备案）信息](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-record-0000002319594705)**

  根据工业和信息化部的要求，APP主办者应当按规定履行核准（备案）手续。未履行核准（备案）手续，不得从事APP互联网信息服务。您需要提前完成核准（备案），在发布时配置相应的核准（备案）信息。
* **[填写审核信息与联系方式](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-reviewinfo-0000002320780365)**

  如果您的应用需要对用户进行身份验证，需要提供测试账号信息，以便华为审核人员可以使用该账号完成相关功能的审核。

  账号归属地为中国大陆地区的开发者，还需预留应用负责人的联系方式，以便于华为审核人员与您联系沟通。
* **[设置上架时间](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-review-time-0000002293233458)**

  您可以选择让应用审核通过后立即上架，也可以指定一个特定时间上架。

  若您之前设置了指定时间上架，审核通过后您又想在设定时间之前上架，还可以手动发布上架。
* **[提交审核](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-submit-0000002286180890)**

  当完成所有应用信息和版本信息的配置后，即可将应用提交上架审核。您可以前往待发布版本界面查看审核状态。若被驳回，可参考审核报告进行修改。
