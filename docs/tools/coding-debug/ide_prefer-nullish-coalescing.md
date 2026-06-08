---
title: "@typescript-eslint/prefer-nullish-coalescing"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-nullish-coalescing
format: md
upstream_id: tools/coding-debug/ide_prefer-nullish-coalescing
last_sync: 2026-06-07
sync_hash: 1b2c0e31
---
# @typescript-eslint/prefer-nullish-coalescing

强制使用空值合并运算符（??）而不是逻辑运算符。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-nullish-coalescing": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/prefer-nullish-coalescing选项](`https://`typescript-eslint.nodejs.cn/rules/prefer-nullish-coalescing/#options)。

#### 正例

```
function getText1(): string | undefined {
  return 'bar';
}

function getText2(): string | null {
  return 'bar';
}

const foo1: string | undefined = getText1();
export const v1 = foo1 ?? 'a string';

const foo2: string | null = getText2();
export const v2 = foo2 ?? 'a string';
```

#### 反例

```
declare const a: string | null;
declare const b: string | null;

export const c = a || b;
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
