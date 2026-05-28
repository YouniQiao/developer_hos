---
title: "@typescript-eslint/method-signature-style"
displayed_sidebar: toolsSidebar
---

# @typescript-eslint/method-signature-style

定义函数类型的属性时，强制使用特定的风格。

有两种方式定义对象/接口中函数类型的属性，一种是定义为属性，属性签名是函数，另一种是直接定义为方法。

该规则仅支持对.js/.ts文件进行检查。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/method-signature-style": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/method-signature-style选项](`https://`typescript-eslint.nodejs.cn/rules/method-signature-style/#options)。

#### 正例

```
// 默认要求定义为属性
export interface T1 {
  func: (arg: string) => number;
}
```

#### 反例

```
// 默认要求定义为属性
export interface T1 {
  func(arg: string): number;
}
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
