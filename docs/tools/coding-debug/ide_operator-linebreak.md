---
title: "@hw-stylistic/operator-linebreak"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_operator-linebreak
format: md
---


# @hw-stylistic/operator-linebreak

强制运算符位于代码行末。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/operator-linebreak": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export function test(n1: number, n2: number): void {
  if (n1 > n2) {
    console.info('hello');
  }

  if (n1 >
    n2) {
    console.info('hello');
  }
}
```

#### 反例

```
export function test(n1: number, n2: number, n3: number): void {
  if (n1 > n2
    // '||' should be placed at the end of the line.
    || n1 < n3) {
    console.info('hello');
  }
}
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
