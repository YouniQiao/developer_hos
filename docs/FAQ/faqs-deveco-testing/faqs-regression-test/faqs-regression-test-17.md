---
format: md
title: "测试过程中没有显示用例包步骤且指标监控中无数据"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-17
upstream_id: FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-17
last_sync: 2026-06-07
sync_hash: 4d5182c3
upstream_hash: b66f0bad95e8
---

在用例脚本中，导入并使用hypium.advance.deveco\_testing.step中的Step函数标记步骤（from hypium.advance.deveco\_testing.step import Step）。否则，回归测试过程中无法正确读取测试步骤，导致指标监控为空。
