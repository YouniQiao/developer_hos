---
title: "@typescript-eslint/no-dynamic-delete"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-dynamic-delete
format: md
---


# @typescript-eslint/no-dynamic-delete

不允许在computed key表达式上使用“delete”运算符。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-dynamic-delete": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
const container: Record<string, number> = {
  /* ... */
};

// Constant runtime lookups by string index
delete container.aaa;

// Constants that must be accessed by []
delete container['7'];
// '-Infinity' is number.
delete container['-Infinity'];
```

#### 反例

```
const container: Record<string, number> = {
  /* ... */
};

// Can be replaced with the constant equivalents, such as container.aaa
delete container['aaa'];
// 'Infinity' may be a string constant
delete container['Infinity'];

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete container[name];
delete container[name.toUpperCase()];
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
