---
format: md
title: "选择测试包后报错提示“测试包解析失败，请查看测试指南排查失败原因”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-regression-test-12
---


出现该报错有以下两种原因：

1. 用户选择的测试包中没有可执行测试用例，请参考测试指南和基于Python的应用UI测试编写测试用例。
2. 选择的可执行测试包中未指定应用名，需使用回归测试插件生成可执行测试包。
