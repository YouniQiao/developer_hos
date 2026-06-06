---
title: "@returns"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-arktsdoc-returns
format: md
---


# @returns

@returns标签用于记录函数返回值。

#### 语法

@returns [description]

#### 示例

```
/**
 * Returns the sum of a and b
 * @param a
 * @param b
 * @returns Sum of a and b
 */
export function sum(a: number, b: number): number{
  return a + b;
}
```
