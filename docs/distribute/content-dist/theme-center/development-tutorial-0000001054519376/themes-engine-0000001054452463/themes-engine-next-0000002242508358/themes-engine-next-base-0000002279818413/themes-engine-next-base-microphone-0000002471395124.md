---
title: "适配功能：麦克风音量感知&lt;Microphone&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-microphone-0000002471395124
format: md
---


# 适配功能：麦克风音量感知&lt;Microphone&gt;

## 功能概述

麦克风音量感知功能是根据全局变量microPhone\_state、microPhone\_volume和isSupportMicro实现的。

通过调用这些全局变量，实现麦克风音量感知创意主题。

## XML规范

```
  <Var name="isSupportMicro" expression="0" persist="false" />
  <Image x="100" y="400" w="258" h="258" src="dian.png" />
  <Button x="100" y="400" w="258" h="258">
    <Trigger action="down">
      <VariableCommand name="isSupportMicro" expression="not(#isSupportMicro)" />
    </Trigger>
  </Button>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| isSupportMicro | 数值 | 必填 | 开关变量（固定名称）：1 开启录音； 0 停止录音。默认为0。 |
| microPhone\_volume | 数值 | 必填 | 麦克风分贝值，实时获取。 |
| microPhone\_state | 数值 | 选填 | 麦克风吹气状态：1 短吹 ；2 长吹；0 无状态。默认为0。 |

## 应用示例

在桌面上，对着手机麦克风吹气， 触发风车转动、杆上的飘带飘动和兔子的耳朵摆动。

```
<Var name="isSupportMicro" expression="0" persist="false" />
<Image x="100" y="400" w="258" h="258" src="dian.png" />
<Button x="100" y="400" w="258" h="258">
  <Trigger action="down">
    <VariableCommand name="isSupportMicro" expression="not(#isSupportMicro)" />
  </Trigger>
</Button>
```