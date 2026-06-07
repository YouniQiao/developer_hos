---
title: "适配功能：可交互桌面"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine-next-0000002242508358/themes-engine-next-base-0000002279818413/themes-engine-next-base-interactivehome-0000002504275063
format: md
---


# 适配功能：可交互桌面

## 功能概述

支持主题创作者通过主题引擎脚本的方式，实时获取桌面的左右滑动事件及桌面空白处的双击事件，设计师获取这些桌面事件后，可以通过主题引擎脚本触发动态桌面（通过主题引擎渲染）发生变化。

创意场景：

1. 划动桌面，领略不同季节的风景。

2. 设计一组动画效果，让用户通过划动屏幕触发，例如小猫卖萌的动作。

![](./img/48691282bc91.png)

若要实现动态效果，推荐使用序列帧；若使用视频，则需要制作多段视频，并截取每段视频的首帧图，作为defaultBitmap的参数值。

## XML规范

```
<Button h="#h" w="#w" x="0" y="0">
  <Triggers>
    <Trigger action="move_right_start">
      <VariableCommand name="" expression="" />
    </Trigger>
  </Triggers>
</Button>
```

## 参数说明

|  |  |  |  |
| --- | --- | --- | --- |
| 参数 | 类型 | 选项 | 注释 |
| move\_left\_start | Action | 选填 | 向左开始滑动 |
| move\_left\_end | Action | 选填 | 向左滑动结束 |
| move\_right\_start | Action | 选填 | 向右开始滑动 |
| move\_right\_end | Action | 选填 | 向右滑动结束 |
| double | Action | 选填 | 双击(只需要识别桌面空白双击，不包括Docker、状态栏、侧边热区) |

## 应用示例

不涉及