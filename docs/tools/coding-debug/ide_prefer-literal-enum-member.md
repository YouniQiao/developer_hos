---
title: "@typescript-eslint/prefer-literal-enum-member"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_prefer-literal-enum-member
format: md
---


# @typescript-eslint/prefer-literal-enum-member

要求所有枚举成员都定义为字面量值。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-literal-enum-member": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/prefer-literal-enum-member选项](`https://`typescript-eslint.nodejs.cn/rules/prefer-literal-enum-member/#options)。

#### 正例

```
export enum Valid {
  a = 'hello',
  b = 'TestStr' // A regular string
}
```

#### 反例

```
const str = 'Test';
export enum Invalid {
  a = str, // Variable assignment
  b = {}, // Object assignment
  c = `A template literal string`, // Template literal
  d = new Set(1, 2, 3), // Constructor in assignment
  e = 2 + 2 // Expression assignment
}
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
