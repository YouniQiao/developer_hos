---
title: "@hw-stylistic/space-infix-ops"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-space-infix-ops-stylistic
format: md
upstream_id: tools/coding-debug/ide-space-infix-ops-stylistic
last_sync: 2026-06-07
sync_hash: 0231578d
---
# @hw-stylistic/space-infix-ops

强制运算符前后都加空格。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/space-infix-ops": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export function test(size: number) {
  for (let i = 0; i < size; i++) {
    console.info(`${i}`);
  }
}

export function test1(a: boolean, b: boolean, c: boolean) {
  return a || (b && c);
}
```

#### 反例

```
export function test(size: number) {
  // Operator '=' must be spaced.
  // Operator '<' must be spaced.
  for (let i=0; i<size; i++) {
    console.info(`${i}`);
  }
}

export function test1(a: boolean, b: boolean, c: boolean) {
  // Operator '||' must be spaced.
  // Operator '&&' must be spaced.
  return a||b&&c;
}
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
