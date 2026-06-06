---
title: "UI自定义组件兼容性指导"
displayed_sidebar: appCompatibilitySidebar
original_url: https://developer.huawei.com/consumer/cn/doc/design-guides/app-compatibility-ui-component
format: md
---


# UI自定义组件兼容性指导

在UI自定义组件中，状态管理装饰器需要通过自定义组件进行API版本隔离。

例如：在滚动列表滑动复用场景，@ReusableV2自定义组件复用新特性的API是在SDK版本5.1.0(18)提供，为了让应用兼容在基于API版本5.0.0(12)的老设备正常运行，开发者可以使用deviceInfo.sdkApiVersion进行兼容性判断。

（1）开发者需要提供基于API版本5.0.0(12)的自定义组件“V1Component” 及 5.1.0(18)的复用自定义组件“ReuseComponentV2”；

（2）在LazyForEach中使用 deviceInfo.sdkApiVersion进行兼容判断使用哪个自定义组件。

代码示例如下：

```
import { deviceInfo } from '@kit.BasicServicesKit';

class BasicDataSource implements IDataSource {
  private listener: DataChangeListener | undefined = undefined;
  public dataArray: number[] = [];
  totalCount(): number {
    return this.dataArray.length;
  }
  getData(index: number): number {
    return this.dataArray[index];
  }
  registerDataChangeListener(listener: DataChangeListener): void {
    this.listener = listener;
  }
  unregisterDataChangeListener(listener: DataChangeListener): void {
    this.listener = undefined;
  }
}

@Entry
@ComponentV2
struct Index {
  private data: BasicDataSource = new BasicDataSource();
  aboutToAppear(): void {
    for (let index = 1; index < 20; index++) {
      this.data.dataArray.push(index);
    }
  }
  build() {
    List() {
      LazyForEach(this.data, (item: number, index: number) => {
        ListItem() {
          if (deviceInfo.sdkApiVersion >= 18) {
            ReuseComponentV2({ num: item }) // 在ROM的API版本是5.1.0(18)及以上，使用@ReusableV2的复用组件
          } else {
            V1Component({ num: item })  // 在ROM的API版本是5.1.0(18)以下，使用V1的的普通组件
          }
        }
      }, (item: number, index: number) => index.toString())
    }.cachedCount(1)
  }
}

// 状态管理V1的自定义组件
@Component
struct V1Component {   // V1的复用自定义组件
  @State num: number = 0;
  aboutToAppear(): void {
    console.log(`V1Component-- aboutToAppear`)  // 如果是5.1.0(18)以下的版本，V1的会创建
  }
  build() {
    BaseCom(this.num)  // 公共UI
  }
}
// 状态管理V2的自定义组件
@ReusableV2
@ComponentV2
struct ReuseComponentV2 {  // V2的复用自定义组件
  @Param num: number = 0;
  aboutToReuse(): void {
    console.log(`ReuseComponentV2-- aboutToReusableV2`) // 如果是5.1.0(18)及以上的版本，V2复用组件生效
  }

  build() {
    BaseCom(this.num)
  }
}

// 公共的UI
@Builder function BaseCom(num: number) {  // 使用@Builder抽取公共UI组件
  Column() {
    Text('ReuseComponentChild num:' + num.toString())
  }.height(200)
}
```

在上述示例中，通过deviceInfo.sdkApiVersion来判断API版本：

（1）当识别当前设备ROM的API版本是5.1.0(18)及以上版本的设备，V2的复用组件会生效，往下滑动页面，会打印"ReuseComponentV2-- aboutToReusableV2"日志，即“ReuseComponentV2”的组件在滑动过程被复用；

（2）如果是5.1.0(18)以下的版本，会创建V1组件，会打印"V1Component-- aboutToAppear"的日志，即“V1Component”的组件在滑动过程被创建。
