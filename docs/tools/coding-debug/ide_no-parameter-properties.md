---
title: "@typescript-eslint/no-parameter-properties"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-parameter-properties
format: md
---


# @typescript-eslint/no-parameter-properties

禁止在类构造函数中使用参数属性。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-parameter-properties": "error"
  }
}
```

#### 选项

默认禁止在构造函数中使用任何参数属性，如果想要使用某些属性，可以配置额外选项。

allows：接受一个字符串数组，数组中的属性可以使用。字符串支持以下值：

* readonly
* private
* protected
* public
* private readonly
* protected readonly
* public readonly

示例：

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-parameter-properties": ["error", {"allows": ["readonly"]}]
  }
}
```

#### 正例

```
export class Foo {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}
```

#### 反例

```
export class Foo {
  // 默认配置下，参数不允许使用readonly
  public constructor(public readonly name: string) {}
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
