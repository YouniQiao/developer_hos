---
title: "多设备便捷生活界面"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/multi-convenient-life
format: md
---

# 多设备便捷生活界面

## 概述

本文从目前流行的垂类市场中，选择便捷生活类应用作为典型案例详细介绍“一多”在实际开发中的应用。一多便捷生活应用包含首页展示、商品展示、图文详情、视频浏览等功能。本文选择美食列表页、店铺页、商品详情页、图文详情页、视频页等作为典型页面进行开发，遵循多设备的差异性、一致性、灵活性和兼容性，帮助开发者掌握“一多”能力。

便捷生活类应用对垂类内的核心功能进行了独特设计，以展示更多商品选择：

* 店铺页，多端适配不同形态的弹窗用以进行商品规格的选择，贴合用户交互习惯。

* 商品详情页，使用滑动伸缩方式展示商品图，突出商品样式，解决多端大图展示问题。
* 图文详情页，以多种形式实现“一多”布局并加入图片放大和沉浸式浏览的交互设计，让用户有更好的浏览体验。
* 视频详情页，模糊显示直播背景，统一页面主题，实现沉浸式观看。

当前系统的产品形态包括手机、折叠屏、平板。下文将围绕这些产品形态，从UX设计、架构设计、页面开发三个角度，给出符合“一多”应用的参考样例，介绍“一多”便捷生活应用的最佳实践。

