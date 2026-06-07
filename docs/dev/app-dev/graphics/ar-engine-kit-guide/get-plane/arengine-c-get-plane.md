---
displayed_sidebar: appDevSidebar
title: "检测环境中的平面（C/C++）"
original_url: /docs/dev/app-dev/graphics/ar-engine-kit-guide/get-plane/arengine-c-get-plane
format: md
---


## 概要

本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

## 约束与限制

从5.0.0(12)开始，检测环境平面能力支持部分Phone、部分Tablet设备。请参考[硬件要求](/docs/dev/app-dev/graphics/arengine-preparations#硬件要求)判断设备是否支持运动跟踪及平面识别特性（[ARENGINE\_FEATURE\_TYPE\_SLAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

## 引入AR Engine

开发者可参考管理AR会话章节的[引入AR Engine](/docs/dev/app-dev/graphics/ar-engine-kit-guide/arsession/arengine-c-arsession#引入ar-engine)。

## 创建ARSession

开发者可以参考[管理AR会话](/docs/dev/app-dev/graphics/ar-engine-kit-guide/arsession/arengine-c-arsession)创建ARSession。

## 创建平面对象列表

1. 创建一个平面对象列表planeList，用于存放AR Engine运行过程中检测到的所有平面。

   ```
   AREngine_ARTrackableList *planeList = nullptr;
   HMS_AREngine_ARTrackableList_Create(arSession, &planeList);
   ```
2. 设置可跟踪对象类型为ARENGINE\_TRACKABLE\_PLANE。

   ```
   AREngine_ARTrackableType planeTrackedType = ARENGINE_TRACKABLE_PLANE;
   ```

## 识别当前环境中的平面

调用[HMS\_AREngine\_ARSession\_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)函数，检测当前环境中的所有平面，并将结果存放在planeList中。

```
HMS_AREngine_ARSession_GetAllTrackables(arSession, planeTrackedType, planeList);
```

## 获取平面数量

调用[HMS\_AREngine\_ARTrackableList\_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_getsize)函数获取平面数量，结果存放在planeListSize中。

```
int32_t planeListSize = 0;
HMS_AREngine_ARTrackableList_GetSize(arSession, planeList, &planeListSize);
```

在应用环境中，可能存在0个、1个或多个平面。

当planeListSize等于0时，表示当前环境中不存在平面。

当planeListSize等于1时，表示当前环境中仅存在1个平面。

当planeListSize大于1时，表示当前环境中存在多个平面。

## 获取平面实例

当存在1个或多个平面时，可以依次遍历planeList获取所有平面对象。

```
for (int i = 0; i < planeListSize; ++i) {
    // 遍历所有平面对象，根据您的应用进行处理。
}
```

对于第i个平面，创建并获取可跟踪对象，并将其转化为平面对象[AREngine\_ARPlane](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arplane)。

```
AREngine_ARTrackable *arTrackable = nullptr;
HMS_AREngine_ARTrackableList_AcquireItem(arSession, planeList, i, &arTrackable);
AREngine_ARPlane *arPlane = reinterpret_cast<AREngine_ARPlane*>(arTrackable);
```

![](./img/5e889744.png)

AR Engine中，任何物体都被定义为可跟踪对象[AREngine\_ARTrackable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_artrackable)。平面也是一种可跟踪对象，开发者可以通过类型转换reinterpret\_cast将可跟踪对象[AREngine\_ARTrackable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_artrackable)转化为平面对象[AREngine\_ARPlane](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arplane)。

## 销毁平面对象列表

```
HMS_AREngine_ARTrackableList_Destroy(planeList);
```
