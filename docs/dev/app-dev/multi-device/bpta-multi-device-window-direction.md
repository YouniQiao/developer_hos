---
title: "窗口方向"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/bpta-multi-device-window-direction
format: md
upstream_id: dev/app-dev/multi-device/bpta-multi-device-window-direction
last_sync: 2026-06-07
sync_hash: e6f0a2f0
---
# 窗口方向

## 概述

窗口方向适配旨在解决应用不同场景下窗口的朝向问题。以直板机上的视频类应用为例，应用首页通常竖屏显示；而全屏视频播放页通常横屏显示。其核心的策略在于动态调整应用窗口方向的显示策略（即window的[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9)，以下简称“**窗口旋转策略**”），确保在不同用户交互场景下提升用户体验。

本文主要内容如下：

* 前置约束与限制：介绍窗口方向的含义。明确指出在设备形态多样化的前提下，如何选择更合适的窗口旋转策略。
* 窗口旋转策略枚举：介绍窗口旋转策略的枚举值，并解析各值在不同设备形态下的行为映射，帮助开发者理解系统的底层适配逻辑。
* 实现原理：介绍配置页面窗口旋转策略的技术实现机制与核心流程。

* 典型场景：
  + 应用首页案例：通用页面窗口旋转策略。
  + 游戏应用案例：竖屏或横屏方向锁定的窗口旋转策略。
  + 图库案例：四个方向自动旋转且受控制中心的旋转开关控制的窗口旋转策略。
  + 个股详情页 & 股票K线图页：应用组合页面内根据场景不同切换的窗口旋转策略。
  + 视频详情页 & 全屏播放页：相同页面内根据用户行为切换的窗口旋转策略。

## 前置约束与限制

在阅读本文前，建议开发者先了解[窗口管理](/docs/dev/app-dev/application-framework/arkui/window-manager)、[窗口旋转](/docs/dev/app-dev/application-framework/arkui/window-manager/window-rotation)、[屏幕管理](/docs/dev/app-dev/application-framework/arkui/display-manager)、[一次开发，多端部署](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)、[组件导航（Navigation）](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation)等相关知识。

横竖屏切换功能可实现应用内既支持竖屏显示也支持横屏显示的效果。对于应用内不同页面显示方向不同的情况，需在应用逻辑中动态修改窗口方向以实现该效果。例如，在直板机上具备视频播放功能的应用中，首页内容是采用竖屏方式，而全屏播放页则采用横屏方式展示。

随着设备形态日益丰富，应用页面支持旋转已从部分页面适配发展为全面支持。因此，选择合适的旋转策略，对应用开发至关重要。

目前HarmonyOS系统中设备的显示方向有以下四种，对应真机实际状态如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/6IZTr9wbQiCc1KllbnKFGg/zh-cn_image_0000002566756945.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=899FEE35EE48C6BA7C464548176BF1DA3B11DA156EE2946F8D58F0A2487B3B66)

**基本定义：**

以设备物理屏幕尺寸为判定依据，设备的显示方向定义如下：

* 竖屏（PORTRAIT）：屏幕高度大于宽度，用户正向握持设备时充电口朝下（默认竖屏状态）。
* 反向竖屏（PORTRAIT\_INVERTED）：屏幕高度大于宽度，但设备倒置，即充电口朝上。
* 横屏（LANDSCAPE）：屏幕宽度大于高度，用户正向握持设备时充电口朝右（默认横屏状态）。
* 反向横屏（LANDSCAPE\_INVERTED）：屏幕宽度大于高度，但设备倒置，即充电口朝左。

**区分方法**：

系统提供了@ohos.display模块来获取屏幕的当前方向（[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#orientation10)）和旋转角度（即[Display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#display)的rotation）。屏幕方向直接对应上述四种方向枚举值，而旋转角度表示屏幕相对于默认方向的顺时针旋转度数，其对应关系如下表（以常见直板机为例）：

| 屏幕旋转角度返回值 (rotation) | 对应度数 | 屏幕方向 (Orientation) |
| --- | --- | --- |
| 0 | 0° | 竖屏 (PORTRAIT) |
| 1 | 90° | 反向横屏 (LANDSCAPE\_INVERTED) |
| 2 | 180° | 反向竖屏 (PORTRAIT\_INVERTED) |
| 3 | 270° | 横屏 (LANDSCAPE) |

## 了解窗口旋转策略

窗口旋转策略提供了18种窗口旋转策略（即window的[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9)），开发者可通过预设相关窗口旋转策略控制应用在不同场景下的窗口显示方向。为帮助开发者能更快速的理解这些策略，下文会分类说明18个枚举值的含义及对应效果。

###固定方向策略

固定方向旋转策略是指应用窗口在启动或页面跳转时被锁定在特定显示方向（如竖屏、横屏等），且不随设备物理方向改变而自动旋转，包含以下五类：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PORTRAIT | 1 | 表示竖屏显示模式。 |
| LANDSCAPE | 2 | 表示横屏显示模式。 |
| PORTRAIT\_INVERTED | 3 | 表示反向竖屏显示模式。 |
| LANDSCAPE\_INVERTED | 4 | 表示反向横屏显示模式。 |
| LOCKED | 11 | 表示锁定模式，窗口显示方向与屏幕当前方向（参考[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#orientation10)）一致。 |

以三折叠G态为例，窗口初始方向的效果图如下：

| 初始方向 | 枚举值 | 设备竖屏时，应用启动效果图 | 设备横屏时，应用启动效果图 |
| --- | --- | --- | --- |
| 竖屏 | PORTRAIT | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/cBiRS4xxTR6gmwXlYcLqHg/zh-cn_image_0000002535837162.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=651AE9B4E2DFB3635A137C0553B567B098FD33B77449A0E9BD1740E2A84E172E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/zjfsR6uOThmhMtnXCbdEJw/zh-cn_image_0000002535997096.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=91C60F39A42534AF74AD9BC0D0D174329A310792CF73EF7B159AECE9D65BA6CA "点击放大") |
| 反向竖屏 | PORTRAIT\_INVERTED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/xSVmsSSTQFGuNr1ItrWABQ/zh-cn_image_0000002566916933.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=EF874CC7144E0CCD6484DF2180C5315D1BB8400D904A13D59180BDC824310517 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/ULfusZiWSMCagl9-Gn9qXA/zh-cn_image_0000002566756955.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=070AD18BE9ED60A184BE3250678F19FBE6BCD9993E4EE8FE9322B8468BF5BD1A "点击放大") |
| 横屏 | LANDSCAPE | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/wDnd5JI6QsS549hWFfjCug/zh-cn_image_0000002535837174.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=FD49EFAD26CDEE187D4BD4F85F6699A79A525EB276A4CF65390977679581A247 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/b7DNNRoATBy3NAr-cQXErA/zh-cn_image_0000002535997108.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=31A021698E3BA3404544E766806D7F09B4180D31EA7ED7A3D1A66536AF79D00B "点击放大") |
| 反向横屏 | LANDSCAPE\_INVERTED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/X7KckBOHTU2asSB7gObAEg/zh-cn_image_0000002566916947.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=B828E3D2CC8564AA06316AC11B4283DB0D08E4802309ECB687186D0396E0BE86 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/zIls5pgTTJewbUfBfy9gtQ/zh-cn_image_0000002566756969.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=80D174F52E9E30C9258FE20E09DB572BCB9E8B0AB00677849D43E84AF1C47C02 "点击放大") |
| 锁定模式 | LOCKED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/l6nfMHgRTC-f4im-Dx5C7Q/zh-cn_image_0000002535837186.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=D5CADCD31BCF3DF667D598BCB7501772CBD2788502B9718F7A66D0ECA952A270 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/G-HUsdC3RKWp--xFqvevQw/zh-cn_image_0000002535997124.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=AB0E8BA947298DA38D899B0CAFEE3611BC5D6259086B313BC20F027AFB69A3F0 "点击放大") |

###自动旋转策略

自动旋转策略是指应用窗口能够根据设备物理方向（即重力传感器）的变化自动调整显示方向，且可能受系统控制中心“旋转锁定”开关的影响。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/ZkW7ZIlkTee9Ta3PzS5bMQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=770F6308478119311AD5C600BD68AE49BFA9D366B3A67C673C64E32E5E050230)

控制中心的旋转开关用于控制屏幕是否可以旋转。当“旋转锁定”高亮时，表示已锁定，无法旋转；当“旋转锁定”为灰色时，表示已解锁，可以旋转。

例如，若要实现跟随控制中心的自动旋转，包括横屏、竖屏、反向横屏、反向竖屏，则可设置为AUTO\_ROTATION\_RESTRICTED。

若不希望跟随控制中心的旋转控制，只需设置为AUTO\_ROTATION，此时应用的旋转不受控制中心锁定的影响。其他旋转方式亦然。

**不受控制中心控制的自动旋转**

不受控制中心控制的自动旋转策略包含以下三类：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| AUTO\_ROTATION | 5 | 跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且不受控制中心的旋转开关控制。 |
| AUTO\_ROTATION\_PORTRAIT | 6 | 跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且不受控制中心的旋转开关控制。 |
| AUTO\_ROTATION\_LANDSCAPE | 7 | 跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且不受控制中心的旋转开关控制。 |

