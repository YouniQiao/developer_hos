---
title: "设置无主按钮的组件"
original_url: /docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button
format: md
upstream_id: dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button
last_sync: 2026-06-07
sync_hash: 7f9a86cf
---
## 场景介绍

从6.0.0(20)版本开始，新增支持设置无主按钮的组件。

[HdsActionBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsactionbar)组件支持多个按钮的样式。当应用开发者需要多个按钮并且没有主按钮，没有展开和收缩的动效时，可以通过设置左按钮和右按钮配置样式。

![](./img/b881bae0.png)

## 开发步骤

1. 导入相关模块。

   ```
   import { HdsActionBar, ActionBarButton } from '@kit.UIDesignKit'
   ```
2. 创建左边的按钮数组startButtons，创建右边的按钮数组endButtons，无主按钮，不支持切换展开和收缩状态。

   ```
   @Entry
   @ComponentV2
   struct TestNoPrimaryButton {

     build() {
       Column() {
         HdsActionBar({
           startButtons: [new ActionBarButton({
             baseIcon: $r('sys.symbol.stopwatch_fill')
           }), new ActionBarButton({
             baseIcon: $r('sys.symbol.stopwatch_fill')
           })],
           endButtons: [new ActionBarButton({
             baseIcon: $r('sys.symbol.mic_fill')
           })]
         })
       }
       .width('100%')
       .height('100%')
       .backgroundColor(0xF1F3F5)
       .justifyContent(FlexAlign.Center)
       .alignItems(HorizontalAlign.Center)
     }
   }
   ```
