---
title: "@typescript-eslint/no-shadow"
displayed_sidebar: toolsSidebar
---

# @typescript-eslint/no-shadow

禁止声明与外部作用域变量同名的变量。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-shadow": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/no-shadow选项](`https://`typescript-eslint.nodejs.cn/rules/no-shadow/#options)。

#### 正例

```
/*eslint no-shadow: "error"*/
const a = '1';
export function b() {
  const a1 = '10';
  console.info(a1);
}

export const c = () => {
  const a1 = '10';
  console.info(a1);
};

console.info(a);
```

#### 反例

```
/*eslint no-shadow: "error"*/
const a = '3';
export function b() {
  const a = '10';
  console.info(a);
}

export const c = () => {
  const a = '10';
  console.info(a);
};

console.info(a);
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
