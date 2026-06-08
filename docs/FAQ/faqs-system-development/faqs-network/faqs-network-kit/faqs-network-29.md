---
format: md
title: "http请求结束后是否需要进行销毁"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-29
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-29
last_sync: 2026-06-07
sync_hash: 3c69bba4
---
http请求对象，在请求成功或者失败后，都需要调用destroy()接口进行销毁，以节省资源消耗。详细请参见[使用HTTP访问网络](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/http-request)。
