---
title: "@performance/hp-arkui-limit-refresh-scope（已下线）"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_hp-arkui-limit-refresh-scope
format: md
---


# @performance/hp-arkui-limit-refresh-scope（已下线）

建议减少组件刷新范围。该规则已于5.0.3.500版本下线。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-limit-refresh-scope": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Entry
@Component
struct StackExample6 {
  @State isVisible : boolean = false;
  build() {
    Column() {
      Stack({alignContent: Alignment.Top}) {
        Text().width('100%').height('70%').backgroundColor(0xd2cab3)
          .align(Alignment.Center).textAlign(TextAlign.Center);
        // 此处省略100个相同的背景Text组件
        Stack() {
          if (this.isVisible) {
            Text('New Page').height("70%").backgroundColor(0xd2cab3)
              .align(Alignment.Center).textAlign(TextAlign.Center);
          }
        }.width('100%').height('70%')
      }
      Button("press").onClick(() => {
        this.isVisible = !(this.isVisible);
      })
    }
  }
}
```

#### 反例

```
@Entry
@Component
struct StackExample5 {
  @State isVisible : boolean = false;
  build() {
    Column() {
      Stack({alignContent: Alignment.Top}) {
        Text().width('100%').height('70%').backgroundColor(0xd2cab3)
          .align(Alignment.Center).textAlign(TextAlign.Center);
        // 此处省略100个相同的背景Text组件
        if (this.isVisible) {
          Text('New Page').height("70%").backgroundColor(0xd2cab3)
            .align(Alignment.Center).textAlign(TextAlign.Center);
        }
      }
      Button("press").onClick(() => {
        this.isVisible = !(this.isVisible);
      })
    }
  }
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
