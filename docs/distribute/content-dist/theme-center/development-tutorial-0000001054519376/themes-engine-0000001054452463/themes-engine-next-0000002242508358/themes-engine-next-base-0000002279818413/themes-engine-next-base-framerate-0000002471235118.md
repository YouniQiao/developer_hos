---
title: "适配功能：恒定帧率&lt;FrameRate&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-framerate-0000002471235118
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-framerate-0000002471235118
last_sync: 2026-06-07
sync_hash: a475b88e
---
# 适配功能：恒定帧率&lt;FrameRate&gt;

## 功能概述

指定引擎的帧率为固定值，在效果与功耗之间寻求平衡。

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
<Lockscreen frameRate="" vibrate="" screenWidth="" pressure="" />
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| frameRate | 数值 | 选填 | 屏幕刷新的帧率，数值越大，效果越好，功耗相对较高。默认60，推荐使用30 |

## 应用示例

演示屏幕刷新的帧率为固定值30时的示例。

```
<Lockscreen frameRate="30" vibrate="" screenWidth="" pressure="" />
```