---
title: "@typescript-eslint/prefer-enum-initializers"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-enum-initializers
format: md
---


# @typescript-eslint/prefer-enum-initializers

推荐显式初始化每个枚举成员值。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-enum-initializers": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export enum Status {
  open = 'Open',
  close = 'Close'
}

export enum Direction {
  up = '1',
  down = '2'
}

export enum Color {
  red = 'Red',
  green = 'Green',
  blue = 'Blue'
}
```

#### 反例

```
export enum Status {
  open,
  close
}

export enum Direction {
  up,
  down
}

export enum Color {
  red,
  green,
  blue
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
