---
title: "数据开放：步数&lt;StepCount&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-stepcount-0000002504275041
---

# 数据开放：步数&lt;StepCount&gt;

## 功能概述

步数功能是根据全局变量#steps\_value实现的。可以通过Text文本调用全局变量#steps\_value显示步数。该功能只在EMUI10.1.0.160及以上版本有效（不同机型支持的版本会有差异），其余版本该变量值为0。当该变量值为0时，建议将步数相关内容设置为不可见。

## 支持范围

<strong>起始规范版本：</strong>HarmonyOS 5.0

<strong>是否平台特性：</strong>否

<strong>表1</strong> <strong>支持根标签</strong>

|  | 锁屏（Lockscreen） | 桌面（Wallpaper） | 一镜到底（LongTake） | 百变卡片（Widget） | 充电动效（ChargingSkin） |
| --- | --- | --- | --- | --- | --- |
| 是否支持 | √ | √ | √ | √ | x |

<strong>表2</strong> <strong>支持设备类型</strong>

|  | 直板机 | 折叠屏 | 平板 |
| --- | --- | --- | --- |
| 是否支持 | √ | √ | √ |

## XML规范

```
<Text x="100" y="1500" format="目前步数是: %d步" paras="#steps_value" size="50" color="#ff000000" visibility="ifelse(#steps_value,1,0)" />
```

## 参数说明

不涉及

## 应用示例

使用format、paras显示当前步数

```
<Text x="100" y="1500" format="目前步数是: %d步" paras="#steps_value" size="50" color="#ff000000" visibility="ifelse(#steps_value,1,0)" />
```