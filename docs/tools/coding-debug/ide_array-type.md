---
title: "@typescript-eslint/array-type"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_array-type
format: md
upstream_id: tools/coding-debug/ide_array-type
last_sync: 2026-06-07
sync_hash: 15d7945d
---
# @typescript-eslint/array-type

定义数组类型时，建议使用相同的样式。比如都使用T[]或者都使用Array&lt;T&gt;。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/array-type": "error"
  }
}
```

#### 选项

详情请参考[typescript/array-type 选项](`https://`typescript-eslint.nodejs.cn/rules/array-type#options)。

#### 正例

```
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];

export { x, y };
```

#### 反例

```
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];

export { x, y };
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
