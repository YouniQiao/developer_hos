---
title: "网格化-水波纹&lt;MeshImage-SinMotion&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-2da-meshimagesinmotion-0000002504355009
---

# 网格化-水波纹&lt;MeshImage-SinMotion&gt;

## 功能概述

可实现局部水波荡漾、迎风飘舞等效果。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 5.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | √ | x | √ | x |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

```
<MeshImage x="" y="" w="" h="" mesh="" center_point="" src="">
  <SinMotion a="" factor_k="" no_move_distance_x="" no_move_distance_y="" />
</MeshImage>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| a | 数值 | 选填 | 水波幅度(振幅)，取实数，单位为像素，默认为20，支持表达式。 |
| factor\_k | 数值 | 选填 | 相位，k值可以产生水波移动，值越大运动越快，值越小运动越缓，默认0.2，支持表达式 |
| no\_move\_distance\_x | 数值 | 选填 | x轴方向不动的点，离中心点大于no\_move\_distance\_x距离的点无水波荡漾。设置的值需大于0，如果为0值则被认为是图片宽度，默认为图片宽度，单位为像素，支持表达式。 |
| no\_move\_distance\_y | 数值 | 选填 | y轴方向不动的点，离中心点大于no\_move\_distance\_y距离的点无水波荡漾。设置的值需大于0，如果为0值则被认为是图片高度，默认为图片高度，单位为像素，支持表达式。 |

## 应用示例

```
<MeshImage x="0" y="0" w="648" h="1440" mesh="6,6" center_point="25" sensor="false" src="anim/dj_100.jpg">
    <SinMotion a="20" factor_k="0.2" no_move_distance_x="108" no_move_distance_y="240"/>
</MeshImage>
```