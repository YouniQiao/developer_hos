---
title: "@typescript-eslint/no-non-null-asserted-optional-chain"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-non-null-asserted-optional-chain
format: md
upstream_id: tools/coding-debug/ide_no-non-null-asserted-optional-chain
last_sync: 2026-06-07
sync_hash: d351731f
---
# @typescript-eslint/no-non-null-asserted-optional-chain

禁止在可选链表达式之后使用非空断言。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
class CC {
  public bar = 'hello';

  public foo(): void {
    console.info('foo');
  }
}
function getInstance(): CC | undefined {
  return new CC();
}

const instance = getInstance();
console.info(`${instance?.bar}`);
instance?.foo();
```

#### 反例

```
class CC {
  public bar: string = 'hello';

  public foo() {
    console.info('foo');
  }
}

function getInstance(): CC | undefined {
  return new CC();
}

const instance = getInstance();
console.info(`${instance?.bar!}`);
instance?.foo()!;
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
