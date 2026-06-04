---
title: "仪表盘自定义"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/customize_dashboard-0000002369250730
---

## 场景介绍

自定义仪表盘是汽车类应用的典型场景之一。

本示例基于[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)实现仪表盘样式自定义。

## 效果预览

![](./img/37062a6e.png "点击放大")

## 实现思路

通过[beginPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#beginpath)创建一个新的绘制路径，通过[arc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#arc)在[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)上绘制圆弧路径，再通过[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#stroke)根据路径进行边框绘制，从而实现仪表盘效果。

```
drawCircleMiddle(centerx: number, centery: number) {
  let grad = this.context.createConicGradient(this.degToRad(70), centerx, centery)
  grad.addColorStop(0.0, '#FE9AE3')
  grad.addColorStop(0.25, '#A19FFF')
  grad.addColorStop(0.5, '#58B0F5')
  grad.addColorStop(0.9, '#ce6e6dd7')
  this.radius = this.canvasSize * 0.293
  this.context.lineWidth = 18
  this.context.strokeStyle = grad
  this.context.beginPath()
  if (this.speed <= this.maxSpeed) {
    this.context.arc(centerx, centery, this.radius, this.degToRad(this.startAngle),
      this.degToRad(this.startAngle + this.speed * 310 / this.maxSpeed + 0.1))
  } else {
    this.context.arc(centerx, centery, this.radius, this.degToRad(this.startAngle),
      this.degToRad(this.startAngle + this.maxSpeed * 310 / this.maxSpeed + 0.1))
  }
  this.context.stroke()
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──GridInfo.ets                        // 网格内容
│  ├──pages
│  │  └──MainPage.ets                        // 主页
│  └──utils
│     └──Dashboard.ets                       // 仪表盘组件
└──entry/src/main/resources                  // 应用资源目录
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)

## 代码下载

[仪表盘自定义示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260414141822.03053738504742659143166392352416%3A20260604121446%3A2800%3A0BA9E7A6B868AB46F947EF03E9E6C4277A0CFB3FBB43F0C3AF978CB21D4E7422.zip?needInitFileName=true)
