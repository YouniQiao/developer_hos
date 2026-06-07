---
title: "如何在ArkTS侧管理Native侧的C++对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-77
format: md
---


**问题现象**

在ArkTS层管理C++层分配的对象，并通过接口访问C++层的业务。

**解决措施**

C++层分配一个类对象，返回该对象的地址给ArkTS层。ArkTS层通过自定义类对象的number属性存储C++层返回的地址。后续涉及对C++层对象的业务处理时，ArkTS层调用接口将地址传递到C++层处理。

声明TestClass：

```
class TestClass {
public:
    int GetValue() {
        return this->value;
    }
    void SetValue(int value) {
        this->value = value;
    }
private:
    int value = 999;
};
```

C++层将定义的对象地址返回到ArkTS层：

```
#include "napi/native_api.h"
#include "TestClass.h"
#include "hilog/log.h"
#define LOG_TAG "MY_TAG"

static napi_value DefineObject(napi_env env, napi_callback_info info) {
    OH_LOG_INFO(LOG_APP, "enter DefineObject");

    napi_value result;
    auto a = new TestClass();
    int64_t addrValue = (int64_t)a;
    napi_create_bigint_int64(env, addrValue, &result);
    OH_LOG_INFO(LOG_APP, "end DefineObject, addrValue:%{public}ld", addrValue);
    return result;
}
```

C++层接收ArkTS层传递过来的对象地址完成业务：

```
static napi_value CallObject(napi_env env, napi_callback_info info) {
    OH_LOG_INFO(LOG_APP, "enter CallObject");
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t addrValue = 0;
    bool flag = false;
    napi_get_value_bigint_int64(env, args[0], &addrValue, &flag);
    TestClass *a = (TestClass *)addrValue;
    OH_LOG_INFO(LOG_APP, "CallObject, addrValue:%{public}ld", addrValue);
    OH_LOG_INFO(LOG_APP, "CallObject, value:%{public}d", a->GetValue());
    a->SetValue(888);
    return nullptr;
}
```

ArkTS侧调用接口：

```
import testNapi from 'libentry.so';

@Entry
@Component
struct Index {
  @State message: string = 'DefineObject';
  @State message2: string = 'CallObject';
  addr: number = 0;

  build() {
    Column() {
      Button(this.message)
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          this.addr = testNapi.defineObject();
          console.log('testTag:' + this.addr.toString());
        })
      Button(this.message2)
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          if (this.addr != 0) {
            testNapi.callObject(this.addr);
            this.message2 = 'CallObject';
          } else {
            this.message2 = 'want define Object';
          }
        })
    }
    .justifyContent(FlexAlign.Center)
    .height('100%')
    .width('100%')
  }
}
```
