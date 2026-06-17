---
title: "@typescript-eslint/no-empty-interface"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-empty-interface
format: md
upstream_id: tools/coding-debug/ide_no-empty-interface
last_sync: 2026-06-07
sync_hash: dafbc18d
---
# @typescript-eslint/no-empty-interface

不允许声明空接口。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-empty-interface": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-empty-interface选项](https://typescript-eslint.nodejs.cn/rules/no-empty-interface/#options)。

#### 正例

```
// an interface with any number of members
interface Foo {
  name: string;
}

interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of an intersection type.
export interface Baz extends Foo, Bar {}
```

#### 反例

```
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
export interface Bar extends Foo {}

// an interface with an empty list of supertypes
export interface Baz {}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
