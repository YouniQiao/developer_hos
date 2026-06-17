---
title: "@typescript-eslint/no-unsafe-argument"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-unsafe-argument
format: md
upstream_id: tools/coding-debug/ide_no-unsafe-argument
last_sync: 2026-06-07
sync_hash: 8db6581a
---
# @typescript-eslint/no-unsafe-argument

不允许将any类型的值作为函数的参数传入。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unsafe-argument": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
declare function foo(arg1: string, arg2: number, arg3: string): void;

foo('a', Number.MAX_VALUE, 'b');

const tuple1 = ['a', Number.MAX_VALUE, 'b'] as const;
foo(...tuple1);

declare function bar(arg1: string, arg2: number, ...rest: readonly string[]): void;
const array: string[] = ['a'];
bar('a', Number.MAX_VALUE, ...array);

declare function baz(arg1: Readonly<Set<string>>, arg2: Readonly<Map<string, string>>): void;
baz(new Set<string>(), new Map<string, string>());
```

#### 反例

```
declare function foo(arg1: string, arg2: number, arg3: string): void;

const anyTyped = Number.MAX_VALUE as any;
// 变量anyTyped是any类型，不允许作为参数传入函数中
foo(...anyTyped);
// 变量anyTyped是any类型，不允许作为参数传入函数中
foo(anyTyped, Number.MAX_VALUE, 'a');

const anyArray: any[] = [];
// 变量anyArray是any类型数组，不允许将数组元素作为参数传入函数中
foo(...anyArray);

const tuple1 = ['a', anyTyped, 'b'] as const;
// 变量anyTyped是any类型数组，不允许将数组元素作为参数传入函数中
foo(...tuple1);
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
