---
title: "变量动画&lt;VariableAnimation&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/variableanimation-0000001074338322
---

# 变量动画&lt;VariableAnimation&gt;

## 动效概述

基础命令，让一个变量在规定时间内变化的动画。

## XML规范

```
<Var name="">
    <VariableAnimation delay="" repeat="">
        <AniFrame value="" time=""/>
        <AniFrame value="" time=""/>
    </VariableAnimation>
</Var>
```

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| delay | 数值 | 选填 | 延迟，以ms毫秒记。延迟delay毫秒后执行动画播放。 |
| repeat | 数值 | 选填 | 动画重复播放次数，N表示重复N次，0表示无限次循环。 |
| value | 数值 | 必填 | 这一刻时间变量的数值。 |
| time | 数值 | 必填 | [0-~]，相对于起始帧的间隔时间（毫秒），不小于0。 |

## 效果和脚本展示

### 变量动画示例一：位移

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173453.34475733784784155221512493751902:20260601222027:2800:E137B0225166081A738D53B1DE3FD438504923B4F291732865FD71D61D932745.mp4)

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" screenWidth="1080" frameRate="30" vibrate="false" displayDesktop="true">
<Var expression="#screen_height" name="sh" />
<Image src="bg.png" />

<!--可以通过自定义变量控制图片的变量动画，例如：time等于4500ms时变量数值为“-1200”。-->
<Var name="weiyi1">
        <VariableAnimation delay="2000">
            <AniFrame value="0" time="0" />
            <AniFrame value="-1200" time="4500" />
            <AniFrame value="-2900" time="9200" />
        </VariableAnimation>
    </Var>
    <Var name="weiyi2">
        <VariableAnimation>
            <AniFrame value="0" time="0" />
            <AniFrame value="-2355" time="10000" />
        </VariableAnimation>
    </Var>
    <Var name="weiyi3">
        <VariableAnimation>
            <AniFrame value="0" time="0" />
            <AniFrame value="-2258" time="12000" />
        </VariableAnimation>
    </Var>
    <Var name="weiyi4">
        <VariableAnimation>
            <AniFrame value="0" time="0" />
            <AniFrame value="-2306" time="12000" />
        </VariableAnimation>
    </Var>
    <Var name="weiyi5">
        <VariableAnimation>
            <AniFrame value="0" time="0" />
            <AniFrame value="-2385" time="14000" />
        </VariableAnimation>
    </Var>
    <Var name="weiyi6">
        <VariableAnimation delay="5000">
            <AniFrame value="0" time="0" />
            <AniFrame value="-2579" time="10000" />
        </VariableAnimation>
    </Var>
     <Var name="weiyi7">
        <VariableAnimation delay="6000">
            <AniFrame value="0" time="0" />
            <AniFrame value="-2579" time="8000" />
        </VariableAnimation>
    </Var>
<Var name="weiyi8">
        <VariableAnimation delay="5000">
            <AniFrame value="0" time="0" />
            <AniFrame value="-2579" time="8000" />
        </VariableAnimation>
    </Var>
<Var name="weiyi9">
        <VariableAnimation delay="8000">
            <AniFrame value="0" time="0" />

            <AniFrame value="-2579" time="8000" />
        </VariableAnimation>
    </Var>
<!--图片的实时位置，x随着时间变化而变化，y随着位置的变化而变化。-->
<Image x="abs(100+sin(#time/1553)*100)" y="#sh+301+#weiyi1" src="1.png" />
<Image x="abs(165+sin(#time/1453)*100)" y="#sh+195+#weiyi2" src="2.png" />
<Image x="abs(500+sin(#time/1453)*100)" y="#sh+98+#weiyi3" src="3.png" />
<Image x="abs(700+sin(#time/1453)*100)" y="#sh+146+#weiyi4" src="4.png" />
<Image x="abs(900+sin(#time/1453)*100)" y="#sh+225+#weiyi5" src="5.png" />
<Image x="abs(800+sin(#time/1453)*100)" y="#sh+98+#weiyi6" src="3.png" />
<Image x="abs(200+sin(#time/1453)*100)" y="#sh+195+#weiyi7" src="2.png" />
<Image x="abs(600+sin(#time/1453)*100)" y="#sh+146+#weiyi8" src="4.png" />
<Image x="abs(165+sin(#time/1453)*100)" y="#sh+195+#weiyi9" src="2.png" />
</Lockscreen>
```

### 变量动画示例二：交互

通过自定义变量控制图片的变量动画，把变量“泡泡”绑定到图片按钮中，这样图片按钮能按照变量实现动画，并实现交互动作。

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173453.83657580742485438191736855323535:20260601222027:2800:80AE0E80ED9BBCDA45D98B0379815381E9316F4BBAD744570BFF00A989182A0C.mp4)

```
<!--集合变量位移中代码-->
 <Button  h="149" w="616" x="236" y="#screen_height-2160+1612" >
        <Trigger action="down">
            <VariableCommand condition="le(#a,2)" expression="#a+1" name="a" />
            <VariableCommand condition="eq(#a,2)" expression="0" name="a" />
        </Trigger>
</Button>

    <!--关闭泡泡图片按钮的交互-->
     <Image x="236"  y="#screen_height-2160+1612" src="guanbi.png" w="616" h="149" visibility="eq(#a,1)"/>
    <Button h="149" w="616" x="236" y="#screen_height-2160+1612" visibility="eq(#a,1)" >
        <Trigger action="down">
            <Command target="weiyi1.animation" value="stop" />
            <Command target="weiyi2.animation" value="stop" />
            <Command target="weiyi3.animation" value="stop" />
            <Command target="weiyi4.animation" value="stop" />
            <Command target="weiyi5.animation" value="stop" />
            <Command target="weiyi6.animation" value="stop" />
            <Command target="weiyi7.animation" value="stop" />
            <Command target="weiyi8.animation" value="stop" />
            <Command target="weiyi9.animation" value="stop" />
        </Trigger>
    </Button>

   <!--打开泡泡图片按钮的交互-->
    <Image x="236" y="#screen_height-2160+1612" src="dakai.png" w="616" h="149" visibility="eq(#a,0)"/>
    <Button  h="149" w="616" x="236" y="#screen_height-2160+1612" visibility="eq(#a,0)">
        <Trigger action="down">
            <Command target="weiyi1.animation" value="play" />
            <Command target="weiyi2.animation" value="play" />
            <Command target="weiyi3.animation" value="play" />
            <Command target="weiyi4.animation" value="play" />
            <Command target="weiyi5.animation" value="play" />
            <Command target="weiyi6.animation" value="play" />
            <Command target="weiyi7.animation" value="play" />
            <Command target="weiyi8.animation" value="play" />
            <Command target="weiyi9.animation" value="play" />
        </Trigger>
    </Button>
```