---
title: "@typescript-eslint/naming-convention"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_naming-convention
format: md
upstream_id: tools/coding-debug/ide_naming-convention
last_sync: 2026-06-07
sync_hash: 0cb6d9ce
---
# @typescript-eslint/naming-convention

强制标识符使用一致的命名风格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/naming-convention": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/naming-convention选项](https://typescript-eslint.nodejs.cn/rules/naming-convention/#options)。

#### 正例

```
// 默认类名为大驼峰的命名风格，函数名为小驼峰的命名风格
export class Bar {
  public meth() {
    console.info('method');
  }
}

export function foo() {
  console.info('function');
}
```

#### 反例

```
// 默认类名为大驼峰的命名风格，函数名为小驼峰的命名风格
export class bar {
  public Meth() {
    console.info('method');
  }
}

export function Foo() {
  console.info('function');
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
