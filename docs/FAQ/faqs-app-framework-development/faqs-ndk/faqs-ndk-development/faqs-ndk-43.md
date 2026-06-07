---
format: md
title: "如何正确地在CMakeLists.txt文件中配置头文件搜索路径"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-43
---


请按照以下示例进行配置：

**例1****：**

目录结构：

![](./img/96d3dcd8.png)

CMakeLists.txt配置头文件搜索路径：

include\_directories($\{NATIVERENDER\_ROOT\_PATH\}/include)

cpp文件中引用头文件:

#include 'test.h'

**例2****：**

目录结构：

![](./img/e7362a98.png)

CMakeLists.txt配置头文件搜索路径：

include\_directories($\{NATIVERENDER\_ROOT\_PATH\})

cpp文件中引用头文件:

#include 'include/test/test.h'

**例3：**

目录结构：

![](./img/02d78b2d.png)

CMakeLists.txt配置头文件搜索路径：

include\_directories($\{NATIVERENDER\_ROOT\_PATH\}/include)

cpp文件中引用头文件:

#include 'test/test.h'

**例4:**

目录结构：

![](./img/86f48698.png)

CMakeLists.txt配置头文件搜索路径:

include\_directories($\{NATIVERENDER\_ROOT\_PATH\}/include/test)

cpp文件中引用头文件:

#include 'test.h'
