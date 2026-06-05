---
format: md
title: "编译报错“Unrecognized archive format in parameterFile”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-157
---

**错误描述**

parameterFile中包含无法识别的格式。

**可能原因**

使用parameterFile参数化配置的本地依赖既不是目录，也不是.har或.tgz文件。

![](./img/0fb2a329.png)

**解决措施**

将本地依赖修改为模块目录或模块编译后的har/tgz文件。
