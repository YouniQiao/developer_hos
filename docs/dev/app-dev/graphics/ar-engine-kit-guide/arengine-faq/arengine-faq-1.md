---
displayed_sidebar: appDevSidebar
title: "获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401"
original_url: /docs/dev/app-dev/graphics/ar-engine-kit-guide/arengine-faq/arengine-faq-1
format: md
---


## 现象描述

调用[HMS\_AREngine\_ARPlane\_GetPolygonSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getpolygonsize)获取检测到平面的二维顶点数组大小时报错：“plane is nullptr!”，返回错误码：401。

## 可能原因

初次打开应用还未识别到平面，调用[HMS\_AREngine\_ARSession\_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)获取的可跟踪对象列表为空，导致后续[HMS\_AREngine\_ARTrackableList\_AcquireItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem)获取对应索引的对象也为空，使用前未做有效性判断，使用时出现无效参数错误。

## 处理步骤

开发者从AR Engine获取平面之后需判断其有效性后使用，例如，进行非空判断。
