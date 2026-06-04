---
title: "自定义计时器"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/custom_start_time_timer-0000002330585486
---

## 场景介绍

自定义计时器是实用工具类应用的高频使用场景之一，如马拉松计时可以在上一路段用时基础上继续计时下一路段用时。

本示例通过[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)组件[contentModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer#contentmodifier12)属性定制计时器内容区，实现初始计时时长、用时记录自定义和正计时、倒计时切换。

## 效果预览

![](./img/6e01a46f.gif "点击放大")

## 实现思路

1. 设定自定义内容区：TextTimerModifier类用于修改[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)的显示内容，buildTextTimer函数构建一个显示计时信息的UI组件。

   ```
   class TextTimerModifier implements ContentModifier<TextTimerConfiguration> {
     applyContent(): WrappedBuilder<[TextTimerConfiguration]> {
       return wrapBuilder(buildTextTimer);
     }
   }

   @Builder
   function buildTextTimer(config: TextTimerConfiguration) {
     Column() {
       Stack({ alignContent: Alignment.Center }) {
         Column() {
           Text(
             // 判断是否为倒计时模式，分别获取计时器实时时间
             config.isCountDown ?
               getCountDownTime(config.elapsedTime) : getCountUpTime(config.elapsedTime)
           )
         }
       }
     }
   }
   ```
2. 创建两种计时方式TextTimer组件，两个[TextTimerController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer#texttimercontroller)实例分别控制两个计时器。

   ```
   @Builder
   textTimerBuilder() {
     Stack() {
       // 正计时计时器
       TextTimer({ isCountDown: false, controller: this.countUpTextTimerController })
         .contentModifier(this.myTimerModifier)
         .onTimer((utc: number, elapsedTime: number) => {
           // 记录计时用时
         });

       // 倒计时计时器
       TextTimer({ isCountDown: true, count: this.countDown * 1000, controller: this.countDownTextTimerController })
         .contentModifier(this.myTimerModifier)
         .onTimer((utc: number, elapsedTime: number) => {
           // 同上
         });
     }
   }
   ```
3. 自定义弹窗控制器接收用户输入时间作为计时器开始时间。

   ```
   dialogController: CustomDialogController = new CustomDialogController({
     builder: initTimeDialog({
       time: this.initTime,
       cancel: () => {
         this.onCancel();
       },
       confirm: (time) => {
         this.onAccept(time);
         this.initTime = time;
       },
     }),
     isModal: true
   });

   onAccept(time: string) {
     // 判断计时方式，获取用户输入时间，重置计时器并设置计时开始时间
     if (this.isCountUp) {
       this.countUp = Number(time);
       AppStorage.setOrCreate('initCountUpTime', this.countUp);
       this.isStart = true;
       this.countUpTextTimerController.reset();
       this.countUpTime = [];
     } else {
       this.countDown = Number(time);
       AppStorage.setOrCreate('initCountDownTime', this.countDown);
       this.isStart = true;
       this.countDownTextTimerController.reset();
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├─entry/src/main/ets               // 代码区
│  ├──common
│  │  └─Constants.ets              // 公共常量
│  ├──entryability
│  │  └─EntryAbility.ets
│  ├──entrybackupability
│  │  └─EntryBackupAbility.ets
│  ├──pages
│  │  └─Timer.ets                  // 主页
│  └──viewmodel
│     └─TextTimerModifier.ets      // 自定义计时器内容区
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)

[自定义弹窗(CustomDialog)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)

## 代码下载

[自定义计时器示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101757.62657311520217208185501198781288%3A50001231000000%3A2800%3A12D36932550D46034A56C2F328CA1FEEFBBEACEF2C277A3087A121B1114BEE25.zip?needInitFileName=true)
