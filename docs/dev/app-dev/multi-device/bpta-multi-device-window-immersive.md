---
title: "窗口沉浸式"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/bpta-multi-device-window-immersive
format: md
upstream_id: dev/app-dev/multi-device/bpta-multi-device-window-immersive
last_sync: 2026-06-07
sync_hash: f15637d2
---
# 窗口沉浸式

## 概述

沉浸式模式是指通过减少无关元素的干扰，使应用界面更加专注于内容呈现，以提升用户体验的设计模式。典型应用的全屏窗口，其UI元素包括[状态栏](/docs/design/system-features/features/status-bar)、应用界面和底部[导航条](/docs/design/system-features/features/navigation-bar)。其中，状态栏和导航条在沉浸式布局下称为避让区，避让区之外的区域称为安全区（如下图）。沉浸式页面开发通常通过将应用页面延伸至状态栏和导航条，达到以下目的：

* 视觉统一：应用页面与避让区（状态栏、导航条）色调统一，避免界面割裂，提供更好的视觉体验。
* 布局扩展：充分利用屏幕可视区域，使页面内容延伸到状态栏和导航条区域（即“安全区”之外的避让区），获得更大的布局空间。
* 沉浸体验：在游戏、视频等场景中隐藏系统元素，提供无干扰的全屏体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/klde-wrFSI-sNaoA0lDCuA/zh-cn_image_0000002499414192.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=B7726F78B94389B648B09B292387D354D317DDDAA62ECD4FFC1CA230A62988CF "点击放大")

本文将介绍沉浸式原理、实现方案，并提供常见沉浸式页面开发场景下适配问题的解决方案。

