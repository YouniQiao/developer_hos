---
title: "可见性命令&lt;VisibilityCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/visibilitycommand-0000001074484560
---

# 可见性命令&lt;VisibilityCommand&gt;

## 功能概述

除了在基础命令command中通过target的visibility属性来控制对象的可见性外，还支持在图片、文本等对象中配置visibility参数来控制对象可见性。

## 应用场景

每次点击屏幕，可显示不同的图片，比如多壁纸切换，漫画连载等。

可根据时间，实现屏幕黑白模式。

## XML规范

```
<Image x="" y="" w="" h="" align="" antiAlias="" visibility=""/>
<Text x="" y="" align="" alignV="" color="" size="" textExp="" visibility=""/>
```

## 参数说明

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| visibility | 表达式 | 必填 | 用于设置对象可见性，为true、&gt;0则可见，为false、≤0不可见，支持表达式。 |

## 应用示例

<strong>示例一：</strong>通过自定义变量控制文本或图片可见、不可见。

```
<Image x="100" y="750" centerX="136" centerY="151" src="dog.png" visibility = "true"/>
<Image name="sun" x="350" y="550" w="828*0.4" h="828*0.4" centerX="136" centerY="151" src="cake.png" visibility="1"/>
<Var name="isVisibility" expression="1"/>
<Text x="540" y="500" color="#00ff00" size="60" text="点击屏幕上方可见" align="center" visibility="eq(#isVisibility,1)"/>
```