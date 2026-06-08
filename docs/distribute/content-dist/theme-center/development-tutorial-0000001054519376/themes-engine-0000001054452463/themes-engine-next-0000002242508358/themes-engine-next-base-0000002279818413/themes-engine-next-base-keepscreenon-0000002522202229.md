---
title: "命令：自定义亮屏时间&lt;KeepScreenOnCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-keepscreenon-0000002522202229
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-keepscreenon-0000002522202229
last_sync: 2026-06-07
sync_hash: d484ded4
---
# 命令：自定义亮屏时间&lt;KeepScreenOnCommand&gt;

## 功能概述

锁屏灭屏命令，通过该命令可以自定义锁屏亮屏的时间。

<strong>创意场景</strong>

1、冥想类主题。

2、长时间的游戏互动场景。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 6.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | x | x | x | x |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

```
<KeepScreenOnCommand action="start" duration="{10000}"/>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| action | 字符串 | 必填 | 取值：start（开始亮屏）/reset（重置为系统默认设置），默认：start。 |
| duration | 数值 | 选填 | 单位：ms毫秒。控制锁屏在一定时间内抑制亮屏，不自动灭屏，限制：最小值10秒，最大值 10分钟。默认：10s |

![](./img/caefeb8cf660.png)

1. 亮屏时间，超过10分钟，按10分钟处理；小于10s，按10s处理。

2. 多个action为start的保持亮屏命令同时执行，只执行第一个；action为reset的命令执行后，可再次执行start命令。

## 应用示例

示例：通过点击事件锁屏延时10秒灭屏。

```
<Button x="600" y="500" h="250" w="260">
       <Trigger action="down">
              <KeepScreenOnCommand action="start" duration="100000"/>
       </Trigger>
</Button>
```