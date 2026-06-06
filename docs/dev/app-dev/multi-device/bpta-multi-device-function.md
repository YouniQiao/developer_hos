---
title: "多设备功能开发"
displayed_sidebar: appDevSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-function
format: md
---

# 多设备功能开发

应用开发至少包含两部分工作： UI页面开发和底层功能开发（部分需要联网的应用还会涉及服务端开发）。前面章节介绍了如何解决页面适配的问题，本章节主要介绍应用如何解决设备系统能力差异的兼容问题。

## 系统能力

[系统能力SystemCapability使用指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap)（即SystemCapability，缩写为SysCap）指操作系统中每一个相对独立的特性，如蓝牙，WIFI，NFC，摄像头等，都是系统能力之一。每个系统能力对应多个API，随着目标设备是否支持该系统能力共同存在或消失。

与系统能力相关的，有支持能力集、联想能力集和要求能力集三个核心概念。

* **支持能力集**：设备具备的系统能力集合，在设备配置文件中配置。
* **要求能力集**：应用需要的系统能力集合，在应用配置文件中配置。
* **联想能力集**：开发应用时DevEco Studio可联想的API所在的系统能力集合，在应用配置文件中配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/FPuS_7WLTdKKvwOAOz7P2Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074224Z&HW-CC-Expire=86400&HW-CC-Sign=C6E29D9DA13F2D690EB08AF525A60D5B1D398D546074B6F94665C28C58FE9CA8)

* 只有当应用要求能力集是设备支持能力集的子集的时候，应用才可以在该设备上分发、安装和运行。
* 系统能力使用可参考[系统能力SystemCapability使用指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap)。

## 多设备应用开发

开发多设备应用时，工程中默认的要求能力集是多个设备支持能力集的交集，默认的联想能力集是多个设备支持能力集的并集。

* 开发者可以在运行时动态判断某设备是否支持特定的系统能力。
* 开发者可以自行修改联想能力集和要求能力集。

**动态逻辑判断**

如果某个系统能力没有写入应用的要求能力集中，那么在使用前需要判断设备是否支持该系统能力。

* canIUse()接口帮助开发者来判断该设备是否支持某个特定的syscap。

  ```
  if (canIUse('SystemCapability.Communication.NFC.Core')) {
    hilog.info(0x0000, 'Index', `该设备支持SystemCapability.Communication.NFC.Core`);
  } else {
    hilog.error(0x0000, 'Index', `该设备不支持SystemCapability.Communication.NFC.Core`);
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/ArkUI/orientationDevelopment/entry/src/main/ets/pages/Index.ets#L33-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/NQXlSQisTlC0DNuJ4j2xpg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074224Z&HW-CC-Expire=86400&HW-CC-Sign=B3C98018350FCECD5B38F13E77E90AB4AD8AB3148A90D0C8C91FC84EF986F6DE)

* 如果某系统能力是应用运行必须的，则要将其写入到应用的要求能力集中，以确保应用不会分发和安装到不符合要求的设备上。
* 如果某系统能力不是应用运行必须的，则可以在运行时做动态判断，这样可以最大程度扩大应用的适用范围。

**配置联想能力集和要求能力集**

DevEco Studio会根据创建的工程所支持的设备自动配置联想能力集和要求能力集，同时也支持开发者修改。

```
// syscap.json
{
    "devices": {
        "general": [
            "default",
            "tablet"
        ],
        "custom": [
            {
                "Custom Device": [
                    "SystemCapability.Communication.SoftBus.Core"
                ]
            }
        ]
    },
    "development": {
        "addedSysCaps": [
            "SystemCapability.Communication.NFC.Core"
        ]
    },
    "production": {
        "addedSysCaps": [],
        "removedSysCaps": []
    }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/3cy58IwkT6C5_92dDwAvMg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074224Z&HW-CC-Expire=86400&HW-CC-Sign=76C31871E7910D94251FD14E5B4547AE04BBAFA92480E71508F1B3C911DF46F6)

* 对于要求能力集，开发者修改时要十分慎重，修改不当会导致应用无法分发和安装到目标设备上。
* 对于联想能力集，通过增加系统能力可以扩大DevEco Studio可联想的API范围。但要注意这些API可能在某些设备上不支持，使用前需要判断。

## 总结

从应用开发到用户使用，通常要经历应用分发和下载、应用安装、应用运行等环节。借助SysCap机制，可以在各个环节中加以拦截或管控，保证应用可以在设备上正常安装和使用。

* 应用分发和下载：只有当应用要求能力集是设备支持能力集的子集时（即设备满足应用运行要求），应用才可以分发到该设备。
* 应用安装：只有当应用要求能力集是设备支持能力集的子集时，应用才可以安装到该设备。
* 应用运行：应用在使用要求能力集之外的能力前，需要动态判断相应系统能力的有效性，防止崩溃或功能异常等问题。

SysCap机制可以帮助开发者仅关注设备的系统能力，而不用考虑成百上千种具体的设备类型，降低多设备应用开发难度。
