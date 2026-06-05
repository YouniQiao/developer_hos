---
title: "Scan Kit简介"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-scan-introduction
format: md
---


Scan Kit（统一扫码服务）作为软硬协同的系统级扫码服务，帮助元服务快速构建面向各种场景的码图识别和码图生成能力。Scan Kit应用了多项计算机视觉技术和AI算法技术，不仅实现了远距离自动扫码，同时还针对多种复杂扫码场景（如暗光、污损、模糊、小角度、曲面码等）做了识别优化，提升扫码成功率与用户体验。

## 场景介绍

Scan Kit为元服务提供了默认界面扫码和码图生成两种能力。

* 默认界面扫码：提供系统级体验一致的扫码界面，包含相机预览流，相册扫码入口，暗光环境闪光灯开启提示，具备相机预授权，集成简单，适用于通用扫码场景。
* 码图生成：通过文本或字节数组生成码图。

## 约束与限制

### 支持的设备

* 默认界面扫码能力支持Phone、Tablet、Wearable（从6.1.0(23)版本开始支持带后置相机的Wearable，可以通过[cameraManager.getSupportedCameras](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#getsupportedcameras)接口查询是否带后置相机）。
* 码图生成能力支持Phone、Tablet、Wearable、2in1、TV（从5.1.0(18)版本开始支持Wearable、从5.1.1(19)版本开始支持2in1、TV）。

### 功能使用限制

| 能力 | 限制条件 |
| --- | --- |
| 默认界面扫码能力 | 从6.1.0(23)版本开始，标题支持根据[ScanOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api#scanoptions)的scanTypes进行动态显示；从6.0.0(20)版本开始，支持悬浮屏、分屏场景。相册扫码只支持单码识别；不支持界面UX添加自定义设置。 |
| 码图生成能力 | 通过字节数组生成码图时，若Scan Kit识别某码图内容显示内容为乱码，则该码图的字节数组需要通过专门的解码器解析，例如地铁闸机。 |

## 模拟器支持情况

本Kit支持模拟器开发，但与真机存在部分能力差异，具体差异如下：

* 通用差异：请参见“[模拟器与真机的差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification#section1227613205203)”。
* 从6.0.0(20)版本开始，模拟器支持默认界面扫码能力开发，模拟器中默认界面扫码的相机流存在镜像问题，且由于仅支持固定分辨率比例，画面会出现上下黑边。
* 模拟器不支持码图生成能力。
