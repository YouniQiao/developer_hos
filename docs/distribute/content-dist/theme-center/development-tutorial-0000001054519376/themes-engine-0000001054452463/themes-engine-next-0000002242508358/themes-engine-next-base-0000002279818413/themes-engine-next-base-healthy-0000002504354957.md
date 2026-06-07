---
title: "数据开放：运动健康数据开放&lt;Healthy&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-healthy-0000002504354957
format: md
---


# 数据开放：运动健康数据开放&lt;Healthy&gt;

## 功能概述

开放运动健康App的步数、距离、卡路里、实时心率和静息心率数据，设计师可以根据这些数据制作创意主题。

![](./img/d2ff8a03a2e1.png)

使用步数需要先声明轮询信息，亮屏时建议添加数据刷新命令。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 5.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | √ | √ | √ | x |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

```
<Healthy polling="true" time="5">
    <Var name="steps_value"/>
    <Var name="distance_value"/>
    <Var name="calories_value"/>
</Healthy>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| polling | 布尔值 | 选填 | 轮询开关，true为开启轮询，false为关闭轮询。默认是false。 |
| time | 数值 | 选填 | 轮询时间间隔，单位（秒），最小值为1，仅在polling为true的时候有效。默认是5秒。 |
| name | 字符串 | 必填 | 参照下面运动健康数据类型取值。 |

## 运动健康数据类型

| 名称和取值 | 含义 | 最快更新频率 | 单位说明 |
| --- | --- | --- | --- |
| steps\_value | 步数 | 秒级 | 步 |
| distance\_value | 距离 | 秒级 | 米 |
| calories\_value | 卡路里 | 秒级 | 卡 |

## 应用示例

每隔5秒刷新一次步数、距离、卡路里、实时心率、静息心率的值，并通过文本展示出来。同时支持手动点击按钮，刷新这些数据。

```
<Text name="t1" color="#ffffff" format="步数总值:%s" paras="#steps_value" size="50" x="100" y="100"/>
<Text name="t2" color="#ffffff" format="距离总值:%s" paras="#distance_value" size="50" x="100" y="100"/>
<Text name="t3" color="#ffffff" format="卡路里总值:%s" paras="#calories_value" size="50" x="100" y="100"/>
```