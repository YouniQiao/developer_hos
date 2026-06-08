---
title: "@typescript-eslint/prefer-namespace-keyword"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-namespace-keyword
format: md
upstream_id: tools/coding-debug/ide_prefer-namespace-keyword
last_sync: 2026-06-07
sync_hash: 56cc8cc5
upstream_hash: e3ba926845e2
---

# @typescript-eslint/prefer-namespace-keyword

推荐使用“namespace”关键字而不是“module”关键字来声明一个自定义的 TypeScript 模块。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-namespace-keyword": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export namespace Example {}
```

#### 反例

```
export module Example {}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
