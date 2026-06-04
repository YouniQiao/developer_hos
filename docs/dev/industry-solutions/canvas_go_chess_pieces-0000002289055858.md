---
title: "围棋棋子绘制"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/canvas_go_chess_pieces-0000002289055858
---

## 场景介绍

围棋棋子绘制是儿童教育类应用中的典型场景之一。

本示例基于[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)组件、文本计算等能力实现了围棋棋子的绘制，也适用于五子棋、象棋等棋盘类游戏的绘制。

## 效果预览

![](./img/3789a935.png "点击放大")

## 实现思路

1. 绘制棋盘：根据设备屏幕宽高大小绘制正方形棋盘，根据棋盘规格(flavor\*flavor)计算边长以及棋子大小。

   ```
   // 计算棋盘边长和棋子大小
   aboutToAppear() {
     // 获取屏幕宽高，并计算棋盘上格子间隔
     display.getAllDisplays((err, data) => {
       let screenWidth: number = data[0].width;
       let screenHeight: number = data[0].height;
       this.sideLen = this.getUIContext().px2vp(Math.min(screenWidth, screenHeight)) - this.borderMargin * 2;
       this.spaceLen = this.sideLen / (this.flavor - 1);
       this.boardLen = this.spaceLen - 2; // 预设棋子大小
     })
   }

   // 根据格子间隔绘制棋盘
   drawCheckerboard() {
     this.context.strokeRect(this.borderMargin, this.borderMargin, this.sideLen, this.sideLen);
     for (let index = 0; index < this.flavor; index++) {
       // 绘制横线
       this.context.moveTo(this.borderMargin + index * this.spaceLen, this.borderMargin);
       this.context.lineTo(this.borderMargin + index * this.spaceLen, this.sideLen + this.borderMargin);
       this.context.stroke();

       // 绘制竖线
       this.context.moveTo(this.borderMargin, this.borderMargin + index * this.spaceLen);
       this.context.lineTo(this.sideLen + this.borderMargin, this.borderMargin + index * this.spaceLen);
       this.context.stroke();
     }

     for (let i = 0; i < this.flavor; i++) {
       this.hasBoardMark[i] = [];
       for (let j = 0; j < this.flavor; j++) {
         this.hasBoardMark[i].push(false);
       }
     }
   }
   ```
2. 根据用户点击操作，获取[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)组件上的点击位置，并计算当前位置距离最近的网格点。

   ```
   Canvas(this.context)
     .width('100%')
     .height('100%')
     .backgroundColor('#D1A738')
     .aspectRatio(1)
     .onReady(() => {
       // 绘制棋盘
       this.drawCheckerboard();
     })
     .gesture(
       TapGesture({ count: 1 })
         .onAction((event: GestureEvent | undefined) => {
           if (event) {
             // 计算绘制棋子时的中心位置
             let value = event.fingerList[0];

             let i = Math.round((value.localX - this.borderMargin) / this.spaceLen);
             let j = Math.round((value.localY - this.borderMargin) / this.spaceLen);

             if (i < 0 || j < 0 || i > (this.flavor - 1) || j > (this.flavor - 1) || this.hasBoardMark[i][j]) {
               return;
             }

             this.hasBoardMark[i][j] = true;
             let realX = this.borderMargin + this.spaceLen * i;
             let realY = this.borderMargin + this.spaceLen * j;
             // 绘制棋子
             this.drawBoard(realX, realY);
             this.count++;
           }
         })
     );
   ```
3. 绘制棋子：根据点击次数获取棋子上展示数字，并根据展示文本以及棋子大小计算字体大小；通过textAlign、textBaseline属性设置字体中心对齐。

   ```
   // 根据棋子大小，计算字体大小
   getFontSize(text: string): number {
     for (let fontSize = 1;; fontSize++) {
       let textSize = this.getUIContext().getMeasureUtils().measureTextSize({
         textContent: text,
         textAlign: TextAlign.JUSTIFY,
         constraintWidth: this.boardLen,
         fontSize: fontSize + 'vp'
       })
       let width = Number(textSize.width);
       let height = Number(textSize.height);
       if (this.getUIContext().px2vp(width) > this.boardLen || this.getUIContext().px2vp(height) > this.boardLen) {
         return fontSize - 2;
       }
     }
   }

   drawBoard(realX: number, realY: number) {
     this.context.beginPath();
     this.context.arc(realX, realY, this.boardLen / 2, 0, 6.28);
     if (this.count % 2 === 0) {
       this.context.strokeStyle = '#000000';
       this.context.fillStyle = '#000000';
     } else {
       this.context.strokeStyle = '#FFFFFF';
       this.context.fillStyle = '#FFFFFF';
     }
     this.context.fill();
     this.context.stroke();

     // 添加字体
     let text = this.getShowNumber();
     let fontSize = this.getFontSize(text);
     this.context.font = fontSize + 'vp';
     if (this.count % 2 === 0) {
       this.context.fillStyle = '#FFFFFF';
     } else {
       this.context.fillStyle = '#000000';
     }
     this.context.textAlign = 'center';
     this.context.textBaseline = 'middle';
     this.context.fillText(text, realX, realY);
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
│  │  └──EntryAbility.ets                 // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Index.ets                        // 主页
└──entry/src/main/resources               // 应用静态资源目录
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)

## 代码下载

[围棋棋子绘制示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164651.86716160267797547224437895269006%3A50001231000000%3A2800%3A9938D1925AFDE098609718021C14090B97C215872E57A60F11E21868149C4400.zip?needInitFileName=true)
