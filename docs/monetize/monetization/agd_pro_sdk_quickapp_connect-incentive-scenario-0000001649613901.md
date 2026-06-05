---
title: "对接激励场景解决方案"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_quickapp_connect-incentive-scenario-0000001649613901
format: md
---



#### 前提条件

已联系华为运营配置媒体的激励场景权限。

#### 修改展示位开启激励发放

![](./img/agd_pro_sdk_quickapp_connect-incentive-scenario-0000001649613901_0.png)

仅快应用的原生广告支持对接激励场景解决方案。

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，修改展示位配置，开启激励发放功能，具体请参考[原生创意广告展示位](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_quickapp_media-position-0000001368066693#section127028509202)或[原生图标广告展示位](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_quickapp_media-position-0000001368066693#section10497154414121)。

#### 重新请求广告并下载

1. 使用13.2.1版本或后继版本的快应用引擎或者加载器。
2. 通过SDK提供的请求广告接口，重新请求应用。
3. 使用13.2.1版本或后继版本的应用市场下载广告。

#### 客户端获取激励事件

在原来的[快应用原生广告接口](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-access-agdpro-kit-0000001413917689#section8238213122012)的基础上，新增激励事件接口。

![](./img/agd_pro_sdk_quickapp_connect-incentive-scenario-0000001649613901_1.png)

其他的应用或快应用模板广告不支持对接激励场景解决方案。

![](./img/agd_pro_sdk_quickapp_connect-incentive-scenario-0000001649613901_2.png)

需要在**onLoad**的回调中，配置激励事件的回调。

简单的示例代码如下：

```
      nativeAd.onLoad(data => {
        console.info("ad data loaded: " + JSON.stringify(data));
        this.native.adData = data.adList[0];

        // 监听激励事件回调
        nativeAd.onRewardActive((data) => {
          console.info("onRewardActive：data=" +  JSON.stringify(data));
          prompt.showToast({
            message: 'onRewardActive,数据:' + JSON.stringify(data),
            duration: 2000,
            gravity: 'center'
        })
      });
```
