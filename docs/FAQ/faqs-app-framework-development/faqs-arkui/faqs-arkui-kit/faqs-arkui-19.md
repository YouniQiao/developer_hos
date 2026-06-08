---
format: md
title: "如何解决两层Tabs出现滑动冲突的情况"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-19
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-19
last_sync: 2026-06-07
sync_hash: 9ed2aeb9
---
通过给外层Tabs设置scrollable(false)实现两层Tabs嵌套底部导航+顶部导航的组合，参考代码如下：

```
@Entry
@Component
struct TwoLayerTabNestedSliding {
  build() {
    Column() {
      Tabs({ barPosition: BarPosition.End }) {
        TabContent() {
          Column() {
            Tabs() {
              TabContent() {
                Text('Focus on content')
              }
              .tabBar('follow with interest')
              TabContent() {
                Text('The content of the game')
              }
              .tabBar('game')
            }
          }
          .backgroundColor('#f08a34')
          .width('100%')
        }
        .tabBar('home page')
        TabContent() {
          Column() {
            Tabs() {
              TabContent() {
                Text('The content of technology')
              }
              .tabBar('science and technology')
              TabContent() {
                Text('The content of the video')
              }
              .tabBar('video')
            }
          }
          .backgroundColor('#f08a34')
          .width('100%')
        }
        .tabBar('find')
      }
      .scrollable(false)
    }
    .width('100%')
    .height('100%')
  }
}
```

[限制导航栏的滑动切换](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs#限制导航栏的滑动切换)
