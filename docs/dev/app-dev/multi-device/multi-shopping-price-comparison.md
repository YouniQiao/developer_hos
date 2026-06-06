---
title: "多设备购物比价界面"
displayed_sidebar: appDevSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison
format: md
---

# 多设备购物比价界面

## 概述

本文从目前流行的垂类市场中，选择购物行业应用作为典型案例详细介绍“一多”在实际开发中的应用。购物行业应用的核心功能为浏览商品、商品比价和直播购等。根据这些核心功能，本文选择首页、商品分类页、商品详情页、商品支付页、咨询客服页、直播间页等作为典型页面进行开发，遵从多设备的“差异性”、“一致性”、“灵活性”和“兼容性”，能够让开发者快速高效地掌握“一多”能力并实现购物比价应用的相关功能。

购物类应用为了向用户展示更多的商品选择，对垂类内的核心功能进行了独特设计：

* [商品分类页](#section1048762514385)主要用于快速查找目标商品，采用分栏的布局提升查找效率。
* [商品支付页](#section1965713469388)，为避免大面积页面跳转和遮挡商品的关键信息，采用浅层窗口-半模态的方式进行支付。

* 在查看[商品详情](#section8305102524814)或[直播](#section972591693910)时，通过侧边面板显示其他的辅助信息，提高浏览效率。
* [直播间页](#section838561613490)推荐的商品信息，在多端基于设备屏幕尺寸进行响应式适配，避让直播的关键信息。
* 退出直播间页时，使用画中画小窗口观看直播。

下文将围绕手机、折叠屏和平板设备，从UX设计、架构设计和页面开发三个角度，介绍“一多”购物比价应用的最佳实践，并提供符合“一多”的参考样例。

* [UX设计](#section23951509373)章节介绍购物比价应用的交互逻辑和通用的设计要点，对于类似的设计要点，开发者可以直接拿来使用。
* [架构设计](#section161011524314)章节推荐“一多”应用使用目录结构更加清晰的三层架构。
* [页面开发](#section380651612378)章节会将页面划分为不同区域，按照区域的开发顺序，介绍如何使用自适应布局和响应式布局实现不同的UI效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/Q6h7pN95QF6C6t_umZEYoA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=F37B1552F47D1DC7F9B3C4B2267D5E70BF529216DB56B14659C3AF56069B43AF)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## UX设计

电商购物类的多设备响应式设计指南，[点击访问](https://developer.huawei.com/consumer/cn/doc/design-guides/responsive-design-examples5-0000001930419478)。

## 架构设计

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，为开发者提供了清晰、高效、可扩展的设计架构。详情请参阅[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)的逻辑设计。

## 页面开发

本章介绍购物比价应用中如何使用“一多”布局能力，实现页面层级的单页面和多端适配。下文将详细说明每个页面区域的具体布局能力，帮助开发者从零开始进行购物比价应用的开发。

###首页

首页包含入口图标和商品卡片等详细的商品信息，有助于满足用户浏览和挑选商品的核心需求。查看首页在不同设备上的UX设计图，可以进行以下设计：

* 将首页划分为7个区域，效果图如下：

  |  | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/g3PB-XvcR6efevXlglEqIw/zh-cn_image_0000002193850600.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=30019A748BA9ABAEFA704D0EC436B9DB0111654AA3BB2982A92EA29E5CF8203D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/rLkjw8PATlebhHkAk8vGBQ/zh-cn_image_0000002194010172.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=C2DD5D108E083A7D2017432CDF7C33176672C1935A1A0CE7F94D741A2B05D922 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/1SvsS7eAS-G5hfCaD8ruFQ/zh-cn_image_0000002229336053.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=5B0A4E6FE2C9D0EED2E8C66771E913B0BDD4BE76D07F85A7715112170D78439C "点击放大") |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/W0_-siI-TjGjx0RD2GDe6Q/zh-cn_image_0000002194010272.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=569F2301A39AD2340849102CADFF5BB907DB5B2F813C2A3BC79A2DD340D4DB1C "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/gN-c5tJcSmi5dBenvsjNDQ/zh-cn_image_0000002229335989.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=D77AC5401D773E5A338E671777A869303E48DB8A7358A414C7C3C2AA246C4001 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/3hoc3ckHTfe7LCSVlGG5dw/zh-cn_image_0000002229450489.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=2FB62AAB28C0C491479AD4E04EEA30C1472FA950584AA850F4742F6AE97D5510 "点击放大") |
* 首页区域2在小设备上显示为两行，在中型和大型设备上显示为单行。断点变化时，显示效果会自动切换。
* 首页区域3使用自适应布局，根据设备尺寸自动延伸或隐藏；区域4和5使用自适应布局，实现占比调整和均分。
* 首页区域1和5-7使用响应式布局的栅格断点系统，根据断点变化调整组件属性，实现相应的布局效果。

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 底部/侧边页签 | 借助[栅格](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section1061332817545)布局监听断点变化改变位置。 |
| 2 | 顶部页签及搜索框 | 栅格布局监听断点变化实现折行显示，[List组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
| 3 | 商品分类图标 | 通过List组件实现延伸能力。 |
| 4 | 商品卡片 | [Swiper组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)，指定displayCount属性实现占比能力，设置aspectRatio属性实现缩放能力。 |
| 5 | 福利专区 | [Row组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)的justifyContent属性设置为FlexAlign.SpaceBetween实现均分能力。 |
| 6 | 甄选推荐 | 响应式布局的栅格布局，设置aspectRatio属性实现缩放能力。 |
| 7 | 限时秒杀 | 响应式布局的栅格布局，设置aspectRatio属性实现缩放能力，同甄选推荐。 |

###商品分类页

商品分类页用于快速查找目标商品。观察不同设备上的UX设计图，进行如下设计：

* 将商品分类页划分为4个区域，效果图如下：

  |  | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/JzF9X5XDS-WXwAxYr-pP5g/zh-cn_image_0000002229450449.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=A0142659BE05C940F528B49257D86BF102D3E3796654AA3A306E0861D375D007 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/d5T9ocmkR_-z7fLPnq7ATA/zh-cn_image_0000002229336041.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=FA571C5E4B3D395D4B2460668B919EEC53976E14DCF14EA0A9AF3F9A7D72FFF7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/Oa8Er28RQq-iPrsLchWrjw/zh-cn_image_0000002194010256.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=A23033DF07D02482F82BDF34F21D0FDBD7FD7037A3B8CEB3785CCE8E5846902A "点击放大") |

商品分类页的4个基础区域介绍及实现方案如下表所示：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 顶部搜索框 | 在sm断点下占满行宽，在md、lg断点下设置justifyContent属性为End。 |
| 2 | 侧边导航 | [Navigation组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)实现，设置mode属性为Split分栏显示，使用navBarWidthRange约束不同断点下的固定导航栏宽度。 |
| 3 | 广告卡片 | [Swiper组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)设置displayCount在不同断点下为1、2、3，在md断点下设置nextMargin露出后边距，实现自适应布局的占比能力。 |
| 4 | 商品小图 | 使用[List组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)+[栅格](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section1061332817545)布局实现每行显示固定个数的商品图。 |

* 侧边导航

  使用Navigation组件实现分栏显示，设置mode为NavigationMode.Split，同时设置不同断点下导航栏的最小和最大宽度相同，以约束导航栏的固定宽度。

  ```
  Navigation(this.pageInfo) {
    // ...
  }
  .layoutWeight(1)
  // Setting the double column view of the navigation.
  .mode(NavigationMode.Split)
  // Initialize the width of the navigation bar.
  .navBarWidth(new BreakpointType('96vp', '144vp', '200vp').getValue(this.currentBreakpoint))
  // Set the minimum width and maximum width of the navigation bar under different breakpoints to be the same.
  .navBarWidthRange([new BreakpointType($r('app.float.classify_navigation_bar_width_sm'),
    $r('app.float.classify_navigation_bar_width_md'), $r('app.float.classify_navigation_bar_width_lg'))
    .getValue(this.currentBreakpoint), new BreakpointType($r('app.float.classify_navigation_bar_width_sm'),
    $r('app.float.classify_navigation_bar_width_md'), $r('app.float.classify_navigation_bar_width_lg'))
    .getValue(this.currentBreakpoint)])
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/home/src/main/ets/view/ClassifyContent.ets#L47-L100" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ClassifyContent.ets</a></div>


###购物袋页

购物袋页用于快速查看并支付待购买的商品，在大屏上通过右侧显示辅助信息以提高页面使用效率。观察购物袋页在不同设备上的UX设计图，可以进行如下设计：

* 将购物袋页划分为4个区域，效果图如下：

  |  | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/Pk3X_OUBSA-fdeoDgh6VXA/zh-cn_image_0000002229335965.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=080A973CFDE2B82728AA16FE2EFD42B26D3A0A3DF2AEBF271287B2DECAD50BD1 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/qiCoTc3aR3Okdq_xREYJxQ/zh-cn_image_0000002229335953.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=64AD4D9CE419A889D1E84EAFEEC59FEB07AB06590309CB8161A66E420D8C0CC0 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/OTtPycYSSXC-0NZb9PRVcQ/zh-cn_image_0000002229336005.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=E59349CB989A8F81C7B230FBA409810839A3AF2332BC2320191E2C0123A08894 "点击放大") |

购物袋页的4个基础区域介绍及实现方案见下表：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 顶部标题栏 | 剩余空间全部分配给中间空白区，用[Blank组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)实现自适应布局拉伸能力，同[首页顶部页签及搜索框](#section1976644133811)。 |
| 2 | 购物袋商品 | [List组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现。 |
| 3 | 结算工具栏 | 剩余空间全部分配给中间空白区，用Blank组件实现自适应布局拉伸能力，同顶部标题栏。 |
| 4 | 优惠明细 | 购物袋主区域与优惠明细辅助区域在Row组件中呈左右布局，sm和md断点下只显示购物袋主区域、隐藏优惠明细区域，lg断点下全部显示。 |

###商品详情页

商品详情页展示商品大图及详细信息。观察商品详情页在不同设备上的UX设计图，可以进行如下设计：

* 将商品详情页划分为4个区域，效果图如下：

  |  | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/-dLUrdepR_G4xBPIMizkAw/zh-cn_image_0000002229336049.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=5EAFBCBB460226AD06401DD42875EFA3BF8F38CF2A8CFAC727CAA339EB166866 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/3naf8g0CTx-dDfmCWNK0pw/zh-cn_image_0000002229336065.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=EBC0227D09143C526C84E7E47351134E4A57DE2883B2FA7A4790281E1E6F70BA "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/sfIqLhzWSs2L_qNHcDmsEw/zh-cn_image_0000002229450441.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=9F0D1B38CBA475FFA0088709290E59C5052EBC4A0FA4D7572F3AB3F13BE9B710 "点击放大") |

商品详情页的4个基础区域介绍及实现方案如下表所示：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 商品大图 | [Swiper组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)，指定displayCount属性实现延伸能力，设置aspectRatio属性实现缩放能力。 |
| 2 | 商品详细信息 | 商品大图区域与商品详细信息区域在sm和md断点下使用Column组件呈上下布局，在lg断点下使用Row组件呈左右布局，同[商品详情侧边面板页](#section8305102524814)。 |
| 3 | 购买工具栏 | 剩余空间按比例分配给加入购物袋与购买按钮，用layoutWeight属性实现自适应布局占比能力，同[首页顶部页签及搜索框](#section1976644133811)。 |
| 4 | 画中画 | 使用[PiPWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pipwindow)实现画中画功能，启动、停止小窗直播及控制视频播放。 |

商品详情页在大屏设备上提供分屏功能，满足用户同时查看两个商品详细参数进行比价的需求。分屏功能通过创建新的UIAbility并设置窗口显示为分屏模式实现。分屏后，左右屏幕的宽度比例为1:1。折叠屏上的效果图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/vWNNjb89TVu98uObIAUjtw/zh-cn_image_0000002194010156.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=F47CC1F8D50DD96E77A7060303E0DCBDC81383148EC66763CD67B44EF85B8C7E "点击放大")

创建新的UIAbility时，在phone目录下创建SecondAbility.ets文件，并注册与EntryAbility相同的UIAbility生命周期回调。下一步，在phone目录下的module.json5配置文件中，修改abilities属性以注册SecondAbility。具体可参考源码。启动分屏时，调用UIAbilityContext的StartAbility接口，设置窗口模式为分屏并启动SecondAbility。关闭分屏时，调用UIAbilityContext的terminateSelf接口。

```
Image(this.isSplitMode ? $r('app.media.icon_split') : $r('app.media.ic_mate_pad_2'))
  // ...
  .onClick(() => {
    if (!this.isSplitMode) {
      let want: Want = {
        bundleName: 'com.huawei.multishoppingpricecomparison',
        abilityName: 'SecondAbility'
      };
      let option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY };
      (this.context as common.UIAbilityContext).startAbility(want, option);
    } else {
      (this.context as common.UIAbilityContext).terminateSelf();
    }
  })
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/ProductDetail.ets#L88-L105" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ProductDetail.ets</a></div>


为了提升在大设备上的浏览效率，点击“全部评论”后，页面将采用三分栏布局展示右侧的全部评价页面，使用SideBarContainer组件实现。

效果图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/FvCSB0eUTjKLL4AQqHgEBA/zh-cn_image_0000002229335973.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=8F1DFB5D323F8D82E2FBB0EE0A165EDF9EDE44FF1D81F219745ED9371220E4F1 "点击放大")

```
SideBarContainer() {
  Column() {
    Image($r('app.media.icon_close_4'))
      // ...
    AllComments()
  }
  .alignItems(HorizontalAlign.End)
  .height('100%')
  .padding({
    top: deviceInfo.deviceType === '2in1' ? 0 : this.topRectHeight,
    left: '32vp',
    right: '32vp'
  })

  Row() {
    // ...
  }
  // ...
}
.showSideBar(this.isShowingSidebar)
.showControlButton(false)
.sideBarPosition(SideBarPosition.End)
.divider({
  strokeWidth: '1vp',
  color: ResourceUtil.getCommonDividerColor()
})
.minSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3)
.maxSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3)
.autoHide(false)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/ProductHome.ets#L52-L173" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ProductHome.ets</a></div>


* 为了方便浏览其他页面时继续观看直播内容，购物直播设计了画中画功能。点击直播间页的关闭按钮，返回上一页并以小窗模式显示直播内容。画中画功能的实现步骤如下：

  使用@ohos.PiPWindow模块的create接口创建画中画控制器，使用startPiP接口启动画中画，启动后返回上一页。其中画中画播放的视频内容需要使用XComponent+AVPlayer组件实现，读者可以自行查看源码。

  ```
  async startPip(navId: string, mXComponentController: XComponentController, context: Context, pageInfos: NavPathStack): Promise<void> {
    if (canIUse('SystemCapability.Window.SessionManager')) {
      if (!PiPWindow.isPiPEnabled()) {
        Logger.error(`picture in picture disabled for current OS`);
        return;
      }
      let config: PiPWindow.PiPConfiguration = {
        context: context,
        componentController: mXComponentController,
        // Navigation ID of the current page.
        navigationId: navId,
        templateType: PiPWindow.PiPTemplateType.VIDEO_LIVE
      };
      // Create a pip controller.
      PiPWindow.create(config).then((controller: PiPWindow.PiPController)=>{
        this.pipController = controller;
        // Initializing the pip controller.
        this.initPipController();
        // Enabling the pip function through the startPip interface.
        this.pipController.startPiP().then(() => {
          Logger.info(`Succeeded in starting pip.`);
          if (this.avPlayerUtil === undefined) {
            return;
          }
          this.avPlayerUtil.play();
          pageInfos.pop();
        }).catch((err: BusinessError) => {
          Logger.error(`Failed to start pip. Cause: ${err.code}, message: ${err.message}`);
        });
      }).catch((err: BusinessError) => {
        Logger.error(`Failed to create pip controller. Cause: ${err.code}, message: ${err.message}`);
      });
    }
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/commons/base/src/main/ets/utils/PipWindowUtil.ets#L51-L84" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：PipWindowUtil.ets</a></div>


  初始化画中画控制器时，注册画中画生命周期状态和直播控制事件的监听。

  ```
  initPipController(): void {
    if (!this.pipController) {
      return;
    }
    if (canIUse('SystemCapability.Window.SessionManager')) {
      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
        this.onStateChange(state, reason);
      });
      this.pipController.on('controlPanelActionEvent', (event: PiPWindow.PiPActionEventType) => {
        this.onActionEvent(event);
      });
    }
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/commons/base/src/main/ets/utils/PipWindowUtil.ets#L87-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：PipWindowUtil.ets</a></div>


  使用stopPiP接口关闭画中画。

  ```
  // Disable the pip function by calling stopPip.
  async stopPip(): Promise<void> {
    if (canIUse('SystemCapability.Window.SessionManager')) {
      if (this.pipController) {
        this.pipController.stopPiP().then(()=>{
          this.isShowingPip = false;
          Logger.info(`Succeeded in stopping pip.`);
          try {
            this.pipController?.off('stateChange');
            this.pipController?.off('controlPanelActionEvent');
          } catch (exception) {
            Logger.error('Failed to unregister callbacks. Code: ' + JSON.stringify(exception));
          }
        }).catch((err: BusinessError) => {
          Logger.error(`Failed to stop pip. Cause: ${err.code}, message: ${err.message}`);
        });
      }
    }
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/commons/base/src/main/ets/utils/PipWindowUtil.ets#L147-L165" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：PipWindowUtil.ets</a></div>


###商品详情侧边面板页

查看商品详情时，用户可能需要咨询客服或查看购物车。可以采用侧边面板显示客服对话等辅助信息，从而提升浏览效率，实现边看商品边聊天咨询的体验。

* 侧边面板咨询客服，效果图如下：

  |  | sm | md | lg |
  | --- | --- | --- | --- |
  | 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/X4qAEO0SRzWSoWm4S3EvxA/zh-cn_image_0000002193850588.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=1017D7FC1BA76B1B24CBD256546DA1384E6EF1D3B8F05109AD5C850AB540AB93 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/ic31Rtg6Quu5PzeEEeJDCw/zh-cn_image_0000002194010196.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=93560D9A2046E2FB8065FA66A5C6410AE08D42776FE25E888C9F28A339AEB7A7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/rGZRIDMVTASXplk0sPUSSA/zh-cn_image_0000002194010232.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=5099318D0ABB21661DBAB3B8D7D9A11FB827D6A8047422821C16CF1DCAF922C7 "点击放大") |
  | 侧边面板-咨询客服 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/RVVey48cQliqPP5qnDuWag/zh-cn_image_0000002193850676.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=0DB04AFE3B23250F1092F38700AE011C6EEA69A5B4AE1A56B64EF06E96C7D2FB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/beAnwBVfReuh8t1wxJ9rcw/zh-cn_image_0000002229450453.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=689BFF97B51969F2C503BDE8C900DAFECA0B9EAD5414A6F659653282F5B2341E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/6ENaNIaqSoKJqGBaTheR4w/zh-cn_image_0000002229335993.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=85A5BC8B060A18427199503D237FA82A5FE58A377BD787B010FEBFF963953C36 "点击放大") |
  | 侧边面板-购物袋 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/_QO4lNI0R-W9K713eWQU4g/zh-cn_image_0000002194010176.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=09B1CD677DF6ADF4C3AA482B5E1927A665461E3B27E0F209DC077A94402A5779 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/ouQTwIjGSw6GaHdoyElEDg/zh-cn_image_0000002194010164.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=1D857E3377BB46645901D8478166A778CA6C525CEC173EB6FCA29B158E6C2FD8 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/iJLRR28fTvqK1boaDwy78Q/zh-cn_image_0000002193850592.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=AE3A4500B280A6C0CDD761C087AA69D875635CFD29ED7FEADA76BA6A20728985 "点击放大") |
* 观察商品详情侧边面板的设计，在sm断点下仅显示侧边辅助面板，在md和lg断点下使用Row组件实现左右布局，通过设置layoutWeight属性实现自适应布局的占比。在md断点时，商品详情与侧边面板的宽度比为1:1；在lg断点时，宽度比为5:3。

  ```
  Row() {
    Column() {
      // ...
    }
    .height('100%')
    // Setting the width ratio of offering details to side panel.
    .layoutWeight(new BreakpointType(0, 3, 5).getValue(this.currentBreakpoint))
    .borderWidth({ right: '1vp' })
    .borderColor(ResourceUtil.getCommonBorderColor()[0])
    // Hide the product details page under the SM breakpoint.
    .visibility(this.currentBreakpoint === 'sm' ? Visibility.None : Visibility.Visible)

    Column() {
      // Check the auxiliary information page of the side panel.
      if (this.isShoppingBag) {
        DetailShoppingBagView({ isMoreDetail: this.isMoreDetail })
      }
      if (this.isCustomerService) {
        CustomerServiceView()
      }
    }
    .backgroundColor(ResourceUtil.getCommonBackgroundColor()[0])
    .height(CommonConstants.FULL_PERCENT)
    // Setting the width ratio of offering details to side panel.
    .layoutWeight(3)
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/ProductMoreDetail.ets#L52-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ProductMoreDetail.ets</a></div>


###商品支付页

商品支付页使用浅层窗口展示支付信息。观察商品支付页在不同设备上的UX设计图，具体效果见下图：

|  | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/bfpFaTQSTOqvNYMhXp21KQ/zh-cn_image_0000002229450493.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=5E1AA10D30228A28204DD9703FC1DEA242A6AEA15DED65D65C221E9020374B14 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/vOnLQP2HTuG-NRAmRe5lNA/zh-cn_image_0000002193850684.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=EFB455AD6BA0E1F099F6B4A9722A2FFDE9ED1002523B42E2D2E7ACA26EBA7521 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/ZxZrwqpjQzaq0FGTtc0H2A/zh-cn_image_0000002194010200.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=AA100B87FC03C9B23E7DD10B2C22C24596745C92099EFF9668F2CBEA3B7E176C "点击放大") |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/VWzdXzkKQteftgSbEbA_-g/zh-cn_image_0000002193850644.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=863168C52B14B623FF9EBDC5247777767FE7332FA0C19C62EB47FFD6834DAEA4 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/g7I8lPW8ToOEELHa5E5wDg/zh-cn_image_0000002193850616.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=8418059CC5FCE076310D39E1B01BAF5FEBB263F57F9F36AEC42F35CC4FC9482B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/EM_Crd5LQqKG4HpVYWuTiA/zh-cn_image_0000002229335961.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=3A2E5B27D680C2910D22EF0274646F04F38A6A758232C87595EED44E18F543B4 "点击放大") |

商品支付页的浅层窗口，使用bindSheet为购买按钮绑定半模态页面，在sm断点下弹窗底部显示，在md和lg断点下弹窗居中显示。

```
Button(DetailConstants.BUTTON_NAMES(this.context)[1])
  // ...
  .bindSheet($$this.isDialogOpen,
    this.PayCardBuilder(), {
      height: '620vp',
      preferType: SheetType.CENTER,
      dragBar: false,
      enableOutsideInteractive: false,
      onDisappear: () => { this.isDialogOpen = false },
      showClose: false,
      backgroundColor: '#F1F3F5'
    })
  .onClick(() => {
    if (this.isLivePage || this.isSplitMode) {
      return;
    }
    this.isDialogOpen = true;
  })
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/ProductUtilView.ets#L112-L138" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ProductUtilView.ets</a></div>


半模态页面使用@Builder注解构建，并绑定到bindSheet事件。

```
@Builder
PayCardBuilder() {
  Column() {
    PayCard({
      // ...
    })
  }
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/ProductUtilView.ets#L38-L54" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ProductUtilView.ets</a></div>


###直播间页

直播画面和推荐商品信息在多端根据设备屏幕尺寸进行响应式适配。观察直播间页面在不同设备上的UX设计图，可以进行如下设计：

|  | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/1W4hKAYnR3OGKLPhhd3-uA/zh-cn_image_0000002194010208.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=45DB25BA2CFB295AF0B3AB4F5BF42F682917A5E4AC6479E29CEC086C2DFC7F68 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/BKGmWpO9RPipIJz4zmXNtg/zh-cn_image_0000002229450537.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=CA97E653FCCFA7E96FD9365E14CCBF94AB4C554B3221FDD565F32F17A9D1DBF6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/IMOB-KP-TUCz7xnwYF_J2Q/zh-cn_image_0000002193850632.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=D50BF462F17A8A5CB905ED4B3DDC569C1922B553B29FFF0223CB2AB72770762F "点击放大") |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/UR5VntByQHGRdSb_Q7Wwkw/zh-cn_image_0000002194010168.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=D071B51FF33471219150D59B9BAF31083F0CE4500A65A8F563E698CF94550789 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/CgEsm4_uTByUleQoVOrzuw/zh-cn_image_0000002193850596.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=F1EC1AB54B31B7DB568ED1B07CFDAC099F16DCC618BE9A1FCBB8EC19FC2D53FA "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/sWahEExbRVStzKi1CgcpgQ/zh-cn_image_0000002193850636.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=E2E4A0FDED8983AA7059C8663F9C1D1FA3FD9D74DB05F0877762741D42812568 "点击放大") |

直播间页的3个基础区域介绍及实现方案如下表所示：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 直播内容 | [Stack组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)控制子组件的显示层级，在sm断点下aspectRatio属性控制直播图片等比放大实现自适应能力的缩放能力，在md和lg断点下固定大小，同[商品详情页商品大图](#section112893356386)。 |
| 2 | 直播弹幕及推荐商品 | 使用[Stack组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)+[List组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)，在sm和md断点下呈上下结构，显示在下方，在lg断点下呈左右结构，显示在两侧并尾部对齐。 |
| 3 | 发表弹幕 | [TextInput组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)设置layoutWeight实现自适应布局拉伸能力，同[首页顶部页签及搜索框](#section1976644133811)。 |

* 直播弹幕及推荐商品

  使用Stack组件和List组件。在sm和md断点下，布局呈上下结构，显示在下方。在lg断点下，布局呈左右结构，显示在两侧并尾部对齐。

  ```
  Stack() {
    Column() {
      Comment(this.currentBreakpoint, this.getUIContext().getHostContext()!)
      LiveShopList({
        detailType: this.detailType,
        isMoreDetail: this.isMoreDetail,
        isSideListLayout: false
      })
        .visibility(this.currentBreakpoint === 'sm' || this.currentBreakpoint === 'md'?
          Visibility.Visible : Visibility.None)
    }
    // ...

    Row() {
      LiveShopList({
        detailType: this.detailType,
        isMoreDetail: this.isMoreDetail,
        isSideListLayout: true
      })
    }
    .visibility(this.currentBreakpoint === 'sm' || this.currentBreakpoint === 'md'?
      Visibility.None : Visibility.Visible)
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/LiveMaskLayer.ets#L33-L65" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：LiveMaskLayer.ets</a></div>


  ```
  .listDirection(this.isSideListLayout ? Axis.Vertical : Axis.Horizontal)
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Codelabs/MultiShoppingPriceComparison/blob/master/features/detail/src/main/ets/view/LiveShopList.ets#L116-L116" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：LiveShopList.ets</a></div>


###直播侧边面板页

观看直播时，可利用侧边辅助面板查看商品详情、口袋宝贝或支付页面。直播侧边面板在不同设备上的UX设计图如下：

|  | sm | md | lg |
| --- | --- | --- | --- |
| 侧边面板-商品详情页 |  | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/HsDMPsybRLCm-lxeNn0LhQ/zh-cn_image_0000002193850640.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=12BCB3391BC7ABE423C819F38C4AA00D481B21994ABBC1657162F4B51A3BF5BB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/CoNt-kdFTgubLhuJ48f6GA/zh-cn_image_0000002193850576.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=80C9D78EF03F34F629A056D0C32FF228E703B5744EC1A3B10F2EC5816BBDD7D9 "点击放大") |
| 侧边面板-口袋宝贝页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/7ibJlSn8Sei4svnC0BJh8Q/zh-cn_image_0000002229450513.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=19F627222D87235E07E1B5D49B0069317941E1BD474612B9F0BEF95E473F0FB2 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/OBMzh8cLTuye2ErKrab2Cw/zh-cn_image_0000002194010244.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=A2C98D1BFE6CD0008CEB1555B3430301869BDD1CCCC8B14D161F71893F75572D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/PJvdkSOWTauS0Tz1nJt00w/zh-cn_image_0000002193850652.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=71082A442486BAE0F91BB8D2C910948339534CD5BD54C4A0DA6DACDAA3077B42 "点击放大") |
| 侧边面板-支付页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/DimB_JMaQtq7GBwfEy7IMA/zh-cn_image_0000002193850612.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=EA64BDC68B3F9A9EE1BEB1C78B1AAFD08F9B24997BE7E588CA989E266DC380EC "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/UlyP5x9lR7CpHh-6-Bggfg/zh-cn_image_0000002193850584.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=8AF05197485992673A57029DEE1DD61903036AB270FF19700A0903748E073331 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/QwRepuBSSpCvVQFtK38IGw/zh-cn_image_0000002229450525.png?HW-CC-KV=V1&HW-CC-Date=20260606T074042Z&HW-CC-Expire=86400&HW-CC-Sign=CB537A1A03925C50A35ED8E112E91625A4E594A8B3D6D5C84CE401846B952D57 "点击放大") |

* 侧边面板-商品详情页，在sm断点下不显示，在md和lg断点下使用Row组件呈左右布局，设置layoutWeight属性实现自适应布局的占比能力，同[商品详情侧边面板页](#section8305102524814)。在md断点时商品详情与侧边面板宽度为1：1，在lg断点时为5：3。
* 观察直播侧边面板-口袋宝贝页和支付页的设计，在sm断点下使用bindSheet为组件绑定半模态页面，同[商品支付页](#section1965713469388)，在md和lg断点下使用Row组件呈左右布局，设置layoutWeight属性实现自适应布局的占比能力，同[商品详情侧边面板页](#section8305102524814)。

## 示例代码

* [多设备购物比价界面](https://gitcode.com/harmonyos_codelabs/MultiShoppingPriceComparison)