以三折叠G态为例，不受控制中心控制的自动旋转策略效果图如下：

|  | 不受开关控制枚举值 | 不受开关控制效果图 |
| --- | --- | --- |
| 自由旋转（竖屏/反向竖屏/横屏/反向横屏） | AUTO\_ROTATION | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/ma1P96V_TpSka96-j7g1Qw/zh-cn_image_0000002566916961.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=E6A7D3BA1EAD2354A43A275D3B9F6B1C3147799F04A07E29C865CABDDB855548 "点击放大") |
| 竖屏旋转（竖屏/反向竖屏） | AUTO\_ROTATION\_PORTRAIT | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/Uwx9iwv9Q4SxiWe3iN8QjQ/zh-cn_image_0000002566756981.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=19D65A108935F997CF2F37EE58B8C25D423F51A51E6F01ABE62488BE4F6BA1D3 "点击放大") |
| 横屏旋转（横屏/反向横屏） | AUTO\_ROTATION\_LANDSCAPE | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/J2ZFDTV2TDa6EOrzYLtIdw/zh-cn_image_0000002535837198.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=59F1B3ABA5FDE92510C0D6F77B5D3C6EF03985C4658D6549C1B4F93C339F35AC "点击放大") |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/nxM8eVuxQa2J20vUGWgv2Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=3E254E46FE4C53753C2363327D41C26008D5ABD12D51C5BE43FDCE1E687C562F)

控制中心的旋转开关用于控制屏幕是否可以旋转。当“旋转锁定”高亮时，表示已锁定，无法旋转；当“旋转锁定”为灰色时，表示已解锁，可以旋转。

例如，若要实现跟随控制中心的自动旋转，包括横屏、竖屏、反向横屏、反向竖屏，则可设置为AUTO\_ROTATION\_RESTRICTED。

若不希望跟随控制中心的旋转控制，只需设置为AUTO\_ROTATION，此时应用的旋转不受控制中心锁定的影响。其他旋转方式亦然。

**受控制中心控制的自动旋转**

受控制中心控制的自动旋转策略包含以下四类：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| AUTO\_ROTATION\_RESTRICTED | 8 | 跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且受控制中心的旋转开关控制。 |
| AUTO\_ROTATION\_PORTRAIT\_RESTRICTED | 9 | 跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且受控制中心的旋转开关控制。 |
| AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED | 10 | 跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且受控制中心的旋转开关控制。 |
| AUTO\_ROTATION\_UNSPECIFIED | 12 | 跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 |

以三折叠G态（即三折叠设备完全展开时的三屏显示状态）为例，受控制中心控制的自动旋转策略效果图如下：

|  |  |  |
| --- | --- | --- |
| 自由旋转（竖屏/反向竖屏/横屏/反向横屏） | AUTO\_ROTATION\_RESTRICTED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/tMoXYPu-R46RGacBDdEyPg/zh-cn_image_0000002535997134.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=DD6427D6332EA22815DF2F5ED24807B4ECD378DEC7432442281DD08DAE539C84 "点击放大") |
| 竖屏旋转（竖屏/反向竖屏） | AUTO\_ROTATION\_PORTRAIT\_RESTRICTED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/ACiygeRmQg2Ugm3FoIfeOg/zh-cn_image_0000002566916971.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=3E8901AC0735EB89B56925D32B62EE6C762E3554F870C0D9D76A0E8F23F86CFC "点击放大") |
| 横屏旋转（横屏/反向横屏） | AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/2BMSSEIXQ42-RSOs8jE8CA/zh-cn_image_0000002566756989.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=7FEDA04A62BB3591618184D431FA9AE3F5C4483E9A470AFDFE9574CA6DCF245D "点击放大") |
| 跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 | AUTO\_ROTATION\_UNSPECIFIED | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/fDfLueKLQP6-DvqvbICTig/zh-cn_image_0000002535837208.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=538BD868C30CD256D5F1FB8FDE7A4AE073E2EB2321E709F9B884642961E64943 "点击放大") |

**带首选方向的自动旋转**

带首选方向的旋转策略允许应用在启动时或调用接口时临时切换到指定方向（如竖屏、横屏等），之后跟随设备传感器自动旋转，且该自动旋转受控制中心“旋转锁定”开关控制，同时可旋转方向受系统对当前设备形态判定的影响，具体可分为以下四类：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| USER\_ROTATION\_PORTRAIT | 13 | 调用时临时旋转到竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 |
| USER\_ROTATION\_LANDSCAPE | 14 | 调用时临时旋转到横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 |
| USER\_ROTATION\_PORTRAIT\_INVERTED | 15 | 调用时临时旋转到反向竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 |
| USER\_ROTATION\_LANDSCAPE\_INVERTED | 16 | 调用时临时旋转到反向横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。 |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/mFOsInkFQrOXPYH3OpVaDA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=C440A7FDA75262F54A5576B722A12F7D642C78FFAC6690AD059CC70B44ACE75F)

可旋转方向受系统判定：在自动旋转开关开启的状态下，窗口可旋转至的具体方向（如竖屏、横屏、反向横屏等）由系统根据当前设备的形态（如直板机、折叠屏展开态、平板等）自动决定，以提供最佳体验。在具体设备上会禁用不适合用户使用的方向，例如在直板机上可以旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏。

###跟随桌面显示策略

跟随桌面显示策略适用于适配多种设备形态（如手机、平板、折叠屏）的应用，使应用自动继承系统桌面的旋转策略，从而在不同设备上提供一致且符合用户预期的旋转体验。例如，在同时适配手机和平板的应用中，若希望应用在平板上随桌面横竖屏旋转，而在手机上保持竖屏锁定，可采用此策略，无需为不同设备单独编写复杂的旋转逻辑。

该策略简化了多设备适配的复杂度，开发者无需针对每种设备形态单独配置旋转行为，系统会自动根据桌面状态管理应用窗口的方向。具体实现可参考“[跟随桌面的旋转策略](#section3434202623320)”章节。

| 名称 | 值 | 说明 |
| --- | --- | --- |
| FOLLOW\_DESKTOP | 17 | 表示跟随桌面的旋转模式，如果桌面可以旋转则可旋转，桌面不可旋转则不可旋转。 |

## 选择合适的窗口旋转策略

应用在不同业务界面需设置合适的窗口旋转策略，以提供最佳用户体验。

为正确选择旋转策略枚举，开发者可通过通过是否支持自动旋转、支持旋转的方向及预设初始方向三个维度进行匹配，具体参考如下表：

| 是否支持自动旋转 | 支持旋转的方向 | 预设初始方向 | 窗口旋转策略 |
| --- | --- | --- | --- |
| 固定方向 | NA | 竖屏 | PORTRAIT |
| NA | 横屏 | LANDSCAPE |
| NA | 反向竖屏 | PORTRAIT\_INVERTED |
| NA | 反向横屏 | LANDSCAPE\_INVERTED |
| 受控自动旋转 | 竖两向可旋转 | NA | AUTO\_ROTATION\_PORTRAIT\_RESTRICTED |
| 横两向可旋转 | NA | AUTO\_ROTATION\_LANDSCAPE\_RESTRICTE |
| 最多四向可旋转，但受系统判定 | NA | AUTO\_ROTATION\_UNSPECIFIED |
| 竖屏 | USER\_ROTATION\_PORTRAIT |
| 横屏 | USER\_ROTATION\_LANDSCAPE |
| 反向竖屏 | USER\_ROTATION\_PORTRAIT\_INVERTED |
| 反向横屏 | USER\_ROTATION\_LANDSCAPE\_INVERTED |
| 跟随桌面策略 | NA | NA | FOLLOW\_DESKTOP |

上述表格也可以抽象为如下的决策逻辑，如图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/N4sLuH9sReyFcgAQzj6qFg/zh-cn_image_0000002572763022.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=AB77E579288D94C4F78C99CAA7FB2A7F66B543FEDB37984337686531082A55E5 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/mYSRZTL0QsK77w11hTpIjg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=F909194AE49B20FD4A24C5C310986A472E930714638100FF1656AFBC53D40D8F)

