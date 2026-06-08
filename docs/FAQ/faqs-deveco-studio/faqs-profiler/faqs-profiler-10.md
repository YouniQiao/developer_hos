---
format: md
title: "如何解决体检工具诊断结果代码行跳转不准确的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-10
upstream_id: FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-10
last_sync: 2026-06-07
sync_hash: dd09a1d4
---
1. 保证被检测应用和当前工程代码版本保持一致。
2. 在导入检测报告前clean工程删除sourceMaps文件，并且导入过程中编译构建失败，最终会导致源码跳转不准确。需要解决编译失败的问题，重新导入报告。
3. 建议使用debug模式编译生成安装包进行检测。
