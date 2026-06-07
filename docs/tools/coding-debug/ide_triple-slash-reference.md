---
title: "@typescript-eslint/triple-slash-reference"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_triple-slash-reference
format: md
---


# @typescript-eslint/triple-slash-reference

不允许某些三斜杠引用，推荐使用ES6风格的导入声明。

支持以下三种三斜杠引用方式的检查

```
/// <reference lib="..." />
/// <reference path="..." />
/// <reference types="..." />
```

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/triple-slash-reference": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/triple-slash-reference选项](`https://`typescript-eslint.nodejs.cn/rules/triple-slash-reference/#options)。

#### 正例

```
import { value } from 'code';
export { value };
```

#### 反例

```
/// <reference path="code" />

globalThis.value;
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
