---
format: md
title: "在ArkTS侧如何引用Native侧使用napi_create_buffer接口构造的对象"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-58
---


**问题现象**

使用napi\_create\_buffer接口创建缓冲区，并在ArkTS与Native之间传递构建结果的步骤如下：

**解决措施**

可以参考以下代码示例：

1. Native侧构造buffer并写入数据。

   ```
   #include "CreateBuffer.h"
   napi_value CreateBuffer::TestBuffer(napi_env env, napi_callback_info) {
       size_t length = 100;
       char *data = nullptr;
       napi_value result = nullptr;
       napi_create_buffer(env, length, reinterpret_cast<void **>(&data), &result);

       char buf[50] = {0};
       for (int i = 0; i < 50; i++) {
           buf[i] = i + 2;
       }
       napi_create_buffer_copy(env, 50, buf, reinterpret_cast<void **>(&data), &result);
       return result;
   }
   ```
2. index.d.ts文件中声明接口。

   ```
   export const testBuffer: () => ArrayBuffer;
   ```
3. ArkTS侧获取buffer信息。

   ```
   import testNapi from 'libentry.so';

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
               let arr = testNapi.testBuffer();
               let result = new Uint8Array(arr);
               for (let index = 0; index < result.byteLength; index++) {
                 console.info(`res[${index}] = ${result[index]}`)
               }
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```
