---
format: md
title: "测试结束后hilog日志一栏显示“-”"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-16
upstream_id: FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-16
last_sync: 2026-06-07
sync_hash: 1d3b4394
---
用户手动停止任务后，Hypium进程会直接关闭，不会生成hilog。如果任务正常结束时缺少hilog，请确认test包中config文件夹下的user\_config.xml文件中的devicelog参数设置为ON。如果没有，请添加该参数，重新打包即可解决。
