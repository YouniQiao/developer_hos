---
title: "可变帧率&lt;VariableFramerate&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/adaptationfunction-0000001074147794/variableframerate-0000001074644802
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/adaptationfunction-0000001074147794/variableframerate-0000001074644802
last_sync: 2026-06-07
sync_hash: c86e05b5
---
# 可变帧率&lt;VariableFramerate&gt;

## 功能概述

根据时间线指定不同帧率，可以指定在规定的时间内使用某一种帧率，实现不同帧率切换。目前只支持改变一次帧率。

## 应用场景

* 可用于雪花飘落时制作类似慢镜头的效果。可用于设置动画从低帧率到高帧率的变化过程。

## XML规范

```
<VariableFramerate>
    <VariablePoint frameRate="" time=""/>
    <VariablePoint frameRate="" time=""/>
</VariableFramerate>
```

## 参数说明

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| frameRate | 数值 | 必填 | 屏幕刷新的帧率，数值越大，效果越好，功耗相对较高。默认60，推荐使用30 |
| time | 数值 | 必填 | 循环时间，单位为ms毫秒 |

## 应用示例

<strong>示例一：</strong>演示屏幕刷新帧率在5和30之间的动态切换的示例。设置了切换时间，先显示帧率为5的效果，然后10秒后切换到帧率30展示动效。

```
<VariableFramerate>
    <VariablePoint frameRate="5" time="0"/>
    <VariablePoint frameRate="30" time="10000"/>
</VariableFramerate>
<Wallpaper/>
<Text align="center" text="位置移动" size="48" color="#000000" y="700" x="240"/>
<Image y="390" x="610" src="ty.png" centerY="151" centerX="136">
    <PositionAnimation>
        <Position time="0" y="0" x="0"/>
        <Position time="1000" y="0" x="-150"/>
        <Position time="2000" y="150" x="-150"/>
        <Position time="3000" y="150" x="0"/>
        <Position time="4000" y="0" x="0"/>
    </PositionAnimation>
</Image>
<Unlocker bounceAcceleration="3000" bounceInitSpeed="2000" name="unlocker">
    <StartPoint y="#screen_height-300" x="300" h="300" w="470"> </StartPoint>
    <EndPoint y="#screen_height-650" x="300" h="300" w="50">
        <Path y="#screen_height-300" x="300" h="300" w="470">
            <Position y="0" x="0"/>
            <Position y="-200" x="0"/>
        </Path>
    </EndPoint>
</Unlocker>
```

## 制作视频

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173505.18533908906949466478612802647688:20260601221719:2800:B8AAD7CFF341F227EB0CD1840499B3F1892FCCAE335D9764C7C6A5CA9CAF3C47.mp4)