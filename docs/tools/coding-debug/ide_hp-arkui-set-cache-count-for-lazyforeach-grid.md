---
title: "@performance/hp-arkui-set-cache-count-for-lazyforeach-grid"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_hp-arkui-set-cache-count-for-lazyforeach-grid
format: md
---


# @performance/hp-arkui-set-cache-count-for-lazyforeach-grid

建议在Grid下使用LazyForEach时设置合理的cacheCount。

滑动丢帧场景下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-set-cache-count-for-lazyforeach-grid": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';

@Entry
@Component
struct MyComponent {
  // 数据源
  private data: MyDataSource = new MyDataSource();

  aboutToAppear() {
    for (let i = 1; i < 1000; i++) {
      this.data.pushData(i);
    }
  }

  build() {
    Column({ space: 5 }) {
      Grid() {
        LazyForEach(this.data, (item: number) => {
          GridItem() {
            // 使用可复用自定义组件
            // 业务逻辑
          }
        }, (item: string) => item.toString())
      }
      // 设置GridItem的缓存数量
      .cachedCount(2)
      .columnsTemplate('1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(10)
      .margin(10)
      .height(500)
      .backgroundColor(0xFAEEE0)
    }
  }
}
```

#### 反例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';

@Entry
@Component
struct MyComponent {
  // 数据源
  private data: MyDataSource = new MyDataSource();

  aboutToAppear() {
    for (let i = 1; i < 1000; i++) {
      this.data.pushData(i);
    }
  }

  build() {
    Column({ space: 5 }) {
      Grid() {
        LazyForEach(this.data, (item: number) => {
          GridItem() {
            // 使用可复用自定义组件
            // 业务逻辑
          }
        }, (item: string) => item.toString())
      }
      // 未设置GridItem的缓存数量
      .columnsTemplate('1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(10)
      .margin(10)
      .height(500)
      .backgroundColor(0xFAEEE0)
    }
  }
}
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
