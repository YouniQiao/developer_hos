---
title: "ContentSlot：混合开发"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot
last_sync: 2026-06-07
sync_hash: 678f44e0
upstream_hash: 85e7cb1c0f50
---

用于渲染并管理Native层使用C-API创建的组件。

支持[混合模式](/docs/dev/app-dev/graphics/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c#混合模式)开发。当容器为ArkTS组件，且子组件在Native侧创建时，推荐使用ContentSlot占位组件。

![](./img/c0d44309.png)

ContentSlot从API version 12开始支持。

本文档仅为开发指南。组件接口规范见[ContentSlot API参数说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-contentslot)。

## 接口

### ArkTS侧接口

| 接口名 | 描述 |
| --- | --- |
| ContentSlot(content: Content) | Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树事件回调以及管理ContentSlot的子组件。 |

```
abstract class Content {
}
```

### Native侧接口

| 接口名 | 描述 |
| --- | --- |
| [OH\_ArkUI\_NodeContent\_RegisterCallback(ArkUI\_NodeContentHandle content, ArkUI\_NodeContentCallback callback)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_registercallback) | 向管理器Content上注册事件。 |
| [OH\_ArkUI\_NodeContentEvent\_GetEventType(ArkUI\_NodeContentEvent\* event)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontentevent_geteventtype) | 获取Content上触发的事件类型。 |
| [OH\_ArkUI\_NodeContent\_AddNode(ArkUI\_NodeContentHandle content, ArkUI\_NodeHandle node)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_addnode) | 在Content上添加子组件。 |
| [OH\_ArkUI\_NodeContent\_InsertNode(ArkUI\_NodeContentHandle content, ArkUI\_NodeHandle node, int32\_t position)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_insertnode) | 在Content上插入子组件。 |
| [OH\_ArkUI\_NodeContent\_RemoveNode(ArkUI\_NodeContentHandle content, ArkUI\_NodeHandle node)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_removenode) | 在Content上移除子组件。 |
| [OH\_ArkUI\_GetNodeContentFromNapiValue(napi\_env env, napi\_value value, ArkUI\_NodeContentHandle\* content)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h#oh_arkui_getnodecontentfromnapivalue) | 获取ArkTS侧创建的NodeContent对象，映射到Native侧的ArkUI\_NodeContentHandle。 |
| [OH\_ArkUI\_NodeContentEvent\_GetNodeContentHandle(ArkUI\_NodeContentEvent\* event)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontentevent_getnodecontenthandle) | 获取触发上下树事件的Content对象。 |
| [OH\_ArkUI\_NodeContent\_SetUserData(ArkUI\_NodeContentHandle content, void\* userData)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_setuserdata) | 在Content上设置用户自定义属性。 |
| [OH\_ArkUI\_NodeContent\_GetUserData(ArkUI\_NodeContentHandle content)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodecontent_getuserdata) | 在Content上获取用户自定义属性。 |
| typedef enum \{  NODE\_CONTENT\_EVENT\_ON\_ATTACH\_TO\_WINDOW = 0,  NODE\_CONTENT\_EVENT\_ON\_DETACH\_FROM\_WINDOW = 1,  \} [ArkUI\_NodeContentEventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodecontenteventtype) | Content上会触发的上树和下树事件类型。 |

## 开发实现

### ArkTS侧代码实现

```
import nativeNode from 'libentry.so'; // 开发者自己实现的so
import { NodeContent } from '@kit.ArkUI';

@Entry
@Component
struct Parent {
  private nodeContent: Content = new NodeContent();
  // ...

  aboutToAppear() {
    // 通过C-API创建节点，并添加到管理器nodeContent上
    nativeNode.createNativeNode(this.nodeContent);
    // ...
  }

  build() {
    Column() {
      // 显示nodeContent管理器里存放的Native侧的组件
      ContentSlot(this.nodeContent);
      // ...
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/ets/pages/Index.ets#L17-L58" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### Native侧代码实现

Napi的基础开发知识请查看以下文档：[开发导读](/docs/dev/ndk-dev/ndk-development-overview)。

本章节描述实现ContentSlot相关逻辑代码。创建C侧组件的具体步骤，请参阅[使用NDK接口构建UI](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-build-ui-overview)。

```
#include "napi/native_api.h"
#include "arkui/native_type.h"
#include "arkui/native_node.h"
#include "arkui/native_node_napi.h"
#include "arkui/native_interface.h"
#include "hilog/log.h"
// ···
ArkUI_NodeContentHandle nodeContentHandle_ = nullptr;
ArkUI_NativeNodeAPI_1 *nodeAPI;
const unsigned int LOG_PRINT_DOMAIN = 0xFF00;

// 在Native侧创建一个宽高为480vp*480vp、背景色为0xFFFF0000（红色）的Column组件。对于更详细的节点树创建方法，请参考ArkUI API文档的C API章节。
ArkUI_NodeHandle NodeManager::CreateNodeHandle()
{
    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);
    ArkUI_NumberValue value[] = {480};
    ArkUI_AttributeItem item{value, 1};
    nodeAPI->setAttribute(column, NODE_WIDTH, &item);
    nodeAPI->setAttribute(column, NODE_HEIGHT, &item);
    value[0].u32 = 0xFFFF0000;
    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);
    return column;
}

