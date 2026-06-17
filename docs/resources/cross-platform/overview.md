---
title: 跨平台框架
sidebar_label: 跨平台框架
format: md
upstream_id: _local
last_sync: 2026-06-08
---
# 跨平台框架

HarmonyOS 生态支持多种跨平台开发框架，开发者可使用熟悉的框架和技术栈快速构建鸿蒙应用。

| 框架 | 简介 | 项目地址 | 文档 / 参考 |
|------|------|---------|------------|
| **ArkUI-X** | 华为官方跨平台框架，基于 ArkUI 声明式开发范式，将 ArkUI 能力扩展到 Android、iOS 等平台 | [arkui-x](https://gitcode.com/arkui-x) | [文档](https://gitcode.com/arkui-x/docs/tree/master/zh-cn) |
| **Flutter** | 高性能跨端 UI 框架，Dart 语言，一套代码多平台 + 原生性能 | [flutter_flutter](https://gitcode.com/openharmony-tpc/flutter_flutter) | [文档](https://gitcode.com/openharmony-tpc/flutter_samples/tree/master/ohos/docs) / [三方库清单](https://gitcode.com/openharmony-tpc/flutter_packages) |
| **React Native** | 基于 JS/TS + React，声明式 UI，适合已有 Web/React 技术栈的团队 | [ohos_react_native](https://gitcode.com/openharmony-sig/ohos_react_native) | [文档](https://gitcode.com/openharmony-sig/ohos_react_native/tree/master/docs/zh-cn) / [三方库社区](https://gitcode.com/openharmony-sig/ohos_react_native) |
| **Chromium** | 开源浏览器内核，适合需深度定制浏览器引擎的少数特殊场景 | [chromium_src](https://gitcode.com/openharmony-tpc/chromium_src) | [Chromium 官网](https://www.chromium.org/Home/) / [开发指导](https://developer.huawei.com/consumer/cn/forum/topic/0201189795100784164?fid=0109140870620153026) |
| **CEF** | 将 Chromium 浏览器嵌入到现有应用的开源框架，提供简洁 API | [chromium_cef](https://gitcode.com/openharmony-tpc/chromium_cef) | [CEF 官网](https://bitbucket.org/chromiumembedded/cef) / [开发指导](https://developer.huawei.com/consumer/cn/forum/topic/0204189797656362142?fid=0109140870620153026) |
| **Electron** | Web 技术（HTML/CSS/JS）构建跨平台桌面应用，结合 Chromium + Node.js | [electron](https://gitcode.com/openharmony-sig/electron) | [Electron 官网](https://www.electronjs.org/) / [开发指导](https://developer.huawei.com/consumer/cn/forum/topic/0204189796759316140?fid=0109140870620153026) |
| **Qt** | 跨平台应用开发框架，支持 Widgets 和 Quick 两种 UI 范式，适合高性能桌面/嵌入式场景 | — | [Qt for HarmonyOS](https://wiki.qt.io/Qt_for_HarmonyOS) |
| **Taro** | 京东凹凸实验室出品，支持 React/Vue/Nerv 开发小程序、H5、RN 及鸿蒙应用 | — | [Taro 文档](https://docs.taro.zone/docs/) |
| **uni-app / uni-app x** | DCloud 出品，Vue.js 一套代码发布到 iOS、Android、鸿蒙及多平台小程序 | — | [uni-app](https://uniapp.dcloud.net.cn/tutorial/harmony/intro.html) / [uni-app x](https://doc.dcloud.net.cn/uni-app-x/app-harmony/) |
| **Lynx** | TikTok 出品，利用 Web 技能从单一代码库为移动端和 Web 端创建原生 UI | — | [Lynx GitHub](https://github.com/lynx-family/lynx) |
| **Hippy** | 腾讯 TDSF 出品，抹平 iOS/Android/OpenHarmony 三端差异，支持 React 和 Vue | — | [Hippy 文档](https://doc.openhippy.com/) |

## ArkUI-X

ArkUI-X 是华为官方推出的跨平台框架，基于 HarmonyOS 的 ArkUI 声明式开发范式，将 ArkUI 能力扩展到 Android、iOS 等平台，实现一套代码多端运行。

## Flutter

Flutter for OpenHarmony 是 Flutter 框架在鸿蒙生态的适配版本，由社区维护。开发者可使用 Dart 语言和 Flutter 组件库构建 HarmonyOS 应用。

Flutter 生态三方库有三类：纯 Dart 库、Plugin 插件、FFI 插件。对于纯 Dart 类库，不依赖具体平台实现，基本可复用原社区版本；对于其他类型的三方库，主流库已基于上游社区适配支持 HarmonyOS 平台。

## React Native

React Native for OpenHarmony（RNOH）将 React Native 框架适配到 HarmonyOS，支持 JavaScript/TypeScript 开发。开发者只需少量适配，即可将基于 RN 开发的 UI 应用迁移到 OpenHarmony 或 HarmonyOS 平台，大幅降低迁移门槛。

## Chromium

Chromium for OpenHarmony（ChroimumOH）基于 Chromium 132，已在 HarmonyOS 5.0 环境中经过严格测试与验证，于 2025 年 6 月在 OpenHarmony 社区开源。鸿蒙生态将持续投入对 ChroimumOH 的维护、升级和优化。

> 直接使用纯 Chromium 源码开发门槛较高，通常只适用于极少数特定场景。对于绝大多数应用开发，建议优先考虑基于成熟框架（如 Electron、CEF）。

## CEF

CEF for OpenHarmony 基于 CEF 框架对 OpenHarmony 平台进行兼容扩展，已在 HarmonyOS 5.0 环境中经过验证，于 2025 年 6 月在 OH 社区正式开源。鸿蒙生态将持续维护和优化。

## Electron

Electron for OpenHarmony 对 OpenHarmony 平台进行了适配，已在 HarmonyOS 5.0 环境中经过验证，于 2025 年 6 月在 OH 社区正式开源。

## Qt

Qt 是一个跨平台应用程序开发框架，适用于桌面、嵌入式和移动设备，拥有强大的开发工具（Qt Creator IDE）和两种 UI 构建范式（传统 Widgets 和声明式 Quick）。一般用于追求高性能和原生体验、涉及复杂桌面软件或工业嵌入式界面的场景。Qt 框架已支持 HarmonyOS 平台。

## Taro

Taro 是由京东凹凸实验室主导开发的开放式跨端跨框架解决方案，支持使用 React、Vue、Nerv 等框架开发小程序、H5 和 RN 等应用。Taro 的鸿蒙方案由京东团队研发，让开发者以熟悉的方式开发鸿蒙应用。

## uni-app / uni-app x

uni-app 是 DCloud 推出的跨端开发框架，支持一套代码编译到 HarmonyOS、iOS、Android、Web 及多种小程序平台。uni-app x 是基于 uts 语言的下一代版本，提供更原生的鸿蒙开发体验。

## Lynx

Lynx 由 TikTok 主导开发，旨在帮助开发者利用现有 Web 技能，从单一代码库为移动端和 Web 端创建原生 UI。在 Lynx 3.4 版本上开源了对 OpenHarmony 平台的支持。

## Hippy

Hippy 是腾讯 TDSF 旗下的开源跨平台应用开发解决方案，可理解为精简版浏览器，从底层抹平 iOS、Android、OpenHarmony 三端差异，提供接近 Web 的开发体验。上层支持 React 和 Vue，在启动速度、渲染性能、动画速度、内存占用、包体积等方面表现优秀。

## 实践建议

- **移动 Web 应用**：场景无需原生设备功能，希望尽快推向市场且团队熟悉 Web 技术时选用。
- **原生应用**：需要平台特定控件、高性能体验、离线使用、深度设备 API 访问时选用。
- **跨平台应用**：希望单一代码库覆盖多平台且仍能访问原生设备功能时选用，可降低维护成本。

选择框架时除技术成熟度和能力外，还需评估团队专业知识、框架维护者的长期支持、社区活跃度及学习资源丰富程度等因素。

## 社区共创

鸿蒙生态秉承持续开放、协同共建的发展理念。目前华为已携手微信、抖音、美团、京东、小红书、快手、知乎、飞书、腾讯视频等 40+ 位生态伙伴，共建 120+ 项技术能力，覆盖性能优化、应用特色组件、开发效率提升等领域。

有意参与共建的开发者可加入 OpenHarmony 社区跨平台框架相关兴趣组，贡献形式包括：孵化技术项目、贡献代码/文档、发表技术文章、承接技术难题、组织或参与技术活动等。
