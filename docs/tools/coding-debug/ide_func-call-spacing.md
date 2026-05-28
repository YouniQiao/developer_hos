---
title: "@typescript-eslint/func-call-spacing"
displayed_sidebar: toolsSidebar
---

# @typescript-eslint/func-call-spacing

禁止或者要求函数名与函数名后面的括号之间加空格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/func-call-spacing": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/func-call-spacing选项](`https://`eslint.nodejs.cn/docs/rules/func-call-spacing#选项)。

#### 正例

```
function fn() {
  console.log('hello');
}

// 默认不允许函数名称和左括号之间有空格。
fn();
```

#### 反例

```
function fn() {
  console.log('hello');
}

// 默认不允许函数名称和左括号之间有空格。
fn ();

fn
();
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
