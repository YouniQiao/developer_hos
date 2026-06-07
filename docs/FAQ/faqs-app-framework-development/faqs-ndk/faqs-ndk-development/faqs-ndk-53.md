---
title: "Native侧如何获取ArkTS侧类实例"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-53
format: md
---


在ArkTS创建一个类并传递给Native侧，Native侧通过napi\_call\_function接口调用ArkTS侧的类函数。

```
// Declare Demo class
class Demo {
  add(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): number {
    return a - b;
  }
}

export default new Demo();
```

ArkTS侧：

```
// Pass the parameters to the native side
import testNapi from 'libentry.so';
import demo from './interface/ClassDemo1'

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            let flag:Boolean = false;
            console.info(`Test NAPI Result is ${testNapi.cal(2, 3, demo, true)}`)
            console.info(`Num is  ${demo.add(3,2)}`)
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

Native侧：

```
// Get class information and call class functions
#include "CGetArkTSObject.h"
napi_value CGetArkTSObject::Cal(napi_env env, napi_callback_info info) {
    size_t argc = 4;
    napi_value args[4] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    double value0;
    napi_get_value_double(env, args[0], &value0);

    double value1;
    napi_get_value_double(env, args[1], &value1);

    // Construct class instances
    napi_value demo;
    napi_create_object(env, &demo);
    napi_coerce_to_object(env, args[2], &demo);

    bool flag;
    napi_get_value_bool(env, args[3], &flag);

    // Obtain the add and sub functions of the class instance
    napi_value add, sub, num;
    napi_get_named_property(env, demo, "add", &add);
    napi_get_named_property(env, demo, "sub", &sub);

    // Call the ArkTS function
    napi_value result;
    if (flag) {
        napi_call_function(env, nullptr, add, 2, args, &result);
    } else {
        napi_call_function(env, nullptr, sub, 2, args, &result);
    }

    return result;
}
```
