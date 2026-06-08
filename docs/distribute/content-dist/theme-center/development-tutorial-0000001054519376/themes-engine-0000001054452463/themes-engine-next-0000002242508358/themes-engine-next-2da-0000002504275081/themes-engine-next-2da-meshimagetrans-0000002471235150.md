---
title: "网格化-位移&lt;MeshImage-Translation&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-2da-0000002504275081/themes-engine-next-2da-meshimagetrans-0000002471235150
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-2da-0000002504275081/themes-engine-next-2da-meshimagetrans-0000002471235150
last_sync: 2026-06-07
sync_hash: d31775ce
---
# 网格化-位移&lt;MeshImage-Translation&gt;

## 功能概述

可实现局部区域抖动效果，如果需要响应加速度传感器，需要设置sensor="true"，否则不会响应。局部区域根据参数center\_point、no\_move\_distance\_x和no\_move\_distance\_y计算。例如：图片w=1080，h=1920，meshx=6，meshy=6，则每个网格区域的宽为180，高为320，若center\_point=25，no\_move\_distance\_x=180，no\_move\_distance\_y=320，则x轴方向上距离中心点25距离小于等于180，且y轴方向上距离中心点25距离小于等于320的所有网格顶点17、18、19、24、26、31、32、33组成的区域为可移动区域，当手指滑动图片时可移动区域与9,13,37,41组成的外圈有位移拉伸效果。

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
<?xml version="1.0" encoding="UTF-8"?>
<MeshImage mesh="" center_point="" sensor="" src="">
  <Translation duration="" repeat="" delay="" factor="" values="" max_distance_x="" max_distance_y="" no_move_distance_x="" no_move_distance_y="" />
</MeshImage>
```

## 参数说明

<strong>MeshImage</strong> <strong>参数说明</strong>

网格化动画标签，划分网格数量，设置网格中心点。

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| mesh | 字符串 | 必填 | 用英文逗号分开的两个正整数，表示图片x,y轴上划分的网格数，如："20,20"表示图片x,y轴上分别划分20个网格。x,y轴网格数取值范围为[2,屏幕宽度/高度的二分之一]的整数，且x,y轴网格数至少有一个大于等于2。 |
| center\_point | 数值 | 选填 | 网格中心点编号，可指定具体数字。不设置时程序默认计算公式为：(int) (((meshX+ 1) \* (meshY+ 1)) / 2 + 0.5）。如：mesh="6,6"，共划分为36个网格，共49个顶点，则第25个顶点为中心点。 |
| sensor | 字符串 | 选填 | 是否支持通过加速度传感器来控制网格化的位移动效。true/false，默认为false。为true时，晃动手机触发动效开始。 |
| src | 字符串 | 选填 | 图片资源名称，支持变量，如@abc。 |

<strong>Translation</strong> <strong>参数说明</strong>

网格化-位移标签，实现局部区域抖动效果。

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| duration | 数值 | 选填 | 单次动画持续时间（毫秒），取值正整数，默认为2000，支持表达式。最小值为1000。 |
| repeat | 数值 | 选填 | 动画重复次数，-1表示无限循环，0表示不重复，n表示重复n+1次，默认为0，支持表达式。最小值为-1。 |
| delay | 数值 | 选填 | 动画延迟执行的毫秒数，即触发动画后需要delay毫秒才开始执行动画，取值正整数，默认为0，支持表达式。 |
| factor | 数值 | 选填 | 动画回弹因子，取值（0~1]之间，值越大回弹幅度越小，默认为0.2，支持表达式。 |
| values | 字符串 | 必填 | 由多个0-1之间的实数构成的运动参数列表，实数个数最少2个，最多5个。示例：“1.0,0,1.0”表示从当前位置运动到初始位置，然后又运动到当前位置，实数值越大移动距离越大，但受限于max\_distance\_x和max\_distance\_y。 |
| max\_distance\_x | 数值 | 选填 | x轴最大运动距离，单位为像素，取值为(0，每个网格宽度)，默认为一个网格宽度，支持表达式。 |
| max\_distance\_y | 数值 | 选填 | y轴最大运动距离，单位为像素，取值为(0，每个网格高度)，默认为一个网格高度，支持表达式。 |
| no\_move\_distance\_x | 数值 | 选填 | x轴方向不动的点，离中心点大于no\_move\_distance\_x距离的点不动。设置的值需大于0，如果为0值则被认为是图片宽度，默认为图片宽度，单位为像素，支持表达式。 |
| no\_move\_distance\_y | 数值 | 选填 | y轴方向不动的点，离中心点大于no\_move\_distance\_y距离的点不动。设置的值需大于0，如果为0值则被认为是图片高度，默认为图片高度，单位为像素，支持表达式。 |

## 应用示例

```
<?xml version="1.0" encoding="UTF-8"?>
<MeshImage x="108" y="108" w="648" h="1440" mesh="6,6" center_point="25" sensor="false" src="anim/dj_100.jpg">
  <Translation duration="2000" repeat="0" delay="0" factor="0.2" values="1.0,0" max_distance_x="108" max_distance_y="240" no_move_distance_x="108" no_move_distance_y="240" />
</MeshImage>
```