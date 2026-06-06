---
title: "@performance/hp-arkui-no-high-freq-log（已下线）"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hp-arkui-no-high-freq-log
format: md
---


# @performance/hp-arkui-no-high-freq-log（已下线）

建议在正式发布的版本中，注释掉或删除日志打印代码。该规则已于5.0.3.403版本下线。

#### 正例

```
import hilog from '@ohos.hilog';
@Entry
@Component
struct MyComponent{
  build() {
    Column() {
      Scroll()
        .onScroll(() => {
          //正例
          //hilog.info(1001, 'Index', 'onScroll')
          // do something
        })
    }
  }
}
```

#### 反例

```
import hilog from '@ohos.hilog';
@Entry
@Component
struct MyComponent{
  build() {
    Column() {
      Scroll()
        .onScroll(() => {
          // 高频操作中不建议写日志
          hilog.info(1001, 'Index', 'onScroll')
          // do something
        })
    }
  }
}
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
