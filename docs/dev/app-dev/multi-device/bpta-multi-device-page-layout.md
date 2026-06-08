---
title: "页面布局场景"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/bpta-multi-device-page-layout
format: md
upstream_id: dev/app-dev/multi-device/bpta-multi-device-page-layout
last_sync: 2026-06-07
sync_hash: f63d7cba
---
# 页面布局场景

HarmonyOS基于“一次开发，多端部署”的理念设计了响应式布局，旨在帮助开发者高效构建适应不同设备的应用界面。系统通过统一的UI框架、响应式布局能力——断点和栅格，让应用页面能够根据代码的差异化实现自动适应从手机、折叠屏、平板到PC/2in1等各种终端形态。

响应式布局方式包含四种：[重复布局](#section381193213517)、[分栏布局](#section11897247142110)、[挪移布局](#section454920411796)和[缩进布局](#section74801750591)。

本文将从页面布局场景的角度，通过典型布局场景的示例，展示不同横向断点下界面的展示效果，并详细说明在多设备上的实现方案。本文主要覆盖手机、折叠屏、平板和电脑设备，旨在帮助开发者高效实现跨端布局开发。

| 响应式布局方式 | 布局示例 | 典型布局场景 | 实现方案 |
| --- | --- | --- | --- |
| [重复布局](/docs/design/general-design-basics/layout/responsive-method#section198611812185) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/fMqJiPyaTf-6ow50pOpcRg/zh-cn_image_0000002477212786.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=F13764028A08ABCAA4D4DA49DCAF3F263FEABED5005A064A40ADC3EF50D5F479 "点击放大") | 列表布局 | List组件+断点 |
| 瀑布流布局 | WaterFlow组件+断点 |
| 轮播布局 | Swiper组件+断点 |
| 网格布局 | Grid组件+断点 |
| [分栏布局](/docs/design/general-design-basics/layout/responsive-method#section20649152191817) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/OmvzEXcVR6GBRkpY_USXZw/zh-cn_image_0000002477052806.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=156ACC4A83F68607D556D5B444713EFDC839F7D99B92D4C36E1CD2028FDDAC5F "点击放大") | 侧边栏 | SideBarContainer组件+断点 |
| 单/双栏 | Navigation组件+断点 |
| 三分栏 | SideBarContainer组件+Navigation组件+断点 |
| [挪移布局](/docs/design/general-design-basics/layout/responsive-method#section114691379188) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/UINQ1YH0R9CsvukPyX6rYg/zh-cn_image_0000002509132781.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=E593DFC007254E16B9AF6C1072C2731F14A80B57F172A26E6516F9F95A7CD02D "点击放大") | 插图和文字组合布局 | GridRow/GridCol组件+断点+栅格 |
| 底部/侧边导航 | Tabs组件+断点 |
| [缩进布局](/docs/design/general-design-basics/layout/responsive-method#section19655124713115) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/hqEEuIbVRsqdJd0hBrWmWg/zh-cn_image_0000002509292751.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=3064C01866D52888E78491F66848E4D10B9675FBCD4C70B180C363D13B93885A "点击放大") | 单列列表布局 | GridRow/GridCol组件+断点+栅格 |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/fJePNwwtQUCPcsOId2n0-w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=FE9EDF53968E57FEF08C17DA1ADEE69670C439B3637099FC77527CF7FB4CECD8)

设计指南请参考[响应式布局方法](/docs/design/general-design-basics/layout/responsive-method)。

## 重复布局

重复布局是指在空间充足时，重复使用相同或相似的结构、组件或排列方式，用以展示更多内容、保持视觉一致性并提高用户体验。常用的重复布局包括列表布局、瀑布流布局、轮播布局和网格布局。

###列表布局

列表布局基于横向断点，动态调整列数以实现重复布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 单列列表  行间距8vp | 双列列表  列间距12vp  行间距 12vp | 三列列表  列间距12vp  行间距16vp |
| 布局效果 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/KbF2CPeDRAqM-oFz690Amw/zh-cn_image_0000002509087129.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=FC18185C18C810662D9D0F4C23D963977D49B7374BEF1CD7727B3CCAE71CCABB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/NxN-shYBS1KmEmuEpn8Z1Q/zh-cn_image_0000002509087131.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=8FDAA79E41CEFF4D5382670983DEE4FCAD87AE21FEF1DAC89170A24A53B799C6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/8Yy6OKZBQU6ryo0XS96Dlw/zh-cn_image_0000002477007158.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=E229F977622441FDAD7AE8FC5092551A5C41FB97A6F06CD212612965BABE2CDF "点击放大") |

**实现方案**

设置不同横向断点下，[List组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)的lanes、space属性实现目标效果。

**参考代码**

```
List({
  space: new WidthBreakpointType(8, 12, 16, 16).getValue(this.mainWindowInfo.widthBp),
  scroller: this.listScroller
}) {
  // ...
}
.scrollBar(BarState.Off)
.lanes(new WidthBreakpointType(1, 2, 3, 3).getValue(this.mainWindowInfo.widthBp), 12)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/ListView.ets#L43-L63" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ListView.ets</a></div>


###瀑布流布局

瀑布流布局基于横向断点，动态控制列数以实现重复布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 双列布局 | 三列布局 | 四列布局 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/r_lrSIyWQwCWCzI08YZq8A/zh-cn_image_0000002477167134.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=4D97D5AF1E84637AB0AF53C2AE710FAF47F29CFB4AEADE6165B7A4ED3B6C79C5 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/KquLJg7qTdumSoHG6FIPSA/zh-cn_image_0000002509247103.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=471277AD873C9569A5D1053E4175B457E9CA34C0E84279175A0382299C9A7968 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/i90YIa5ORoOnTIyeMyrRaA/zh-cn_image_0000002477167142.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=A81CAD667522729F202D69E49F8121C956E33FD9FD1F2CE2BACA0AAD8B06A7E4 "点击放大") |

**实现方案**

设置不同横向断点下，[WaterFlow组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)的columnsTemplate属性实现目标效果。

**示例代码**

```
WaterFlow() {
  LazyForEach(this.dataSource, (item: number, index: number) => {
    FlowItem() {
      Row() {}
      .width('100%')
      .height('100%')
      .borderRadius(16)
      .backgroundColor('#F1F3F5')
    }
    .width('100%')
    .height(this.itemHeightArray[index])
  }, (item: number, index: number) => JSON.stringify(item) + index)
}
.columnsTemplate(`repeat(${new WidthBreakpointType(2, 3, 4, 4).getValue(this.mainWindowInfo.widthBp)}, 1fr)`)
.columnsGap(12)
.rowsGap(12)
.width('100%')
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/WaterFlowView.ets#L60-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WaterFlowView.ets</a></div>


###轮播布局

轮播布局基于横向断点，动态控制视窗内显示元素的个数以实现重复布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 展示一个元素  无前后边距  显示圆点指示器 | 展示两个元素  前后边距12vp  不显示圆点指示器 | 展示三个元素  前后边距64vp  不显示圆点指示器 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/0AlzsQogSTKSCmN05bKkew/zh-cn_image_0000002509247113.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=A43213C56011501D45CBA793BE51011DA4DD488C937C6710519E7CCDF5E98A17 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/8Sv5LQ7UQfeHE67_aODYCQ/zh-cn_image_0000002509087149.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=8F106D4F1CE7B4430C1F5A8184E460DC134547DB8A4A46C7609998A664DF8EC5 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/fPoPV0CNQXWJEuWSNPljpA/zh-cn_image_0000002477007180.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=7A7C2248416E19D864603284F22735B184096AD3E93FBD43F49B1917D87936C7 "点击放大") |

**实现方案**

设置不同横向断点下，[Swiper组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)的displayCount、prevMargin、nextMargin和indicator属性实现目标效果。

**示例代码**

```
Swiper() {
  // ...
}
.displayCount(new WidthBreakpointType(1, 2, 3, 3).getValue(this.mainWindowInfo.widthBp))
// Setting the navigation point Style of the swiper.
.indicator(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? Indicator.dot()
  .itemWidth(6)
  .itemHeight(6)
  .selectedItemWidth(12)
  .selectedItemHeight(6)
  .color('#4DFFFFFF')
  .selectedColor(Color.White) : false
)
// The sizes of the front and rear banners on the MD and LG devices are different.
.prevMargin(new WidthBreakpointType(0, 12, 64, 64).getValue(this.mainWindowInfo.widthBp))
.nextMargin(new WidthBreakpointType(0, 12, 64, 64).getValue(this.mainWindowInfo.widthBp))
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/SwiperView.ets#L74-L107" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：SwiperView.ets</a></div>


###网格布局

网格布局基于横向断点，动态控制列数/行数以实现重复布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 网格2行2列 | 网格2行3列 | 网格2行4列 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/AwRM7k5hSayh6XX97PRx9Q/zh-cn_image_0000002509087163.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=70736C9B43E0414BA5CA12E9AF7D53E53F235F69B7B66E65C7A33409D7BE91F7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/iyLHHixnTpy8HWkNDNIAww/zh-cn_image_0000002477007190.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=4AD847B49D51741C599750A860FE2470B67697D834DF45E892C6B0FD0D2BE054 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/TH0JHamZTkOwjH08Uqmc8g/zh-cn_image_0000002509247141.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=1DA85B742E2F9FEA794AC1980FA42CC8E4C4CF3FBA5D38B74B3036120640B194 "点击放大") |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/kRNkVgf5Q5SpXgNHVSTpIg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=CFF203802AE419F9F598242F317D7A5C16EE2EA625BE17627EB789C52E44CE69)

网格布局将容器按行和列划分为规则的网格，每个子组件严格对齐，实现均分和占比能力，详情请参考[创建网格](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid)；瀑布流布局子组件高度支持自定义，无需对齐，适合展示高度不一的内容，详情请参考[创建瀑布流](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow)。

**实现方案**

设置不同横向断点下，[Grid组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)的columnsTemplate属性实现目标效果。在不设置Grid组件行数的情况下，行数 = 展示元素数量 / 列数。Grid组件其他布局模式，请参考[rowsTemplate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#rowstemplate)。

**示例代码**

```
Grid() {
  ForEach(this.infoArray.slice(new WidthBreakpointType(4, 2, 0, 0).getValue(this.mainWindowInfo.widthBp)),
    (item: number) => {
      // ...
    }, (item: number, index: number) => JSON.stringify(item) + index)
}
.width('100%')
.columnsTemplate(`repeat(${new WidthBreakpointType(2, 3, 4, 4).getValue(this.mainWindowInfo.widthBp)}, 1fr)`)
.columnsGap(12)
.rowsGap(12)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/GridView.ets#L52-L69" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：GridView.ets</a></div>


## 分栏布局

分栏布局是指在空间充足时，将窗口划分为两栏或三栏，用于展示多类内容。常见的分栏布局包括侧边栏、单/双栏和三分栏。

###侧边栏

侧边栏基于横向断点，动态控制侧边栏是否显示，实现二分栏布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 默认不显示侧边栏  侧边栏浮在内容区上  侧边栏宽度80% | 默认显示侧边栏  侧边栏和内容区并列展示  侧边栏宽度50% | 默认显示侧边栏  侧边栏和内容区并列展示  侧边栏宽度40% |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/n_duEbdeSGef6nqUAfRYCQ/zh-cn_image_0000002509087121.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=FC21DC8DCC326F7D599AC442E6732B5B6635C561F5828A7F34A52107C8D40F0A "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/4BeNtOwbQOuH_VUcxOAVmw/zh-cn_image_0000002477007150.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=8178E04EF3736455E42CA24A7378E15C52219AC0F66A1D52C05A471F17F589DF "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/_VA_74uoSTKH35VA03NTGg/zh-cn_image_0000002477167128.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=168234F518633937434FDB4E9C903F540586B28EBC5C8AEED0D2EB03E4C8A6FB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/lYOmXcy1T4qlpipd7ez5wQ/zh-cn_image_0000002509247093.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=CCEBE11330C4E936B3BC523133BA2166409FB51087E0F4B5FA9AF3B40031EDD0 "点击放大") |

**实现方案**

在不同横向断点下，动态控制[SideBarContainer组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)的showSideBar和sideBarWidth属性实现目标效果。

**示例代码**

```
SideBarContainer(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? SideBarContainerType.Overlay :
  SideBarContainerType.Embed) {
  Column() {
    // ...
  }
  .backgroundColor('#F1F3F5')

  Column() {
    // ...
  }
  .backgroundColor('#FDBFFC')
  .padding({
    top: this.getUIContext().px2vp(this.mainWindowInfo.AvoidSystem?.topRect.height) + 12,
    bottom: this.getUIContext().px2vp(this.mainWindowInfo.AvoidNavigationIndicator?.bottomRect.height),
    left: 16,
    right: 16
  })
}
.showSideBar(this.isShowingSidebar)
.sideBarWidth(new WidthBreakpointType('80%', '50%', '40%', '40%').getValue(this.mainWindowInfo.widthBp))
.controlButton({ top: this.getUIContext().px2vp(this.mainWindowInfo.AvoidSystem?.topRect.height) + 12 })
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/SidebarView.ets#L27-L112" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：SidebarView.ets</a></div>


###单/双栏

单/双栏基于横向断点，动态控制导航栏的显示模式，实现二分栏布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 导航栏和内容区单栏显示 | 导航栏和内容区分栏显示  导航栏宽度50% | 导航栏和内容区分栏显示  导航栏宽度50% |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/gMyMPMHWTSOqDsNF7l0hLw/zh-cn_image_0000002477167182.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=20D24B564920393430FFA0188E02360B4B6EC3EBC2E29001B80200A3D0CC2F6B "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/wEvgjtV1QBW6SlCbvpVejA/zh-cn_image_0000002477007204.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=A91536124C2B713F9248804BE4F6A0855F67D47E9CE5ACEB68E73FEAC1E7C9C6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/zzUX_McUT0SlwDXP5Diatg/zh-cn_image_0000002477167186.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=FEF94D6100692A67CAE1058FCEC2463073FF6836FD6CCC3388B0C2D90B46798B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/cONWYEgXRQ69pTD_ipZKOA/zh-cn_image_0000002509247153.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=AC7E2C5F35D396F88413AB6A3A218C91036F508B0177DE04A8B9CA322B8DA0A6 "点击放大") |

**实现方案**

设置不同横向断点下，[Navigation组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)的mode属性实现目标效果。

**示例代码**

```
Navigation(this.pathStack) {
  // ...
}
.mode(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? NavigationMode.Stack : NavigationMode.Split)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/DoubleColumnView.ets#L38-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DoubleColumnView.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/GhZIN8S2R5uI4rD2fjfBWA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=4B30F4A698D509D16D87F79E555835B5A821A93CA41AB79B8C713F6545AF9ED4)

单/双栏与侧边栏的主要区别是单/双栏的导航栏能够控制内容区的路由跳转，例如商品列表与商品详情；侧边栏通常不控制内容区展示的内容，例如图文详情与评论区。

###二分栏典型场景——聊天

某些应用在双栏布局下支持通过右侧内容区链接跳转至其扩展页面并单栏展示。以社交应用为例，在横向断点为md、lg和xl时，左侧导航栏为聊天列表，右侧内容区显示聊天框，包括文字信息和商品链接；当用户在右侧点击商品链接时，可进入单栏模式，全屏展示对应的商品扩展区页面，同时隐藏原聊天页，实现沉浸式浏览体验。

**布局效果**

| 横向断点 | sm | md | lg/xl |
| --- | --- | --- | --- |
| 属性 | 导航栏和内容区单栏显示 | 导航栏和内容区分栏显示，内容扩展区单独展示  导航栏宽度50% | 导航栏和内容区分栏显示，内容扩展区单独展示  导航栏宽度50% |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/kscf_uAnRi2nmXQhoAvKLw/zh-cn_image_0000002477212788.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=B89E15103AE0BA569EF06EFF08948CD4C448161272C11C92BFD7CDC282ED2BF8 "点击放大")  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/kj0mHejZQ5a6n4KOj_oXJA/zh-cn_image_0000002477052808.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=151A285B435514F6F3180671B3145C1F109D233654A9D67A06E4952E6750B62A "点击放大")  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/_qe9govvQaW7_bCxwS8vOA/zh-cn_image_0000002509132783.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=70528BAD31427BB04A4C264D1DE270D9B158B99D48391C5FEAAD9659FB5FBA52 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/TYKLuGcvRkuddqzl6SnBfA/zh-cn_image_0000002509292753.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=AC953DD229B87ADEFF884C0C48F4AC5062670C75D521199A2445CB5E6C2E78AD "点击放大")    ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/vTtGIA5ARkWaWkMc4lApeg/zh-cn_image_0000002513807549.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=CF355840EE651AF8EF68E2A8D9DB203F47ED2A2AAFCDCF4B1EAB02DB36B437C6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/Esa30TluRBK_eYoDAjKjZg/zh-cn_image_0000002477052810.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=4F4B93E9D0271C3CD34A1393C88C944845DB7B043A120C65DD17AAED04E2AEA7 "点击放大")  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/iEyYXAmjT--e26m0ifKe5g/zh-cn_image_0000002509132785.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=1D7130A39D6069772770F108E2282E4751A6F4A6FFE4B61EC57E2608D5D7E388 "点击放大") |

