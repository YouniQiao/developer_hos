---
title: "eqeqeq"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_eqeqeq
format: md
---


# eqeqeq

要求使用===和!==。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "eqeqeq": "error"
  }
}
```

#### 选项

详情请参考[eslint/eqeqeq选项](`https://`eslint.nodejs.cn/docs/latest/rules/eqeqeq#选项)。

#### 正例

```
export function test(a: string, b: string) {
  return a === b;
}
```

#### 反例

```
export function test(a: string, b: string) {
  // Expected '===' and instead saw '=='.
  return a == b;
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
