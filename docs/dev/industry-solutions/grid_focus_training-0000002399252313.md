---
title: "舒尔特方格专注力训练游戏"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/grid_focus_training-0000002399252313
---

## 场景介绍

舒尔特方格专注力训练游戏是儿童教育类应用中的典型场景之一。

本示例基于[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件实现方格专注力训练小游戏，数字方格的行列可调整为3x3、4x4或5x5。游戏规则：在随机生成的数字方格中，从1开始按顺序点击数字。

## 效果预览

![](./img/1ed164e0.png "点击放大")

## 实现思路

1. 根据[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)和游戏行数和列数动态生成方格块行列属性。

   ```
   // Grid组件
   Grid{
   // ...
   }
   .columnsTemplate(this.layoutFormat)
   .rowsTemplate(this.layoutFormat)
   // 判断行列数
   if (this.specificationsNumber === CommonConstant.FIVE) {
     this.layoutFormat = '1fr 1fr 1fr 1fr 1fr'
   } else if (this.specificationsNumber === CommonConstant.FOUR) {
     this.layoutFormat = '1fr 1fr 1fr 1fr'
   } else if (this.specificationsNumber === CommonConstant.JUDGE_MESSAGE_IF_THREE) {
     this.layoutFormat = '1fr 1fr 1fr'
   }
   ```
2. 根据行列数生成不同的随机的不重复方格数字数组（3x3、4x4、5x5）。

   ```
   export function fillObjectWithRandomNumbers(specificationsNumber: number): GridFocusItem[] {
     // ...
     // 打乱数字数组
     for (let i = numbers.length - 1; i > 0; i--) {
       let rand = cryptoFramework.createRandom();
       let len = 1; // 生成一个字节长度的随机数
       let randOutput = rand.generateRandomSync(len);

       // 将生成的随机数转换为(0,1)范围内的浮点数，可以进行如下转换：
       let safeRandomBetween0and1 = Number(randOutput.data[0] / 255); // 假设第一个字节作为十进制处理

       const j = Math.floor(safeRandomBetween0and1 * (i + 1));
       if (j <= numbers.length) {
         let temp = numbers[i];
         numbers[i] = numbers[j];
         numbers[j] = temp;
       }
     }

     for (let index = 0; index < specificationsNumber * specificationsNumber; index++) {
       let obj: GridFocusItem = new GridFocusItem(numbers[index], true)
       gridItemArr.push(obj)
     }
     return gridItemArr;
   }
   ```
3. 游戏逻辑：仅支持按照从小到大的顺序依次点击数字方块。

   ```
   GridItem() {
     // ...
   }
   .onClick(() => {
     if (!this.isStart) {
       if (this.searchNumber === item.textNumber) {
         this.searchNumber += CommonConstant.ONE;
         item.ifOnclick = false;
       }
       if (this.searchNumber === this.gridFocusArr.length + CommonConstant.ONE) {
         this.searchNumber = this.gridFocusArr.length;
         textTimerController.pause();
       }
     }
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──components
│  │  └──GridFocusCom.ets                 // Grid组件
│  ├──constants
│  │  └──Constants.ets                    // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──GridFocusModel.ets               // 方格工具模型
│  └──pages
│     └──Pages.ets                        // 主页面
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[@ohos.security.cryptoFramework（加解密算法库框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)

## 代码下载

[舒尔特方格专注力训练游戏示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225094417.87596766953038032765600432611084%3A50001231000000%3A2800%3A3BF9F419097B3D69B8478E9B2C671933C41270B08518E91B838555CD4492F6EF.zip?needInitFileName=true)