**实现方案**

使用[Navigation组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)，动态控制其NavigationMode，在路由时切换单双栏显示。聊天列表作为Navigation导航栏，通过点击不同列表条目实现右侧Navigation内容区的路由控制，这种分栏路由模式为NavigationMode.Split。点击商品链接时，设置全屏变量isNavFullScreen为true，切换Navigation为单栏展示，此时路由模式为NavigationMode.Stack。路由返回时，isNavFullScreen变量改为false，路由重新切换为NavigationMode.Split。

对于聊天页面的双栏路由模式切换，开发者可以抽象为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/7MW90u_5TFSldRCEhXfwIQ/zh-cn_image_0000002509292755.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=26B668AEE97354B5DAF9805B0AEFA8F844078B21703C889D4F4D8C34458F2720 "点击放大")

**示例代码**

```
@Builder
PageMap(name: string) {
  if (name === 'conversationDetail') {
    ConversationDetail({
      // ...
    })
  } else if (name === 'conversationDetailNone') {
    ConversationDetailNone();
  } else if (name === 'productPage') {
    ProductPage({
      // ...
    })
  }
}

build() {
  Navigation(this.pathStack) {
    ConversationNavBarView({
      mainWindowInfo: this.mainWindowInfo,
      pageInfos: this.pageInfos,
      pathStack: this.pathStack,
    })
  }
  .mode(this.getNavMode())
  // ...
  .navDestination(this.PageMap)
}

getNavMode(): NavigationMode {
  if (!this.isNavFullScreen && this.mainWindowInfo.widthBp !== WidthBreakpoint.WIDTH_SM) {
    return NavigationMode.Split;
  }
  return NavigationMode.Stack
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/DoubleConversationView/DoubleConversationView.ets#L31-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DoubleConversationView.ets</a></div>


###三分栏

三分栏基于横向断点，动态控制导航栏的显示模式和侧边栏是否显示，实现三分栏布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 默认不显示侧边栏  侧边栏覆盖导航栏  侧边栏宽度80%  导航栏和内容区单栏显示 | 默认不显示侧边栏  侧边栏覆盖导航栏  侧边栏宽度50%  导航栏和内容区分栏显示  导航栏宽度50% | 默认显示侧边栏  侧边栏嵌入导航栏  侧边栏宽度20%  导航栏和内容区分栏显示  导航栏宽度30% |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/sERvKauyR2OfJOIKATBMHg/zh-cn_image_0000002509087183.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=83BBEDD77F730515F8AC0999060C239F728CBBF6C361B4C8D8BCFAF0ABBE49BC "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/rgz-2X_IQzO54mibcaiEQg/zh-cn_image_0000002477007214.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=D0DC00FB7CD07E1B0F4379C1295DF42EB78370411745542F431AD9CE5E2CE73B "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/5RX0n78tRzWh9RiDbUTzew/zh-cn_image_0000002509087191.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=26DE45A915D2D7BF535C641DFEE7DBF64DC303059AD6DB6FEE2071E108DC2D65 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/2KJt2rH1RQKNgsvCpAJN9A/zh-cn_image_0000002477167208.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=8C0B34EF35127BB911645F3DE6A0222CA315894CE508A02F31AF46EA237209F8 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/zNRzik10QXOEy0TBujW7cQ/zh-cn_image_0000002509247169.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=808BB3A1CFB4AB6C916223C9B2A094102E069514085BE131994B4FE405A33907 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/MeAMkVt2Ssy8MhbrRaElEA/zh-cn_image_0000002509087209.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=F27E6057009DA82C2EA668FAFC7F62899B6918E273D576C630BB2F3092F57486 "点击放大") |

**实现方案**

在不同横向断点下，动态控制[SideBarContainer组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)的showSideBar、sideBarWidth属性，和[Navigation组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)的mode、navBarWidth属性实现目标效果。

**示例代码**

```
SideBarContainer(new WidthBreakpointType(SideBarContainerType.Overlay, SideBarContainerType.Overlay,
  SideBarContainerType.Embed, SideBarContainerType.Embed).getValue(this.mainWindowInfo.widthBp)) {
  Column() {
    // ...
  }
  // ...

  Column() {
    Navigation(this.pathStack) {
      NavigationBarView({
        mainWindowInfo: this.mainWindowInfo,
        pageInfos: this.pageInfos,
        pathStack: this.pathStack,
        isShowingSidebar: this.isShowingSidebar,
        isTriView: true
      })
    }
    .width('100%')
    .height('100%')
    .mode(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? NavigationMode.Stack : NavigationMode.Split)
    .navBarWidth(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_MD ? '50%' : '40%')
    .navDestination(this.PageMap)
    .backgroundColor('#B8EEB2')
  }
  // ...
}
.showSideBar(this.isShowingSidebar)
.sideBarWidth(new WidthBreakpointType('80%', '50%', '20%', '20%').getValue(this.mainWindowInfo.widthBp))
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TripleColumnView.ets#L52-L110" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TripleColumnView.ets</a></div>


