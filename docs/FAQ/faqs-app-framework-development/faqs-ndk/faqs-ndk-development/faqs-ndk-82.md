---
format: md
title: "如何在Native侧释放ArkTS对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-82
---


使用napi\_wrap接口时，如果最后一个参数result不为nullptr，需在适当时机调用napi\_remove\_wrap函数删除创建的napi\_ref对象。

```
// Usage 1: Napi_wrap does not need to receive the created napi_ref, and the last parameter is passed as nullptr. The created napi_ref is a weak reference, managed by the system, and does not require manual release by the user
napi_wrap(env, jsobject, nativeObject, cb, nullptr, nullptr);

// Usage 2: napi_wrap needs to receive the created napi_ref, the last parameter is not null ptr, and the returned napi_ref is a strong reference that needs to be manually released by the user, otherwise it will cause memory leakage
napi_ref result;
napi_wrap(env, jsobject, nativeObject, cb, nullptr, &result);
// When jsobject and result are no longer used in the future, promptly call napi_remove_wrap to release result
void** result1;
napi_remove_wrap(env, jsobject, result1);
```
