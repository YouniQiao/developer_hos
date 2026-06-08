---
format: md
title: "对于HAP包中引用的HSP包是否有数量限制"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-36
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-36
last_sync: 2026-06-07
sync_hash: 5a25b0ba
---
目前没有明确的数量限制。

但是由于每个加载的[HSP](/docs/dev/app-dev/getting-started/dev-fundamentals/in-app-hsp)都需要占用一定的系统资源，过多的HSP包会对应用的性能造成影响。

如果应用中HSP包数量过多，建议使用单[HAP](/docs/dev/app-dev/getting-started/dev-fundamentals/hap-package)与多[HAR](/docs/dev/app-dev/getting-started/dev-fundamentals/har-package)方案，在动态加载场景中使用HSP。
