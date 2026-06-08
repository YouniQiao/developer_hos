---
title: "@typescript-eslint/no-empty-function"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-empty-function
format: md
upstream_id: tools/coding-debug/ide_no-empty-function
last_sync: 2026-06-07
sync_hash: ad054605
---
# @typescript-eslint/no-empty-function

不允许使用空函数。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-empty-function": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-empty-function选项](`https://`eslint.nodejs.cn/docs/rules/no-empty-function#选项)。

#### 正例

该规则旨在消除空函数。如果函数包含注释，则不会将其视为问题。

```
/*eslint no-empty-function: "error"*/
function foo() {
  // do nothing.
}

const baz = () => {
  foo();
};

export class Bar {
  public meth1() {
    // do something
  }

  public meth2() {
    baz();
  }
}
```

#### 反例

```
/*eslint no-empty-function: "error"*/
function foo() {

}

const baz = () => {

};

export class Bar {
  public meth1() {

  }

  public meth2() {

  }
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
