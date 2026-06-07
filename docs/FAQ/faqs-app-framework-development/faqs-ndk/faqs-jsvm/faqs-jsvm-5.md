---
format: md
title: "如何正确使用OH_JSVM_GetValueStringUtf8获取字符串"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-jsvm/faqs-jsvm-5
---


**问题现象**

1. OH\_JSVM\_GetValueStringUtf8 中传入的缓冲区大小不确定。
2. 使用 OH\_JSVM\_GetValueStringUtf8 获取超长字符串时可能会导致崩溃。

**解决措施**

函数 OH\_JSVM\_GetValueStringUtf8 的第三个参数用于指定字符串写入的内存地址。如果传入空指针，接口会通过最后一个参数 result 返回字符串的长度（不包含终止符）。

```
JSVM_EXTERN JSVM_Status OH_JSVM_GetValueStringUtf8(JSVM_Env env,
                                                   JSVM_Value value,
                                                   char* buf,
                                                   size_t bufsize,
                                                   size_t* result);
```

获取字符串可分为以下三步：

1. 调用接口获取字符串长度；
2. 申请buffer内存空间；
3. 调用接口获取字符串。

   ```
   std::string GetValueString(JSVM_Env env, JSVM_Value value) {
       constexpr size_t PREALLOC_SIZE = 256;
       char preallocMemory[PREALLOC_SIZE];

       char *buff = preallocMemory;

       // Obtain length
       size_t totalLen = 0;
       OH_JSVM_GetValueStringUtf8(env, value, nullptr, 0, &totalLen);
       size_t needed = totalLen + 1;

       if (needed > PREALLOC_SIZE) {
           // Allocate space, size must include termination character
           buff = new char[needed];
       }
       // get string
       OH_JSVM_GetValueStringUtf8(env, value, buff, needed, nullptr);

       std::string ret(buff, totalLen);

       if (needed > PREALLOC_SIZE) {
           delete[] buff;
       }
       return ret;
   }
   ```

![](./img/cbed804b.png)

1. 分配的 buffer 大小必须大于字符串长度，因为字符串长度不包含最后的终止字符。如果 buffer 的大小等于字符串长度，字符串的最后一个字符将被终止字符覆盖。
2. 不建议直接在栈上使用 `char buff[totalLen + 1]` 分配空间，因为当字符串长度过大时，可能会导致栈溢出，从而引发应用崩溃。
