---
title: "@typescript-eslint/return-await"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_return-await
format: md
upstream_id: tools/coding-debug/ide_return-await
last_sync: 2026-06-07
sync_hash: 124e23dd
---
# @typescript-eslint/return-await

要求异步函数返回“await”。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/return-await": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/return-await选项](https://typescript-eslint.nodejs.cn/rules/return-await/#options)。

#### 正例

```
export async function validInTryCatch1() {
  try {
    return await Promise.resolve('try');
  } catch (e) {
    return await Promise.resolve('catch');
  }
}
```

#### 反例

```
export async function validInTryCatch1() {
  try {
    return Promise.resolve('try');
  } catch (e) {
    return Promise.resolve('catch');
  }
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
