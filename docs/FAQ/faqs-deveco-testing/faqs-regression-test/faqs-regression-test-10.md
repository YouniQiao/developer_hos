---
format: md
title: "选择测试包后报错提示“应用解析异常，请稍后重试”"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-10
upstream_id: FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-10
last_sync: 2026-06-07
sync_hash: 502f864b
---
在生成可执行测试包时，如果应用名在测试设备上解析失败，请检查打包时填写的应用名是否正确，并确认设备上是否已安装该应用。

如果未填写应用名或应用名错误，请重新生成测试包并创建测试任务。

如果已安装应用且应用名称正确，请在命令行执行“hdc shell bm dump -n 应用名”，以查看应用解析异常的原因。
