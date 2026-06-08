---
title: "@typescript-eslint/prefer-function-type"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-function-type
format: md
upstream_id: tools/coding-debug/ide_prefer-function-type
last_sync: 2026-06-07
sync_hash: 22c6109c
---
# @typescript-eslint/prefer-function-type

强制使用函数类型而不是带有签名的对象类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-function-type": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export function foo(example: () => number): number {
  return example();
}

// returns the function itself, not the `this` argument.
export type ReturnsSelf = (arg: string) => ReturnsSelf;

export interface Foo {
  bar: string;
}
```

#### 反例

```
interface GeneratedTypeLiteralInterface {
  (): number;
}

export function foo(example: GeneratedTypeLiteralInterface): number {
  return example();
}

export interface Foo {
  (bar: string): this;
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
