---
title: "Class (WebResourceHandler)"
upstream_id: "harmonyos-references/arkts-apis-webview-webresourcehandler"
catalog: "harmonyos-references"
content_hash: "8d4a4474bdf9"
synced_at: "2026-07-09T00:58:51.717173"
---

# Class (WebResourceHandler)

WebResourceHandler是自定义scheme拦截场景中用于向Web组件返回拦截请求结果的处理器。当WebSchemeHandler决定拦截一个请求后，开发者通过WebResourceHandler向Web组件提供自定义的响应头（didReceiveResponse）、响应体数据（didReceiveResponseBody），并通知请求完成（didFinish）或失败（didFail）。该接口实现了应用层对网络请求的完全自定义响应。

WebResourceHandler与[WebSchemeHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler)、[WebSchemeHandlerResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandlerresponse)配合使用：WebSchemeHandler的onRequestStart回调中接收WebResourceHandler实例，开发者构造WebSchemeHandlerResponse对象，通过WebResourceHandler的didReceiveResponse传入响应头，通过didReceiveResponseBody传入响应体数据，最后调用didFinish或didFail结束请求。调用didReceiveResponse是调用didFinish/didFail的前提条件。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

#### 导入模块

```
import { webview } from '@kit.ArkWeb';
```

#### didReceiveResponse12+

didReceiveResponse(response: WebSchemeHandlerResponse): void

将构造的响应头传递给被拦截的请求。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | [WebSchemeHandlerResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandlerresponse) | 是 | 该拦截请求的响应。 |

错误码：

以下错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)、[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 17100021 | The resource handler is invalid. |

示例：

示例请参考[OnRequestStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler#onrequeststart12)。

#### didReceiveResponseBody12+

didReceiveResponseBody(data: ArrayBuffer): void

将构造的响应体传递给被拦截的请求。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | ArrayBuffer | 是 | 响应体数据。 |

错误码：

以下错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)、[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 17100021 | The resource handler is invalid. |

示例：

示例请参考[OnRequestStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler#onrequeststart12)。

#### didFinish12+

didFinish(): void

通知Web组件被拦截的请求已经完成，并且没有更多的数据可用，调用前需要优先调用[didReceiveResponse](#didreceiveresponse12)将构造的响应头传递给被拦截的请求。

系统能力： SystemCapability.Web.Webview.Core

错误码：

以下错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)。

| 错误码ID | 错误信息 |
| --- | --- |
| 17100021 | The resource handler is invalid. |

示例：

示例请参考[OnRequestStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler#onrequeststart12)。

#### didFail12+

didFail(code: WebNetErrorList): void

通知ArkWeb内核被拦截请求应该返回失败，调用前需要优先调用[didReceiveResponse](#didreceiveresponse12)将构造的响应头传递给被拦截的请求。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | [WebNetErrorList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist#webneterrorlist) | 是 | 网络错误码。 |

错误码：

以下错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)、[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 17100021 | The resource handler is invalid. |

示例：

示例请参考[OnRequestStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webschemehandler#onrequeststart12)。

#### didFail20+

didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void

通知ArkWeb内核，被拦截请求应返回失败。若completeIfNoResponse为false，调用前需优先调用[didReceiveResponse](#didreceiveresponse12)，将构造的响应头传递给被拦截的请求。若completeIfNoResponse为true，且调用前未调用[didReceiveResponse](#didreceiveresponse12)，则自动生成一个响应头，网络错误码为-104，详情参见[WebNetErrorList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist#webneterrorlist)。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | [WebNetErrorList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist#webneterrorlist) | 是 | 网络错误码。 |
| completeIfNoResponse | boolean | 是 | 调用当前接口时，若之前未调用过[didReceiveResponse](#didreceiveresponse12)，是否完成此次网络请求；值为true时，若之前未调用过[didReceiveResponse](#didreceiveresponse12)，则会自动生成一个response以完成此次网络请求，网络错误码为-104；值为false时，将等待应用调用[didReceiveResponse](#didreceiveresponse12)并传入response，不会直接完成此次网络请求。 |

错误码：

以下错误码的详细介绍请参见[Webview错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-webview)。

| 错误码ID | 错误信息 |
| --- | --- |
| 17100101 | The errorCode is either ARKWEB_NET_OK or outside the range of error codes in WebNetErrorList. |
| 17100021 | The resource handler is invalid. |

示例：

```
// xxx.ets
import { webview, WebNetErrorList } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();
  schemeHandler: webview.WebSchemeHandler = new webview.WebSchemeHandler();

  build() {
    Column() {
      Web({ src: 'https://www.example.com', controller: this.controller })
        .onControllerAttached(() => {
          try {
            this.schemeHandler.onRequestStart((request: webview.WebSchemeHandlerRequest, resourceHandler: webview.WebResourceHandler) => {
              console.info("[schemeHandler] onRequestStart");
              try {
                console.info("[schemeHandler] onRequestStart url:" + request.getRequestUrl());
                console.info("[schemeHandler] onRequestStart method:" + request.getRequestMethod());
                console.info("[schemeHandler] onRequestStart referrer:" + request.getReferrer());
                console.info("[schemeHandler] onRequestStart isMainFrame:" + request.isMainFrame());
                console.info("[schemeHandler] onRequestStart hasGesture:" + request.hasGesture());
                console.info("[schemeHandler] onRequestStart header size:" + request.getHeader().length);
                console.info("[schemeHandler] onRequestStart resource type:" + request.getRequestResourceType());
                console.info("[schemeHandler] onRequestStart frame url:" + request.getFrameUrl());
                let header = request.getHeader();
                for (let i = 0; i < header.length; i++) {
                  console.info("[schemeHandler] onRequestStart header:" + header[i].headerKey + " " + header[i].headerValue);
                }
                let stream = request.getHttpBodyStream();
                if (stream) {
                  console.info("[schemeHandler] onRequestStart has http body stream");
                } else {
                  console.info("[schemeHandler] onRequestStart has no http body stream");
                }
              } catch (error) {
                console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
              }

              if (request.getRequestUrl().endsWith("example.com")) {
                return false;
              }

              try {
                // 直接调用didFail(WebNetErrorList.ERR_FAILED, true)，自动构造一个网络请求错误ERR_CONNECTION_FAILED
                resourceHandler.didFail(WebNetErrorList.ERR_FAILED, true);
              } catch (error) {
                // 当error.code为17100101(The errorCode is either ARKWEB_NET_OK or outside the range of error codes in WebNetErrorList)
                // 且didFail(code: WebNetErrorList, completeIfNoResponse: boolean)的code值不为null时，接口会继续调用不会中断。
                console.error(`[schemeHandler] ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
              }
              return true;
            })

            this.schemeHandler.onRequestStop((request: webview.WebSchemeHandlerRequest) => {
              console.info("[schemeHandler] onRequestStop");
            });

            this.controller.setWebSchemeHandler('https', this.schemeHandler);
          } catch (error) {
            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
          }
        })
        .javaScriptAccess(true)
        .domStorageAccess(true)
    }
  }
}
```
