---
format: md
title: "选择测试包后，若出现“请添加测试步骤，具体请参考测试指南”的报错提示，请参考测试指南。"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-regression-test-11
---

回归测试服务按步骤上报执行结果。若测试包中待执行用例未使用Step接口声明步骤信息，则会出现报错。

在用例脚本中，请导入并使用hypium.advance.deveco\_testing.step模块中的Step函数来标记步骤（from hypium.advance.deveco\_testing.step import Step），否则回归测试过程中无法正确读取测试步骤。
