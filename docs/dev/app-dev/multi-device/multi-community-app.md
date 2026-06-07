---
title: "多设备社区评论界面"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/multi-community-app
format: md
---

# 多设备社区评论界面

## 概述

本文选择社区评论行业应用作为典型案例介绍“一多”在实际开发中的应用。社区评论应用的核心功能包括社区新闻浏览和热搜榜单查看。基于这些核心功能，案例实现了推荐热搜、热搜榜单、卡片详情、图片查看和输入评论等典型页面。文章重点介绍关键布局能力及对应实现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/l1eJd-mNRziBXLw07L3iiQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=DFA1E215ACCB4122EFE433507E69F28A7947A5986C25261B5060B2C8439F94EA)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](/docs/dev/app-dev/application-framework/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## 架构设计

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，为开发者提供清晰、高效、可扩展的设计架构。更多详细请参考[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)。

## UX设计

社交通讯类的多设备响应式设计指南，请参考[社交通讯类](/docs/design/app-design-practices/social-communication)。

本章介绍社交通讯类应用中如何使用“一多”布局能力，完成页面层级的单页面和多端适配。下文将详细说明每个页面区域使用的具体布局能力，帮助开发者从零开始进行社交通讯类应用的开发。

热点页利用[响应式布局](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout)中的[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)布局能力，结合[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)容器，实现单列卡片变瀑布流卡片的一多布局能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/EelrauFJSFC13mLyrqBdoQ/zh-cn_image_0000002229335777.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=3B6100C5FA71F7481C63C0C4D8CA47ED87AC97CCFB11377725880DA97677DAB9 "点击放大")

在卡片详情页中，使用响应式布局的栅格布局，实现图文区域和评论区域的左右及上下布局，从而达到边看边评的图文阅读效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/WhStjNPZSua7ADZ6Z9_ROw/zh-cn_image_0000002229335781.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=CC0F7DB1420AEB1790E034C1BD3BBA872ADD446FD042D24A0AF0352BFB88BE7F "点击放大")

社区评论应用包含以下一多页面布局能力：侧边导航、[列表重复布局](#zh-cn_topic_0000001758831130_li118141522111817)、[动态卡片](#zh-cn_topic_0000001758831130_li1420045031813)、[边看边评](#zh-cn_topic_0000001758831130_li11692132514198)。侧边导航参考多设备长视频界面[首页](/docs/dev/app-dev/multi-device/multi-video-app#section109591922155720)界面开发。

## 页面开发

###布局能力

本章节选取页面关键区域进行布局能力介绍。

**热点页布局能力**

热点页提供搜索、热搜展示、信息阅读等功能，使用列表布局和动态卡片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/aB4GEu9PSaqB1RscHEjPWw/zh-cn_image_0000002229335773.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=04E9D919A46D118A345A71F91F3742C04C0A3019111BA1B0A02578E489B8DDFA "点击放大")

* 列表重复布局

竖向列表清晰明了地展示数据。在宽屏设备上，设计了列表重复布局以展示更多数据。

在进行有序数据展示时，使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)容器进行数据排列。通过设置List组件的布局方向listDirection和lanes属性并结合断点，实现在不同断点下显示不同列数。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/p5F-4KB0RTysSRpI1kADIA/zh-cn_image_0000002193850400.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=B507A036288542092E4F013D3359022EA1C275982DF2BB0DEF0FF7BF136DE68C) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/HEvlYYJ_TmeHB2u0-MMv5A/zh-cn_image_0000002229450253.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=A4DD7A1FE058BCF3EAE34C0C94B42BDD0E95625269A98B9BD8E14BE637F2D9AB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/wsVFvQwlTLuKOmxyHg2J8Q/zh-cn_image_0000002194009992.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=F272C4AF6CDE8752E03F93F6E66A2375A4735281CC08CB65ED7EB13FFC9B3C52 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/CM_YbXnxQqqhquEFtQgoTA/zh-cn_image_0000002194009996.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=58D7DC50B03C7738AFA60A630F2BD1E6FA749E358317EC3A94813146E9C47FB8 "点击放大") |

