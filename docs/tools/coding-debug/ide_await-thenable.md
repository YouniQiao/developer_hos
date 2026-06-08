---
title: "@typescript-eslint/await-thenable"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_await-thenable
format: md
upstream_id: tools/coding-debug/ide_await-thenable
last_sync: 2026-06-07
sync_hash: 93a3968e
---
# @typescript-eslint/await-thenable

不允许对不是“Thenable”对象的值使用await关键字（“Thenable”表示某个对象拥有“then”方法，比如Promise）。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/await-thenable": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
async function test() {
  await Promise.resolve('value');
}

export { test };
```

#### 反例

```
async function test() {
  await 'value';
}

export { test };
```

#### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
