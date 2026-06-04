---
title: "滑块拼图验证"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/slide_verification-0000002348282886
---

## 场景介绍

滑块拼图验证是各类应用中的高频使用场景之一，如用户在进行登录或注册时，需滑动滑块填充拼图以通过人机验证。

本示例利用[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)实现了滑块拼图人机验证功能。

## 效果预览

![](./img/8f857a45.gif "点击放大")

## 实现思路

1. 在外部滑动条[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)中使用[contentModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#contentmodifier12)定制内容区，并在[onChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#onchange)事件中进行逻辑验证，判断是否成功验证。

   ```
   Slider({
     value: this.sliderValue,
     min: this.sliderMin,
     max: this.sliderMax,
   })
   .onChange((value: number, mode: SliderChangeMode) => {
     if (mode === SliderChangeMode.End) {
       if (value >= CommonConstant.INTERVAL_MIN && value <= CommonConstant.INTERVAL_MAX) {
         this.isPeople = true
       }
     }
     // ...
   })
   .contentModifier(new MySliderStyle(SliderChangeMode.End))
   ```
2. 自定义构建函数buildSlider，其中主要包含一个位置固定的“图片缺口”，一个位置随参数变化而改变的“可移动图片”，一个可移动滑动条（内部滑动条），以及其他组件。具体实现请查看完整示例代码。

   ```
   @Builder
   function buildSlider(config: SliderConfiguration) {}
   // 位置固定的“图片缺口”
   Image($r('app.media.select1'))
     .height(42)
     .margin({
       left: 90,
       top: 32
     })
   // 位置可随变量config.value变化的“可移动图片”
   Image($r('app.media.select2'))
     .height(62)
     .margin({
       left: CommonConstant.INITIAL_POSITION + config.value,
       top: 32
     })
   // 内部滑动条，其他详细参数请在代码中查看
   Slider({
     value: config.value,
     min: config.min,
     max: config.max,
     style: SliderStyle.InSet
   })
     .onChange((value: number, mode: SliderChangeMode) => {
       config.triggerChange(value, mode);
     })
   ```
3. 内部滑动条发生改变时，外部滑动条监听到该变化时触发onChange事件，在滑动结束时判断是否成功验证。

   ```
   // 内部滑动条
   Slider({
     // ...
   })
     .onChange((value: number, mode: SliderChangeMode) => {
       config.triggerChange(value, mode); // 触发变更事件，通知外部滑动条更新状态
     })
   ```

## 约束与限制

* 本示例支持API Version 17 Release及以上版本。
* 本示例支持HarmonyOS 5.0.5 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 5.0.5 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──constants
│  │  └──CommonConstant.ets          // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──LoginPage.ets               // 登录界面
│  └──view
│     ├──BuildTextTimer.ets          // 自定义倒计时
│     └──VerificationDialog.ets      // 滑块弹窗
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)

## 代码下载

[滑块拼图验证示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100049.20862203218438600042270507570475%3A50001231000000%3A2800%3A791A3789E50B67951FFF6C8F25910F25DCC8FE0CEBB86018BA66B7A2E0914EA8.zip?needInitFileName=true)
