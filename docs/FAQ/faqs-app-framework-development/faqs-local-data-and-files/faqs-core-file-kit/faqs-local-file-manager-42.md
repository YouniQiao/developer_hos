---
format: md
title: "不同类型的Context获取fileDir目录的结果不一致"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-42
---


**问题描述**

不同类型的Context获取fileDir目录的结果存在差异。

1. 使用Application的Context获取的目录是“/data/storage/el2/base/files”。

2. 使用Ability的Context获取的目录是“/data/storage/el2/base/haps/entry/files”。

**问题澄清**

当前设计如下：Application可能包含多个Ability，每个Ability对应沙箱目录下的一个hap路径。

**参考链接**

[应用沙箱目录与应用沙箱路径](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory#应用沙箱目录与应用沙箱路径)