```
@Component
export struct HotColumnView {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = 'sm';
  // ...

  @Builder
  HotListBuilder(index: number) {
    List() {
      ForEach(HOST_LIST_ARRAY[this.tab_index], (item: HotItemInterface) => {
        if (item.index > index * 5 && item.index <= (index + 1) * 5) {
          ListItem() {
            HotListItemView({
              item: item,
              showDetail: true,
              // ...
            })
          }
        }
      }, (item: HotItemInterface) => JSON.stringify(item))
    }
  }

  build() {
    Column() {
      Swiper() {
        ForEach([0, 1, 2], (item: number) => {
          this.HotListBuilder(item)
        }, (item: number) => JSON.stringify(item))
      }
      // ...
    }
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Codelabs/MultiCommunityApplication/blob/master/features/hot/src/main/ets/view/HotColumnView.ets#L25-L74" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotColumnView.ets</a></div>


* 动态卡片

信息卡片是显示内容的主体。使用竖向单列布局在宽屏设备上容易造成大量留白，影响视觉效果。在宽屏设备上展示两列布局可充实页面内容。瀑布流布局能紧密连接卡片，提供更紧凑的视觉效果。

动态卡片布局主要使用WaterFlow容器，在手机、折叠屏与平板设备间差异化显示。手机及折叠屏上竖向单列展示，通过分割线分隔卡片。平板设备上，WaterFlow容器显示2列，依赖断点控制。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/4a4g595RTXSsjbBMhPH2pg/zh-cn_image_0000002229450277.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=657C1A5CAF3975031EE42FB84121037D60B7B5733FF1CFC2D61BB12C4FB2CB97) | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/M6uIwnpVTqWApWZELKo8Mw/zh-cn_image_0000002229450261.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=8CB2F2B5ADBF057383C391610FFE33762249CBA79714158716532DA83A5B509C "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/2Jepvs6tREejqp9hBm1Mrw/zh-cn_image_0000002229450257.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=6B5FF157D4A97FDC3CD6C0584D6A50BDBA62F0AEB3780E03EC6E9FFE47CA69D8 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/DgagkW_3R1qWvI6g-kaTUg/zh-cn_image_0000002229335761.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=870D6E5620B395B1A4E39D0B9407DB2BD1675264924E1DE89A92D340114D4BD9 "点击放大") |

```
WaterFlow() {
  ForEach(this.cardArrayViewModel.cardArray, (item: CardItem, index: number) => {
    FlowItem() {
      Column() {
        MicroBlogView({
          cardItem: item,
          // ...
        })
        // ...

        CommentBarView({
          isShowInput: false,
          // ...
        })
      }
      // ...
    }
  }, (item: CardItem, index: number) => index + JSON.stringify(item))
}
.columnsTemplate(this.currentBreakpoint !== 'lg' ? '1fr' : '1fr 1fr')
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiCommunityApplication/blob/master/features/hot/src/main/ets/view/FoundView.ets#L103-L148" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：FoundView.ets</a></div>


**卡片详情区域**

卡片详情区域支持图文和评论在不同设备上显示上下或左右布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/aETVp45nQf-_zASZI-PSWQ/zh-cn_image_0000002194009952.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=317F0A0F47E2C15CA680D5C190BEE21DE3DE8E11072FDB2CA1055F86A4EA653D "点击放大")

* 边看边评

为了优化图文内容和图片内容的展示效果，并支持同时浏览评论，在不同设备上进行了以下布局设计：手机采用上下布局，折叠屏支持内容区和评论区的上下及左右布局切换，平板设备固定为左右布局。

边看边评功能主要通过栅格布局实现。在手机设备上，图文区和评论区同时占满设备栅格，显示为图文区在上、评论区在下的布局。折叠屏的上下布局与左右布局切换使用控制栅格数量实现。左右布局控制图文区占用栅格数为3/5，评论区占用栅格数为2/5。修改图文区及评论区栅格数为5/5时，切换为上下布局。

在lg断点下为实现固定评论区宽度，使用[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)容器重新构建页面布局。由于栅格布局与SideBarContainer容器无法兼容，使用断点分别控制两处实现的显示隐藏。

| 示意图 | sm | md | lg |
| --- | --- | --- | --- |
| 设计能力点 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/XMUVMOR3TBuV6kQQnf_FxA/zh-cn_image_0000002229335765.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=E93AEF1A822E18CE8F916F4C48CF1A5B618206ADA101ECC26BD920EF3E6FF656 "点击放大") | | |
| 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/U93Ze2hKTR-f9G1puzHnAw/zh-cn_image_0000002229335769.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=053E9BF8B522F2D815D05F3F3E0DD4770EA2B2ED1D4288D69E26677C740A8F68 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/X0WAJuUVSG2s2N9HO0DgYw/zh-cn_image_0000002229450249.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=4F98FD99CECCF66E374E2167109834EBB42FE60F8E04B529F2683BF840307EA8 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/BAXCkPSySqOZxsUhswNOvg/zh-cn_image_0000002229335749.png?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=F7B4AFC41DB8BFD2670A54345EAB7CAE37FE1F8914D11456F9537F34A96A3A7B "点击放大") |

