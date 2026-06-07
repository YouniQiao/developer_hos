---
title: "多设备商务办公界面"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/multi-business-office
format: md
---

# 多设备商务办公界面

## 概述

本文从目前流行的垂类市场中，选择商务办公类应用作为典型案例，详细介绍“一多”在实际开发中的应用。主要包含入口、备忘录、笔记汇总、笔记、日历等典型页面。

* 核心功能：

  [侧边栏显隐](#li46232105014)：监听断点变化，设置[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)组件的SideBarContainerType属性或改变showSideBar属性参数，实现侧边栏根据不同断点显示隐藏及显示类型的变化。

  [分栏](/docs/dev/app-dev/multi-device/multi-financial-app#section1796912148314)布局：分栏布局通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)实现，监听断点变化，根据不同断点或状态改变Navigation的mode属性，实现单双栏切换的效果。

  宫格卡片：用网格布局[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件，在不同断点下将父组件分为不同列数，来实现自适应布局的占比能力，可参考多设备长视频界面中[首页](/docs/dev/app-dev/multi-device/multi-video-app#section109591922155720)的推荐视频实现方案。

* 关键场景：

  入口-多实例：监听断点变化，设置[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件的listDirection属性。在断点为sm时，设置为Vertical纵向展示；其余断点为Horizontal横向展示。实现入口组件根据不同断点切换横向/纵向排列的效果。使用[startAbility()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)实现点击子组件时拉起新实例的效果。

  备忘录-侧边栏显隐：监听断点变化，设置SideBarContainer组件的SideBarContainerType属性或改变showSideBar属性参数，实现侧边栏根据不同断点显示隐藏及显示类型的变化。

  日历-navigation的单双栏变化：监听断点变化，根据不同断点或状态改变[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)的mode属性，实现单双栏切换的效果。

下面的章节将分别从[UX设计](#section896911343456)、[架构设计](#section35961357151114)、[页面开发](#section183977201404)三个角度给出推荐的参考样例，介绍“一多”商务办公类应用在开发过程中的最佳实践。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/VW3ph87tQHWeL7xvB1hwXg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=9E9E0F1D20507659092DEDFFD12C6BC45E0B6209384224A8AE49CA8983B93272)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](/docs/dev/app-dev/application-framework/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## UX设计

本示例中的商务办公应用包含入口、备忘录、笔记汇总、笔记、日历等页面。以平板端为例，应用的基本业务逻辑如下所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/C4-1Iq_NRZGXmvxqayhriw/zh-cn_image_0000002229337365.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=501633B554C4FD3CCC39CBFF78C84CD68A90C5AB55618C1F347E49C35E9410BA "点击放大")

## 架构设计

HarmonyOS的分层架构主要包括产品定制层、基础特性层和公共能力层，为开发者构建了清晰、高效、可扩展的设计架构。详细信息请参考[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)的逻辑设计。

## 页面开发

本章介绍商务办公类应用中如何使用“一多”布局能力，完成页面层级的单页面和多端适配。下文将从不同页面展开，介绍每个页面区域使用的具体布局能力，帮助开发者从零开始进行商务办公类应用的开发。

###入口

* 将入口页划分为两部分，效果图如下：

  | 横向断点 | sm | md | lg | xl |
  | --- | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/OiKLkYEtSYqJB6Kcmb0muQ/zh-cn_image_0000002193851956.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=FA2FA152DC06BC9AE9CE07FD676AC1FADE593EA7CB83DCF51069E22CA401DECE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/2qzSUViwQmKOkbBE-xp58w/zh-cn_image_0000002193851964.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=2FA06CFEBDB72FF19DF2604FBC9C065B92797BBDB637F92A8C59BAAB058C520A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/y-0O2xinSmC5JigBXthQCQ/zh-cn_image_0000002194011556.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=31873B3A0D08D637ACE2C42FBCF03AD536483DF28579310FE59F1F212C948C68 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/G0N5xfOLS6inkwhxLx4wQg/zh-cn_image_0000002193851948.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=6EE263B672370AD5B096A802D347F01DBD07729E0B4615413A321951487753E3 "点击放大") |
* 对各个区域使用的一多能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 标题 | [Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件实现。 |
  | 2 | 多实例入口 | 设置[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件的listDirection属性在断点为sm时为Vertical纵向展示，其余断点为Horizontal横向展示，同时点击子组件使用[startAbility()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)拉起新实例。 |

* 多实例入口的实现：

  监听断点变化，设置List组件的listDirection属性。当断点为sm时，设置为Vertical纵向展示；其余断点时，设置为Horizontal横向展示，实现入口组件根据不同断点横纵排列的效果。使用startAbility()实现点击子组件时拉起新实例的效果。

  ```
  Column() {
    // ...
    List() {
      ForEach(this.directory, (item: DirectoryItem, index: number) => {
        ListItem() {
          Column() {
            // ...
          }
          // ...
          .onClick(() => {
            if (index === CommonConstants.COMMON_ZERO) {
              let want: Want = {
                bundleName: this.bundleName,
                abilityName: 'SecondAbility'
              };
              let option: StartOptions = { displayId: CommonConstants.COMMON_ZERO };
              this.context.startAbility(want, option);
            } else {
              let want: Want = {
                bundleName: this.bundleName,
                abilityName: 'ThirdAbility'
              };
              let option: StartOptions = { displayId: CommonConstants.COMMON_ZERO };
              this.context.startAbility(want, option);
            }
          })
        }
        // ...
        })
      }, (item: DirectoryItem) => JSON.stringify(item))
    }
    // ...
    .listDirection(this.breakPoint === CommonConstants.BREAK_POINT_SM ? Axis.Vertical : Axis.Horizontal)
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/MultiBusinessOffice/blob/master/entry/src/main/ets/pages/Index.ets#L70-L162" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


###备忘录

* 将备忘录页划分为6个部分，效果图如下：

  | 横向断点 | sm | md | lg | xl |
  | --- | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/kwaHa5H8RpqOe6FzErOvHg/zh-cn_image_0000002194011568.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=E8A83997E5B391E53662F75316766F03266570DDA43136BEBB95976DD9603183 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/OYrwggdTReK_akqLmMzyKA/zh-cn_image_0000002194011540.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=D454911A3ADA058C9A5A62291CCF2EB92A820AF318F7E75288BBCC62C27630BD "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/rsXsXwszTI-8p532qfl6Ng/zh-cn_image_0000002229451829.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=5B27A8DE4D71342CD3DF7AA263B6A4A6DBA6A3591A9FE6E55048E205CD5CDBC0 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/85UuhmVySmOooGaouZJ92Q/zh-cn_image_0000002193851980.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=206D708592539D8D26A8777B2012B2776D637354AFCDDE1869675C967A8758AB "点击放大") |
* 对各个区域使用的适配能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 侧边栏 | 监听断点变化，设置[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)的SideBarContainerType属性在断点为lg时为Embed，其余断点为Overlay，实现侧边栏根据不同断点显示类型变化的效果，代码可参考[侧边栏显示类型变化](#li46232105014)。 |
  | 2 | 侧边栏显隐控件 | 监听断点变化，设置SideBarContainer组件的showSideBar属性，实现侧边栏根据不同断点显示隐藏的效果，代码可参考[侧边栏显隐变化](#li68811147079)。 |
  | 3 | navigation导航页 | 通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)路由栈[NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10)，将NavDestination页面信息入栈，实现NavDestination页面的展示。 |
  | 4 | navigation内容页 | NavDestination页面信息。 |
  | 5 | navigation内容页-控制按钮 | 给控制按钮添加onClick事件，通过自定义变量notesNavMode改变Navigation中mode属性的值，控制单双栏的变化，并通过自定义变量sideBarStatus改变SideBarContainer组件中showSideBar属性的值，控制侧边栏的显隐，实现内容页全屏展示或退出全屏的效果，代码可参考[navigation内容页-控制按钮](#li14995047141210)。 |
  | 6 | 按钮组件 | 监听断点变化，不同断点展示的位置不同。 |

* 侧边栏显示类型变化

  监听断点变化，同时设置SideBarContainer组件的SideBarContainerType属性在断点为lg时为Embed，其余断点为Overlay，实现侧边栏根据不同断点显示类型变化的效果。

  ```
  SideBarContainer(this.breakPoint === CommonConstants.BREAK_POINT_LG ? SideBarContainerType.Embed :
  SideBarContainerType.Overlay) {
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/MultiBusinessOffice/blob/master/entry/src/main/ets/pages/NotesPage.ets#L172-L370" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：NotesPage.ets</a></div>


* 侧边栏显隐变化

  监听断点变化，同时设置SideBarContainer组件的showSideBar属性，实现侧边栏根据不同断点显示隐藏的效果。

  ```
  .showSideBar(this.breakPoint === CommonConstants.BREAK_POINT_LG ? this.arrowStatus : false)
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/MultiBusinessOffice/blob/master/entry/src/main/ets/pages/NotesPage.ets#L390-L390" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：NotesPage.ets</a></div>


* navigation内容页-控制按钮

  给控制按钮添加onClick事件，通过自定义变量notesNavMode改变Navigation中mode属性的值，控制单双栏的变化，并通过自定义变量sideBarStatus改变SideBarContainer组件中showSideBar属性的值，控制侧边栏的显隐，实现内容页全屏展示或退出全屏的效果。

  ```
  Row() {
    if (this.arrowStatus && this.breakPoint !== CommonConstants.BREAK_POINT_SM) {
      Column() {
        // ...
      }
      // ...
      .onClick(() => {
        this.notesNavMode = NavigationMode.Stack;
        this.arrowStatus = false;
        this.sideBarIsShown = false;
      })
      // ...
    } else {
      Column() {
        // ...
      }
      // ...
      .onClick(() => {
        if (this.breakPoint === CommonConstants.BREAK_POINT_SM) {
          this.notesPageInfos.pop();
        } else {
          this.notesNavMode = NavigationMode.Split;
          this.arrowStatus = true;
        }
        this.sideBarIsShown = true;
        if (this.breakPoint === CommonConstants.BREAK_POINT_LG) {
          this.sideBarStatus = true;
        }
      })
      // ...
    }
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/MultiBusinessOffice/blob/master/entry/src/main/ets/view/NotesPageC.ets#L33-L155" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：NotesPageC.ets</a></div>

* 整个页面使用的是[分栏](/docs/dev/app-dev/multi-device/multi-financial-app#section1796912148314)布局，点击navigation导航页的某一备忘清单时，可分栏显示备忘内容，该功能在多设备银行理财界面中有详细介绍。

###笔记汇总

* 笔记汇总页划分为4个部分，效果如下图所示：

  | 横向断点 | sm | md | lg | xl |
  | --- | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/wIgrJ52iTry2Zt50SZE9OQ/zh-cn_image_0000002229451861.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=49B13DED916905AB818D0578D0547E56897340BB7A05A69128EE694EE41B3F8B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/V3CMuzoIQZ6B5ikWM5t5xw/zh-cn_image_0000002193851968.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=BF2AF5C20610489756DD947E40B0B144D58D81B6428065C9B8E06DAA3F6BE9A7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/z_gqHrKoS-q_zXVMBw1CGw/zh-cn_image_0000002362020341.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=FB25D9B92E3ACAA26D8F800103E817B171B906ADA968FF25C0876D48E0694E24 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/hUi5xgxOS2GzpoJsKPFCUw/zh-cn_image_0000002362021569.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=465E10D3E24D54BABA4C64F6EEB45B85C11B8625718F975AFE06998966308F41 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 侧边栏 | 监听断点变化，设置[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)组件的SideBarContainerType属性在断点为lg时为Embed，其余断点为Overlay，实现侧边栏根据不同断点显示类型变化的效果。 |
  | 2 | 侧边栏显隐控件 | 监听断点变化，设置SideBarContainer组件的showSideBar属性，实现侧边栏根据不同断点显示隐藏的效果。 |
  | 3 | 标题栏 | 空白部分使用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充，实现拉伸能力。PC/2in1设备需设置setWindowDecorVisible()接口，隐藏标题栏后避让系统绘制的右上角三键区域。 |
  | 4 | 笔记汇总 | 使用网格布局[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件，在不同断点下将父组件分为不同列数，来实现自适应布局的占比能力，可参考多设备长视频界面中[首页](/docs/dev/app-dev/multi-device/multi-video-app#section109591922155720)的推荐视频实现方案。 |

* 整个页面使用的是宫格卡片，点击某一个笔记时，可打开笔记实例。

###笔记

* 将笔记页划分为3个部分，具体效果见下图：

  | 横向断点 | sm | md | lg | xl |
  | --- | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/-B2ycl44QFyU5vCCq4H2XQ/zh-cn_image_0000002229451825.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=74B95621D5DC29CCCF5FB2D8D31364313B197C96C6663A8D0AFA11953C0DAA8E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/JjkTVjBnRl27eGi3vPvMnA/zh-cn_image_0000002229337345.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=44BAAE5A0077305925AFBFECEE3F0A5F7587B360BBDEAB067F76AA72F767B49B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/Oa1QbMYXQIql4wIsST1D4Q/zh-cn_image_0000002193851960.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=13ACE857EF8BDDEBE775EFBCA7DD2CF699E94C1E6A4CF030DC9BC395C80CD0E7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/uqQs0RMFRAyIocKPBzvmuw/zh-cn_image_0000002194011532.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=65C627E59B831160FAD024D2C308AF12293729BF4EB7BF5182578A3605E0C7B3 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 标题栏 | 点击加号，增加[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)标签及[TabContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent)，实现多实例的效果，空白部分使用Blank组件填充，实现拉伸能力。 |
  | 2 | 编辑按钮 | 监听断点变化，改变[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件下子组件的间隔宽度，同时设置固定宽度，当List组件下的Tabs内容超过设定宽度时隐藏部分Tabs，延伸显示更多。 |
  | 3 | 笔记内容 | Tabs标签下的TabContent。 |

###日历

* 将日历页划分为6个部分，效果图如下：

  | 横向断点 | sm | md | lg | xl |
  | --- | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/yqG4nR9NTASvZisCTjdvFA/zh-cn_image_0000002193851992.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=4CF3E3FC2A1E10CEF7539F94A5EDB2A94939720BB79DC478D7974F38F4E943C9 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/mKcTgMNyTzSOeNb-14HkWQ/zh-cn_image_0000002229451849.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=3DDADAE0D87F287E5E58C1F090CF2F89C249DA2417F615097788651B75AC2345 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/9yxqhWm_Sn69PixVNkF3eQ/zh-cn_image_0000002229337337.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=9F8B67E96511E69ADBEF21672A0E26673874A771ECCCD2E3F365456C0DB8326A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/wKDdTZr7STCXjV5bAwW5EQ/zh-cn_image_0000002194011544.png?HW-CC-KV=V1&HW-CC-Date=20260606T074251Z&HW-CC-Expire=86400&HW-CC-Sign=611ADF2D13B1E38BF80AF5BA61EF425B986CBA9458EE6DBC078C726216DB3F75 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 侧边栏 | 设置[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)组件的SideBarContainerType属性在断点为lg时为Embed，其余断点为Overlay，实现侧边栏根据不同断点显示类型变化的效果。 |
  | 2 | 侧边栏显隐控件 | 设置SideBarContainer组件的showSideBar属性，实现侧边栏根据不同断点显示隐藏的效果。 |
  | 3 | 标题栏 | 空白部分使用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充，实现拉伸能力。PC/2in1设备需设置setWindowDecorVisible()接口，隐藏标题栏后避让系统绘制的右上角三键区域。 |
  | 4 | navigation导航页 | 使用[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件设置columnsTemplate和rowsTemplate属性，实现五行七列的自适应布局。  通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)路由栈[NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10)，将NavDestination页面信息入栈，并监听断点变化，根据不同断点或状态改变Navigation的mode属性，实现单双栏切换及navigation内容页显隐的效果。 |
  | 5 | navigation内容页 | NavDestination页面信息。 |
  | 6 | navigation控制按钮 | 给控制按钮添加onClick事件，用来改变Navigation的mode属性，实现单双栏切换及控制navigation内容页显隐的效果，代码可参考[单双栏切换](#li12736428201)。 |

* 单双栏切换

  监听断点的变化，通过控制按钮的点击事件，用来改变Navigation的mode属性，实现单双栏切换及navigation内容页显隐。同时监听navigationMode变化，控制页面是否跳转。

  ```
  Row() {
    // ...

    if (this.breakPoint !== CommonConstants.BREAK_POINT_SM) {
      Column() {
        // ...
      }
      // ...
      .onClick(() => {
        if (this.navMode === NavigationMode.Split) {
          this.navMode = NavigationMode.Stack;
        } else if (this.navMode === NavigationMode.Stack && this.selectedItem.isTrip) {
          this.navMode = NavigationMode.Split;
        }
      })
    }
    // ...
  Navigation(this.calendarPageInfos) {
    CalendarView()
  }
  .navDestination(this.pageMap)
  .mode(this.breakPoint === CommonConstants.BREAK_POINT_SM ? NavigationMode.Stack : this.navMode)
  // ...
  .onNavigationModeChange((mode: NavigationMode) => {
    if (this.breakPoint === CommonConstants.BREAK_POINT_SM || mode === NavigationMode.Stack) {
      this.calendarPageInfos.clear();
    } else if (mode === NavigationMode.Split) {
      this.calendarPageInfos.pushPath({ name: this.selectedItem.date, param: this.selectedItem }, false);
    }
  })
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/MultiBusinessOffice/blob/master/entry/src/main/ets/pages/CalendarPage.ets#L97-L227" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CalendarPage.ets</a></div>

* 整个页面使用的是[分栏](/docs/dev/app-dev/multi-device/multi-financial-app#section1796912148314)布局，点击navigation导航页的某一日期时，可分栏显示行程内容，该功能在多设备银行理财界面中有详细介绍。

## 示例代码

* [多设备商务办公界面](https://gitcode.com/harmonyos_samples/MultiBusinessOffice)
