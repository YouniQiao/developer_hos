---
title: "视频课程弹幕发送与设置"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_course_bullet_comments-0000002378246529
---

## 场景介绍

视频课程弹幕发送与设置是教育类应用中的高频使用场景之一，如用户在观看视频课程或直播时可以发送和观看弹幕，改变弹幕显示区域并设置弹幕样式。

本示例通过[Timer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)定时器循环方式填充弹幕与随机生成弹幕位置属性，控制弹幕在垂直方向显示位置区域变化效果，基于[translate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation#translate)属性变化实现弹幕水平移动效果。

## 效果预览

![](./img/8ffc02e1.png "点击放大") ![](./img/400e3b2f.png "点击放大")

## 实现思路

1. 生成弹幕：递归调用[setTimeout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#settimeout)设置定时器，循环向弹幕存储数组中添加新弹幕模拟随机生成弹幕。

   ```
   bulletCommentGenerator() {
     const GENERATE = () => {
       if (!this.isGeneratingNewComment) {
           return;
         }
         if (this.commentTimer) {
           clearTimeout(this.commentTimer);
       }
       // ...
       // Fill the data into the bullet list
       let randomText = this.commentsData[BulletCommentUtils.bulletCommentIndex];
       BulletCommentUtils.bulletCommentIndex =
         (BulletCommentUtils.bulletCommentIndex + 1) % this.commentsData.length;
       this.bulletComments.push(new BulletCommentItem(randomText, false, false, this.positionIndex));
       const DELAY = RandomUtils.getDelay();
       this.commentTimer = setTimeout(GENERATE, DELAY);
     }
     this.isGeneratingNewComment = true;
     GENERATE();
   }
   ```
2. 弹幕位置刷新：调用[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)设置定时器，更新弹幕水平位置信息，实现弹幕移动效果。

   ```
   this.timerId = setInterval(() => {
     if (!this.isPlaying) {
       return;
     }
     // Update positionX
     this.bulletUtil.bulletComments.forEach(item => {
       const positionX = item.positionX - item.speed;
       if (positionX !== item.positionX) {
         item.positionX = positionX;
       }
     });
     // Remove bullet comments that extend beyond the screen and trigger an update
     this.bulletUtil.bulletComments = this.bulletUtil.bulletComments.filter(item => item.positionX > -20);
   }, 16); // 60fps
   ```
3. 弹幕显示区域：调用setTimeout设置定时器，随机生成弹幕position属性值。

   ```
   bulletCommentGenerator() {
     const GENERATE = () => {
       // ...
       // Based on bullet comment position type,generate positions randomly
       if (this.positionYIndex === 0) {
         this.positionIndex = RandomUtils.getRandom();
       } else if (this.positionYIndex === 1) {
         this.positionIndex = RandomUtils.getTop();
       } else if (this.positionYIndex === 2) {
         this.positionIndex = RandomUtils.getBottom();
       }
       const DELAY = RandomUtils.getDelay();
       this.commentTimer = setTimeout(GENERATE, DELAY);
     }
     GENERATE();
   }
   ```
4. 弹幕显示：设置color和position属性，改变弹幕颜色和垂直方向显示位置区域。

   ```
   Text(item.content)
     .bulletCommentText(item)
   // ...
   function bulletCommentText(item: BulletCommentItem) {
     .fontColor(item.color)
     .translate({ x: `${item.positionX}`, y: 0 })
     .position({ y: `${item.positionY}%` })
     .borderRadius(Constants.HALF_PERCENT)
     .borderWidth(1)
     .key(item.id.toString());
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──components
│  │  ├──BulletCommentViewComponent.ets   // 弹幕组件
│  │  ├──BulletSettingComponent.ets       // 弹幕样式设置
│  │  ├──ControlBarComponent.ets          // 控制栏
│  │  ├──CourseComponent.ets              // 课程区
│  │  ├──CourseListComponent.ets          // 课程列表
│  │  ├──IntroductionComponent.ets        // 介绍区
│  │  └──VideoPlayerComponent.ets         // 视频播放组件
│  ├──constants
│  │  └──Constants.ets                    // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──BulletCommentItem.ets            // 弹幕模块
│  │  └──TrainInfoModel.ets               // 培训信息模块
│  ├──pages
│  │  ├──CourseDetailPage.ets             // 视频课程页
│  │  ├──Empty.ets                        // 缺省页
│  │  └──EntrancePage.ets                 // 入口页
│  └──util
│     ├──BulletCommentUtils.ets           // 弹幕工具类
│     ├──RandomUtils.ets                  // 随机生成类
│     └──VideoUtils.ets                   // 视频工具类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

[图形变换](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation)

## 代码下载

[视频课程弹幕发送与设置示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317191716.02887949313279938749643186965651%3A20260604124729%3A2800%3AD44009646291A1F03133A4479C7887E4116263A25988CB33359931BCBE5AE869.zip?needInitFileName=true)
