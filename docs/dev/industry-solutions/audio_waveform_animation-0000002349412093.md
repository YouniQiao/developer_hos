---
title: "音频波形动画"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/audio_waveform_animation-0000002349412093
---

## 场景介绍

音频波形动画是影音娱乐类应用中的典型场景之一，如用户在录音或播放录音过程中实时展示音量大小。

本示例基于[AudioCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer)、[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)、[@ohos.animator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-animator)实现音频录制及播放过程中的音频波形动画效果，音量大时振幅大，音量小时振幅小。

## 效果预览

![](./img/9e2c1646.png "点击放大")

## 实现思路

1. 通过[AudioCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer)录制音频，将录制过程中获得的PCM音频采样数据保存至指定应用沙箱目录下的文件中。
2. 读取指定应用沙箱目录下的PCM音频文件，通过AudioRenderer播放。
3. 使用两块画布交替拼接并不断从右向左移动，根据录制和播放过程中的PCM数据实时计算音量大小，并根据音量大小在画布上绘制对应高度的线条，实现音频波形动画效果。

```
// 动画的逐帧回调函数
this.animator.onFrame = (value: number) => {
  let diff = value - this.animatorValue;
  this.animatorValue = value;
  this.offsetX0 -= diff; // 从右向左移动画布一
  this.offsetX1 -= diff; // 从右向左移动画布二
  // 画布距离上一次绘制位置移动超过一定距离后，绘制下一根线条
  if (Math.round(this.animatorValue - this.drawXPos) >= Constants.LINE_SPACE) {
    this.drawOnRecord(); // 在画布上绘制线条
  }
};
// 动画的结束回调函数
this.animator.onFinish = () => {
  // ...
  this.forwardCanvas = 1 - this.forwardCanvas;
  if (this.forwardCanvas === 1) {
    this.offsetX0 = 2 * this.dWidth; // 画布一在前，并从右向左移动到屏幕外，将其拼接到画布二右边缘
  } else {
    this.offsetX1 = 0; // 画布二在前，并从右向左移动到屏幕外，将其拼接到画布一右边缘
  }
  this.animator?.play() // 再次启动动画播放
};
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取麦克风权限：[ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmicrophone)。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  ├─Constants.ets             // 常量页
│  │  ├─Objects.ets               // 对象页
│  │  └─utils.ets                 // 工具页
│  ├──entryability
│  │  └──EntryAbility.ets         // 沉浸式适配
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                // 主页
│  └──viewmodel
│     ├─AudioCapturerManager.ets  // 音频录制类
│     └─AudioRendererManager.ets  // 音频播放类
└──entry/src/main/resources
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[@ohos.animator（动画）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-animator)

[Interface(AudioCapturer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer)

## 代码下载

[音频波形动画示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194127.01023795618881487342649870210093%3A20260604141952%3A2800%3AC69706CBFC7B08118C9261B13D427AE9BF74561484F2F1759376426F4306D5AA.zip?needInitFileName=true)
