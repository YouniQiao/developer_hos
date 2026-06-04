---
title: "儿童练字板"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/children_demo_canvas-0000002237313638
---

## 场景介绍

儿童练字板是儿童教育类行业实践的高频场景之一。

本示例基于[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)展示了儿童练字板场景，为儿童提供了在移动设备上练习书法的机会。

## 效果预览

![](./img/c8dd08d1.png "点击放大")

## 实现思路

1. 通过ontouch事件，监听用户手指按下、滑动、抬起，获取触点坐标。

   ```
   Canvas(this.canvasContext)
     // 监听触摸事件
     .onTouch((event) => {
       const touch: TouchObject = event.touches[0];
       switch (event.type) {
         case TouchType.Down: // 按下
           this.canvasContext.beginPath();
           this.canvasContext.moveTo(touch.x, touch.y);
           this.clearOpacity = 1;
           break;
         case TouchType.Move: // 滑动
           this.canvasContext.lineTo(touch.x, touch.y);
           this.canvasContext.lineWidth = this.selectedWidth;
           this.canvasContext.strokeStyle = this.modeIndex === 0 ? this.selectedColor : 'white';
           this.canvasContext.stroke();
           break;
         case TouchType.Up: // 抬起
           this.canvasContext.closePath();
           break;
         default:
       }
     });
   ```
2. 利用[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)进行绘制。

   ```
   // Canvas绘制函数
   drawLine = (ctx: CanvasRenderingContext2D, r: number) => {
     const width = ctx.width;
     const height = ctx.height;
     let points = this.getPoints(r, width);
     this.canvasContext.lineWidth = 0.5;
     this.canvasContext.strokeStyle = Color.Gray;
     // ...
   };
   ```
3. 利用[clearRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#clearrect)方法清除画布指定区域的内容。

   ```
   // 手绘板的获取
   Canvas(this.canvasContext)
     .ontouch();
   // 清除画布指定区域的内容
   this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  └──BottomText.ets         // 页面下方练字预览
│  ├──entryability
│  │  └──EntryAbility.ets       // 屏幕窗口沉浸式布局页
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Finish.ets             // 练字完成页
│     └──WriteBoard.ets         // 练字板
└──entry/src/main/resources     // 应用资源目录
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)

## 代码下载

[儿童练字板示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260318091721.22385426728671030438829940415100%3A20260604134246%3A2800%3A07E6185CE7DD4C6A57B1F42D43B01F0DFEF6BF1A0C81A5CA66082895686C07F1.zip?needInitFileName=true)
