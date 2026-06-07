---
title: "折叠屏悬停态"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/bpta-folded-hover
format: md
---

# 折叠屏悬停态

## 概述

折叠屏提供独特的手持操作体验“悬停态”，用户可以将设备半折后立在桌面上，实现免手持体验。悬停态适用于不需要频繁交互的任务，如视频通话、视频播放、拍照和听歌。进入悬停态时，中间弯折区域难以操作且显示内容会变形，建议页面内容进行折痕区避让适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/9O0yc8hiQ_2XUC3ZUrrx_A/zh-cn_image_0000002194010932.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=A1B9AF86AE0E3198C9D4C3558764FE9F37710DDEEBD7735EBBAE0934C324292C "点击放大")

本文提供折叠屏悬停态的三种实现方式，并根据其特点给出各自的适用场景。

* [使用FolderStack组件实现悬停态](#section9671184110015)，适用于视频全屏播放等交互少的场景。
* [使用FoldSplitContainer组件实现悬停态](#section122423387410)，适用于分栏显示内容的场景，例如游戏画面和操作区域。
* [自定义实现悬停态](#section4691264319)，适用于页面布局复杂和悬停态触发动作自定义的场景。

实现悬停态的三种方式中，FolderStack组件使用简便，无需关注设备状态，支持自定义页面布局。FoldSplitContainer组件同样易于使用，但其固定的二分栏和三分栏布局限制了使用场景。自定义实现悬停态需要开发者自行监听设备状态并调整组件布局，支持自定义布局，且由于自实现悬停态监听，可以限制设备进入悬停态的场景（例如仅允许在横屏下半折叠时进入悬停态）以及自定义窗口旋转策略，使用更加灵活。

|  | FolderStack | FoldSplitContainer | 自定义实现悬停态 |
| --- | --- | --- | --- |
| 展开态/折叠态是否支持自定义布局 | 支持 | 不支持，固定二分栏/三分栏 | 支持 |
| 是否支持由其他页面进入悬停态页面 | 支持 | 支持 | 支持 |
| 是否支持自定义设备状态进入悬停态页面 | 不支持 | 不支持 | 支持 |
| 是否支持自定义悬停态窗口旋转策略 | 不支持 | 不支持 | 支持 |
| 开发难度 | 简单 | 简单 | 困难 |

本文以视频播放类应用的全屏播放页面为例，介绍FolderStack的自定义悬停态实现。同时，以游戏界面为例，介绍FoldSplitContainer的悬停态实现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/aBmp4pxrTvqv9czUs0ZSlQ/zh-cn_image_0000002193851340.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=D0A671FE898667BFA6541EA43AC0A5921773ED93E4D1BF27BF523C920A2EE6B7)

## 使用FolderStack组件实现悬停态

###实现原理

[FolderStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack)是系统提供的ArkTS组件，继承自[层叠布局Stack](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout)。在Stack组件的基础上，FolderStack提供监控设备是否进入悬停态并进行重新布局的能力。

FolderStack通过upperItems字段来实现悬停态布局，当设备进入悬停态时，被upperItems字段修饰的组件会堆叠在上半屏，其他未被修饰的组件会堆叠在下半屏并且自动避让折叠屏折痕区。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/kMZB7kfWQSWyh6aSnrGy_w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=5699E9130095742803F791933A4E0A6E641FD76876053ECC0281C515DF817077)

FolderStack需要撑满页面全屏，如果不撑满页面全屏，则只作为普通Stack使用。

###开发步骤

使用FolderStack组件实现悬停态的代码时，将页面的父容器设置为FolderStack，并将视频播放组件的ID注册到upperItems数组中。这样，悬停态时视频播放组件会自动调整到上半屏显示，视频控制组件和顶部返回组件则显示在下半屏。

```
FolderStack({ upperItems: ['upper'] }) {
  VideoPlayView({ avPlayerUtil: this.avPlayerUtil })
    .id('upper')

  VideoControlView({ avPlayerUtil: this.avPlayerUtil })

  BackTitleView({
    title: Const.PAGE_TITLES[0]
  })
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/view/hoverview/HoverUseFolderStack.ets#L44-L53" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HoverUseFolderStack.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/eFYl1Rt0TnymjunCLE6BNQ/zh-cn_image_0000002229451233.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=1C9887615DCA5AA13F761D976AE4C3400FE77531E9AF83735E42A5FEE5C713A2 "点击放大")

## 使用FoldSplitContainer组件实现悬停态

###实现原理

[FoldSplitContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-foldsplitcontainer)是系统提供的分栏类型的ArkTS组件，可以实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制。其中二分栏是上下分栏，三分栏是在二分栏基础上加上侧边栏。

FoldSplitContainer的primary和secondary参数分别设置二分栏的上下区域的布局，extra参数设置三分栏中侧栏区域的布局；通过LayoutOptions参数设置各区域分栏的比例。当设备进入悬停态时，FoldSplitContainer会自动避让折叠屏折痕区。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/QHtVe2JxTJmXamY7EXhr4g/zh-cn_image_0000002229451229.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=BACA16810820EA7578809397DE0595CCE7FF7391DED5EC58A32C055A916BA41E "点击放大")

###开发步骤

使用FoldSplitContainer组件实现悬停态的代码结构是将上下屏的组件分别注册到primary和secondary参数的回调中。这样页面呈现为上下分栏布局，并且会在悬停态自动避让折痕区域。二分栏结构已实现页面布局，因此未实现extra参数对应的侧栏。

```
FoldSplitContainer({
  primary: () => {
    this.primaryArea();
  },
  secondary: () => {
    this.secondaryArea();
  }
})
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/view/hoverview/HoverUseFoldSplitContainer.ets#L59-L66" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HoverUseFoldSplitContainer.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/dg1jnJBvQySV41SozGfgJQ/zh-cn_image_0000002194010928.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=DA9C6018354C74249A0BFB143D8F3BC778F529E891FC12FCF38B0A6CD459DB24 "点击放大")

## 自定义实现悬停态

###实现原理

自定义悬停态布局需要在折叠屏进入半折叠态时通过设置窗口横向显示、规避折痕避让区，调整页面内组件的尺寸和位置来实现，可分为监听悬停态和调整布局两部分。

1. 监听悬停态：通过[display.on('foldStatusChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayonfoldstatuschange10)接口监听设备是否进入半折叠态，同时通过display的[orientation属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#属性)判断设备是否横屏，当两种状态都满足时即判断设备进入悬停态。
2. 调整布局：当设备进入悬停态后，通过[display.getCurrentFoldCreaseRegion()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displaygetcurrentfoldcreaseregion10)接口获取折叠屏折痕区域的位置和大小，计算并设置上下半屏组件的尺寸和位置完成悬停态布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/8aeu82-3SearuAM-rxFM0Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=B00CBB91496E8582459D25E2F7EF70C0B8D26942BEAC95F08C5D1F66D3E66AC2)

在退出应用或者退出需要监听折叠态变化的页面时，需要调用[display.off('foldStatusChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayofffoldstatuschange10)接口取消监听，避免出现意想不到的问题。

###开发步骤

自定义悬停态的视频播放页UI结构与FolderStack组件结构相同，只是将FolderStack替换为普通Stack组件，主要实现悬停态监听和组件重新布局。

1. 悬停态通过状态变量isHover进行监听。当折叠屏的折叠状态变化时，判断当前是否为悬停态并更新isHover的值。

   定义监听折叠状态变化回调方法。

   ```
   private onFoldStatusChange: Callback<display.FoldStatus> = (data: display.FoldStatus) => {
     try {
       // ...
       let orientation: display.Orientation = display.getDefaultDisplaySync().orientation;

       if (this.pageID === 0 || this.pageID === 3) {
         if (data === display.FoldStatus.FOLD_STATUS_HALF_FOLDED && this.currentWidthBreakpoint === Const.BREAKPOINT_MD &&
           (orientation === display.Orientation.LANDSCAPE ||
             orientation === display.Orientation.LANDSCAPE_INVERTED)) {
           this.isHover = true;
           // ...
         } else {
           this.isHover = false;
         }
       }
       // ...
     } catch (error) {
       hilog.error(0x0000, TAG, `onFoldStatusChange catch error, code: ${error.code}, message: ${error.message}`);
     }
   };
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/pages/Index.ets#L42-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


   在display中注册方法，监听设备折叠状态变化。

   ```
   try {
     display.on('foldStatusChange', this.onFoldStatusChange);
   } catch (exception) {
     hilog.error(0x0000, TAG, 'Failed to register onFoldStatusChange callback. Code: ' + JSON.stringify(exception));
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/pages/Index.ets#L113-L117" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>

2. 当设备处于悬停状态（isHover为true）时，页面内组件需要获取折痕区的大小和位置，方法如下。

   ```
   static getFoldCreaseRegion(): void {
     try {
       if (display.isFoldable()) {
         let foldRegion: display.FoldCreaseRegion = display.getCurrentFoldCreaseRegion();
         let rect: display.Rect = foldRegion.creaseRects[0];
         // Height of the avoidance area in the upper half screen and height of the avoidance area.
         let creaseRegion: number[] = [uiContext!.px2vp(rect.top), uiContext!.px2vp(rect.height)];
         AppStorage.setOrCreate('creaseRegion', creaseRegion);
       }
     } catch (error) {
       hilog.error(0x0000, TAG, `getFoldCreaseRegion catch error, code: ${error.code}, message: ${error.message}`);
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/common/utils/DisplayUtil.ets#L24-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DisplayUtil.ets</a></div>

3. 根据折痕区的大小和位置调整布局。

   视频播放组件将上移至屏幕上方。

   ```
   Column() {
     XComponent({
       id: Const.X_COMPONENT_ID,
       type: XComponentType.SURFACE,
       controller: this.xComponentController
     })
       // ...
   }
   .height(this.isHover ? this.creaseRegion[0] : '100%')
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/view/basicview/VideoPlayView.ets#L33-L46" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VideoPlayView.ets</a></div>


   视频控制组件位于下半屏，无需调整。

   顶部返回组件应移动到屏幕下半部分的顶部。

   ```
   Row() {
     // ...
   }
   .width('80%')
   .height('24vp')
   .justifyContent(FlexAlign.Start)
   .position({
     x: '24vp',
     y: this.isHover ? this.creaseRegion[0] + this.creaseRegion[1] + 36 : '36vp'
   })
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/FoldedHover/blob/master/entry/src/main/ets/view/basicview/BackTitleView.ets#L29-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：BackTitleView.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/nFUOLS-FTLO0JGPIkKOdXw/zh-cn_image_0000002229451225.png?HW-CC-KV=V1&HW-CC-Date=20260606T074217Z&HW-CC-Expire=86400&HW-CC-Sign=2FE815E0466A5205DDE3E684AB24CAC7AEEFAD17BEA1CB8663FD712540493F14 "点击放大")

## 示例代码

* [实现折叠屏悬停态](https://gitcode.com/harmonyos_samples/FoldedHover)
