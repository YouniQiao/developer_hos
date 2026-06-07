---
title: "添加输入框文本事件监听"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event
format: md
---


输入框包含多种交互行为，开发者可注册事件监听并获取状态。以下以多行文本输入框为例进行说明，单行文本输入框添加文本事件监听的步骤与此类似。

要实现实时搜索功能，可注册[NODE\_TEXT\_AREA\_ON\_CHANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件，输入框文本发生变化时会收到通知，并能获取当前文本内容。

要实现文字过滤功能，可注册[NODE\_TEXT\_AREA\_ON\_WILL\_INSERT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件，在文字即将插入前会收到通知，通过返回值控制文字是否插入。

要实现用户编辑文字前后页面布局的不同，可注册[NODE\_TEXT\_AREA\_ON\_EDIT\_CHANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件，输入框编辑状态切换时会收到通知。

以下示例基于[接入ArkTS页面章节](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-access-the-arkts-page)，说明如何监听输入框的事件及数据解析。

* 注册事件

  事件注册有统一接口，详情请参见[registerNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)。输入框支持的事件类型，请参见NativeNode组件支持的事件类型定义[ArkUI\_NodeEventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，搜索前缀NODE\_TEXT\_AREA\_。

  ```
  ArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);
  ArkUI_NumberValue textWidth[] = {{.f32 = 300}};
  ArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};
  nodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);
  // ···
  ArkUI_NodeHandle selectionText = nodeApi->createNode(ARKUI_NODE_TEXT);
  ArkUI_NumberValue selectionTextWidth[] = {{.f32 = 300}};
  ArkUI_AttributeItem selectionTextWidthItem = {.value = selectionTextWidth, .size = 1};
  nodeApi->setAttribute(selectionText, NODE_WIDTH, &selectionTextWidthItem);
  // ···
  const ArkUI_AttributeItem *attributeItem = nodeApi->getAttribute(textArea, NODE_UNIQUE_ID);
  auto id = attributeItem->value[0].i32;
  nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_CHANGE, id, text);
  nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_PASTE, id, text);
  nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE, id, selectionText);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/TextAreaEventNDK/entry/src/main/cpp/manager.cpp#L102-L136" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 注册事件回调

  事件回调注册有统一接口，详情请参见[registerNodeEventReceiver](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeeventreceiver)。

  ```
  nodeApi->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {
      ArkUI_NodeEventType eventType = OH_ArkUI_NodeEvent_GetEventType(event);
      ArkUI_AttributeItem content;
      if (eventType == NODE_TEXT_AREA_ON_CHANGE || eventType == NODE_TEXT_AREA_ON_PASTE) {
          ArkUI_StringAsyncEvent *stringEvent = OH_ArkUI_NodeEvent_GetStringAsyncEvent(event);
          content = {.string = stringEvent->pStr };
      } else if (eventType == NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE) {
          ArkUI_NodeComponentEvent *componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);
          std::stringstream selectContent;
          selectContent << "start: " << componentEvent->data[0].i32 << " , end: " << componentEvent->data[1].i32;
          content = {.string = selectContent.str().c_str() };
      } else {
          return;
      }
      ArkUI_NodeHandle textNode = reinterpret_cast<ArkUI_NodeHandle>(OH_ArkUI_NodeEvent_GetUserData(event));
      if (textNode) {
          ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(
              OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, "ArkUI_NativeNodeAPI_1"));
          nodeApi->setAttribute(textNode, NODE_TEXT_CONTENT, &content);
      }
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/TextAreaEventNDK/entry/src/main/cpp/manager.cpp#L144-L166" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>

* 完整示例

  本篇示例仅提供核心接口的调用方法，完整的示例工程请参考[TextAreaEventNDK](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/TextAreaEventNDK)。

  ```
  #include "manager.h"
  #include <sstream>
  #include <arkui/native_interface.h>
  #include <arkui/styled_string.h>

  namespace NativeNode::Manager {
  constexpr int32_t NUM_10 = 10;
  constexpr int32_t NUM_28 = 28;
  constexpr int32_t NUM_400 = 400;
  NodeManager &NodeManager::GetInstance()
  {
      static NodeManager instance;
      return instance;
  }

  void NodeManager::SetXComponent(OH_NativeXComponent *xComponent) { xComponent_ = xComponent; }

  void NodeManager::CreateTextAreaNode()
  {
      if (!xComponent_) {
          return;
      }
      ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(
          OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, "ArkUI_NativeNodeAPI_1"));
      if (nodeApi == nullptr) {
          return;
      }
      ArkUI_NodeHandle column = nodeApi->createNode(ARKUI_NODE_COLUMN);
      ArkUI_NumberValue colWidth[] = {{.f32 = 300}};
      ArkUI_AttributeItem widthItem = {.value = colWidth, .size = 1};
      nodeApi->setAttribute(column, NODE_WIDTH, &widthItem);

      ArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);
      ArkUI_NumberValue textWidth[] = {{.f32 = 300}};
      ArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};
      nodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);
      ArkUI_NumberValue textHeight[] = {{.f32 = 100}};
      ArkUI_AttributeItem textHeightItem = {.value = textHeight, .size = 1};
      nodeApi->setAttribute(text, NODE_HEIGHT, &textHeightItem);

      nodeApi->addChild(column, text);

      ArkUI_NodeHandle selectionText = nodeApi->createNode(ARKUI_NODE_TEXT);
      ArkUI_NumberValue selectionTextWidth[] = {{.f32 = 300}};
      ArkUI_AttributeItem selectionTextWidthItem = {.value = selectionTextWidth, .size = 1};
      nodeApi->setAttribute(selectionText, NODE_WIDTH, &selectionTextWidthItem);
      nodeApi->addChild(column, selectionText);
      ArkUI_NodeHandle textArea = nodeApi->createNode(ARKUI_NODE_TEXT_AREA);
      ArkUI_NumberValue textAreaWidth[] = {{.f32 = 300}};
      ArkUI_AttributeItem textAreaWidthItem = {.value = textAreaWidth, .size = 1};
      nodeApi->setAttribute(textArea, NODE_WIDTH, &textAreaWidthItem);

      ArkUI_NumberValue borderWidth[] = {{.f32 = 1}};
      ArkUI_AttributeItem borderWidthItem = {.value = borderWidth, .size = 1};
      nodeApi->setAttribute(textArea, NODE_BORDER_WIDTH, &borderWidthItem);

      const ArkUI_AttributeItem *attributeItem = nodeApi->getAttribute(textArea, NODE_UNIQUE_ID);
      auto id = attributeItem->value[0].i32;
      nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_CHANGE, id, text);
      nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_PASTE, id, text);
      nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE, id, selectionText);
      TextAreaNodeEventReceiver(nodeApi);
      nodeApi->addChild(column, textArea);
      OH_NativeXComponent_AttachNativeRootNode(xComponent_, column);
  }

  void NodeManager::TextAreaNodeEventReceiver(ArkUI_NativeNodeAPI_1* nodeApi)
  {
      nodeApi->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {
          ArkUI_NodeEventType eventType = OH_ArkUI_NodeEvent_GetEventType(event);
          ArkUI_AttributeItem content;
          if (eventType == NODE_TEXT_AREA_ON_CHANGE || eventType == NODE_TEXT_AREA_ON_PASTE) {
              ArkUI_StringAsyncEvent *stringEvent = OH_ArkUI_NodeEvent_GetStringAsyncEvent(event);
              content = {.string = stringEvent->pStr };
          } else if (eventType == NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE) {
              ArkUI_NodeComponentEvent *componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);
              std::stringstream selectContent;
              selectContent << "start: " << componentEvent->data[0].i32 << " , end: " << componentEvent->data[1].i32;
              content = {.string = selectContent.str().c_str() };
          } else {
              return;
          }
          ArkUI_NodeHandle textNode = reinterpret_cast<ArkUI_NodeHandle>(OH_ArkUI_NodeEvent_GetUserData(event));
          if (textNode) {
              ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(
                  OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, "ArkUI_NativeNodeAPI_1"));
              nodeApi->setAttribute(textNode, NODE_TEXT_CONTENT, &content);
          }
      });
  }
  } // namespace NativeNode::Manager
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/TextAreaEventNDK/entry/src/main/cpp/manager.cpp#L15-L168" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>


![](./img/c562652e.gif)
