---
title: "@performance/hp-arkui-use-word-break-to-replace-zero-width-space"
displayed_sidebar: toolsSidebar
format: md
---


# @performance/hp-arkui-use-word-break-to-replace-zero-width-space

建议使用word-break替换零宽空格(\u200b)。

根据ArkUI编程规范，建议修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-use-word-break-to-replace-zero-width-space": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Component
export struct MyComponent {
  private diskName: string = '';

  build() {
    Text(this.diskName)
      .textAlign(TextAlign.Start)
      .wordBreak(WordBreak.BREAK_ALL)
  }
}
```

#### 反例

```
@Component
export struct MyComponent {
  private diskName: string = '';

  build() {
    Text(this.diskName.split("").join("\u200B"))
      .textAlign(TextAlign.Start)
  }
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
