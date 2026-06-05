---
title: "命令：天气数据刷新命令&lt;RefreshWeatherCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-refreshweather-0000002471395074
format: md
---


# 命令：天气数据刷新命令&lt;RefreshWeatherCommand&gt;

## 功能概述

RefreshWeatherCommand主要在需要手动刷新天气变量的值时使用。

![](./img/c31337c71a75.png)

天气在应用、亮屏、进入前台这几种情况下会自动刷新，不再需要在resume中添加刷新命令。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 5.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | √ | x | √ | √ |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

不涉及

## 参数说明

不涉及

## 应用示例

通过点击事件刷新当天的数据。

```
<Weather>
    <Var name="Weather.today.weatherid" expression="999"/>
    <Var name="Weather.today.aqivaluetext" expression="'bbb'"/>
    <Var name="Weather.today.currentTem" expression="222"/>
    <Var name="Weather.today.maxtemp" expression="333"/>
    <Var name="Weather.today.mintemp" expression="444"/>
</Weather>
<Image x="600" y="500" h="250" w="260" src="bj.jpg"/>
<Button x="600" y="500" h="250" w="260">
    <Trigger action="down">
        <RefreshWeatherCommand/>
    </Trigger>
</Button>
```