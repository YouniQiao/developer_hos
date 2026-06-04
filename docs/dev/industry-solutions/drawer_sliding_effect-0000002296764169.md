---
title: "底部抽屉滑动效果"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/drawer_sliding_effect-0000002296764169
---

## 场景介绍

底部抽屉滑动效果是实用工具类应用的高频场景之一，如滑动显示侧边栏时，覆盖在原页面上，不变动原页面布局，并将界面沉浸式显示。

本示例基于[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)布局和[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现了底部抽屉滑动效果场景。

## 效果预览

![](./img/fd89e213.png "点击放大")

## 实现思路

* 本示例页面主体使用[RelativeContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-relativecontainer)和[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)布局，实现侧边栏覆盖在原页面上。

  ```
  Stack({ alignContent: Alignment.TopStart }) {
    RelativeContainer() {
      if (!this.isShow) {
        this.Top();
      }
      // ...
    }
  }
  ```
* 侧边窗口管理通过[getMainWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#getmainwindow9)获取该WindowStage实例下的主窗口，设置当前窗口是否开启沉浸式布局。

  ```
  if (this.isShow) {
    Column()
      .id('_padding')
      .width(this.windowWidth)
      .height('100%')
      .backgroundColor('rgba(0,0,0,0.4)')
      .alignRules({
        'right': { 'anchor': '__container__', 'align': HorizontalAlign.End }
      })
      .onClick(() => {
        this.isShow = false;
      })
      // ...
  }
  ```
* 侧边窗口滑动通过使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现。

  ```
  List({ scroller: this.listScroller, space: 11 }) {
    this.shipImg();
    this.shipDirection();
    this.aMessage();
    this.miniMsg();
    this.weatherMsg();
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──constants
│  │  └──CommonConstants.ets                  // 公共常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──pages
│  │  └──SideBarSlideCase.ets                 // 首页
│  ├──utils
│  │  ├──ArrayUtil.ets                        // 数组工具类
│  │  ├──GlobalContext.ets                    // 变量工具类
│  │  ├──Logger.ets                           // 日志文件
│  │  └──WindowModel.ets                      // 窗口管理
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[RelativeContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-relativecontainer)

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)

[Interface(WindowStage)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)

## 代码下载

[底部抽屉滑动效果示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101749.80322850798077960452815301456042%3A50001231000000%3A2800%3A4D32092DB38D7A31E2887D02B17061037DF225E162D31A5EDBE1DDAA40E16D3D.zip?needInitFileName=true)
