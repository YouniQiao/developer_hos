---
title: "bundle_manager_common.h"
upstream_id: "harmonyos-references/capi-bundle-manager-common-h"
catalog: "harmonyos-references"
content_hash: "ef4fba6c2793"
synced_at: "2026-07-09T00:57:12.537161"
---

# bundle_manager_common.h

#### 概述

声明BundleManager定义的相关错误码。

引用文件： <bundle/bundle_manager_common.h>

库： libbundle_ndk.z.so

系统能力： SystemCapability.BundleManager.BundleFramework.Core

起始版本： 21

相关模块： [Native_Bundle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle)

#### 汇总

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [BundleManager_ErrorCode](#bundlemanager_errorcode) | BundleManager_ErrorCode | 枚举错误码。 |

#### 枚举类型说明

#### [h2]BundleManager_ErrorCode

```
enum BundleManager_ErrorCode
```
 描述

枚举错误码，详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

起始版本： 21

| 枚举项 | 描述 |
| --- | --- |
| BUNDLE_MANAGER_ERROR_CODE_NO_ERROR = 0 | 执行成功。 |
| BUNDLE_MANAGER_ERROR_CODE_PERMISSION_DENIED = 201 | 权限被拒绝。 |
| BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID = 401 | 参数无效。 |
