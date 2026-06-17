---
title: "@hw-stylistic/comma-spacing"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-comma-spacing-stylistic
format: md
upstream_id: tools/coding-debug/ide-comma-spacing-stylistic
last_sync: 2026-06-07
sync_hash: 2de6b187
---
# @hw-stylistic/comma-spacing

强制数组元素和函数中多个参数之间的逗号后面加空格，逗号前不加空格。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/comma-spacing": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export {bar, arr};

function bar(param1: string, param2: string) {
  return [param1, param2];
}
const arr = ['s1', 's2', 's3', 's4'];
```

#### 反例

```
export {arr};
// A space is required after ','.
// There should be no space before ','.
const arr = ['s1' ,'s2' ,'s3'];
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
