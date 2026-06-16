---
title: "接入插屏广告"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_andriod_sdk-insert-screen-0000001347773930
format: md
upstream_id: monetize/monetization/agd_pro_sdk_andriod_sdk-insert-screen-0000001347773930
last_sync: 2026-06-07
sync_hash: f2e5d66b
---
#### 创建AdsContext对象

```
// 创建AdsContext对象需要传入Activity对象
AdsContext adsContext = new AdsContext(activity);
```

#### 请求广告

1. 构造请求AdSlot。

   ```
   AdSlot adSlot = new AdSlot.Builder()
           .slotId("slotId")                          // 广告展示位ID
           .darkMode(AgdAdConstant.UIMODE_DEFAULT)    // 深色模式开关
           .mediaExtra(mediaExtra)                    // 个性化参数，透明传递，服务端请求参数
           .orientation(AgdAdConstant.VERTICAL)       // 广告方向
           .build();
   ```

   | 参数 | 是否必选 | 数据类型 | 描述 |
   | --- | --- | --- | --- |
   | slotId | 是 | `String` | 广告展示位ID。 |
   | darkMode | 否 | int | 深色模式开关。  注意：  如果Android版本低于10，则开启深色模式开关，也无法生效。因为Android 10以下版本不支持深色模式。  取值范围：  * 1：深色模式 * 0：浅色模式 * -1：默认不使用深色模式，即跟随系统颜色模式。 默认值：-1  具体darkMode对应的深色模式开关逻辑说明，请参见[深色模式开关参数说明](#ZH-CN_TOPIC_0000001347773930__zh-cn_topic_0000001338423354_zh-cn_topic_0000001379941169_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p8787923403)。 |
   | mediaExtra | 否 | JSONObject | 个性化参数。  此字段属于透传字段。请参见[mediaExtra参数说明](#ZH-CN_TOPIC_0000001347773930__zh-cn_topic_0000001338423354_zh-cn_topic_0000001379941169_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p1171111125435)。 |
   | orientation | 否 | int | 广告方向。  默认值：2  具体orientation参数说明，请参见[orientation参数说明](#ZH-CN_TOPIC_0000001347773930__zh-cn_topic_0000001338423354_zh-cn_topic_0000001379941169_p2095324384813)。 |

   **深色模式开关参数具体说明如下表所示。**

   | 参数 | 描述 | 参数值 |
   | --- | --- | --- |
   | AgdAdConstant.LIGHT\_MODE | 开启浅色模式 | 0 |
   | AgdAdConstant.DARK\_MODE | 开启深色模式 | 1 |
   | AgdAdConstant.UIMODE\_DEFAULT | 不使用深色模式，深色模式跟随系统颜色模式。 | -1 |

   **透传字段mediaExtra参数具体说明如下表所示。**

   | 参数 | 数据格式 | 描述 |
   | --- | --- | --- |
   | referrer | `String` | 归因参数，不传递默认slotId。 |
   | personalize | `String(JSON)` | 媒体传递的个性化标识PersonalizeInfo对象的JSON字符串。  具体personalize参数说明，请参见[personalize参数说明](#ZH-CN_TOPIC_0000001347773930__zh-cn_topic_0000001338423354_zh-cn_topic_0000001379941169_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p16235951184419)。 |

   **透传字段mediaExtra参数****的JSON格式数据如下。**

   ```
   {
     "referrer": "testReferrer",
     "personalize": {
       "personalize": 0,
      }
   }
   ```

   **personalize参数具体说明如下表所示。**

   | 响应的内容 | 值类型 | 是否必传 | 描述 |
   | --- | --- | --- | --- |
   | personalize | `Integer` | 否 | 个性化总开关。  取值范围：  * 0：关闭 * 1：开启 默认值：1 |

   **广告方向orientation参数****具体说明如下表所示。**

   | 参数 | 描述 | 参数值 |
   | --- | --- | --- |
   | AgdAdConstant.HORIZONTAL | 横屏展示 | 1 |
   | AgdAdConstant.VERTICAL | 竖屏展示 | 2 |

#### 加载广告对象

```
adsContext.loadInterstitialAds(adSlot, new InterstitialLoadListener() {
    @Override
    public void onError(int code, String message) {
        // 广告加载失败回调

    }

    @Override
    public void onAdLoad(IInterstitialAd ad) {
        //  广告加载成功回调，开发者可在该回调中调用ad.show(Activity)展示广告

    }
});
```

加载失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#加载失败错误码)。

#### 配置相关事件监听

![](./img/agd_pro_sdk_andriod_sdk-insert-screen-0000001347773930_0.png)

交互回调事件、点击关闭回调事件必须在调用show(Activity)之前注册，否则会影响广告view获取和事件上报。

1. 配置媒体交互回调事件监听器。

   ```
   ad.setInteractionListener(new InterstitialInteractionListener() {
       @Override
       public void onAdClicked() {
           // 广告点击回调

       }

       @Override
       public void onAdShow() {
           // 广告展示成功回调

       }

       @Override
       public onAdShowError(int reason) {
           // 广告展示失败回调

       }

       @Override
       public onAdClose() {
           //广告关闭回调

      }
   });
   ```

   渲染失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#渲染失败错误码)。
2. 配置用户点击关闭广告回调事件监听器。

   ```
   ad.setDislikeClickListener(new DislikeClickListener() {
   	@Override
           public void onDislikeClick() {
           // 用户点击关闭广告回调

       }
   });
   ```

#### 展示广告

```
ad.show(activity);
```
