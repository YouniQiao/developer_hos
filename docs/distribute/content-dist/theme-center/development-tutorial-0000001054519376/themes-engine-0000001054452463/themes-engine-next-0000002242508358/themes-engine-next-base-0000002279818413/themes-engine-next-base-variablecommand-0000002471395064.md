---
title: "命令：变量命令&lt;VariableCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-variablecommand-0000002471395064
format: md
---


# 命令：变量命令&lt;VariableCommand&gt;

## 功能概述

变量命令，用来控制变量（Var）的值。包括name、expression和type三个特殊属性（用expression中的数据对name中的变量进行赋值），condition、delay、delayCondition的用法与Command一致。

![](./img/f942a83cd1f3.png)

该命令不支持persist属性。

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
<VariableCommand name="" expression="" type="" condition="" delay="" delayCondition="" />
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| name | string | 必填 | 变量名 |
| expression | string | 必填 | 对变量进行赋值时使用的表达式，支持常量赋值；变量定义的时候不能用表达式（如#countNum+5） |
| type | string | 选填 | 标识是string类型变量还是number类型变量，默认为number类型 |
| condition | string | 选填 | 条件判断，支持表达式。当condition里的条件判断为非0或者为true时，该命令执行，为false或者0则不执行。支持输入表达式 |
| delay | number | 选填 | 延迟，以毫秒记。延迟delay毫秒后执行该命令 |
| delayCondition | string | 选填 | 延迟判断，为真则delay命令生效，否则失效。默认为true或者1时，表示可以延迟启动命令，如果false或者非1则不延迟执行。支持输入表达式 |

## 应用示例

执行变量赋值命令

```
  <Button x="0" y="0" h="100" w="100">
    <Trigger action="down">
      <VariableCommand name="delayCond0" expression="#delayCond0+5" condition="lt(#second,40)" />
      <VariableCommand name="delayCond1" expression="#delayCond1+5" delayCondition="lt(#second,40)" delay="6000" />
      <VariableCommand name="delayCond2" expression="#delayCond2+5" condition="lt(#second,40)" delayCondition="lt(#second,40)" delay="4000" />
    </Trigger>
  </Button>
```