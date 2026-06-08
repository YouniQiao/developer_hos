---
title: "@typescript-eslint/require-array-sort-compare"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_require-array-sort-compare
format: md
upstream_id: tools/coding-debug/ide_require-array-sort-compare
last_sync: 2026-06-07
sync_hash: a0814cd9
---
# @typescript-eslint/require-array-sort-compare

要求调用“Array#sort”时，始终提供“compareFunction”。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/require-array-sort-compare": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/require-array-sort-compare选项](`https://`typescript-eslint.nodejs.cn/rules/require-array-sort-compare/#options)。

#### 正例

```
declare const array: string[];

array.sort((a, b) => a.length - b.length);
array.sort((a, b) => a.localeCompare(b));
```

#### 反例

```
declare const array: number[];
declare const stringArray: object[];

array.sort();

// String arrays should be sorted using `String#localeCompare`.
stringArray.sort();
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