// ArkTS侧createNativeNode方法在Native侧的具体实现
napi_value NodeManager::CreateNativeNode(napi_env env, napi_callback_info info)
{
    // napi相关处理空指针&数据越界等问题
    if ((env == nullptr) || (info == nullptr)) {
        return nullptr;
    }

    size_t argc = 1;
    napi_value args[1] = { nullptr };
    if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "Manager", "CreateNativeNode napi_get_cb_info failed");
    }

    if (argc != 1) {
        return nullptr;
    }

    nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(
        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, "ArkUI_NativeNodeAPI_1"));

    // 将nodeContentHandle_指向ArkTS侧传入的nodeContent
    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &nodeContentHandle_);

    if (nodeAPI != nullptr) {
        if (nodeAPI->createNode != nullptr && nodeAPI->addChild != nullptr) {
            ArkUI_NodeHandle component;
            // 创建C侧组件
            component = CreateNodeHandle();
            // 将组件添加到nodeContent管理器中
            OH_ArkUI_NodeContent_AddNode(nodeContentHandle_, component);
            // ···
        }
    }
    return nullptr;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L16-L92" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>


### Native侧主要接口使用说明

* 注册上下树事件，并通过事件获取对应的Content对象。

  ```
  auto nodeContentEvent = [](ArkUI_NodeContentEvent *event) {
      ArkUI_NodeContentHandle content = OH_ArkUI_NodeContentEvent_GetNodeContentHandle(event);
      // 针对不同content需要额外做的逻辑
      if (OH_ArkUI_NodeContentEvent_GetEventType(event) == NODE_CONTENT_EVENT_ON_ATTACH_TO_WINDOW) {
          // ContentSlot上树时需要触发的逻辑
          // ···
      } else if (OH_ArkUI_NodeContentEvent_GetEventType(event) == NODE_CONTENT_EVENT_ON_DETACH_FROM_WINDOW) {
          // ContentSlot下树时需要触发的逻辑
          // ···
      };
  };
  // 将该事件注册到nodeContent上
  OH_ArkUI_NodeContent_RegisterCallback(nodeContentHandle_, nodeContentEvent);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L119-L141" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 添加子组件。

  ```
  ArkUI_NodeHandle component;
  // 创建C侧组件
  component = CreateNodeHandle();
  // 将组件添加到nodeContent管理器中
  OH_ArkUI_NodeContent_AddNode(nodeContentHandle_, component);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L69-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 插入子组件。

  ```
  size_t position = 0;
  ArkUI_NodeHandle component1 = CreateNodeHandle();
  // 将组件插入nodeContent管理器对应位置
  OH_ArkUI_NodeContent_InsertNode(nodeContentHandle_, component1, position);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L77-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 删除子组件。

  ```
  // 在nodeContent中移除对应组件
  OH_ArkUI_NodeContent_RemoveNode(nodeContentHandle_, component1);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L83-L86" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 设置自定义属性。

  ```
  // 创建需要定义的自定义数据
  void *userData = CreateUserData();
  OH_ArkUI_NodeContent_SetUserData(nodeContentHandle_, userData);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L110-L114" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 获取自定义属性。

  ```
  void *userData = OH_ArkUI_NodeContent_GetUserData(nodeContentHandle_);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/cpp/manager.cpp#L102-L104" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>


## 绑定规则说明

如果将同一个Content对象绑定到多个ContentSlot组件，最终该Content的内容仅在最后一个绑定的ContentSlot中显示，其他ContentSlot将不显示任何内容。

**原因说明：**

Content与ContentSlot节点具有一对一的绑定关系。同一Content不能同时关联多个ContentSlot节点。如果尝试将同一Content挂载到多个ContentSlot节点，仅最后一次挂载生效，之前的ContentSlot节点将失去Content的关联，导致组件内容无法显示。

若需在多个ContentSlot节点下显示相同内容，每个节点需创建单独的Content。示例如下：

```
import nativeNode from 'libentry.so'; // 开发者自己实现的so
import { NodeContent } from '@kit.ArkUI';

@Entry
@Component
struct Parent {
  // ···
  private nodeContent_1: Content = new NodeContent();
  private nodeContent_2: Content = new NodeContent();

  aboutToAppear() {
    // ···
    // 通过C-API创建节点，并添加到管理器nodeContent_1和nodeContent_2上
    nativeNode.createNativeNode(this.nodeContent_1);
    nativeNode.createNativeNode(this.nodeContent_2);
  }

  build() {
    Column() {
      // ···
      ContentSlot(this.nodeContent_1);// nodeContent_1将被挂载到下一个Contentslot节点，此处无法显示
      ContentSlot(this.nodeContent_1); // 正常显示
      ContentSlot(this.nodeContent_2); // 正常显示
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/RenderingControlContentslotNDK/entry/src/main/ets/pages/Index.ets#L16-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
