---
title: "@typescript-eslint/dot-notation"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_dot-notation
format: md
---


# @typescript-eslint/dot-notation

强制使用点表示法。

访问属性有两种方式，一种是点表示法（foo.bar），另一种是括号表示法（foo["bar"]），点表示法更易于阅读，这里推荐使用点表示法。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/dot-notation": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/dot-notation选项](`https://`eslint.nodejs.cn/docs/rules/dot-notation#选项)。

#### 正例

```
const foo = {
  bar: 'hello'
};

export const x = foo.bar;
```

#### 反例

```
const foo = {
  bar: 'hello'
};

export const x = foo['bar'];
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
