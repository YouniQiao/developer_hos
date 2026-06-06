---
title: "@performance/hp-arkui-avoid-empty-callback"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_hp-arkui-avoid-empty-callback
format: md
---


# @performance/hp-arkui-avoid-empty-callback

避免设置空的系统回调监听。

根据ArkUI编程规范，建议修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-avoid-empty-callback": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Component
struct MyComponent {
  doSomething() {
    //业务逻辑
  }

  build() {
    Button('Click', { type: ButtonType.Normal, stateEffect: true })
      .onClick(() => {
        this.doSomething()
      })
  }
}
```

#### 反例

```
@Component
struct MyComponent {
  build() {
    Button('Click', { type: ButtonType.Normal, stateEffect: true })
      .onClick(() => {
        // 无业务逻辑
      })
  }
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
