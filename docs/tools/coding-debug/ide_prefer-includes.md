---
title: "@typescript-eslint/prefer-includes"
displayed_sidebar: toolsSidebar
---

# @typescript-eslint/prefer-includes

强制使用“includes”方法而不是“indexOf”方法。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-includes": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
const str: string = 'hello';
const array: string[] = ['hello'];
const readonlyArray: readonly string[] = ['hello'];

str.includes('h');
array.includes('h');
readonlyArray.includes('h');
```

#### 反例

```
const str: string = 'hello';
const array: string[] = ['hello'];
const readonlyArray: readonly string[] = ['hello'];

const num = -1;
let vv = str.indexOf('h') !== num;
vv = vv && array.indexOf('h') !== num;
vv = vv && readonlyArray.indexOf('h') !== num;
export { vv };
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
