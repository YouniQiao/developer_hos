---
title: "grid.h"
upstream_id: "harmonyos-references/capi-grid-h"
catalog: "harmonyos-references"
content_hash: "8c6fcb2a61a8"
synced_at: "2026-07-28T16:49:22.951002"
---

# grid.h

#### 概述

定义Grid组件相关的枚举和接口。

引用文件： <arkui/node_attributes/grid.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 22

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [NDKGridSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NDKGridSample)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_GridItemSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-griditemsize) | ArkUI_GridItemSize | 定义Grid布局选项onGetIrregularSizeByIndex回调返回值结构体。 |
| [ArkUI_GridItemRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-griditemrect) | ArkUI_GridItemRect | 定义Grid布局选项onGetRectByIndex回调返回值结构体。 |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions) | ArkUI_GridLayoutOptions | 定义Grid（网格）布局选项，用于配置Grid组件中不规则GridItem的布局参数，包括不规则项索引和布局回调。不规则GridItem是指在网格布局中跨行跨列或尺寸不同的网格项。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_GridItemAlignment](#arkui_griditemalignment) | ArkUI_GridItemAlignment | [GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)对齐方式枚举。 |
| [ArkUI_GridItemStyle](#arkui_griditemstyle) | ArkUI_GridItemStyle | GridItem样式枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions* OH_ArkUI_GridLayoutOptions_Create()](#oh_arkui_gridlayoutoptions_create) | 创建Grid布局选项。使用完毕后调用OH_ArkUI_GridLayoutOptions_Dispose销毁。 |
| [void OH_ArkUI_GridLayoutOptions_Dispose(ArkUI_GridLayoutOptions* option)](#oh_arkui_gridlayoutoptions_dispose) | 销毁Grid布局选项并释放资源。 |
| [int32_t OH_ArkUI_GridLayoutOptions_SetIrregularIndexes(ArkUI_GridLayoutOptions* option, uint32_t* irregularIndexes, int32_t size)](#oh_arkui_gridlayoutoptions_setirregularindexes) | 设置Grid中不规则GridItem的索引数组。 |
| [int32_t OH_ArkUI_GridLayoutOptions_GetIrregularIndexes(ArkUI_GridLayoutOptions* option, uint32_t* irregularIndexes, int32_t* size)](#oh_arkui_gridlayoutoptions_getirregularindexes) | 获取Grid中不规则GridItem的索引数组。当不设置OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback时，irregularIndexes中GridItem的默认大小为垂直滚动Grid的一整行或水平滚动Grid的一整列。 |
| [void OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback(ArkUI_GridLayoutOptions* option, void* userData, ArkUI_GridItemSize(*callback)(int32_t itemIndex, void* userData))](#oh_arkui_gridlayoutoptions_registergetirregularsizebyindexcallback) | Grid布局选项通过GridItem索引获取指定Item占用的行列数。 |
| [void OH_ArkUI_GridLayoutOptions_RegisterGetRectByIndexCallback(ArkUI_GridLayoutOptions* option, void* userData, ArkUI_GridItemRect (*callback)(int32_t itemIndex, void* userData))](#oh_arkui_gridlayoutoptions_registergetrectbyindexcallback) | Grid布局选项通过GridItem索引获取指定Item的起始行列和占用的行列数。 |

#### 枚举类型说明

#### [h2]ArkUI_GridItemAlignment

```
enum ArkUI_GridItemAlignment
```
 描述：

[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)对齐方式枚举。

起始版本： 22

| 枚举项 | 描述 |
| --- | --- |
| GRID_ITEM_ALIGNMENT_DEFAULT = 0 | Grid的默认对齐方式。 |
| GRID_ITEM_ALIGNMENT_STRETCH = 1 | 以一行中的最高的GridItem作为其他GridItem的高度。 |

#### [h2]ArkUI_GridItemStyle

```
enum ArkUI_GridItemStyle
```
 描述：

GridItem样式枚举。

起始版本： 22

| 枚举项 | 描述 |
| --- | --- |
| GRID_ITEM_STYLE_NONE = 0 | 无样式。 |
| GRID_ITEM_STYLE_PLAIN = 1 | 显示Hover、Press态样式。 |

#### 函数说明

#### [h2]OH_ArkUI_GridLayoutOptions_Create()

```
ArkUI_GridLayoutOptions* OH_ArkUI_GridLayoutOptions_Create()
```
 描述：

创建Grid布局选项。使用完毕后调用OH_ArkUI_GridLayoutOptions_Dispose销毁。

起始版本： 22

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* | 创建的Grid布局选项。 |

#### [h2]OH_ArkUI_GridLayoutOptions_Dispose()

```
void OH_ArkUI_GridLayoutOptions_Dispose(ArkUI_GridLayoutOptions* option)
```
 描述：

销毁Grid布局选项并释放资源。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* option | 待销毁的Grid布局选项。 |

#### [h2]OH_ArkUI_GridLayoutOptions_SetIrregularIndexes()

```
int32_t OH_ArkUI_GridLayoutOptions_SetIrregularIndexes(ArkUI_GridLayoutOptions* option, uint32_t* irregularIndexes, int32_t size)
```
 描述：

设置Grid中不规则GridItem的索引数组。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* option | 待设置的Grid布局选项。 |
| uint32_t* irregularIndexes | 用于设置Grid布局选项的不规则GridItem索引数组。 |
| int32_t size | irregularIndexes数组元素个数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 异常原因：传入参数验证失败，参数不能为空。 |

#### [h2]OH_ArkUI_GridLayoutOptions_GetIrregularIndexes()

```
int32_t OH_ArkUI_GridLayoutOptions_GetIrregularIndexes(ArkUI_GridLayoutOptions* option, uint32_t* irregularIndexes, int32_t* size)
```
 描述：

获取Grid中不规则GridItem的索引数组。当不设置OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback时，irregularIndexes中GridItem的默认大小为垂直滚动Grid的一整行或水平滚动Grid的一整列。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* option | 待获取的Grid布局选项。 |
| uint32_t* irregularIndexes | 用于接收不规则GridItem索引数组的缓冲区。 |
| int32_t* size | irregularIndexes缓冲区可容纳的元素个数。调用前传入缓冲区容量，调用成功后更新为实际写入的索引数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 数组大小不够。 异常原因：传入参数验证失败，参数不能为空。 |

#### [h2]OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback()

```
void OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback(ArkUI_GridLayoutOptions* option, void* userData, ArkUI_GridItemSize (*callback)(int32_t itemIndex, void* userData))
```
 描述：

Grid布局选项通过GridItem索引获取指定Item占用的行列数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* option | Grid布局选项。 |
| void* userData | 用户自定义数据。 |
| [ArkUI_GridItemSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-griditemsize) (*callback)(int32_t itemIndex, void* userData) | 根据index获取指定Item占用的行列数。 itemIndex: GridItem索引值，取值范围来自[OH_ArkUI_GridLayoutOptions_SetIrregularIndexes](#oh_arkui_gridlayoutoptions_setirregularindexes)。 |

#### [h2]OH_ArkUI_GridLayoutOptions_RegisterGetRectByIndexCallback()

```
void OH_ArkUI_GridLayoutOptions_RegisterGetRectByIndexCallback(ArkUI_GridLayoutOptions* option, void* userData, ArkUI_GridItemRect (*callback)(int32_t itemIndex, void* userData))
```
 描述：

Grid布局选项通过GridItem索引获取指定Item的起始行列和占用的行列数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_GridLayoutOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gridlayoutoptions)* option | Grid布局选项。 |
| void* userData | 用户自定义数据。 |
| [ArkUI_GridItemRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-griditemrect) (*callback)(int32_t itemIndex, void* userData) | 根据index获取指定Item的起始行列和占用的行列数。 itemIndex: GridItem索引值。 |
