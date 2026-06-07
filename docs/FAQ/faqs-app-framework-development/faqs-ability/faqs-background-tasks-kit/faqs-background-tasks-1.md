---
format: md
title: "如何在Stage模型中创建后台任务"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-background-tasks-kit/faqs-background-tasks-1
---


**问题现象**

在Stage模型中创建后台任务，可以使用系统提供的API，但第三方应用不支持调用ServiceExtensionAbility。建议使用其他系统接口或方法来实现后台任务。

**解决措施**

后台任务，包括短时任务、长时任务、延迟任务、代理提醒等，例如：在Stage模型中创建长时任务的步骤请参考长时任务[开发步骤](/docs/dev/app-dev/application-framework/background-task-kit/continuous-task#开发步骤)。

**参考链接**

[@ohos.resourceschedule.backgroundTaskManager (后台任务管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager)
