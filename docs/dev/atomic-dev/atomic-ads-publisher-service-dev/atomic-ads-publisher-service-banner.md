---
title: "横幅广告"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-ads-publisher-service-banner
---

## 场景介绍

横幅广告又名Banner广告，是在应用程序顶部、中部或底部占据一个位置的矩形图片，广告内容每隔一段时间会自动刷新。

![](./img/5f5b76c1.png)

## 约束与限制

支持Phone、Tablet、PC/2in1设备。

使用PC/2in1设备时，需要确保设备上智慧营销服务或广告服务的版本在8.4.80.300及以上，版本号可通过选择“设置> 应用和元服务 > 更多应用”查看。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [AutoAdComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-autoadcomponent)({adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, displayOptions: advertising.AdDisplayOptions, interactionListener: advertising.AdInteractionListener}) | 展示广告，通过AdRequestParams、AdOptions进行广告请求参数设置，通过AdDisplayOptions进行广告展示参数设置，通过AdInteractionListener监听广告状态回调。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { advertising, AutoAdComponent } from '@kit.AdsKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 请求和展示广告。

   在开发者的页面中使用AutoAdComponent组件请求和展示横幅广告。

   请求广告关键参数如下所示：

   | 请求广告参数名 | 类型 | 必填 | 说明 |
   | --- | --- | --- | --- |
   | adType | number | 否 | 请求广告类型，横幅广告类型为8。不填默认为原生广告类型。 |
   | adId | string | 是 | 广告位ID。  - 如果仅调测广告，可使用测试广告位ID：h5xkz3mbr2。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入[流量变现官网](https://developer.huawei.com/consumer/cn/monetize)，点击“开始变现”，登录[鲸鸿动能媒体服务平台](https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh)进行申请，具体操作详情请参见[展示位创建](https://developer.huawei.com/consumer/cn/doc/monetize/zhanshiweichuangjian-0000001132700049)。 |
   | adWidth | number | 是 | 广告位宽，单位vp。宽和高支持360\*57和360\*144两种尺寸。 |
   | adHeight | number | 是 | 广告位高，单位vp。宽和高支持360\*57和360\*144两种尺寸。 |

   展示广告关键参数如下所示：

   | 展示广告参数名 | 类型 | 必填 | 说明 |
   | --- | --- | --- | --- |
   | refreshTime | number | 否 | 横幅广告轮播时间。单位ms，取值范围[30000, 120000]。  如果不设置或取值为非数字或小于等于0的数字，则不轮播。设置小于30000的数字取值30000，设置大于120000的数字取值120000。 |

   展示广告通过[AdInteractionListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising#adinteractionlistener)监听广告状态回调，涉及的回调状态如下所示：

   | 回调状态 | 说明 | 使用建议 |
   | --- | --- | --- |
   | onAdOpen | 打开广告。 | - |
   | onAdClick | 点击广告。 | - |
   | onAdClose | 关闭广告。 | 用户关闭广告时触发，需要将广告组件隐藏。回调状态包含了具体的关闭原因，详情见：[data说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising#onstatuschanged)。 |
   | onAdLoad | 广告加载成功。 | - |
   | onAdFail | 广告加载失败。 | 广告加载失败时触发，需要将广告组件隐藏。 |

   示例代码如下所示：

   ```
   @Entry
   @Component
   struct Index {
     @State visibilityState: Visibility = Visibility.None;
     // 广告请求参数
     private adRequestParams: advertising.AdRequestParams = {
       // 'h5xkz3mbr2'为测试专用的广告位ID，App正式发布时需要改为正式的广告位ID
       adId: 'h5xkz3mbr2',
       // 横幅广告类型
       adType: 8,
       // 广告位宽
       adWidth: 360,
       // 广告位高
       adHeight: 57
     };
     // 广告配置参数，开发者可根据项目实际情况设置
     private adOptions: advertising.AdOptions = {};
     // 广告展示参数，开发者可根据项目实际情况设置
     private adDisplayOptions: advertising.AdDisplayOptions = {
       // 广告轮播的时间间隔，单位ms，取值范围[30000, 120000]
       refreshTime: 30000
     };
     private ratio: number = 1;
     // ...

     async aboutToAppear(): Promise<void> {
       // ...
       this.visibilityState = Visibility.Visible;
       if (this.adRequestParams.adWidth && this.adRequestParams.adHeight) {
         this.ratio = this.adRequestParams.adWidth / this.adRequestParams.adHeight;
       }
     }

     build() {
       Stack({ alignContent: Alignment.Bottom }) {
         Row() {
           AutoAdComponent({
             adParam: this.adRequestParams,
             adOptions: this.adOptions,
             displayOptions: this.adDisplayOptions,
             interactionListener: {
               onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {
                 switch (status) {
                   case 'onAdOpen':
                     hilog.info(0x0000, 'testTag', 'Status is onAdOpen');
                     break;
                   case 'onAdClick':
                     hilog.info(0x0000, 'testTag', 'Status is onAdClick');
                     break;
                   case 'onAdClose':
                     hilog.info(0x0000, 'testTag', 'Status is onAdClose');
                     this.visibilityState = Visibility.None;
                     break;
                   case 'onAdLoad':
                     hilog.info(0x0000, 'testTag', 'Status is onAdLoad');
                     break;
                   case 'onAdFail':
                     hilog.error(0x0000, 'testTag', 'Status is onAdFail');
                     this.visibilityState = Visibility.None;
                     break;
                 }
               }
             }
           })
         }
         .width('100%')
         .aspectRatio(this.ratio)
         .visibility(this.visibilityState)
       }
       .width('100%')
       .height('100%')
     }
   }
   ```

## 测试横幅广告

测试横幅广告时，需要使用专门的测试广告位ID来获取测试广告，以避免在测试过程中产生无效的广告点击量。测试广告位ID仅作为功能调试使用，不可用于广告变现。开发者应在应用发布前先进入[流量变现官网](https://developer.huawei.com/consumer/cn/monetize)，点击“开始变现”，登录[鲸鸿动能媒体服务平台](https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh)，申请正式的广告位ID并替换测试广告位ID，具体操作详情请参见[展示位创建](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/zhanshiweichuangjian-0000001132700049)。

以下表格中提供了横幅广告的专用测试广告位ID：

| 广告位类型 | 测试广告位ID | 展示形式 | 比例 | 推广类型 |
| --- | --- | --- | --- | --- |
| 横幅 | h5xkz3mbr2 | 图片 | 19:3 | 应用下载 |
| 横幅 | f9enfij16h | 图片 | 19:3 | 应用促活 |
| 横幅 | u8fqe1ru81 | 图片 | 5:2 | 应用促活 |
