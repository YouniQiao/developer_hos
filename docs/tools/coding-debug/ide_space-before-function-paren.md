---
title: "@typescript-eslint/space-before-function-paren"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_space-before-function-paren
format: md
---


# @typescript-eslint/space-before-function-paren

强制在函数名和括号之间保持一致的空格风格。

![](./img/note_3.0-zh-cn.png)

* 该规则默认要求函数名和括号间有空格。如需修改请参考[选项](#section182418564158)。
* 该规则建议在对.ts文件进行检查时使用。如需检查.ets文件，建议使用[@hw-stylistic/space-before-function-paren](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-space-before-function-paren-stylistic)。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/space-before-function-paren": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/space-before-function-paren选项](`https://`eslint.nodejs.cn/docs/rules/space-before-function-paren#选项)。

#### 正例

```
// 默认foo和(之间需要一个空格
export function foo () {
  // ...
}
```

#### 反例

```
// 默认foo和(之间需要一个空格
export function foo() {
  // ...
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
