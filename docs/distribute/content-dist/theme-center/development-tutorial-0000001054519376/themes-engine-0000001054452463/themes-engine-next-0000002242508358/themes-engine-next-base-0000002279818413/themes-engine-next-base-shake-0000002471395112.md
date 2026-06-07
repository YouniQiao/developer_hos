---
title: "适配功能：摇一摇&lt;Shake&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-shake-0000002471395112
format: md
---


# 适配功能：摇一摇&lt;Shake&gt;

## 功能概述

当声明了传感器VariableBinders后，会生成一个系统全局变量shake，当摇一摇手机的时候，这个变量的值就会加一，可以通过使用这个变量制作想要的效果，摇一摇数值变化的间隔为1000ms。

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
<Text text="#shake">
    <!-- 每当摇一摇幅度超过阈值则全局变量shake的增值加1 -->
</Text>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| shake | 数值 | 必填 | 全局变量，直接使用#shake引用数字，每当摇一摇幅度超过阈值则全局变量shake的增值加一 |

## 应用示例

<strong>示例一：</strong>每当摇一摇超过阈值则shake值加1，srcid的值在0,1,2中轮换，实现3张图片通过摇一摇轮播的效果。

```
<Image x="529.5" y="1410" src="djs.png" srcid="#shake%3" align="center" alignV="center" />
```

<strong>示例二：</strong>摇一摇触发手机震动，同时通过#shake变量控制动画的可见性。

```
     <VariableBinders>
        <SensorBinder type="accelerometer" vibrate="1" shakeTime="400" delay="0">
            <Variable name="x_acc" index="0"/>
        </SensorBinder>
    </VariableBinders>
    <Image name="animation" x="540" y="0" w="1080" h="2400" align="center" visibility="0">
        <SourcesAnimation repeat="1">
            <Source src="dawa_alpha.png" time="0"/>
            <Source src="dawa_alpha.png" time="10"/>
            <Source src="dawa_1.png" time="80"/>
            <Source src="dawa_2.png" time="160"/>
            <Source src="dawa_3.png" time="240"/>
            <Source src="dawa_4.png" time="320"/>
            <Source src="dawa_5.png" time="400"/>
            <Source src="dawa_6.png" time="480"/>
            <Source src="dawa_7.png" time="560"/>
            <Source src="dawa_8.png" time="640"/>
            <Source src="dawa_9.png" time="720"/>
            <Source src="dawa_10.png" time="800"/>
            <Source src="dawa_11.png" time="880"/>
            <Source src="dawa_12.png" time="960"/>
            <Source src="dawa_13.png" time="1040"/>
            <Source src="dawa_14.png" time="1120"/>
            <Source src="dawa_15.png" time="1200"/>
            <Source src="dawa_16.png" time="1280"/>
            <Source src="dawa_17.png" time="1360"/>
            <Source src="dawa_18.png" time="1440"/>
            <Source src="dawa_19.png" time="1520"/>
            <Source src="dawa_20.png" time="1600"/>
            <Source src="dawa_21.png" time="1680"/>
            <Source src="dawa_22.png" time="1760"/>
            <Source src="dawa_23.png" time="1840"/>
            <Source src="dawa_24.png" time="1920"/>
            <Source src="dawa_alpha.png" time="1923"/>
        </SourcesAnimation>
    </Image>
    <Var name="shake_record" expression="#shake" threshold="1">
        <Trigger>
            <Command target="animation.visibility" value="true"/>
            <Command target="animation.visibility" value="false" delay="1920"/>
        </Trigger>
    </Var>
```