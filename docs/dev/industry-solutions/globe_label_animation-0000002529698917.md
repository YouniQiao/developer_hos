---
title: "球状标签动画"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/globe_label_animation-0000002529698917
---

## 场景介绍

球状标签动画是教育类应用的典型场景之一，例如在背单词时增强沉浸式体验和交互感。

本示例通过[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)和[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)实现了3D单词星球样式动画，动画可以自动旋转和手动拖拽旋转，单词可以被点击。

## 效果预览

![](./img/f43b5557.png "点击放大")

## 实现思路

主要思路就是通过刷新每个标签的坐标和[透明度](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-opacity)来实现动画效果。

1. 定义标签项的数据结构，需要包含3D坐标x、y、z和透明度alpha（用于模拟“近大远小”的视觉效果）。

   ```
   @ObservedV2
   export class WordInfo {
     @Trace x: number = 0;
     @Trace y: number = 0;
     @Trace z: number = 0;
     alpha: number = 0.5;
     // ...
   }
   ```
2. 基于球面均匀采样的方法初始化标签位置。其中，k控制极角方向的均匀分布，a和b分别为球面点的极角和方位角。

   ```
   this.wordInfoArray.forEach((item, i) => {
     const k = -1 + (2 * (i + 1) - 1) / this.wordInfoArray.length;
     const a = Math.acos(k);
     const b = a * Math.sqrt(this.wordInfoArray.length * Math.PI);

     item.x = this.radiusValue * Math.sin(a) * Math.cos(b) + this.centerX;
     item.y = this.radiusValue * Math.sin(a) * Math.sin(b) + this.centerY;
     item.z = this.radiusValue * Math.cos(a);
     item.alpha = (item.z + this.radiusValue) / (2 * this.radiusValue);
   });
   ```
3. 定义绕X轴、Y轴旋转的方法。

   ```
   // 绕x轴转
   rotateX() {
     let cos = Math.cos(this.angleX);
     let sin = Math.sin(this.angleX);
     this.wordInfoArray.forEach((item) => {
       let y = (item.y - this.centerY) * cos - item.z * sin + this.centerY
       let z = item.z * cos + (item.y - this.centerY) * sin;
       item.y = y;
       item.z = z;
       item.alpha = (item.z + this.radiusValue) / (2 * this.radiusValue)
     })
   }

   // 绕Y轴转
   rotateY() {
     let cos = Math.cos(this.angleY);
     let sin = Math.sin(this.angleY);
     this.wordInfoArray.forEach((item) => {
       let x = (item.x - this.centerX) * cos - item.z * sin + this.centerX
       let z = item.z * cos + (item.x - this.centerX) * sin;
       item.x = x;
       item.z = z;
       item.alpha = (item.z + this.radiusValue) / (2 * this.radiusValue)
     })
   }
   ```
4. 调用定时器进行自动旋转，间隔17ms约为60帧。

   ```
   timerAnAction() {
     if (this.timerAn) {
       clearInterval(this.timerAn)
     } else {
       this.timerAn = setInterval(() => {
         this.rotateX();
         this.rotateY();
       }, 17)
     }
   }
   ```
5. 利用手势控制旋转。通过[gesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings)绑定手势，通过滑动手势事件PanGesture执行定义的旋转方法。

   ```
   // 手势改变旋转方向和速度
   listener(event: GestureEvent) {
     let x = -event.offsetX
     let y = -event.offsetY

     let changeX =
       x * 0.0001 > 0 ? Math.min(this.radiusValue * 0.002, x * 0.001) : Math.max(-this.radiusValue * 0.002, x * 0.001);
     let changeY =
       y * 0.0001 > 0 ? Math.min(this.radiusValue * 0.002, y * 0.001) : Math.max(-this.radiusValue * 0.002, y * 0.001);

     if (changeX != 0 && changeY != 0) {
       this.angleY = changeX
       this.angleX = changeY
     }
     this.rotateX();
     this.rotateY();
   }
   ```

   ```
   // 手指按下时，停止自动旋转，松开时重新开启自动旋转
   .onTouch((event?: TouchEvent) => {
     if (event) {
       if (event.type === TouchType.Down) {
         clearInterval(this.timerAn)
       }
       if (event.type === TouchType.Up) {
         this.timerAn = setInterval(() => {
           this.rotateX();
           this.rotateY();
         }, 17)
       }
     }
   })
   .gesture(
     PanGesture().onActionStart((ev) => {
     // 当用户开始拖拽时，清除任何正在进行的惯性减速动画
       if (this.speedTimer) {
         clearInterval(this.speedTimer)
         this.speedTimer = null
       }
     }).onActionEnd((ev) => {
     // 松手后启动惯性旋转动画
       this.speedTimer = setInterval(() => {
         if (Math.abs(this.angleX) * 0.7 > this.viewStartX || Math.abs(this.angleY) * 0.7 > this.viewStartY) {
           this.angleX = this.angleX * 0.7
           this.angleY = this.angleY * 0.7
         } else {
           clearInterval(this.speedTimer)
           this.speedTimer = null
         }
       }, 500)
       clearInterval(this.timerAn)
       this.timerAn = setInterval(() => {
         this.rotateX();
         this.rotateY();
       }, 17)

     }).onActionUpdate((ev) => {
     // 每次手指移动时，调用this.listener(ev)来更新旋转角度
       this.listener(ev)
     })
   )
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupablility
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──wordData.ets                     // 数据结构
│  └──pages
│     └──MainPage.ets                     // 主页面
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

[绑定手势方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

[透明度设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-opacity)

## 代码下载

[球状标签动画示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260428173856.12326877634310167196164069203057%3A20260604124919%3A2800%3AB789ECD137BFE1F7CE3559CA4E7CB1E91E796DAD8438CBC883A7EA3BB7784F3C.zip?needInitFileName=true)