###三分栏典型场景——邮箱

在邮箱场景中，单栏状态下，默认展示收件箱页，当选择邮件对象后，展示邮件详情页。双栏和三栏状态下，右侧默认不展示邮件详情页，当选择邮件对象后，右侧展示邮件详情页。

**布局效果**

| 横向断点 | sm | md | lg/xl |
| --- | --- | --- | --- |
| 效果图（默认） | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/YCekyVvDRm2saCfc-K3yGw/zh-cn_image_0000002477212794.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=6535715C19A6F9576A9D812BDCE3CCCB5E7F4B1BC1760D631177E8AAEE802BA1 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/QCN1Z8hrQ-SI9P6jLf-X7w/zh-cn_image_0000002477052812.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=15E0E8551E9D2A463566E3FE83DAEF6BEBAFFAB764F0131DFDFB6CD824B7168A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/v2s6TqwERxCEEbpxkBKpqQ/zh-cn_image_0000002509132787.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=A76C5E848F4BA4A09EA4B127207C55B275358C62CDFF2B553AB3EFD32E5ABE2F "点击放大") |
| 效果图（内容） | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/PHbPrKXyQg61wzpAJeHlSQ/zh-cn_image_0000002509292757.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=B86F720B8D6B4AC1F3A9C2B9A1FA2A78ABBAD38F9A251630F6E3BF410DCC5DC6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/pzl3JJ1tQ6SWdDwt-uUYqA/zh-cn_image_0000002477212796.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=17A1CFAA6AAB28DD2785935280D8C6DE4AA596F3D2D7C07116B09884A3F43188 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/3SUgN_reSw2VxFVRtyIWDg/zh-cn_image_0000002477052814.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=89B6AD613A8F0A38454F8FBB59386BBBBD569615FD3A2CB8DDE4345473F84A8F "点击放大") |

