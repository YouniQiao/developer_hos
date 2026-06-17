---
title: "@hw-stylistic/keyword-spacing"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-keyword-spacing-stylistic
format: md
upstream_id: tools/coding-debug/ide-keyword-spacing-stylistic
last_sync: 2026-06-07
sync_hash: 345c2d9c
---
# @hw-stylistic/keyword-spacing

在关键字前后强制加空格。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/keyword-spacing": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export function test(a: number, b: number) {
  if (a > b) {
    console.info('doSomething');
  } else if (a === b) {
    console.info('doSomething');
  } else {
    console.info('doSomething');
  }

  for (const item of [a, b]) {
    console.info(`${item}`);
  }
}
```

#### 反例

```
export function test(a: number, b: number) {
  // Expected space after 'if'.
  if(a > b) {
    console.info('doSomething');
  // Expected space before 'else'.
  // Expected space after 'if'.
  }else if(a === b) {
    console.info('doSomething');
  // Expected space before 'else'.
  // Expected space after 'else'.
  }else{
    console.info('doSomething');
  }

  // Expected space after 'for'.
  for(const item of [a, b]) {
    console.info(`${item}`);
  }
}
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
