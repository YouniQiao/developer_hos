---
format: md
title: "静态共享包HAR如何引用另一个HAR包中的so文件"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-56
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-56
last_sync: 2026-06-07
sync_hash: 3a8cd7e6
---
可以将so库导出并放置在libs目录下，然后在CMakeLists.txt中添加以下代码，将libnativeSub.so添加到har包中。

```
target_link_directories(entry PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/${OHOS_ARCH}/)
target_link_libraries(entry PUBLIC libace_napi.z.so libc++.a libnativeSub.so)
```
