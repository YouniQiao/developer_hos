---
title: "订阅公共事件（C/C++）"
original_url: /docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription
format: md
---


## 场景介绍

通过[OH\_CommonEvent\_CreateSubscriber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscriber)创建的订阅者可以对某个公共事件进行订阅，如果有订阅的事件发布那么订阅了这个事件的订阅者将会收到该事件及其传递的参数，也可以通过订阅者对象进一步处理有序公共事件。

## 接口说明

详细的API说明请参考[oh\_commonevent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h)。

| 接口名 | 描述 |
| --- | --- |
| [CommonEvent\_SubscribeInfo\* OH\_CommonEvent\_CreateSubscribeInfo(const char\* events[], int32\_t eventsNum)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscribeinfo) | 创建订阅者信息。 |
| [void OH\_CommonEvent\_DestroySubscribeInfo(CommonEvent\_SubscribeInfo\* info)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_destroysubscribeinfo) | 销毁订阅者信息。 |
| [CommonEvent\_Subscriber\* OH\_CommonEvent\_CreateSubscriber(const CommonEvent\_SubscribeInfo\* info, CommonEvent\_ReceiveCallback callback)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscriber) | 创建订阅者。 |
| [void OH\_CommonEvent\_DestroySubscriber(CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_destroysubscriber) | 销毁订阅者。 |
| [CommonEvent\_ErrCode OH\_CommonEvent\_Subscribe(const CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_subscribe) | 订阅事件。 |
| [bool OH\_CommonEvent\_AbortCommonEvent(CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_abortcommonevent) | 中止当前的有序公共事件。 |
| [bool OH\_CommonEvent\_ClearAbortCommonEvent(CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_clearabortcommonevent) | 取消当前有序公共事件的中止状态。 |
| [bool OH\_CommonEvent\_FinishCommonEvent(CommonEvent\_Subscriber\* subscriber)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_finishcommonevent) | 结束对当前有序公共事件的处理。 |

## 开发步骤

1. 引用头文件。

   ```
   #include <cstdint>
   #include <cstring>
   #include "hilog/log.h"
   #include "BasicServicesKit/oh_commonevent.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.h#L19-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.h</a></div>

2. 在CMake脚本中添加动态链接库。

   ```
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libhilog_ndk.z.so
       libohcommonevent.so
   )
   ```
3. 创建订阅者信息。

   通过[OH\_CommonEvent\_CreateSubscribeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscribeinfo)创建订阅者信息。

   ```
   CommonEvent_SubscribeInfo *CreateSubscribeInfo(const char *events[], int32_t eventsNum, const char *permission,
                                                  const char *bundleName)
   {
       int32_t ret = -1;
       // 创建订阅者信息
       CommonEvent_SubscribeInfo *info = OH_CommonEvent_CreateSubscribeInfo(events, eventsNum);

       // 设置发布者权限
       ret = OH_CommonEvent_SetPublisherPermission(info, permission);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_SetPublisherPermission ret <%{public}d>.", ret);

       // 设置发布者包名称
       ret = OH_CommonEvent_SetPublisherBundleName(info, bundleName);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_SetPublisherBundleName ret <%{public}d>.", ret);
       return info;
   }

   // 销毁订阅者信息
   void DestroySubscribeInfo(CommonEvent_SubscribeInfo *info)
   {
       OH_CommonEvent_DestroySubscribeInfo(info);
       info = nullptr;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L17-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>

4. 创建订阅者。

   创建订阅者时需传入公共事件的回调函数[CommonEvent\_ReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#commonevent_receivecallback)。待事件发布时，订阅者会接收到回调数据[CommonEvent\_RcvData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#结构体)。

   ```
   // 公共事件回调函数
   void OnReceive(const CommonEvent_RcvData *data)
   {
       // 获取回调公共事件名称
       const char *event = OH_CommonEvent_GetEventFromRcvData(data);

       // 获取回调公共事件结果代码
       int code = OH_CommonEvent_GetCodeFromRcvData(data);

       // 获取回调公共事件自定义结果数据
       const char *retData = OH_CommonEvent_GetDataStrFromRcvData(data);

       // 获取回调公共事件包名称
       const char *bundle = OH_CommonEvent_GetBundleNameFromRcvData(data);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST",
                    "event: %{public}s, code: %{public}d, data: %{public}s, bundle: %{public}s", event, code, retData,
                    bundle);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L44-L63" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>


   通过[CommonEvent\_Parameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#变量)传入key来获取附加信息内容。

   ```
   void GetParameters(const CommonEvent_RcvData *data)
   {
       // 获取回调公共事件附件信息
       bool exists = false;
       const CommonEvent_Parameters *parameters = OH_CommonEvent_GetParametersFromRcvData(data);

       // 检查公共事件附加信息中是否包含某个键值对信息
       exists = OH_CommonEvent_HasKeyInParameters(parameters, "intKey");
       // 获取公共事件附加信息中int数据信息
       int intValue = OH_CommonEvent_GetIntFromParameters(parameters, "intKey", 10);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "exists = %{public}d, intValue = %{public}d", exists, intValue);

       // 补充说明：除int类型外，还支持获取以下多种类型的公共事件附加信息，调用对应鸿蒙API即可：
       // - 基础数据类型：bool（OH_CommonEvent_GetBoolFromParameters）、long（OH_CommonEvent_GetLongFromParameters）、
       // double（OH_CommonEvent_GetDoubleFromParameters）、char（OH_CommonEvent_GetCharFromParameters）
       // -
       // 数组数据类型：int数组（OH_CommonEvent_GetIntArrayFromParameters）、long数组（OH_CommonEvent_GetLongArrayFromParameters）、
       // double数组（OH_CommonEvent_GetDoubleArrayFromParameters）、char数组（OH_CommonEvent_GetCharArrayFromParameters）、
       // bool数组（OH_CommonEvent_GetBoolArrayFromParameters）
       // 所有类型均支持通过OH_CommonEvent_HasKeyInParameters先校验键是否存在，避免获取失败
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L65-L87" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>


   通过[OH\_CommonEvent\_CreateSubscriber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscriber)创建订阅者，传入订阅者信息[CommonEvent\_SubscribeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#结构体)和步骤4公共事件回调函数OnReceive。

   ```
   // 创建订阅者
   CommonEvent_Subscriber *CreateSubscriber(CommonEvent_SubscribeInfo *info)
   {
       return OH_CommonEvent_CreateSubscriber(info, OnReceive);
   }

   // 销毁订阅者
   void DestroySubscriber(CommonEvent_Subscriber *Subscriber)
   {
       OH_CommonEvent_DestroySubscriber(Subscriber);
       Subscriber = nullptr;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L228-L241" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>

5. 订阅事件。

   通过[OH\_CommonEvent\_Subscribe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_subscribe)订阅事件。

   ```
   void Subscribe(CommonEvent_Subscriber *subscriber)
   {
       // 通过传入订阅者来订阅事件
       int32_t ret = OH_CommonEvent_Subscribe(subscriber);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_Subscribe ret <%{public}d>.", ret);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L243-L250" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>

6. （可选）当订阅的事件为有序公共事件时，可以选择进一步处理有序公共事件。

   根据订阅者设置的优先级等级，优先将公共事件发送给优先级较高的订阅者，等待其成功接收该公共事件之后再将事件发送给优先级较低的订阅者。如果有多个订阅者具有相同的优先级，则他们将随机接收到公共事件。

   ![](./img/037bfa9a.png)

   在订阅者收到公共事件之后，才能通过以下接口进一步处理有序公共事件。

   * 中止当前的有序公共事件。

     通过[OH\_CommonEvent\_AbortCommonEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_abortcommonevent)与[OH\_CommonEvent\_FinishCommonEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_finishcommonevent)配合使用，可以中止当前的有序公共事件，使该公共事件不再向下一个订阅者传递。

     ```
     void AbortCommonEvent(CommonEvent_Subscriber *subscriber)
     {
         // 判断是否为有序公共事件
         if (!OH_CommonEvent_IsOrderedCommonEvent(subscriber)) {
             OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "Not ordered common event.");
             return;
         }
         // 中止有序事件
         if (OH_CommonEvent_AbortCommonEvent(subscriber)) {
             if (OH_CommonEvent_FinishCommonEvent(subscriber)) {
                 // 获取当前有序公共事件是否处于中止状态
                 OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "Abort common event success, Get abort <%{public}d>.",
                              OH_CommonEvent_GetAbortCommonEvent(subscriber));
             }
         } else {
             OH_LOG_Print(LOG_APP, LOG_ERROR, 1, "CES_TEST", "Abort common event failed.");
         }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L252-L271" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>

   * 取消当前有序公共事件的中止状态。

     通过[OH\_CommonEvent\_ClearAbortCommonEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_clearabortcommonevent)与[OH\_CommonEvent\_FinishCommonEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_finishcommonevent)配合使用，可以取消当前有序公共事件的中止状态，使该公共事件继续向下一个订阅者传递。

     ```
     void ClearAbortCommonEvent(CommonEvent_Subscriber *subscriber)
     {
         // 判断是否为有序公共事件
         if (!OH_CommonEvent_IsOrderedCommonEvent(subscriber)) {
             OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "Not ordered common event.");
             return;
         }
         // 中止有序事件
         if (!OH_CommonEvent_AbortCommonEvent(subscriber)) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, 1, "CES_TEST", "Abort common event failed.");
             return;
         }
         // 取消中止有序事件
         if (OH_CommonEvent_ClearAbortCommonEvent(subscriber)) {
             if (OH_CommonEvent_FinishCommonEvent(subscriber)) {
                 // 获取当前有序公共事件是否处于中止状态
                 OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "Clear abort common event success, Get abort <%{public}d>.",
                              OH_CommonEvent_GetAbortCommonEvent(subscriber));
             }
         } else {
             OH_LOG_Print(LOG_APP, LOG_ERROR, 1, "CES_TEST", "Clear abort common event failed.");
         }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L273-L297" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>

   * 修改有序公共事件的内容。

     通过[OH\_CommonEvent\_SetCodeToSubscriber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_setcodetosubscriber)与[OH\_CommonEvent\_SetDataToSubscriber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_setdatatosubscriber)设置有序公共事件的代码和数据。

     ```
     void SetToSubscriber(CommonEvent_Subscriber *subscriber, const int32_t code, const char *data)
     {
         // 设置有序公共事件的代码
         if (!OH_CommonEvent_SetCodeToSubscriber(subscriber, code)) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, 1, "CES_TEST", "OH_CommonEvent_SetCodeToSubscriber failed.");
             return;
         }
         // 设置有序公共事件的数据
         size_t dataLength = strlen(data);
         if (!OH_CommonEvent_SetDataToSubscriber(subscriber, data, dataLength)) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, 1, "CES_TEST", "OH_CommonEvent_SetDataToSubscriber failed.");
             return;
         }
     }

     void GetFromSubscriber(CommonEvent_Subscriber *subscriber)
     {
         // 获取有序公共事件的数据和代码
         const char *data = OH_CommonEvent_GetDataFromSubscriber(subscriber);
         int32_t code = OH_CommonEvent_GetCodeFromSubscriber(subscriber);
         OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "Subscriber data <%{public}s>, code <%{public}d>.", data, code);
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/NativeCommonEvent/entry/src/main/cpp/common_event_subscribe.cpp#L299-L322" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common_event_subscribe.cpp</a></div>
