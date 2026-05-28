---
title: "@typescript-eslint/no-for-in-array"
displayed_sidebar: toolsSidebar
---

# @typescript-eslint/no-for-in-array

禁止使用 for-in 循环来遍历数组元素。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-for-in-array": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
declare const array: string[];

for (const value of array) {
  console.log(value);
}

array.forEach((value) => {
  console.log(value);
});
```

#### 反例

```
declare const array: string[];

for (const i in array) {
  console.log(array[i]);
}

for (const i in array) {
  console.log(i, array[i]);
}
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
