---
title: "管理Cookie及数据存储"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-cookie-and-data-storage-mgmt
format: md
---


Cookie是服务端生成并发送到客户端的数据。客户端持有Cookie，便于服务端快速识别身份和状态。

当Cookie的SameSite属性未指定时，默认值为SameSite=Lax。这种设置下，Cookie仅在用户导航到其源站点时发送，不会在跨站请求中发送。

## Cookie管理

Web组件提供[WebCookieManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager)类来管理Cookie信息。

下面以[configCookieSync()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookiesync11)接口为例，为“www.example.com”设置单个Cookie的值“value=test”。

```
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('configCookieSync')
        .onClick(() => {
          try {
            webview.WebCookieManager.configCookieSync('https://www.example.com', 'value=test');
          } catch (error) {
            console.error(
              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
          }
        })
      Web({ src: 'www.example.com', controller: this.controller });
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/SetBasicAttrsEvts/SetBasicAttrsEvtsTwo/entry/src/main/ets/pages/CookieManagement.ets#L16-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CookieManagement.ets</a></div>


从API version 22开始，开发者可以通过[setLazyInitializeWebEngine()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#setlazyinitializewebengine22)，为“www.example.com”设置单个Cookie的值“value=test”时跳过初始化ArkWeb内核，以节省[configCookieSync()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookiesync11)接口耗时。其他Cookie的相关功能及使用，请参考[WebCookieManager()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager)接口文档。

```
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';

webview.WebCookieManager.setLazyInitializeWebEngine(true);

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  aboutToAppear(): void {
    try {
      webview.WebCookieManager.configCookieSync('https://www.example.com', 'value=test');
    } catch (error) {
      console.error(
        `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
    }
  }

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/SetBasicAttrsEvts/SetBasicAttrsEvtsTwo/entry/src/main/ets/pages/CookieManagement_LazyInitializeWebEngine.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CookieManagement_LazyInitializeWebEngine.ets</a></div>


![](./img/5fd7a7e6.png)

Cookie每30s周期性保存到磁盘中，也可以使用接口[saveCookieAsync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#savecookieasync)进行强制落盘（PC/2in1和Tablet设备不会持久化session cookie，即使调用saveCookieAsync，也不会将session cookie写入磁盘）。

## 缓存与存储管理

在访问网站时，网络资源请求通常需要较长的时间。开发者可以通过Cache和Dom Storage等手段将资源保存到本地，以提高访问同一网站的速度。

### Cache

使用[cacheMode()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#cachemode)配置页面资源的缓存模式，Web组件为开发者提供四种缓存模式，分别为：

* Default：优先使用未过期的缓存。如果缓存不存在，则从网络获取。
* None：加载资源使用缓存。如果缓存中无该资源，则从网络中获取。
* Online：加载资源不使用缓存。全部从网络中获取。
* Only：只从缓存中加载资源。

在下面的示例中，缓存设置为None模式。

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  @State mode: CacheMode = CacheMode.None;
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
        .cacheMode(this.mode)
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/SetBasicAttrsEvts/SetBasicAttrsEvtsTwo/entry/src/main/ets/pages/Cache_one.ets#L16-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Cache_one.ets</a></div>


为了获取最新资源，开发者可以通过[removeCache()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#removecache)接口清除已经缓存的资源，示例代码如下：

```
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct WebComponent {
  @State mode: CacheMode = CacheMode.None;
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('removeCache')
        .onClick(() => {
          try {
            // 设置为true时同时清除rom和ram中的缓存，设置为false时只清除ram中的缓存
            this.controller.removeCache(true);
          } catch (error) {
            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
          }
        });
      Web({ src: 'www.example.com', controller: this.controller })
        .cacheMode(this.mode)
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/SetBasicAttrsEvts/SetBasicAttrsEvtsTwo/entry/src/main/ets/pages/Cache_two.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Cache_two.ets</a></div>


### DOM Storage

DOM Storage包含了Session Storage和Local Storage两类。Session Storage为临时数据，其存储与释放跟随会话生命周期；Local Storage为持久化数据，保存在应用目录下。两者的数据均通过Key-Value的形式存储，在访问需要客户端存储的页面时使用。开发者可以通过Web组件的属性接口[domStorageAccess()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#domstorageaccess)进行使能配置，示例如下：

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
        .domStorageAccess(true)
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/SetBasicAttrsEvts/SetBasicAttrsEvtsTwo/entry/src/main/ets/pages/DomStorage.ets#L16-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DomStorage.ets</a></div>


## 常见问题

### ArkWeb组件对静态资源文件缓存的大小限制是多少？

ArkWeb对于单个应用静态资源缓存的大小限制是100M。
