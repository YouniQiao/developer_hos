---
format: md
title: "系统设置只展示应用申请过的权限"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-9
upstream_id: FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-9
last_sync: 2026-06-07
sync_hash: e1522a6f
---
应用的权限设置中只展示应用申请过的权限，该特性是系统规格，只有在调用[requestPermissionsFromUser](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)这个接口，并且用户选择是否授予权限之后，才会在应用详情页显示该权限开关。该设计特性考量：这个可以让用户看到一个更干净的权限管理页面，一个用户从来没有打开过的应用，进入应用详情页面却有众多权限，用户也会不理解。
