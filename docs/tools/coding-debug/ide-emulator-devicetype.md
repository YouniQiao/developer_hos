---
title: "设备支持类型"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-emulator-devicetype
format: md
upstream_id: tools/coding-debug/ide-emulator-devicetype
last_sync: 2026-06-07
sync_hash: ad2df348
---
# 设备支持类型

模拟器在不同系统上支持的设备类型见下表。

| 系统类型 | 设备类型 | 产品类型 | 备注 |
| --- | --- | --- | --- |
| Windows(X86)  macOS(ARM) | Phone | Phone直板机 | 仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。  从6.1.0(23)开始，阔折叠品类下新增Pura X Max设备型号。 |
| Foldable双折叠 |
| WideFold阔折叠 |
| TripleFold三折叠 |
| Tablet | Tablet | 仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。 |
| 2in1 | 2in1 | 从DevEco Studio 5.0.5 Release版本开始，支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。 |
| 2in1 Foldable | 从DevEco Studio 6.0.0 Beta2版本开始，支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。 |
| Wearable | Wearable | 从DevEco Studio 6.0.0 Beta3版本开始，支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。  从DevEco Studio 6.0.1 Release版本开始，支持在所有国家/地区使用。 |
| WearableKid | 从DevEco Studio 6.1.0 Beta1版本开始，支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。  从DevEco Studio 6.1.1 Release版本开始，支持在所有国家/地区使用。 |
| TV | TV | 从DevEco Studio 5.1.1 Release (5.1.1.840)版本开始，支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）使用。 |

![](./img/note_3.0-zh-cn.png)

使用x86模拟器时，C++工程及三方库需要编译出x86\_64版本的so，请在工程级或模块级build-profile.json5的externalNativeOptions/abiFilters的值中增加"x86\_64"，具体编译配置请参见[externalNativeOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-cpp#section0721057575)。
