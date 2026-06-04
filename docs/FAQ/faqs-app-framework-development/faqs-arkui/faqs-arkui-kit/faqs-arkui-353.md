---
title: "Toggle组件响应点击后会立即渲染并回调，如何实现点击后延迟改变状态"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-353
---

使用hitTestBehavior和setTimeout解决。示例代码如下：

```
@Entry
@Component
struct ToggleDemo {
  @State isDarkMode: boolean = false;
  private timeoutID?: number;

  aboutToDisappear(): void {
    clearTimeout(this.timeoutID);
  }

  build() {
    Column() {
      Column() {
        Toggle({ type: ToggleType.Switch, isOn: $$this.isDarkMode })
          .onChange((isOn: boolean) => {
            console.info('Toggle.onChange:isOn' + isOn);
            this.isDarkMode = isOn;
            this.getUIContext().getHostContext()!.getApplicationContext().setColorMode(this.isDarkMode ? 0 : 1);
          })
      }
      // Set hitTestBehavior property to HitTestMode.Block to block Toggle component's event response.
      .hitTestBehavior(HitTestMode.Block)
      .onClick(() => {
        this.timeoutID = setTimeout(() => {
          this.isDarkMode = !this.isDarkMode;
        }, 1500);
      })
    }
    .width('100%')
    .height('100%')
    .padding(32)
  }
}
```
