---
title: "模块描述"
upstream_id: "harmonyos-references/arkts-apis-webview"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:02.206012"
---

# 模块描述

WebView模块是HarmonyOS ArkWeb框架提供的Web控制能力模块，用于在应用侧对Web组件的行为进行编程式控制。该模块不涉及网页的显示渲染（显示能力由Web组件提供），而是聚焦于Web组件运行过程中的控制逻辑，包括页面加载与导航、JavaScript脚本执行与双向消息通信、Cookie与存储管理、下载任务管理、网络请求拦截与自定义响应、代理配置、地理位置权限管理、广告过滤、前进后退缓存、媒体播放托管、PDF生成等能力。

开发者在使用Web组件展示网页内容时，如需在应用侧对网页行为进行干预、监听或扩展（例如：向网页发送消息、拦截特定Scheme请求并返回本地资源、管理下载流程、配置代理、控制缓存策略等），应通过本模块提供的Controller和各类Manager/Delegate来实现。

网页显示的能力请参考[组件描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)。

元服务中使用ArkWeb的说明，请参考[Web组件概述](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomicserviceweb-guidelines)。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 示例效果请以真机运行为准。
- 静态方法必须在用户界面（UI）线程上使用。

该模块提供以下Web控制相关的常用功能：

- [AdsBlockManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-adsblockmanager)：广告过滤配置。
- [BackForwardCacheOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-backforwardcacheoptions)：前进后退缓存配置。
- [BackForwardCacheSupportedFeatures](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-backforwardcachesupportedfeatures)：设置前进后退缓存配置所支持的特性。
- [GeolocationPermissions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-geolocationpermissions)：地理位置权限配置。
- [JsMessageExt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-jsmessageext)：执行JavaScript脚本的结果。
- [MediaSourceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-mediasourceinfo)：媒体源信息。
- [NativeMediaPlayerSurfaceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-nativemediaplayersurfaceinfo)：应用接管媒体播放时渲染信息。
- [PdfData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-pdfdata)：生成的PDF输出数据。
- [ProxyConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxyconfig)：网络代理配置。
- [ProxyController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxycontroller)：网络代理控制器。
- [WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)：Web组件控制器。
- [WebCookieManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager)：Cookie管理。
- [WebDataBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdatabase)：数据库管理。
- [WebDownloadDelegate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdownloaddelegate)：下载任务状态事件。
- [WebDownloadItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdownloaditem)：下载任务。
- [WebDownloadManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdownloadmanager)：下载任务管理。
- [WebHttpBodyStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webhttpbodystream)：HTTP请求体。
- [WebMessageExt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webmessageext)：前端与应用通信数据对象。
- [WebResourceHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webresourcehandler)：资源加载控制。
- [WebSchemeHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler)：指定Scheme的请求拦截器。
- [WebSchemeHandlerRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandlerrequest)：通过拦截器拦截到的请求。
- [WebSchemeHandlerResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandlerresponse)：为拦截到的请求创建自定义响应。
- [WebStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webstorage)：Web组件存储操作接口。
- [BackForwardList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-backforwardlist)：历史信息列表。
- [NativeMediaPlayerBridge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-nativemediaplayerbridge)：托管网页媒体播放器桥接接口。
- [NativeMediaPlayerHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-nativemediaplayerhandler)：托管网页媒体播放器的事件接口。
- [WebMessagePort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webmessageport)：网页前端与应用的消息端口。

#### 需要权限

访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

#### 导入模块

```
import { webview } from '@kit.ArkWeb';
```
 系统能力： SystemCapability.Web.Webview.Core
