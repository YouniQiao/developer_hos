---
title: "@performance/monitor-invisible-area-in-image-animation"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-monitor-invisible-area-in-image-animation
format: md
upstream_id: tools/coding-debug/ide-monitor-invisible-area-in-image-animation
last_sync: 2026-06-07
sync_hash: 7d88a024
---
# @performance/monitor-invisible-area-in-image-animation

使用ImageAnimation实现帧动画时，建议显式调用monitorInvisibleArea接口。在动画组件不可见时，会停止动画播放，减少无效的冗余动画带来的负载恶化。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/monitor-invisible-area-in-image-animation": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
@Entry
@Component
struct ImageAnimatorTest {
  @State message: string = 'hello world';
  build() {
    Column() {
      ImageAnimator()
        .images([])
        .borderRadius(10)
        .monitorInvisibleArea(true)
      test1()
    }
    .width('100%')
  }
}
@Builder
function test1() {
  ImageAnimator()
    .monitorInvisibleArea(true)
}
```

#### 反例

```
@Entry
@Component
struct ImageAnimatorTest {
  @State message: string = 'hello world';
  build() {
    Column() {
      ImageAnimator()
        .images([])
        .borderRadius(10)
      test1()
    }
    .width('100%')
  }
}
@Builder
function test1() {
  ImageAnimator()
    .images([])
    .borderRadius(10)
}
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
