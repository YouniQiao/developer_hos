---
format: md
title: "HSP包编译之后的.har文件的作用是什么"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-33
---

HSP包编译后会生成.hsp文件和.har文件。.hsp文件用于安装，.har文件仅暴露接口，不包含具体实现。

HSP包中导出的方法头文件位于.har文件中，实现在.hsp文件中。
