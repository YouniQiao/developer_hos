---
format: md
title: "Web组件对H5页面、常用框架VUE、React的页面支持情况，包括本地和网络端的页面"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-38
---


Web组件支持H5页面及常用框架Vue和React。

Web组件支持加载网络页面、本地页面和HTML文本数据。详情及代码示例请参考[使用Web组件加载页面](/docs/dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components)。

加载Vue和React项目时，需先使用“npm run build”命令打包，再通过本地页面加载方式引入。如果上传到服务器，可以通过加载网络页面进行加载。

可参考以下示例代码：

1. 加载网络页面。

   ```
   // xxx.ets
   import { webview } from '@kit.ArkWeb';

   @Entry
   @Component
   struct WebComponent {
     webviewController: webview.WebviewController = new webview.WebviewController();

     build() {
       Column() {
         Button('loadUrl').onClick(() => {
           try { // When the button is clicked, it redirects to www.example1.com via loadUrl
             this.webviewController.loadUrl('www.example1.com');
           } catch (error) {
             console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
           }
         })
         // When the component is created, load www.example.com
         Web({ src: 'www.example.com', controller: this.webviewController })
       }
     }
   }
   ```
2. 加载本地页面时，[resource协议加载本地资源](/docs/dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components#resource协议加载本地资源)：

   ```
   import { webview } from '@kit.ArkWeb';

   @Entry
   @Component
   struct WebComponent {
     webviewController: webview.WebviewController = new webview.WebviewController();

     build() {
       Column() {
         Button('loadUrl')
           .onClick(() => {
             try {
               // When the button is clicked, load the local1.html file from the resources/rawfile directory via resource
               this.webviewController.loadUrl('resource://rawfile/local1.html');
             } catch (error) {
               console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
             }
           })
         // When creating the component, use the resource protocol to load the local file local.html
         Web({ src: 'resource://rawfile/local.html', controller: this.webviewController })
       }
     }
   }
   ```

   在“src/main/resources/rawfile”文件夹下创建local.html和local1.html。

   ```
   <!-- local.html -->
   <!DOCTYPE html>
   <html>
   <body>
   <p>Hello World</p>
   </body>
   </html>
   ```

   ```
   <!-- local1.html -->
   <!DOCTYPE html>
   <html>
   <body>
   <p>Hello World, local1.html</p>
   </body>
   </html>
   ```
3. 加载HTML格式的文本数据。

   ```
   import { webview } from '@kit.ArkWeb';

   @Entry
   @Component
   struct WebComponent {
     controller: webview.WebviewController = new webview.WebviewController();

     build() {
       Column() {
         Button('loadData')
           .onClick(() => {
             try {
               // When the button is clicked, load HTML-formatted text data using loadData
               this.controller.loadData(
                 "<html><body bgcolor=\"white\">Source:<pre>source</pre></body></html>",
                 "text/html",
                 "UTF-8"
               );
             } catch (error) {
               console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
             }
           })
         // When the component is created, load www.example.com
         Web({ src: 'www.example.com', controller: this.controller })
       }
     }
   }
   ```