* [UX设计](#section389361912304)章节介绍便捷生活应用的交互逻辑和设计要点，开发者可直接应用。
* [架构设计](#section161011524314)章节建议“一多”应用采用结构清晰的三层目录。
* [页面开发](#section380651612378)章节将页面划分为不同区域，按开发顺序介绍如何使用自适应布局和响应式布局实现不同的UI效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/8bHtJCbER_OlY0p3LR2HZA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=B952B3928F9FD436A7A1C73B556F8CB617D641A5156D49838734321B32024CAD)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](/docs/dev/app-dev/application-framework/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## UX设计

便捷生活类的多设备响应式设计指南，参见文章[便捷生活类](/docs/design/app-design-practices/convenient-life)。

## 架构设计

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，构建清晰、高效、可扩展的设计架构。更多详情信息请参考[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)的逻辑设计。

## 页面开发

本章介绍便捷生活应用中如何使用“一多”的布局能力，完成页面层级的一套代码、多端适配。下文将从不同页面展开，介绍每个页面区域使用到具体的布局能力，帮助开发者从0到1进行便捷生活应用的开发。

###布局能力

本节介绍不同页面的具体布局能力，帮助开发者进行便捷生活应用的开发。

**首页**

首页包含入口图标和商品卡片等页面跳转入口及商品推荐信息，帮助用户浏览和挑选商品。观察首页在不同设备上的UX设计图，可以进行以下设计：

* 将首页划分为5个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 首页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/pbHwb4yeQwiLzX6ZBCNjYw/zh-cn_image_0000002193851384.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=8849FDFD750956BB731F0EF7D299121B2B08809A418908B15D2FACE280182930 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/KUzJfBIOSruPpxAa_Wpu9g/zh-cn_image_0000002193851504.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=040CDD91C16C646A66E673C210063D58FAF4F938243C0C117656DA9900001434 "点击放大") |  |

  首页的5个基础区域介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，在lg断点采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 2 | 菜单列表 | 使用[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件，借助栅格组件能力监听断点变化改变列数，设置aspectRatio属性实现缩放能力。 |
  | 3 | 秒杀列表 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现延伸能力。 |
  | 4 | 商品列表 | 使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现一列到多列的切换。在sm断点下依赖断点控制设置WaterFlow的columnsTemplate属性为2，在md断点下设置columnsTemplate为3，在lg断点下设置columnsTemplate为4。具体实现开发者可以参考[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。 |
  | 5 | 菜单导航栏 | 借助[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化改变位置。 |

**美食列表**

美食列表页显示推荐美食。在大屏设备上，通过增加列数来优化布局，从而提升用户获取信息的效率。观察美食列表页在不同设备上的UX设计图，可以采取以下设计策略：

* 将美食列表页划分为3个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 美食列表页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/Ky_uMOhqRLeGAFLsUprskw/zh-cn_image_0000002194011128.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=2FBB3CF540397226EF3B6E42359944965AD2AF689CF0B4436AB020D1717940AF "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/IfnBWJpwTfaTVaZ-OBHEvw/zh-cn_image_0000002229451305.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=72F140CEE1ECE16FE817004133D69A513DBDD30C1EA7CB3FFCED525A80E6D0EE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/CyN7Ep4GRXqVgHlA5h3M5A/zh-cn_image_0000002193851516.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=3DEBB1849A755133AC2300D5D12E0145F93AE43DE83BA3011FBF157947EF2C50 "点击放大") |

  美食列表页的3个基础区域介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，在lg断点采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)填充中间空白区域。 |
  | 2 | 菜单列表 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现延伸能力。 |
  | 3 | 美食列表 | 响应式布局的[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)布局，设置aspectRatio属性实现缩放能力。 |

**店铺页**

店铺页展示店铺信息和所有商品，侧边栏支持快速切换。用户可以选择商品规格，弹窗以不同形态显示，贴合操作习惯。观察店铺页在不同设备上的 UX 设计图，可以进行如下设计：

* 将店铺页划分为4个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 店铺页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/lm9_CdIfRQy8odRxYZbV8Q/zh-cn_image_0000002193851508.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=F1A1D761D881C8A24742F395ECCA2B550A56EEEF8293CF3985FDA42A9DD291C6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/6E8GqEvZRr29jS9HfKCqRw/zh-cn_image_0000002193851440.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=52A9F888AA70A628C51ABD8E05FA7C3B755CE03A85A49718B51C8B0ACD9F9D88 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/wii87OOLSnCbuxtgw0kWlA/zh-cn_image_0000002194011060.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=CF952D609DA8C9E1F80430B566BDEAA827DD95001111DF0E6B1CBAFB8A42CECC "点击放大") |
  | 店铺页-侧边栏 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/BUPQnL7RSIeHgVCpRAKoGA/zh-cn_image_0000002229336785.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=65DCF799B03BE79FE7925138EB7463E58D7CAEAA518421B1BB78FFBE1FA45382 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/vdo6eFSASM-d4G-yR-dMGg/zh-cn_image_0000002193851544.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=7EED4469565E4E5C313690633375F0789565841BBB6A7947AACE3499A33F2110 "点击放大") |
  | 店铺页-选规格 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/hFYnL7pfQTyePBTQGiuC3A/zh-cn_image_0000002229336777.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=32475C3663D1E08B025CE7A4D9C52ABF0A1623B1F0225CB11F824E8B3D6F029C "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/ojXoVDtWTNWVITyG0CL66g/zh-cn_image_0000002193851400.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=1E6B6C70C4763E25A94CA1214DEA2199088BC10D7B76D0472A66FA2985B239DE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/cqICX14QQk-L6F46CCbzPQ/zh-cn_image_0000002229336937.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=F0CF6D0DB9780029431005C29F580525987B827AA2FEA44848FEBD75CD4F29C3 "点击放大") |

  店铺页的4个基础区域介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 店铺信息展示区 | 在父元素上使用[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)组件实现挪移布局和visibility属性实现样式切换。 |
  | 2 | 菜单列表 | 使用[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)组件嵌套[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件实现顶部页签嵌套列表。 |
  | 3 | 购物车 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，在lg断点采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 4 | 选规格弹窗 | 使用[BindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)属性和[PopUp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)属性实现不同设备上的弹窗显示。 |
* 店铺信息展示区

  使用Flex属性的direction属性根据断点切换上下或左右布局。使用visibility属性根据断点切换显隐。

  ```
  Flex({
    direction: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && !this.ifShowSides ?
    FlexDirection.Row : FlexDirection.Column,
    justifyContent: FlexAlign.Start
  }) {
    ShopHeader()
      .visibility(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG || this.ifShowSides ?
      Visibility.Visible : Visibility.None)
    ShopSideBar()
      .width(CommonConstants.THIRTY_SEVEN_PERCENT)
      .flexShrink(0)
      .visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && !this.ifShowSides ?
      Visibility.Visible : Visibility.None)
    ShopOrderList()
      .height(CommonConstants.FULL_PERCENT)
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/pages/ShopDisplay.ets#L47-L111" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShopDisplay.ets</a></div>

* 菜单列表

  使用Tabs嵌套Scroll组件实现菜单页签切换。

  ```
  Tabs({ controller: this.topTabsController }) {
    ForEach(this.tabsList, () => {
      TabContent() {
        ShopMenu().width(CommonConstants.FULL_PERCENT)
      }
    })
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/view/ShopOrderList.ets#L72-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShopOrderList.ets</a></div>


  ```
  Row() {
    Column() {
      // ...
    }
    // ...
    Scroll(this.scroller) {
      Column() {
        // ...
      }
    }
    // ...
    .nestedScroll({ scrollForward: NestedScrollMode.PARENT_FIRST, scrollBackward: NestedScrollMode.SELF_FIRST })
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/view/ShopMenu.ets#L38-L119" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShopMenu.ets</a></div>

* 选规格弹窗

  在sm和md时使用bindSheet（半模态转场）组件实现。在lg规格屏幕使用PopUp实现跟手弹窗。

  ```
  Text($r('app.string.select_specification'))
  // ...
    .onClick(() => {
      if (this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG) {
        this.showPop = true;
      } else {
        this.showPopUp = true;
        this.showPopUpChange = true;
      }
    })
    .bindSheet($$this.showPop, this.popBuilder(), {
      height: SheetSize.FIT_CONTENT,
      backgroundColor: Color.White,
      title: {
        title: $r('app.string.select_specification')
      },
      maskColor: $r('app.color.forty_black')
    })
    .bindPopup(this.showPopUp, {
      builder: this.popBuilder,
      placement: Placement.Left,
      width: $r('app.float.popup_width'),
      mask: { color: $r('app.color.forty_black') },
      onStateChange: (e) => {
        if (!e.isVisible) {
          this.showPopUp = false;
        }
      }
    })
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/view/ShopDish.ets#L101-L143" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ShopDish.ets</a></div>


**商品详情**

商品详情页展示商品信息，加入上下滑动查看完整商品缩略图的交互设计，使商品全貌展现更直观。侧边栏可查看商品，交互更便捷。观察商品详情页在不同设备上的UX设计图，可以进行以下设计：

* 将商品详情页划分为3个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 商品详情页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/z5lCIVLBQE6mLOixnTxnLA/zh-cn_image_0000002193851500.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=E1D56D58671A80B2F78F17E7C7EB4270C8373E88DF7653B2C8FF2C82F0CDB363 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/PAeonuVlQbOdP603G2d-7g/zh-cn_image_0000002229451365.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=A6C9B4EB99A4ED610929ABA5872CE02A3879030E635E616F01A5F79F5B4FFCA3 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/oVrzYddrQeWLnM_00vpbGg/zh-cn_image_0000002194010996.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=2AE5010270C157141CAE32614C99361AF9B337F21F2284AE66384706ACE52EEA "点击放大") |
  | 商品详情页-侧边栏 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/jVrGE747SaOyn7hv3dZEYA/zh-cn_image_0000002194010948.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=FF34434059A075472BA72CE883F3945A665316D221D9D3D4613A55FCC3BEF294 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/hFEH9K1ySea2byqvcE1eUw/zh-cn_image_0000002229336941.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=649F8A1BEE752957F9A5B00E27417B48ED12B616060B1A56D99F2F50C0BF13B5 "点击放大") |

  商品详情页包含3个基础区域，具体介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 商品信息展示区 | 绑定onScrollFrameBegin()监听滑动，改变图片高度，实现上下滑动查看缩略图的交互效果。 |
  | 2 | 商品信息区 | [Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)组件实现，内部使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 3 | 购物车 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
* 效果图-交互动画（上下滑动查看完整缩略图）

  绑定onScrollFrameBegin()监听滑动，以改变图片高度：

  ```
  @State ifPictureExpansion: Boolean = false;
  @State imageHeightExtension: number = 0;
  @State imageHeightFold: number = 0;
  @State imageHeight: number = 0;
  // ...
  build() {
    NavDestination() {
      Scroll(this.informationScroller) {
        GridRow({
          columns: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && !this.ifShowSides ?
          BreakpointConstants.GRID_ROW_COLUMNS[2] : 1
        }) {
          GridCol({
            span: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && !this.ifShowSides ?
            BreakpointConstants.GRID_COLUMN_SPANS[7] : 1
          }) {
            if (this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG || this.ifShowSides) {
              DishHead({
                ifPictureExpansion: this.ifPictureExpansion,
                imageHeightExtension: this.imageHeightExtension,
                imageHeightFold: this.imageHeightFold,
                imageHeight: this.imageHeight
              })
            } else {
              DishSideBar()
            }
          }

          // ...
        }
      }
      // ...
      .onScrollFrameBegin((offset: number, state: ScrollState) => {
        if (!this.ifPictureExpansion && offset < 0) {
          this.imageHeight = this.imageHeightExtension;
          this.ifPictureExpansion = true;
          return { offsetRemain: 0 };
        } else if (this.ifPictureExpansion && offset > 0) {
          this.imageHeight = this.imageHeightFold;
          this.ifPictureExpansion = false;
          return { offsetRemain: 0 };
        } else {
          return { offsetRemain: offset };
        }
      })
    }
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/pages/DishDetails.ets#L29-L118" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DishDetails.ets</a></div>


**微详情页**

微详情页显示推荐商品信息，不同设备上列数不同，以增加信息量。观察折叠屏上的UX设计图，可进行以下设计：

* 效果图如下：

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 微详情页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/hRH39MsgTD2LDRfAMIHwRQ/zh-cn_image_0000002193851452.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=D6289EF7B808F8960E91D1BEC94D5B76509DF6B444D5F6700A39A6E5742C9554 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/oNd42mDyQgakvRtY33IT7A/zh-cn_image_0000002194011044.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=A223C23ECCA2FCCC9FBB833F23F0F947CF80844C38B1D10A58884B4C144B1C3B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/7bvvIcNmSomyELOBuOki7A/zh-cn_image_0000002229451421.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=11516E710C1F995BB94180298240E169AFF762BB6642AD61A474EDFA6DD7E80C "点击放大") |

| 简介 | 实现方案 |
| --- | --- |
| 微详情页 | 使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现一列到多列的切换。在sm断点下依赖断点控制设置WaterFlow的columnsTemplate属性为1，在md断点下设置columnsTemplate为2，在lg断点下设置columnsTemplate为3。具体实现开发者可以参考：[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。 |

**电影列表页**

电影列表页展示推荐的电影信息，为LG规格的屏幕提供了三种设计范式，开发者可自行选择参考。观察电影列表页在不同设备上的UX设计图，可以进行如下设计：

* 将电影列表页划分为3个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 电影列表页-范式1 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/pXfCuYUzQgi0i5604EPAqw/zh-cn_image_0000002229451325.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=1716A0AA4A0FA565A7899E5A18F53E61D27393A8A95E2DB43EB3E87233135111 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/DC2GIC9wQIqDy2-hHSEESw/zh-cn_image_0000002229336909.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=40F925541134746C85EFC91EEDD530EA45C55A0E52AB5470B85D9B198A04826D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/yCKDQMMfTnOJ2bwi_cmLyw/zh-cn_image_0000002229451373.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=E9C452C97674C22EB40715C52DBAFF5AA382A93CC2E867700035E2EFDE3DE223 "点击放大") |
  | 电影列表页-范式2 |  |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/VV8xrFs6RxCQc_GdHJC5aA/zh-cn_image_0000002194011024.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=08303629787A1983B5A9D42F6690D1B047C60F30C7AD288B96080A69E40C1748 "点击放大") |
  | 电影列表页-范式3 |  |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/rS8HvlD2RTy01ptDkhjBgg/zh-cn_image_0000002193851488.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=22340FD808E43EB4180F9B91296E27E42B8F46BFAB1754CAE134B7308B1BB19F "点击放大") |

  电影列表页的3个基础区域介绍及实现方案如下表所示

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 2 | 即将上映 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现延伸能力，通过listDirection调整方向。 |
  | 3 | 正在热映 | 使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现一列到多列的切换。在sm断点下依赖断点控制设置WaterFlow的columnsTemplate属性为1，在md断点下设置columnsTemplate为2，在lg断点下设置columnsTemplate为3。具体实现开发者可以参考[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。 |

**电影简介页**

电影简介页展示电影的具体信息，在LG规格的屏幕上采用左右布局，充分利用空间。观察电影简介页在不同设备上的UX设计图，可进行如下设计：

* 将电影简介页划分为3个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 电影简介页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/ReOIfNFJQfaDKs_Fhfw6kQ/zh-cn_image_0000002193851460.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=AD87426F11DC1669363E2FBD3F941A79D034DA1BA585D8775ABEB21FC8E011B3 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/pP0VQDFWR0exF1-ksfaV4Q/zh-cn_image_0000002229336925.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=8BFA5A8BCEF0B477D59AC8D31283DA9CE8987D2683603B63AA9AEE6950548FCE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/u27LhydkRU2nEfKBS8tZqw/zh-cn_image_0000002194011032.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=80AB62A00192FCACF908DA444809977EDFDF04A6D5632CB23984CE591628B36E "点击放大") |

  电影简介页的3个基础区域介绍及实现方案如表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸。 |
  | 2 | 电影信息 | 利用响应式布局的栅格布局，使用[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件实现挪移布局，设置aspectRatio属性实现缩放能力。 |
  | 3 | 电影详情区 | 使用tabs嵌套column，不同模块标题使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。同多设备长视频界面 搜索发现，内容使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现延伸能力。 |

**选影院页**

选影院页展示影院列表供用户选择，并提供电影海报预览。观察选影院页在不同设备上的UX设计图，可以进行以下设计：

* 将选影院页划分为3个区域。效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 选影院页-范式1 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/LopwbEOfTDy73-20DtlIEw/zh-cn_image_0000002229451277.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=254956E56AC67C81C58C2832A739115BBF4F2FB75D7DC6C6237ECC88CB6970AD "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/smCZu543T3GXixwIJ9WitA/zh-cn_image_0000002229336733.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=F766E5226D1AF19C12771405F5EA9AA668750279BC14BF456EFBA7EB64E3E80D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/x8Y6tSFZSoWx-vEKxvD9EQ/zh-cn_image_0000002194011112.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=84D997625DE093999E1D1215B8ED555628673B42074659B7747AAAC38E407E1F "点击放大") |

  选影院页面的3个基础区域介绍及实现方案见下表：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸。 |
  | 2 | 电影海报 | [Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件，指定displayCount属性实现占比能力，设置aspectRatio属性实现缩放能力。 |
  | 3 | 电影列表 | 使用[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)组件+[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件，实现重复布局。 |

**首页-推荐页**

首页-推荐页展示推荐的图文简略信息，不同设备上以不同列数呈现，增加信息量。观察首页-推荐页在不同设备上的UX设计图，可以进行如下设计：

* 将首页-推荐页划分为3个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 首页-推荐页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/Dr9-PL1hQZ-P4dDOstkrbg/zh-cn_image_0000002193851448.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=5C6571331B9F0063F771F7A1867C099386A993E4E2EB8B95B17FAC10EF3AB939 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/mf4ZqgcCRdGE10NI9dYM4A/zh-cn_image_0000002194010952.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=7D53E743622CAEE3F9F5D8382D0D071B660C7E805B16FED97BFCD38A0024C8BD "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/o9O4RS9xTweN_x-AyDa3MA/zh-cn_image_0000002193851412.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=C39376545CE3624A1A4550D5C6BFF18F979286BFB1C7A1CE126586B64E5587E3 "点击放大") |

  推荐页的3个基础区域及其实现方案见下表：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 2 | 推荐展示区 | 使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现一列到多列的切换。在sm断点下依赖断点控制设置WaterFlow的columnsTemplate属性为2，在md断点下设置columnsTemplate为3，在lg断点下设置columnsTemplate为4。具体实现开发者可以参考[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。 |
  | 3 | 菜单导航栏 | 通过监听断点的变化来调整菜单导航栏的位置。 |

  **首页-关注页**

  首页-关注页展示用户的关注列表及其最新发布的图文信息。提供了三种范式，开发者可自行选择参考。观察首页-关注页在不同设备上的UX设计图，可以进行如下设计：

  + 将首页-关注页划分为4个区域，效果图如下：

    | 示意图 | sm | md | lg |
    | --- | --- | --- | --- |
    | 首页-关注页-范式1 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/4xM3QXJAQFiAs2bIkFPCmw/zh-cn_image_0000002229336821.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=0282748883792974B63BE877F733334173B2C27E1B557AA8EE2964543F410C3F "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/VCmbPx9oQhedwWnDdmPjmA/zh-cn_image_0000002193851496.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=8C59EE7B632E0BA44E51BBE2D6646176063DB5CD4D34E0F856F7958B39839226 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/q4-Z7bHmReiZluxffX8Wkw/zh-cn_image_0000002229336793.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=E943C435186F0D04C5FDBDDBE7A28E156EED941CE61C80B53381FCC2C129B029 "点击放大") |
    | 首页-关注页-范式2 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/NCtkNY31SquyzCbkVok6vA/zh-cn_image_0000002193851444.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=57ED8478EF4A60CDBFBBB8B79D96F9BF00A7240BBD031D6B54E19AC4F0EFC48E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/kn2Ro1spR9W7j0HIsB4ovg/zh-cn_image_0000002193851372.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=FD749EF9DD871ECE610EDBE95647C06F4596E54856EA09A4E5DFC9A72F6A1A34 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/YHSPmNS9TxOjOESwd4Pf7g/zh-cn_image_0000002229336781.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=695CDD33248C749F9A1208552CA725173A4CBCB7D3EA89EA2889C18766833510 "点击放大") |
    | 首页-关注页-范式3 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/WWpKNjmlRh6m7LSBtU8fvw/zh-cn_image_0000002229451261.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=6F93ECF265F0E3FA5DBA7E25AB2476ED0F2BE0FDF9C5A48B8794D17B7455CC71 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/0Hi6Vxo3Q9CNgcpYkHCj9w/zh-cn_image_0000002229336765.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=26FA7A51259FF5EECB4C9E168E414670FD4112B698922E0C6FB68A2AE8ADFB55 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/G7fTjrqzQ224GYDsB23Z1g/zh-cn_image_0000002194011088.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=F45F1F6AA1EDD754A5B81F97231384846CA6E2682D407048847CA79057951A17 "点击放大") |

    首页的4个基础区域介绍及实现方案见下表：

    | 编号 | 简介 | 实现方案 |
    | --- | --- | --- |
    | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
    | 2 | 关注列表 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现延伸能力。 |
    | 3 | 关注详情 | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现重复布局。 |
    | 4 | 菜单导航栏 | 通过监听断点的变化来调整菜单导航栏的位置。 |

**短视频详情页**

短视频详情页提供视频播放及相关功能按钮，支持边看视频边看评论的页面设计。观察短视频页在不同设备上的UX设计图，设计如下：

* 将短视频页划分为4个区域，具体效果如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 短视频详情页-范例1 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/FeYiieTbRMq2uxRHo-dBAQ/zh-cn_image_0000002229451357.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=7A8D669EAC959A32DFA77465DE8E6CCEB2018DCAD504260C4E8435B753C8CB50 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/m0CFYQlfSdaE9MuPPlLzdw/zh-cn_image_0000002193851472.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=743CBFBFA32C97548FD27BB81BBBA5E216BAE59C7CD36561CA3A605713D8B023 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/mo4-c18WQ5eP_FHkf28yRw/zh-cn_image_0000002193851464.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=BB3DEB41F1B97ADCBC9D3488B123FD28920AABCDEA0D024FA5C3C21941F09A91 "点击放大") |
  | 短视频详情页-范例2 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/84eVyauTTVe9ZtscJQVtkg/zh-cn_image_0000002194011092.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=92C73225963ED1BDDD6364EAF435AD76CB05A6198C8F4FB349FD6A7E33677A26 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/JJzodC6XQB6zyUDK9vO5Dw/zh-cn_image_0000002229451273.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=7332365D0DCC931E97DAF37E8A1240499C8C770704892BE6B21399B21302F468 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/0Md3Kq9wTLSrD_5k5yAMcg/zh-cn_image_0000002194011140.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=68B242060E12628F6F4B471651BE4CCE131F7618826B191D0150187B35727D21 "点击放大") |
  | 侧边栏-评论 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/MXiNMxNLQtuR0vVkqD0n8w/zh-cn_image_0000002229451361.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=5597F1350023F2D9F8DB12AF56254BD9247F496E918A9DBC543ED9AC92A4F26B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/6_tMUjRrTbG8nDgXx90ooQ/zh-cn_image_0000002193851364.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=4DE58EC2094B7E43B23B7318419C15E79E1001CD3E2D10AE51C1EBE2BCD6FEB4 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/YOGkTdExS3O4FhBJa5Pz6w/zh-cn_image_0000002229451317.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=7473348BE3E6996EBF09F740EBFECFC78E99E51E6462FBF30F9C193D2BC5C893 "点击放大") |
  | 短视频详情页-标签页信息栏 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/23STxdUEQTOqR_C-_uJGqA/zh-cn_image_0000002229336745.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=8002514E21627CFE7FAE5027522396DC90C379BB0A2289D5C09A8254EE50EFBC "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/QicWGi--TSW9O5E93v0qoA/zh-cn_image_0000002229451297.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=D2FD851FB4CB7CE851EA6A658D8F16CFD23BEF61297BC1A5BA2A05A297940D37 "点击放大") |

  短视频详情页包含4个基础区域，具体介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 短视频展示区 | 使用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)组件实现Video组件和Text组件、Image组件的堆叠效果，其中Video组件使用.align(Alignment.Center)实现居中。 |
  | 2 | 菜单导航栏 | 通过监听断点的变化来调整菜单导航栏的位置。 |
  | 3 | 视频评论区 | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现重复布局，在sm规格使用bindSheet实现半模态，在md和lg规格下使用[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)组件呈左右布局。 |
  | 4 | 标签页信息栏 | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现重复布局。 |

**直播页**

直播页播放直播并展示用户评论，背景使用模糊图片以增强观看体验。观察直播页在不同设备上的UX设计图，可以进行以下设计：

* 直播页划分为3个区域，具体效果如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 直播页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/0KL5oPCOSMmTlLmibirqUw/zh-cn_image_0000002229451309.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=22F5AF256FA91CE379235FAE3720FB919156B077A2D815863C25C2751B27A3C8 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/A0vTMJCvQoKKXnmJpKXD4Q/zh-cn_image_0000002193851468.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=6685C7E7871E50B3FAEC4BA1DFDEFF6D8A94511C5E27A1DEB89E426102B5EF12 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/0MkW_GcqQQWrUO5vyio83g/zh-cn_image_0000002229336805.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=1050ED5F2085CBAC4CE8DE08E197AC4D614469F703EBACEDE659AA7E02575C46 "点击放大") |

  直播页的基础区域介绍及实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 直播区 | 使用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)容器组件实现Video组件和Text组件、Image组件的堆叠效果，其中Video组件使用.align(Alignment.Center)实现居中，背景模糊效果参考下方代码。 |
  | 2 | 评论区 | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现重复布局。 |
  | 3 | 评论输入区域 | 使用[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)组件实现。 |

* 直播区-背景模糊效果

  ```
  SideBarContainer(SideBarContainerType.Embed) {
    LivingComments()
      .width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ?
      CommonConstants.FORTY_PERCENT_STRING : CommonConstants.THIRTY_SEVEN_PERCENT)
    LivingHome()
  }
  .width(CommonConstants.FULL_PERCENT)
  .backgroundImage($r('app.media.fm2_img'))
  .backgroundBlurStyle(BlurStyle.BACKGROUND_THICK, {
    colorMode: ThemeColorMode.DARK,
    adaptiveColor: AdaptiveColor.DEFAULT
  })
  .backgroundImageSize({
    width: CommonConstants.FULL_PERCENT,
    height: CommonConstants.FULL_PERCENT
  })
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/pages/Living.ets#L33-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Living.ets</a></div>


**图文详情页**

图文详情页展示商品具体信息。观察不同设备上的UX设计图，可以进行如下设计：

* 将图文详情页划分为7个区域，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 图文详情页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/S5rVbWrLTLeKN70l31jPow/zh-cn_image_0000002194010956.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=A4499CFD9F16287C061F0C53D414B4410ACA8D4086626A4E94FF4A2C4891EBB4 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/3dga-0qzQ1uVvvzEaCngHA/zh-cn_image_0000002193851528.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=B9974FDAD45402682D2D4AE518FF92D6B7CAF8D090954E713D4FCC53AA76352A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/U03r8cRmRRyz8A9rVDQ-TA/zh-cn_image_0000002229336737.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=CBBF03ACB0EE5ADD2329C0884E2AEC7C00963C5895FDB3F93FFB76141F32E874 "点击放大") |
  | 图文详情页-上图下文 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/JinyBjdTSHytS-LN6BfEOg/zh-cn_image_0000002229451289.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=EE3677DF9552F968305C9A252287C9E542C90072C0C57D9615C4DDE2502D069C "点击放大") |  |
  | 侧边栏-商品详情 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/LfMLSsLuTEuYGrPTHejUkQ/zh-cn_image_0000002194011064.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=635CCA78BAC84CE6C5C63D52411C1349D392F8F3EAE9C37DDC70AE284069C663 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/i1HfVm1eRsCxLBEwU1TEfQ/zh-cn_image_0000002194011040.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=34A971B4185CC5E5A571AD53E1A5FCDDFC20D94E9DD97DB037D9DBB1B5F341DE "点击放大") |
  | 侧边栏-个人主页 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/azNBbF9MS7W8ARXbmxEUtA/zh-cn_image_0000002229451337.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=19F2D82938A28D9B64A62D933013A2E2FD71AACBF0888E7CEAFE3BA9C1F54BB7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/AO3HxuVVT8-CWYngGgKwCQ/zh-cn_image_0000002229451257.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=EE53EEEA4543EBEB0BE0981CD0DB511AE717412BC6F5A3E97078C09E3A88C1D3 "点击放大") |

  图文详情页的7个基础区域及其实现方案如下表所示：

  | 编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸，同时采用[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)组件填充中间空白区域。 |
  | 2 | 图片展示区 | [Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件，设置aspectRatio属性实现缩放能力。 |
  | 3 | 文章详情 | 使用column组件展示文章详情。 |
  | 4 | 底部功能区 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)结合断点控制元素尺寸。 |
  | 5 | 评论区 | 使用TextInput组件实现。 |
  | 6 | 商品详情 | 使用column组件，设置aspectRatio属性实现缩放能力。 |
  | 7 | 个人主页 | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现重复布局。 |
