---
title: "多设备股票类界面"
displayed_sidebar: appDevSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/multi-ticket-class
format: md
---

# 多设备股票类界面

## 概述

本文以当前流行的垂类市场中的股票类应用为典型案例，详细介绍“一多”在实际开发中的应用，主要涵盖自选股和个股详情两个典型页面，展示其在直板机、双折叠、三折叠、阔折叠、平板和电脑六种产品形态上的“一次开发，多端部署”。下文将从UX设计、工程管理、移动端页面、电脑端页面四个角度，介绍“一多”股票类应用在开发过程中的最佳实践。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/JzrLnLyWR_SZxrbODXFsCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=EBFAB0EC78A8EB1F9D234C9A53B8677E60B747670AEB7758DA869AFFD5E14410)

阅读本文前，建议开发者先了解[ArkUI（方舟UI框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui)和[一次开发，多端部署概览](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview)相关知识。

## UX设计

股票类应用的目的是让用户更便捷地办理金融业务。常见类型包括银行理财、股票、基金等应用及业务场景，核心场景有数据查看和股票交易等。

股票类应用有以下特点：

* 丰富的信息聚合。
* 图表数据高效展示。
* 便捷高效的交互方式。

此类型的应用在多端设备的使用过程中，要保障用户办理金融业务时的基本体验与功能可用性，也需着力优化大屏幕设备上的交互效率。

以下是股票界面在多设备上的UX设计图。具体断点与对应设备的关系可参考[屏幕类型布局场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-screen-layout)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/sHWUJvWBRUCj11QitByFFg/zh-cn_image_0000002579631774.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=E309D07FA7AC5C52B84E01872C0D3172D2EC95314AE4DEA08EA1934250FB4284 "点击放大")

###设计指南

