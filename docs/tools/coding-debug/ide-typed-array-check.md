---
title: "@performance/typed-array-check"
displayed_sidebar: toolsSidebar
---

# @performance/typed-array-check

数值数组推荐使用TypedArray。

根据[ArkTS高性能编程实践](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/typed-array-check": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
const typedArray1 = new Int8Array([1, 2, 3]);
const typedArray2 = new Int8Array([4, 5, 6]);
let res = new Int8Array(3);
for (let i = 0; i < 3; i++) {
     res[i] = typedArray1[i] + typedArray2[i];
}
```

#### 反例

```
const typedArray1: number[] = new Array(1, 2, 3);
const typedArray2: number[] = new Array(4, 5, 6);
let res: number[] = new Array(3);
for (let i = 0; i < 3; i++) {
     res[i] = typedArray1[i] + typedArray2[i];
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
