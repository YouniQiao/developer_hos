---
title: "@cross-device-app-dev/sidebar-navigation"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_sidebar-navigation
format: md
---


# @cross-device-app-dev/sidebar-navigation

对于2in1和tablet设备，应将Tabs组件设置为侧边导航栏。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@cross-device-app-dev/sidebar-navigation": "warn"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Entry
@Component
struct Index {
  build() {
    Tabs() {
      TabContent() {
      }.tabBar("tab1")

      TabContent() {
      }.tabBar("tab2")
    }.vertical(true)
  }
}
```

#### 反例

```
@Entry
@Component
struct Index {
  build() {
    Tabs() {
      TabContent() {
      }.tabBar("tab1")

      TabContent() {
      }.tabBar("tab2")
    }
  }
}
```

#### 规则集

```
plugin:@cross-device-app-dev/recommended
plugin:@cross-device-app-dev/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
