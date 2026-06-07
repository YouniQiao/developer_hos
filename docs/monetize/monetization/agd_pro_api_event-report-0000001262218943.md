---
title: "调试事件上报"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_api_event-report-0000001262218943
format: md
---



广告曝光和用户点击后，您都需要将相关事件上报到AG。

![](./img/agd_pro_api_event-report-0000001262218943_0.png)

广告曝光及用户点击事件必须通过App客户端上报，不允许通过服务器上报。

#### 曝光事件上报

#### 事件定义

* 广告区域满足曝光像素>=50% 时，开始计时，曝光结束时结束计时并上报曝光事件。
* 重复曝光，已经进入可见范围，满足曝光并上报之后，在没有消失之前，不应该重新上报曝光。已经进入可见范围，满足曝光并上报之后从界面消失，回滚重现展示该元素并满足曝光条件后，应该重新上报。

#### 上报方法

使用返回值[MaterialMeta](/docs/monetize/monetization/agd_pro_api_if_materialmeta-0000001247927004)中showUrl的地址进行曝光回调，当媒体侧产生曝光后，使用GET方式请求以下地址进行曝光上报。

```
https://store-drcn.xxxx.com/agd/mediareport?time=__TIME__&param=xxxxx
```

需要替换的宏参数如下：

| 参数 | 说明 |
| --- | --- |
| time | 曝光时长。单位ms。 |

#### 过滤条件

* 10分钟内，同一次请求同一个推广任务ID，只计一次曝光。
* 曝光不足1秒、icon曝光露出不足50%的，需要过滤。

#### 点击事件上报

#### 事件定义

* 用户点击广告区域时进行点击上报。对于下载类广告：点击“下载”和“打开”按钮时上报install事件；点击其他可交互区域时上报icon事件
* 对于促活类广告：点击所有可打开应用的交互区域，上报 install 或者 icon 事件均可以。

#### 上报方法

用户在媒体上触发点击操作时，使用接口返回的[MaterialMeta](/docs/monetize/monetization/agd_pro_api_if_materialmeta-0000001247927004)中的clickUrl，使用GET方式请求以下地址上报点击事件。

```
https://store-drcn.xxxx.com/agd/mediareport?clickType=__CLICKTYPE__&param=xxxxx
```

需要替换的宏参数如下：

| 参数 | 说明 |
| --- | --- |
| clickType | 枚举值如下：   * icon：点击可交互icon区域 * install：点击可交互安装或打开区域 |

#### 视频播放相关事件上报

用户在媒体内播放广告视频时，需要调用[MaterialMeta](/docs/monetize/monetization/agd_pro_api_if_materialmeta-0000001247927004)中的trackUrl回调地址进行上报：

* feed\_play：视频手动播放第一帧时上报，上报时需要包含视频已播放时长的宏参数(PLAYEDDURATION)，单位为秒。
* feed\_auto\_play：视频自动播放第一帧时上报；上报时需要包含视频已播放时长的宏参数(PLAYEDDURATION)，单位为秒。
* feed\_break：视频播放1帧后，停止视频播放，未完成视频播放，上报时需要包含暂停时视频已播放时长的宏参数(PLAYEDDURATION)，单位为秒。
* feed\_play\_over：视频播放完成。
