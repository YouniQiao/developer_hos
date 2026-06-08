---
title: "视图：动态图片&lt;Image&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-image2-0000002471234986
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-image2-0000002471234986
last_sync: 2026-06-07
sync_hash: 6fec064d
---
# 视图：动态图片&lt;Image&gt;

## 功能概述

Image的增强功能，支持Gif类型图片循环播放。

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
<Image src="" loop="" />
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| src | string | 必填 | 图片文件名，如：image.gif，也可在前加文件夹，如wenjianjia/image.gif。当图片名称中包含.gif，循环播放Gif图片;图片的大小、位置等参数与Image设置相同，只需要在src参数中填入gif图片名称即可。小于5.0MB动态显示，大于或等于5.0MB静态显示，设计师应提供大小合适图片资源。 |
| loop | string | 选填 | 该参数不配置或空，默认循环播放gif动画；若显式配置该参数true循环播放或false只播放一次。 |

## 应用示例

gif背景动态图显示播放。

```
<Image x="0" y="0" src="shuiwa.gif" loop="true" />
```