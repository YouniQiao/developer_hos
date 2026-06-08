---
title: "@typescript-eslint/no-unnecessary-type-arguments"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-unnecessary-type-arguments
format: md
upstream_id: tools/coding-debug/ide_no-unnecessary-type-arguments
last_sync: 2026-06-07
sync_hash: 5f9e3bc6
---
# @typescript-eslint/no-unnecessary-type-arguments

当类型参数和默认值相同时，不允许显式使用。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unnecessary-type-arguments": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
function f<T = number>(para: T): void {
  console.info(`${para as number}`);
}
f(Number.MAX_VALUE);
f<string>('hello');

function g<T = number, U = string>(para1: T, para2?: U) {
  if (para2 !== undefined) {
    console.info(`${para2 as string}`);
  }
  console.info(`${para1 as number}`);
}
g<string>('para1', 'para2');
g<number, number>(Number.MAX_VALUE);

class C<T = number> {
  public name: T;

  public constructor(name: T) {
    this.name = name;
  }
}
new C(Number.MAX_VALUE);
new C<string>('hello');
```

#### 反例

```
function f<T = number>(para: T): void {
  console.info(`${para as number}`);
}
// 参数类型默认是number，直接使用f()即可
f<number>(Number.MAX_VALUE);

function g<T = number, U = string>(para1: T, para2?: U) {
  if (para2 !== undefined) {
    console.info(`${para2 as string}`);
  }
  console.info(`${para1 as number}`);
}
// 第二个参数类型默认是string，直接使用g<string>()即可
g<string, string>('hello');

class C<T = number> {
  public meth(para: T): void {
    console.info(`${para as number}`);
  }
}
// 参数类型默认是number，直接使用new C()即可
new C<number>();
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