金融理财类的多设备响应式设计指南，请参考[金融理财类](https://developer.huawei.com/consumer/cn/doc/design-guides/responsive-design-examples6-0000001793536905)。

## 工程管理

###创建工程

建议开发者参考[多设备工程部署与发布](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-ide)相关内容，掌握分层架构工程的创建与配置方法后，创建出模板项目工程。然后根据股票类应用的开发需求进行针对性修改，确保工程架构贴合实际业务需求。

###工程结构

在创建“一多”工程时，开发者会面临工程结构目录的划分问题。考虑到复用性和可维护性，本文以股票类应用为例，提供推荐的参考方案。

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，为开发者提供清晰、高效、可扩展的设计架构。详细请参见[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)。

股票类应用根据一多推荐的commons、features、products的"三层工程架构"划分目录。其中，features（基础特性层）按业务功能划分为三个独立模块：股票交易-stockdeal（包含买入弹窗、K线图表、交易详情等组件）、股票详情-stockdetail（包含股票详情页、多窗口入口、信息表格等）以及股票市场-stockmarket（包含市场列表组件）。公共常量、媒体播放工具以及窗口管理工具等需要被不同页面依赖引用的内容，划分为一个commons（公共能力层）：基础能力-base。products（产品定制层）包含default和pc两个模块定制了程序标准启动流程和多场景协同场景的入口能力。

工程结构如下（目录层级）：

```
├──commons
│  └──base/src/main
│     └──ets
│        ├──baseviews                     // 公共视图组件
│        ├──models                        // 公共数据模型
│        └──utils                         // 公共工具类
├──features
│  ├──stockdeal/src/main
│  │  └──ets
│  │     ├──chartmodels                   // 图表组件
│  │     ├──models                        // 股票交易数据模型
│  │     ├──viewmodels                    // 股票交易视图模型
│  │     └──views                         // 股票交易视图组件
│  ├──stockdetail/src/main
│  │  ├──ets
│  │  │  ├──models                        // 股票详情数据模型
│  │  │  ├──viewmodels                    // 股票详情视图模型
│  │  │  ├──pages                         // 股票详情页
│  │  │  └──views                         // 股票详情视图组件
│  └──stockmarket/src/main
│     └──ets
│        ├──models                        // 股票市场数据模型
│        ├──viewmodels                    // 股票市场视图模型
│        └──views                         // 股票市场视图组件
└──products
   ├──default/src/main
   │  ├──ets
   │  │  ├──entryability                  // 移动端程序入口
   │  │  ├──entrybackupability            // 程序备份入口
   │  │  ├──pages                         // 移动端首页
   │  │  ├──splitScreenAbility            // 分屏能力
   │  │  └──splitScreenBackupAbility      // 分屏备份能力
   │  └──resources                        // 应用静态资源目录
   └──pc/src/main
      ├──ets
      │  ├──pages                         // PC端页面
      │  ├──pcability                     // PC端程序入口
      │  └──pcbackupability               // PC程序备份入口
      └──resources                        // 应用静态资源目录
```

## 移动端页面

###窗口适配

**窗口模式**

[多设备股票类界面](https://gitcode.com/harmonyos_samples/multi-ticket-class)示例，根据适配的设备，涉及全屏模式、分屏模式、悬浮窗模式、自由窗口模式，可参考[窗口模式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode)。其中分屏模式与悬浮窗通常无特殊设计，可通过系统方式进入。应用监听窗口尺寸变化，[通过断点刷新UI](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section175001836203617)，将自动适配全屏、分屏、悬浮窗、自由窗口模式下的布局。

使用系统UI组件进入全景多窗，实现一个应用多个窗口并行运行的体验，可参考[股票详情页](#section46312514204)——功能开发：应用多实例-多股比价部分。

**窗口方向**

通过设置[setPreferredOrientation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)使应用跟随传感器自动旋转。在类直板机上推荐仅竖屏显示，在双折叠展开态、三折叠G态、平板等大屏幕场景下推荐四方向旋转并受控制中心的旋转开关控制。在股票应用中，通过module.json5配置文件，建议设置为FOLLOW\_DESKTOP，具体说明可参考[窗口方向](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction)。

**窗口沉浸式**

根据UX设计，实现不同窗口模式（全屏、分屏、悬浮窗）下窗口的沉浸式，可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。全屏、分屏和悬浮窗的沉浸式均可通过[setWindowLayoutFullscreen()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)实现，并进行动态安全区避让。

###自选股页面

自选股页主要用于响应用户输入、展示指数、自选股票信息以及跳转股票详情页。按照功能设计，将自选股页相关内容划分为4个区域，效果图如下所示：

| 横向(/纵向)断点 | sm/md | sm/lg | md | lg |
| --- | --- | --- | --- | --- |
| 自选股页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/3S7gvxNVT-O6I_t1EN8L8Q/zh-cn_image_0000002610151657.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=55B93335C63386978F007B5C17E0C2B2EA4C136B814ABCE27C7AC25AC3784F36 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/fehu6TvBRPC7IjWIOC2ihQ/zh-cn_image_0000002579791670.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=69563E8F72E427F6E429B0AC8B4F16BE477029AC5BAE3A732D49B2E5F7D67D0C "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/ZG3nAcRTRZme2B665-zvIA/zh-cn_image_0000002610071553.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=EB0A54B36A966C5A66B15C8860619B3EE3C12AC773C3C463F71072FD755411DC "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/Q5X3BQmkTBKnS9X5Tq81FQ/zh-cn_image_0000002579631776.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=5250CE671740D23328BA908696851926A86317DA28B9AAADAE901E93F8780579 "点击放大") |

**界面开发**

对各个区域使用的多种能力进行分析，实现方案如下表：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 底部/侧边页签 | 借助[响应式组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section1914110349546)HdsTabs实现。同时在api版本低的设备上降级使用Tabs组件。 |
| 2 | 指数 | 最后一个组件固定，其他组件使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，随着设备宽度变大，页签间距变大，页面能够展示更多页签内容。 |
| 3 | 股票列表-工具栏 | 文字和功能按钮中间增加[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)，实现拉伸能力。 |
| 4 | 股票列表 | 通过使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)设置固定宽度和[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)，可实现股票列表数据的上下或左右滑动。同时，支持对不同列设置不同的[justifyContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#justifycontent8)，以便实现各列的不同对齐方式。 |

* 整个页面使用的是[分栏布局](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-page-layout#section11897247142110)，在股票列表区域，点击某一股票时，平板上会分栏显示该股票的详细信息。

###股票详情页

股票详情页主要用于响应用户输入、展示具体股票详细信息以及查看讨论信息等内容。按照功能设计，将自选股页相关内容划分为6个区域，效果图如下所示：

| 横向(/纵向)断点 | sm/md | sm/lg | md | lg、xl |
| --- | --- | --- | --- | --- |
| 个股详情页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/UuJCb_eXSNCJuqQXsfDLxQ/zh-cn_image_0000002610151659.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=16FED636A742CE9026323A45BB2344A9EB904CDBF0B35CE123BC2FB6DA6ED00B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/RZYVySnZROuy7HIhOiprgg/zh-cn_image_0000002579791672.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=B5803433A1D965347BC065A0795360EE91BDAE5A00D709722B5EBF41FA61AC6D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/LqvaCKQlTqGN467hMa6bug/zh-cn_image_0000002610071555.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=2D3F7001628F7923DA4AC71CEF5E0E815A266D03E6AD0CFEF2B72444C35DED34 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/ny-aBeldSbmKHCxnGMlTCA/zh-cn_image_0000002579631778.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=CFBA625B32C2E0B936A8B28F6FC9143D8EF0C731F840C3B986B973676D9639F1 "点击放大") |

**界面开发**

对各区域使用的能力进行分析，实现方案如表所示：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 交易操作行 | 通过为“去交易”按钮设置[layoutWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size#layoutweight)布局权重，并使用Blank组件结合断点，实现该按钮的自适应拉伸。 |
| 2 | 标题 | 居中显示，其他操作两端对齐，空白空间使用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)实现自适应布局拉伸能力。 |
| 3 | 行情列表数据 | 通过[栅格](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section1061332817545)并结合断点，控制在不同断点下显示不同的列数，列表自适应两列变多列。 |
| 4 | 中间Tab | 通过[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)的space属性并结合断点，控制在不同断点下ListItem之间的间距。 |
| 5 | 曲线图和柱状图 | 使用layoutWeight属性实现拉伸能力。 |
| 6 | 讨论Tab | 通过[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)的space属性并结合断点，控制在不同断点下ListItem之间的间距。 |

**功能开发：应用多实例-多股比价**

应用通过系统提供的[MultiWindowEntryInAPP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-multiwindowentryinapp-api)组件，配置需拉起的bundleName与UIAbility（仅限本应用，无法拉起其他应用），单击组件页面进入分屏（双股对比），在分屏状态下，再点击组件进入全景多窗（三股对比）。

下表以Mate X5设备为例，展示应用在分屏及全景多窗模式下的效果。

| - | 折叠屏分屏-双股**比价** | 折叠屏全景多窗-三股**比价** |
| --- | --- | --- |
| 个股详情页-多股比价 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/XC6MVTZTQHa-ocjpS6sXyw/zh-cn_image_0000002610151661.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=550E16B09B569CFFAAD14ED229982A78584B71213FDDE24705A861223DEC0894 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/qx1i5NVwTWOyJErGEvAuVA/zh-cn_image_0000002579791674.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=5D03C370212543B6B9E40BD97891F27FF24BFED9A86C17E104A9B734C0D83712 "点击放大") |

**约束条件**

[MultiWindowEntryInAPP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-multiwindowentryinapp-api)组件依赖全景多窗特性，只有当前设备及屏幕状态支持全景多窗，才支持设置此功能。目前支持全景多窗的设备型态有：

* 双折叠：展开态。
* 三折叠：双屏态，三屏态的横屏态。
* 平板：横屏态。

对于不支持的设备型态，该组件不可交互，不响应点击事件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/sjcGFY82TRu_GMEswZlmeg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=E9FA70ADD5B8EDBBBEB987F9436794D66A36FBEBEA06F014ADF9F58D8F7142C4)

