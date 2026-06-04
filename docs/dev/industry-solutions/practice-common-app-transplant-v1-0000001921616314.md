---
title: "HarmonyOS移植分析"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-transplant-v1-0000001921616314
---

## 技术迁移

**图1** 技术迁移实践图
![](./img/4632f356.png "点击放大")

**表1** 迁移开发指导

|  |  |
| --- | --- |
| **技术领域** | **开发指导** |
| ArkTS开发 | [ArkTS开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-get-started) |
| C/C++技术复用 | [NDK开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-development-overview) |
| Web技术复用 | [ArkWeb开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb) |

## 数据迁移

终端设备从HarmonyOS 3.1 Release API 9及之前版本（简称HarmonyOS）升级到HarmonyOS NEXT Developer Preview1及之后版本（简称HarmonyOS NEXT）时，原HarmonyOS中运行的APK应用，升级后需要切换为HarmonyOS NEXT中的HarmonyOS应用。APK应用的部分数据需要转换并迁移到指定位置后，才能被HarmonyOS应用访问。

详见[应用数据迁移指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-migration-overview)
