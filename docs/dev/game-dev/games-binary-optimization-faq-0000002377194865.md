---
title: "二进制优化服务FAQ"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-binary-optimization-faq-0000002377194865
format: md
---


## 如何对现网优化后的release包进行堆栈恢复？

debug so的使用场景：release so文件优化后，部分函数的位置可能发生变化，如果现网出现问题需要定位，您需要进行堆栈恢复，则可以对release so对应的debug so进行二进制优化后，再继续问题定位。
