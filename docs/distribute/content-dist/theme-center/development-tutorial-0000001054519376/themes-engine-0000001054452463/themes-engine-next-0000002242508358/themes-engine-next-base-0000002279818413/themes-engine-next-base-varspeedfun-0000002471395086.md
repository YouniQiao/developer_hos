---
title: "数学曲线：变速函数&lt;VarSpeedFun&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-varspeedfun-0000002471395086
---

# 数学曲线：变速函数&lt;VarSpeedFun&gt;

## 功能概述

变速函数提供了数值的非线性变化能力，主要用于基础动画中，控制缩放大小、透明度值等按照非线性进行变化。使用方法：在动画中设置varSpeedFlag属性，它作用于设置varSpeedFlag的帧以及下一帧，支持30种函数类型。例如，在位移动画中可以利用变速函数来控制图片从起始位置移动到结束位置过程中的移动速率。

目前变速函数已支持动画有AlphaAnimation、PositionAnimation、RotationAnimation、SizeAnimation、VariableAnimation。

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
<PositionAnimation>
    <Position x="" y="" time="" varSpeedFlag=""/>
    <Position x="" y="" time=""/>
</PositionAnimation>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| SineFun\_In | 字符串 | 选填 | 按照正弦曲线图呈现的效果缓入 |
| SineFun\_Out | 字符串 | 选填 | 按照正弦曲线图呈现的效果缓出 |
| SineFun\_InOut | 字符串 | 选填 | 按照正弦曲线图呈现的效果缓入缓出 |
| QuadFun\_In | 字符串 | 选填 | 按照二次方曲线图呈现的效果缓入 |
| QuadFun\_Out | 字符串 | 选填 | 按照二次方曲线图呈现的效果缓出 |
| QuadFun\_InOut | 字符串 | 选填 | 按照二次方曲线图呈现的效果缓入缓出 |
| CubicFun\_In | 字符串 | 选填 | 按照三次方曲线图呈现的效果缓入 |
| CubicFun\_Out | 字符串 | 选填 | 按照三次方曲线图呈现的效果缓出 |
| CubicFun\_InOut | 字符串 | 选填 | 按照三次方曲线图呈现的效果缓入缓出 |
| QuartFun\_In | 字符串 | 选填 | 按照四次方曲线图呈现的效果缓入 |
| QuartFun\_Out | 字符串 | 选填 | 按照四次方曲线图呈现的效果缓出 |
| QuartFun\_InOut | 字符串 | 选填 | 按照四次方曲线图呈现的效果缓入缓出 |
| QuintFun\_In | 字符串 | 选填 | 按照五次方曲线图呈现的效果缓入 |
| QuintFun\_Out | 字符串 | 选填 | 按照五次方曲线图呈现的效果缓出 |
| QuintFun\_InOut | 字符串 | 选填 | 按照五次方曲线图呈现的效果缓入缓出 |
| ExpoFun\_In | 字符串 | 选填 | 按照指数曲线图呈现的效果缓入 |
| ExpoFun\_Out | 字符串 | 选填 | 按照指数曲线图呈现的效果缓出 |
| ExpoFun\_InOut | 字符串 | 选填 | 按照指数曲线图呈现的效果缓入缓出 |
| CircFun\_In | 字符串 | 选填 | 按照圆形曲线图呈现的效果缓入 |
| CircFun\_Out | 字符串 | 选填 | 按照圆形曲线图呈现的效果缓出 |
| CircFun\_InOut | 字符串 | 选填 | 按照圆形曲线图呈现的效果缓入缓出 |
| BackFun\_In | 字符串 | 选填 | 按照超过范围的三次方曲线图呈现的效果缓入 |
| BackFun\_Out | 字符串 | 选填 | 按照超过范围的三次方曲线图呈现的效果缓出 |
| BackFun\_InOut | 字符串 | 选填 | 按照超过范围的三次方曲线图呈现的效果缓入缓出 |
| ElasticFun\_In | 字符串 | 选填 | 按照指数衰减的正弦曲线图呈现的效果缓入 |
| ElasticFun\_Out | 字符串 | 选填 | 按照指数衰减的正弦曲线图呈现的效果缓出 |
| ElasticFun\_InOut | 字符串 | 选填 | 按照指数衰减的正弦曲线图呈现的效果缓入缓出 |
| BounceFun\_In | 字符串 | 选填 | 按照指数衰减的反弹曲线图呈现的效果缓入 |
| BounceFun\_Out | 字符串 | 选填 | 按照指数衰减的反弹曲线图呈现的效果缓出 |
| BounceFun\_InOut | 字符串 | 选填 | 按照指数衰减的反弹曲线图呈现的效果缓入缓出 |

## 应用示例

```
<Image src="ty.png" x="100" y="690" centerX="136" centerY="351">
  <PositionAnimation>
    <Position x="0" y="0" time="0" varSpeedFlag="SineFun_Out" />
    <Position x="500" y="0" time="4000" />
    <Position x="800" y="0" time="6000" />
  </PositionAnimation>
</Image>
```