---
format: md
title: "为什么本地的报告文件夹下，稳定性问题的数量比DevEco Testing前端展示的报告问题数量多"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-stability-basic-quality-test/faqs-stability-basic-quality-test-4
upstream_id: FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-stability-basic-quality-test/faqs-stability-basic-quality-test-4
last_sync: 2026-06-07
sync_hash: 3181eaa4
---
目前由于停止采集操作存在延迟，DevEco Testing在停止问题抓取并生成报告后，采集操作仍会运行0-10s，期间抓取的问题并不会呈现在前端上。
