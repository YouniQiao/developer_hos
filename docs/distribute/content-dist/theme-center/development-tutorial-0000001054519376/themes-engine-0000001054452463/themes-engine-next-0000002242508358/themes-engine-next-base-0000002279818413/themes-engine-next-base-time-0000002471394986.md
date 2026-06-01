---
title: "视图：时间&lt;Time&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-time-0000002471394986
---

# 视图：时间&lt;Time&gt;

## 功能概述

这里的时间，其实是由10个数字图片和分隔符图片依时间格式（HH:mm）组成的图片组合。使用该功能需要准备“0”-“9” 10张数字图片和“：”时间间隔图片。该组合图片也支持通用属性和图片的透明度、缩放、旋转动画。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 5.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | √ | √ | √ | √ |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

```
<Time src="" space=""/>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| src | 字符串 | 必填 | 时间图片的前缀和后缀组合字符串，例如src=“time.png"，此时文件夹中的数字图片和分隔符图片名称为”time\_0.png“，...，"time\_9.png"和”time\_dot.png" |
| space | 数值 | 选填 | 时间图片的间隔，单位为像素，数值越大图片之间的间距越大，小于0时图片会有重叠，默认值为0 |

## 应用示例

带透明度动画效果时间。设置时间图片在每个1000ms内从透明到不透明变化，呈现闪动效果。

```
<Time x="120" y="500" src="time.png">
  <AlphaAnimation>
    <Alpha a="0" time="0" />
    <Alpha angle="255" time="1000" />
  </AlphaAnimation>
</Time>
```