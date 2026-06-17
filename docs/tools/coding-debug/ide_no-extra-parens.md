---
title: "@typescript-eslint/no-extra-parens"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-extra-parens
format: md
upstream_id: tools/coding-debug/ide_no-extra-parens
last_sync: 2026-06-07
sync_hash: 96498248
---
# @typescript-eslint/no-extra-parens

禁止使用不必要的括号。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-extra-parens": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-extra-parens选项](https://eslint.nodejs.cn/docs/rules/no-extra-parens#选项)。

#### 正例

```
// 默认不允许在任何表达式中使用不必要的括号
(0).toString();

const result = (() => {
  console.info('arrow function');
}) ? '1' : '2';

(/^a$/).test(result);
```

#### 反例

```
// 默认不允许在任何表达式中使用不必要的括号
const b = 10;
const c = 20;
export const a = (b * c);

export const d = (a * b) + c;

export const myType = typeof (a);
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
