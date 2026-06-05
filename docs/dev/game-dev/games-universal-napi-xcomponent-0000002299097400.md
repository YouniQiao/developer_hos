---
title: "渲染及窗口开发"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-universal-napi-xcomponent-0000002299097400
format: md
---


XComponent组件作为一种渲染组件，可用于EGL/OpenGLES和媒体数据写入，通过使用XComponent持有的“[NativeWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-window-guidelines)”来渲染画面，通常用于满足开发者较为复杂的自定义渲染需求，例如相机预览流的显示和游戏画面的渲染。其可通过指定type字段来实现不同的渲染方式，分别为[XComponentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#xcomponenttype10).SURFACE和XComponentType.TEXTURE。对于SURFACE类型，开发者将定制的绘制内容单独展示到屏幕上。对于TEXTURE类型，开发者将定制的绘制内容和XComponent组件的内容合成后展示到屏幕上。

了解更多XComponent组件内容请参见[自定义渲染 (XComponent)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-xcomponent-guidelines)。
