---
format: md
title: "Stage模型与FA模型在进程内对象共享方面有哪些差异"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-50
---


* Stage模型中，多个应用组件共享同一个ArkTS引擎实例。应用组件之间可以方便地共享对象和状态，从而减少了复杂应用运行对内存的占用。
* FA模型中，每个应用组件独享一个ArkTS引擎实例。

Stage模型是主推的应用模型，开发者可以更方便地开发分布式场景下的复杂应用。

**参考链接**

[通过对比认识FA模型与Stage模型](/docs/dev/app-dev/application-framework/ability-kit/application-models#通过对比认识fa模型与stage模型)
