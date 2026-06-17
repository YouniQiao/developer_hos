---
title: "@typescript-eslint/no-unused-expressions"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-unused-expressions
format: md
upstream_id: tools/coding-debug/ide_no-unused-expressions
last_sync: 2026-06-07
sync_hash: f19bc0eb
---
# @typescript-eslint/no-unused-expressions

代码中禁止包含未使用的表达式。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unused-expressions": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-unused-expressions选项](https://eslint.nodejs.cn/docs/rules/no-unused-expressions#选项)。

#### 正例

```
export const v1 = Number.MAX_VALUE;

if ('hello'.length === v1) {
  console.info('hello');
}

{
  const v2 = '0';
  console.info(v2);
}
```

#### 反例

```
Number.MAX_VALUE;

if ('0') '0';

{'0';}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
