---
title: "@typescript-eslint/promise-function-async"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_promise-function-async
format: md
upstream_id: tools/coding-debug/ide_promise-function-async
last_sync: 2026-06-07
sync_hash: dd125576
---
# @typescript-eslint/promise-function-async

要求任何返回Promise的函数或方法标记为async。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/promise-function-async": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/promise-function-async选项](https://typescript-eslint.nodejs.cn/rules/promise-function-async/#options)。

#### 正例

```
export const arrowFunctionReturnsPromise = async () => Promise.resolve('value');

export async function functionReturnsPromise() {
  return Promise.resolve('value');
}

// An explicit return type that is not Promise means this function cannot be made async, so it is ignored by the rule
export function functionReturnsUnionWithPromiseExplicitly(
  p: boolean
): string | Promise<string> {
  return p ? 'value' : Promise.resolve('value');
}

export async function functionReturnsUnionWithPromiseImplicitly(p: boolean) {
  return p ? 'value' : Promise.resolve('value');
}
```

#### 反例

```
export const arrowFunctionReturnsPromise = () => Promise.resolve('value');

export function functionReturnsPromise() {
  return Promise.resolve('value');
}

export function functionReturnsUnionWithPromiseImplicitly(p: boolean) {
  return p ? 'value' : Promise.resolve('value');
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
