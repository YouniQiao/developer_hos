---
title: "三方库适配"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-universal-adapt-third-library-0000002290574309
---

三方库一般是软件作者为了发布方便、替换方便或者二次开发的目的，而发布的一组可以单独于应用程序进行compile time或者runtime链接的二进制可重定位目标码文件。从本质上来说库是一种可执行代码的二进制形式，由于不同操作系统的本质不同，因此库的二进制是不兼容的。因此需要针对不同的操作系统对三方库进行编译。

## 三方库编译方式

三方库集成编译主要有两种方式：源码集成和库文件集成方式。下面说明这两种编译方式的差异。

### 源码集成方式

![](./img/0de4aa6c.png)

源码集成示例：

1. 将include中文件添加到项目中，并在CMakeLists.txt中增加头文件目录。

   ![](./img/5010c53c.png)
2. 参考源码中example中示例编写cpp文件验证功能。

   ```
   // RapidJson.cpp
   #include "RapidJson.h"
   using namespace rapidjson;
   void RapidJson::simpleDom() {
       // 1. Parse a JSON string into DOM.
       const char * json = "{\"project\":\"rapidjson\",\"stars\":10}";
       Document d;
       d.Parse(json);

       // 2. Modify it by DOM.
       Value & s = d["stars"];
       s.SetInt(s.GetInt() + 1);

       // 3. Stringify the DOM
       StringBuffer buffer;
       Writer < StringBuffer > writer(buffer);
       d.Accept(writer);

       OH_LOG_INFO(LOG_APP, "simpleDom result: %{public}s", buffer.GetString());
   }
   using namespace std; struct MyHandler {
       bool Null() {
           cout << "Null()" << endl;
           return true;
       }
       bool Bool(bool b) {
           cout << "Bool(" << boolalpha << b << ")" << endl;
           return true;
       }
       bool Int(int i) {
           cout << "Int(" << i << ")" << endl;
           return true;
       }
       bool Uint(unsigned u) {
           cout << "Uint(" << u << ")" << endl;
           return true;
       }
       bool Int64(int64_t i) {
           cout << "Int64(" << i << ")" << endl;
           return true;
       }
       bool Uint64(uint64_t u) {
           cout << "Uint64(" << u << ")" << endl;
           return true;
       }
       bool Double(double d) {
           cout << "Double(" << d << ")" << endl;
           return true;
       }
       bool RawNumber(const char * str, SizeType length, bool copy) {
           cout << "Number(" << str << ", " << length << ", " << boolalpha << copy << ")" << endl;
           return true;
       }
       bool String(const char * str, SizeType length, bool copy) {
           cout << "String(" << str << ", " << length << ", " << boolalpha << copy << ")" << endl;
           return true;
       }
       bool StartObject() {
           cout << "StartObject()" << endl;
           return true;
       }
       bool Key(const char * str, SizeType length, bool copy) {
           cout << "Key(" << str << ", " << length << ", " << boolalpha << copy << ")" <<  endl;
           return true;
       }
       bool EndObject(SizeType memberCount) {
           cout << "EndObject(" << memberCount << ")" << endl;
           return true;
       }
       bool StartArray() {
           cout << "StartArray()" << endl;
           return true;
       }
        bool EndArray(SizeType elementCount) {
           cout << "EndArray(" << elementCount << ")" << endl;
           return true;
       }
   };
   void RapidJson::simpleReader() {
       const char json[] = " { \"hello\" : \"world\", \"t\" : true , \"f\" : false, \"n\": null, \"i\":123, \"pi\": "
                       "3.1416, \"a\":[1, 2, 3, 4] } ";
       MyHandler handler;
       Reader reader;
       StringStream ss(json);
       reader.Parse(ss, handler);
   }
   ```

   ```
   // RapidJson.h
   # ifndef VULKANANDJSON_RAPIDJSON_H
   # define VULKANANDJSON_RAPIDJSON_H
   #include "rapidjson/document.h"
   #include "rapidjson/writer.h"
   #include "rapidjson/stringbuffer.h"
   #include <iostream>
   #include "hilog/log.h"
   # undef LOG_DOMAIN# undef LOG_TAG# define LOG_DOMAIN 0x3200 // 全局domain宏，标识业务领域
   # define LOG_TAG "rapidJson" // 全局tag宏，标识模块日志tag
   class RapidJson {
       public:
       void simpleDom();
       void simpleReader();
   };
   # endif //VULKANANDJSON_RAPIDJSON_H
   ```

   ```
   #CMakeLists.txt
   cmake_minimum_required(VERSION 3.4 .1)
   project(vulkanAndJson)
   set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
   if (DEFINED PACKAGE_FIND_FILE)
       include($ {PACKAGE_FIND_FILE})
   endif()
   include_directories(${NATIVERENDER_ROOT_PATH}
                       ${NATIVERENDER_ROOT_PATH}/include)
    add_library(entry SHARED napi_init.cpp
       RapidJson_t / RapidJson.cpp
   )
   target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)
   ```

### 库文件集成方式

![](./img/e22670ab.png)

您可以通过三方库文件的CMakeLists.txt中add\_library方式区分集成方式，也可简单地通过目录来进行判定。

若三方库中使用不同平台文件夹来存放平台编译好的库文件即为库文件集成方式。库文件集成方式需将三方库使用HarmonyOS NDK进行编译，编译好后添加HarmonyOS目录将库文件放到HarmonyOS目录下，如下图所示。

![](./img/c02b11f3.png)

## 编译指导

* 源码集成方式

  DevEco Studio使用CMake构建工具，您可参考[CMake相关语法](https://cmake.org/cmake/help/latest/index.html)自行完成源码的集成。
* 库文件集成方式

  HarmonyOS的三方库编译使用OHOS NDK进行编译，具体请参见[OHOS NDK使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-development-overview)，其中包括编译CMake构建的库、编译非CMake构建的库和编译有依赖的库相关指导。

  游戏工程编译完成后，将编译好的三方库文件复制到游戏工程对应目录即可。

  ![](./img/ec9d7078.png)

  为协助您提升HarmonyOS适配效率，当前已提供了为HarmonyOS系统快速编译、验证以及长期维护 的C/C++开源库：[HPKBUILD build script](https://gitee.com/han_jin_fei/lycium?_from=gitee_search)。您可以选择性地使用该开源项目。该项目下main目录包含目前已经进行HarmonyOS适配的各个开源三方库相关编译脚本，每个开源三方库编译脚本都在一个独立的目录中，其中包含：构建描述文件（HPKBUILD）、用于校验官方源码压缩包的校验值（SHA512SUM）。部分三方库由于平台差异问题，已做patch处理，故有些三方库目录下会有patch文件，详情可参考libzip目录。
