---
format: md
title: "http模块证书验证的逻辑是什么"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-74
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-74
last_sync: 2026-06-07
sync_hash: c3d4be83
---
http模块进行证书验证时，默认使用系统CA证书进行单向认证。当开发者设置参数caPath时，将优先使用指定的CA证书进行认证，若失败则使用系统默认CA证书认证。两者只要有一个认证通过，则证书验证成功。
