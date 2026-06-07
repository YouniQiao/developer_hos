---
title: "使用Web组件保存前端页面为PDF"
original_url: /docs/dev/app-dev/application-framework/arkweb/web-process-page-content/web-createpdf
format: md
---


从API version 14开始，支持使用Web组件的[createPdf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#createpdf14)方法，为应用提供了保存前端页面为PDF的功能。

使用[createPdf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#createpdf14)生成实例后，调用pdfArrayBuffer方法获取二进制数据流，再使用[fileIo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)方法将二进制数据流保存为PDF文件。用户可以将前端页面内容保存为PDF以便分享或保存。例如，生成报告、发票等，方便用户保存和传输。

![](./img/fc6c3795.png)

通过[pdfConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-i#pdfconfiguration14)的配置，可调整PDF每页大小、前端页面缩放比例等；推荐使用前端页面适配策略，通过CSS媒体查询（@media print）优化PDF排版。

## 需要权限

若涉及网络文档获取，需在module.json5中配置网络访问权限。具体添加方法请参考[在配置文件中声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#在配置文件中声明权限)。

```
"requestPermissions": [
  {
    "name": "ohos.permission.INTERNET"
  }
],
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ArkWebCreatePdf/entry/src/main/module.json5#L64-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>


## callback方式保存PDF

通过callback方式调用createPdf接口，获取到的result通过pdfArrayBuffer接口取得PDF二进制数据流，最后使用fileIo方法将二进制数据流保存为PDF文件。

```
import { fileIo as fs } from '@kit.CoreFileKit';
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  controller: webview.WebviewController = new webview.WebviewController();
  pdfConfig: webview.PdfConfiguration = {
    width: 8.27,
    height: 11.69,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    shouldPrintBackground: true
  };

  build() {
    Column() {
      Button('SavePDF')
        .onClick(() => {
          // 触发PDF生成，需要确保页面渲染完成，可使用onPageEnd事件监听
          this.controller.createPdf(
            this.pdfConfig,
            (error, result: webview.PdfData) => {
              try {
                // 获取到的result通过`pdfArrayBuffer`接口取得PDF二进制数据流，最后使用`fileIo`方法将二进制数据流保存为PDF文件
                let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
                let filePath = context.filesDir + '/test.pdf';
                let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
                fs.write(file.fd, result.pdfArrayBuffer().buffer).then((writeLen: number) => {
                  console.info('createPDF write data to file succeed and size is:' + writeLen);
                }).catch((err: BusinessError) => {
                  console.error('createPDF write data to file failed with error message: ' + err.message +
                      ', error code: ' + err.code);
                }).finally(() => {
                  // 关闭file
                  fs.closeSync(file);
                });
              } catch (resError) {
                console.error(
                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
              }
            });
        })
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ArkWebCreatePdf/entry/src/main/ets/pages/WebCreatePdfCallback.ets#L16-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WebCreatePdfCallback.ets</a></div>


## Promise方式保存PDF

通过Promise方式调用createPdf接口，获取到的result通过pdfArrayBuffer接口取得PDF二进制数据流，最后使用fileIo方法将二进制数据流保存为PDF文件。

```
import { fileIo as fs } from '@kit.CoreFileKit';
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  controller: webview.WebviewController = new webview.WebviewController();
  pdfConfig: webview.PdfConfiguration = {
    width: 8.27,
    height: 11.69,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    shouldPrintBackground: true
  };

  build() {
    Column() {
      Button('SavePDF')
        .onClick(() => {
          // 触发PDF生成，需要确保页面渲染完成，可使用onPageEnd事件监听
          this.controller.createPdf(this.pdfConfig)
            .then((result: webview.PdfData) => {
              try {
                // 获取到的result通过`pdfArrayBuffer`接口取得PDF二进制数据流，最后使用`fileIo`方法将二进制数据流保存为PDF文件
                let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
                let filePath = context.filesDir + '/test.pdf';
                let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
                fs.write(file.fd, result.pdfArrayBuffer().buffer).then((writeLen: number) => {
                  console.info('createPDF write data to file succeed and size is:' + writeLen);
                }).catch((err: BusinessError) => {
                  console.error('createPDF write data to file failed with error message: ' + err.message +
                      ', error code: ' + err.code);
                }).finally(() => {
                  // 关闭file
                  fs.closeSync(file);
                });
              } catch (resError) {
                console.error(
                  `ErrorCode: ${(resError as BusinessError).code},  Message: ${(resError as BusinessError).message}`);
              }
            })
        })
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/ArkWebCreatePdf/entry/src/main/ets/pages/WebCreatePdfPromise.ets#L16-L67" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WebCreatePdfPromise.ets</a></div>
