---
displayed_sidebar: appDevSidebar
title: "Attr"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-attr
---

## 函数功能

定义算子属性名称。

## 函数原型

```
OpAttrDef &Attr(const char *name);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| name | 输入 | 算子属性名称。 |

## 返回值

[OpAttrDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-opattrdef)算子属性定义。

## 约束说明

Attr属性名不能与python关键字及内置变量名相同，否则会导致未定义错误。

* python关键字：

  and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, not, or, pass, raise, return, try, while, with, yield, False, None, True, nonlocal, await
* 内置变量名：

  \_\_inputs\_\_, \_\_outputs\_\_, \_\_attrs\_\_, options, bisheng, bisheng\_path, tikcpp\_path, impl\_mode, custom\_compile\_options, custom\_all\_compile\_options, soc\_version, soc\_short, custom\_compile\_options\_soc, custom\_all\_compile\_options\_soc, origin\_func\_name, ascendc\_src\_dir\_ex, ascendc\_src\_dir, ascendc\_src\_file, src, op\_type, code\_channel, op\_info, compile\_op, get\_code\_channel, result, isinstance, attr, get\_current\_build\_config, \_build\_args, get\_dtype\_fmt\_options, shutil, os, get\_kernel\_source
