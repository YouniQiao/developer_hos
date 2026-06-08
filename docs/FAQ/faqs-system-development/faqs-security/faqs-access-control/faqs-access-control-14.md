---
format: md
title: "module.json5配置文件中extensionAbilities和requestPermissions的权限声明有何区别"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-14
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-14
last_sync: 2026-06-07
sync_hash: 0283f3e3
---
* requestPermissions：标识当前应用运行时需向系统申请的权限集合。未在此配置的权限不会生效。
* extensionAbilities.permissions：标识当前ExtensionAbility组件自定义的权限信息。其他应用访问该 ExtensionAbility 时，需申请相应权限，仅用于权限校验。

**参考链接**

[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)