邮箱分为三个层级目录：第一层为账户信息，第二层为收件箱（一个账户信息对应多条邮件信息），第三层为邮件详情。根据内容的重要性，开发者在单栏模式下显示邮件详情，在双栏模式下显示收件箱和邮件详情，在三栏模式下显示账户信息、收件箱和邮件详情。

对于邮箱页面的一多分栏变化，开发者可以抽象为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/gNGBTskFR0q0CYlulUFA6A/zh-cn_image_0000002509132789.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=D6B176D5B2C5B4627102F960A001999C0D8F44D0691EC0A8238706785AE4CEE4 "点击放大")

**示例代码**

* 对SideBarContainer组件的showSideBar属性进行赋值，如果横向断点为lg或xl，则默认显示侧边栏，反之，则默认不显示。

  ```
  build() {
    GridRow() {
      GridCol({ span: { sm: 12, md: 12, lg: 12, xl: 12 } }) {
        SideBarContainer(new WidthBreakpointType(SideBarContainerType.Overlay, SideBarContainerType.Overlay,
          SideBarContainerType.Embed, SideBarContainerType.Embed).getValue(this.mainWindowInfo.widthBp)) {
          // Area A
          Column() {
            MailSideBar()
          }
          .width('100%')
          .height('100%')
          .backgroundColor($r('sys.color.gray_01'))

          // Area B+C
          Column() {
            Stack() {
              MailNavigation({
                mainWindowInfo: this.mainWindowInfo,
                pageInfos: this.pageInfos,
                pathStack: this.pathStack,
              })
                .margin({ top: 18 })
                .padding({ left: this.getUIContext().px2vp(this.mainWindowInfo.AvoidSystem?.topRect.left) })
              // ...
            }
          }
          .width('100%')
          .height('100%')
        }
        .showSideBar(this.isShowingSidebar)
        // ...
      }
    }
    .width('100%')
    .height('100%')
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TripleMailView/TripleMailView.ets#L41-L96" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TripleMailView.ets</a></div>


* 在SideBarContainer组件内容区中使用Navigation组件，对Navigation组件的mode属性进行赋值，如果断点为sm或xs，则为单栏，反之则为双栏。

  ```
  build() {
    Navigation(this.pathStack) {
      // ...
    }
    .mode(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? NavigationMode.Stack : this.notesNavMode)
    .navDestination(this.myRouter)
    // ...
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TripleMailView/MailNavView.ets#L99-L180" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MailNavView.ets</a></div>


###三分栏典型场景——日历

在三分栏的单栏布局中，通常展示的重点是Navigation的内容区。但在某些场景下，内容区的优先级低于导航区，例如日历日程功能。在这种情况下，单栏布局会优先展示日历（即Navigation的导航区）。效果如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/Mv863lqRRyCBURsHnjMkOA/zh-cn_image_0000002509292759.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=056968D67DB40A8917224ABA79738FE9DF31BD8FCF7414A2EB607CD907FEB192 "点击放大")

