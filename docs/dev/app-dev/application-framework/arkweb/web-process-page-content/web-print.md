---
title: "使用Web组件打印前端页面"
original_url: /docs/dev/app-dev/application-framework/arkweb/web-process-page-content/web-print
format: md
---


Web组件打印HTML页面时可通过W3C标准协议接口和应用接口两种方式实现。

使用打印功能前，请在module.json5中配置相关权限，添加方法请参考[在配置文件中声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#在配置文件中声明权限)。

```
"requestPermissions":[
    {
      "name" : "ohos.permission.PRINT"
    }
  ]
```

## 使用W3C标准协议接口拉起打印

通过创建打印适配器，拉起打印应用，并对当前Web页面内容进行渲染，渲染后生成的PDF文件信息通过文件描述符（fd）传递给打印框架。W3C标准协议接口window.print()方法用于打印当前页面或弹出打印对话框。该方法没有任何参数，只需要在JavaScript中调用即可。

可通过前端CSS样式控制是否打印，例如@media print。再通过Web加载该HTML页面的方式运行。

* print.html页面代码。

  示例一：

  ```
  <!DOCTYPE html>
  <html>

  <head>
      <meta charset="utf-8">
      <title>printTest</title>
      <style>
          @media print {
              h1 {
                  display: none;
              }
          }
      </style>
  </head>

  <body>
      <div>
          <h1><b>
                  <p style="text-align: center;">This is a test page for printing</p>
              </b>
              <hr color="#00cc00" width="95%">
          </h1>
          <button class="Button Button--outline" onclick="window.print();">Print</button>
          <p> content content content </p>
          <div id="printableTable">
              <table>
                  <thead>
                      <tr>
                          <td>Thing</td>
                          <td>Chairs</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1</td>
                          <td>blue</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>green</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <p> content content content </p>
          <p> content content content </p>
      </div>
  </body>
  ```

  示例二（iframe嵌套页面的方式）：

  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>iframe嵌套页面打印</title>
  </head>
  <body>
      <button id="printIframe">打印iframe嵌套页面</button>
      <iframe id="contentIframe" hidden></iframe>

      <script>
          document.getElementById("printIframe").addEventListener("click", () => {
              var ctIframe = document.getElementById("contentIframe");
              if(!ctIframe.contentWindow || !ctIframe.contentWindow.document) {
                console.error("iframe页面初始化失败");
                return;
              }
              var ctIframeDoc = ctIframe.contentWindow.document;
              ctIframeDoc.write("嵌套页面");
              ctIframeDoc.close();
              ctIframe.contentWindow.print();
          });
      </script>
  </body>
  </html>
  ```
* 应用侧代码。

  ```
  import { webview } from '@kit.ArkWeb';

  @Entry
  @Component
  struct Index {
    controller: webview.WebviewController = new webview.WebviewController();

    build() {
      Row() {
        Column() {
          Web({ src: $rawfile('print.html'), controller: this.controller })
            .javaScriptAccess(true)
        }
        .width('100%')
      }
      .height('100%')
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ProcessWebPageCont/entry/src/main/ets/pages/InitiatePrintW3CAPI.ets#L16-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：InitiatePrintW3CAPI.ets</a></div>


## 通过调用应用侧接口拉起打印

应用侧通过调用[createWebPrintDocumentAdapter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#createwebprintdocumentadapter11)创建打印适配器，通过将适配器传入打印的print接口调起打印。

```
import { webview } from '@kit.ArkWeb';
import { BusinessError, print } from '@kit.BasicServicesKit';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('createWebPrintDocumentAdapter')
        .onClick(() => {
          try {
            let webPrintDocadapter = this.controller.createWebPrintDocumentAdapter('example.pdf');
            print.print('example_job_id', webPrintDocadapter, null, this.getUIContext().getHostContext());
          } catch (error) {
            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
          }
        })
      Web({ src: 'www.example.com', controller: this.controller });
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ProcessWebPageCont/entry/src/main/ets/pages/InitiatePrintAppAPI.ets#L16-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：InitiatePrintAppAPI.ets</a></div>
