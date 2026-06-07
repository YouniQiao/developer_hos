---
title: "@typescript-eslint/prefer-reduce-type-parameter"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-reduce-type-parameter
format: md
---


# @typescript-eslint/prefer-reduce-type-parameter

调用“Array#reduce”时推荐使用类型参数而不是类型断言。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-reduce-type-parameter": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
['1', '2', '3'].reduce<readonly string[]>((arr, text) => {
  const newArr = [...arr];
  newArr.push(text);
  return newArr;
}, []);
```

#### 反例

```
['1', '2', '3'].reduce((arr, text) => {
  const newArr = [...arr];
  newArr.push(text);
  return newArr;
}, [] as readonly string[]);
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
