---
format: md
title: "Native侧如何通过char指针构造ArrayBuffer数组"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-59
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-59
last_sync: 2026-06-07
sync_hash: 2f4cb58e
---
可以通过napi\_create\_arraybuffer接口实现。

```
#include "CharToArrBuffer.h"
napi_value CharToArrBuffer::TestCharBuf(napi_env env, napi_callback_info info) {
    napi_value result = nullptr;
    char *buf = nullptr;
    // Create an Array buffer
    napi_create_arraybuffer(env, 100, reinterpret_cast<void **>(&buf), &result);
    // Assign an ArrayBuffer
    for (int i = 0; i < 100; i++) {
        buf[i] = i + 2;
    }
    return result;
}
```