* 上图下文有三种范式，可以通过调节swiper展示

  | 范式一 | 范式二 | 范式三 |
  | --- | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/pI2BFWqSSPyWoCGQLxVqEg/zh-cn_image_0000002229451405.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=373057B69AF337C4A70B4B70ABF92743FEA5D886DBE88225AAA1349DFED9C063 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/1Q32HRqxQZ-xvStKWG0XaQ/zh-cn_image_0000002229451249.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=423B4D2F71A4F13D766D4D159B5E3B2EF6D07F351532368D24ABC22A3989CB16 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/zgHmN6KVT_q-F0Eaw6mapg/zh-cn_image_0000002194011012.png?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=886CC8A4EA005F0464B6BE170F3BBAD40AE86A99CC94F6C6A1A3748F2BB5542C "点击放大") |
* 交互效果

  | 点击缩放 | 双指滑动缩放 | 上滑沉浸式浏览 |
  | --- | --- | --- |
  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/0c0f8-mKSRKbyEMYgazKZg/zh-cn_image_0000002194011056.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=BA490905BD4F1CA110B2CE79D409E8F31E75242E542876DE7FB1E26B432AFE52) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/PzHQVp2bTN6GofLaYPSpAA/zh-cn_image_0000002229336921.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=B503F86AD2D1B07169C3E19F69E41944F1C3349440F076884508EB4085B92D82) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/Qrz_ymkoSU-P78e8dsUSpA/zh-cn_image_0000002193851512.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074039Z&HW-CC-Expire=86400&HW-CC-Sign=14E1B0A81FD55A8D296DCE3B365CA6DFF0AB247CD0BD4FA680FB027D4323E3B3) |

  ```
  Image(item)
  // ...
    .onClick(() => {
      this.getUIContext().animateTo({
        duration: CommonConstants.ANIMATE_DURATION,
        curve: Curve.Friction
      }, () => {
        this.isFullScreen = true;
        this.fullImageIndex = index;
      });
    })
    .gesture(
      PinchGesture({ fingers: 2 })
        .onActionUpdate((event: GestureEvent) => {
          this.getUIContext().animateTo({
            duration: CommonConstants.ANIMATE_DURATION,
            curve: Curve.Friction
          }, () => {
            this.isFullScreen = true;
            this.fullImageIndex = index;
          });
        })
    )
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-convenient-life/blob/master/entry/src/main/ets/view/GraphicTextSwiper.ets#L48-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：GraphicTextSwiper.ets</a></div>


## 示例代码

* [多设备便捷生活界面](https://gitcode.com/harmonyos_samples/multi-convenient-life)
