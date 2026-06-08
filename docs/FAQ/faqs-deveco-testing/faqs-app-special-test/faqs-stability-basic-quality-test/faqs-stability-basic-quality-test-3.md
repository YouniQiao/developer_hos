---
format: md
title: "为什么我的应用在开始稳定性测试后一直反复拉起退出，且最后测试中断结束，报告中展示测试中断？"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-stability-basic-quality-test/faqs-stability-basic-quality-test-3
upstream_id: FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-stability-basic-quality-test/faqs-stability-basic-quality-test-3
last_sync: 2026-06-07
sync_hash: 565eba33
---
Testing在执行稳定性测试服务前会打开系统DFX的MemDebug开关，检测应用踩内存问题，当检测到问题后，应用可能闪退，此时测试服务将无法正常遍历应用，导致测试中断，如果您仍然想继续遍历应用其他稳定性问题，请重启设备后，进入稳定性基础质量服务卡片中的高级配置选项-关闭MemDebug开关，重新执行测试服务。
