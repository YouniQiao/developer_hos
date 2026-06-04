---
title: "简介"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-anchorinstanceinfo-introduction
---

本类用于描述算子IR定义原型的输入信息与实际输入之间的关系，每个AnchorInstanceInfo对象对应一个IR输入，并记录两个描述信息：instantiation\_num\_和instance\_start\_。其中，instantiation\_num\_描述某个IR输入对应的实际输入个数；instance\_start\_描述某个IR输入在实际输入中的起始序号。当前IR定义提供了三种类型的输入：必选输入、可选输入、动态输入，如下

| 输入类型 | instantiation\_num\_ | instance\_start\_ |
| --- | --- | --- |
| 必选输入 | 必为1，否则报错 | 起始索引从0开始，instance\_start\_[i] = instance\_start\_[i-1] + instantiation\_num\_[i-1] |
| 可选输入 | 有实际输入时为1，否则为0 | 起始索引从0开始，instance\_start\_[i] = instance\_start\_[i-1] + instantiation\_num\_[i-1] |
| 动态输入 | 根据实际输入个数对应0~N个。 | 起始索引从0开始，instance\_start\_[i] = instance\_start\_[i-1] + instantiation\_num\_[i-1] |
