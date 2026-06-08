---
title: "多设备新闻阅读界面"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/multi-news-read
format: md
upstream_id: dev/app-dev/multi-device/multi-news-read
last_sync: 2026-06-07
sync_hash: c65e6ede
---
# 多设备新闻阅读界面

## 概述

本文以新闻阅读应用作为典型案例详细介绍“一多”在实际开发中的应用。新闻阅读应用在大屏幕设备的使用过程中，不仅要保障用户在界面浏览中的正常使用，也要尽可能提升屏幕的交互效率。该示例主要界面包含首页推荐、热门新闻、新闻详情、刷新闻、精选发现等。

新闻阅读一多开发过程中涉及的相关能力包括：

* 挪移布局
* 延伸布局
* 重复布局
* 列表变瀑布流
* 列表变宫格
* 全屏新闻变瀑布流
* 边看边评
* 沉浸浏览
* 文字大小调节

下面的章节将分别从[UX设计](#section1719610101057)、[架构设计](#section119741723356)、[页面开发](#section1180220717819)三个角度给出推荐的参考样例，介绍“一多”新闻阅读应用在开发过程中的最佳实践。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/LdeDRs7SR5GEJhgCOTCkDQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=B582921538D7CDE1D9C2ED83B3AFF9C6BB3BAEEB01E969DE6148918E657D9573)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](/docs/dev/app-dev/application-framework/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## UX设计

新闻阅读类的多设备响应式设计指南，[点击访问](/docs/design/app-design-practices/news-reading)。

## 架构设计

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，为开发者提供了一个清晰、高效、可扩展的设计架构。更多详细信息，请参考[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)的逻辑设计。

## 页面开发

本章介绍新闻阅读应用中如何使用“一多”布局能力，完成页面层级的多端适配。下文将从不同页面介绍具体布局能力，帮助开发者从零开始开发新闻阅读应用。

###首页推荐

新闻阅读应用首页主要推荐精选新闻，解决用户看新闻的需求。首页内容围绕这一功能设计。观察首页在多设备上的UX设计图，可以进行如下设计：

* 将首页划分为9个部分，效果图如下：

|  | sm | md | lg |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/U31ZqcZdQDySemD2ay8m6w/zh-cn_image_0000002194011160.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=073C1500297E43132D3A4B55AB3CF361BC1CD3057DEC3B645F48FC0188A27373 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/_yJbtBowTB6hkT11kgvrKQ/zh-cn_image_0000002229451389.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=28C4243AC68097BBAE3A1AB6B212F45E6D576E59D4FCA25C7EB19C84123E4D85 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/3viUHQIfQB2VGsxPPvUtIQ/zh-cn_image_0000002193851568.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=077881923DAC76EB2DAE38D7A557895340D2A42CA83BC2FF45499FBC47C84AE2 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/8mkwpjrORJ6vWIFcr8X3Aw/zh-cn_image_0000002229336985.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=B890C58265A145F6F7EDC116DFCD929D46F552CB1E0BF9365C68B8BB907DC82A "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/hQeStWbsTzCWXKRp1Xjaow/zh-cn_image_0000002229336957.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=5444BB8A8BE7141CFD94B8C1FFF44C0B96C00C0E3F77932D2694117BF1137665 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/aAB0HkteS_GlPJb4lh6f3g/zh-cn_image_0000002229337001.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=72C042AC98DA66287D29031E164A32EE9EE9FA5D1EF8F48AD657EB823DD2FE7B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/gtnSyG2WQvSiBDEgzkjy3g/zh-cn_image_0000002193851520.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=B9BDD99DDE714B1F31CB292EE44D277242957988F336D9A00F0CB935ABC58F69 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/iE6k-CNiSq2nFsuFPlfYkw/zh-cn_image_0000002229336893.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=15C5970776D97312384DD0625EE3832D7AD39ADCB2C8E5EC61C1D2C9BBD1880F "点击放大") |

实现方案如下表：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 底部/侧边页签 | 借助[栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化改变位置。 |
| 2 | 顶部页签及搜索框 | 使用[栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化实现折行显示，[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸布局，layoutWeight实现拉伸能力。 |
| 3 | [顶部文字要闻](#li42441859453) | 使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)的lanes属性，在不同断点下呈1、2、3列显示。 |
| 4 | [新闻大图卡片](#li1441844512434) | 使用[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)，指定displayCount属性实现延伸布局，设置aspectRatio属性实现缩放能力。 |
| 5 | [上文下图](#li894391114417) | 采用[重复布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1653271133613)，在手机、折叠屏上保持原有布局，在PC/2in1及更宽的设备上重复布局。 |
| 6 | [左文右图](#li431911954516) | 采用[重复布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1653271133613)，手机上的单列信息，在折叠屏和PC/2in1上重复布局。 |
| 7 | [竖向视频卡片](#li651243310458) | 采用[重复布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1653271133613)，手机上的左图右文卡片，在折叠屏和PC/2in1上显示更多列该卡片内容。同[多设备社区评论界面 列表重复布局](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li118141522111817)。 |
| 8 | [大视频类新闻](#li917373419216) | 采用[重复布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1653271133613)，手机上单列展示，在折叠屏和PC/2in1上重复布局。同[多设备社区评论界面 列表重复布局](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li118141522111817)。 |
| 9 | [横向滑动小视频](#li1924317507257) | 采用[延伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#延伸能力)，使得设备尺寸变宽时，更多的小视频卡片被展示到界面。 |

* 顶部文字要闻

使用List组件，设置不同断点下的lanes属性来实现。在sm断点下设置为1，在md断点下设置为2，在lg断点下设置为3。实现不同屏幕尺寸显示更多列数。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/gzW4o7ujS76f3IYQNGAYWw/zh-cn_image_0000002194011176.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=A36BDFC0535C2DB6F716F494A8567658F12EE4EFF31E9AFC0D6C2DB73F5DEFCA) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/SaKFEsljTx2dBxDClpYWOQ/zh-cn_image_0000002194011188.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=F24FD6DDD0C6D6CE3572E7CB502004B77D1CB2CA5368FAA3EE1044BD95D0E848) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/8WKtQm-iTlqEO8Ww6giG2g/zh-cn_image_0000002194011184.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=92E85232C17CED2CA2F9C248E853DE81F1CE3CC98A3C602EDC1D087CC4E63A90) |

* 新闻大图卡片

使用Swiper组件，设置在不同断点下的displayCount属性来实现自适应布局延伸布局，新闻大图卡片在sm断点下设置为1，在md断点下设置为2，在lg断点下设置为3。实现在不同屏幕尺寸显示更多内容。

| 示意图 | sm | md | l |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/05uZh7NDQR-OYrxaXScs4w/zh-cn_image_0000002194011136.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=6EB5869A9166CF753A161B89CF909277561DC024891CADD55AF99F6C9B9DFDB2) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/bwXCKiLUTOafTR66Y4DNWg/zh-cn_image_0000002229336877.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=411D941676768067D530D5C3D3D2479AF9D21C7EE1C7CB3546AB1473390123B5) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/uRl7u8dvS_CwgM_ploAniA/zh-cn_image_0000002194011096.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=173D9B7775941E5F0F2EB39383471864A6E8B6E738C12A4BCE64B3044610BB77) |

* 上文下图

使用重复布局配合栅格布局控制不同设备上的内容列数。在sm和md断点下，设置GridCol的span属性为12；在lg断点下，设置GridCol的span属性为6。同时，使用onBreakpointChange函数控制不同设备尺寸上的显示数据数量。在sm和md断点下，渲染数据源包含一条数据；在lg断点下，渲染数据源包含两条数据。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/e9mYRebtRQykG7DXgF-aPQ/zh-cn_image_0000002229451413.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=D296A7F68554FD44A875D8FED42657954FCBBAD1D48F622EF27383A50144D815) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/MLh5EdVTSh2c8VlL1LJFFQ/zh-cn_image_0000002229336945.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=2955971DE79E634EE55FE3901D38FE4BF97E4AF960FAB2F821F1E28CC0EF6543) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/ueanocffRBSCLLBkq9Czvg/zh-cn_image_0000002193851584.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=118AE0766FA1AD28373B3B55260A29359383D6008DA13F81EFF772A1065E351E) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/Oz9ZCtWQSz-jdjNrTE2RPg/zh-cn_image_0000002193851592.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=E23DA507BD81B37FED66F1B607F32B29ACDB6A40CB47731A474FBCE6FE944E72) |

```
// src/main/ets/pages/MediaNews.ets
build() {
  Column() {
    Header()
    GridRow({
      gutter: $r("app.float.grid_gutter_bigger")
    }) {
      ForEach(this.newsList, (news: News) => {
        GridCol({
          span: {
            sm: Constants.GRID_COL_SPAN[5],
            lg: Constants.GRID_COL_SPAN[4]
          }
        }) {
          NewsWithThreeImages({ news })
        }
      }, (news: News) => news.getNewsID())
    }
    .onBreakpointChange((breakPoints: string) => {
      // Return the number of rendered data records based on the breakpoint situation
      this.newsList = this.multiImageViewModel.getNewsListByBreakpoint(breakPoints);
    })
    .width(Constants.CONTENT_WIDTH)
  }
  .width(Constants.FULL_WIDTH)
  .justifyContent(FlexAlign.Center)
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-news-read/blob/master/entry/src/main/ets/pages/MediaNews.ets#L29-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MediaNews.ets</a></div>


* 左文右图

使用栅格布局，配合断点控制列数：在sm尺寸下设置GridCol的span属性为12，在md及以上尺寸设置为6。同时，使用Text组件的visibility属性配合断点控制摘要部分的显隐：在sm和md断点下设置摘要部分Text组件的visibility为Visibility.Hidden，在lg及以上断点设置为Visibility.Visible。

示意图如下：

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/m69DrjFlS6euQ0QLGXDkmA/zh-cn_image_0000002193851524.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=9A47D26288968F94C52A65B13CBE00D47A0687AF3793BDE672D4929D1F743E63) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/SigiCBEGQYCJVh33g1_w_g/zh-cn_image_0000002229451489.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=23D2F570D914AB72E8D42E7899C5F90C208CA96A19A30B544E9275D47485A293) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/dGG7r-CdSm6JZquyG5JJfg/zh-cn_image_0000002229451393.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=E15D47C3C166F8A6699A6DE14CEB34A0621114D34943231E875D1E6BD87DB501) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/YwuFBtCnSZO84hg4t7b41g/zh-cn_image_0000002229451377.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=3DEC9DC5EB5F93890FB032E07A58A54627C4D56ACFE7ED9108A1B19DD6F2D6D3) |

```
build() {
  Column() {
    Header()
    GridRow({
      columns: 12,
      gutter: {
        x: { md: Constants.GRID_HORIZONTAL_GUTTER[0], lg: Constants.GRID_HORIZONTAL_GUTTER[1] },
        y: { sm: Constants.GRID_VERTICAL_GUTTER[0], md: Constants.GRID_VERTICAL_GUTTER[1] }
      }
    }) {
      ForEach(this.newsList, (news: News) => {
        GridCol({
          span: {
            sm: Constants.GRID_COL_SPAN[5],
            md: Constants.GRID_COL_SPAN[4]
          }
        }) {
          LeftTextRightImageBgWhite({ news })
        }
      }, (news: News) => news.getNewsID())
    }
    .onBreakpointChange((breakPoints: string) => {
      this.newsList = this.imageAndTextViewModel.getNewsListByBreakpoint(breakPoints);
    })
    .width(Constants.CONTENT_WIDTH)
  }
  .width(Constants.FULL_WIDTH)
  .justifyContent(FlexAlign.Center)
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-news-read/blob/master/entry/src/main/ets/pages/NewsChannel.ets#L29-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：NewsChannel.ets</a></div>


* 竖向视频卡片

采用重复布局，在sm断点下设置GridCol内容占用span为12。在md断点下设置GridCol内容占用span为6。在lg断点下设置GridCol内容占用span为4。同时使用GridRow的onBreakpointChange回调函数控制渲染的数据条数，使其在sm、md、lg断点下分别渲染1、2、3条数据。具体代码可参考：[多设备社区评论界面 列表重复布局](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li118141522111817)。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/m12niyfeQpuJbSsZZIoVpA/zh-cn_image_0000002229451417.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=AA7AD9B4D5BE607ABF0D1CC37C3FB66FD66553F45A82EF9B6E22B59B6719B697) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/ddVebcHOSc6dmgKig2_46A/zh-cn_image_0000002193851604.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=8FDD16B9CB0F125F7D702D46AE1CB15B4AD674F243B7022F0915F29253681000) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/veH-OfQpQTC4Hvp0jBksUg/zh-cn_image_0000002193851616.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=7DF867D7AC6EFBC5D8822A74161D3096DAE92C98B71DECD5CE7D72610DAF2026) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/1EJ0BxhVR1-5cEUmo7BDig/zh-cn_image_0000002193851540.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=E6FAF04220DE9CB22DF284CAD8067C20156CAF583DC57EAC37BC654A6B87EDB1) |

