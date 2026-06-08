---
format: md
title: "生成回归测试包时报错提示“测试套生成失败,请检查setup-regression.py文件后重试”"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-4
upstream_id: FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-4
last_sync: 2026-06-07
sync_hash: 119287a9
---
请检测setup-regression.py文件的写法，使用python setup-regression.py sdist --formats=zip进行本地自验证。验证通过后，再利用插件出包。
