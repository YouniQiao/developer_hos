---
format: md
title: "编译报错“Cannot read properties of undefined (reading 'split')”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-184
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-184
last_sync: 2026-06-07
sync_hash: 3068afd5
---
* 场景一：

  **问题现象**

  当前使用的DevEco Studio版本与SDK版本不配套，导致DevEco Studio抛出异常：“TypeError: Cannot read properties of undefined (reading 'split')”。

  ![](./img/ff31b974.png)

  **解决措施**

  1. 访问华为[开发者官网](https://developer.huawei.com/consumer/cn/download/deveco-studio)下载最新版DevEco Studio。
  2. 使用新版本DevEco Studio打开待迁移项目。
  3. 根据DevEco Studio自动弹出的迁移提示进行操作。
     + 点击“Migrate Assistant”功能。

     ![](./img/3f0fe253.png)

     + 从版本列表中选择目标迁移版本。

     ![](./img/b1145724.png)

     + 按照向导完成项目迁移流程。
* 场景二：

  **问题现象**

  当工程级 build-profile.json5 文件未配置工程外模块依赖，而模块级 oh-package.json5 声明了工程外模块依赖并在代码中实际引用时，编译阶段会抛出异常：”Error: Cannot read properties of undefined (reading 'split')”。

  ![](./img/9d55774d.png)

  **解决措施**

  1. 检查下报错子模块中所引用的依赖，确保目标模块已在工程级 build-profile.json5 文件的 modules 字段中正确声明。

     ![](./img/0bbf7bda.png)
  2. 确认当前子模块的 oh-package.json5 中，该模块已添加到 dependencies 依赖列表。

     ![](./img/68aa3c54.png)
  3. 若发现配置缺失，请手动补充完整。删除项目中的 oh\_modules 缓存目录，然后重新执行编译。
* 场景三：

  **问题现象**

  在HAP依赖字节码HAR进行编译的场景下，当import语句中的模块别名与dependencies中声明的别名大小写不一致时，编译系统将无法正确识别该依赖为字节码HAR，进而导致编译错误。

  ![](./img/08990e35.png)

  **解决措施**

  请检查并确保所有import语句的模块别名与其在dependencies中的声明保持完全一致的大小写格式。

  ![](./img/d5fe458e.png)
* 场景四：

  **问题现象**

  在编译字节码HAR时，若将依赖配置于devDependencies下，hvigor构建系统在编译阶段不会收集devDependencies中的依赖项，导致依赖解析失败并引发编译错误。

  ![](./img/f859112b.png)

  **解决措施**

  请将依赖项从devDependencies移至dependencies。

  ![](./img/87b580fa.png)
