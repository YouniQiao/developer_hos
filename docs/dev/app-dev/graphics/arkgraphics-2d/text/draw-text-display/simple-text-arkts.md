---
displayed_sidebar: appDevSidebar
title: "简单文本绘制与显示（ArkTS）"
original_url: /docs/dev/app-dev/graphics/arkgraphics-2d/text/draw-text-display/simple-text-arkts
format: md
---


## 场景介绍

在一个简单的用户界面中，可能只需要展示几行静态文本，例如标签、按钮上的文字、菜单项或状态栏中的提示信息。此时，开发者只需要选择合适的字体、大小和颜色即可完成渲染。

## 相关属性

此场景示例，涉及到的文本样式属性如下，具体及更多文本样式可参考[TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#textstyle)。

* color：字体颜色，默认为白色。请注意与画布颜色进行区分，以保证文本的正常显示。
* fontSize：字体大小，浮点数，默认为14.0，单位为物理像素px。

## 开发步骤

1. 通过context获取到Canvas画布对象。

   ```
   let canvas = context.canvas;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/TextEngine/SimpleTextDrawing/entry/src/main/ets/pages/Index.ets#L26-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

2. 初始化文本样式，此处设置字体颜色为红色，字体大小为100px。

   ```
   // 获取文本样式
   let myTextStyle: text.TextStyle = {
     // 文本颜色
     color: {
       alpha: 255,
       red: 255,
       green: 0,
       blue: 0
     },
     // 文本大小
     fontSize: 100
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/TextEngine/SimpleTextDrawing/entry/src/main/ets/pages/Index.ets#L29-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

3. 初始化段落样式。

   ```
   let myParagraphStyle: text.ParagraphStyle = {
     textStyle: myTextStyle,
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/TextEngine/SimpleTextDrawing/entry/src/main/ets/pages/Index.ets#L44-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

4. 初始化段落对象，并添加文本。

   ```
   let fontCollection = text.FontCollection.getGlobalInstance();
   let ParagraphGraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
   // 更新文本样式
   ParagraphGraphBuilder.pushStyle(myTextStyle);
   // 添加文本
   ParagraphGraphBuilder.addText("Hello World");
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/TextEngine/SimpleTextDrawing/entry/src/main/ets/pages/Index.ets#L49-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

5. 排版段落并进行文本绘制。

   ```
   // 生成段落
   let paragraph = ParagraphGraphBuilder.build();
   // 布局
   paragraph.layoutSync(1250);
   // 绘制文本
   paragraph.paint(canvas, 0, 100);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/TextEngine/SimpleTextDrawing/entry/src/main/ets/pages/Index.ets#L58-L65" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 效果展示

![](./img/b17b527d.png)
