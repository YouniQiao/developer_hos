---
format: md
title: "Static Library模块中src/main/cpp目录下的文件未打包进HAR"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-23
---


**问题现象**

点击**Build > Make Module $\{libraryName\}**编译构建生成HAR后，发现构建产物中未出现cpp目录下的文件。

![](./img/c17efde0.png)

**解决措施**

如果使用的Hvigor为2.5.0-s及以上版本，在编译构建HAR的过程中，仅会将dependencies内处于本模块路径下的本地依赖打包进.har文件中，devDependencies里的依赖不会打包进.har文件中。

请将相应的本地依赖移至dependencies中，然后重新编译。

![](./img/74019831.png)
