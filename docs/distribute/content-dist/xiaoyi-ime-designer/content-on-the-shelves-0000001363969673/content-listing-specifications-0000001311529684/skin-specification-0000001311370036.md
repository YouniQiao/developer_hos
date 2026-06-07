---
title: "（鸿蒙4.3及以下）皮肤规范"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/xiaoyi-ime-designer/content-on-the-shelves-0000001363969673/content-listing-specifications-0000001311529684/skin-specification-0000001311370036
format: md
---


# （鸿蒙4.3及以下）皮肤规范

<strong>1. 皮肤设计规范文件结构说明</strong>

（1）全局介绍

![](./img/a31a5fb0f27a.png)

（2）theme资源包介绍(皮肤切图由供应商执行）

![](./img/e2614ae37254.png)

（3）皮肤预览图介绍

![](./img/02eab8897fff.png "点击放大")

<strong>2. 通用模块说明</strong>

输入法键盘皮肤由候选栏+拼音区+云候选区+键盘大背景+9键键盘+26键键盘+弹泡等元素组合设计；

合理设计按键前景和背景组合，保证所有按键的字符清晰可见！！！！！！！

![](./img/61acd56afb28.png "点击放大")

<strong>(1) 按键区域</strong>

每个按键要有明显的按下效果，所有按键按下状态，位置和大小需保持和非按下状态一致；

![](./img/e08eed0ae00f.png "点击放大")

键盘背景图：9键、26键、符号页面、更多候选词页面；二三级页面背景图：menu页面、emoji页面等；

![](./img/93a9e81895f3.png "点击放大")

动态背景（非必选）：仅应用于普通键盘9/26键键盘背景，格式-MP4，时长-不超过10秒，文件大小-不超过1M；

![](./img/390ea76b642f.png)

重绘说明（前景）：

必选：（可不重绘，但是要提供文件）

![](./img/a7561bdd0ba1.png "点击放大")

可选：(可不重绘，不重绘不需要提供文件)

![](./img/a7b04cd362f5.png "点击放大")

前景灌色说明：

![](./img/f721bedd21f9.png)

候选词颜色说明（多处共用该色值，需合理设计）

![](./img/f6a83028fc32.png "点击放大")

按键背景说明：

![](./img/487791be06c9.png)

按键动效说明（非必选，详见“theme资源列表-增量属性sheet”）：

![](./img/665896afda6b.png)

打字弹窗灌色示例：

![](./img/0d436bcde26a.png "点击放大")

<strong>（2）悬浮键盘</strong>

键盘背景图：与正常键盘背景一致 区别底部两个角是圆角 menu页头部背景图：与功能栏背景图风格保持一致

![](./img/f37084234b0b.png) ![](./img/7f55b6a93997.png)

头部区域背景图

![](./img/94982a28f07c.png)

顶部 icon 背景色

![](./img/df6b3f8b78ab.png)

<strong>（3）拼音View</strong>

普通键盘 共用

拼音编辑背景图（直角设计）、图片：拼音View背景/云词背景 拼音view关闭icon

![](./img/2fe3c5db6527.png) ![](./img/8970eec2f85e.png)

悬浮键盘 手写模式View背景图

拼音编辑背景图（圆角设计）、灌色：拼音View背景/云词背景

![](./img/5e9aef09c5c8.png) ![](./img/d0c55fb336f8.png)

<strong>(4) Emoji页面</strong>

灌色说明

底部统一逻辑、顶部统一逻辑（未选中/选中态） 密语页面灌色设计

![](./img/5e3b68c3db7b.png "点击放大") ![](./img/170675caa2ab.png "点击放大")

图片设计

![](./img/032e040f0057.png "点击放大") ![](./img/3309de08fc76.png "点击放大")

表情包页面灌色设计

![](./img/339530816985.png "点击放大")

<strong>（5）Menu页面</strong>

编辑页面-仅灌色： 补充说明

按键文字颜色 按键文字默认颜色会应用在下图（1）

按键背景颜色 按键文字高亮颜色会应用在下图（2）

中心圆描边颜色

![](./img/d3c1d5cdae9d.png "点击放大") ![](./img/ed46c759acbc.png) ![](./img/bad0d77d90c9.png)

剪切板页面： 补充说明：

剪贴板个数颜色 剪贴板个数颜色会应用在下图

每条剪贴板背景图

剪贴板底部item背景

其他文字颜色：编辑页面默认文字颜色一致

![](./img/b03b91221386.png) ![](./img/8b3fc62e7ade.png)

（6）<strong>盲打设置</strong>

![](./img/25847c529fbe.png)

<strong>3. PSD文件说明</strong>

图层结构：

各个图层分组相互独立，请勿使用混合样式，尽量不要修改设计源文件中的图层组结构；

按键和背景或者按键和前景字之间不可使用图层样式；

前景字体：

PSD文档中前景字不可使用加粗、倾斜、描边等效果，不可更改字号大小，显示位置和显示范围固定；

字体支持设计，需提供字体文件。

<strong>4. 打包自测说明</strong>

（1）打包说明

![](./img/d356e0053d0a.png "点击放大")

（2）自测说明

![](./img/81c44ca5fc20.png "点击放大")

<strong>5. 审核上架流程说明</strong>

![](./img/dcdb2ac3b91b.png)

<strong>6. 键盘皮肤制作注意事项</strong>

（1）theme资源列表规范-资源列表”中涉及内容不能缺失，格式不能修改，且存放在正确的文件中。

![](./img/314bc6196d60.png)

（2) theme资源列表规范-增量属性”中按键背景单独设计后，必须将对应的xml文件放在“drawable、drawable-night”文件夹中。

![](./img/6b4bd606b2da.png)

(3) 常见问题讲解

长按候选词色块颜色（ item\_pressed\_color 色值）设置透明度，不要出现看不清或看不到候选词内容。

![](./img/aec58e223841.png "点击放大")

拼音编辑背景图（悬浮键盘+普通键盘）切图上方未留白，参考demo图切图

![](./img/759ab9064e9f.png "点击放大")

删除按键设计时不要纯“x”出现，数字键盘会被误认为乘号。

![](./img/a9b812b85798.png "点击放大")

emoji页底部tab背景图直角设计，不要有透明度

![](./img/04eee07203fc.png "点击放大")

联想词默认颜色和背景图设计要注意显示问题，不要看不到或者严重看不清的情况。

![](./img/423dcbc5232f.png)

预览图和实际效果的按键和颜色保持一致。

![](./img/20503446946a.png "点击放大")

“返回”按键iconic\_symbols\_return.svg和回车按键ic\_return.svg设计要有区分。

![](./img/5d12b0f7508f.png "点击放大")

拼音编辑背景图颜色，不要和候选词默认颜色/高亮色相同或极度相近，避免看不见或看不清。

![](./img/a0983d87b418.png)

<strong>参考文件链接</strong>

[【鸿蒙4.3及以下】皮肤设计规范-参考文件](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251222165100.46204567657134247917364051603759%3A50001231000000%3A2800%3A9682DCF2DF9DD48A1EC2E398F0E0783468BA5AADA7F240D86F1E4D40EEE9D074.zip?needInitFileName=true)