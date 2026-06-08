---
title: "@performance/foreach-args-check"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-foreach-args-check
format: md
upstream_id: tools/coding-debug/ide-foreach-args-check
last_sync: 2026-06-07
sync_hash: 3717fdd0
---
# @performance/foreach-args-check

建议在ForEach参数中设置keyGenerator。

[滑动丢帧场景](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-foreach#键值生成规则)下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/foreach-args-check": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Entry
@Component
struct ForeachTest {
  private data: string[] = ['1', '2', '3'];
  build() {
    RelativeContainer() {
      List() {
        ForEach(this.data, (item: string, index: number) => {
          ListItem() {
            Text(item);
          }
        }, (item: string, index: number) => item)
      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
    .width('100%')
  }
}
```

#### 反例

```
@Entry
@Component
struct ForeachTest {
  private data: string[] = ['1', '2', '3'];
  build() {
    RelativeContainer() {
      List() {
        // ForEach缺少第三个参数，告警
        ForEach(this.data, (item: string, index: number) => {
          ListItem() {
            Text(item);
          }
        })
      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
    .width('100%')
  }
}
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
