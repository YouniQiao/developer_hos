---
title: "组件描述"
upstream_id: "harmonyos-references/arkts-basic-components-web"
catalog: "harmonyos-references"
content_hash: "a6f74b4a23d0"
synced_at: "2026-07-09T17:25:37.843143"
---

# 组件描述

Web组件是ArkWeb Kit提供的具有网页显示能力的UI组件，用于在应用内嵌入和展示网页内容。开发者可通过Web组件加载在线网页和本地网页，支持隐私模式浏览、同步渲染模式、共享渲染进程等特性，满足混合开发、内容嵌入、浏览器类应用等多种场景下的网页展示需求。Web组件的控制器（WebviewController）及相关控制能力由[模块描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview)提供。在使用Web组件时需注意：同一页面内的多个Web组件应分别绑定不同的WebviewController实例以保证独立性和性能隔离；移动设备上当Web实例超过10个时系统会主动回收后台页面数据。

元服务中使用ArkWeb的说明，请参考[Web组件概述](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomicserviceweb-guidelines)。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 示例效果请以真机运行为准。
- 在移动设备上，当应用的Web实例数量超过10个时，系统会主动回收后台页面数据。

该模块提供以下Web组件网页显示相关的常用功能：

- [ClientAuthenticationHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-clientauthenticationhandler)：客户端证书请求事件。
- [ConsoleMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-consolemessage)：控制台信息。
- [ControllerHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-controllerhandler)：新建Web组件的WebviewController对象。
- [DataResubmissionHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-dataresubmissionhandler)：表单数据操作对象。
- [EventResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-eventresult)：同层事件消费结果。
- [FileSelectorParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-fileselectorparam)：Web组件获取文件对象。
- [FileSelectorResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-fileselectorresult)：Web组件文件选择结果。
- [FullScreenExitHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-fullscreenexithandler)：Web组件退出全屏的操作对象。
- [HttpAuthHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-httpauthhandler)：HttpAuth认证请求相关操作功能对象。
- [JsGeolocation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-jsgeolocation)：地理位置信息权限功能。
- [JsResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-jsresult)：弹窗操作。
- [PermissionRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-permissionrequest)：权限请求。
- [ScreenCaptureHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-screencapturehandler)：屏幕捕获相关权限操作。
- [SslErrorHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-sslerrorhandler)：SSL错误事件操作功能。
- [WebContextMenuParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcontextmenuparam)：长按或鼠标右键弹出菜单信息。
- [WebContextMenuResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcontextmenuresult)：控制长按或鼠标右键弹出菜单。
- [WebCookie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcookie)：当前应用中Web组件的Cookie管理操作。
- [WebKeyboardController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webkeyboardcontroller)：控制自定义键盘。
- [WebResourceError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourceerror)：资源管理错误。
- [WebResourceRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourcerequest)：资源获取请求。
- [WebResourceResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourceresponse)：资源获取响应。

#### 需要权限

访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

#### 子组件

无

#### 接口

Web(value: WebOptions)

![](./img/note_3.0-zh-cn.png) 不支持转场动画。

为了保证各Web组件间的独立性和性能隔离，同一页面内的多个Web组件应分别绑定不同的WebviewController实例。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [WebOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-i#weboptions) | 是 | Web组件的初始化配置选项，用于设置加载的网页资源（src）、绑定的控制器（controller）以及渲染模式等行为参数。具体属性结构请参考WebOptions接口定义。 |

示例：

加载在线网页。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}
```
 隐私模式WebView加载在线网页。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true })
    }
  }
}
```
 Web组件同步渲染模式。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller, renderMode: RenderMode.SYNC_RENDER })
    }
  }
}
```
 Web组件指定共享渲染进程。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  exampleController: webview.WebviewController = new webview.WebviewController();
  w3Controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.exampleController, sharedRenderProcessToken: '111' })
      Web({ src: 'www.w3.org', controller: this.w3Controller, sharedRenderProcessToken: '111' })
    }
  }
}
```
 指定Web组件是否将鼠标事件作为触摸事件处理。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  noEmulateController: webview.WebviewController = new webview.WebviewController();
  emulateTouchController: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.noEmulateController, emulateTouchFromMouseEvent: false })
      Web({ src: 'www.w3.org', controller: this.emulateTouchController, emulateTouchFromMouseEvent: true })
    }
  }
}
```
 加载本地网页。

通过$rawfile方式加载。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      // 通过$rawfile加载本地资源文件。
      Web({ src: $rawfile("index.html"), controller: this.controller })
    }
  }
}
```
 通过resource协议加载。

使用 resource://rawfile/ 协议前缀可以避免常规 $rawfile 方式在处理带有“#”路由链接时的局限性。当URL中包含“#”号时，“#”后面的内容会被视为锚点（fragment）。

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      // 通过resource协议加载本地资源文件。
      Web({ src: "resource://rawfile/index.html#home", controller: this.controller })
    }
  }
}
```
 在“src/main/resources/rawfile”文件夹下创建index.html：

```
<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
<div id="content"></div>

<script>
  function loadContent() {
    var hash = window.location.hash;
    var contentDiv = document.getElementById('content');

    if (hash === '#home') {
      contentDiv.innerHTML = '<h1>Home Page</h1><p>Welcome to the Home Page!</p>';
    } else {
      contentDiv.innerHTML = '<h1>Default Page</h1><p>This is the default content.</p>';
    }
  }

  // 加载界面
  window.addEventListener('load', loadContent);

  // 当hash变化时，更新界面
  window.addEventListener('hashchange', loadContent);
</script>
</body>
</html>
```
 加载沙箱路径下的本地资源文件，需要开启应用中文件系统的访问[fileAccess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#fileaccess)权限。

1. 通过构造的单例对象GlobalContext获取沙箱路径。 
```
// GlobalContext.ets
export class GlobalContext {
  private constructor() {}
  private static instance: GlobalContext;
  private _objects = new Map<string, Object>();

  public static getContext(): GlobalContext {
    if (!GlobalContext.instance) {
      GlobalContext.instance = new GlobalContext();
    }
    return GlobalContext.instance;
  }

  getObject(value: string): Object | undefined {
    return this._objects.get(value);
  }

  setObject(key: string, objectClass: Object): void {
    this._objects.set(key, objectClass);
  }
}
```
 
```
// xxx.ets
import { webview } from '@kit.ArkWeb';
import { GlobalContext } from '../GlobalContext';

let url = 'file://' + GlobalContext.getContext().getObject('filesDir') + '/index.html';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      // 加载沙箱路径文件。
      Web({ src: url, controller: this.controller })
      .fileAccess(true)
    }
  }
}
```

2. 修改EntryAbility.ets。 以filesDir为例，获取沙箱路径。若想获取其他路径，请参考[应用文件路径](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-context-stage#获取应用文件路径)。 
```
// xxx.ets
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { webview } from '@kit.ArkWeb';
import { GlobalContext } from '../GlobalContext';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    // 通过在GlobalContext对象上绑定filesDir，可以实现UIAbility组件与UI之间的数据同步。
    GlobalContext.getContext().setObject('filesDir', this.context.filesDir);
    console.info('Sandbox path is ' + GlobalContext.getContext().getObject('filesDir'));
  }
}
```
 加载的html文件。 
```
<!-- index.html -->
<!DOCTYPE html>
<html>
    <body>
        <p>Hello World</p>
    </body>
</html>
```
