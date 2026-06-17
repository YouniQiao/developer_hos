---
title: "@typescript-eslint/unbound-method"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_unbound-method
format: md
upstream_id: tools/coding-debug/ide_unbound-method
last_sync: 2026-06-07
sync_hash: 53ee8260
---
# @typescript-eslint/unbound-method

强制类作用域中的方法在预期范围内调用。

类方法作为独立变量传递时，不会保留类作用域，“this”不再指代当前类。解决方法是定义为“this: void”或者使用箭头函数。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/unbound-method": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/unbound-method选项](https://typescript-eslint.nodejs.cn/rules/unbound-method/#options)。

#### 正例

```
class MyClass {
  public logUnbound(): void {
    this.logUnbound();
  }

  public logBound = () => {
    this.logUnbound();
  };
}

const instance = new MyClass();

// logBound will always be bound with the correct scope
const logBound = instance.logBound;
logBound();
```

#### 反例

```
class MyClass {
  public logUnbound(): void {
    this.logUnbound();
  }

  public logBound = () => {
    this.logUnbound();
  };
}

const instance = new MyClass();

// logBound will always be bound with the correct scope
const logUnbound = instance.logUnbound;
logUnbound();
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
