---
title: "应用文件访问(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileio-guidelines
format: md
---


## 场景介绍

FileIO模块提供了部分文件基础操作能力，其他能力请参考[libc标准库](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/musl)/[c++标准库](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cpp)。

## 约束限制

进行文件操作之前，必须保证传入正确有效的URI或path。

## 接口说明

接口的详细说明，请参考[FileIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-fileio-h)。

| 接口名称 | 描述 |
| --- | --- |
| FileManagement\_ErrCode OH\_FileIO\_GetFileLocation(char \*uri, int uriLength, FileIO\_FileLocation \*location) | 获取文件存储位置。 |
| enum FileIO\_FileLocation FileIO\_FileLocation | 文件存储位置枚举值。 |
| enum FileManagement\_ErrCode FileManagement\_ErrCode | 文件管理模块错误码。 |

## 开发步骤

**在CMake脚本中链接动态库**

CMakeLists.txt中添加以下lib。

```
target_link_libraries(sample PUBLIC libohfileio.so)
```

**添加头文件**

```
#include <cstdio>
#include <cstring>
#include <filemanagement/fileio/oh_fileio.h>
```

调用OH\_FileIO\_GetFileLocation接口获取文件存储位置。示例代码如下所示：

```
void GetFileLocationExample(char *uri)
{
    FileIO_FileLocation location;
    FileManagement_ErrCode ret = OH_FileIO_GetFileLocation(uri, strlen(uri), &location);
    if (ret == 0) {
        if (location == FileIO_FileLocation::LOCAL) {
            printf("Succeeded in getting file location, this file is on local.");
        } else if (location == FileIO_FileLocation::CLOUD) {
            printf("Succeeded in getting file location, this file is on cloud.");
        } else if (location == FileIO_FileLocation::LOCAL_AND_CLOUD) {
            printf("Succeeded in getting file location, this file is on  local and cloud.");
        }
    } else {
        printf("Failed to get file location, error code is %d", ret);
    }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/NDKAppFileSample/entry/src/main/cpp/napi_init.cpp#L27-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
