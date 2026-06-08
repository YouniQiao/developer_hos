---
format: md
title: "如何解决编译报错“Indexed access is not supported for fields(arkts-no-props-by-index)”的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-126
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-126
last_sync: 2026-06-07
sync_hash: 68e67137
---
**问题现象**

动态调用类或接口的字段会导致编译报错：Indexed access is not supported for fields (arkts-no-props-by-index)。

![](./img/d418b162.png)

**解决方案**

修改代码：

```
getValue(breakpoint: string): T {
  return Reflect.get(this.options, breakpoint) as T;
}
```
