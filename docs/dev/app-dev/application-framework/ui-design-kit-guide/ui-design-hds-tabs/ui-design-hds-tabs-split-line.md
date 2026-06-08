---
title: "设置页签栏的分割线"
original_url: /docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line
format: md
upstream_id: dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line
last_sync: 2026-06-07
sync_hash: efa382f6
upstream_hash: 7c4f4f756f9a
---

## 场景介绍

从6.0.0(20)版本开始，新增支持设置页签栏的分割线。

[HdsTabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdstabs)容器组件扩展支持页签栏分割线常隐、常显和渐进显隐。当应用开发者需要分割线一直显示、一直隐藏或者内容区超过页签栏8vp后分割线完全消失时，可以通过设置HdsTabs组件的分割线的模式，同时也支持自定义分割线样式。

| 常显 | 常隐 | 跟手 |
| --- | --- | --- |
| ![](./img/9cc46936.gif) | ![](./img/f56bdf1c.gif) | ![](./img/516ab72b.gif) |

## 约束条件

1. 将页签栏置于容器的底部且支持模糊，即barPosition设置为BarPosition.End，vertical设置为false和barOverlap设置为true。
2. 分割线模式设置为跟手滑动模式时，跟手滑动效果仅限支持滚动的通用接口的组件，其他类型组件由开发者自己实现。
3. 跟手滑动效果依赖HdsTabs控制器绑定需要设置的list滑动控制器。

## 开发步骤

1. 导入相关模块。

   ```
   // 从6.0.2(22)版本开始，无需手动导入HdsTabsAttribute。具体请参考HdsTabs的导入模块说明。
   import { HdsTabs, HdsTabsController, DividerMode, HdsTabsAttribute } from '@kit.UIDesignKit';
   ```
2. 创建Hds一级容器组件，设置的Button可以切换分割线展示效果，分别是常显、常隐和跟手滑动效果。

   * 初始化list滑动控制器和HdsTabs控制器，将list滑动控制器绑定在HdsTabs控制器上，确保联动，否则跟手滑动没有渐变效果。

     ```
       private controller: HdsTabsController = new HdsTabsController();
       listScroller0: ListScroller = new ListScroller();
       listScroller1: ListScroller = new ListScroller();

      aboutToAppear(): void {
         this.controller.bindScroller(0, this.listScroller0);
         this.controller.bindScroller(1, this.listScroller1);
       }

       aboutToDisappear(): void {
         this.controller.unbindScroller(this.listScroller0);
         this.controller.unbindScroller(this.listScroller1);
       }
     ```
   * 设置页签栏置于容器的底部且支持模糊，否则跟手滑动没有渐变效果。

     ```
      .barOverlap(true)
      .barPosition(BarPosition.End)
      .vertical(false)
      .divider({
        mode: DividerMode.FOLLOW_SCROLL,
        style: {
          color: Color.Black,
          strokeWidth: 1,
          startMargin: 0,
          endMargin: 0
        }
      })
     ```
   * 跟手滑动效果仅限支持滚动的通用接口的组件，如List，Scroll等。

     ```
     HdsTabs({ controller: this.controller }) {
             TabContent() {
               List({ scroller: this.listScroller0 }) {} // listScroller是开发者设置的滑动控制器，list子组件可以自定义添加。
             }
             .tabBar({ icon: $r('app.media.startIcon'), text: '页签1' })
             TabContent() {
               List({ scroller: this.listScroller1 }) {}
             }
             .tabBar({ icon: $r('app.media.startIcon'), text: '页签2' })
     }
     ```
