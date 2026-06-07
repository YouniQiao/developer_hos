---
title: "使用智能防跟踪功能"
original_url: /docs/dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention
format: md
---


Web组件支持智能防跟踪功能，即当跟踪型网站作为第三方插入到其他网页时，其发送的网络请求将禁止携带cookie。

* 通过调用[enableIntelligentTrackingPrevention](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#enableintelligenttrackingprevention12)接口启用或关闭Web组件的智能防跟踪功能。默认情况下，该功能未启用。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        Button('enableIntelligentTrackingPrevention')
          .onClick(() => {
            try {
              this.controller.enableIntelligentTrackingPrevention(true);
              console.info('enableIntelligentTrackingPrevention: true');
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

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/EnableIntTrackPrevent.ets#L16-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnableIntTrackPrevent.ets</a></div>

* 调用[isIntelligentTrackingPreventionEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#isintelligenttrackingpreventionenabled12)接口，判断Web组件是否开启了智能防跟踪功能。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        Button('isIntelligentTrackingPreventionEnabled')
          .onClick(() => {
            try {
              let result = this.controller.isIntelligentTrackingPreventionEnabled();
              console.info('result: ' + result);
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

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/IsIntTrackPreventEnabled.ets#L16-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IsIntTrackPreventEnabled.ets</a></div>

* 通过[onIntelligentTrackingPreventionResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onintelligenttrackingpreventionresult12)接口将被拦截的跟踪型域名及其触发网站的域名回调给应用。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        // 需要打开智能防跟踪功能，才会触发onIntelligentTrackingPreventionResult回调
        Button('enableIntelligentTrackingPrevention')
          .onClick(() => {
            try {
              this.controller.enableIntelligentTrackingPrevention(true);
            } catch (error) {
              console.error(
                `ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);
            }
          })
        Web({ src: 'www.example.com', controller: this.controller })
          .onIntelligentTrackingPreventionResult((details) => {
            console.info('onIntelligentTrackingPreventionResult: [websiteHost]= ' + details.host +
              ', [trackerHost]=' + details.trackerHost);
          })
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/OnIntTrackPreventResult.ets#L16-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：OnIntTrackPreventResult.ets</a></div>


智能防跟踪功能提供了一组接口，用于设置绕过该功能的域名列表。这些接口设置的域名列表适用于整个应用，而非特定的Web组件。

* 调用[addIntelligentTrackingPreventionBypassingList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#addintelligenttrackingpreventionbypassinglist12)接口设置绕过域名列表。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        Button('addIntelligentTrackingPreventionBypassingList')
          .onClick(() => {
            try {
              let hostList = ['www.test1.com', 'www.test2.com', 'www.test3.com'];
              webview.WebviewController.addIntelligentTrackingPreventionBypassingList(hostList);
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

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/AddIntTrackPreventByPassList.ets#L15-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：AddIntTrackPreventByPassList.ets</a></div>

* 调用[removeIntelligentTrackingPreventionBypassingList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#removeintelligenttrackingpreventionbypassinglist12)接口删除部分绕过域名列表。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        Button('removeIntelligentTrackingPreventionBypassingList')
          .onClick(() => {
            try {
              let hostList = [ 'www.test1.com', 'www.test2.com' ];
              webview.WebviewController.removeIntelligentTrackingPreventionBypassingList(hostList);
            } catch (error) {
              console.error(
                `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
            }
          })
        Web({ src: 'www.example.com', controller: this.controller })
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/RemoveIntTrackPreventByPassList.ets#L15-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：RemoveIntTrackPreventByPassList.ets</a></div>

* 调用[clearIntelligentTrackingPreventionBypassingList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#clearintelligenttrackingpreventionbypassinglist12)接口清除所有绕过域名列表。

  ```
  import { webview } from '@kit.ArkWeb';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Column() {
        Button('clearIntelligentTrackingPreventionBypassingList')
          .onClick(() => {
            webview.WebviewController.clearIntelligentTrackingPreventionBypassingList();
          })
        Web({ src: 'www.example.com', controller: this.controller })
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ManageWebCompSecPriv/entry/src/main/ets/pages/ClearIntTrackPreventByPassList.ets#L15-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ClearIntTrackPreventByPassList.ets</a></div>
