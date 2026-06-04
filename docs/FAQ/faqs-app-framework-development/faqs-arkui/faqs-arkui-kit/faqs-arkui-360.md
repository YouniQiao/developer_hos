---
title: "进入全屏模式后隐藏状态栏，退出全屏模式如何显示状态栏"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-360
---

**问题描述**

当应用进入全屏模式时调用[setWindowLayoutFullscreen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)接口会导致状态栏隐藏，返回非全屏页面时需要重新显示状态栏。

**解决措施**

退出页面时，需要调用[setSpecificSystemBarEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setspecificsystembarenabled11)启用状态栏,再调用[setWindowLayoutFullscreen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)接口刷新布局使设置生效。

参考代码

首先获取窗口对象，可参考：[Interface (Window)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)。

```
// EntryAbility.ets

onWindowStageCreate(windowStage: window.WindowStage): void {
  // Main window is created, set main page for this ability
  hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

  windowStage.loadContent('pages/GridImage', (err) => {
    if (err.code) {
      hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
      return;
    }
    hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');

    let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口
    // 1. 设置窗口全屏
    let isLayoutFullScreen = true;
    windowClass.setWindowLayoutFullScreen(isLayoutFullScreen);
    // 2. 缓存window窗口对象
    AppStorage.setOrCreate('windowClass', windowClass);
  });
}
```

```
import { window } from '@kit.ArkUI';

@Entry
@Component
struct GridImage {
  @State message: string = 'Hello World';
  @State isVisible: boolean = true;
  @State isVisibleButton: boolean = true;
  data: number[] = [];
  windowClass = AppStorage.get<window.Window>('windowClass') as window.Window;

  aboutToAppear(): void {
    for (let i = 0; i < 40; i++) {
      this.data.push(i);
    }
  }

  build() {
    Stack() {
      Grid() {
        ForEach(this.data, (item: number, index: number) => {
          GridItem() {
            Image($r('app.media.startIcon'))
              .width('100%')
              .objectFit(ImageFit.Cover)
              .onClick(() => {
                let isLayoutFullScreen = true;
                this.windowClass.setWindowLayoutFullScreen(isLayoutFullScreen);
                this.windowClass.setSpecificSystemBarEnabled('status', false);
                this.windowClass.setSpecificSystemBarEnabled('navigationIndicator', false);
                this.isVisible = !this.isVisible;
              })
          }
          .aspectRatio(1)
        }, (item: number, index: number) => JSON.stringify(item) + index)
      }
      .visibility(this.isVisible ? Visibility.Visible : Visibility.None)
      .columnsTemplate('1fr 1fr 1fr 1fr')
      .rowsGap(2)
      .columnsGap(2)
      .height('100%')
      .width('100%')

      Image($r('app.media.startIcon'))
        .objectFit(ImageFit.Contain)
        .width('100%')
        .visibility(this.isVisible ? Visibility.None : Visibility.Visible)
        .onClick(() => {
          let isLayoutFullScreen = false;
          this.windowClass.setSpecificSystemBarEnabled('status', true);
          this.windowClass.setSpecificSystemBarEnabled('navigationIndicator', true);
          this.windowClass.setWindowLayoutFullScreen(isLayoutFullScreen);
          this.isVisible = !this.isVisible;
        })
    }
  }
}
```