* [顶部或底部背景延伸案例](#section166836535168)
* [挖孔避让案例](#section35561799107)
* [自由窗口标题栏沉浸案例](#section18705614278)

## 实现原理

沉浸式实现主要考虑如下两个因素：

1. 实现沉浸式效果：通过特定方法、属性或接口，使页面突破安全区或标题栏限制，延伸至目标区域。

   页面沉浸式效果实现方案分为窗口、组件两个层级：

   * 窗口级：应用级全局沉浸，作用于所有页面。
   * 组件级：作用于当前组件，可针对单个页面内的多个组件分别配置。
2. 避让处理：避免页面内容与避让区的系统信息（如电量、时间）、交互功能（如导航条手势）或窗口控制键（如关闭、最小化）发生遮挡和冲突。

###实现沉浸式效果

* 方案一：组件设置背景沉浸（组件级）

  组件与避让区边界重合时，设置组件的[background()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#background10)属性，将组件背景扩展至避让区，页面布局仍在安全区内。

  该接口为组件级，不同组件可设置不同背景色并扩展至对应避让区（如顶部组件设置红色背景并扩展至顶部状态栏，底部组件设置蓝色背景并扩展至底部导航条）。若页面背景色统一，可设置最外层父组件的background()属性，实现页面的沉浸式效果。

  此方案中，只需设置一次代码属性，即可实现同一组件在不同窗口模式、窗口方向下的沉浸效果。但界面元素仅做绘制延伸，无法单独布局至状态栏和导航条区域。当页面支持滚动时，滚动区域无法延伸至状态栏和导航条。

  | 原始布局（设置backgroundColor()效果） | 组件设置背景沉浸 |
  | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/_boPObf4T_-YXxcmzeEpNw/zh-cn_image_0000002518622962.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=1DB512A514AC6FF38AE0A67F4028AB0AD2BB56E6AD69C2D38BE3FF846B2AC275 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/9VLOcMapQwigMx_JHo1y7Q/zh-cn_image_0000002531374081.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=E0EA03B0F64F82FD784E9E2CCEEC3385394118BDAD83B70A22FC76FCCA2B47F9 "点击放大") |

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/6YluWzk5R5CbhghRnY4zWA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=55C8AB0BE9284B2A3D8C3187B18AD1B6ADD05E922855D21A72E4E4ECD935F307)

  [backgroundColor()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#backgroundcolor)：背景颜色限定在安全区内。

  [background()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#background10)：背景颜色扩展至顶部状态栏及底部导航条区域。
* 方案二：组件设置页面沉浸（组件级）

  通过设置[ignoreLayoutSafeArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#ignorelayoutsafearea20)并设置高度为LayoutPolicy.matchParent适应父组件，页面背景与布局均扩展至顶部状态栏和底部导航条。作为组件级的沉浸式方案，每个页面均需单独配置。当页面内容与避让区发生冲突时，需由开发者手动进行避让处理。

  | 原始布局 | 组件设置页面沉浸 |
  | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/dsJgevG0R32JGT4dxuL-8A/zh-cn_image_0000002499574174.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=BB883641A7DFA682AE9B48E2A368B26F7AE3A8FAEDD723297666A555DE29E583 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/J2g2BkSOQLys-OpiqbyQ9A/zh-cn_image_0000002499414200.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=32B907C01B8969DBC7788CA19F7E55A86479D17FD78B57B9121B0697F30BF25F "点击放大") |
* 方案三：安全区域拓展（组件级）

  设置组件的[expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea)属性，将组件的安全区域延伸至状态栏或导航条区域，同时保持子组件在安全区内布局，无需额外避让处理。支持指定系统避让区域类型（[SafeAreaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#safeareatype)）和延伸方向（[SafeAreaEdge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#safeareaedge)），实现沉浸式的方案可参考[组件安全区方案](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects#组件安全区方案)。

  | 原始布局 | 扩展至状态栏和导航条 | 仅扩展至状态栏 | 仅扩展至导航条 |
  | --- | --- | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/H7DQvLHkTgmsv7fcrBzk0Q/zh-cn_image_0000002531334135.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=820F3DE940B8BD56602617728F7B9171B7C1D91CA568A85736AB78181401460D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/GsUBxzbPREGMvdd0sY0VFg/zh-cn_image_0000002531374089.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=EEB772B0C36387C6D60CB7C1DB520A08A36269BDFC565BA801CC346B785D24A6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/BNgdCoV3TX6xnxNPQeFC4g/zh-cn_image_0000002499574180.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=7BB506F21135EBB3D0ECBF527243C094229DF2121DA4E86B5D1645BF00821EB7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/Z1rtFe3PQdiztSHTohIBGw/zh-cn_image_0000002499414206.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=BE6DF4C8B027EA1B0DBDC78549763E5C5D1319873C59B2CDC35F3BBEEC698ECF "点击放大") |

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/Mio6QDFqTyymKZ7er30gPQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=3AF1760FADD7B28076DBFBEA652EA0D70162AF0E4075135364DA49E63BC7B338)

  + 边界重合要求：组件必须与安全区域边界重合（例如顶部组件需紧贴屏幕顶部）。
  + 组件尺寸限制：配置expandSafeArea属性将组件进行绘制扩展时，需要关注组件不能配置固定宽高尺寸，百分比除外。
  + 滚动容器限制：当父容器是滚动容器时，expandSafeArea属性设置无效。
* 方案四：窗口设置沉浸式显示（窗口级）

  调用窗口强制全屏布局接口[setWindowLayoutFullScreen()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)设置窗口为沉浸式布局。页面布局范围从安全区域扩展为整个窗口（包括状态栏和导航条），布局范围扩展效果同[组件设置页面沉浸](#table11224183514210)。

  该方案为窗口级沉浸方案，沉浸式布局生效时，所有页面均开启全屏模式，需要开发者在各页面进行避让处理。

各沉浸式方案对比如下：

| 对比维度 | 组件设置背景沉浸 | 组件设置页面沉浸 | 安全区域拓展 | 窗口设置沉浸式显示 |
| --- | --- | --- | --- | --- |
| 级别 | 组件级 | 组件级 | 组件级 | 窗口级 |
| 特点 | 仅背景扩展至避让区，内容默认在安全区 | 背景与内容均扩展至避让区 | 仅背景扩展至避让区，内容默认在安全区  支持指定系统避让区域类型和延伸方向 | 所有页面布局范围扩展至全屏，不自动避让 |
| 使用场景 | 仅页面背景沉浸的场景 | 需组件内容完全覆盖屏幕的场景 | 需要指定延伸区域类型的局部延伸场景 | 应用所有页面均需实现沉浸式 |
| 优点 | 使用简单，易理解  一次配置适配不同窗口模式、窗口方向  支持多组件不同背景扩展 | 使用简单，易理解  一次配置适配不同窗口模式、窗口方向 | 能够对扩展不同的安全区域进行配置  子组件仍在安全区内布局，无需额外的避让处理 | 全局统一生效，适配逻辑集中 |
| 缺点 | 滚动内容无法延伸至避让区  需为每个页面单独配置 | 内容易与避让区元素冲突，需手动处理避让  需为每个页面单独配置 | 滚动内容无法延伸至避让区  参数复杂，理解成本过高 | 需手动计算避让区高度，处理所有内容避让 |

窗口沉浸式效果由不同页面的沉浸实现，页面沉浸式效果由不同组件的沉浸策略组合而成。建议通过组件沉浸方案为每个页面配置不同的沉浸策略，以实现应用的沉浸效果。

###避让处理

由于避让区本身有内容展示（如状态栏中的电量、时间等系统信息），或是手势交互（如导航条点击或上滑），在实现应用页面沉浸式效果后，往往会和避让区域产生UI元素的遮挡、视觉上的违和或交互上的冲突等问题，开发者可以针对不同场景选择合适的方式进行适配。

* 使用[Window.setWindowSystemBarEnable()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowsystembarenable9)方法或[Window.setSpecificSystemBarEnabled()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setspecificsystembarenabled11)方法设置状态栏和导航条的显隐。

  | 显示状态栏和导航条 | 隐藏状态栏和导航条 |
  | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/jNBZJxJ3SG2FrnBWQGZjWQ/zh-cn_image_0000002531334139.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=C365CD0B5A76D6A15E4B88409588D325BDEE4C5ABACCE9FDE8FE4AE9C699F60B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/1_4QvLEmSymLlujf7p5UUA/zh-cn_image_0000002531374093.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=2E1F01A4ADE8FF96E6C9CD86B6D45CFAF8E0D9983B64AFF25D1060563AEA3E0B "点击放大") |
* 使用[Window.getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#getwindowavoidarea9)方法获取避让区域的高度，设置应用页面内容的上下padding实现避让状态栏和导航条。

  | 避让前 | 避让后 |
  | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/TvFw-aveQgq17IwyNneBFQ/zh-cn_image_0000002499574186.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=B2DD6FF265B19E02D036FB2CA22D7996C3CADB0C9FE2913574A14E263422D43B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/j33mDE7pQ9apIA-SERnKWw/zh-cn_image_0000002499414210.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=DEFE6E224055D22AC9791058291D12D52DB84B78CBCA69FC5C8F0A89ABD26A02 "点击放大") |
* 使用[on('avoidAreaChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onavoidareachange9)动态监听避让区变化。
  + 通过AvoidAreaType.TYPE\_SYSTEM获取状态栏区域信息。
  + 通过AvoidAreaType.TYPE\_NAVIGATION\_INDICATOR获取底部导航条区域信息。
  + 通过AvoidAreaType.TYPE\_CUTOUT获取挖孔区信息。

###自由窗口标题栏沉浸

在PC设备及平板和Mate XTs设备的自由多窗模式下，开发者可以设置应用窗口的标题栏不可见，将应用页面扩展至原标题栏区域，实现窗口的沉浸式效果。组件沉浸式的策略不适用于自由窗口标题栏的沉浸，需要开发者单独适配。

自由窗口标题栏包含应用图标、应用名称和三个按钮（全屏/还原、最小化、关闭）。通过设置标题栏不可见，隐藏应用图标和应用名称，保留三键区，实现窗口的沉浸式效果。

* 使用[setWindowDecorVisible(false)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowdecorvisible11)设置隐藏标题栏，只显示右上角三键，此时应用页面拓展至标题栏区域。
* 使用[setWindowDecorHeight()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowdecorheight11)接口设置标题栏高度，控制右上角三键区显示以及显示高度。
* 使用[setDecorButtonStyle()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setdecorbuttonstyle14)接口设置右上角按钮颜色、大小、间距、圆角半径等样式。
* 使用[getTitleButtonRect()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#gettitlebuttonrect11)获取窗口标题栏上的三键区位置和大小，用于不同场景下的页面布局避让。
* 使用[on('windowTitleButtonRectChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onwindowtitlebuttonrectchange11)注册右上角三键大小变化监听。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/f7iSQNNxTRGsBB7FyMiVzw/zh-cn_image_0000002531334143.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=84C145854F0E2955A4BA11B2CAC5A7E426B536E9E13F8F8F69AA707A885E8B9A "点击放大")

## 顶部或底部背景延伸案例

###场景描述

页面背景需延伸至状态栏与导航条区域，页面内容在安全区内展示。

| 全屏 | 分屏 | | 悬浮窗 | |
| --- | --- | --- | --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/TZolnSe8T3CSq_xZjCmTzQ/zh-cn_image_0000002531374097.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=B02179FDA8DA611C1D6DEA4E44A510F8F7902D6C3DE833E7987066CAF96550DE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/nRH1eS9BQzuhKX3cQuXpSA/zh-cn_image_0000002499574190.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=68918349126396DBCBDD7C77D4E0D049B71EE2270D6216F3A4FB94519DDE9D2B "点击放大") | | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/cAQdBh1pRg2BKAxnBxBfPw/zh-cn_image_0000002499414212.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=94BE8213A4E9CCE808CCC3C4ED5004C4B25DCEE501CB209458AF97C584FF015F "点击放大") | |

###开发步骤

1. 方案一：组件设置背景沉浸

   组件设置[background()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#background10)实现背景延伸，内容自动保留在安全区内，自动适配不同窗口模式和窗口方向下避让区的变化。

   ```
   Column() {
     // ...
   }
   // Add a background for the component to achieve immersive background effect
   .background('#F1F3F5')
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/products/default/src/main/ets/pages/backgroundImmersive/componentBackgroundImmersive/Shopping.ets#L23-L29" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Shopping.ets</a></div>

2. 方案二：组件设置页面沉浸 + 避让处理
   * 通过设置[ignoreLayoutSafeArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#ignorelayoutsafearea20)并设置高度为LayoutPolicy.matchParent适应父组件，将页面扩展至避让区。

     ```
     Column() {
       // ...
     }
     // Expands the layout safe area of a component.
     .ignoreLayoutSafeArea()
     .height(LayoutPolicy.matchParent)
     ```

     
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/products/default/src/main/ets/pages/backgroundImmersive/componentPageImmersive/ShoppingAvoid.ets#L27-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShoppingAvoid.ets</a></div>

   * 通过[Window.getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#getwindowavoidarea9)方法获取状态栏和导航条高度，并用状态变量avoidSystem记录。

     ```
     // Get the avoid area.
     this.mainWindowInfo.avoidSystem = this.mainWindow.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
     ```

     
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L206-L207" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

   * 使用[on('avoidAreaChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onavoidareachange9)事件监听避让区域的变化，在监听回调中更新状态变量avoidSystem。

     ```
     public onAvoidAreaChange: (avoidOptions: window.AvoidAreaOptions) => void =
       (avoidOptions: window.AvoidAreaOptions) => {
         if (avoidOptions.type === window.AvoidAreaType.TYPE_SYSTEM) {
           // Default area of the system.
           this.mainWindowInfo.avoidSystem = avoidOptions.area;
         } else if (avoidOptions.type === window.AvoidAreaType.TYPE_CUTOUT) {
           // Cutout area.
           this.mainWindowInfo.avoidCutout = avoidOptions.area;
           this.updateAvoidPadding(avoidOptions.area);
         } else if (avoidOptions.type === window.AvoidAreaType.TYPE_SYSTEM_GESTURE) {
           // Side return gesture area.
           this.mainWindowInfo.avoidSystemGesture = avoidOptions.area;
         } else if (avoidOptions.type === window.AvoidAreaType.TYPE_KEYBOARD) {
           // Fixed soft keyboard area.
           this.mainWindowInfo.avoidKeyboard = avoidOptions.area;
         } else if (avoidOptions.type === window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {
           // Bottom navigation bar.
           this.mainWindowInfo.avoidNavigationIndicator = avoidOptions.area;
         }
       };
     ```

     
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L59-L79" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

   * 设置组件的上下padding分别为状态栏和导航条的高度，使内容避让状态栏和导航条，仅在安全区域显示。

     ```
     Column() {
       // ...
     }
     // ...
     // Set the top and bottom padding to avoid status bar and navigation bar.
     .padding({
       top: this.windowUtil?.mainWindowInfo.avoidSystem?.topRect.height + 'px',
       bottom: this.windowUtil?.mainWindowInfo.avoidNavigationIndicator?.bottomRect.height + 'px'
     })
     ```

     
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/products/default/src/main/ets/pages/backgroundImmersive/componentPageImmersive/ShoppingAvoid.ets#L26-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShoppingAvoid.ets</a></div>


   推荐使用上述两种方案实现，相比窗口设置沉浸显示和安全区域拓展，这两种方案实现方式简单易理解，且自动适配不同窗口模式和方向。

## 挖孔避让案例

###场景描述

在需要充分利用屏幕可视区域的场景中，若要在状态栏显示重要信息或操作按钮，不仅需隐藏原始状态栏和导航条，还需对挖孔区域进行避让。这种情况下可以将背景全屏沉浸，内容区对挖孔区域做避让处理。

在以下场景中，挖孔区尺寸可能发生变化，因此需要监听避让区高度等信息的变化，确保UI布局及时适配调整。

* 窗口模式切换（全屏/悬浮窗/分屏等）
* 设备旋转
* 折叠状态切换（展开、折叠）

以设备旋转为例，效果图如下。

| 竖屏-挖孔区在顶部 | 横屏-挖孔区在左侧 | 反向竖屏-挖孔区在底部 | 反向横屏-挖孔区在右侧 |
| --- | --- | --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/Uwq7J9tcRpGZ5VUVi_3Nvw/zh-cn_image_0000002531334147.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=5D278E07BCB5A75E3B46A2EAB26DEBA0F2104DE10962350E3DC76D9B43331222 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/xZ4PxCt2Tviq0vBLIt6wag/zh-cn_image_0000002531374103.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=D094EFECC1A033848E7E9D71928A11D7699A1A4F5F30331FFC2B083D2621ED89 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/As3G715_RF22GUUW0bBp0g/zh-cn_image_0000002499574194.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=7AF7ABCCD87458A2EB992A07768B5EE928BEB718DD9E9C0966D84837752C44EB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/NrSUwpFrS82Uf_S5c4JgBg/zh-cn_image_0000002499414218.png?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=15776760D7EA38B9C4A7C6698D8168ACA1D88962D6975E7FD342075C78B53003 "点击放大") |

###开发步骤

1. 使用[ignoreLayoutSafeArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#ignorelayoutsafearea20)和height(LayoutPolicy.matchParent)，实现页面沉浸。

   ```
   Column() {
     // ...
   }
   // Expands the layout safe area of a component.
   .ignoreLayoutSafeArea()
   .height(LayoutPolicy.matchParent)
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/products/default/src/main/ets/pages/fullScreenImmersive/componentPageImmersive/MiniGame.ets#L35-L50" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MiniGame.ets</a></div>

2. 使用[setWindowSystemBarEnable()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowsystembarenable9)隐藏状态栏和导航条。

   ```
   // Hide the status bar and navigation bar.
   this.mainWindow.setWindowSystemBarEnable([]).catch((error: BusinessError) => {
     let err = error as BusinessError;
     hilog.error(0x0000, 'testLog', `setWindowSystemBarEnable failed. Code:${err.code}, message:${err.message}`);
   });
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L154-L158" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

3. 使用[on('avoidAreaChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onavoidareachange9)动态监听避让区变化，通过AvoidAreaType.TYPE\_CUTOUT来获取挖孔区域信息。

   ```
   public onAvoidAreaChange: (avoidOptions: window.AvoidAreaOptions) => void =
     (avoidOptions: window.AvoidAreaOptions) => {
       if (avoidOptions.type === window.AvoidAreaType.TYPE_SYSTEM) {
         // Default area of the system.
         this.mainWindowInfo.avoidSystem = avoidOptions.area;
       } else if (avoidOptions.type === window.AvoidAreaType.TYPE_CUTOUT) {
         // Cutout area.
         this.mainWindowInfo.avoidCutout = avoidOptions.area;
         this.updateAvoidPadding(avoidOptions.area);
       } else if (avoidOptions.type === window.AvoidAreaType.TYPE_SYSTEM_GESTURE) {
         // Side return gesture area.
         this.mainWindowInfo.avoidSystemGesture = avoidOptions.area;
       } else if (avoidOptions.type === window.AvoidAreaType.TYPE_KEYBOARD) {
         // Fixed soft keyboard area.
         this.mainWindowInfo.avoidKeyboard = avoidOptions.area;
       } else if (avoidOptions.type === window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {
         // Bottom navigation bar.
         this.mainWindowInfo.avoidNavigationIndicator = avoidOptions.area;
       }
     };
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L59-L79" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

4. 根据挖孔区方位，确定避让方向，并记录在状态变量avoidAreaPadding中。
   * 挖孔区在顶部，则顶部避让 = 挖孔区距屏幕顶部边缘的距离 + 挖孔区域的高度。
   * 挖孔区在左侧，则左侧避让 = 挖孔区距屏幕左侧边缘的距离 + 挖孔区域的宽度。
   * 挖孔区在右侧，则右侧避让 = 屏幕宽度 - 挖孔区距屏幕左侧边缘的距离。
   * 挖孔区在底部，则底部避让 = 屏幕高度 - 挖孔区距屏幕顶部距离。

   ```
   updateAvoidPadding(area: window.AvoidArea) {
     const avoidAreaPadding: Padding = {};
     try {
       // Top cutout area: set top padding.
       if (area.topRect.height > 0) {
         avoidAreaPadding.top = this.uiContext?.px2vp(area.topRect.height + area.topRect.top);
       }
       // Left cutout area: set left padding.
       if (area.leftRect.width > 0) {
         avoidAreaPadding.left = this.uiContext?.px2vp(area.leftRect.left + area.leftRect.width);
       }
       // Right cutout area: set right padding.
       if (area.rightRect.width > 0) {
         avoidAreaPadding.right = this.uiContext?.px2vp(display.getDefaultDisplaySync().width - area.rightRect.left);
       }
       // Bottom cutout area: set bottom padding.
       if (area.bottomRect.height > 0) {
         avoidAreaPadding.bottom = this.uiContext?.px2vp(display.getDefaultDisplaySync().height - area.bottomRect.top);
       }
     } catch (error) {
       let err = error as BusinessError;
       hilog.error(0x0000, 'TestLog', `Failed to set avoid padding. Code: ${err.code}, message: ${err.message}`);
     }
     this.mainWindowInfo.avoidAreaPadding = avoidAreaPadding;
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L83-L108" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

5. 设置组件padding，进行避让。

   ```
   Column() {
     // ...
   }
   // ...
   // Set paddings to avoid notch.
   .padding(this.mainWindowInfo?.avoidAreaPadding)
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/products/default/src/main/ets/pages/fullScreenImmersive/componentPageImmersive/MiniGame.ets#L36-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MiniGame.ets</a></div>


## 自由窗口标题栏沉浸案例

###场景描述

自由窗口模式下，需隐藏默认标题栏，保留关闭、最小化、最大化三键区，使页面延伸至原标题栏区域，实现窗口沉浸式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/YWb4QdPQQ_uwHwy69GE47g/zh-cn_image_0000002531334153.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074236Z&HW-CC-Expire=86400&HW-CC-Sign=008F411D1FF9C2E5E7E634A87E4256348D982EC1909B52F7ED6BE30907A12891 "点击放大")

###开发步骤

1. 使用[setWindowDecorVisible(false)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowdecorvisible11)接口设置标题栏的隐藏，仅保留右上角的三键区。

   ```
   this.mainWindow.setWindowDecorVisible(false);
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L118-L118" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

2. 使用[setWindowDecorHeight()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowdecorheight11)接口设置标题栏高度，控制右上角三键区显示高度。

   ```
   this.mainWindow.setWindowDecorHeight(56);
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L122-L122" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

3. 使用[setDecorButtonStyle()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setdecorbuttonstyle14)接口设置右上角按钮大小，和页面顶部icon大小保持一致。

   ```
   this.mainWindow.setDecorButtonStyle({ buttonIconSize: 24 });
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L126-L126" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

4. 使用[on('windowTitleButtonRectChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onwindowtitlebuttonrectchange11)注册右上角三键大小变化监听，用于页面布局避让。

   ```
   public onWindowButtonRectChange: (titleButtonRect: window.TitleButtonRect) => void =
     (titleButtonRect: window.TitleButtonRect) => {
       // Update the rectangle information of the title bar button.
       this.mainWindowInfo.titleButtonRect = titleButtonRect;
     }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/commons/commons/src/main/ets/utils/WindowUtil.ets#L43-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

5. 使用padding进行布局避让。

   ```
   Column() {
     // ...
   }
   .padding({
     right: this.mainWindowInfo.isImmersive === ImmersiveType.IMMERSIVE ? this.mainWindowInfo.titleButtonRect?.width :
       0
   })
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/Immersive/blob/master/features/shopping/src/main/ets/view/Header.ets#L26-L71" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Header.ets</a></div>


## 示例代码

[沉浸式页面开发](https://gitcode.com/harmonyos_samples/Immersive)
