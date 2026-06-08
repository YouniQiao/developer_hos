---
title: "绑定拖拽事件"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event
last_sync: 2026-06-07
sync_hash: 930dc9e9
---
ArkUI开发框架针对拖拽事件提供了[NODE\_ON\_PRE\_DRAG](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DRAG\_START](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DROP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DRAG\_ENTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DRAG\_MOVE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DRAG\_LEAVE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)，[NODE\_ON\_DRAG\_END](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)等组件事件，当拖拽在不同的阶段时会触发对应的组件事件，完成对应的数据处理操作，实现期望的拖拽交互能力。

## 通用拖拽

ArkUI提供了使用C和C++开发拖拽功能的能力，开发者可调用C API实现拖拽功能。以下以Image组件为例，详细介绍C API实现拖拽功能的基本步骤，以及在开发过程中需要注意的事项。完整示例请参考[NativeDragDrop](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeDragDrop)。

1. 组件拖拽设置。

   通过[OH\_ArkUI\_GetModuleInterface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-h#oh_arkui_getmoduleinterface)接口初始化nodeAPI，创建节点等操作均需通过nodeAPI完成。

   ```
   ArkUI_NativeNodeAPI_1 *nativeNodeAPI = nullptr;
   OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nativeNodeAPI);
   nodeAPI = nativeNodeAPI;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/manager.cpp#L121-L125" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：manager.cpp</a></div>


   创建Image节点，通过[OH\_ArkUI\_SetNodeDraggable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_setnodedraggable)设置节点可拖拽，并设置其他相关属性。

   ```
   dragImage2 = nodeAPI->createNode(ARKUI_NODE_IMAGE);
   SetId(dragImage2, "dragImage");
   SetCommonAttribute(dragImage2, 140.0f, 140.0f, 0xFFFFFFFF, 5.0f);
   // 图片src/main/resources/base/media/seagull.png需要替换为开发者所需的资源文件
   SetImageSrc(dragImage2, "/resources/base/media/seagull.png");
   OH_ArkUI_SetNodeDraggable(dragImage2, true);
   nodeAPI->registerNodeEvent(dragImage2, NODE_ON_DRAG_START, 1, nullptr);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/thirdmodule.h#L179-L187" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：thirdmodule.h</a></div>


   ```
   #define DEFAULT_WIDTH 200.0
   // 设置节点宽度
   void SetWidth(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue widthValue[] = {width};
       ArkUI_AttributeItem widthItem = {widthValue, 1};
       nodeAPI->setAttribute(node, NODE_WIDTH, &widthItem);
   }

   #define DEFAULT_HEIGHT 200.0
   // 设置节点高度
   void SetHeight(ArkUI_NodeHandle &node, float height = DEFAULT_HEIGHT)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue heightValue[] = {height};
       ArkUI_AttributeItem heightItem = {heightValue, 1};
       nodeAPI->setAttribute(node, NODE_HEIGHT, &heightItem);
   }

   #define DEFAULT_BG_COLOR 0xFFFFFFFF
   // 设置节点背景颜色
   void SetBackgroundColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BG_COLOR)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue colorValue[] = {{.u32 = color}};
       ArkUI_AttributeItem colorItem = {colorValue, 1};
       nodeAPI->setAttribute(node, NODE_BACKGROUND_COLOR, &colorItem);
   }

   #define DEFAULT_MARGIN 5.0
   // 设置节点外边距
   void SetMargin(ArkUI_NodeHandle &node, float margin = DEFAULT_MARGIN)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue marginValue[] = {margin};
       ArkUI_AttributeItem marginItem = {marginValue, 1};
       nodeAPI->setAttribute(node, NODE_MARGIN, &marginItem);
   }

   // 设置Button节点标签
   void SetButtonLabel(ArkUI_NodeHandle &node, const char *label)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_AttributeItem NODE_Button_SRC_Item = {.string = label};
       nodeAPI->setAttribute(node, NODE_BUTTON_LABEL, &NODE_Button_SRC_Item);
   }

   // 设置节点标识符
   void SetId(ArkUI_NodeHandle &node, const char *id)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_AttributeItem idItem = {.string = id};
       nodeAPI->setAttribute(node, NODE_ID, &idItem);
   }

   #define DEFAULT_BORDER_WIDTH 0.0
   // 设置节点边框宽度
   void SetBorderWidth(ArkUI_NodeHandle &node, float width = DEFAULT_BORDER_WIDTH)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue borderWidthValue[] = {width};
       ArkUI_AttributeItem borderWidthItem = {borderWidthValue, 1};
       nodeAPI->setAttribute(node, NODE_BORDER_WIDTH, &borderWidthItem);
   }

   #define DEFAULT_BORDER_COLOR 0xFF000000
   // 设置节点边框颜色
   void SetBorderColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BORDER_COLOR)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue borderColorValue[] = {{.u32 = color}};
       ArkUI_AttributeItem borderColorItem = {borderColorValue, 1};
       nodeAPI->setAttribute(node, NODE_BORDER_COLOR, &borderColorItem);
   }

   // 设置节点常用属性（宽高、背景色、外边距、边框样式）
   void SetCommonAttribute(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH, float height = DEFAULT_HEIGHT,
                           unsigned int color = DEFAULT_BG_COLOR, float margin = DEFAULT_MARGIN)
   {
       SetWidth(node, width);
       SetHeight(node, height);
       SetBackgroundColor(node, color);
       SetMargin(node, margin);
       SetBorderWidth(node, DEFAULT_BORDER_WIDTH);
       SetBorderColor(node);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/common.h#L90-L194" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common.h</a></div>


   ```
   void SetImageSrc(ArkUI_NodeHandle &node, const char *src)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_AttributeItem imageSrcItem = {.string = src};
       nodeAPI->setAttribute(node, NODE_IMAGE_SRC, &imageSrcItem);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/common.h#L232-L241" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common.h</a></div>

2. 自定义拖拽预览和背板图。

   创建[pixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap)，设置pixelMap的宽高等各项属性。设置Image节点的[ArkUI\_DragPreviewOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-dragpreviewoption)，可用于设置跟手图的圆角、角标等。

   ```
   // 创建pixelMap
   uint8_t data[960000];
   size_t dataSize = 960000;
   for (int i = 0; i < dataSize; i++) {
       data[i] = i + 1;
   }
   // 创建参数结构体实例，并设置参数
   OH_Pixelmap_InitializationOptions *createOpts;
   OH_PixelmapInitializationOptions_Create(&createOpts);
   OH_PixelmapInitializationOptions_SetWidth(createOpts, 200U);
   OH_PixelmapInitializationOptions_SetHeight(createOpts, 200U);
   OH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_BGRA_8888);
   OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNKNOWN);
   // 设置自定义跟手图
   OH_PixelmapNative *pixelmap = nullptr;
   OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &pixelmap);
   OH_PixelmapNative_Opacity(pixelmap, 0.1f);
   OH_ArkUI_SetNodeDragPreview(node, pixelmap);
   // 设置跟手图选项
   auto *previewOptionsText = OH_ArkUI_CreateDragPreviewOption();
   OH_ArkUI_DragPreviewOption_SetScaleMode(previewOptionsText, ARKUI_DRAG_PREVIEW_SCALE_DISABLED);
   OH_ArkUI_DragPreviewOption_SetNumberBadgeEnabled(previewOptionsText, true);
   OH_ArkUI_DragPreviewOption_SetBadgeNumber(previewOptionsText, 10U);
   OH_ArkUI_DragPreviewOption_SetDefaultShadowEnabled(previewOptionsText, true);
   OH_ArkUI_DragPreviewOption_SetDefaultRadiusEnabled(previewOptionsText, true);
   int returnValue = OH_ArkUI_DragPreviewOption_SetDefaultAnimationBeforeLiftingEnabled(previewOptionsText, true);
   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "Manager",
       "dragTest DragPreviewOption_SetDefaultAnimationBeforeLiftingEnabled returnValue = %{public}d",
       returnValue);
   OH_ArkUI_SetNodeDragPreviewOption(node, previewOptionsText);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/firstmodule.h#L325-L356" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：firstmodule.h</a></div>

3. 设置相关事件。

   C API的事件通过统一的回调来接收，当收到事件时通过[eventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)进行区分。

   ```
   nodeAPI->addNodeEventReceiver(dragNode, [](ArkUI_NodeEvent *event) {
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "RegisterNodeEventFirstReceiver called");
       auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);
       auto preDragStatus = OH_ArkUI_NodeEvent_GetPreDragStatus(event);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "eventType = %{public}d, preDragStatus = %{public}d", eventType, preDragStatus);
       auto *dragEvent = OH_ArkUI_NodeEvent_GetDragEvent(event);
       switch (eventType) {
           case NODE_ON_PRE_DRAG:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_PRE_DRAG Event Receive");
               break;
           case NODE_ON_CLICK:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_CLICK Event Receive");
               break;
           case NODE_ON_DROP:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DROP Event Receive");
               break;
           case NODE_ON_DRAG_ENTER:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_ENTER Event Receive");
               break;
           case NODE_ON_DRAG_MOVE:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_MOVE Event Receive");
               break;
           case NODE_ON_DRAG_LEAVE:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_LEAVE Event Receive");
               break;
           case NODE_ON_DRAG_START: {
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_START Event Receive");
               // ...
               break;
           }
           case NODE_ON_DRAG_END: {
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_END Event Receive");
               // ...
               break;
           }
           default:
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "UNKNOWN Event Receive");
               break;
       }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/firstmodule.h#L153-L200" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：firstmodule.h</a></div>

