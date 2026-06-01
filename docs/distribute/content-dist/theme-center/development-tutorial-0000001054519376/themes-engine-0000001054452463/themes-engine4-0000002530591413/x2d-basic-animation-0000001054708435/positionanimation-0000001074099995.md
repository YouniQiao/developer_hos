---
title: "位移动画&lt;PositionAnimation&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/positionanimation-0000001074099995
---

# 位移动画&lt;PositionAnimation&gt;

## 动效概述

基础命令，有针对一个元素，例如一张图位移，也有多张图组成的帧动画，通过这些动画可以实现动画位移效果。

## XML规范

```
<Image x="" y="" centerX="" centerY="" src="">
    <PositionAnimation delay="" repeat="">
        <Position x="" y="" time=""/>
    </PositionAnimation>
</Image>
```

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| delay | 数值 | 选填 | 延迟，以ms毫秒记。延迟delay毫秒后执行动画播放。 |
| repeat | 数值 | 选填 | 动画重复播放次数，N表示重复N次，0表示无限次循环。 |
| x | 数值 | 必填 | 相对于图片初始位置的x坐标，整数。 |
| y  time | 数值  数值 | 必填  必填 | 相对于图片初始位置的y坐标，整数。  [0-~]，相对于起始帧的间隔时间（毫秒），不小于0。 |

## 效果及脚本展示

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173445.70629215825478067297405465267925:20260601222017:2800:50023514DBF53E16F0AB0F3FDEEB5222C8E1F5B52B7DFA1E8418EC4C6D54101D.mp4)

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" screenWidth="1080" frameRate="30" vibrate="false" displayDesktop="true">

<!--背景图片-->
<Image src="bg.png" />

<!--云朵1的位移-->
<Image   src="1.png">
    <PositionAnimation repeat="0">
        <Position x="-1080" y="0" time="0"/>
        <Position x="-900" y="0" time="1000"/>
        <!--从0~1000ms坐标由（-1080，0)变为(-900，0)-->
        <Position x="-600" y="0" time="2000"/>
        <!--从1000~2000ms坐标由（-900，0)变为(-600，0)-->
        <Position x="-300" y="0" time="3000"/>
        <Position x="0" y="0" time="4000"/>
        <Position x="300" y="0" time="5000"/>
        <Position x="600" y="0" time="6000"/>
        <Position x="900" y="0" time="7000"/>
        <Position x="1200" y="0" time="8000"/>
    </PositionAnimation>
</Image>

<!--云朵2的位移-->
<Image   src="2.png">
    <PositionAnimation repeat="0">
        <Position x="-1080" y="0" time="0"/>
        <Position x="-800" y="0" time="1000"/>
        <Position x="-600" y="0" time="2000"/>
        <Position x="-400" y="0" time="3000"/>
        <Position x="-200" y="0" time="4000"/>
        <Position x="0" y="0" time="5000"/>
        <Position x="200" y="0" time="6000"/>
        <Position x="400" y="0" time="7000"/>
        <Position x="600" y="0" time="8000"/>
        <Position x="800" y="0" time="9000"/>
        <Position x="1000" y="0" time="10000"/>
        <Position x="1200" y="0" time="12000"/>
    </PositionAnimation>
</Image>

</Lockscreen>
```