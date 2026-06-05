---
title: "Native侧获取env具有线程限制，如何在C++子线程触发ArkTS侧回调"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-25
format: md
---


可以通过线程安全函数实现在C++子线程触发ArkTS侧回调。native主线程外的其他线程通常不能直接使用需要napi\_env、napi\_value的NAPI函数，线程安全函数可以在其他线程中被调用，并回到主线程中执行。参考代码如下：

在Native入口定义线程安全函数，计算两数之和。

```
napi_threadsafe_function tsfn;
using namespace std;
struct CallbackData {
    napi_threadsafe_function tsfn;
    napi_async_work work;
    double result = 0;
    double data[2] = {0};
};

static void CallJsFunction(napi_env env, napi_value callBack, [[maybe_unused]] void *context, void *data) {
    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);

    napi_value callBackArgs = nullptr;
    napi_create_double(env, callbackData->result, &callBackArgs);
    napi_value callBackResult = nullptr;
    napi_call_function(env, nullptr, callBack, 1, &callBackArgs,
                       &callBackResult); // Call the callback to send the result to the ArkTS side.
}

static void Thread_Finalize_CBFunction(napi_env env, void *finalize_data, void *finalize_hint) {
    CallbackData *callbackData = reinterpret_cast<CallbackData *>(finalize_data);
    delete finalize_data;
}

static void AddFunc(void *data) {
    CallbackData *callbackData = static_cast<CallbackData *>(data); // Parse the context, and process the service (add the two numbers).
    callbackData->result = callbackData->data[0] + callbackData->data[1]; // Place the result.
    napi_call_threadsafe_function(callbackData->tsfn, data, napi_tsfn_blocking); // Call the thread-safe function.
    napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);
}

static napi_value AddTSFCallback(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value args[3] = {nullptr};

    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    CallbackData *callbackData = new CallbackData();
    napi_get_value_double(env, args[0], &callbackData->data[0]);
    napi_get_value_double(env, args[1], &callbackData->data[1]);

    napi_value resourceName = nullptr;
    napi_create_string_utf8(env, "Thread_safe Function", NAPI_AUTO_LENGTH, &resourceName);

    // Create a thread-safe function object, and register and bind callback and call_js_cb.
    napi_create_threadsafe_function(env, args[2], nullptr, resourceName, 0, 1, callbackData, Thread_Finalize_CBFunction, callbackData,
                                    CallJsFunction, &callbackData->tsfn);
    thread t(AddFunc, reinterpret_cast<void *>(callbackData)); // Create a C++ subthread to process service logic.
    t.detach();
    return nullptr;
}
```

ArkTS侧调用接口。

```
import testNapi from 'libentry.so';

@Entry
@Component
struct Index {
  result: number = 0;
  // ...
    .onClick(() => {
      testNapi.addTSFCallback(2, 3, (nativeResult: number) => {
        this.result = nativeResult;
      });
    })
```

**参考链接**

[使用Node-API接口进行线程安全开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-thread-safety)
