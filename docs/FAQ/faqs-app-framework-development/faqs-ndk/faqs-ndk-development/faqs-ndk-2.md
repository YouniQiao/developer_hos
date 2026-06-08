---
format: md
title: "在Native侧如何处理ArkTS侧传入的字符串被截断的异常场景"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-2
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-2
last_sync: 2026-06-07
sync_hash: 4d3e2cf2
---
**问题现象**

获取ArkTS侧传入的字符串到char数组时，字符串未完整获取。

**原因**

原因一：char数组长度小于字符串长度。

原因二：使用接口napi\_get\_value\_string\_utf8()获取字符串时，第四个参数数值小于传入的字符串长度。

**解决措施**

假设info中存储的ArkTS参数为“abcdefghigk”。

原因一：字符数组长度不足。

```
static napi_value TestFunc(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);

    size_t len = 0;
    char buf[5];                                                            // Allocate a char array of length 5
    napi_get_value_string_utf8(env, args[0], buf, 1024, &len);  // Get string, buf result is' abcde '
    // ...
}
```

设置char数组长度为5，字符串被截断：buf为"abcde"。

原因二：使用接口napi\_get\_value\_string\_utf8()获取字符串时，第四个参数数值太小，没超过传入的字符串长度。

```
static napi_value TestFunc(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);

    size_t len = 0;
    char buf[1024];
    napi_get_value_string_utf8(env, args[0], buf, 5, &len);                    // Get string, buf result is' abcde '
    // ...
}
```

设置第四个参数值为5，字符串被截断：buf为"abcd"，终止符'\0'占用一个字符空间。

确保char数组的长度大于或等于字符串本身的长度，并且在调用napi\_get\_value\_string\_utf8()获取字符串时，第四个参数的值足够大。首先，调用napi\_get\_value\_string\_utf8函数来获取字符串的长度，然后根据该长度动态分配char数组的内存空间。在分配内存时，建议将长度加 1，以便为字符串的终止符\0留出空间。

参考代码如下：

```
napi_value Test::TestFunc(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);   // Get string length to len
    char *buf = new char[len + 1];                                // Allocate a char array of appropriate size
    napi_get_value_string_utf8(env, args[0], buf, len + 1, &len); // get string
    OH_LOG_ERROR(LOG_APP, "result is:  b:%{public}s.", buf);
    return nullptr;
}
```
