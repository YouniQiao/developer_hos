---
displayed_sidebar: appDevSidebar
title: "ge::graphStatus"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus
---

graphStatus类型即uint32\_t类型，其不同的状态说明如下。

| 状态 | 值 | 说明 |
| --- | --- | --- |
| ge::GRAPH\_SUCCESS | 0 | 对应函数执行成功。 |
| ge::GRAPH\_FAILED | 0xFFFFFFFF | 对应函数执行失败。 |
| ge::GRAPH\_PARAM\_INVALID | 50331649 | 对应函数执行失败，执行时存在参数无法通过校验的情况。 |
| ge::GRAPH\_NOT\_CHANGED | 1343242304 | 不符合常量折叠的条件时的错误码。 |
| ge::GRAPH\_NODE\_WITHOUT\_CONST\_INPUT | 50331648 | 检测到网络中的某个算子的输入没有const数据的场景。 |
