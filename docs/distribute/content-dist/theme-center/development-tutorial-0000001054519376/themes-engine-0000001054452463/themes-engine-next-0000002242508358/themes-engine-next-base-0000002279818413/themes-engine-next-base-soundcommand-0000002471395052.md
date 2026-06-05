---
title: "命令：声音命令&lt;SoundCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-soundcommand-0000002471395052
format: md
---


# 命令：声音命令&lt;SoundCommand&gt;

## 功能概述

声音命令，用来控制播放音频文件。

支持播放1MB以下的音频资源文件，文件大小超过1MB的长音频将截取1MB大小数据进行播放。

![](./img/d26266d3db75.png)

对于锁屏来电，控制栏上拉、下拉等主题引擎冻结的场景，引擎解锁后不会执行SoundCommand。

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

```
<SoundCommand sound="" volume="" loop="" play="" keepCur="" />
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| sound | string | 必填 | 声音文件路径名 |
| volume | number | 必填 | 正浮点数，声音大小，0~1的一个浮点数。数值越大，音量越大 |
| loop | string | 选填 | 是否循环播放，true/false，默认是false |
| keepCur | string | 选填 | 播放此音频时，是否保持当前正在播放的声音，true/false，默认false。只有当同时播放的音频数量大于系统最大值时才暂停优先级低的音频数据 |
| play | 表达式 | 选填 | 播放或暂停声音，支持数字表达式，true或非0播放声音，false或0暂停指定声音播放，false或0不传sound时停止所有声音播放，默认为1 |

## 应用示例

控制循环播放reached.mp3，同时不停掉正在播放的其他声音。

```
<SoundCommand sound="reached.mp3" volume="0.5" loop="true" play="" keepCur="true" />
```