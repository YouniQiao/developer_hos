---
title: "Native侧如何获取ArkTS侧Object对象及其成员变量"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-42
---

在ArkTS侧定义类，传递类到Native侧调用类函数。详情见示例代码。

ArkTS侧

```
// index.ets
import testNapi from 'libentry.so';
import { PromptAction } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

class A {
  name: string = 'username'

  onCall() {
    try {
      new PromptAction().showToast({
        message: 'Message Info',
        duration: 2000
      });
    } catch (err) {
      hilog.error(0x0000, 'testTag', `showToast undefined, code is ${err.code}, message is ${err.message}`);
    }
  }
}

@Entry
@Component
struct NativeGetArkTSObject {
  build() {
    Button()
      .onClick(() => {
        testNapi.callFunction(new A());
      })
  }
}
```

```
// index.d.ts
export const callFunction: (a:object) => void;
```

Native侧

```
// Pass in an instance object and call functions in the object on the C++side
#include "napi/native_api.h"
static napi_value CallFunction(napi_env env, napi_callback_info info) {
    // Get instance object
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    // Method for obtaining objects
    napi_value onCall;
    napi_get_named_property(env, args[0], "onCall", &onCall);
    // Call functions in the object
    napi_value res;
    napi_call_function(env, args[0], onCall, 0, nullptr, &res);
    return onCall;
}
EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports) {
    napi_property_descriptor desc[] = {
        {"callFunction", nullptr, CallFunction, nullptr, nullptr, nullptr, napi_default, nullptr}};
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END
```
