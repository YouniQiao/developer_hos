---
format: md
title: "如何通过PanGesture手势或者SwipeGesture手势实现自定义组件的惯性滚动效果"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-33
---


可以通过PanGesture绑定滑动手势事件，并使用[onActionEnd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture#事件)回调里的[velocityY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明)字段生成离手惯性滚动动画。示例如下，具体滚动的速率可以通过调整参数达到预期效果。

```
@Entry
@Component
struct PanGestureExample {
  @State offsetX: number = 0;
  @State offsetY: number = 0;
  @State positionX: number = 0;
  @State positionY: number = 0;
  private panOption: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down });

  build() {
    Column() {
      Text('PanGesture offset: \nX: ' + this.offsetX + '\n' + 'Y: ' + this.offsetY)
    }
    .height(200)
    .width(200)
    .padding(20)
    .border({ width: 3 })
    .margin(30)
    // 以组件左上角为坐标原点进行移动
    .translate({
      x: this.offsetX,
      y: this.offsetY,
      z: 0
    })
    .gesture(
      // 拖动
      PanGesture(this.panOption)
        .onActionStart((event?: GestureEvent) => {
          console.info('Pan start');
        })
        .onActionUpdate((event?: GestureEvent) => {
          if (event) {
            // 最后的位置加上偏移量
            this.offsetX = this.positionX + event.offsetX;
            this.offsetY = this.positionY + event.offsetY;
          }
        })
        .onActionEnd((event) => {
          this.offsetX = this.positionX + event.offsetX;
          this.offsetY = this.positionY + event.offsetY;
          this.positionX = this.positionX + event.offsetX;
          this.positionY = this.positionY + event.offsetY;
          let ySpeed = event.velocityY;
          this.getUIContext().animateTo({
            duration: 1000,
            curve: Curve.LinearOutSlowIn,
            iterations: 1,
            playMode: PlayMode.Normal,
            onFinish: () => {
              console.info('play end');
            }
          }, () => {
            this.offsetY = this.offsetY + ySpeed * 0.2;
            this.positionY = this.positionY + ySpeed * 0.2;
          })
        })
    )
  }
}
```
