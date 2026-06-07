---
format: md
title: "构建报错“input module releaseType is different”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-110
---


**问题现象**

在打包APP时，如果提示“input module releaseType is different”，请检查输入模块的发布类型是否一致。

![](./img/c0c6e973.png)

**解决措施**

根据报错日志中的Warning信息提示的模块名称，检查模块间的apiReleaseType字段是否一致。

apiReleaseType字段由编译构建工具自动生成并保存在HAP/HSP包的module.json文件中。请确认各模块间该字段是否一致。如果存在不一致，需使用相同版本的SDK重新打包应用的各个模块，然后重新打包APP。

![](./img/2ba69857.png)
