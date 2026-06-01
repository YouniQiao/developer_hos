---
title: "命令：碰一碰&lt;CollaborationCommands&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-collaboration-0000002489842474
---


import MergeTable from '@site/src/components/MergeTable';

# 命令：碰一碰&lt;CollaborationCommands&gt;

## 功能概述

通过碰一碰协同框架能力，支持主题在碰一碰场景定义一些动画交互能力。

在原有碰一碰能力基础上，新增支持碰一碰长连接能力，新增设备连接成功和断开的触发动作，支持主动断开连接和发送消息命令，实现设备间通过碰一碰建立连接后的持续数据交互。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 6.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | x | x | √ | x |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | x |

## XML规范

<strong>碰一碰</strong>

```
<CollaborationCommands collaborationId="AA00">
       <Trigger action="tapLink">
              <VideoCommand name="sp1" play="true"/>
       </Trigger>
       <DataShare>
              <Var name="serviceVar" expression="#local"/>
       </DataShare>
</CollaborationCommands>
```

<strong>长连接</strong>

```
<CollaborationCommands collaborationId="AA00" abilityId="1">
  <Trigger action="tapConnected">
    <CollaborationSendCommand name="connected_colSendMessage" dataName="dancingData"/>
  </Trigger>
  <Trigger action="tapDisconnected">
    <VariableCommand name="isDisconnected" expression="1"/>
  </Trigger>
  <DataShare name="dancingData">
    <Var name="dancingTime" expression="ifelse(#dancingPlayEnd,0,#tiaowu.mp4.currentTime)"/>
  </DataShare>
</CollaborationCommands>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |



<MergeTable
  headers={['参数', '类型', '值', '注释']}
  rows={
    [{ text: 'action', rowspan: 3, colspan: 1 }, '字符串', 'tapLink', '碰一碰触发动作'],
    [null, '字符串', 'tapConnected', '设备连接成功，abilityId为1时生效'],
    [null, '字符串', 'tapDisconnected', '设备断开，abilityId为1时生效']
  }
/>


<strong>子节点：Trigger</strong>

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 值 | 注释 |
| action | 字符串 | tapLink | 碰一碰触发动作 |
| 字符串 | tapConnected | 设备连接成功，abilityId为1时生效 |
| 字符串 | tapDisconnected | 设备断开，abilityId为1时生效 |

<strong>子节点：DataShare</strong>

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| name | 字符串 | 选填 | 共享数据名称,用于标识不同的数据分享节点,支持多个 DataShare 节点区分数据 |

![](./img/d66e331b2b26.png)

1、协同ID由主题制作工具ThemeStudio Pro自动生成，随意设置无效。

2、同一个作品必须使用同一个互动ID，上传主题联盟时，将校验同一个作品下的资源使用的互动ID是否一致。

3、同一时刻只有一个实例，一个脚本中只能有一个CollaborationCommands节点。

4、碰一碰卡片命令在百变卡片场景默认能力是关闭的，需要设计师通过动态设置变量enableCollaboration控制当前卡片碰一碰能力开启，同时结合系统enable变量控制协同卡片是否生效。

5、长连接场景

（1）已连接的2个设备A和B，第3个设备C碰设备A或设备B，无反应。

（2）由于长连接若不断开会持续产生功耗，以下场景系统会自动断开长连接：锁屏——灭屏或者解锁屏幕；百变卡片——离开当前屏幕。

## 应用示例

<strong>示例一</strong>：展示碰一碰命令在锁屏场景下的使用,通过触发动作控制视频播放,并使用DataShare节点分享视频播放时间数据。

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" frameRate="30" screenWidth="1440">
       <Var name="playEnd" expression="eq(#tiaowu.mp4.state,5)"/>
       <CollaborationCommands collaborationId="AA00">
              <Trigger action="tapLink">
                     <VideoCommand name="video" play="true" src="tiaowu.mp4" seekTime="ifelse(#playEnd,#playTime,max(#tiaowu.mp4.currentTime,#playTime))"/>
              </Trigger>
              <DataShare>
                     <Var name="playTime" expression="ifelse(#playEnd,0,#tiaowu.mp4.currentTime)"/>
              </DataShare>
       </CollaborationCommands>
</Lockscreen>
```

![](./img/e7c4668f8e2b.png)

src.state，src.currentTime参考[全局变量](https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-globalvar-0000002471235030)的定义

<strong>示例二</strong>：展示碰一碰长连接能力在锁屏场景下的使用,支持设备连接成功和断开的触发动作,使用多个 DataShare 节点分享不同数据,并使用 CollaborationSendCommand 和 CollaborationDisconnectCommand 实现主动消息发送和断开连接。

```
<?xml version="1.0" encoding="UTF-8"?>
<Lockscreen displayDesktop="true" frameRate="60" screenWidth="1080" version="1">
    <Var name="w" const="true" expression="#screen_width"/>
    <Var name="h" const="true" expression="#screen_height"/>
    <Var expression="eq(#tiaowu.mp4.state,5)" name="dancingPlayEnd" />
    <Var expression="eq(#changge.mp4.state,5)" name="singingPlayEnd" />
    <CollaborationCommands collaborationId="AA00" abilityId="1">
        <Trigger action="tapConnected">
            <CollaborationSendCommand name="connected_colSendMessage" dataName="dancingData"/>
        </Trigger>
        <Trigger action="tapDisconnected">
            <VariableCommand name="isDisconnected" expression="1"/>
        </Trigger>
        <DataShare name="dancingData">
              <Var name="dancingTime" expression="ifelse(#dancingPlayEnd,0,#tiaowu.mp4.currentTime)"/>
        </DataShare>
        <DataShare name="singingData">
              <Var name="singingTime" expression="ifelse(#singingPlayEnd,0,#changge.mp4.currentTime)"/>
        </DataShare>
    </CollaborationCommands>
    <Button h="#h" w="#w" x="0" y="0" name="断开长链接">
        <Trigger action="down">
            <CollaborationDisconnectCommand/>
        </Trigger>
    </Button>
    <Button h="#h" w="#w" x="0" y="0" name="发送消息">
        <Trigger action="down">
            <CollaborationSendCommand name="btn_colSendMessage" dataName="singingData"/>
        </Trigger>
    </Button>
    <Image src="goWork/find_money.png" x="#w*0.2013*0.2" y="#h*0.5289" w="#w*0.2013" h="#w*0.2013*0.7931" delayTime="0" visibility="eq(#isDisconnected,1)"/>
</Lockscreen>
```