---
title: "@typescript-eslint/prefer-for-of"
displayed_sidebar: toolsSidebar
format: md
---


# @typescript-eslint/prefer-for-of

强制使用“for-of”循环而不是标准“for”循环。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-for-of": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
declare const array: string[];

for (const x of array) {
  console.log(x);
}

for (let i = 0; i < array.length; i++) {
  // i is used, so for-of could not be used.
  console.log(`${i}-${array[i]}`);
}
```

#### 反例

```
declare const array: string[];

for (const x of array) {
  console.log(x);
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
