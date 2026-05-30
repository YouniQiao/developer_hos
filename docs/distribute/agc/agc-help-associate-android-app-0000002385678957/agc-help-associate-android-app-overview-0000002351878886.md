---
title: "概述"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-associate-android-app-overview-0000002351878886
---

当您开发了HarmonyOS应用，而此应用有对应的Android版本，您可以将两者进行关联，关联成功后，当用户设备升级至HarmonyOS 5及以上版本时，可以快速将设备上的Android应用自动替换为HarmonyOS应用，并完成用户数据迁移。

关联Android应用需要满足如下条件：

* Android应用与HarmonyOS应用，均已经全网发布。
* Android应用与HarmonyOS应用只能一对一关联，若Android应用已与其他的HarmonyOS关联，则不允许再关联一个新的HarmonyOS应用；反之亦然。
* Android应用与HarmonyOS应用，必须在相同的设备类型上分发，才能关联在一起。如分发设备类型均包含手机，或均包含平板，支持关联的场景可参考下表。

  | 当前上架HarmonyOS应用 | 支持关联的在架Android应用 |
  | --- | --- |
  | 仅支持手机 | 支持设备包含手机 |
  | 仅支持平板 | 支持设备包含平板 |
  | 仅支持手机+平板 | 支持设备包含手机 |
  | 仅支持平板+PC/2in1 | 支持设备包含平板 |
  | 仅支持手机+PC/2in1 | 支持设备包含手机 |
  | 仅支持手机+平板+PC/2in1 | 支持设备包含手机 |
* 游戏上架前需前往AGC控制台[配置APP ID映射关系](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-huawei#配置app-id映射关 系)。

您可以在以下两种情况下进行关联：

* [发布HarmonyOS应用时关联](https://developer.huawei.com/consumer/cn/doc/app/agc-help-associate-in-release-0000002385759281)：在首次发布或者升级HarmonyOS版本（之前未关联过Android应用）时，AppGallery Connect将自动匹配您名下是否存在可关联的Android应用，如果存在，将弹窗引导您进行关联。
* [在应用系列中进行关联](https://developer.huawei.com/consumer/cn/doc/app/agc-help-manage-app-series-0000002352038686)：如果发布时未进行关联，HarmonyOS应用已全网状态，且需要关联的Android应用也是全网状态，则可以通过管理应用系列实现。
