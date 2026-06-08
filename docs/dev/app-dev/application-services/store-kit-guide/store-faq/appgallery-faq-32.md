---
displayed_sidebar: appDevSidebar
title: "应用内快捷方式加桌返回401错误码"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-faq/appgallery-faq-32
format: md
upstream_id: dev/app-dev/application-services/store-kit-guide/store-faq/appgallery-faq-32
last_sync: 2026-06-07
sync_hash: 9d119130
upstream_hash: e42989025380
---

**问题现象**

调用应用内快捷方式接口加桌时，返回401错误码，参数错误。

**可能原因**

1. [checkPinShortcutPermitted](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#productviewmanagercheckpinshortcutpermitted)校验快捷方式是否允许加桌接口：

   * 上下文context为空。
   * 快捷方式shortcutId长度超过63字节。
   * 快捷方式目标want中参数parameters非基本字符串类型或键值长度超过1024个字符。
   * 静态快捷方式名称资源索引labelResName为空或对应的资源不存在。
   * 静态快捷方式图标资源索引iconResName为空或对应的资源不存在。
   * 自定义快捷方式名称文本label为空或者长度超过255个字符。
   * 自定义快捷方式图标路径foregroundIcon无权限访问或文件不存在。
   * 自定义快捷方式图标格式非png或者webp格式。
   * 自定义快捷方式图标大小超过100KB。
   * 不支持为其他应用添加快捷方式。
2. [requestNewPinShortcut](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#productviewmanagerrequestnewpinshortcut)创建快捷方式加桌接口：

   * 上下文context为空。
   * 快捷方式校验结果tid为空。
