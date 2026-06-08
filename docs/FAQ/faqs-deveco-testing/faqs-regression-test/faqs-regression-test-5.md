---
format: md
title: "生成回归测试包时报错提示“dist/testsuite文件夹为临时目录，请确保该文件夹为空”"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-5
upstream_id: FAQ/faqs-deveco-testing/faqs-regression-test/faqs-regression-test-5
last_sync: 2026-06-07
sync_hash: 80aa22c5
---
构建工程时，setuptools会使用临时目录dist/testsuite。请勿在此目录下存放个人文件。
