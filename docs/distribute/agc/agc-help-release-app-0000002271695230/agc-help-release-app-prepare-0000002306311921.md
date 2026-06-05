---
title: "发布准备工作"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-prepare-0000002306311921
format: md
---


发布应用前，请详细了解华为应用市场的审核要求与上架规则，并提前准备发布所需的文件与资源，以便您能顺利、快速通过发布审核流程。

#### 了解上架规则

仔细阅读[应用审核指南](https://developer.huawei.com/consumer/cn/doc/app/50104)、[应用审核FAQ](https://developer.huawei.com/consumer/cn/doc/app/50106)，了解应用上架至华为应用市场需要遵循的规则和要求。

#### 准备应用软件包

准备好应用软件包并完成自检，确保您的APP包满足如下要求：

| 检查项 | 说明 |
| --- | --- |
| APP包名 | 软件包中设置的应用包名必须与[创建HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506)时配置的包名一致。 |
| APP包签名 | 在DevEco Studio中编译发布包时，签名使用的是[发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729)和[发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)。 |
| APP包大小 | 不超过4GB。 |
| APP包中HAP包大小 | 上传APP包后，AGC将解析检测APP包中的HAP包大小，并根据HAP包声明支持的设备类型判断HAP包大小是否满足条件。如APP包大小符合条件，但HAP包超过上限，系统会提示HAP包过大，您仍无法成功上传APP包。因此请确保每个HAP包满足大小限制：   * 不同设备类型的HAP包大小限制：   + 手机、平板或PC/2in1设备不能超过4GB   + 智能手表、智慧屏不能超过2GB   + 运动手表不能超过20MB * 对于支持单设备的HarmonyOS应用软件包，HAP包大小不能超过对应设备类型的上限。例如，HarmonyOS应用软件包仅支持运动手表，则HAP包不能超过20MB。 * 对于支持多设备的HarmonyOS应用软件包，如果APP包中的单个HAP包支持单个设备，则HAP包大小不能超过对应设备类型的上限。如果APP包中的单个HAP包支持多个设备，则HAP包大小不能超过这多个设备类型上限的最小值。 |
| APP包中HAP包类型 | HarmonyOS应用包内所有HAP包都必须是非免安装类型，即：   * 如果应用为FA模型，需保证每个HAP包的src/main/config.json文件中“installationFree”字段值均为“false”。 * 如果应用为Stage模型，需保证AppScope/app.json5文件的“bundleType”字段值为“app”（无“bundleType”字段则默认为“app”类型）。 |
| API Level | APP包使用的API Level ≥ 10。 |
| APP包中内容 | * API Level ≥ 11时，不可包含调试信息，检查包内所有HAP/HSP包的module.json文件，确保“debug”字段值不为“true”。 * app.json5文件中的label值不得为空，且Entry同级目录下不得存在两个同名的文件夹或文件。 |

#### 准备发布信息与素材

| 准备项 | 说明 | 发布中国大陆地区的应用 | 发布非中国大陆地区的应用 |
| --- | --- | --- | --- |
| 支持的语种，适配各语种的应用素材 | 为应用详情页准备应用图标、应用介绍截图和视频，具体要求请参见[素材规范](https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-visual-asset-spec-0000002277607976)。 | 涉及 | 涉及 |
| 隐私权限说明 | 提前确认您的应用是否涉及获取用户隐私信息。如涉及，请准备权限描述、权限使用设备范围、使用场景视频、权限使用理由等。 | 涉及 | 涉及 |
| 隐私声明 | 如果您已经有描述隐私政策的网站，请准备此网站的地址；或者您可以提前使用[隐私声明托管](https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-policy-overview-0000002316881805)，生成自己的隐私声明。 | 涉及 | 涉及 |
| 电子版权证书 | 准备应用配套的电子版权证书。 | 涉及 | 不涉及 |
| 应用版权证书或代理证书 | 请根据应用的分类，参考[应用资质审核要求](https://developer.huawei.com/consumer/cn/doc/app/80301)，准备应用所需的资质文件。 | 涉及 | 不涉及 |
| 核准（备案）信息 | 参考[APP核准（APP备案）指引](https://developer.huawei.com/consumer/cn/doc/app/50130)，提前完成核准（备案），并保存好核准（备案）信息。 | 涉及 | 不涉及 |
