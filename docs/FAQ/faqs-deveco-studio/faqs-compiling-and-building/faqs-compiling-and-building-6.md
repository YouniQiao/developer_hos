---
format: md
title: "编译报错“Module 'xxx' has no exported member 'yyy'”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-6
---


**问题现象**

Stage模板工程编译构建失败，提示 “Module 'xxx' has no exported member 'yyy'” 并且“yyy”符号是由export \* from 'x.js'语法从js文件中导出。

**解决措施**

由于当前Stage工程编译构建期的语法校验工具对js文件不作检查，导致无法正确识别通过export \* from 'x.js'导出的符号，因此在引用这些符号时会提示“Module 'xxx' has no exported member 'yyy'”的错误信息。

如果遇到类似问题，尝试以下解决方法：

* 方法1（推荐使用）： 使用符号显式导出语法，从js文件中re-export符号 。

  export \{ yyy \} from 'x.js'

* 方法2：新增x.js对应的声明文件（.d.ts），并在引用时不指定后缀。

  ![](./img/89db8e1c.png)
