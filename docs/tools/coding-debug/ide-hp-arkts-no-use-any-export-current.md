---
title: "@performance/hp-arkts-no-use-any-export-current"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-hp-arkts-no-use-any-export-current
format: md
upstream_id: tools/coding-debug/ide-hp-arkts-no-use-any-export-current
last_sync: 2026-06-07
sync_hash: 72c329f5
---
# @performance/hp-arkts-no-use-any-export-current

避免使用export \* 导出当前module中定义的类型和数据。

冷启动完成时延场景下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkts-no-use-any-export-current": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export class User {
  id?: number;
  name?: string;
}
```

#### 反例

```
class User {
  id?: number;
  name?: string;
}
// 当前文件 User.ets
export * from './User';
// 当前文件 User.ets
export * as XX from './User';
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