不推荐使用不受控制中心限制的自动旋转策略，故未将其列入表格。如特定场景需要，可直接使用[自动旋转策略](#section180611396137)中的该策略。

**窗户策略工具类**

为提升开发者窗口旋转策略选择的易用性，结合上述策略决策逻辑图，我们提供了一套窗口旋转策略选择工具类，支持三种使用形式。

1. 通过链式属性访问直接获取策略值

   若开发者需要在代码的中硬编码策略值，可通过工具类中的OrientationPresets常量，采用三层递进的链式调用获取旋转策略枚举，示例如下：

   ```
   @Component
   export struct Home {
     windowObj: window.Window | undefined = undefined;
     // ...

     aboutToAppear(): void {
       this.tabBarsInfo.setTabList(TabBarsInfo);
       try {
         this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
       } catch (err) {
         Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
       }

       // Use the WindowOrientationHelper tool to directly obtain the rotation strategy enumeration through chained calls.
       this.windowObj?.setPreferredOrientation(WindowOrientationHelper.presets.FOLLOW_DESKTOP)
         .catch((err: BusinessError) => {
           Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
         });
       // ...
     }

     aboutToDisappear() {
       // Use the WindowOrientationHelper tool to directly obtain the rotation strategy enumeration through chained calls.
       this.windowObj?.setPreferredOrientation(WindowOrientationHelper.presets.FIXED.UNSPECIFIED)
         .catch((err: BusinessError) => {
           Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
         });
     }

     // ...

     build() {
       // ...
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/home/src/main/ets/views/Home.ets#L29-L203" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Home.ets</a></div>

2. 通过函数式选择器动态选择

   若开发者在特定界面场景下已确定主行为模式，仅需根据条件细化策略，则可采用该方法，示例如下：

   ```
   @Component
   export struct PortraitModeGame {
     windowObj: window.Window | undefined = undefined;
     // ...

     aboutToAppear(): void {
       try {
         this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
       } catch (err) {
         Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
       }

       // Obtain the PORTRAIT rotation strategy enumeration through the function selector.
       this.windowObj?.setPreferredOrientation(WindowOrientationHelper.fixed('PORTRAIT'))
         .catch((err: BusinessError) => {
           Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
         });
       // ...
     }

     // ...
     build() {
       // ...
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/portrait/src/main/ets/views/PortraitModeGame.ets#L27-L127" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：PortraitModeGame.ets</a></div>

3. 通过通用选择器动态选择

   若开发者在特定界面场景下所有旋转参数均需动态确定，可通过select方法，利用联合参数定义策略选择器入参实现，示例如下：

   ```
   @Component
   export struct VideoDetail {
     windowObj: window.Window | undefined = undefined;
     // ...

     aboutToAppear() {
       // ...

       // Dynamically select an appropriate rotation strategy through a selector.
       this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
         mode: 'autoRotate',
         range: 'ALL_ORIENTATIONS',
         preferred: 'UNSPECIFIED'
       }))
         .catch((err: BusinessError) => {
           Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
         });
     }

     onFullScreenChange(): void {
       if (this.isFullScreen) {
         if (this.isClick) {
           if (this.widthBp === WidthBreakpoint.WIDTH_SM || this.widthBp === WidthBreakpoint.WIDTH_LG ||
             this.heightBp === HeightBreakpoint.HEIGHT_LG) {
             // Dynamically select an appropriate rotation strategy through a selector.
             this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
               mode: 'autoRotate',
               range: 'LANDSCAPE_ONLY'
             }))
               .catch((err: BusinessError) => {
                 Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
               });
           }
         }
       } else {
         // Dynamically select an appropriate rotation strategy through a selector.
         this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
           mode: 'autoRotate',
           range: 'ALL_ORIENTATIONS',
           preferred: 'UNSPECIFIED'
         }))
           .catch((err: BusinessError) => {
             Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
           });
       }
     }

     private onWindowSizeChange: (windowSize: window.Size) => void = () => {
       if (this.isClick) {
         return;
       }
       if (this.widthBp === WidthBreakpoint.WIDTH_SM) {
         this.isFullScreen = false
         // Dynamically select an appropriate rotation strategy through a selector.
         this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
           mode: 'autoRotate',
           range: 'ALL_ORIENTATIONS',
           preferred: 'UNSPECIFIED'
         }))
           .catch((err: BusinessError) => {
             Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
           });
       }

       if (this.widthBp === WidthBreakpoint.WIDTH_MD && this.heightBp === HeightBreakpoint.HEIGHT_SM) {
         this.isFullScreen = true;
       }
     };

     async aboutToDisappear() {
       // ...
       // Dynamically select an appropriate rotation strategy through a selector.
       this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
         mode: 'autoRotate',
         range: 'ALL_ORIENTATIONS',
         preferred: 'UNSPECIFIED'
       }))
         .catch((err: BusinessError) => {
           Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
         });
       // ...
     }

     build() {
       // ...
     }

   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L41-L275" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


   在工具类中，select方法的入参类型为OrientationConfig，根据逻辑选型分为三种子类型：自动旋转AutoRotateConfig、跟随桌面FollowDesktopConfig及固定方向FixedConfig。例如自动旋转分支，采用三层抽象的维度，需在配置中继续添加旋转范围range字段及首选方向preferred字段，以确定符合场景的窗口旋转策略。OrientationConfig类型定义如下：

   ```
   /**
    * Orientation Type (used uniformly for fixed orientation and preferred orientation of auto rotation)
    */
   export type WindowOrientationType =
     | 'UNSPECIFIED' // Unspecified (lock current orientation for fixed mode, no preferred orientation for auto rotation)
       | 'PORTRAIT'
       | 'LANDSCAPE'
       | 'PORTRAIT_INVERTED'
       | 'LANDSCAPE_INVERTED';

   /**
    * Auto Rotation Range
    */
   export type AutoRotateRange =
     | 'LANDSCAPE_ONLY' // Landscape only (including forward and reverse landscape)
       | 'PORTRAIT_ONLY' // Portrait only (including forward and reverse portrait)
       | 'ALL_ORIENTATIONS'; // All orientations (support all directions)

   // ...
   /**
    * Fixed Orientation Configuration
    */
   export interface FixedConfig {
     mode: 'fixed';
     orientation?: WindowOrientationType; // Omitted or 'UNSPECIFIED' means lock current orientation
   }

   /**
    * Auto Rotation Configuration
    */
   export interface AutoRotateConfig {
     mode: 'autoRotate';
     range: AutoRotateRange; // Rotation range
     preferred?: WindowOrientationType; // Preferred orientation (valid only when range = 'ALL_ORIENTATIONS')
   }

   /**
    * Follow Desktop Configuration
    */
   export interface FollowDesktopConfig {
     mode: 'followDesktop';
   }

   /**
    * Union type of window rotation strategy configuration
    */
   export type OrientationConfig = FixedConfig | AutoRotateConfig | FollowDesktopConfig;
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/commons/base/src/main/ets/utils/WindowOrientationHelper.ets#L27-L93" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowOrientationHelper.ets</a></div>


   上述工具类的使用示例可参考本文典型场景中的各类案例。

## 为应用配置旋转策略

为了满足灵活多变的UI交互需求，系统支持**应用级**、**窗口级**和**页面级**的窗口旋转策略配置方案，并提供**子窗口**和**悬浮窗**旋转的窗口旋转策略配置。

###应用级配置

通过在hap包的module.json5文件中配置orientation属性，可设置应用的初始窗口旋转策略，会影响整个应用的启动方向。

该字段用于配置应用启动时的窗口显示状态。若应用需以默认的横屏或竖屏方式启动，应在字段中进行相应配置。

其支持的参数可以参考module.json5配置项中[abilities标签](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#abilities标签)下orientation的[orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9)枚举值。

```
{
  "module": {
    // ...
    "abilities": [
      {
        "name": "EntryAbility",
        // ...
        "orientation": "unspecified",
        // ...
      }
    ],
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/products/default/src/main/module.json5#L2-L60" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：module.json5</a></div>


应用可根据业务需求配置默认旋转策略：

* 若应用在直板机和双折叠折叠态是竖屏应用，平板和双折叠展开态是可旋转应用，推荐配置FOLLOW\_DESKTOP为默认旋转策略。
* 若应用为竖屏应用，建议配置PORTRAIT为默认旋转策略。
* 若应用为横屏应用（如MOBA类游戏），启动时默认为横屏，存在以下两种情况：
  + 仅支持横屏时，建议配置LANDSCAPE为默认旋转策略；
  + 支持横屏和反向横屏切换时，建议配置AUTO\_ROTATION\_LANDSCAPE或AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED（是否受控制中心旋转开关控制）。
* 若应用为可旋转应用，建议配置AUTO\_ROTATION\_RESTRICTED为默认旋转策略。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/4Ub7zLBpSDS3aaSgZMJQGw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=D640C58889951F75D16643928D61E0169A290AB4159C7C5B69F91015FAF2824D)

对于需要通过控制中心进行旋转锁定控制的情况，可选择字段后方带有RESTRICTED字段的旋转策略。

该字段表示旋转行为受到控制中心按钮控制：开关打开时，不随设备方向旋转；关闭时，则跟随设备旋转。

以如下文件管理应用为例，当系统关闭旋转锁定后，应用页面会随手机旋转自动切换横竖屏，打开旋转锁定时，则不会发生旋转行为，此时需要配置为AUTO\_ROTATION\_RESTRICTED。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/N33uvfTrTFy34DaQ3Jn0KQ/zh-cn_image_0000002535997144.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=9F96D92A459514D3BC7A8DC12937680BAFADD9420E9F9464C1009A2648FE9B53 "点击放大")

###窗口级配置

它作用于整个应用窗口（window），定义该窗口的横竖屏旋转策略，并对基于Navigation组件和Router模块实现的路由跳转均生效。一旦配置，除非显式修改，否则对窗口内所有页面生效。

1. 在onWindowStageCreate()中调用window.setPreferredOrientation()方法即可设置整个应用窗口默认方向。

```
setWindowOrientation(orientation: window.Orientation): void {
  this.mainWindow.setPreferredOrientation(orientation)
    .then(() => {
      hilog.info(0x0000, 'testLog', `Succeeded in setting window orientation.`);
      // Update window orientation.
      this.mainWindowInfo.orientation = orientation;
    })
    .catch((err: BusinessError) => {
      hilog.error(0x0000, 'testLog', `Failed to set window orientation. Code: ${err.code}, message: ${err.message}`);
    });
}
```

2. 如果应用内页面的窗口旋转策略不一致，则需要执行本步骤。在页面进入时（aboutToAppear），调用window.setPreferredOrientation()定义当前页面对应的窗口旋转策略；在页面退出时（aboutToDisappear），调用window.setPreferredOrientation()恢复即将展示页面对应的窗口旋转策略。

```
@StorageLink('mainWindow') mainWindow?: window.Window = undefined;
public lastOrientation?: window.Orientation;

aboutToAppear(): void {
  if (this.mainWindow === undefined) {
    return;
  }
  this.lastOrientation = this.mainWindow!.getPreferredOrientation();
  this.mainWindow!.setPreferredOrientation(window.Orientation.LANDSCAPE);
}

aboutToDisappear(): void {
  this.mainWindow!.setPreferredOrientation(this.lastOrientation)
}
```

典型场景如一些视频类应用、图片类应用等。

视频播窗横竖屏切换

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/K804fuDGRq-fWzXS3dx2uA/zh-cn_image_0000002566916979.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=D9358F9276DB7CBCEC7965AE4DF13EFB1C75A98495F392FAC29925ED316C2EE9 "点击放大")

###页面级配置

它作用于当前显示的具体页面（NavDestination组件），仅对基于Navigation组件实现的路由跳转生效。它允许根据业务需求动态调整不同页面的窗口旋转策略。在页面路由跳转时，系统自动切换为下一个展示页面对应的窗口旋转策略。

NavDestination组件提供[preferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#preferredorientation19)属性，支持每个页面独立配置窗口旋转策略，互相不影响。页面跳转时，窗口旋转策略自动更新为下一个页面对应的preferredOrientation。页面返回时，窗口旋转策略也会自动更新为上一个页面对应的preferredOrientation。

###方案对比

| 窗口旋转策略配置方案 | 优势 | 劣势 | 推荐使用场景 |
| --- | --- | --- | --- |
| 应用级 | * 可设置应用启动的初始方向 * 应用所有页面窗口旋转策略一致时仅需配置一次 | 应用内页面窗口旋转策略不一致时，无法切换，需要配合窗口级或页面级窗口旋转策略 | * 应用需要设置启动的初始方向。 * 应用所有页面窗口旋转策略一致。 |
| 窗口级 | * 配置后同一窗口内所有页面生效 * 支持Navigation组件与Router模块实现的路由 * 版本兼容性高（API9+） | 页面窗口旋转策略不一致时，需要在页面进入及退出时设置两次窗口旋转策略。 | * 使用Router模块实现页面路由 * 应用基于API19之前的版本开发 |
| 页面级 | * 单独配置每个页面的窗口旋转策略，页面跳转时窗口旋转策略跟随自动更新 * 针对页面配置窗口旋转策略，使用更简单、更灵活 | * 版本兼容性有限（API19+） * 仅支持Navigation组件实现的页面路由 | * 应用内页面的窗口旋转策略多处不一致 * 基于Navigation模块实现页面路由 * 应用基于API19之后的版本开发 |

###应用子窗口的旋转

在应用旋转场景中，应用主窗的尺寸由系统控制，而应用子窗的尺寸和位置由应用控制。因此，建议应用开发者在有应用子窗的旋转场景中，同步调整应用子窗的尺寸和位置，避免因旋转过程中应用子窗的尺寸和位置保持不变而导致如下图所示的应用子窗显示截断问题（直板机默认的旋转策略为UNSPECIFIED，旋转锁定按钮关闭的情况下不允许应用旋转，可以通过module.json5配置文件中abilities标签的"orientation"字段（参考[abilities对象的内部结构](/docs/dev/app-dev/getting-started/dev-fundamentals/module-structure#abilities对象的内部结构)）配置应用的旋转策略为AUTO\_ROTATION，使应用跟随设备方向旋转）。

| 旋转前竖屏显示 | 旋转后横屏显示（调整前） |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/-IJW4JZlRv-P1B8eoMsjbg/zh-cn_image_0000002566756997.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=13A04F666EED9E4A87575D25EBB5F9CB1C30BE73F965781A654BBBD6ABADF968 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/9hisbWiWRpWf0hlkrZtecA/zh-cn_image_0000002535837214.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=C06569AE6705E67A34A364F568F553A943574CA998D1F606BD386D5AFEA865BC "点击放大") |

**实现方案**

系统为设备窗口尺寸变化监听、设置应用子窗尺寸和位置提供了如下接口：

1. [on('windowSizeChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onwindowsizechange7)接口用于开启窗口尺寸变化的监听，当窗口发生旋转后，会触发其中的回调。
2. [resize()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#resize9)接口用于改变当前窗口的大小，可以在窗口发生旋转后及时调整子窗的宽高。
3. [moveWindowTo()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#movewindowto9)接口用于移动窗口位置，可以在窗口发生旋转后及时调整子窗的位置。

为实现根据应用旋转方向设置应用子窗尺寸，开发者可使用on('windowSizeChange')接口监听窗口尺寸的变化，并在回调函数中通过resize()接口和moveWindowTo()接口分别调整应用子窗的尺寸和位置。

需要指出的是，开发者可以使用[setFollowParentWindowLayoutEnabled()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setfollowparentwindowlayoutenabled17)接口设置子窗或模态窗口的布局信息是否跟随主窗，如果设置为跟随主窗，那么子窗的旋转便不再需要额外适配。

```
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const SUB_WINDOW_LEFT_OFFSET: number = 50;
const SUB_WINDOW_TOP_OFFSET: number = 500;
const TAG: string = 'subWindowAdaptWhenRotate';
const DOMAIN: number = 0x0000;

@Entry
@Component
struct Index {
  public mainWindow: window.Window | undefined = undefined;
  public subWindow: window.Window | undefined = undefined;

  aboutToAppear(): void {
    // create subWindow
    this.createSubWindow();

    this.mainWindow = AppStorage.get('mainWindow');
    if (!this.mainWindow) {
      return;
    }
    this.mainWindow.on('windowSizeChange', () => {
      this.adjustSubwindowSizeAndPosition();
    })
  }

  private adjustSubwindowSizeAndPosition(): void {
    if (!this.subWindow) {
      hilog.error(DOMAIN, TAG, 'subWindow is null');
      return;
    }
    let subwindowRect: window.Rect | null = null;
    try {
      subwindowRect = this.subWindow.getWindowProperties().windowRect;
    } catch (error) {
      hilog.warn(0x000, 'testTag', `getWindowProperties failed, code: ${error.code}, message: ${error.message}`);
    }
    let newWidth: number = subwindowRect!.height;
    let newHeight: number = subwindowRect!.width;
    let newX: number = subwindowRect!.top;
    let newY: number = subwindowRect!.left;
    this.subWindow.resize(newWidth, newHeight)
      .then(() => {
        hilog.info(DOMAIN, TAG, 'Succeeded in changing the window size')
      }).catch((err: BusinessError) => {
      hilog.error(DOMAIN, TAG, `Failed to change the window size. Cause code: ${err.code}, message: ${err.message}`);
    });

    this.subWindow.moveWindowTo(newX, newY)
      .then(() => {
        hilog.info(DOMAIN, TAG, 'Succeeded in moving the window');
      }).catch((err: BusinessError) => {
      hilog.error(DOMAIN, TAG, `Failed to move the window. Cause code: ${err.code}, message: ${err.message}`);
    });

  }

  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/BestPracticeSnippets/blob/master/SubwindowAdaptWhenRotate/entry/src/main/ets/pages/Index.ets#L17-L134" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


**实现效果**

根据示例代码为不同旋转方向设置不同的应用子窗尺寸和位置的实际效果如下图所示，应用子窗的尺寸和位置在竖屏显示和横屏显示下是不同的。

| 旋转前竖屏显示 | 旋转后横屏显示 |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/JJ22aviJRE6uzBnO4DO0tg/zh-cn_image_0000002535997148.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=868A3D2344AAE07AEE1734927E89C83BD097EDBA0098B100854F07844FE9B034 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/BiQUrXfLSq-21g8yLvaAUQ/zh-cn_image_0000002566916985.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=06963995E7B23C6C75F1484D6DF9F51AC7FE6E8570BE08A2443C97F32FAFAC9D "点击放大") |

###悬浮窗的旋转

悬浮窗默认是竖向的，但是对于横向游戏和视频应用，横向的悬浮窗体验会更好。开发者可以通过在module.json5配置文件中abilities标签下的preferMultiWindowOrientation属性增加“landscape”或者“landscape\_auto”，配合API以声明应用支持横向悬浮窗或上下分屏模式。

```
{
  "module": {
    // ...
    "abilities": [
      {
        "name": "EntryAbility",
        // ...
        "preferMultiWindowOrientation": "landscape_auto",
        // ...
      }
    ],
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/BestPracticeSnippets/blob/master/ArkUI/orientationDevelopment/entry/src/main/configlandscapeauto/module.json5#L2-L63" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：module.json5</a></div>


该场景下多窗布局动态可变为横向，需要配合API（[enableLandscapeMultiWindow()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#enablelandscapemultiwindow12)/ [disableLandscapeMultiWindow()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#disablelandscapemultiwindow12)）使用。

```
private windowClass = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()

aboutToAppear(): void {
  this.windowClass.enableLandscapeMultiWindow();
}

aboutToDisappear(): void {
  this.windowClass.disableLandscapeMultiWindow();
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/BestPracticeSnippets/blob/master/ArkUI/orientationDevelopment/entry/src/main/ets/pages/ScreenRotationB.ets#L6-L14" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ScreenRotationB.ets</a></div>


例如：视频或者游戏类应用在横屏模式下开启悬浮窗后，页面没有适配横屏，导致内容显示不全或者观看体验不好。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/t8noZyzbQuCU8fN-ECtWpw/zh-cn_image_0000002566757003.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=3E9CA9FB715B5C19C9F31C672427C4301B1E05CED83F7FECDA2FA1518A34CFCD "点击放大")

优化后效果如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/xpdI0Qt-RHKmOT9wampK6A/zh-cn_image_0000002535837220.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=CBBAB3E15EB79B499FC935C45A4E7EE23A1774DCD91A91674BE7C206AE7E9E9B "点击放大")

## 为多设备配置旋转策略

随着设备的多样化，应用某些页面需要根据设备类型配置不同的窗口旋转策略以达到极致的用户体验，为了开发者能快速适配不同设备，我们提供了多设备的窗口旋转策略。

###背景

1. 不同设备对旋转策略的使用约束不同

   下述特定场景下，由于产品定义与使用场景的不同，开发者自定义的窗口旋转策略可能会显著降低用户体验，因此系统配置的窗口旋转策略优先级会高于应用配置。此时，应用实际显示的窗口方向将由系统统一调度，开发者自定义的窗口旋转策略将被覆盖而不生效。

   | 设备场景 | Pura X折叠态 | 电脑 | 智慧屏 | 智能穿戴 |
   | --- | --- | --- | --- | --- |
   | 特定显示方向 | 跟随屏幕方向显示 | | | |
   | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/O6fQ-sI9Q0-74uv-RY3tdA/zh-cn_image_0000002535997156.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=69301D9B09A20165BA7AE8E7BB54B4178783BC06A9E8F175DF564714E39B5D69 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/zdElf3pjTm6zS5AK0UK28A/zh-cn_image_0000002566916993.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=E52DF1B8C2B0856717A321D9416D47A845F5560B661A3FA2AAC33DA522AD51B1 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/TvhJoZpsQCKaPLpA7-kSwA/zh-cn_image_0000002566757011.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=785B5B891C15EA2A2488A9B0D7981E8E4496DBBD0681A58FF775C7BEF6ACCC6F "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/i2uHanNfTuib8MTdVXhYjQ/zh-cn_image_0000002535837226.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=4D1B3B6DB374E29B2AB275D851AB9943645533B86D7DD3AF64617279BD9F5131 "点击放大") |
2. 不同交互场景对旋转策略的使用约束不同

   例如下述场景中，自由多窗不支持竖屏模式，悬浮窗默认是竖向的，但是但是对于横向游戏和视频应用，横向的悬浮窗体验会更好。

   | 使用场景 | 分屏 | 全景多窗 | 自由多窗 | 全局批注 | 任务列表视图 |
   | --- | --- | --- | --- | --- | --- |
   | 特定显示方向 | 跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且受控制中心的旋转开关控制 | | 跟随屏幕方向显示 | 手写笔点击全局批注后，锁定当前窗口方向 | 锁定当前窗口方向 |
   | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/vko5wse-THmxLmgVZpEvAg/zh-cn_image_0000002535997160.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=AB78673E1A5AB6C028D503DF5C5C7BDE9B922B74527C30D7ACCF60C183889DC1 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/Tnc307a_SG2moMrmKRSJ5A/zh-cn_image_0000002566916995.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=DC507C79381BC3D63ED4D04859A597CC735673D7ABED0CB52A88F8AD3986319E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/hIJvyZW5TTiaRzJEDsC6yQ/zh-cn_image_0000002566757015.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=F9DC6925F7B5EA32AFA452645619DC601B5082A3D5092AFC629010BD000479F9 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/596jbbDiRsOoBMzBlPlifg/zh-cn_image_0000002535837228.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=B09BBFD58B94FA349992CE0DCCACB02D4098366B021BF307D3EF2D2062A09720 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/x215HHRORyCVTx3EiNx1ZQ/zh-cn_image_0000002535997164.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=65B7ED3A0199288EA9DCB48F470B53CC859C5F2C780C23CB44B78262A2732097 "点击放大") |
3. 相同的页面，开发者希望在不同的设备上，应用不同的旋转策略。例如：视频详情页应用在直板机上默认只能竖向，而在折叠屏展开态则希望能四个方向自由旋转。
4. 由于设备的形态差异，应用在不同的设备上也希望有不同的启动方向。

###跟随桌面的旋转策略

当前HarmonyOS主流设备桌面的横竖屏旋转策略如下表所示：

| 产品类型 | 手机 | 阔折（Pura X系列） | 大阔折（Pura X MAX系列） | 双折叠（Mate X系列） | 三折叠（Mate XT系列） | 平板 | 电脑 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 是否支持横竖屏旋转 | 不支持 | 内屏：不支持  外屏：不支持 | 内屏：支持  外屏：不支持 | 内屏：支持  外屏：不支持 | F态（单屏显示）：不支持  M态（双屏显示）：支持  G态（三屏显示）：支持 | 支持 | 应用无法配置窗口旋转策略 |

对于某些应用，在直板手机上默认采用竖屏显示策略，但在平板或折叠屏设备上，需支持自动旋转。若在Ability的生命周期中调用setPreferredOrientation，可能会导致应用启动时出现旋转动画。因此，可通过修改module.json5配置文件中的orientation属性，设置为FOLLOW\_DESKTOP，以跟随桌面的旋转模式。

###实现响应式旋转策略

在设备切换形态时，有时应用对于相同页面希望采用不同的旋转策略，这时需要通过监听设备的窗口尺寸变化配合系统断点实现响应式旋转策略，至于断点与设备的映射关系，请先了解”[响应式布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout)“。

1.在应用EntryAbility的onWindowStageCreate生命周期中，通过on('windowSizeChange')方法监听窗口尺寸变化，在其回调中通过getWindowWidthBreakpoint()及getWindowHeightBreakpoint()实时获取并存储横竖断点变化信息，配合各个页面实现响应式旋转策略。

```
export default class EntryAbility extends UIAbility {
  uiContext?: UIContext;
  onWindowSizeChange: (windowSize: window.Size) => void = () => {
    let widthBp: WidthBreakpoint = this.uiContext!.getWindowWidthBreakpoint();
    AppStorage.setOrCreate(CommonConstants.WIDTH_BREAK_POINT, widthBp);
    let heightBp: HeightBreakpoint = this.uiContext!.getWindowHeightBreakpoint();
    AppStorage.setOrCreate(CommonConstants.HEIGHT_BREAK_POINT, heightBp);
  }

  // ...

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // ...

    windowStage.loadContent('pages/Index', (err) => {
      // ...

      windowStage.getMainWindow().then((data: window.Window) => {
        try {
          this.uiContext = data.getUIContext();
        } catch (err) {
          Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
        }

        let widthBp: WidthBreakpoint = this.uiContext!.getWindowWidthBreakpoint();
        AppStorage.setOrCreate(CommonConstants.WIDTH_BREAK_POINT, widthBp);

        let heightBp: HeightBreakpoint = this.uiContext!.getWindowHeightBreakpoint();
        AppStorage.setOrCreate(CommonConstants.HEIGHT_BREAK_POINT, heightBp);

        data.on('windowSizeChange', this.onWindowSizeChange);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', `Error occured, error code: ${err.code}, error message: ${err.message}`);
      })

    });
  }

  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/products/default/src/main/ets/entryability/EntryAbility.ets#L25-L96" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：EntryAbility.ets</a></div>


2.在需要实现响应式旋转策略页面的aboutToAppear生命周期中，通过on('windowSizeChange')方法监听窗口尺寸变化，在其回调中实时获取设备的窗口尺寸变化信息。

```
@Component
export struct VideoDetail {
  windowObj: window.Window | undefined = undefined;
  // ...

  aboutToAppear() {
    try {
      this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
    } catch (err) {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    }

    // ...
    this.windowObj?.on('windowSizeChange', this.onWindowSizeChange);

    // ...
  }
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L38-L237" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


并在aboutToDisappear中取消监听：

```
async aboutToDisappear() {
  // ...
  this.windowObj?.off('windowSizeChange')
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L133-L144" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


3.在页面windowSizeChange回调方法中，配合全局横竖断点变化，保证页面切换时不同设备上配置合适的窗口旋转策略。

```
@Component
export struct VideoDetail {
  // ...
  @StorageLink(CommonConstants.WIDTH_BREAK_POINT) widthBp: WidthBreakpoint = WidthBreakpoint.WIDTH_SM;
  @StorageLink(CommonConstants.HEIGHT_BREAK_POINT) heightBp: HeightBreakpoint = HeightBreakpoint.HEIGHT_SM;
  // ...

  // ...

  private onWindowSizeChange: (windowSize: window.Size) => void = () => {
    if (this.isClick) {
      return;
    }
    if (this.widthBp === WidthBreakpoint.WIDTH_SM) {
      this.isFullScreen = false
      // Dynamically select an appropriate rotation strategy through a selector.
      this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
        mode: 'autoRotate',
        range: 'ALL_ORIENTATIONS',
        preferred: 'UNSPECIFIED'
      }))
        .catch((err: BusinessError) => {
          Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
        });
    }

    if (this.widthBp === WidthBreakpoint.WIDTH_MD && this.heightBp === HeightBreakpoint.HEIGHT_SM) {
      this.isFullScreen = true;
    }
  };

  // ...

  build() {
    // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L40-L279" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


在折叠屏设备上，通过display.on('foldStatusChange', callback())方法监听折叠的状态，并通过@StorageLink('isHalfFolded')保存并实时更新全局变量。

```
@Component
export struct VideoPlayer {
  // ...
  @StorageLink('isHalfFolded') isHalfFolded: boolean = false;
  // ...
  private onFoldStatusChange: Callback<display.FoldStatus> = (data: display.FoldStatus) => {
    this.foldStatus = data;
    if (canIUse('SystemCapability.Window.SessionManager')) {
      if (data === display.FoldStatus.FOLD_STATUS_EXPANDED || data === display.FoldStatus.FOLD_STATUS_FOLDED ||
        data === display.FoldStatus.FOLD_STATUS_EXPANDED_WITH_SECOND_EXPANDED ||
        data === display.FoldStatus.FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED) {
        let widthBp: WidthBreakpoint = this.getUIContext().getWindowWidthBreakpoint();
        AppStorage.setOrCreate(CommonConstants.WIDTH_BREAK_POINT, widthBp);
        let heightBp: HeightBreakpoint = this.getUIContext().getWindowHeightBreakpoint();
        AppStorage.setOrCreate(CommonConstants.HEIGHT_BREAK_POINT, heightBp);
      }
      if (data === display.FoldStatus.FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED && this.isFullScreen) {
        this.windowObj?.setPreferredOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE_RESTRICTED)
          .catch((err: BusinessError) => {
            Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
          });
      } else {
        this.windowObj?.setPreferredOrientation(window.Orientation.AUTO_ROTATION_UNSPECIFIED)
          .catch((err: BusinessError) => {
            Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
          });
      }
    }
  };

  aboutToAppear(): void {
    // ...
    if (canIUse('SystemCapability.Window.SessionManager')) {
      try {
        display.on('foldStatusChange', this.onFoldStatusChange);
      } catch (error) {
        let err = error as BusinessError;
        Logger.error('VideoPlayer', `onFoldStatusChange failed, code = ${err.code}, message = ${err.message}`);
      }
    }
  }
  // ...

  build() {
    // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/components/VideoPlayer.ets#L23-L334" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoPlayer.ets</a></div>


## 优化横竖屏切换性能

在窗口旋转时，屏幕尺寸变化会导致界面重新布局。为提高横竖屏切换的流畅度，需进行性能优化。

**使用自定义组件冻结**

旋转时，由于整窗一起旋转，会导致页面重新布局，但是实际上需要展示的可能只有播放内容，对于其他的组件可以使用自定义组件冻结功能，避免由于旋转导致的UI更新操作。例如视频播放底下的详情内容，可能是单独的组件。

```
@Component({ freezeWhenInactive: true })
  // Added custom component freezing function
struct VideoDetailView {
  build() {
    Scroll() {
      // ...
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/LandscapePortraitToggle/blob/master/entry/src/main/ets/transitioninpage/VideoPlayView.ets#L297-L310" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoPlayView.ets</a></div>


**对图片使用autoResize**

如果当前旋转页面存在一些图片，未经合理的裁剪，图片过大，可以对图片设置autoResize属性，使图片裁剪到合适的大小进行绘制。该属性是将组件显示区域作为绘制的图源尺寸，以减少内存占用。例如原图是1920px\*1080px，但是显示区域是200vp\*100vp，则在解码时会降低采样编码到200vp\*100vp尺寸。

```
@Builder
function ImageItem(imageSrc: ResourceStr) {
  Stack({}) {
    Image(imageSrc)
      .width('100%')
      .height('100%')
      .autoResize(true)// Use auto_resize attributes on images
      .borderRadius(8)
      .objectFit(ImageFit.Fill)
      .backgroundColor('#1AFFFFFF')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/LandscapePortraitToggle/blob/master/entry/src/main/ets/transitioninpage/VideoPlayView.ets#L314-L326" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoPlayView.ets</a></div>


**排查一些耗时操作**

排查当前页面是否存在冗余的OnAreaChange事件、blur模糊属性或linearGradient属性，这些属性较为耗时，应根据是否必须使用来决定是否进行优化。

## 典型场景

以窗口旋转策略实现的五个高频场景为载体，通过窗口级配置实现多设备的窗口方向变化。

###应用首页案例

应用首页通常支持横屏与竖屏显示。但是在类直板机上横屏的用户体验不好，所以直板机始终竖屏显示；在非类直板机（如平板、双折叠展开态、三折叠M/G态）支持竖屏与横屏展示。体验标准如下：

| 体验标准 | 仅竖屏 | 支持自由旋转，受开关控制 |
| --- | --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F态 | 双折叠展开态、三折叠M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/xAloEhUORIuaPTlrJC_ifw/zh-cn_image_0000002566916999.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=2D46B4518B87A9740ABFF597C616DF58B3C9F27EFD2F8023D24B73A0B1AAC119 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/vWqHeGEMSaGXPhX1AIopHA/zh-cn_image_0000002566757017.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=6B72B0CC34EDA7282DE59E0C620EC2AF660551BCBFCEED4F167612A036A5C022 "点击放大") |

对于市场上大多数应用的首页用户行为及体验，推荐使用FOLLOW\_DESKTOP策略，以满足应用在不同设备上的窗口旋转策略需求。同时，FOLLOW\_DESKTOP支持在同设备的折叠状态切换时，窗口旋转策略自动更新。例如，三折叠F态仅支持竖屏，切换至三折叠M态时，自动变为自由旋转，并受控制中心旋转开关的控制。

首先，需对应用启动时的旋转策略进行设置，具体可参考[配置module.json5文件中的orientation字段](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development#section1188593118171)。以实现多开发为例，为满足直板机和平板设备的不同策略，设置为follow\_desktop，此字段主要解决不同设备上默认旋转策略差异的问题。

在具体需要实现横竖屏切换的页面上，采用window窗口提供的设置窗口方向的能力，通过[setPreferredOrientation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)将窗口显示的方向修改为横屏或竖屏的状态。

具体如下：通过getContext获取对应的UIAbilityContext，并通过context获取对应的windowStage实例，然后通过windowStage.getMainWindowSync同步方法拿到对应的窗口实例win，然后调用[setPreferredOrientation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)方法设置窗口方向。

```
@Component
export struct Home {
  windowObj: window.Window | undefined = undefined;
  // ...

  aboutToAppear(): void {
    this.tabBarsInfo.setTabList(TabBarsInfo);
    try {
      this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
    } catch (err) {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    }

    // Use the WindowOrientationHelper tool to directly obtain the rotation strategy enumeration through chained calls.
    this.windowObj?.setPreferredOrientation(WindowOrientationHelper.presets.FOLLOW_DESKTOP)
      .catch((err: BusinessError) => {
        Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
      });
    // ...
  }

  // ...

  build() {
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/home/src/main/ets/views/Home.ets#L28-L204" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Home.ets</a></div>


###游戏应用案例

游戏应用通常仅支持竖屏或横屏显示。例如消除类游戏仅支持竖屏显示；MOBA类游戏仅支持横屏显示。体验标准如下：

| 体验标准 | 竖屏游戏仅支持竖屏 | 横屏游戏支持横屏旋转，受开关控制 |
| --- | --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F/M/G态、平板 | 直板机、双折叠折叠态、三折叠F/M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/uPbd1BYURc6j9yyTzWf0rQ/zh-cn_image_0000002535837230.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=41DD681361B7C13B752AB2B4AEF13410548AA183E5AC51486803211ECD3180B9 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/Nr9LtDg5RTi2-Raxu6r5WA/zh-cn_image_0000002535997166.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=09BDD2798F9ACB1CBEAF285FA698EF194B6BBCB5A5DD7C2E0652B61C4C784A10 "点击放大") |

对于游戏类应用，无论横竖屏游戏，均为固定方式或仅支持一个方向（例竖屏及反向竖屏）的旋转切换，此类应用均不需要在应用内进行开关控制，所以只需要在module.json5配置文件中进行相应的配置即可。一般有以下几种情况：

**默认竖屏方向**

如果该应用默认为仅竖屏状态，那么则需要在module.json5中的“orientation”字段进行配置为portrait。如果希望游戏同时支持反向竖屏显示，推荐设置为auto\_rotation\_portrait\_restricted。

**默认横屏方向**

推荐横屏游戏使用auto\_rotation\_landscape\_restricted策略，所有设备上初始窗口方向为横屏或反向横屏，支持横屏旋转，且受控制中心的旋转开关控制。同时，在同一设备切换折叠状态时，保持横屏或反向横屏显示。

###图库应用案例

图库应用通常在所有设备上支持竖屏或横屏显示。但是在直板机上反向竖屏的用户体验不好，所以直板机只能旋转至竖屏、横屏、反向横屏三个方向，受开关控制；在非类直板机（如平板、双折叠展开态、三折叠M/G态）保持当前窗口方向，支持自由旋转，且受开关控制。体验标准如下：

| 体验标准 | 三向旋转（竖屏/横屏/反向横屏），受开关控制 | 自由旋转，受开关控制 |
| --- | --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F态 | 双折叠展开态、三折叠M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/SIVXQyI_T1C6v21lwkgGmw/zh-cn_image_0000002566917001.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=59004269B68F298AEF451421A5929B8E316CC985A6DB6EC9F1D56FA3A58B172D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/Qx_2W6kCSUu5CG01jPo9Zw/zh-cn_image_0000002566757083.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=E70F0E2D2416DC6E592E3B9087CE8ECF3E9C7909462AD0063783AE0E2A0592F4 "点击放大") |

推荐图库应用案例在module.json5中的“orientation”字段或页面中通过[setPreferredOrientation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)使用AUTO\_ROTATION\_UNSPECIFIED策略。

###个股详情页 & 股票K线图页案例

个股详情页通常支持横屏与竖屏显示。但是在类直板机上横屏的用户体验不好，所以直板机始终竖屏显示，不支持旋转；在非类直板机（如平板、双折叠展开态、三折叠M/G态）保持当前窗口方向，支持自由旋转，且受控制中心的旋转开关控制。体验标准如下：

| 体验标准 | 仅竖屏 | 支持自由旋转，受开关控制 |
| --- | --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F态 | 双折叠展开态、三折叠M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/u5SO5qrdS96wwGFfd-6xqA/zh-cn_image_0000002535837318.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=0FE73EA089C40238E0FB64D6ACC23C581EFB2ED2938A912EC2663398E2CBEB87 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/2QDY67xnS8S5UGVA5pE2-w/zh-cn_image_0000002535997254.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=49CB87CC3C9AE6FAE490A47F7F080B035D0A3BD260C72CB25704C54F48703628 "点击放大") |

在个股详情页面上，在aboutToAppear生命周期中采用window窗口提供的设置窗口方向的能力，通过[setPreferredOrientation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)设置窗口旋转策略为FOLLOW\_DESKTOP，在aboutToDisappear中恢复上级页面的窗口旋转策略。

```
@Component
export struct StockDetail {
  windowObj: window.Window | undefined = undefined;
  // ...

  aboutToAppear(): void {
    try {
      this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
    } catch (err) {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    }

    this.windowObj?.setPreferredOrientation(window.Orientation.FOLLOW_DESKTOP)
      .catch((err: BusinessError) => {
        Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
      });
  }

  aboutToDisappear() {
    this.windowObj?.setPreferredOrientation(window.Orientation.UNSPECIFIED)
      .catch((err: BusinessError) => {
        Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
      });
  }

  build() {
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/stock/src/main/ets/views/StockDetail.ets#L31-L324" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：StockDetail.ets</a></div>


股票K线图页通常仅横屏显示，支持横屏旋转，且受控制中心的旋转开关控制。体验标准如下：

| 体验标准 | 横屏旋转，受开关控制 |
| --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F/M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/kk85giamSRqvTv8NkhtNmw/zh-cn_image_0000002566917091.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=AEEBA124094481B5E3630FD5ABD8B019EA3B00387CDA80F575B433F456F26FE4 "点击放大") |

**示例代码**

在K线图页的aboutToAppear()和aboutToDisappear()生命周期中调用window.setPreferredOrientation()，设置K线图页显示时窗口旋转策略为AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED，K线图页返回时恢复窗口旋转策略为FOLLOW\_DESKTOP。

```
aboutToAppear(): void {
  try {
    this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
  } catch (err) {
    Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
  }

  this.windowObj?.setPreferredOrientation(WindowOrientationHelper.autoRotate("LANDSCAPE_ONLY"))
    .catch((err: BusinessError) => {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    });
}

aboutToDisappear(): void {
  this.windowObj?.setPreferredOrientation(WindowOrientationHelper.followDesktop())
    .catch((err: BusinessError) => {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    });
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/stock/src/main/ets/views/ABAWindow.ets#L40-L58" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ABAWindow.ets</a></div>


###视频详情页 & 全屏播放页案例

视频详情页通常支持横屏与竖屏显示。但是在直板机上反向竖屏的用户体验不好，所以直板机只能旋转至竖屏、横屏、反向横屏三个方向，且横屏时自动显示全屏播放页，竖屏时自动显示视频详情页；在非类直板机（如平板、双折叠展开态、三折叠M/G态）保持当前窗口方向，支持自由旋转，且受开关控制。体验标准如下：

| 体验标准 | 三方向旋转（竖屏/横屏/反向横屏），受开关控制 | 自由旋转，受开关控制 |
| --- | --- | --- |
| 支持设备形态 | 直板机、双折叠折叠态、三折叠F态 | 双折叠展开态、三折叠M/G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/SznrxAWfTc-zfp-ygV5MXA/zh-cn_image_0000002566757107.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=AEAE05FEA6701794493E9BAA4FE6FA23336215C9F469240DAC39E29C05566756 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/TL1NrfsSQOa3gsBxJ0Epyg/zh-cn_image_0000002535837326.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=4DE9F6F38F8CC90CE2DA062B6B2ABE608F71693D3259BF05C002B0314C6C8764 "点击放大") |

全屏播放页仅横屏显示，支持横屏旋转，并受控制中心旋转开关控制。在类直板机上，用户点击全屏按钮进入全屏播放页时，仅能旋转至横屏和反向横屏两个方向；若开启旋转开关，从横屏或反向横屏进入全屏播放页时，支持旋转至竖屏、横屏、反向横屏三个方向，并在旋转至竖屏时切换至视频详情页。在双折叠展开态（接近正方形）下，可自由旋转至四个方向，且受开关控制。体验标准如下：

| 体验标准 | 横屏旋转，受开关控制 | 自由旋转，受开关控制 | 横屏旋转，受开关控制 |
| --- | --- | --- | --- |
| 支持设备形态 | 类直板机 | 双折叠展开态、三折叠M | 三折叠G态、平板 |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/9roSrQtLSXigUQjfPI1Hfw/zh-cn_image_0000002535997264.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=38B003B4F8AB562903D59F86A6AD68D243F36DF9B27494442923E59A57BF2379 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/j0GskYVnR_adiFSnAIs7zg/zh-cn_image_0000002566917097.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=5F76023122CF40D9D553D336CA21B8556923B8B5D90A060F445C46D6187A69A5 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/9eDqeS-6RWyKsaKAi9vLag/zh-cn_image_0000002566757121.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=170020AA003DF24708F7EFB15AE18545649EBB0EFC5C6EEE937294480169CFE1 "点击放大") |

对于视频类应用，在具体需要实现横竖屏切换的页面上，例如视频播放页面支持横屏，但是首页的内容是支持仅竖屏的，那么就需要在进入对应的页面时，采用window窗口提供的设置窗口方向的能力，通过[setPreferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)将窗口显示的方向修改为横屏、竖屏的状态。应用的默认旋转策略和如何通过[setPreferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)方法设置窗口方向可参考首页案例代码。

以视频播放为例，不仅可以通过系统控制横竖屏，也支持用户在系统锁定旋转的情况下，手动设置横屏状态，即需要满足以下条件：

1. **应用跟随传感器旋转。**
2. **受到控制中心的旋转锁定按钮控制。**
3. **支持用户在应用页面中临时调用设置方向的能力，例如点击全屏按钮进行切换。**

要实现上述效果，可通过窗口的 orientation 属性设置枚举类型来实现旋转功能。为支持临时方向设置，当用户点击全屏按钮时需手动触发横竖屏切换。若旋转锁定已关闭，窗口应跟随传感器旋转。因此推荐视频详情页采用 AUTO\_ROTATION\_UNSPECIFIED 策略，三折叠展开态及平板全屏播放页采用 AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED 策略，以实现临时调用旋转并支持后续传感器跟随。

在视频详情页中，设置窗口方向为AUTO\_ROTATION\_UNSPECIFIED：

```
@Component
export struct VideoDetail {
  windowObj: window.Window | undefined = undefined;
  // ...

  aboutToAppear() {
    try {
      this.windowObj = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync()
    } catch (err) {
      Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
    }

    // ...

    // Dynamically select an appropriate rotation strategy through a selector.
    this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
      mode: 'autoRotate',
      range: 'ALL_ORIENTATIONS',
      preferred: 'UNSPECIFIED'
    }))
      .catch((err: BusinessError) => {
        Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
      });
  }

  // ...

  build() {
    // ...
  }

}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L38-L277" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


在aboutToAppear()生命周期中添加窗口尺寸变化的监听方法on('windowSizeChange', callback)，当窗口尺寸变化时，通过窗口断点判断当前设备的横竖屏状态，切换全屏状态或更新窗口旋转策略；

监听视频详情页的全屏播放状态，在用户点击全屏播放按钮时，在回调方法onFullScreenChange()中判断当前设备的横竖屏状态，更新窗口旋转策略，并在用户返回视频详情页时恢复视频详情页的窗口旋转策略。

```
@Component
export struct VideoDetail {
  windowObj: window.Window | undefined = undefined;
  @StorageLink('isFullScreen') @Watch('onFullScreenChange') isFullScreen: boolean = false;
  // ...

  aboutToAppear() {
    // ...
    this.windowObj?.on('windowSizeChange', this.onWindowSizeChange);

    // ...
  }

  onFullScreenChange(): void {
    if (this.isFullScreen) {
      if (this.isClick) {
        if (this.widthBp === WidthBreakpoint.WIDTH_SM || this.widthBp === WidthBreakpoint.WIDTH_LG ||
          this.heightBp === HeightBreakpoint.HEIGHT_LG) {
          // Dynamically select an appropriate rotation strategy through a selector.
          this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
            mode: 'autoRotate',
            range: 'LANDSCAPE_ONLY'
          }))
            .catch((err: BusinessError) => {
              Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
            });
        }
      }
    } else {
      // Dynamically select an appropriate rotation strategy through a selector.
      this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
        mode: 'autoRotate',
        range: 'ALL_ORIENTATIONS',
        preferred: 'UNSPECIFIED'
      }))
        .catch((err: BusinessError) => {
          Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
        });
    }
  }

  private onWindowSizeChange: (windowSize: window.Size) => void = () => {
    if (this.isClick) {
      return;
    }
    if (this.widthBp === WidthBreakpoint.WIDTH_SM) {
      this.isFullScreen = false
      // Dynamically select an appropriate rotation strategy through a selector.
      this.windowObj?.setPreferredOrientation(WindowOrientationHelper.select({
        mode: 'autoRotate',
        range: 'ALL_ORIENTATIONS',
        preferred: 'UNSPECIFIED'
      }))
        .catch((err: BusinessError) => {
          Logger.error(`Invoke set preferred orientation failed, code is ${err.code}, message is ${err.message}`)
        });
    }

    if (this.widthBp === WidthBreakpoint.WIDTH_MD && this.heightBp === HeightBreakpoint.HEIGHT_SM) {
      this.isFullScreen = true;
    }
  };

  // ...

  build() {
    // ...
  }

}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/WindowOrientation/blob/master/features/video/src/main/ets/views/VideoDetail.ets#L37-L276" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoDetail.ets</a></div>


