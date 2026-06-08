---
title: "@typescript-eslint/prefer-regexp-exec"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-regexp-exec
format: md
upstream_id: tools/coding-debug/ide_prefer-regexp-exec
last_sync: 2026-06-07
sync_hash: e2d0d3d3
---
# @typescript-eslint/prefer-regexp-exec

如果未提供全局标志（/g），推荐使用“RegExp#exec”，而不是“String#match”。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-regexp-exec": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
/thing/.exec('something');

'some things are just things'.match(/thing/g);

const text = 'something';
const search = /thing/;
search.exec(text);
```

#### 反例

```
'something'.match(/thing/);

'some things are just things'.match(/thing/);

const text = 'something';
const search = /thing/;
text.match(search);
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