4. 处理NODE\_ON\_DRAG\_START事件。

   在NODE\_ON\_DRAG\_START事件中，应用可以执行起拖阶段所需的操作，通常涉及处理起拖过程的数据。例如，创建[OH\_UdmfRecord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-oh-udmfrecord)，将用于拖拽图片所需的数据imageValue以[OH\_UdsFileUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-oh-udsfileuri)类型添加到OH\_UdmfRecord中，接着将OH\_UdmfRecord设置到[OH\_UdmfData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-oh-udmfdata)中，最后将OH\_UdmfData设置到[DragEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-dragevent)中。

   ```
   void SetImageData(ArkUI_DragEvent* dragEvent)
   {
       int returnValue;
       OH_UdmfRecord *record = OH_UdmfRecord_Create();
       OH_UdsFileUri *imageValue = OH_UdsFileUri_Create();
       // 图片src/main/resources/base/media/seagull.png需要替换为开发者所需的资源文件
       returnValue = OH_UdsFileUri_SetFileUri(imageValue, "/resources/base/media/seagull.png");
       returnValue = OH_UdmfRecord_AddFileUri(record, imageValue);
       OH_UdmfData *data = OH_UdmfData_Create();
       returnValue = OH_UdmfData_AddRecord(data, record);
       returnValue = OH_ArkUI_DragEvent_SetData(dragEvent, data);
   }
   // ...
               case NODE_ON_DRAG_START: {
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DRAG_START EventReceiver");
                   SetImageData(dragEvent);
                   break;
               }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/thirdmodule.h#L32-L102" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：thirdmodule.h</a></div>

5. 处理NODE\_ON\_DROP事件。

   在NODE\_ON\_DROP事件中，应用可以执行与落入阶段相关的操作，通常需要获取拖拽过程中传递的数据。例如，引用[udmf\_meta.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-meta-h)头文件，获取[OH\_UdmfData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-oh-udmfdata)，判断是否存在所需的数据类型，从[OH\_UdmfRecord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-oh-udmfrecord)中提取相应的数据，最后销毁指针。

   ```
   void GetDragData(ArkUI_DragEvent* dragEvent)
   {
       // 获取UDMF data
       int returnValue;
       // 创建OH_UdmfData对象
       OH_UdmfData *data = OH_UdmfData_Create();
       returnValue = OH_ArkUI_DragEvent_GetUdmfData(dragEvent, data);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragEvent_GetUdmfData returnValue = %{public}d", returnValue);
       // 判断OH_UdmfData是否有对应的类型
       bool resultUdmf = OH_UdmfData_HasType(data, UDMF_META_GENERAL_FILE);
       if (resultUdmf) {
           // 获取OH_UdmfData的记录
           unsigned int recordsCount = 0;
           OH_UdmfRecord **records = OH_UdmfData_GetRecords(data, &recordsCount);
           // 获取records中的元素
           int returnStatus;
           for (int i = 0; i < recordsCount; i++) {
               // 从OH_UdmfRecord中获取文件类型数据
               OH_UdsFileUri *imageValue = OH_UdsFileUri_Create();
               returnStatus = OH_UdmfRecord_GetFileUri(records[i], imageValue);
               const char *fileUri = OH_UdsFileUri_GetFileUri(imageValue);
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                   "dragTest OH_UdmfRecord_GetPlainText "
                   "returnStatus= %{public}d "
                   "fileUri= %{public}s",
                   returnStatus, fileUri);
               // 使用结束后销毁指针
               OH_UdsFileUri_Destroy(imageValue);
           }
           if (recordsCount != 0) {
               OH_ArkUI_DragEvent_SetDragResult(dragEvent, ARKUI_DRAG_RESULT_SUCCESSFUL);
               ArkUI_DropOperation option;
               OH_ArkUI_DragEvent_GetDropOperation(dragEvent, &option);
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                   "OH_ArkUI_DragEvent_GetDropOperation returnValue = %{public}d", option);
           }
       } else {
           OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
               "OH_UdmfData_HasType not contain UDMF_META_GENERAL_FILE");
       }
       int32_t count;
       OH_ArkUI_DragEvent_GetDataTypeCount(dragEvent, &count);
       if (count <= 0 || count >= 128U) {
           return;
       }
       char **eventTypeArray = new char *[count];
       for (int i = 0; i < count; i++) {
           eventTypeArray[i] = new char[128U];
       }
       OH_ArkUI_DragEvent_GetDataTypes(dragEvent, eventTypeArray, count, 128U);
       for (int i = 0; i < count; i++) {
           OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
               "OH_ArkUI_DragEvent_GetDataTypes returnValue = %{public}s", eventTypeArray[i]);
       }
   }
   // ...
               case NODE_ON_DROP: {
                   OH_ArkUI_DragEvent_SetSuggestedDropOperation(dragEvent, ARKUI_DROP_OPERATION_COPY);
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DROP EventReceiver");
                   GetDragData(dragEvent);
                   break;
               }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/firstmodule.h#L88-L225" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：firstmodule.h</a></div>


