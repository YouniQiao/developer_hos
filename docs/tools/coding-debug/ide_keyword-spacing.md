---
title: "@typescript-eslint/keyword-spacing"
displayed_sidebar: toolsSidebar
format: md
---


# @typescript-eslint/keyword-spacing

强制在关键字之前和关键字之后保持一致的空格风格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/keyword-spacing": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/keyword-spacing选项](`https://`eslint.nodejs.cn/docs/rules/keyword-spacing#选项)。

#### 正例

```
function isSatisfy1(): boolean {
  return true;
}

function isSatisfy2(): boolean {
  return false;
}
// 默认关键字前至少需要一个空格，关键字后至少需要一个空格
if (isSatisfy1()) {
  //...
} else if (isSatisfy2()) {
  //...
} else {
  //...
}
```

#### 反例

```
function isSatisfy1(): boolean {
  return true;
}

function isSatisfy2(): boolean {
  return false;
}
// 默认关键字前至少需要一个空格，关键字后至少需要一个空格
if (isSatisfy1()) {
  //...
}else if(isSatisfy2()) {
  //...
}else{
  //...
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
