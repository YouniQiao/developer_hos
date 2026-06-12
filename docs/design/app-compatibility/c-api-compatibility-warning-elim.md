---
title: "C API兼容性保护"
displayed_sidebar: appCompatibilitySidebar
original_url: /docs/design/app-compatibility/c-api-compatibility-warning-elim
format: md
upstream_id: design/app-compatibility/c-api-compatibility-warning-elim
last_sync: 2026-06-07
sync_hash: 1c1147b0
upstream_hash: 87690a9813fc
upstream_status: upstream_deleted_pending
---

# C API兼容性保护

## 通过dlopen加载动态库，调用dlsym接口查询的方式，判断API兼容性

示例如下：

```
void *handle = NULL; // 库的句柄
Location_ResultCode (*OH_Location_StartLocating_Test)(const Location_RequestConfig *); // 函数指针
OH_Location_StartLocating_Test = NULL;
handle = dlopen("liblocation_ndk.so", RTLD_LAZY);
if (handle != NULL) {
    OH_Location_StartLocating_Test =
        (Location_ResultCode(*)(const Location_RequestConfig *))dlsym(handle, "OH_Location_StartLocating");
    if (OH_Location_StartLocating_Test != NULL) {
        OH_LOG_INFO(LOG_APP, "OH_Location_StartLocating != NULL");
    } else {
        OH_LOG_INFO(LOG_APP, "OH_Location_StartLocating = NULL");
    }
} else {
    OH_LOG_INFO(LOG_APP, "handle = NULL");
}
```
