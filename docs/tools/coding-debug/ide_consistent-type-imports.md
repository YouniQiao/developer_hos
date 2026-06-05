---
title: "@typescript-eslint/consistent-type-imports"
displayed_sidebar: toolsSidebar
format: md
---


# @typescript-eslint/consistent-type-imports

强制使用一致的类型导入风格。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/consistent-type-imports": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/consistent-type-imports选项](`https://`typescript-eslint.nodejs.cn/rules/consistent-type-imports/#options)。

#### 正例

```
// 默认推荐使用import type Foo from '...'
import type { Foo } from 'Foo';
import type Bar from 'Bar';
export type T = Foo;
export const x: Bar = 1;
```

#### 反例

```
// 默认推荐使用import type Foo from '...'
import { Foo } from 'Foo';
import Bar from 'Bar';
export type T = Foo;
export const x: Bar = 1;
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
