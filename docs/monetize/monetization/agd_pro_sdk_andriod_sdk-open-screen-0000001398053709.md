---
title: "接入开屏广告"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_andriod_sdk-open-screen-0000001398053709
format: md
upstream_id: monetize/monetization/agd_pro_sdk_andriod_sdk-open-screen-0000001398053709
last_sync: 2026-06-07
sync_hash: f782005e
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
            .darkMode(AgdAdConstant.UIMODE_DEFAULT)   // 深色模式开关
           .acceptedSize(width, height)               // 期望模板广告View的Size
           .mediaExtra(mediaExtra)                    // 个性化参数，透明传递，服务端请求参数
           .disableSdkCountDown(false)                // 禁用跳过按钮和禁用倒计时功能开关
           .build();
   ```

   | 参数 | 是否必选 | 数据类型 | 描述 |
   | --- | --- | --- | --- |
   | slotId | 是 | `String` | 广告展示位ID。 |
   | darkMode | 否 | int | 深色模式开关。  注意：  如果Android版本低于10，则开启深色模式开关，也无法生效。因为Android 10以下版本不支持深色模式。  取值范围：  * 1：深色模式 * 0：浅色模式 * -1：默认不使用深色模式，即跟随系统颜色模式。 默认值：-1  具体darkMode对应的深色模式开关逻辑说明，请参见[深色模式开关参数说明](#ZH-CN_TOPIC_0000001398053709__zh-cn_topic_0000001337943802_zh-cn_topic_0000001328495098_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p8787923403)。 |
   | acceptedSize | 否 | (int, int) | 期望模板广告View的Size。  单位：dp  “acceptedSize”参数控制View自适应逻辑如下：  * 情况一：width &lt;= 0或height &lt;= 0   + 如果请求参数width &lt;= 0，则请求到的View宽将自适应为广告卡片宽。   + 如果请求参数height &lt;= 0，则请求到的View高将自适应为广告卡片高。 * 情况二：0 &lt; width &lt; ScreenWidth或0 &lt; height &lt; ScreenHeight   + 如果请求参数0 &lt; width &lt; ScreenWidth，则请求到的View宽为请求参数width的值。   + 如果请求参数0 &lt; height &lt; ScreenHeight，则请求到的View高为请求参数height的值。 * 情况三：width>=ScreenWidth或height>=ScreenHeight   + 如果请求参数width>=ScreenWidth，则请求到的View宽为屏幕宽的值。   + 如果请求参数height>=ScreenHeight，则请求到的View高为屏幕高的值。 |
   | mediaExtra | 否 | JSONObject | 个性化参数。  此字段属于透传字段。请参见[mediaExtra参数说明](#ZH-CN_TOPIC_0000001398053709__zh-cn_topic_0000001337943802_zh-cn_topic_0000001328495098_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p1171111125435)。 |
   | disableSdkCountDown | 否 | `Boolean` | 禁用跳过按钮和禁用倒计时功能开关。  如果此参数设置为“true”，则您需要自定义倒计时逻辑。  取值范围：  * true：禁用。 * false：不禁用 默认值：false |

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
   | personalize | `String(JSON)` | 媒体传递的个性化标识PersonalizeInfo对象的JSON字符串。  具体personalize参数说明，请参见[personalize参数说明](#ZH-CN_TOPIC_0000001398053709__zh-cn_topic_0000001337943802_zh-cn_topic_0000001328495098_zh-cn_topic_0000001356838857_zh-cn_topic_0000001356578689_zh-cn_topic_0000001354444445_p16235951184419)。 |

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

#### 加载广告对象

```
adsContext.loadSplashAds(adSlot, new TemplateLoadListener() {
    @Override
    public void onError(int code, String message) {
        // 广告加载失败回调

    }

    @Override
    public void onAdLoad(List<ITemplateAd> ads) {
        // 广告加载成功回调，以获取到的首条广告为例，开发者可在该回调中调用ads.get(0).render()渲染广告

    }
});
```

加载失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#section198514419559)。

#### 配置相关事件监听

1. 配置媒体交互回调事件监听器。

   ![](./img/agd_pro_sdk_andriod_sdk-open-screen-0000001398053709_0.png)

   交互回调事件必须在调用**render**之前注册，否则会影响广告**view**获取和事件上报。

   ```
   // 以获取到的首条广告为例
   ads.get(0).setInteractionListener((new SplashInteractionListener() {
       @Override
       public void onAdClicked(View view) {
           // 广告点击回调，为保证最佳开屏效果，用户点击跳转到第三方页面后，推荐开发者在该回调中调用ads.get(0).destroy()摧毁广告

       }

       @Override
       public void onAdShow(View view) {
           // 广告展示/曝光回调

       }

       @Override
       public void onRenderFail(View view, int code, String message) {
           // 广告渲染失败回调，开发者可在该回调中调用ads.get(0).destroy()摧毁广告

       }

       @Override
       public void onRenderSuccess(View view, float width, float height) {
           //广告渲染成功回调，开发者可在该回调中把广告的view直接add到要显示的控件中

       }
       @Override
       public void onAdSkip() {
           // 用户点击跳过回调，为保证最佳开屏效果，推荐开发者在该回调中调用ads.get(0).destroy()摧毁广告

       }

       @Override
       public void onAdTimeOver() {
           // 广告播放时间结束回调，为保证最佳开屏效果，推荐开发者在该回调中调用ads.get(0).destroy()摧毁广告

      }
   });
   ```

   渲染失败错误码，具体请参见[错误码](/docs/monetize/monetization/agd_pro_sdk_andriod_errcode-0000001354582769#section6398122931218)。

#### 渲染广告

```
// 以获取到的首条广告为例
ads.get(0).render();
```

#### 展示广告

展示广告需将view直接add到要显示的控件中。

#### 广告销毁

已经展示过且不再使用的广告时，需要调用destroy方法及时对广告进行销毁，避免内存占用过大的情况发生。

```
// 以获取到的首条广告为例
if (ads.get(0) != null) {
    ads.get(0).destroy();
    ads.remove(0);
}
```
