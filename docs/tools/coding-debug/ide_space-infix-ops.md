---
title: "@typescript-eslint/space-infix-ops"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_space-infix-ops
format: md
upstream_id: tools/coding-debug/ide_space-infix-ops
last_sync: 2026-06-07
sync_hash: d266662b
---
# @typescript-eslint/space-infix-ops

运算符前后要求有空格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/space-infix-ops": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/space-infix-ops选项](`https://`eslint.nodejs.cn/docs/rules/space-infix-ops#选项)。

#### 正例

```
declare const a: number;
declare const b: number;
export const c = a + b;
```

#### 反例

```
declare const a: number;
declare const b: number;
export const c = a+b;
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
