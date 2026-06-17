---
title: "@typescript-eslint/strict-boolean-expressions"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_strict-boolean-expressions
format: md
upstream_id: tools/coding-debug/ide_strict-boolean-expressions
last_sync: 2026-06-07
sync_hash: 58f25ede
---
# @typescript-eslint/strict-boolean-expressions

不允许在布尔表达式中使用非布尔类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/strict-boolean-expressions选项](https://typescript-eslint.nodejs.cn/rules/strict-boolean-expressions/#options)。

#### 正例

```
// nullable values should be checked explicitly against null or undefined
function getNum(): number | undefined {
  return undefined;
}

const num: number | undefined = getNum();
if (num !== undefined) {
  console.log('num is defined');
}

function getStr(): string | null {
  return 'null';
}

const str: string | null = getStr();
if (str !== null) {
  console.log('str is not empty');
}
```

#### 反例

```
// nullable values should be checked explicitly against null or undefined
function getNum(): number | undefined {
  return undefined;
}

const num: number | undefined = getNum();
if (num) {
  console.log('num is defined');
}

function getStr(): string | null {
  return 'null';
}

const str: string | null = getStr();
if (str) {
  console.log('str is not empty');
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
