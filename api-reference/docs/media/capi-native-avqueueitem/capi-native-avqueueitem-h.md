---
title: "native_avqueueitem.h"
upstream_id: "harmonyos-references/capi-native-avqueueitem-h"
catalog: "harmonyos-references"
content_hash: "d0008c9291ba"
synced_at: "2026-07-09T01:00:20.261570"
---

# native_avqueueitem.h

#### 概述

提供音视频队列元素的定义。

引用文件： <multimedia/av_session/native_avqueueitem.h>

库： libohavsession.so

系统能力： SystemCapability.Multimedia.AVSession.Core

起始版本： 23

相关模块： [OHAVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AVSession_AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avqueueitem) | OH_AVSession_AVQueueItem | 音视频队列元素的定义。 |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription) | OH_AVSession_AVMediaDescription | AVMediaDescription的声明。应用为当前资源设置的音视频媒体描述实例。 |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder) | OH_AVSession_AVMediaDescriptionBuilder | 音视频媒体描述构建器的声明。构建器的实例用于创建媒体描述信息。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_Create(OH_AVSession_AVMediaDescriptionBuilder** builder)](#oh_avsession_avmediadescriptionbuilder_create) | 创建OH_AVSession_AVMediaDescriptionBuilder实例。当该实例不再被使用时，调用[OH_AVSession_AVMediaDescriptionBuilder_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avqueueitem-h#oh_avsession_avmediadescriptionbuilder_destroy)来释放构建器对象。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_Destroy(OH_AVSession_AVMediaDescriptionBuilder* builder)](#oh_avsession_avmediadescriptionbuilder_destroy) | 销毁构建器。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAssetId(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* assetId)](#oh_avsession_avmediadescriptionbuilder_setassetid) | 设置媒体资源的当前资产ID。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* title)](#oh_avsession_avmediadescriptionbuilder_settitle) | 设置媒体资源的标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetSubTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* subtitle)](#oh_avsession_avmediadescriptionbuilder_setsubtitle) | 设置媒体资源的副标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetArtist(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* artist)](#oh_avsession_avmediadescriptionbuilder_setartist) | 设置媒体资源的艺术家信息。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAlbumCoverUri(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* albumCoverUri)](#oh_avsession_avmediadescriptionbuilder_setalbumcoveruri) | 设置媒体资源的媒体图像URL。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaType(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* mediaType)](#oh_avsession_avmediadescriptionbuilder_setmediatype) | 设置媒体资源的媒体类型。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetLyricContent(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* lyricContent)](#oh_avsession_avmediadescriptionbuilder_setlyriccontent) | 设置媒体资源的歌词内容。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetDuration(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t duration)](#oh_avsession_avmediadescriptionbuilder_setduration) | 设置媒体资源的持续时间。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaUri(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* mediaUri)](#oh_avsession_avmediadescriptionbuilder_setmediauri) | 设置媒体资源的媒体URI。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetStartPosition(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t startPosition)](#oh_avsession_avmediadescriptionbuilder_setstartposition) | 设置媒体资源的起始位置。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaSize(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t mediaSize)](#oh_avsession_avmediadescriptionbuilder_setmediasize) | 设置媒体资源的大小。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAlbumTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* albumTitle)](#oh_avsession_avmediadescriptionbuilder_setalbumtitle) | 设置媒体资源的专辑标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAppName(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* appName)](#oh_avsession_avmediadescriptionbuilder_setappname) | 设置媒体资源来源的应用名称。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAssetId(OH_AVSession_AVMediaDescription* description, char** assetId)](#oh_avsession_avmediadescription_getassetid) | 获取媒体资源的当前资产ID。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetTitle(OH_AVSession_AVMediaDescription* description, char** title)](#oh_avsession_avmediadescription_gettitle) | 获取媒体资源的标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetSubtitle(OH_AVSession_AVMediaDescription* description, char** subtitle)](#oh_avsession_avmediadescription_getsubtitle) | 获取媒体资源的副标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetArtist(OH_AVSession_AVMediaDescription* description, char** artist)](#oh_avsession_avmediadescription_getartist) | 获取媒体资源的艺术家信息。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAlbumCoverUri(OH_AVSession_AVMediaDescription* description, char** albumCoverUri)](#oh_avsession_avmediadescription_getalbumcoveruri) | 获取媒体资源的媒体图像URL。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaType(OH_AVSession_AVMediaDescription* description, char** mediaType)](#oh_avsession_avmediadescription_getmediatype) | 获取媒体类型信息。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetLyricContent(OH_AVSession_AVMediaDescription* description, char** lyricContent)](#oh_avsession_avmediadescription_getlyriccontent) | 获取资源的歌词内容。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetDuration(OH_AVSession_AVMediaDescription* description, int32_t* duration)](#oh_avsession_avmediadescription_getduration) | 获取媒体资源的持续时间。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaUri(OH_AVSession_AVMediaDescription* description, char** mediaUri)](#oh_avsession_avmediadescription_getmediauri) | 获取媒体资源的媒体URI。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetStartPosition(OH_AVSession_AVMediaDescription* description, int32_t* startPosition)](#oh_avsession_avmediadescription_getstartposition) | 获取媒体资源的起始位置。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaSize(OH_AVSession_AVMediaDescription* description, int32_t* mediaSize)](#oh_avsession_avmediadescription_getmediasize) | 获取资源的媒体大小。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAlbumTitle(OH_AVSession_AVMediaDescription* description, char** albumTitle)](#oh_avsession_avmediadescription_getalbumtitle) | 获取媒体资源的专辑标题。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAppName(OH_AVSession_AVMediaDescription* description, char** appName)](#oh_avsession_avmediadescription_getappname) | 获取媒体资源的应用名。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_GenerateAVMediaDescription(OH_AVSession_AVMediaDescriptionBuilder* builder, OH_AVSession_AVMediaDescription** avMediaDescription)](#oh_avsession_avmediadescriptionbuilder_generateavmediadescription) | 创建avMediaDescription对象。当该对象不再使用时，调用[OH_AVSession_AVMediaDescription_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avqueueitem-h#oh_avsession_avmediadescription_destroy)释放avMediaDescription对象。 |
| [AVQueueItem_Result OH_AVSession_AVMediaDescription_Destroy(OH_AVSession_AVMediaDescription* avMediaDescription)](#oh_avsession_avmediadescription_destroy) | 释放avMediaDescription对象。 |

#### 函数说明

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_Create()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_Create(OH_AVSession_AVMediaDescriptionBuilder** builder)
```
 描述

创建OH_AVSession_AVMediaDescriptionBuilder实例。当该实例不再被使用时，调用[OH_AVSession_AVMediaDescriptionBuilder_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avqueueitem-h#oh_avsession_avmediadescriptionbuilder_destroy)来释放构建器对象。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)** builder | 指向用于接收创建结果的构建器对象。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM：参数builder为nullptr。 AVQUEUEITEM_ERROR_NO_MEMORY：内存不足。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_Destroy()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_Destroy(OH_AVSession_AVMediaDescriptionBuilder* builder)
```
 描述

销毁构建器。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetAssetId()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAssetId(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* assetId)
```
 描述

设置媒体资源的当前资产ID。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* assetId | 媒体资源的当前资产ID。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数assetId为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetTitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* title)
```
 描述

设置媒体资源的标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* title | 媒体资源的标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数title为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetSubTitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetSubTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* subtitle)
```
 描述

设置媒体资源的副标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* subtitle | 媒体资源的副标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数subtitle为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetArtist()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetArtist(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* artist)
```
 描述

设置媒体资源的艺术家信息。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* artist | 媒体资源的艺术家。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数artist为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetAlbumCoverUri()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAlbumCoverUri(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* albumCoverUri)
```
 描述

设置媒体资源的媒体图像URL。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* albumCoverUri | 在媒体中心显示的资源的图像URL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数albumCoverUri为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetMediaType()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaType(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* mediaType)
```
 描述

设置媒体资源的媒体类型。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* mediaType | 媒体资源的媒体类型。如VIDEO或AUDIO。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数mediaType为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetLyricContent()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetLyricContent(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* lyricContent)
```
 描述

设置媒体资源的歌词内容。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* lyricContent | 媒体资源的歌词内容。为LRC（Lyric Reduced Codec）格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数lyricContent为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetDuration()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetDuration(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t duration)
```
 描述

设置媒体资源的持续时间。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const int32_t duration | 媒体资源的持续时间。单位为毫秒（ms）。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数duration为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetMediaUri()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaUri(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* mediaUri)
```
 描述

设置媒体资源的媒体URI。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* mediaUri | 媒体资源的URI。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数mediaUri为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetStartPosition()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetStartPosition(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t startPosition)
```
 描述

设置媒体资源的起始位置。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const int32_t startPosition | 媒体资源的起始位置。单位为毫秒（ms）。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数startPosition是无效的。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetMediaSize()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetMediaSize(OH_AVSession_AVMediaDescriptionBuilder* builder, const int32_t mediaSize)
```
 描述

设置媒体资源的大小。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const int32_t mediaSize | 媒体资源的大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数mediaSize是无效的。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetAlbumTitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAlbumTitle(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* albumTitle)
```
 描述

设置媒体资源的专辑标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* albumTitle | 媒体资源的专辑标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数albumTitle为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_SetAppName()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_SetAppName(OH_AVSession_AVMediaDescriptionBuilder* builder, const char* appName)
```
 描述

设置媒体资源来源的应用名称。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| const char* appName | 媒体资源来源的应用名称。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数appName为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetAssetId()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAssetId(OH_AVSession_AVMediaDescription* description, char** assetId)
```
 描述

获取媒体资源的当前资产ID。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** assetId | 指针变量，用于接收媒体资源的当前资产ID。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数assetId为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetTitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetTitle(OH_AVSession_AVMediaDescription* description, char** title)
```
 描述

获取媒体资源的标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** title | 指针变量将返回当前媒体资源的标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数title为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetSubtitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetSubtitle(OH_AVSession_AVMediaDescription* description, char** subtitle)
```
 描述

获取媒体资源的副标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** subtitle | 指针变量将返回当前媒体资源的副标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数subtitle为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetArtist()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetArtist(OH_AVSession_AVMediaDescription* description, char** artist)
```
 描述

获取媒体资源的艺术家信息。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** artist | 指针变量将返回当前媒体资源的艺术家信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数artist为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetAlbumCoverUri()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAlbumCoverUri(OH_AVSession_AVMediaDescription* description, char** albumCoverUri)
```
 描述

获取媒体资源的媒体图像URL。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** albumCoverUri | 指针变量将返回资源的媒体图像URL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数albumCoverUri为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetMediaType()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaType(OH_AVSession_AVMediaDescription* description, char** mediaType)
```
 描述

获取媒体类型信息。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** mediaType | 指针变量将返回当前媒体类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数mediaType为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetLyricContent()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetLyricContent(OH_AVSession_AVMediaDescription* description, char** lyricContent)
```
 描述

获取资源的歌词内容。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** lyricContent | 指针变量将返回当前媒体歌词内容。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数lyricContent为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetDuration()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetDuration(OH_AVSession_AVMediaDescription* description, int32_t* duration)
```
 描述

获取媒体资源的持续时间。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| int32_t* duration | 指针变量将返回当前媒体资源的总时长。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数duration为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetMediaUri()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaUri(OH_AVSession_AVMediaDescription* description, char** mediaUri)
```
 描述

获取媒体资源的媒体URI。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** mediaUri | 指针变量将返回当前媒体资源标识符。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数mediaUri为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetStartPosition()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetStartPosition(OH_AVSession_AVMediaDescription* description, int32_t* startPosition)
```
 描述

获取媒体资源的起始位置。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| int32_t* startPosition | 指针变量将返回当前媒体资源开始的位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数startPosition为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetMediaSize()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetMediaSize(OH_AVSession_AVMediaDescription* description, int32_t* mediaSize)
```
 描述

获取资源的媒体大小。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| int32_t* mediaSize | 指针变量将返回当前媒体资源的大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数mediaSize为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetAlbumTitle()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAlbumTitle(OH_AVSession_AVMediaDescription* description, char** albumTitle)
```
 描述

获取媒体资源的专辑标题。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** albumTitle | 指针变量将返回当前媒体资源的专辑标题。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数albumTitle为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_GetAppName()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_GetAppName(OH_AVSession_AVMediaDescription* description, char** appName)
```
 描述

获取媒体资源的应用名。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* description | 表示音视频媒体描述实例指针。 |
| char** appName | 指针变量将返回媒体资源的应用名称。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数description为nullptr。 2. 参数appName为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescriptionBuilder_GenerateAVMediaDescription()

```
AVQueueItem_Result OH_AVSession_AVMediaDescriptionBuilder_GenerateAVMediaDescription(OH_AVSession_AVMediaDescriptionBuilder* builder, OH_AVSession_AVMediaDescription** avMediaDescription)
```
 描述

创建avMediaDescription对象。当该对象不再使用时，调用[OH_AVSession_AVMediaDescription_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avqueueitem-h#oh_avsession_avmediadescription_destroy)释放avMediaDescription对象。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescriptionBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescriptionbuilder)* builder | 表示音视频媒体描述构建器实例指针。 |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)** avMediaDescription | 指向用于接收avMediaDescription对象的指针变量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_NO_MEMORY：内存不足。 AVQUEUEITEM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr。 2. 参数avMediaDescription为nullptr。 |

#### [h2]OH_AVSession_AVMediaDescription_Destroy()

```
AVQueueItem_Result OH_AVSession_AVMediaDescription_Destroy(OH_AVSession_AVMediaDescription* avMediaDescription)
```
 描述

释放avMediaDescription对象。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription)* avMediaDescription | 指向要释放的avMediaDescription对象。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AVQueueItem_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avqueueitem_result) | AVQUEUEITEM_SUCCESS：函数执行成功。 AVQUEUEITEM_ERROR_INVALID_PARAM：参数avMediaDescription为nullptr。 |
