---
format: md
title: "编译报错“The metadata field in FormExtensionAbility cannot be left blank or as an empty array”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-164
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-164
last_sync: 2026-06-07
sync_hash: f5c17ef7
---
**错误描述**

FormExtensionAbility中的metadata字段必须非空且不为数组。

**可能原因**

在module.json5文件中，当ExtensionAbility的type为form时，metadata字段可以是空对象或空数组。

![](./img/8f23da7f.png)

**解决措施**

在module.json5中type为form的ExtensionAbility中配置metadata字段，具体配置方式参考[配置ArkTS卡片的配置文件](/docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-configuration)。
