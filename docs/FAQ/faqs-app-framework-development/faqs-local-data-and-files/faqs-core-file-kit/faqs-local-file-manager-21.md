---
format: md
title: "通过fileIo.openSync获得的fd，传递到C侧调close后，ArkTS侧fileIo.closeSync是不是不用调了"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-21
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-21
last_sync: 2026-06-07
sync_hash: 0720fe66
---
需要调用ArkTS侧的fileIo.openSync方法获取文件描述符（fd），并将该fd传递给C侧。C侧使用完fd后需要单独调用close关闭。同时，ArkTS侧在使用完文件对象后，仍需调用fileIo.closeSync关闭文件。由于跨语言边界传递的文件描述符需要双方各自管理资源，建议在关闭后设置null值避免重复操作。
