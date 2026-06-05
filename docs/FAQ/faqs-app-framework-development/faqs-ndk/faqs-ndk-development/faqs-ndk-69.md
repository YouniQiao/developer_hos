---
format: md
title: "napi_call_function调用时除了会有pending exception外，是否还有其他异常场景"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-69
---

调用NAPI接口时可能会产生异常，因此在业务的关键流程中需要对接口调用的结果进行判断，以检查是否出现异常。例如：

```
napi_status status = napi_create_object(env, &object);
if (status != napi_ok) {
    napi_throw_error(env, nullptr, "Error");
return;
}
```
