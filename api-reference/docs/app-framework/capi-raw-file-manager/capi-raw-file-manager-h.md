---
title: "raw_file_manager.h"
upstream_id: "harmonyos-references/capi-raw-file-manager-h"
catalog: "harmonyos-references"
content_hash: "c64d5e454a0d"
synced_at: "2026-08-29T18:16:16.819136"
---

# raw_file_manager.h

#### 概述

通过本模块可以创建、释放NativeResourceManager对象，以及打开rawfile文件和目录。

引用文件： <rawfile/raw_file_manager.h>

库： librawfile.z.so

系统能力： SystemCapability.Global.ResourceManager

起始版本： 8

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) | NativeResourceManager | 表示Native层的ResourceManager对象。NativeResourceManager对JavaScript ResourceManager的Native实现进行封装，可以通过[OH_ResourceManager_InitNativeResourceManager](#oh_resourcemanager_initnativeresourcemanager)函数获取。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)](#oh_resourcemanager_initnativeresourcemanager) | 初始化NativeResourceManager对象。 |
| [void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)](#oh_resourcemanager_releasenativeresourcemanager) | 释放NativeResourceManager对象及其关联资源。 |
| [RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)](#oh_resourcemanager_openrawdir) | 打开rawfile目录。 |
| [RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile) | 打开rawfile文件并返回RawFile对象，用于读取rawfile文件内容。 |
| [RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile64) | 打开rawfile文件并返回RawFile对象，用于读取rawfile文件内容。支持2GB以上的大文件。 |
| [bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)](#oh_resourcemanager_israwdir) | 判断指定路径是否为rawfile的子目录。用于在遍历目录前，判断对应路径是否为目录，或在打开文件前，判断对应路径是否为文件。 |

#### 函数说明

#### [h2]OH_ResourceManager_InitNativeResourceManager()

```
NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)
```
 描述

初始化NativeResourceManager对象。

起始版本： 8

参数：

| 参数项 | 描述 |
| --- | --- |
| napi_env env | 输入参数。指向JavaScript Native Interface（napi）环境的指针。 |
| napi_value jsResMgr | 输入参数。表示JavaScript ResourceManager对象的引用。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [NativeResourceManager *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) | 返回NativeResourceManager对象的指针。若初始化失败，返回NULL，可能原因为参数env或jsResMgr无效。 该指针由此函数分配内存，使用完后须调用[OH_ResourceManager_ReleaseNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_releasenativeresourcemanager)释放。 |

#### [h2]OH_ResourceManager_ReleaseNativeResourceManager()

```
void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)
```
 描述

释放NativeResourceManager对象及其关联资源。

起始版本： 8

参数：

| 参数项 | 描述 |
| --- | --- |
| [NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *resMgr | 输入参数。指向要释放的NativeResourceManager对象的指针。释放后resMgr指针失效，不可用于其他操作。 |

#### [h2]OH_ResourceManager_OpenRawDir()

```
RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)
```
 描述

打开rawfile目录。

起始版本： 8

参数：

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr | 输入参数。指向NativeResourceManager对象的指针。 |
| const char *dirName | 输入参数。待打开的目录路径。相对于rawfile根目录的路径，例如"images/icons"。当为空字符串时表示打开rawfile根目录。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [RawDir *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawdir) | 返回指向RawDir对象的指针。若调用失败或mgr为空，则返回NULL。使用完后须调用[OH_ResourceManager_CloseRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h#oh_resourcemanager_closerawdir)释放。 |

参考：

[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH_ResourceManager_CloseRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h#oh_resourcemanager_closerawdir)

#### [h2]OH_ResourceManager_OpenRawFile()

```
RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)
```
 描述

打开rawfile文件并返回RawFile对象，用于读取rawfile文件内容。

起始版本： 8

参数：

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr | 输入参数。指向NativeResourceManager对象的指针。 |
| const char *fileName | 输入参数。待打开的文件路径。相对于rawfile根目录的路径，例如"images/icons/1.png"。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [RawFile *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile) | 返回指向RawFile对象的指针。若调用失败或输入参数为空，则返回NULL。使用完后须调用[OH_ResourceManager_CloseRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile)释放。 |

参考：

[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH_ResourceManager_CloseRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile)

#### [h2]OH_ResourceManager_OpenRawFile64()

```
RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)
```
 描述

打开rawfile文件并返回RawFile对象，用于读取rawfile文件内容。支持2GB以上的大文件。

起始版本： 11

参数：

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr | 输入参数。指向NativeResourceManager对象的指针。 |
| const char *fileName | 输入参数。待打开的文件路径。相对于rawfile根目录的路径，例如"images/icons/1.png"。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [RawFile64 *](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfile64) | 返回指向RawFile对象的指针。若调用失败或输入参数为空，则返回NULL。使用完后须调用[OH_ResourceManager_CloseRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile64)释放。 |

参考：

[OH_ResourceManager_InitNativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH_ResourceManager_CloseRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile64)

#### [h2]OH_ResourceManager_IsRawDir()

```
bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)
```
 描述

判断指定路径是否为rawfile的子目录。用于在遍历目录前，判断对应路径是否为目录，或在打开文件前，判断对应路径是否为文件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-nativeresourcemanager) *mgr | 输入参数。指向NativeResourceManager对象的指针。 |
| const char *path | 待判断的路径。相对于rawfile根目录的路径，如"images/icons"。 |

返回：

| 类型 | 说明 |
| --- | --- |
| bool | 返回true表示是rawfile下的目录，返回false表示不是rawfile下的目录。 |
