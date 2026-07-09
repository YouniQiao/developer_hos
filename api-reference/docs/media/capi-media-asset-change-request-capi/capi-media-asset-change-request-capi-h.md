---
title: "media_asset_change_request_capi.h"
upstream_id: "harmonyos-references/capi-media-asset-change-request-capi-h"
catalog: "harmonyos-references"
content_hash: "8120a41080d2"
synced_at: "2026-07-09T01:00:48.200405"
---

# media_asset_change_request_capi.h

#### 概述

定义与媒体资产更改请求相关的API。提供更改资产的能力。

库： libmedia_asset_manager.so

引用文件： <multimedia/media_library/media_asset_change_request_capi.h>

系统能力： SystemCapability.FileManagement.PhotoAccessHelper.Core

起始版本： 12

相关模块： [MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)](#oh_mediaassetchangerequest_create) | 创建[OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, char* fileUri)](#oh_mediaassetchangerequest_addresourcewithuri) | 通过文件uri添加资源。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)](#oh_mediaassetchangerequest_addresourcewithbuffer) | 通过ArrayBuffer数据添加资源。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest, int32_t* fd)](#oh_mediaassetchangerequest_getwritecachehandler) | 获取临时文件写句柄。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ImageFileType imageFileType)](#oh_mediaassetchangerequest_savecameraphoto) | 保存相机拍摄的照片资源。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)](#oh_mediaassetchangerequest_discardcameraphoto) | 丢弃相机拍摄的照片资源。 |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)](#oh_mediaassetchangerequest_release) | 释放[OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

#### 函数说明

#### [h2]OH_MediaAssetChangeRequest_Create()

```
OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)
```
 描述

创建[OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)* mediaAsset | [OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 |

#### [h2]OH_MediaAssetChangeRequest_AddResourceWithUri()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, char* fileUri)
```
 描述

通过文件uri添加资源。

起始版本： 13

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary_ResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_resourcetype) resourceType | 要添加的资源的[MediaLibrary_ResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_resourcetype)。 |
| char* fileUri | 文件uri。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_NO_SUCH_FILE：文件不存在。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。 |

#### [h2]OH_MediaAssetChangeRequest_AddResourceWithBuffer()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)
```
 描述

通过ArrayBuffer数据添加资源。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary_ResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_resourcetype) resourceType | 要添加的资源的类型。 |
| uint8_t* buffer | 要添加的数据缓冲区。 |
| uint32_t length | 数据缓冲区的长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。 |

#### [h2]OH_MediaAssetChangeRequest_GetWriteCacheHandler()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest,int32_t* fd)
```
 描述

获取临时文件写句柄。

需要权限： ohos.permission.WRITE_IMAGEVIDEO

起始版本： 13

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| int32_t* fd | 临时文件写句柄。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 MEDIA_LIBRARY_PERMISSION_DENIED：没有权限。 MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。 |

#### [h2]OH_MediaAssetChangeRequest_SaveCameraPhoto()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ImageFileType imageFileType)
```
 描述

保存相机拍摄的照片资源。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary_ImageFileType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_imagefiletype) imageFileType | 要保存的照片的图像文件类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。 |

#### [h2]OH_MediaAssetChangeRequest_DiscardCameraPhoto()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)
```
 描述

丢弃相机拍摄的照片资源。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。 MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。 |

#### [h2]OH_MediaAssetChangeRequest_Release()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)
```
 描述

释放[OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)* changeRequest | [OH_MediaAssetChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA_LIBRARY_OK：方法调用成功。 MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因： 1. 未指定强制参数。 2. 参数类型不正确。 3. 参数验证失败。 |
