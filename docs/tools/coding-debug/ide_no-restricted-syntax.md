---
title: "@typescript-eslint/no-restricted-syntax"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-restricted-syntax
format: md
upstream_id: tools/coding-debug/ide_no-restricted-syntax
last_sync: 2026-06-07
sync_hash: 9b4e6499
---
# @typescript-eslint/no-restricted-syntax

不允许使用指定的（即用户在规则中定义的）语法。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
      "@typescript-eslint/no-restricted-syntax": [
         "error",
         {
             "selector": "FunctionExpression",
             "message": "Function expressions are not allowed."
         },
         {
             "selector": "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
             "message": "setTimeout must always be invoked with two arguments."
         }
     ]
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-restricted-syntax选项](`https://`eslint.nodejs.cn/docs/latest/rules/no-restricted-syntax#选项)。

#### 正例

```
/* eslint no-restricted-syntax: ["error", "ClassDeclaration"] */
export function doSomething() {
  console.info('doSomething');
}
```

#### 反例

```
/* eslint no-restricted-syntax: ["error", "ClassDeclaration"] */
export class CC {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
