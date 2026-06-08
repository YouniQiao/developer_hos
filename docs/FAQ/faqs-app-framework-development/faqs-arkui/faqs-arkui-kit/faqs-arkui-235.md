---
format: md
title: "如何实现下拉刷新和上滑加载的效果"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-235
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-235
last_sync: 2026-06-07
sync_hash: e4f1303d
---
使用[onTouch事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#ontouch)，在putDownPullUpRefresh方法里判断触摸事件是否满足下拉刷新和上滑加载的条件，同时使用条件渲染判断是否显示刷新和加载的布局。

参考代码如下：

```
@Entry
@Component
struct PageToRefresh {
  private currentOffsetY: number = 0;
  @State refreshStatus: boolean = false;
  @State refreshText: string = 'Refreshing';
  @State pullUpText: string = 'loading';
  private timer: number = 0;
  @State isRefreshing: boolean = false;
  @State isCanLoadMore: boolean = false;
  @State ArrData: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  @State newArr: string [] = ['10', '11']

  putDownPullUpRefresh(event?: TouchEvent): void {
    if (event === undefined) {
      return;
    }
    switch (event.type) {
      case TouchType.Down:
        this.currentOffsetY = event.touches[0].y;
        break;
      case TouchType.Move:
        let isDownPull = event.touches[0].y - this.currentOffsetY > 50;
        if (isDownPull && this.isCanLoadMore === false) {
          this.refreshStatus = true;
        }

        if (this.ArrData.length <= 11) {
          this.isCanLoadMore = true;
        }
        break;
      case TouchType.Cancel:
        break;
      case TouchType.Up:
        if (this.refreshStatus) {
          this.timer = setTimeout(() => {
            this.refreshStatus = false;
            this.ArrData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          }, 1500)
        }

        if (this.isCanLoadMore) {
          this.timer = setTimeout(() => {
            this.isCanLoadMore = false;
            this.newArr.forEach((item) => {
              this.ArrData.push(item)
            })
          }, 1000)
        }

        break;
      default:
        break;
    }
  }

  @Builder
  putDown() {
    Row() {
      Image($r('app.media.refreshing'))
        .width(40)
        .height(20)
      Text(this.refreshText).fontSize(16)
    }
    .justifyContent(FlexAlign.Center)
    .width('94%')
    .height('10%')
  }

  @Builder
  PullUp() {
    Row() {
      Image($r('app.media.refreshing'))
        .width(40)
        .height(40)
      Text(this.pullUpText).fontSize(16)
    }
    .justifyContent(FlexAlign.Center)
    .width('94%')
    .height('5%')
  }

  build() {
    Column() {
      Scroll() {
        Column() {
          Text('goods')
          if (this.refreshStatus) {
            this.putDown()
          }
          ForEach(this.ArrData, (item: string) => {
            ListItem() {
              Text(item)
                .height(100)
            }
          }, (item: string) => JSON.stringify(item))
          if (this.isCanLoadMore) {
            this.PullUp()
          }
          if (!this.isCanLoadMore) {
            Text('No more data available at the moment')
          }
        }
      }
      .width('100%')
      .onTouch((event?: TouchEvent) => {
        this.putDownPullUpRefresh(event);
      })
    }
  }
}
```
