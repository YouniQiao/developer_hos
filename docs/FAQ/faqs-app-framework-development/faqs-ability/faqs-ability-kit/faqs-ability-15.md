---
format: md
title: "如何获取应用级别的temp路径和files路径"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-15
---


通过上下文 context 获取。例如：

* temp路径：通过 this.context.getApplicationContext().tempDir 获取。
* 文件路径：可通过 this.context.getApplicationContext().filesDir 获取。

**参考链接**

[获取应用文件路径](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#获取应用文件路径)