* 大视频类新闻

使用栅格布局配合断点控制显示列数与数据源数量。在sm断点下设置GridCol的span属性为12，返回渲染数据源个数为1个，在md断点下设置span为6，渲染数据源为2个，在lg断点下设置span为4，渲染数据源为3个。具体代码可参考：[多设备社区评论界面 列表重复布局](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li118141522111817)。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/WE8sty8iRpefEqkqbNVdCg/zh-cn_image_0000002229336869.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=267E5AB0EE0F2F548B121C0878734057836641D5CE54CF6D9050581E3EC7DB95) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/p0FfPC-dSn-nhxvFoV7OBg/zh-cn_image_0000002229336889.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=1779222F7668D00F0C13DCADF022E6E6E738752F5D7B577CF49A5CC8C9D5CA14) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/LcUqtNLYS4GtbmD6lT3Z6A/zh-cn_image_0000002229451397.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=DFB2952B3C2D373CCD7D4D67BEA8D282A6B286A59AE2B4F2DB758AC99CBA5355) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/3zeky_fCSkWO4nMq3HFCAw/zh-cn_image_0000002194011148.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=56DEAA228008689D9CD2022F493C8E82E7A88611CC14165C6414AA90CC4B15E2) |

* 横向滑动小视频

使用Scroll与Row组件实现延伸布局，随着屏幕尺寸的增加，展示更多的小视频数量，延伸布局可参考：[延伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#延伸能力)。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/gvJsu9bLQ1SRTAMFV0NLNA/zh-cn_image_0000002194011172.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=375D68232D77F22EA97E31CB7564A84AA9B12A7414EA91326A5CD50B2DBC79C0) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/IYsWVThqQGK-HyhZEHB4Jg/zh-cn_image_0000002229451485.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=87BA91B24ACAF93D2B2BA5933F4C8BC986F55F794F644396204DE88B698769CC) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/N7nzYfuQTv6a17oQSDgPvA/zh-cn_image_0000002229451453.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=52E97403CC02AE31F96C8D417B20B8334F660E5A6EC5AEC8F4AE31B721D6A008) |

###热门新闻

热门页提供不同设备的浏览体验。观察UX设计图，进行如下设计：

* 将热门新闻页划分为3个部分，如图所示：

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/0arPnahlS-2_r_nIa6mrlg/zh-cn_image_0000002229451429.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=A8C48059477F9A6A5E323D9C991046A4E2185ACB7CBFEF0147839F1576F94E43 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/rbSYAeqySqylyEGGAkBtqA/zh-cn_image_0000002229336881.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=CABC85BC960A5823B4C9A4CB0369FED4E7530757D9FAC9443ACED5DB3ADFE4AC "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/-bEChfY7TbGa_1we9aRK0g/zh-cn_image_0000002229451473.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=F0D93CB5BBA5AA1A3BD0D9E4C524C4BA65BE8108972A249982770231B60C5AA7 "点击放大") |

实现方案如下表：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 底部/侧边页签 | 借助[栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化改变位置。 |
| 2 | 顶部页签及搜索框 | [栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化实现折行显示，[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸布局，layoutWeight实现拉伸能力。 |
| 3 | [新闻列表](#li814217391355) | 借助断点监听改变不同断点下的布局方式，在sm断点及sm以下使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)，在sm断点以上使用[栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)。 |

* 新闻列表

为了实现列表与宫格的灵活切换，可以使用List组件在sm及以下断点时展示内容，而使用栅格布局在sm断点以上展示。在md断点下设置GridRow的columns属性为2，在lg断点下设置columns属性为4。对于需要更大空间的组件内容，设置GridCol的span属性以占用更多份数。

```
Column() {
  if (this.curBp === 'sm') {
    List({
      space: Constants.LIST_GUTTER
    }) {
      // ...
    }
    .width(Constants.CONTENT_WIDTH)
  } else {
    GridRow({
      columns: {
        md: Constants.GRID_ROW_COLUMNS[1],
        lg: Constants.GRID_ROW_COLUMNS[2]
      },
      gutter: $r("app.float.news_list_common_space")
    }) {
      // ...
    }
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/multi-news-read/blob/master/entry/src/main/ets/pages/NewsListPage.ets#L48-L208" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：NewsListPage.ets</a></div>


###新闻详情

新闻详情页提供详细新闻信息。观察不同设备上的UX设计图，进行如下设计：

* 提供边看边评功能

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/7YHOMVv5RDap-VRMmBNhkQ/zh-cn_image_0000002229336981.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=6310329CAB9E3AD283F1819805BE400C0A9958DD274A3D2A1BDE79DCFAE8301A "点击放大") | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/I3aRDnyQRtu1PHg1VyPbOQ/zh-cn_image_0000002229451477.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=A4912C057CD40C13FC0618BBEEF0EE9F82A4E1E16CE88598927571E32235760B "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/cDwkAE-aRT6rqSvN5SBS8Q/zh-cn_image_0000002229451381.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=E93C8D1B308EB52D3209A42B9624A62EEA114D9D166B4231704650927769F369 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/MJkZb505TYC7SSVYVM5D9Q/zh-cn_image_0000002229451437.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=1F3621AD2A8844BFE94B498088FF4A2FB937A1AE07806193C64F961B16FE3A4B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/TPI1v5TmS0KPFBBY2Z7yeg/zh-cn_image_0000002229451409.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=667456459937FBE1FC2F894501E657E5331176B5BBE3574B4552478903BD3C71 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/iv10rEZKTiS15EGMJPfWTA/zh-cn_image_0000002229336917.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=03AEB1008978C58940B125CE3205FF9769B5634DAA35AAC33070C517ABC827D4 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/sm5FuOV3TFej18qSq5qzKg/zh-cn_image_0000002229336885.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=277D8839B6CFFB0444A61DEB33ADA4F5980AF4B13AA03612D63657440763E21E "点击放大") |

如下表所示，实现方案：

| 区域编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 顶部栏 | 使用自适应布局中的[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)，可使用Blank组件实现屏幕宽度变化时，中间空白内容随设备尺寸变化。 |
| 2 | 新闻标题及发布信息 | 使用[占比能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#占比能力)保证多设备尺寸下的界面一致。具体可参考：[多设备社区评论界面 边看边评](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li11692132514198)。 |
| 3 | 新闻内容 | 使用[占比能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#占比能力)保证多设备尺寸下的界面一致。具体可参考：[多设备社区评论界面 边看边评](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li11692132514198)。 |
| 4 | 评论区 | 采用[挪移布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1153210192360)，当设备尺寸变宽时将新闻内容区域和评论区左右布局。具体可参考：[多设备社区评论界面 边看边评](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li11692132514198)。 |
| 5 | 底部工具栏 | 使用[自适应布局](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout)中的均分能力，实现设备尺寸变化时图标尺寸不变，图标间距及左右边缘间距均等改变。具体可参考：[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。 |

边看边评实现上可以利用[栅格布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)实现[挪移布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1153210192360)，在sm断点下设置GridCol对应内容span为12，而在sm以上断点设置对应内容占用span为6，自动实现从新闻内容和评论区的上下布局切换到左右布局。具体可参考[多设备社区评论界面 边看边评](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li11692132514198)。

###刷新闻

刷新闻界面向用户提供新闻流列表。观察不同设备上的UX设计图，进行如下设计：

* 全屏新闻变瀑布流

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/p0ctKadVTHupXcuENtbjUg/zh-cn_image_0000002194011192.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=5EE740A0E824881EF1A6662F171AB4A00B025FF70A89EC49AF039078830C2B53 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/3QC9tdO0TFGnYPSl1DlvaQ/zh-cn_image_0000002229451433.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=C53E74B08AE435A72B2FDC9436B7DEF569BBCAF9A5F8E253A4AC806894A2D542 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/JmHVrtQzSyGuwAtZIMRkpg/zh-cn_image_0000002229451457.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=107E9A421C6058072F1BB8F425EE0807C3B91F60235BFC5108757A3D6B87F312 "点击放大") |

在刷新闻界面中，开发者可以使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现一列到多列的切换。在sm断点下依赖断点控制设置WaterFlow的columnsTemplate属性为1，在md断点下设置columnsTemplate为2，在lg断点下设置columnsTemplate为3。具体实现开发者可以参考：[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。

###精选发现

* 瀑布流一列变多列

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/2BcFG7byRmyQEH6l1r5J9Q/zh-cn_image_0000002229336933.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=B0FA0726EDAE282ADFB1C9B12EF8F17867F2CD02D86B75E88277190483A77880 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/TXOPdUfxQuSYRiO2bqyXtA/zh-cn_image_0000002229451441.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=559B4CA00BFE275905053A2670BADA48F615CE3C3D46168842AAACBF2B877FF6 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/PhBVWFQUQ8qDCg74QkXZ-A/zh-cn_image_0000002229336873.png?HW-CC-KV=V1&HW-CC-Date=20260606T074041Z&HW-CC-Expire=86400&HW-CC-Sign=06D76E05AF720B0B8C73877CFBEBB24A2EB005CD9C29BB015B313B70E370F7E6 "点击放大") |

精选发现界面使用瀑布流一列变多列，主要使用[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器实现不同设备的差异化显示。在sm断点下一列显示，在md断点下依赖断点控制设置WaterFlow的columnsTemplate为两列，在lg断点下设置columnsTemplate为三列。具体实现开发者可以参考：[多设备社区评论界面 动态卡片](/docs/dev/app-dev/multi-device/multi-community-app#zh-cn_topic_0000001758831130_li1420045031813)。

## 示例代码

* [多设备新闻阅读界面](https://gitcode.com/harmonyos_samples/multi-news-read)
