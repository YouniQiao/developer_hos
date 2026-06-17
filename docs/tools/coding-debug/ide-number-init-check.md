---
title: "@performance/number-init-check"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-number-init-check
format: md
upstream_id: tools/coding-debug/ide-number-init-check
last_sync: 2026-06-07
sync_hash: 089baba3
---
# @performance/number-init-check

该规则将检查number是否正确使用。

根据[ArkTS高性能编程实践](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/number-init-check": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
let intNum = 1;
intNum = 2;
let floatNum = 1.3;
floatNum = 2.4;
```

#### 反例

```
let intNum = 1;
// intNum is declared as int. Avoid changing it to float.
intNum = 1.1;
let floatNum = 1.3;
// floatNum is declared as float. Avoid changing it to int.
floatNum = 2;
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
