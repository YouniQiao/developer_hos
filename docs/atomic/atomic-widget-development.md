---
title: "服务卡片开发"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-widget-development
---

服务卡片的具体开发方式请参见[服务卡片开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview)。

服务卡片的详细设计规范请参见[服务卡片设计](https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904)。

服务卡片刷新的具体开发方式请参见[推送卡片刷新消息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-form-update)。

## 约束限制

* 整个元服务内最多允许添加16张卡片。同时每个卡片支持的所有尺寸都需要提供对应尺寸的卡片快照。
* 元服务不得通过服务卡片直接跳转到其他应用或其他元服务。
* [服务卡片开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview)部分章节（如[使用call事件拉起指定UIAbility到后台](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-call)，[通过router或call事件刷新卡片内容](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-uiability)）的示例中使用了非元服务高阶API的能力，在元服务中暂不支持这些功能。

## 性能优化

* 合理选择卡片刷新方式，降低服务卡片刷新功耗。

  为避免卡片频繁刷新带来的功耗问题，建议按照业务必要性选择合适的定时刷新间隔；即使元服务进程启动后也不要连续频繁刷新卡片。

  ![](./img/45785ee5.png)

  系统会根据卡片可见状态、整机负载、卡片刷新频次等因素综合决定卡片是否可以刷新。
* 采用以下方法，降低服务卡片对系统资源的占用。

  1. 为卡片设计合适的信息结构

     根据卡片大小，为卡片设计合适的信息结构，如控件、文本、图片等元素的数量及布局，保持服务卡片简洁易操作，避免造成卡片过于复杂，难于使用，同时也避免造成系统资源的浪费。
  2. 卡片不承载复杂的界面效果或交互逻辑

     不建议通过服务卡片实现高频的动态变换界面效果（如GIF动态图片、Swiper控件及连续高频调用updateForm接口等）。

     不在卡片内执行复杂交互，例如通过点击按钮出现二级选项后再选择下一步操作，或在卡片内使用长按或多指操作。
  3. 选择适合于当前显示设备的图片资源

     避免使用超过当前设备屏幕分辨率的高清图片资源，否则会带来内存及CPU资源的浪费。

     开发者使用图片资源时，应该充分考虑目标设备上显示图片的长宽及像素密度，卡片实际显示的尺寸可参考[尺寸与基础参数](https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904#section250mcpsimp)。

     + 通常按照“DPI\*界面实际显示宽高”提供图片资源。若考虑显示时的效果和精细度，可参照如下公式提供图片资源：

       图片宽高乘积 &lt;= 实际显示宽高乘积 \* (设备像素比^2)
     + 对于图片资源的格式，可参考下表。除此之外，还可以使用WebP等格式提供资源。

       **表1** 图片资源格式选择建议

       | 用途 | 建议 |
       | --- | --- |
       | 展示动画 | 优先使用ArkUI提供的属性动画、帧动画能力来实现动画和动效效果；无法满足效果时可以选择GIF图。 |
       | 展示图片 | 从平衡图片资源体积和显示效果角度，建议如果图片没有透明属性，优先选择JPEG图片资源；如果有透明属性，则选择PNG图片资源。 |
