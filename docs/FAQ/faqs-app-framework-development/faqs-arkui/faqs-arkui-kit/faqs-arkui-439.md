---
format: md
title: "ArcSwiper如何适配表冠"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-439
---


可以滑动的组件需要适配旋转表冠，默认支持的组件在获焦时即可响应表冠事件。

1. 默认支持组件只需要添加.focusable(true)、 .focusOnTouch(true)、.defaultFocus(true)属性获焦即可响应。

   默认支持表冠事件的组件: Slider、DatePicker、TextPicker、 TimePicker、Scroll、List、Grid、WaterFlow、ArcList、Refresh和Swiper。

   示例代码如下：

   ```
   @Entry
   @Component
   struct Index {
     private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

     build() {
       Column() {
         List({ space: 20, initialIndex: 0 }) {
           ForEach(this.arr, (item: number) => {
             ListItem() {
               Button('' + item)
                 .width('100%')
                 .height(100)
                 .fontSize(16)
             }
             .onClick(() => {
             })
           }, (item: string) => item)
         }
         .focusable(true)
         .defaultFocus(true)
         .focusOnTouch(true) // After the list component is focused, it can respond to the sliding control of the rotating crown
         .width('90%')
         .height('100%')
       }
       .width('100%')
       .height('100%')
       .backgroundColor(0xDCDCDC)
       .padding({ top: 5 })
     }
   }
   ```
2. 其他组件可以通过onDigitalCrown监听表冠事件。

   示例代码如下：

   ```
   @Entry
   @Component
   struct CityList {
     @State message: string = 'onDigitalCrown';

     build() {
       Column() {
         Row() {
           Stack() {
             Text(this.message)
               .fontSize(20)
               .fontColor(Color.White)
               .backgroundColor('#262626')
               .textAlign(TextAlign.Center)
               .focusable(true)
               .focusOnTouch(true)
               .defaultFocus(true)
               .borderWidth(2)
               .width(223)
               .height(223)
               .borderRadius(110)
               .onDigitalCrown((event: CrownEvent) => {
                 event.stopPropagation();
                 this.message = 'CrownEvent\n\n' + JSON.stringify(event);
                 console.debug('action:%d, angularVelocity:%f,degree:%f,timestamp:%f', event.action, event.angularVelocity,
                   event.degree, event.timestamp);
               })
           }
         }
       }
     }
   }
   ```
3. List组件旋转表冠在if/else的else场景里不会自动获焦，旋转表冠不生效。在List的onAppear方法中调用requestFocus手动获焦，示例代码如下：

   ```
   @Entry
   @Component
   struct Index {
     private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
     @State isLoading: boolean = true;

     onPageShow(): void {
       setTimeout(() => {
         this.isLoading = false;
       }, 3000)
     }

     build() {
       Column() {
         if (this.isLoading) {
           Text('数据加载中')
         } else {
           List({ space: 20, initialIndex: 0 }) {
             ForEach(this.arr, (item: number) => {
               ListItem() {
                 Button('' + item)
                   .width('100%')
                   .height(100)
                   .fontSize(16)
               }
               .onClick(() => {
               })
             }, (item: string) => item)
           }
           .onAppear(() => {
             try {
               this.getUIContext().getFocusController().requestFocus('test');
             } catch (error) {
               console.error('requestFocus failed code is ' + error.code + 'message is ' + error.message);
             }
           })
           .id('test')
           .focusable(true)
           .defaultFocus(true)
           .focusOnTouch(true) // After the list component is focused, it can respond to the sliding control of the rotating crown
           .width('90%')
           .height('100%')
         }
       }
       .width('100%')
       .height('100%')
       .backgroundColor(0xDCDCDC)
       .padding({ top: 5 })
     }
   }
   ```

**参考链接**

[表冠事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-crown)

[焦点控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus)

[ArcSwiper示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#示例)
