---
title: "发布指引"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-guide-0000002293651514
---

为了给用户提供良好、安全、可靠的应用体验，在元服务正式发布到华为应用市场前，我们会审核您提交的所有信息，请了解发布元服务的要求、需要提供的信息，以便尽可能顺利通过发布审核。

* **提前了解发布规则，准备材料**

  在提交发布审核前，您需要了解发布需要遵循的规则、要求，基于规则和要求对发布包进行自检，并提前准备好发布所需的各种材料。具体参见[发布准备工作](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-prepare-0000002327610825)。
* **上传软件包**

  提前将待发布的软件包上传至AGC，以便后续发布时能选择到对应的版本。上传时，AGC会对软件包进行基础合法检测。如果上传失败，可提前根据报告或者错误码完成问题的修改。具体参见[上传软件包](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-upload-pkg-0000002293811142)。
* **配置元服务分发的设备类型**

  您的元服务可以分发至手机、平板等多种设备，默认发布设备为您创建元服务时选择的设备类型。配置后，您只需发布一次，用户即可在多种设备上使用您的元服务。具体参见[配置支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-devicetype-0000002293811138)。
* **本地化元服务信息**

  如果您的元服务需要分发至不同语言的国家或地区，需要用每种语言描述应用信息。如果不配置，则所有地区用户都只看到默认语言描述的信息。

  例如，当您设置简体中文为默认语言，并且只配置中文的本地化信息，那么元服务在所有设置的发布国家或地区的信息都将显示中文。如果您还设置了英文的本地化信息，那么语言设置为英文的用户就能看到英文的信息；在支持英文但不支持中文的国家或地区，用户也会看到英文的元服务信息。

  关于元服务名称、图标、介绍、特性等内容配置方式，具体参见[配置本地化基础信息（应用名称、图标）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-nameicon-0000002327731069)和[配置本地化基础信息（介绍、特性）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-intro-0000002327610833)。
* **[配置应用分类、标签和资质信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-class-tag-0000002293651518)**

  用户会通过应用市场上的类别来发现他们想要的元服务，设置的类别将影响到元服务的曝光度。同时，按照法律法规要求，元服务上架需要提供相应的资质材料，资质材料不规范将影响您发布的进度。

  + 分发非手表设备时：需在“分类标签和资质管理”菜单选择元服务归属的类别和标签，同时将所需的资质文件提交给华为运营人员审核。
  + 仅分发手表设备时：直接在应用信息页面设置应用分类，然后在版本信息页面上传对应的版权资质文件。
* **[配置开发者服务信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-devinfo-0000002327610829)**

  您可以将作为开发者的信息提供给用户，以便获取用户的咨询问题和反馈。
* **[选择待发布软件包](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-choose-pkg-0000002327731073)**

  上传软件包并通过基础合法检查后，就可以从上传的版本中选择需要发布的软件包。
* **配置发布国家或地区**

  设置元服务分发的国家或地区后，对应国家或区域的用户即可发现获取您的元服务。当前元服务仅支持发布到中国大陆地区。
* **[配置应用内资费类型和商品](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-goods-0000002327731077)**

  如果您元服务涉及到收费，您可以设置应用内资费类型，用于标识用户使用元服务时需要付费的类型。基于业务场景，支持选择多个类型。

  数字商品分为消耗型、非消耗型、自动续期订阅和非续期订阅四类，当需要在元服务中添加新类型数字商品时，需要随版本一起发布。
* **配置内容分级**

  内容分级用于标识您的元服务适宜用户的年龄段。年龄分级作为元服务的重要属性，在华为应用市场的应用详情页展示给用户，帮助用户找到适合其年龄段的元服务。

  AGC提供了调查问卷，根据您回答的内容，自动生成年龄分级结果。具体参见[配置内容分级](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-rating-0000002293651526)。
* **配置隐私信息**
  + 隐私说明：当AGC检测到您的元服务中涉及获取敏感隐私权限或者使用受限开放权限时，需要您说明使用权限理由、使用场景。具体参见[配置隐私说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-privacy-desc-0000002327610837)。
  + 隐私声明：您需要提供声明隐私政策的网站，便于用户了解元服务的数据收集和使用情况。元服务必须使用AGC的隐私声明托管服务生成自己的隐私声明，具体参见[配置隐私声明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-privacy-state-0000002293811150)。
* **[配置AI功能声明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-ai-0000002485425989)**

  按照法律法规要求，应用程序在上架或者上线审核时，应用程序服务提供者应说明是否提供人工智能生成合成服务。
* **[配置核准（备案）信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-record-0000002327610841)**

  根据工业和信息化部的要求，APP主办者应当按规定履行核准（备案）手续。未履行核准（备案）手续，不得从事APP互联网信息服务。您需要提前完成核准（备案），在发布时配置相应的核准（备案）信息。
* **[填写审核信息与联系方式](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-reviewinfo-0000002293811154)**

  如果您的元服务需要对用户进行身份验证，需要提供测试账号信息，以便华为审核人员可以使用该账号完成相关功能的审核。

  账号归属地为中国大陆地区的开发者，还需预留应用负责人的联系方式，以便于华为审核人员与您联系沟通。
* **[设置上架时间](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-review-time-0000002327731085)**

  您可以选择让元服务审核通过后立即上架，也可以指定一个特定时间上架。

  若您之前设置了指定时间上架，审核通过后您又想在设定时间之前上架，还可以手动发布上架。
* **[提交审核](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-submit-0000002293651534)**

  当完成所有应用信息和版本信息的配置后，即可将元服务提交上架审核。您可以前往待发布版本界面查看审核状态。若被驳回，可参考审核报告进行修改。
