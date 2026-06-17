---
title: "@typescript-eslint/class-literal-property-style"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_class-literal-property-style
format: md
upstream_id: tools/coding-debug/ide_class-literal-property-style
last_sync: 2026-06-07
sync_hash: 29413525
---
# @typescript-eslint/class-literal-property-style

建议类中的字面量属性对外暴露时，保持一致的风格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/class-literal-property-style": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/class-literal-property-style选项](https://typescript-eslint.nodejs.cn/rules/class-literal-property-style/#options)。

#### 正例

```
class Mx {
  public readonly myField1 = 'hello';

  public readonly myField2 = ['a', 'b'];

  public readonly ['myField3'] = 'hello world';

  public get myField4() {
    return `hello ${this.myField1}`;
  }
}

export { Mx };
```

#### 反例

```
class Mx {
  public static get myField1() {
    return '1';
  }

  public get ['myField2']() {
    return 'hello world';
  }
}

export { Mx };
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