日历日程分为三个层级，账户信息->日历->日程，开发者通常在单栏显示日历，双栏显示日历、日程，三栏显示账户信息、日历、日程。日历日程页面与邮箱页面的主要区别在于，日历日程页面的单栏页面重点显示Navigation导航栏，邮箱页面的单栏重点显示Navigation内容区。

**布局效果**

| 横向断点 | sm | md | lg/xl |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/ATMDAh8ARdOnfSz555FdSQ/zh-cn_image_0000002477212798.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=BB560E42002CB0A738531BE1C55BE7B0089226D6254FB47717C210BB4FAC8D29 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/wZMrw0n3QYalu87YSZT86w/zh-cn_image_0000002477052816.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=EA2CE2FA84AF220253F65FAC57C6FDE0396E0C9B2BE8561CE97903C061B17E59 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/u-A4pltqQqWXYHyhZLMAuA/zh-cn_image_0000002509132791.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=42D693595765AE97748056B845D6E36E6344325B8781354394F3E26C3655641B "点击放大") |

**示例代码**

在Navigation的onNavigationModeChange属性中进行判断，当Navigation首次显示或单双栏状态发生变化时。

* 如果是单栏，则清空PathInfo路由，Navigation的内容区不显示，即可实现单栏显示Navigation导航栏的目的。
* 如果为双栏，则重新向PathInfo路由中push内容区参数，即可实现Navigation内容区显示具体日程的目的。

  ```
  Row() {
    // ...

    if (this.mainWindowInfo.widthBp !== WidthBreakpoint.WIDTH_SM) {
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
  Navigation(this.pathStack) {
    CalendarView({
      mainWindowInfo: this.mainWindowInfo,
      pathStack: this.pathStack,
    })
  }
  .navDestination(this.pageMap)
  .mode(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? NavigationMode.Stack : this.navMode)
  // ...
  .onNavigationModeChange((mode: NavigationMode) => {
    if (this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM || mode === NavigationMode.Stack) {
      this.pathStack.clear();
    } else if (mode === NavigationMode.Split) {
      this.pathStack.pushPath({ name: this.selectedItem.date, param: this.selectedItem }, false);
    }
  })
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TripleCanlendarView/TripleCalendarView.ets#L108-L240" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TripleCalendarView.ets</a></div>


## 挪移布局

挪移布局是指在空间充足时，通过调整组件的位置与展示方式，在左右布局与上下布局之间切换，用以展示更多内容或提高用户体验。常用的挪移布局包括插图和文字组合布局、底部/侧边导航。

###插图和文字组合布局

插图和文字组合布局基于横向断点，设置组件所占不同的栅格数，实现左右布局与上下布局的切换。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 整个窗口划分为4栅格，歌单封面区（蓝）占4栅格，歌曲列表区（粉）占4栅格 | 整个窗口划分为8栅格，歌单封面区（蓝）占4栅格，歌曲列表区（粉）占4栅格 | 整个窗口划分为12栅格，歌单封面区（蓝）占4栅格，歌曲列表区（粉）占8栅格 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/BcmxVKlkQvCPjN_61GyEhw/zh-cn_image_0000002477007240.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=8BD62E069AB255A60141C7303D847950B358A796D897440C5DAB6E64FA4B9B4E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/ZyATBMSsQ2CB-BKfWE1loA/zh-cn_image_0000002477167220.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=D16CD9FE1D48B48E88CD9E483C88BE3D8E8EF6D5DD2B4A1BB0A4DBB72DE6A35D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/AtrsuSvnQCGQoe_WvDItag/zh-cn_image_0000002509247189.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=BE66A78C85C7900BA491BAAA248FF0C719B60281BA1B532A61BAE5BE5E2315ED "点击放大") |

**实现方案**

设置不同横向断点下，[GridRow组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow)的columns、breakpoints属性，和[GridCol组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridcol)的span属性实现目标效果。

**示例代码**

```
GridRow({
  columns: { xs: 4, sm: 4, md: 8, lg: 12, xl: 12 },
  gutter: 0,
  breakpoints: { value: ['320vp', '600vp', '840vp', '1440vp']},
  direction: GridRowDirection.Row
}) {
  GridCol({
    span: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 },
    offset: 0
  }) {
    // ...
  }
  .height(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? this.getGridColHeight() : '100%')
  .padding({ top: this.getUIContext().px2vp(this.mainWindowInfo.AvoidSystem?.topRect.height) + 12})
  .backgroundColor('#AAD3F1')

  GridCol({
    span: { xs: 4, sm: 4, md: 4, lg: 8, xl: 8 },
    offset: 0
  }) {
    // ...
  }
  .backgroundColor(Color.Pink)
  .layoutWeight(1)
  .padding({ top: this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM ? 0 :
    this.getUIContext().px2vp(this.mainWindowInfo.AvoidSystem?.topRect.height) })
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/MoveView.ets#L27-L136" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MoveView.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/DDxNDj4FS5uZ_SK5qECfnA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=9CF1BAFF2292355C081DD0A559E220A044E946AB74C00A0C6E24B77B5E0B1E19)

