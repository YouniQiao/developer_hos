---
format: md
title: "如何修改代码工程所支持的C++语言版本"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-9
---


**问题详情**

如何修改C++语言版本？当前支持的C++标准有哪些？

**解决措施**

* libc++版本

  HarmonyOS 3.0开始使用clang/llvm 10.0.1版本的libc++。

  HarmonyOS 3.2开始使用clang/llvm 12.0.1版本的libc++。

  HarmonyOS NEXT Developer Preview0开始使用clang/llvm 15.0.4版本的libc++。
* C++语言支持能力

  C++11和C++14标准已完全支持，C++17和C++20标准正在逐步完善。
* 如何修改C++语言版本

  SDK默认的C++版本为14。如果需要修改，请参考以下两种方式：

  + 在CMakelists.txt文件中设置版本。

    set(NATIVERENDER\_ROOT\_PATH $\{CMAKE\_CURRENT\_SOURCE\_DIR\})

    # 添加以下行

    set(CMAKE\_CXX\_STANDARD 17)# 设置C++标准为17
  + 修改模块级的build-profile.json5文件，添加“"cppFlags": "--std=c++17"”。

    ```
    "buildOption": {
      "externalNativeOptions": {
        "path": "./src/main/cpp/CMakeLists.txt",
        "arguments": "",
        // Modify the following line
        "cppFlags": "--std=c++17"
      },
    },
    ```