建议开发者在分屏副窗口左上角设置**关闭按钮**以直接关闭副窗口，本案例使用返回按钮，是股票比价场景需返回上级页面的特定需求。

**开发步骤**

应用使用[MultiWindowEntryInAPP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-multiwindowentryinapp-api)组件主动分屏或进入全景多窗。具体开发步骤如下：

1. 导入模块。

   ```
   import { MultiWindowEntryInAPP } from '@kit.UIDesignKit';
   import { TextModifier } from '@kit.ArkUI';
   import { Want } from '@kit.AbilityKit';
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-ticket-class/blob/master/features/stockdetail/src/main/ets/views/MultiWindowEntryComponent.ets#L16-L18" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MultiWindowEntryComponent.ets</a></div>

2. 使用MultiWindowEntryInAPP组件，并且设置组件参数。

   ```
   @Component
   export struct MultiWindowEntryComponent {
     @Link textModifier: TextModifier;
     @Link want: Want;
     @State isShowMultiWindowEntry: boolean = false;
     // ...

     build() {
       Row() {
         MultiWindowEntryInAPP({
           want: this.want,
           isShowSubtitle: false,
           multiWindowEntryInAPPStyle: {
             iconOptions: {
               iconSize: 24,
               iconColor: $r('sys.color.font_primary'),
               iconWeight: FontWeight.Normal,
               backgroundColor: $r('sys.color.comp_background_tertiary')
             },
             subtitleOptions: {
               modifier: this.textModifier.fontColor($r('app.color.text_primary_color'))
             }
           }
         })
           .id('MultiWindowEntryInAPP')
       }
       .visibility(this.isShowMultiWindowEntry ? Visibility.Visible : Visibility.None)
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/features/stockdetail/src/main/ets/views/MultiWindowEntryComponent.ets#L26-L86" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MultiWindowEntryComponent.ets</a></div>

3. 导入封装好的MultiWindowEntryComponent组件，并且设置组件参数。

   ```
   import { MultiWindowEntryComponent } from './MultiWindowEntryComponent';

   @Component
   export struct TopTitleBar {
     // ...
     @State textModifier: TextModifier = new TextModifier();
     @State splitScreenWant: Want = {
       // Modify the bundleName, moduleName and abilityName of the current application,
       // and launch the UIAbility within the application.
       bundleName: 'com.example.multiticketclass',
       moduleName: 'multiticketclassdefaultsample',
       abilityName: 'SplitScreenAbility',
     };
     // ...
     build() {
       Row() {
         // ...
         // The area displayed by the icon on the right side
         Row({ space: 16 }) {
           // split screen
           Row() {
             MultiWindowEntryComponent({
               textModifier: this.textModifier,
               want: this.splitScreenWant
             })
           }
           .visibility(this.getMultiWindowVisibility())
         }
       }
       // ...
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/features/stockdetail/src/main/ets/views/TopTitleBar.ets#L34-L195" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TopTitleBar.ets</a></div>


**应用内分屏高阶组件窗口路由方案**

建议开发者采用应用级多实例来实现分屏页面的路由管理。以下是页面级多实例与应用级多实例的主要区别，多股比价场景的分屏路由管理采用应用级多实例：

| 场景 | 路由栈特点 | 是否需要路由改造 | 核心方案 |
| --- | --- | --- | --- |
| 页面级多实例 | 每个UI Ability创建后，基于当前节点改造路由栈 | 需要 | 以当前路由节点生成路由表，开发者手动定义路由方案 |
| 应用级多实例（**推荐**） | 每个UI Ability创建独立的相同路由栈 | 不需要 | 每个窗口启动时创建独立路由栈（路由表相同） |

**应用内分屏高阶组件窗口路由退栈方案**

在多股比价场景中，当在应用内进行分屏操作时，新增窗口应保留当前浏览的股票信息，而主窗口则应回到股票列表。为实现这一功能，建议在新窗口的启动生命周期中触发事件，原窗口通过监听该事件并执行退栈操作。

1. 在分屏程序的入口SplitScreenAbility.ets中的onCreate()和onNewWant()生命周期中进行事件触发。

   ```
   let eventData: emitter.EventData = {
     data: {
       'isStart': 1,
       'id': 1
     }
   };
   let innerEvent: emitter.InnerEvent = {
     eventId: 1,
     priority: emitter.EventPriority.HIGH
   };

   export default class SplitScreenAbility extends UIAbility {
     // ...

     onCreate(): void {
       // ...
       emitter.emit(innerEvent, eventData);
     }

     onNewWant(): void {
       // ...
       emitter.emit(innerEvent, eventData);
     }

     // ...
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/products/default/src/main/ets/splitScreenAbility/SplitScreenAbility.ets#L32-L170" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：SplitScreenAbility.ets</a></div>

2. 在原窗口进行事件监听并做退栈处理。

   ```
   @Component
   export struct TopTitleBar {
     // ...
     private innerEvent: emitter.InnerEvent = { eventId: 1 };
     private callBack: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
       Logger.info(`eventData:${eventData}`);
       if (this.pageInfos?.pop) {
         this.pageInfos.pop();
       }
     };

     aboutToAppear(): void {
       this.viewModel.loadData();
       if (this.context.abilityInfo.name === 'MultiticketclassdefaultAbility') {
         emitter.on(this.innerEvent, this.callBack);
       }
     }

     aboutToDisappear(): void {
       emitter.off(this.innerEvent.eventId, this.callBack);
     }

     // ...
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/features/stockdetail/src/main/ets/views/TopTitleBar.ets#L37-L194" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TopTitleBar.ets</a></div>


**应用内分屏高阶组件按钮显隐策略**

在应用内分屏高阶组件时，对不支持全景多窗的设备隐藏分屏按钮。方案的主要逻辑为：

1. 监听窗口尺寸变化。

   ```
   public onWindowSizeChange: (windowSize: window.Size) => void = (windowSize: window.Size) => {
     this.mainWindowInfo.windowSize = windowSize;
     if (this.uiContext) {
       this.mainWindowInfo.widthBp = this.uiContext.getWindowWidthBreakpoint();
       this.mainWindowInfo.heightBp = this.uiContext.getWindowHeightBreakpoint();
     }
   };
   // ...
   updateWindowInfo(): void {
     try {
       // ...
       // Register for window size change monitoring, update window size and width/height breakpoint.
       this.mainWindow.on('windowSizeChange', this.onWindowSizeChange);
       // ...
       AppStorage.setOrCreate(KEY_MAIN_WINDOW_INFO, this.mainWindowInfo);
     } catch (error) {
       let err = error as BusinessError;
       Logger.error(`Failed to update window info. Code: ${err.code}, message: ${err.message}`);
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/commons/base/src/main/ets/utils/WindowUtil.ets#L39-L246" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WindowUtil.ets</a></div>

2. 尺寸变化时获取按钮节点，查询其enabled属性。

   ```
   private timerId: number = -1;

   aboutToAppear(): void {
     this.checkMultiWindowEnabled();
   }

   aboutToDisappear(): void {
     if (this.timerId !== -1) {
       clearTimeout(this.timerId);
     }
   }

   private checkMultiWindowEnabled(): void {
     this.timerId = setTimeout(() => {
       const frameNode = this.getUIContext()?.getFrameNodeById('MultiWindowEntryInAPP');
       const inspectorInfo = JSON.stringify(frameNode?.getInspectorInfo() as InspectorInfo);
       if (inspectorInfo?.search('"enabled":true') && inspectorInfo?.search('"enabled":true') !== -1) {
         this.isShowMultiWindowEntry = true;
       } else {
         this.isShowMultiWindowEntry = false;
       }
     }) as number;
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/features/stockdetail/src/main/ets/views/MultiWindowEntryComponent.ets#L33-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MultiWindowEntryComponent.ets</a></div>

3. 根据enabled属性通过visibility控制组件的显隐。

   ```
   Row() {
     MultiWindowEntryInAPP({
       want: this.want,
       isShowSubtitle: false,
       multiWindowEntryInAPPStyle: {
         // ...
       }
     })
       .id('MultiWindowEntryInAPP')
   }
   .visibility(this.isShowMultiWindowEntry ? Visibility.Visible : Visibility.None)
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/wangwenbo551/multi-ticket-class/blob/dev_homs_check/features/stockdetail/src/main/ets/views/MultiWindowEntryComponent.ets#L62-L83" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MultiWindowEntryComponent.ets</a></div>


## 电脑端页面

本章介绍如何基于现有移动端界面开发方案，实现代码逻辑与布局复用，高效完成股票类应用在电脑设备上的界面开发。

###窗口适配

* 窗口模式

  长视频应用在电脑端上支持全屏和自由窗口两种模式，具体实现可参考[窗口模式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode)。应用内监听窗口尺寸变化，[通过断点刷新UI](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section175001836203617)，即可自动适配全屏和自由窗口模式下的布局。
* 窗口沉浸式

  根据UX设计规范，需要实现全屏和自由窗口下的沉浸式效果，具体实现可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。全屏模式下，通过[window.setWindowLayoutFullscreen()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)实现沉浸式。自由窗口模式下，通过[window.setWindowDecorVisible(false)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowdecorvisible11)隐藏标题栏，仅保留右上角三键，使页面内容延伸至标题栏区域，实现沉浸式显示效果。

###自选股页面

**页面布局**

* 将电脑端自选股页划分为四个部分，效果图如下：

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/HKWfLovsSEWX6XlId--ZXA/zh-cn_image_0000002610071557.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=75F97E00281CBFE40E10EE38DD57B615E8FA3850F1E3F37FB85C47AE666E4768 "点击放大")

* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 侧边页签 | 同移动端[自选股页面](#section2034582411817)对应区域的布局实现方案一致。 |
  | 2 | 指数 |
  | 3 | 股票列表-工具栏 |
  | 4 | 股票列表 |

###股票详情页

**页面布局**

* 将电脑端股票详情页划分为五个部分，效果图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/U9IaLit_Q5q9hMQBblhCfw/zh-cn_image_0000002579631780.png?HW-CC-KV=V1&HW-CC-Date=20260606T074044Z&HW-CC-Expire=86400&HW-CC-Sign=985B37915F88241F63E6620AC41EE3C8ACC9ACCE0DEBED4716357116E8019D31 "点击放大")

* 对各区域使用的能力进行分析，实现方案如表所示：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 交易操作行 | 同移动端[股票详情页](#section46312514204)对应区域的布局实现方案一致。 |
  | 2 | 标题 |
  | 3 | 行情列表数据 |
  | 4 | 中间Tab |
  | 5 | 曲线图和柱状图 |

## 示例代码

* [多设备股票类界面](https://gitcode.com/harmonyos_samples/multi-ticket-class)