```
@Component
export struct DetailPage {
  // ...
  build() {
    Stack() {
      Column() {
        DetailTitleView({ isShowedButton: this.isShowedButton })
        Scroll() {
          GridRow({ columns: { sm: 4, md: 5, lg: 12 } }) {
            GridCol({ span: { sm: 4, md: this.isFoldHorizontal ? 3 : 5, lg: 12 } }) {
              if ((this.isFoldHorizontal && this.currentBreakpoint === 'md')) {
                Scroll() {
                  MicroBlogView({
                    cardItem: this.cardItem,
                    index: this.selectCardIndex
                  })
                  // ...
                }
                // ...
              } else {
                MicroBlogView({
                  cardItem: this.cardItem,
                  index: this.selectCardIndex
                })
                // ...
              }
            }
            // ...

            GridCol({ span: { sm: 4, md: this.isFoldHorizontal ? 2 : 5, lg: 12 } }) {
              CommentListView()
            }
            // ...
          }
        }
        .visibility(this.currentBreakpoint === 'lg' ? Visibility.None : Visibility.Visible)
        // ...

        Column() {
          SideBarContainer() {
            Column() {
              CommentListView()
            }
            // ...

            Column() {
              Scroll() {
                MicroBlogView({
                  cardItem: this.cardItem,
                  index: this.selectCardIndex
                })
                // ...
              }
              // ...
            }
            .justifyContent(FlexAlign.Start)
          }
          // ...
        }
        .visibility(this.currentBreakpoint !== 'lg' ? Visibility.None : Visibility.Visible)
        // ...
      }
      // ...
    }
  }
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiCommunityApplication/blob/master/features/detail/src/main/ets/view/DetailPage.ets#L29-L189" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DetailPage.ets</a></div>


###交互事件处理

**文字缩放**

详情页正文内容支持捏合手势[PinchGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture)缩放文字大小。文字区域添加双指捏合手势事件，使用缩放比例计算文字大小及文字行高，实现双指缩放文字的功能。缩放事件输入方式参考[交互归一](/docs/dev/app-dev/multi-device/bpta-multi-interaction#section088812013815)。

效果如图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/U5MUHsjaQkCJgLCZRuHiKg/zh-cn_image_0000002229335757.gif?HW-CC-KV=V1&HW-CC-Date=20260606T074253Z&HW-CC-Expire=86400&HW-CC-Sign=10FE2B14054272C4EFDC8BB48E3F70A73D40C3E010018A705715BACACF66268C "点击放大")

```
@Component
export struct MicroBlogView {
  // ...
  build() {
    Column() {
      if (this.cardItem !== undefined) {
        // ...

        Row() {
          Text(this.cardItem.content)
            .fontSize(`${this.contentFontSize}fp`)
            .lineHeight(`${this.contentFontHeight}vp`)
            // ...
        }
        .gesture(
          PinchGesture({ fingers: 2 })
            .onActionUpdate((event?: GestureEvent) => {
              if (event && (this.isDetailPage || this.isPictureDetail)) {
                let tmp = this.pinchValue * event.scale;
                if (tmp > 1.45) {
                  tmp = 1.45;
                }
                if (tmp < 0.75) {
                  tmp = 0.75;
                }
                this.scaleValue = tmp;
                this.contentFontSize = 16 * this.scaleValue;
                this.contentFontHeight = 25.6 * this.scaleValue;
                this.pictureMarginTop = 8 * (this.scaleValue > 1 ? this.scaleValue : 1);
              }
            })
            .onActionEnd(() => {
              this.pinchValue = this.scaleValue;
            })
        )
        // ...
      }
    }
    // ...
  }
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_codelabs/MultiCommunityApplication/blob/master/features/detail/src/main/ets/view/MircoBlogView.ets#L33-L201" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MircoBlogView.ets</a></div>


## 示例代码

* [多设备社区评论界面](https://gitcode.com/harmonyos_codelabs/MultiCommunityApplication)