此布局场景也常用于页面顶部页签与搜索框，具体可参考如下布局效果。

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/kUM4o2_FTJmsae0kWQh0sw/zh-cn_image_0000002489851162.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=36561103FEDCCD8A6D837CF44D3ABF5A7265AEAD49D66ED43F1BE83061F089DE "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/bRGZKBruSaes2Q20nYth3g/zh-cn_image_0000002522090947.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=A89F0AE3D063CCA53FEB4180E331362EEEBCEE17A48EB8A9723A560F13A2F6C8 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/qqjfH9wIT2SKKsXxuXAJBw/zh-cn_image_0000002522210939.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=C7238C04BE9D918A809ADB8DB1AC8F8B31BEB366765E90211184076DAB3A7C0F "点击放大") |

###底部/侧边导航

底部/侧边导航基于横向断点，设置导航栏的位置与方向，实现上下布局与左右布局的切换。

电脑设备上的商务办公、实用工具垂类应用开发中，常使用侧边分级导航展示多级目录。而在一多开发时，侧边分级导航并不一定适用于手机、平板等设备，若需要实现导航栏内的分级效果，比较复杂。

当前系统支持手机、折叠屏、平板和电脑四种产品形态，分别对应sm、md、lg和xl四个断点，下文将实现不同断点下的分级导航栏。

