---
title: "发布准备工作"
original_url: /docs/distribute/agc/agc-help-release-atomic-0000002327731065/agc-help-release-atomic-prepare-0000002327610825
format: md
---


发布元服务前，请详细了解华为应用市场的审核要求与上架规则，并提前准备发布所需的文件与资源，以便您能顺利、快速通过发布审核流程。

#### 了解上架规则

仔细阅读[元服务审核指南](/docs/distribute/app-dist/app-market/x50000/x50129/x50129-overview)、[元服务审核FAQ](/docs/distribute/app-dist/app-market/x50000/x50150)，了解元服务上架至华为应用市场需要遵循的规则和要求。

#### 准备元服务软件包

准备好元服务软件包并完成自检，确保您的APP包满足如下要求：

| 检查项 | 说明 |
| --- | --- |
| APP包签名 | 在DevEco Studio中编译发布包时，签名使用的是[发布证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-release-cert-0000002283336729)和[发布Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-release-profile-0000002248341090)。 |
| APP包大小 | 不超过10MB。 |
| APP包中各模块大小 | * Stage模型   + 元服务内任意类型的单个包大小都不超过2MB。   + 单个包加上其采用dependency方式依赖的[动态共享包（Harmony Shared Package, HSP）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hsp)，总大小不超过2MB。 说明：  **若一个HSP包同时被entry包和分包依赖，则该HSP包仅计入entry包大小，不再重复计入分包大小。**例如，元服务包含entry包和分包1，entry包依赖HSP包1和HSP包2，而分包1依赖HSP包1和HSP包3，则：entry包大小 = entry包本身 + 依赖的HSP包1 + 依赖的HSP包2；分包1大小 = 分包1本身 + 依赖的HSP包3。   + 元服务内同一设备类型下所有包大小总和不得超过10MB。 * FA模型：单个HAP包不得超过10MB。 |
| APP包中HAP包类型 | 元服务包内所有HAP包都必须是免安装类型，即：  * 如元服务为Stage模型，需保证AppScope/app.json5文件的“bundleType”字段值为“atomicService”。 * 如元服务为FA模型，需保证每个HAP包的src/main/config.json文件中“installationFree”字段值均为“true”。 |
| APP包中各模块数量 | * Stage模型：同一设备类型下仅允许有一个entry包，可以有0-N个feature包或HSP包。 * FA模型：同一设备类型下仅允许有一个entry包，不能有任何feature包或HSP包。 |
| API Level | APP包使用的API Level ≥ 10。 |
| APP包中内容 | * API Level ≥ 11时，不可包含调试信息，检查包内所有HAP/HSP包的module.json文件，确保“debug”字段值不为“true”。 * app.json5文件中的label值不得为空，且Entry同级目录下不得存在两个同名的文件夹或文件。 * API Level ≥ 11时，元服务只能采用“元服务API集”进行开发，不允许使用其他API （如C API）。请确保软件包中不存在SO文件。 |

#### 准备发布信息与素材

| 准备项 | 说明 |
| --- | --- |
| 支持的语种，适配各语种的应用素材 | 为应用详情页准备应用图标、应用介绍截图和视频，具体要求请参见[素材规范](/docs/distribute/agc/agc-help-appendix-0000002312305161/agc-help-app-visual-asset-spec-0000002277607976)。 |
| 隐私权限说明 | 提前确认您的元服务是否涉及获取用户隐私信息，如涉及，请准备权限描述、权限使用设备范围、使用场景视频、权限使用理由等。 |
| 隐私声明 | 请提前使用[隐私声明托管](/docs/distribute/agc/agc-help-privacy-policy-0000002316794885/agc-help-privacy-policy-overview-0000002316881805)，生成自己的隐私声明。 |
| 资质文件 | 请根据元服务的分类，参考[元服务资质审核要求](/docs/distribute/app-dist/app-market/x50000/x80302)，准备元服务所需的资质文件。 |
| 核准（备案）信息 | 参考[APP核准（APP备案）指引](/docs/distribute/app-dist/app-market/x50000/x50130)，提前完成核准（备案），并保存好核准（备案）信息。 |
