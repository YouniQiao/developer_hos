---
title: "@hw-stylistic/brace-style"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-brace-style-stylistic
format: md
---


# @hw-stylistic/brace-style

强制大括号和语句位于同一行。该规则仅检查.ets文件类型。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/brace-style": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
try {
  // doSomething
} catch (e) {
  // doSomething
} finally {
  // doSomething
}
```

#### 反例

```
try
// Opening curly brace does not appear on the same line as statement before.
{

// Closing curly brace does not appear on the same line as statement after.
}
catch (e)
// Opening curly brace does not appear on the same line as statement before.
{

// Closing curly brace does not appear on the same line as statement after.
}
finally
// Opening curly brace does not appear on the same line as statement before.
{

}
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