## 常见问题

###display与window的区别

* 屏幕（[@ohos.display (屏幕属性)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display)）指物理或逻辑的显示设备，是显示内容的整体区域。例如：
  + 物理屏幕：显示器、手机屏幕、投影仪等硬件设备。
  + 逻辑屏幕：操作系统虚拟的多屏幕环境（如扩展桌面）。
* 窗口（window）是运行在屏幕上的一个可交互的图形界面区域，属于软件层面。例如：
  + 应用程序窗口（如浏览器、文件夹窗口）。
  + 对话框、工具栏等子窗口。

###display.rotation的定义

[Display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#display)的属性rotation表示显示设备的屏幕顺时针旋转角度。使用场景：适用于和硬件设备角度强关联的场景，如相机预览角度补偿。

rotation的取值有4种，分别对应下图所示的4个方向（以直板机为例）。如果需要更精准的角度信息，则需要配合设备sensor获取。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/fXCKHoGtQae5tZbyGGZxEg/zh-cn_image_0000002535837336.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=BCF476FA9101883B302E9D18576D46805E7DFE6659D618FA280E6BE2620CEF1D "点击放大")

| 值 | 含义 |
| --- | --- |
| 0 | 显示设备屏幕顺时针旋转为0°。 |
| 1 | 显示设备屏幕顺时针旋转为90°。 |
| 2 | 显示设备屏幕顺时针旋转为180°。 |
| 3 | 显示设备屏幕顺时针旋转为270°。 |

