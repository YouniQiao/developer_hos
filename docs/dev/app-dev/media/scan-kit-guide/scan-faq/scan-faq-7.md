---
displayed_sidebar: appDevSidebar
title: "条形码识别坐标信息为空"
original_url: /docs/dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-7
format: md
upstream_id: dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-7
last_sync: 2026-06-07
sync_hash: 7ef90445
---
**问题现象**

条形码识别场景下，存在识别成功后，返回位置信息为空的现象。

**解决措施**

由于条形码识别逻辑中，算法返回的位置信息可能位于同一行或同一列，无法返回外接矩形。在此场景下，开发者需判断位置信息是否为空，并进行相应处理。
