---
title: "旋转动画&lt;RotationAnimation&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/rotationanimation-0000001073889866
format: md
---


# 旋转动画&lt;RotationAnimation&gt;

## 动效概述

基础命令，有针对一个元素，例如一张图旋转，也有多张图组成的帧动画，通过这些动画可以实现动画旋转效果。

## XML规范

```
<Image x="" y="" centerX="" centerY="" src="">
    <RotationAnimation delay="" repeat="">
        <Rotation angle="" time=""/>
    </RotationAnimation>
</Image>
```

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| delay | 数值 | 选填 | 延迟，以ms毫秒记。延迟delay毫秒后执行动画播放。 |
| repeat | 数值 | 选填 | 动画重复播放次数，N表示重复N次，0表示无限次循环。 |
| angle | 数值 | 必填 | 旋转角度。 |
| time | 数值 | 必填 | [0-~]，相对于起始帧的间隔时间（毫秒），不小于0。 |

## 效果及脚本展示

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173447.12120002251714444821363055779496:20260601222020:2800:08E9312F2AA18AB7398E0C2E03803AEFF0F2F5A0AFBA2B65EF44F3DA68F11721.mp4)

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" screenWidth="1080" frameRate="30" vibrate="false" displayDesktop="true">

<!--背景图片-->
<Image src="bg.png" />
<!--设置摩天轮的位置，设置摩天轮的旋转中心点，摩天轮图片的命名-->
<Image x="172" y="688" centerX="540" centerY="544"  src="motianlun.png" >

    <RotationAnimation repeat="0">
        <Rotation angle="0" time="0"/>
        <Rotation angle="80" time="3000"/>
       <!--从0到3000ms时，图片顺时针旋转角度由0增至80。-->
        <Rotation angle="160" time="6000"/>
        <Rotation angle="240" time="9000"/>
        <Rotation angle="360" time="12000"/>
    </RotationAnimation>

</Image>
</Lockscreen>
```