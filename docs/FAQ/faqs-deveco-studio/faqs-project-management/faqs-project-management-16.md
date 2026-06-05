---
format: md
title: ".h文件中uint8_t无法使用如何解决"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-16
---

**解决措施**

1. 在CPP导入头文件修改如下：

   ```
   #ifdef __cplusplus
   extern “C” {
   #endif
   #include “MGDolphinTOTP.h”
   #include “MGDolphinTOTPsha1.h”
   #ifdef __cplusplus}
   #endif
   ```
2. CMakeLists.txt 中需要增加 .c 文件进行编译 ：

   add\_library(entry SHARED hello.cpp NapiTest.cpp MGDolphinTOTP.c MGDolphinTOTPSha1.c)
