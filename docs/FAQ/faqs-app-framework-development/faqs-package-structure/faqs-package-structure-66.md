---
format: md
title: "使用HSP的多包场景下，直接崩溃并产生cppcrash异常日志，错误信息为resolveBufferCallback get buffer failed"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-66
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-66
last_sync: 2026-06-07
sync_hash: 7327604a
---
该问题是由于HSP包解析失败导致的。常见的加载失败原因包括安装失败、文件丢失、缺少权限和安全内存校验失败。开发者可以根据关键日志进行排查。重新安装应用通常可以解决问题。

| 已知关键错误日志 | 修改建议 |
| --- | --- |
| realHapPath is empty | 路径查询失败，无法获取用户安装包信息。建议开发者重新安装应用。 |
| transform real path error: ERROR, pathName: PATH | 使用realpath函数解析路径失败，ERROR表示错误信息，PATH表示hsp路径。建议开发者重新安装应用。 |
| CreateFileMapper, mmap failed, errno ERROR. fileName: FILENAME | 使用mmap函数映射内存失败，ERROR表示错误信息，FILENAME表示文件名。常见原因是系统内存不足、文件未签名。 |
