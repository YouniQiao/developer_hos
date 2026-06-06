---
title: "@performance/hp-performance-no-dynamic-cls-func"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_hp-performance-no-dynamic-cls-func
format: md
---


# @performance/hp-performance-no-dynamic-cls-func

避免动态声明function与class，仅适用于js/ts。

根据[ArkTS编程规范](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-performance-no-dynamic-cls-func": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
function foo(f: boolean, a: number, b: number): number {
  if (f) {
    return add(a, b);
  } else {
    return sub(a, b);
  }
}
function add(c: number, d: number): number {
  return c + d;
}
function sub(e: number, g: number): number {
  return e - g;
}
```

#### 反例

```
function foo(f: boolean, a: number, b: number): number {
  if (f) {
    function add(c: number, d: number): number {
      return c + d;
    }
    return add(a, b);
  } else {
    function sub(e: number, g: number): number {
      return e - g;
    }
    return sub(a, b);
  }
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
