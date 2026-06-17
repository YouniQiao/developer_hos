---
title: "@typescript-eslint/no-extra-non-null-assertion"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-extra-non-null-assertion
format: md
upstream_id: tools/coding-debug/ide_no-extra-non-null-assertion
last_sync: 2026-06-07
sync_hash: 8be7da58
upstream_hash: 0a9b3a9c628c
---

# @typescript-eslint/no-extra-non-null-assertion

不允许多余的非空断言。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-extra-non-null-assertion": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
interface BarType1 {
  bar: number;
}

function getFoo(): BarType1 | null {
  return null;
}
const foo: BarType1 | null = getFoo();
export const bar1: number | undefined = foo?.bar;

export function foo1(bar: number | undefined): void {
  const newBar: number = bar ?? Number.MAX_VALUE;
  console.info(`${newBar}`);
}
```

#### 反例

```
interface BarType1 {
  bar: number;
}

const foo1: BarType1 | null = null;
export const bar1 = foo1!!!.bar;

export function foo2(bar: number | undefined) {
  const newBar: number = bar!!!;
  console.info(`${newBar}`);
}

interface BarType2 {
  n: number;
}

export function foo(bar?: BarType2) {
  return bar!?.n;
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
