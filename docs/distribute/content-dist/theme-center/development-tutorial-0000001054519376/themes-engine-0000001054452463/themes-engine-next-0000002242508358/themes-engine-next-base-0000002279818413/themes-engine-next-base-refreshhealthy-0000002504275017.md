---
title: "命令：运动健康数据刷新命令&lt;RefreshHealthyCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-refreshhealthy-0000002504275017
format: md
---


# 命令：运动健康数据刷新命令&lt;RefreshHealthyCommand&gt;

## 功能概述

RefreshHealthyCommand主要在需要手动刷新运动健康变量的值时使用。

![](./img/97fbde34cf4e.png)

1. 运动健康在应用、亮屏、进入前台这几种情况下会自动刷新，不再需要在resume中添加刷新命令。

2. 不再需要在pause中添加刷新命令，会导致在熄屏后打开监听，增加功耗。

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