###display.Orientation与window.Orientation的区别

* display的[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#orientation10)表示屏幕当前横竖显示方向，屏幕的横竖显示方向只能获取，不能设置，客观体现了当前屏幕的显示状态。
* window.Orientation表示窗口旋转策略，窗口旋转策略可以由开发者设置，系统会根据开发者的预设策略进行相应的旋转。

对于开发者而言，控制应用的显示方向应该通过设置window.Orientation实现，详情请参考[了解窗口旋转策略](#section7778165616124)。

###display.Orientation与display.rotation的关系

display.Orientation 为屏幕当前的朝向状态，display.rotation 为屏幕相对自然方向的物理旋转角度。display.Orientation 为和 display.rotation 均为只读属性，且用于描述屏幕当前旋转状态，但二者定义逻辑不同，在各类设备形态下不存在固定对应关系，开发过程中不可相互替代。若混用接口，在折叠屏等多形态设备适配场景中极易引发兼容性问题。以三折叠设备为例：当 display.rotation 取值为 0° 时，display.Orientation 既可能为竖屏状态，也可能为反向横屏状态。

###window.getLastWindow的方式获取窗口出现延迟

1. 由于getLastWindow底层原因，需要经过查找获取实例，一定程度上会有性能损耗，可能会出现已经发生横屏或者竖屏切换的情况下，状态栏还没切换的情况。
2. 使用windowStage.getMainWindowSync的同步方法获取窗口实例。

```
onWindowStageCreate(windowStage: window.WindowStage): void {
  // ...
  try {
    this.windowUtil = new WindowUtil(windowStage.getMainWindowSync());
  } catch (error) {
    let err = error as BusinessError;
    hilog.error(0x0000, 'TestLog', `Failed to get main window. Code: ${err.code}, message: ${err.message}`);
  }
  AppStorage.setOrCreate('windowUtil', this.windowUtil);

  windowStage.loadContent('pages/Index', (err) => {
    // ...
    this.windowUtil!.setUIContext();
    this.windowUtil!.setImmersiveType(ImmersiveType.IMMERSIVE);
    this.windowUtil!.updateWindowInfo();
  });
}
```

###竖屏时进入任务中心，进入横屏的应用，在onPageShow时获取的display信息不符合预期

目前display接口规则还不够清晰，建议使用window的getWindowProperties()接口处理。

###如何获取屏幕的宽度、高度、分辨率和横竖屏等信息

引入屏幕属性模块，可以通过调用[display.getDefaultDisplaySync()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displaygetdefaultdisplaysync9)方法获取display对象后，从而获取到屏幕的宽度、高度、分辨率和横竖屏等信息。

###如何通过日志查看应用当前设置的窗口旋转策略

在多模块多团队共同开发过程中，页面窗口旋转策略的设置可能导致预期之外的窗口旋转问题。开发者需通过查询日志的方式自行排查是否设定了非预期的窗口旋转策略。查询方法如下：

1. 连接并推包到当前设备。
2. 打开Log页面，依次在筛选框中选择“当前的连接设备”、“No filters”、“当前的调试应用”、“Debug”或“Info”，最后在关键字栏填写“SetRequestedOrientation”。
3. 操作问题页面后，在日志中查看系统日志，找到应用包名一行的日志，lastReqOrientation表示应用最后的窗口旋转策略，target表示目标窗口旋转策略，后面的数字可参考下方对照表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/peIjG1MEQbeRHhPnhUDhSQ/zh-cn_image_0000002593796295.png?HW-CC-KV=V1&HW-CC-Date=20260606T074234Z&HW-CC-Expire=86400&HW-CC-Sign=F3E999A1E28935F8992C8819EBDFB740C87F29D59A2CF8DDF4BBEC29503B76F0)

日志中查看窗口方向对照表

| window.orientation | target |
| --- | --- |
| UNSPECIFIED | 0 |
| PORTRAIT | 1 |
| LANDSCAPE | 2 |
| PORTRAIT\_INVERTED | 3 |
| LANDSCAPE\_INVERTED | 4 |
| AUTO\_ROTATION | 5 |
| AUTO\_ROTATION\_PORTRAIT | 6 |
| AUTO\_ROTATION\_LANDSCAPE | 7 |
| AUTO\_ROTATION\_RESTRICTED | 8 |
| AUTO\_ROTATION\_PORTRAIT\_RESTRICTED | 9 |
| AUTO\_ROTATION\_LANDSCAPE\_RESTRICTED | 10 |
| LOCKED | 11 |
| FOLLOW\_RECENT | 12 |
| AUTO\_ROTATION\_UNSPECIFIED | 13 |
| USER\_ROTATION\_PORTRAIT | 14 |
| USER\_ROTATION\_LANDSCAPE | 15 |
| USER\_ROTATION\_PORTRAIT\_INVERTED | 16 |
| USER\_ROTATION\_LANDSCAPE\_INVERTED | 17 |
| FOLLOW\_DESKTOP | 18 |

## 示例代码

* [窗口方向](https://gitcode.com/HarmonyOS_Samples/WindowOrientation)
