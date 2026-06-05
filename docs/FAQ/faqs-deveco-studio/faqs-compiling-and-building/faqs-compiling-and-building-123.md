---
format: md
title: "如何解决编译报错“Error: cJSON_Parse failed, please check the JSON file.”的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-123
---


**问题现象**

编译错误：“Error: cJSON\\_Parse failed”。请检查JSON文件。

![](./img/ed1ce079.png "点击放大")

**报错原因**

module.json 文件格式不正确。

**常见场景**

1. JSON文件末尾有多余的逗号。

2. 根标签不是大括号\{\}。

**解决方案**

检查报错指向的 JSON 文件格式，例如末尾是否有多余的逗号，根标签是否为大括号 \{\}。
