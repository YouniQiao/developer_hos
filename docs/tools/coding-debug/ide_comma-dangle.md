---
title: "@typescript-eslint/comma-dangle"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_comma-dangle
format: md
upstream_id: tools/coding-debug/ide_comma-dangle
last_sync: 2026-06-07
sync_hash: 185cfce8
---
# @typescript-eslint/comma-dangle

允许或禁止使用尾随逗号。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/comma-dangle": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/comma-dangle选项](`https://`eslint.nodejs.cn/docs/rules/comma-dangle#选项)。

#### 正例

```
// 默认不允许尾随逗号
interface MyType {
  bar: string;
  qux: string;
}

const foo: MyType = {
  bar: 'baz',
  qux: 'qux'
};

const arr = ['1', '2'];

export { foo, arr };
```

#### 反例

```
interface MyType {
  bar: string;
  qux: string;
}

const foo: MyType = {
  bar: 'baz',
  qux: 'qux',
};

const arr = ['1', '2',];

export { foo, arr, };
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
