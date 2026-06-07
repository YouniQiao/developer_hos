---
format: md
title: "Canvas绘制内容如何动态更新"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-225
---


在声明式语法中，Canvas使用数据驱动UI刷新。可以将变化的数据通过@Watch监听，并绑定自定义的draw()方法。当数据刷新时，@Watch绑定的方法会执行绘制逻辑。

参考代码如下：

```
@Entry
@Component
struct CanvasContentUpdate {
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
  @State @Watch('draw')content: string = '';

  draw() {
    this.context.clearRect(0, 0, 200, 200); // Clean up canvas content
    this.context.fillText(this.content, 50, 50); // Refill
  }

  build() {
    Column() {
      Canvas(this.context)
        .width('100%')
        .height('25%')
        .backgroundColor('#F5DC62')
        .onReady(() => {
          //You can draw content here.
          this.context.font = '55px sans-serif';
          this.context.fillText(this.content, 50, 50);
        })
      TextInput({
        text:$$this.content
      })
    }
    .borderColor('#31525B')
    .borderWidth(12)
    .width('100%')
    .height('100%')
  }
}
```

参考链接

[使用画布绘制自定义图形 (Canvas)](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas)
