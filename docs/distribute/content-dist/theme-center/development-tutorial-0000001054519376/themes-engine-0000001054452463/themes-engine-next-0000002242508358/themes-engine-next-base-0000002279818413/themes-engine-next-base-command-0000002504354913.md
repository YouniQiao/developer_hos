---
title: "命令：基础命令&lt;Command&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-command-0000002504354913
format: md
---


# 命令：基础命令&lt;Command&gt;

## 功能概述

基础命令，通过对象名和对应的属性来控制界面中的元素。常见是控制元素的可见性（visibility）和动画播放（animation）。

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
<Command target="" value="" condition="" delay="" delayCondition="" />
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| target | 字符串 | 必填 | 对象name的名字（如控制对象），“.”后面跟的是属性（目前支持visibility和animation） |
| value | 字符串 | 必填 | 控制可见性visibility时，value为”true”, “false”或“toggle”，分别代表可见、不可见以及反转可见性；控制动画animation时，value为”play”或”stop”，控制动画的播放和暂停 |
| condition | 表达式 | 选填 | 条件判断，支持表达式。当condition里的条件判断为非0或者为true时，该命令执行，为false或者0则不执行 |
| delay | 数值 | 选填 | 延迟，以ms毫秒记。延迟delay毫秒后执行该命令 |
| delayCondition | 表达式 | 选填 | 延迟判断，为真则delay命令生效，否则失效。默认为true或者1时，表示可以延迟启动命令，如果false或者非1则不延迟执行 |

## 应用示例

控制动画播放、暂停或图片可见、不可见。

```
<Button h="100" w="100" x="0" y="0">
    <Trigger action="down">
        <Command target="image1.visibility" value="play"/>
        <Command target="image1.visibility" value="false"/>
        <Command target="image1.animation" value="play"/>
        <Command target="image1.animation" value="stop"/>
    </Trigger>
</Button>
```