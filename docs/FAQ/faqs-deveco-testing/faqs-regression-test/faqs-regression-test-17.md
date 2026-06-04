---
title: "测试过程中没有显示用例包步骤且指标监控中无数据"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-regression-test-17
---

在用例脚本中，导入并使用hypium.advance.deveco\_testing.step中的Step函数标记步骤（from hypium.advance.deveco\_testing.step import Step）。否则，回归测试过程中无法正确读取测试步骤，导致指标监控为空。