**布局效果**

| 横向断点 | sm | md | lg | xl |
| --- | --- | --- | --- | --- |
| 属性 | 分级导航由底部一级导航栏和顶部二级页签组成 | 分级导航由底部一级导航栏和顶部二级页签组成 | 分级导航由侧边一级导航栏和顶部二级页签组成 | 通过侧边栏显示一级和二级导航 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/OzrZ4WYRQFyz52-HjFZ4nA/zh-cn_image_0000002509292761.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=179402239D1D5B8A3CBBC82A9C80DE31E1862AC16C08F902060382FF14A381F4 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/V5VCyN-xSjWcKt295cFgqw/zh-cn_image_0000002477212802.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=59872D1398D550D4FD228D4B7BA33D47A2EA7B1017A599D161CD10172E658C84 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/2YcL27roRhKUkcF3e9xAcg/zh-cn_image_0000002477052820.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=E10D1A96D554624A8668153F7825B1276920B427BC74335E7302440E865E9AB3 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/4MuEqIvHSSyU8kH0gOwwKQ/zh-cn_image_0000002509132793.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=01F478F6C6C33D9D03D3EF3CF0ED292249B266C2A97AD42BA9725A522AAA59AF "点击放大") |

当断点为sm或md时，显示底部导航和顶部页签；当断点为lg时，显示左侧导航；当断点为xl或设备为PC/2in1时，侧边显示一级和二级导航。

**实现方案**

开发一多分级导航栏时，需要实现4种断点下的一多效果：

* 订阅窗口尺寸变化，更新断点，触发页面布局更新。
* 在sm和md断点下，分级导航由底部一级导航栏和顶部二级页签组成。
* 在lg断点下，分级导航由侧边一级导航栏和顶部二级页签组成。
* 使用电脑设备或xl断点下，通过侧边栏显示一级和二级导航。

设置不同横向断点下，[Tabs组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)的barPosition、vertical、barHeight、barWidth和barMode属性实现目标效果。

**示例代码**

在sm、md和lg断点下，在首页调用Tabs组件，渲染一级导航目录信息到页签，并在内容区域调用已实现的页面视图，实现页面效果

