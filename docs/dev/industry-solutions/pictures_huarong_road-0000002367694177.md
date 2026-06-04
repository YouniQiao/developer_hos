---
title: "图片华容道"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/pictures_huarong_road-0000002367694177
---

## 场景介绍

图片华容道是儿童教育类应用中的典型场景之一，如用户可以挑选图片，点击被打乱的拼图块，组合出完整图形。

本示例使用[backgroundImagePosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#backgroundimageposition)实现拼图块的随机打乱与组合，也适用于其他拼图类游戏的制作。

## 效果预览

![](./img/155faffc.gif "点击放大")

## 实现思路

1. 初始化拼图块，根据游戏行数和列数动态生成拼图块数组，通过[backgroundImagePosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#backgroundimageposition)实现拼图块的显示。

   ```
   Flex()
     .width(this.block.w + 'px')
     .height(this.block.h + 'px')
     .borderWidth('1px')
     .borderColor(Color.White)
     .backgroundImage(this.block.imgUrl)
     .backgroundImagePosition({ x: this.uiContext.px2vp(this.block.x), y: this.uiContext.px2vp(this.block.y) })
     .visibility(this.block.isVisible ? Visibility.Visible : Visibility.Hidden)
   ```
2. 通过多次合法移动（上下左右）随机打乱拼图块的位置。

   ```
   shuffle: Function = async () => {
     let currentBlocks: Array<Block> = JSON.parse(JSON.stringify(this.originalBlocks));
     // 模拟若干次合法移动（比如100次）
     for (let i = 0; i < 100; i++) {
       // 找出空白的图片块索引
       let emptyIndex = currentBlocks.findIndex(block => !block.isVisible);
       let possibleMoves: number[] = this.getValidMoves(emptyIndex, currentBlocks);
       if (possibleMoves.length > 0) {
         // 使用安全随机数
         let randomMove: number | null = await this.getRandomMoveFromPossibleMoves(possibleMoves);
         if (randomMove !== null) {
           this.swapBlocks(currentBlocks, emptyIndex, randomMove);
         }
       }
     }
     this.blocks = currentBlocks;
     this.isShuffle = !this.isShuffle;
   }
   ```
3. 点击拼图块时，判断是否可以与“空位”交换，如果可以，则交换两者位置，并更新UI。

   ```
   isAdjacent: Function = (id1: number, id2: number): boolean => {
     let cols = this.gameConfig.cols;
     let row1 = Math.floor(id1 / cols);
     let row2 = Math.floor(id2 / cols);
     let col1 = id1 - cols * row1;
     let col2 = id2 - cols * row2;
     return (
       (row1 === row2 && Math.abs(col1 - col2) === 1) ||
         (col1 === col2 && Math.abs(row1 - row2) === 1)
     );
   }
   ```
4. 每次交换后检查是否所有块都回到正确位置，若全部正确则判定胜利。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──component
│  │  ├──Initialize.ets                   // 初始设置
│  │  ├──SetPiece.ets                     // 构建拼图
│  │  └──Start.ets                        // 游戏开始
│  ├──constants
│  │  └──CalendarConstants.ets            // 静态常量类
│  ├──entryability
│  │  └──EntryAbility.ets                 // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──Pieces.ets                       // 拼图数据结构
│  └──pages
│     ├──AddPicture.ets                   // 更换图片
│     └──MainPage.ets                     // 游戏主页
└──entry/src/main/resources               // 应用静态资源目录
```

## 参考文档

[背景设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background)

## 代码下载

[图片华容道示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164653.68559282821452523006525449417300%3A50001231000000%3A2800%3A2C188A6868BC1122A3A754ADE2D2A302049A050E868D5C4EA89034880271A8BB.zip?needInitFileName=true)
