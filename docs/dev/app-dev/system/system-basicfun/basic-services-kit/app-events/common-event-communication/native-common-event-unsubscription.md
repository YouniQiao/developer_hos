---
title: "取消订阅公共事件（C/C++）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-unsubscription
format: md
---


## 场景介绍

订阅者在完成业务需求之后，需要取消订阅公共事件。

## 接口说明

详细的API说明请参考[oh\_commonevent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h)。

| 接口名 | 描述 |
| --- | --- |
| [CommonEvent\_ErrCode OH\_CommonEvent\_UnSubscribe(const CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_unsubscribe) | 取消订阅公共事件。 |

## 开发步骤

1. 引用头文件。

   ```
   #include "hilog/log.h"
   #include "BasicServicesKit/oh_commonevent.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_unsubscribe.h#L19-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_unsubscribe.h</a></div>

2. 在CMake脚本中添加动态链接库。

   ```
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libhilog_ndk.z.so
       libohcommonevent.so
   )
   ```
3. 取消订阅公共事件。

   订阅者订阅公共事件并完成业务需求后，可以通过[OH\_CommonEvent\_UnSubscribe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_unsubscribe)主动取消订阅事件。

   ```
   void Unsubscribe(CommonEvent_Subscriber *subscriber)
   {
       // 通过传入订阅者来退订事件
       int32_t ret = OH_CommonEvent_UnSubscribe(subscriber);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_UnSubscribe ret <%{public}d>.", ret);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_unsubscribe.cpp#L17-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_unsubscribe.cpp</a></div>