```
// entry/src/main/ets/view/TabsView/TabsView.ets
Tabs({
  barPosition: this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG ? BarPosition.Start : BarPosition.End
}) {
  TabContent() {
    TopTabView({
      pageInfos: this.pageInfos,
      mainWindowInfo: this.mainWindowInfo,
      firstLevelIndex: this.firstLevelIndex,
      tabData: this.tabData
    })
  }
  .tabBar(this.tabBuilder(this.firstTabList[0], 0))

  TabContent()
    .tabBar(this.tabBuilder(this.firstTabList[1], 1))

  TabContent()
    .tabBar(this.tabBuilder(this.firstTabList[2], 2))

  TabContent()
    .tabBar(this.tabBuilder(this.firstTabList[3], 3))
}
.barBackgroundColor('#CCF1F3F5')
.barWidth(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG ? 96 : '100%')
.barHeight(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG ? '100%' : 56 + this.getUIContext().px2vp(this.mainWindowInfo.AvoidNavigationIndicator?.bottomRect.height))
.barMode(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG ? BarMode.Scrollable : BarMode.Fixed,
  { nonScrollableLayoutStyle: LayoutStyle.ALWAYS_CENTER })
.barBackgroundBlurStyle(BlurStyle.COMPONENT_THICK)
.vertical(this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG)
.onChange((index: number) => {
  this.firstLevelIndex = index;
})
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TabsView/TabsView.ets#L115-L147" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TabsView.ets</a></div>


在xl断点下或使用PC/2in1设备，首页调用SideBarContainer组件，传入侧边栏区域组件和内容区域组件。此时可以结合[@State](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state)和[@Link](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link)装饰器，同步所需要的参数信息，如当前选中的一级目录索引和二级目录索引，可以用于呈现与页签强相关的页面内容。

```
// entry/src/main/ets/view/TabsView/TabsView.ets
if ((this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_LG || this.mainWindowInfo.widthBp
  === WidthBreakpoint.WIDTH_XL)&& deviceInfo.deviceType == "2in1") {
  // Use SideBarContainer at XL breakpoint.
  SideBarContainer(SideBarContainerType.Embed) {
    TabSideBarView({
      firstLevelIndex: this.firstLevelIndex,
      secondLevelIndex: this.secondLevelIndex,
      tabData: this.tabData,
      firstTabList: this.firstTabList
    })
    Column() {
      Row() {
        // ...
        Text(this.tabViewModel.getTabNameOfSecondLevel(this.tabViewModel.getTabNameOfFirstLevel(this.firstLevelIndex),
          this.secondLevelIndex))
          .fontSize('20fp')
          .fontWeight(700)
          .margin({
            left: 16,
          })
      }
      .padding({
        top: 60,
        bottom: 14,
      })

      VideoInfoView({
        mainWindowInfo: this.mainWindowInfo,
        firstLevelIndex: this.firstLevelIndex,
        secondLevelIndex: this.secondLevelIndex
      })
    }
    .alignItems(HorizontalAlign.Start)
  }
  .autoHide(false)
  .divider({ strokeWidth: 0.3 })
  .showControlButton(false)
  .sideBarWidth(240)
  .minSideBarWidth(240)
  .maxSideBarWidth(240)
} else {
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/TabsView/TabsView.ets#L62-L153" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TabsView.ets</a></div>


## 缩进布局

缩进布局是指在空间充足时，组件居中展示并在两侧留白，通过调整内容的缩进来建立视觉层次结构，提高可读性和美观性。常用的缩进布局包括单列列表布局。

###单列列表布局

单列列表布局基于横向断点，设置栅格子组件所占的栅格列数和偏移列数，实现缩进布局。

**布局效果**

| 横向断点 | sm | md | lg |
| --- | --- | --- | --- |
| 属性 | 整个窗口划分为4栅格，单列列表占4列，偏移0列 | 整个窗口划分为8栅格，单列列表占6列，  两侧各偏移1列 | 整个窗口划分为12栅格，单列列表占8列，两侧各偏移2列 |
| 展示布局 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/bem1Bax5ROqU2N_Hgoejig/zh-cn_image_0000002477007254.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=BAB00075C03B2D034530BF1362B63E9B87DD983A62A3B6B02070083BEF673D48 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/JU1zKvIcRBm2v5VRbfi4Rg/zh-cn_image_0000002477007258.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=F0069EA6B42A42F2E1BCF11A7BE3D91F2C506B9FC8996E8E05B77743735969D0 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/kpiBmzREQFCIJZalNSagFw/zh-cn_image_0000002509087231.png?HW-CC-KV=V1&HW-CC-Date=20260606T074013Z&HW-CC-Expire=86400&HW-CC-Sign=00CFB719C85DEB30D22012CFFE10A31B08DB706DF65EF8C0192541DCB6846FF2 "点击放大") |

**实现方案**

设置不同横向断点下，[GridRow组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow)的columns、breakpoints属性和[GridCol组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridcol)的span、offset属性实现目标效果。

**示例代码**

```
GridRow({
  columns: { xs: 4, sm: 4, md: 8, lg: 12, xl: 12 },
  gutter: 0,
  breakpoints: { value: ['320vp', '600vp', '840vp', '1440vp']},
  direction: GridRowDirection.Row
}) {
  GridCol({
    span: { xs: 4, sm: 4, md: 6, lg: 8, xl: 8 },
    offset: { xs: 0, sm: 0, md: 1, lg: 2, xl: 2 }
  }) {
    // ...
  }
  .width('100%')
  .height('100%')
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/ResponsiveLayout/blob/master/entry/src/main/ets/views/IndentedView.ets#L42-L79" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：IndentedView.ets</a></div>


## 示例代码

* [基于一多能力实现响应式布局](https://gitcode.com/harmonyos_samples/ResponsiveLayout)
