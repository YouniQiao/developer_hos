---
title: "ArkUI_AnimateCompleteCallback"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-animatecompletecallback"
catalog: "harmonyos-references"
content_hash: "4d25a1f5454d"
synced_at: "2026-07-09T00:58:39.098996"
---

# ArkUI_AnimateCompleteCallback

```
typedef struct {...} ArkUI_AnimateCompleteCallback
```

#### 概述

动画播放结束回调类型。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_animate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI_FinishCallbackType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_finishcallbacktype) type | 在动画中定义结束回调的类型。 |
| void* userData | 用于动画结束回调，传递用户自定义数据。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [void (*callback)(void* userData)](#callback) | 动画播放结束回调。 |

#### 成员函数说明

#### [h2]callback()

```
void (*callback)(void* userData)
```
 描述：

动画播放结束回调。
