---
title: "@typescript-eslint/prefer-readonly-parameter-types"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_prefer-readonly-parameter-types
format: md
upstream_id: tools/coding-debug/ide_prefer-readonly-parameter-types
last_sync: 2026-06-07
sync_hash: a9785a11
upstream_hash: e55ead2e1b1d
---

# @typescript-eslint/prefer-readonly-parameter-types

要求将函数参数解析为“只读”类型，以防止参数被修改而产生一些副作用，更多规则详情请参考[prefer-readonly-parameter-types](`https://`typescript-eslint.nodejs.cn/rules/prefer-readonly-parameter-types)。

该规则校验比较严格，由开发者自主判断是否需要修复告警。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-readonly-parameter-types": "warn"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/prefer-readonly-parameter-types选项](`https://`typescript-eslint.nodejs.cn/rules/prefer-readonly-parameter-types/#options)。

#### 正例

```
const index = 0;
export function array1(arg: readonly string[]): void {
  console.info(`${arg[index]}`);
}

export function array2(arg: readonly (readonly string[])[]): void {
  console.info(`${arg[index][index]}`);
}
export function array3(arg: readonly [string, number]): void {
  console.info(`${arg[index][index]}`);
}

export function array4(arg: readonly [readonly string[], number]): void {
  console.info(`${arg[index][index]}`);
}

export function primitive1(arg: string): void {
  console.info(`${arg}`);
}

export function primitive2(arg: number): void {
  console.info(`${arg}`);
}

export function primitive3(arg: boolean): void {
  console.info(`${arg}`);
}

export function primitive5(arg: null): void {
  console.info(`${arg}`);
}

export function primitive6(arg: undefined): void {
  console.info(`${arg}`);
}
```

#### 反例

```
const index = 0;
export function array1(arg: string[]): void {
  console.info(`${arg[index]}`);
}

export function array2(arg: (string[])[]): void {
  console.info(`${arg[index][index]}`);
}
export function array3(arg: [string, number]): void {
  console.info(`${arg[index][index]}`);
}

export function array4(arg: [string[], number]): void {
  console.info(`${arg[index][index]}`);
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
