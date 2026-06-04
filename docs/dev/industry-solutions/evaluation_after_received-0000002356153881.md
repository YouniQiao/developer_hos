---
title: "订单状态切换与收货后评价"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/evaluation_after_received-0000002356153881
---

## 场景介绍

订单状态切换与收货后评价是购物比价类应用的高频使用场景之一，如订单状态由待付款切换为待发货、待收货、待评价等，用户点击立即评价后进入评价编辑页面。

本示例使用[@Provide装饰器和@Consume装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)与[@ohos.file.photoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-photoaccesshelper)模块实现订单状态切换与收货后评价功能。

## 效果预览

![](./img/9535e7ca.png "点击放大")

## 实现思路

* 状态通过orderStatuses数组进行统一管理，通过[@Provide装饰器和@Consume装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)实现主页与组件状态同步；子组件中通过点击状态切换相关按钮，完成状态改变与页面跳转逻辑。

  ```
  // 定义状态切换相关按钮点击逻辑
  functionButton(content: string | ResourceStr, isEvaluationButton: boolean, isRightButton: boolean) {
    Button(content)
      .onClick(() => {
        if (isEvaluationButton) {
          // 跳转到评价页
        } else if (isRightButton) {
          // 更新状态
          this.updateOrderStatus();
        }
      });
  }
  ```
* 利用[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)从相册中选择图片，[PhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)获取图片的缩略图，[ImagePacker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker)将图片数据转换为可以在界面上显示的格式，实现图片添加功能；评分功能通过[Rating](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-rating)实现。

  ```
  // 从相册选择图片
  async fileSelect(): Promise<Array<string>> {}
  // 选择图片并处理选择结果
  selectImage(): void {}
  // 获取图片缩略图并进行处理
  async getThumbnail(uri: string) {}
  // PixelMap转换为ArrayBuffer
  async pixelMapToBuffer(pixelMap: image.PixelMap, displayName: string): Promise<ArrayBuffer> {}
  // 评分功能
  Rating({ rating: this.rating, indicator: false })
    .onChange((value: number) => {
      this.rating = value;
    });
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──components
│  │  ├──AddPic.ets                           // 添加图片
│  │  └──SingleOrder.ets                      // 单个订单
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──Constants.ets                        // 常量数据
│  │  ├──ContentInfo.ets                      // ImageInfo接口
│  │  └──GoodsList.ets                        // 商品列表
│  └──pages
│     ├──EvaluationPage.ets                   // 评价页
│     └──MainPage.ets                         // 主页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@Provide装饰器和@Consume装饰器：与后代组件双向同步](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)

[@ohos.file.photoAccessHelper（相册管理模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-photoaccesshelper)

[@ohos.multimedia.image（图片处理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-image)

[Rating](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-rating)

## 代码下载

[订单状态切换与收货后评价示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310125111.24524368579565660895035514225330%3A20260604153211%3A2800%3A3D4D7A8A6B825DEFA3D81A9CB2A5399B2B56C4ADABE007FD03E0E1B04A28EAC4.zip?needInitFileName=true)