## DragAction主动发起拖拽

除了通用拖拽以外，ArkUI还提供了使用C API实现主动发起拖拽的能力。以下以文本拖拽为例，详细介绍C-API实现主动发起拖拽的基本步骤，以及在开发过程中需要注意的事项。完整示例请参考[NativeDragDrop](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeDragDrop)。

1. 节点注册事件。

   创建Button节点，设置按钮相关属性，同时需要注册[NODE\_ON\_TOUCH\_INTERCEPT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件。

   ```
   // buttonTouch作为targetId，用于区分不同target的事件。
   enum {
       BUTTON_TOUCH = 1
   };

   dragButton = nodeAPI->createNode(ARKUI_NODE_BUTTON);
   SetId(dragButton, "dragBt3");
   SetCommonAttribute(dragButton, 80.0f, 50.0f, 0xFFFF0000, 20.0f);
   SetButtonLabel(dragButton, "拖起");
   nodeAPI->registerNodeEvent(dragButton, NODE_ON_TOUCH_INTERCEPT, BUTTON_TOUCH, nullptr);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/forthmodule.h#L144-L155" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：forthmodule.h</a></div>


   ```
   #define DEFAULT_WIDTH 200.0
   // 设置节点宽度
   void SetWidth(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue widthValue[] = {width};
       ArkUI_AttributeItem widthItem = {widthValue, 1};
       nodeAPI->setAttribute(node, NODE_WIDTH, &widthItem);
   }

   #define DEFAULT_HEIGHT 200.0
   // 设置节点高度
   void SetHeight(ArkUI_NodeHandle &node, float height = DEFAULT_HEIGHT)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue heightValue[] = {height};
       ArkUI_AttributeItem heightItem = {heightValue, 1};
       nodeAPI->setAttribute(node, NODE_HEIGHT, &heightItem);
   }

   #define DEFAULT_BG_COLOR 0xFFFFFFFF
   // 设置节点背景颜色
   void SetBackgroundColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BG_COLOR)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue colorValue[] = {{.u32 = color}};
       ArkUI_AttributeItem colorItem = {colorValue, 1};
       nodeAPI->setAttribute(node, NODE_BACKGROUND_COLOR, &colorItem);
   }

   #define DEFAULT_MARGIN 5.0
   // 设置节点外边距
   void SetMargin(ArkUI_NodeHandle &node, float margin = DEFAULT_MARGIN)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue marginValue[] = {margin};
       ArkUI_AttributeItem marginItem = {marginValue, 1};
       nodeAPI->setAttribute(node, NODE_MARGIN, &marginItem);
   }

   // 设置Button节点标签
   void SetButtonLabel(ArkUI_NodeHandle &node, const char *label)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_AttributeItem NODE_Button_SRC_Item = {.string = label};
       nodeAPI->setAttribute(node, NODE_BUTTON_LABEL, &NODE_Button_SRC_Item);
   }

   // 设置节点标识符
   void SetId(ArkUI_NodeHandle &node, const char *id)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_AttributeItem idItem = {.string = id};
       nodeAPI->setAttribute(node, NODE_ID, &idItem);
   }

   #define DEFAULT_BORDER_WIDTH 0.0
   // 设置节点边框宽度
   void SetBorderWidth(ArkUI_NodeHandle &node, float width = DEFAULT_BORDER_WIDTH)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue borderWidthValue[] = {width};
       ArkUI_AttributeItem borderWidthItem = {borderWidthValue, 1};
       nodeAPI->setAttribute(node, NODE_BORDER_WIDTH, &borderWidthItem);
   }

   #define DEFAULT_BORDER_COLOR 0xFF000000
   // 设置节点边框颜色
   void SetBorderColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BORDER_COLOR)
   {
       if (!nodeAPI) {
           return;
       }
       ArkUI_NumberValue borderColorValue[] = {{.u32 = color}};
       ArkUI_AttributeItem borderColorItem = {borderColorValue, 1};
       nodeAPI->setAttribute(node, NODE_BORDER_COLOR, &borderColorItem);
   }

   // 设置节点常用属性（宽高、背景色、外边距、边框样式）
   void SetCommonAttribute(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH, float height = DEFAULT_HEIGHT,
                           unsigned int color = DEFAULT_BG_COLOR, float margin = DEFAULT_MARGIN)
   {
       SetWidth(node, width);
       SetHeight(node, height);
       SetBackgroundColor(node, color);
       SetMargin(node, margin);
       SetBorderWidth(node, DEFAULT_BORDER_WIDTH);
       SetBorderColor(node);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/common.h#L90-L194" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common.h</a></div>

2. 接收NODE\_ON\_TOUCH\_INTERCEPT事件。

   DragAction主动发起拖拽需通过事件触发，在NODE\_ON\_TOUCH\_INTERCEPT事件中执行发起拖拽所需的操作，通过[targetId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeevent_gettargetid)区分不同按钮触发的事件。

   ```
   nodeAPI->addNodeEventReceiver(dragButton, [](ArkUI_NodeEvent *event) {
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "RegisterNodeEventForthReceiver called");
       auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);
       auto preDragStatus = OH_ArkUI_NodeEvent_GetPreDragStatus(event);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "eventType = %{public}d, preDragStatus = %{public}d", eventType, preDragStatus);

       auto *dragEvent = OH_ArkUI_NodeEvent_GetDragEvent(event);
       switch (eventType) {
           case NODE_ON_TOUCH_INTERCEPT: {
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_TOUCH_INTERCEPT EventReceiver");
               // ...
               break;
           }
           default: {
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "UNKNOWN EventReceiver");
               break;
           }
       }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/forthmodule.h#L49-L92" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：forthmodule.h</a></div>

3. 起拖阶段设置。

   在NODE\_ON\_TOUCH\_INTERCEPT事件中，需要对DragAction进行相关设置。为了主动发起拖拽，需要创建[pixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap)，设置[ArkUI\_DragPreviewOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-dragpreviewoption)和跟手点，并将拖拽过程中的文本数据设置到DragAction中。

   ```
               case NODE_ON_TOUCH_INTERCEPT: {
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_TOUCH_INTERCEPT EventReceiver");
                   // 创建DragAction
                   action = OH_ArkUI_CreateDragActionWithNode(dragButton);
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                       "OH_ArkUI_CreateDragActionWithNode returnValue = %{public}p", action);
                   // 设置pixelMap
                   std::vector<OH_PixelmapNative *> pixelVector;
                   SetPixelMap(pixelVector);
                   // 设置DragPreviewOption
                   SetDragPreviewOption();
                   // 设置pointerId、touchPoint
                   PrintDragActionInfos();
                   // 设置unifiedData
                   SetDragActionData();
                   // startDrag
                   int returnValue = OH_ArkUI_StartDrag(action);
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                       "OH_ArkUI_StartDrag returnValue = %{public}d",
                       returnValue);
                   OH_ArkUI_DragAction_Dispose(action);
                   break;
               }
               // ...
   void SetDragActionData()
   {
       // 创建OH_UdmfRecord对象
       OH_UdmfRecord *record = OH_UdmfRecord_Create();
       // 向OH_UdmfRecord中添加纯文本类型数据
       OH_UdsPlainText *plainText = OH_UdsPlainText_Create();
       int returnStatus;
       OH_UdsPlainText_SetAbstract(plainText, "this is plainText Abstract example");
       OH_UdsPlainText_SetContent(plainText, "this is plainText Content example");
       returnStatus = OH_UdmfRecord_AddPlainText(record, plainText);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "dragTest OH_UdmfRecord_AddPlainText returnStatus = %{public}d", returnStatus);
       // 创建OH_UdmfData对象
       OH_UdmfData *data = OH_UdmfData_Create();
       // 向OH_UdmfData中添加OH_UdmfRecord
       returnStatus = OH_UdmfData_AddRecord(data, record);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "dragTest OH_UdmfData_AddRecord returnStatus = %{public}d", returnStatus);
       int returnValue = OH_ArkUI_DragAction_SetData(action, data);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetData returnValue = %{public}d", returnValue);
       // 注册拖拽状态监听回调
       OH_ArkUI_DragAction_RegisterStatusListener(action, data, &DragStatusListener);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/forthmodule.h#L59-L196" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：forthmodule.h</a></div>


   ```
   void SetPixelMap(std::vector<OH_PixelmapNative *> &pixelVector)
   {
       uint8_t data[960000];
       size_t dataSize = 960000;
       for (int i = 0; i < dataSize; i++) {
           data[i] = i + 1;
       }
       // 创建参数结构体实例，并设置参数
       OH_Pixelmap_InitializationOptions *createOpts;
       OH_PixelmapInitializationOptions_Create(&createOpts);
       OH_PixelmapInitializationOptions_SetWidth(createOpts, 200U);
       OH_PixelmapInitializationOptions_SetHeight(createOpts, 300U);
       OH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_BGRA_8888);
       OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNKNOWN);
       // 创建Pixelmap实例
       OH_PixelmapNative *pixelmap = nullptr;
       OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &pixelmap);
       OH_PixelmapNative_Flip(pixelmap, true, true);
       pixelVector.push_back(pixelmap);
       int returnValue = OH_ArkUI_DragAction_SetPixelMaps(action, pixelVector.data(), pixelVector.size());
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetPixelMaps returnValue = %{public}d", returnValue);
   }

   void SetDragPreviewOption()
   {
       auto *previewOptions = OH_ArkUI_CreateDragPreviewOption();
       OH_ArkUI_DragPreviewOption_SetScaleMode(previewOptions,
           ArkUI_DragPreviewScaleMode::ARKUI_DRAG_PREVIEW_SCALE_DISABLED);
       OH_ArkUI_DragPreviewOption_SetDefaultShadowEnabled(previewOptions, true);
       OH_ArkUI_DragPreviewOption_SetDefaultRadiusEnabled(previewOptions, true);
       int returnValue = OH_ArkUI_DragAction_SetDragPreviewOption(action, previewOptions);
       OH_ArkUI_DragPreviewOption_Dispose(previewOptions);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetDragPreviewOption returnValue = %{public}d", returnValue);
   }

   void PrintDragActionInfos()
   {
       // 设置pointerId
       int returnValue = OH_ArkUI_DragAction_SetPointerId(action, 0);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetPointerId returnValue = %{public}d", returnValue);
       // 设置touchPoint
       returnValue = OH_ArkUI_DragAction_SetTouchPointX(action, 200.0f);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetTouchPointX returnValue = %{public}d", returnValue);
       returnValue = OH_ArkUI_DragAction_SetTouchPointY(action, 200.0f);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragAction_SetTouchPointY returnValue = %{public}d", returnValue);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/common.h#L290-L342" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：common.h</a></div>

4. 处理NODE\_ON\_DROP事件。

   在NODE\_ON\_DROP事件中，应用可以执行与落入阶段相关的操作。通常情况下，需要从DragEvent中获取拖拽过程中传递的数据，DragAction中的拖拽数据也需要通过DragEvent获取。

   ```
               case NODE_ON_DROP: {
                   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest", "NODE_ON_DROP EventReceiver");
                   GetUdmfDataText(dragEvent);
                   OH_ArkUI_DragAction_UnregisterStatusListener(action);
                   break;
               }
               // ...
   void GetUdmfDataText(ArkUI_DragEvent* dragEvent)
   {
       // 获取UDMF data
       int returnValue;
       // 创建OH_UdmfData对象
       OH_UdmfData *data = OH_UdmfData_Create();
       returnValue = OH_ArkUI_DragEvent_GetUdmfData(dragEvent, data);
       OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
           "OH_ArkUI_DragEvent_GetUdmfData returnValue = %{public}d", returnValue);
       // 判断OH_UdmfData是否有对应的类型
       bool resultUdmf = OH_UdmfData_HasType(data, UDMF_META_PLAIN_TEXT);
       if (resultUdmf) {
           // 获取OH_UdmfData的记录
           unsigned int recordsCount = 0;
           OH_UdmfRecord **records = OH_UdmfData_GetRecords(data, &recordsCount);
           // 获取records中的元素
           int returnStatus;
           for (int i = 0; i < recordsCount; i++) {
               // 从OH_UdmfRecord中获取纯文本类型数据
               OH_UdsPlainText *plainTextValue = OH_UdsPlainText_Create();
               returnStatus = OH_UdmfRecord_GetPlainText(records[i], plainTextValue);
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                   "dragTest OH_UdmfRecord_GetPlainText "
                   "returnStatus= %{public}d",
                   returnStatus);
               auto getAbstract = OH_UdsPlainText_GetAbstract(plainTextValue);
               auto getContent = OH_UdsPlainText_GetContent(plainTextValue);
               OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
                   "OH_UdsPlainText_GetAbstract = "
                   "%{public}s, OH_UdsPlainText_GetContent = "
                   "%{public}s",
                   getAbstract, getContent);
               // 使用结束后销毁指针
               OH_UdsPlainText_Destroy(plainTextValue);
           }
       } else {
           OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, "dragTest",
               "OH_UdmfData_HasType not contain UDMF_META_PLAIN_TEXT");
       }
       OH_UdmfData_Destroy(data);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NativeDragDrop/entry/src/main/cpp/forthmodule.h#L110-L240" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：forthmodule.h</a></div>
