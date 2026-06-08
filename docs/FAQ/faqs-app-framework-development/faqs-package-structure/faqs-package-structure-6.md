---
format: md
title: "HSP/HAR包中如何引用外部编译的so库文件"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-6
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-6
last_sync: 2026-06-07
sync_hash: 468ce170
---
1. libxxx.so库文件放入HAR或HSP的libs/arm64-v8a目录。设备类型不同时，需添加对应子目录。新版的arm64为libs/arm64-v8a，老版的arm64为libs/armeabi-v7a，x86模拟器为libs/x86\_64。

   ![](./img/f3ee20b2.png "点击放大")
2. 在src/main/cpp/CMakeLists.txt文件中链接so库文件。例如：target\_link\_libraries(entry PUBLIC libxxx)
