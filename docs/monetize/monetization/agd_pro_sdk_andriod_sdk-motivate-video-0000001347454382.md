---
title: "接入激励视频广告"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_andriod_sdk-motivate-video-0000001347454382
format: md
upstream_id: monetize/monetization/agd_pro_sdk_andriod_sdk-motivate-video-0000001347454382
last_sync: 2026-06-07
sync_hash: 6b517439
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
           .mediaExtra(mediaExtra)                    // 个性化参数，透明传递，服务端请求参数
           .orientation(AgdAdConstant.VERTICAL)       // 广告方向
           .soundStatus(AgdAdConstant.SOUND_ON)       // 广告声音状态
           .ver(0)                                    // 协议版本号
           .build();
   ```

   | 参数 | 是否必选 | 数据类型 | 描述 |
   | --- | --- | --- | --- |
   | slotId | 是 | `String` | 广告展示位ID。 |
   | mediaExtra | 否 | JSONObject | 个性化参数。  此字段属于透传字段。请参见[mediaExtra参数说明](#ZH-CN_TOPIC_0000001347454382__zh-cn_topic_0000001388783737_zh-cn_topic_0000001328826822_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p1171111125435)。 |
   | orientation | 否 | int | 广告方向。  默认值：2。  具体orientation参数说明，请参见[orientation参数说明](#ZH-CN_TOPIC_0000001347454382__zh-cn_topic_0000001388783737_zh-cn_topic_0000001328826822_p2095324384813)。 |
   | soundStatus | 否 | int | 广告声音状态。  默认值：2。  具体soundStatus参数说明，请参见[soundStatus参数说明](#ZH-CN_TOPIC_0000001347454382__zh-cn_topic_0000001388783737_zh-cn_topic_0000001328826822_p49559144812)。 |
   | ver | 否 | int | 协议版本号。  作为关键功能的API Level双方约定，默认传0。 |

   **透传字段mediaExtra参数具体说明如下表所示。**

   | 参数 | 数据格式 | 描述 |
   | --- | --- | --- |
   | referrer | `String` | 归因参数，不传递默认slotId。 |
   | personalize | `String(JSON)` | 媒体传递的个性化标识PersonalizeInfo对象的JSON字符串。  具体personalize参数说明，请参见[personalize参数说明](#ZH-CN_TOPIC_0000001347454382__zh-cn_topic_0000001388783737_zh-cn_topic_0000001328826822_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p16235951184419)。 |

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

   **广告声音状态soundStatus参数****具体说明如下表所示。**

   | 参数 | 描述 | 参数值 |
   | --- | --- | --- |
   | AgdAdConstant.SOUND\_ON | 开启声音 | 1 |
   | AgdAdConstant.SOUND\_OFF | 静音 | 2 |

#### 加载广告对象

```
adsContext.loadRewardVideoAd(adSlot, new RewardLoadListener() {
    @Override
    public void onError(int code, String message) {
        // 广告加载失败回调

    }

    @Override
    public void onAdLoad(RewardVideoAd ad) {
        // 广告加载成功回调，开发者可在该回调中调用ad.show(Activity)展示广告

    }
});
```

加载失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#加载失败错误码)。

#### 配置相关事件监听

1. 配置媒体交互回调事件监听器。

   ![](./img/agd_pro_sdk_andriod_sdk-motivate-video-0000001347454382_0.png)

   交互回调事件必须在调用show(Activity)之前注册，否则会影响广告view获取和事件上报。

   ```
   ad.setInteractionListener(new RewardVideoInteractionListener() {
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

       @Override
       public onRewardVerify(RewardInfo rewardInfo) {
           // 奖励发放通知回调

       }

       @Override
       public onAdExpired() {
           // 广告超期回调

       }
   });
   ```

   展示失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#展示失败错误码)。

   **RewardInfo激励信息具体说明如下表所示。**

   | 方法 | 描述 |
   | --- | --- |
   | boolean isVerified() | 获取激励广告验证状态。 |
   | String getName() | 获取奖励名称。 |
   | int getNumber() | 获取奖励数量。 |
   | String getMessage() | 获取奖励发放校验失败描述。 |
   | int getCode() | 获取奖励发放校验请求错误码。 |
   | long getTime() | 获取奖励时长。  单位：秒 |

#### 展示广告

```
ad.show(activity);
```
