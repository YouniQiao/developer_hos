---
title: "@performance/hp-arkts-no-use-any-export-other"
displayed_sidebar: toolsSidebar
---

# @performance/hp-arkts-no-use-any-export-other

避免使用export \* 导出其他模块中定义的类型和数据。

冷启动完成时延场景下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkts-no-use-any-export-other": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
// 当前文件 User.ets
// 从 Product.ets 文件中导出Product成员
export { Product } from './Product';
class User {
  id?: number;
  name?: string;
}
```

#### 反例

```
// 当前文件 User.ets
// 从 Product.ets 文件中导出所有可导出的成员
export * from './Product';
// 从 Product.ets 文件中导出所有可导出的成员
export * as XX from './Product';
class User {
  id?: number;
  name?: string;
}
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
