---
title: "@typescript-eslint/no-useless-constructor"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-useless-constructor
format: md
---


# @typescript-eslint/no-useless-constructor

禁止不必要的构造函数。

不必要的构造函数包括：空的构造函数，或者构造函数中直接执行父类构造函数的逻辑。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-useless-constructor": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
class A {
  public name: string = 'hello';
}

export class B {
  public name: string = 'name';

  public constructor() {
    console.info('hello');
  }
}

export class C extends A {
  public constructor() {
    super();
    console.info('hello');
  }
}
```

#### 反例

```
class A {
  public name: string = 'name';

  constructor() {

  }
}

export class B extends A {
  public name: string = 'name';

  constructor() {
    super();
  }
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
