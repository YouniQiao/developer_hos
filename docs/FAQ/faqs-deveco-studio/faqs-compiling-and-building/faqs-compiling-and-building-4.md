---
title: "编译报错“Cannot find module XXX or its corresponding type declarations”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-4
---

* **场景一：**

  **问题现象**

  Stage模板工程编译引用native文件(.so) 提示“Cannot find module XXX or its corresponding type declarations.”。

  **解决措施**

  当前Stage工程在编译构建阶段新增对native文件（.so）导出符号的语法校验。如果现有工程引用了没有对应声明文件（.d.ts）的native文件（.so），语法校验工具会报错，提示找不到对应的声明文件。

  如果出现类似问题，尝试以下解决方法：

  1. 在对应cpp目录下新建types/libxxx目录，并在该目录下新增index.d.ts用于声明native文件的类型符号；新增oh-package.json5配置文件用于校验工具的模块查询。

     ![](./img/f8a943dd.png)

     ![](./img/3254a880.png)
  2. 在native文件引用的模块内的oh-package.json5中添加native文件的本地依赖，并根据DevEco Studio提示点击\*\*Sync Now\*\*同步工程，下图以entry模块引用native文件为例。

     ![](./img/03367f31.png)

* **场景二：**

  **问题现象**

  API 11 Stage模板工程编译失败，提示“Cannot find module '@kit.xxx' or its corresponding type declarations”。

  ![](./img/7160846d.png)

  **问题原因**

  出现该问题的原因是使用DevEco Studio NEXT Developer Preview1及之后版本。新创建的API 11 Stage模型的模板文件中，import方式改为import xxx from '@kit.xxx'。若SDK使用的是HarmonyOS NEXT Developer Preview1之前的版本，将会出现编译报错，因为旧的SDK不支持此类方式导入。

  **解决措施**

  如果出现类似问题，需要对SDK进行更新或更新DevEco Studio。

  + 如果使用的是DevEco Studio NEXT Developer Preview1至HarmonyOS NEXT Developer Beta1（5.0.3.300）之间的版本，在菜单栏点击**Tool > SDK Manager**，将SDK更新至HarmonyOS NEXT Developer Preview1及以上版本后，重新进行编译。
  + 如果使用的是HarmonyOS NEXT Developer Beta1（5.0.3.300）及以上的版本，SDK随DevEco Studio软件包安装，无需单独下载，请在[下载中心](https://developer.huawei.com/consumer/cn/download/)下载并使用新版本DevEco Studio。
* **场景三：**

  **问题现象**

  引用第三方包，构建失败，提示“Cannot find module 'xxx' or its corresponding type declarations”。

  ![](./img/361a9269.png)

  **解决措施**

  进入模块级或工程级的oh-package.json5文件，检查第三方包是否已安装。若未安装，执行ohpm install安装。若已安装，检查“main”字段是否配置正确。若未配置或配置错误，需配置为正确的入口文件。
* **场景四：**

  **问题现象**

  包路径被混淆，代码中又是在引用包路径后面拼接了路径，导致模块引用不到而报错。

  例如：

  ![](./img/1286b9e7.png)

  代码中这样引用

  ![](./img/0df38c81.png)这样引用会找不到模块，导致报错。

  **解决措施**

  修改引用方式，采用推荐的方式。

  ![](./img/46e766fc.png)
* **场景五：**

  **问题现象**

  被引用模块oh-package.json5配置有误，执行了ohpm install 并且成功地安装了依赖，但是还报错模块找不到。

  ![](./img/86a0bc9a.png)

  被引用模块的 oh-package.json5 中配置了错误的types字段。

  该字段优先于main字段。 如果 types 字段配置的不存在，就会报错模块找不到。

  ![](./img/d377a547.png)

  **解决措施**

  如果该包中没有d.ets声明，可以删除这个字段。配置错误或不存在会导致报错。
* **场景六：**

  **问题现象**

  oh-package.json5中dependencies中引入模块的名称和实际使用时import的不一致。

  在代码中“import”时，应使用大写的“HAR”而不是“dependencies”里配置的“har”。务必保持完全一致，否则在Linux系统中会报错，提示模块找不到。

  **解决措施**

  引入和使用改成一致。
* **场景七：**

  **问题现象**

  引用模块的oh-package.json5中main字段值和实际的文件名称大小写不一致。

  **解决措施**

  将main字段和实际文件名称大小写改为一致。
* **场景八**：

  **问题现象**

  Stage模板工程编译构建失败，提示“Cannot find module '@bundle:rollup\_plugin\_ignore\_empty\_module\_placeholder' or its corresponding type declarations”。

  ![](./img/f84de681.png)

  **解决措施**

  该问题源于工程引用了无对应实现文件的.d.ts声明文件。

  1. 在build目录搜索`rollup\_plugin\_ignore\_empty\_module\_placeholder`定位问题模块。

     ![](./img/c4cd0a8c.png)

     在输入栏中输入“rollup\_plugin\_ignore\_empty\_module\_placeholder”，找到问题模块的中间文件。

     ![](./img/b3d7a83a.png)
  2. 在引用类型文件中通过添加type显式声明符号类型。

     ![](./img/d437caf7.png)
  3. 同时排查是否从d.ts/d.ets中引用值类型符号。禁止在声明文件中声明值变量。

     ![](./img/630783b9.png)
