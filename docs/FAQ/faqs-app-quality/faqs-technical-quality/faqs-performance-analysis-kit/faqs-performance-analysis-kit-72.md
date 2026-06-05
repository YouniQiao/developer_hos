---
format: md
title: "hdc无法安装包"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-72
---


**问题现象**

1. hdc list targets只显示一台手机连接，但执行hdc install安装命令还是报错：[Fail]ExecuteCommand need connect-key? please confirm a device by help info。
2. 安装命令报错：code:9568xxx error: ...。

**可能原因**

1. 设备未正常识别。
2. bm命令返回错误信息。

**解决措施**

1. 可参考常见问题[设备无法识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc#设备无法识别)解决，hdc list targets可正常识别设备后再进行安装包操作。
2. bm工具侧问题可参考[bm工具错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bm-tool#bm工具错误码)分析定位。
