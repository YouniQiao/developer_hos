---
title: "@hw-stylistic/no-tabs"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-tabs
format: md
upstream_id: tools/coding-debug/ide_no-tabs
last_sync: 2026-06-07
sync_hash: bc06a384
---
# @hw-stylistic/no-tabs

禁止使用tab作为缩进，推荐使用空格。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/no-tabs": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export const message: string = 'Hello World';
```

#### 反例

```
export	const	message:	string = 'Hello World';
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
