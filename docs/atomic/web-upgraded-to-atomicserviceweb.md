---
title: "从ArkWeb组件升级为AtomicServiceEnhancedWeb"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/web-upgraded-to-atomicserviceweb
format: md
---


AtomicServiceEnhancedWeb后续将不再支持[registerJavaScriptProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#registerjavascriptproxy)、[runJavaScript](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#runjavascript)等接口。若需要Web组件加载的网页中调用ArkTS开发的元服务页面的对象方法，可通过JS SDK提供的接口获取相关数据。若JS SDK接口无法满足需求，还可通过传参的方式，ArkTS开发的元服务页面执行对象方法后获取结果，将结果传递给Web组件加载的网页中。

在元服务内，可使用AtomicServiceEnhancedWeb组件显示Web页面，且需要配置业务域名。AtomicServiceEnhancedWeb不需要注入ASCF框架即可运行，请按照AtomicServiceEnhancedWeb相关指南进行配置开发。

请参考：[AtomicServiceEnhancedWeb组件开发指南](https://developer.huawei.com/consumer/cn/doc/atomic-guides/components-atomicserviceenhancedweb)、[AtomicServiceEnhancedWeb组件参考](https://developer.huawei.com/consumer/cn/doc/atomic-guides/components-atomicserviceenhancedweb)、[配置业务域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-business-domain)

## 通过src传递参数

以登录认证会话信息为例：

在webview场景中，通过H5页面实现页面登录效果，H5页面通过registerJavaScriptProxy等方式调用元服务的账号登录接口，以便获取相关的登录参数。

在升级到AtomicServiceEnhancedWeb的场景中，将在ArkTS开发的元服务页面完成账号登录，再将相关参数通过src传递给H5页面，H5页面获取参数后可以本地存储使用。

通过src进行传参格式如下：

```
src = `https://xx.com/login?authcode=${authcode}`;
```

![](./img/00325f9f.png)

请勿在url参数中传递敏感信息。若需获取敏感信息，建议通过服务端对接的方式获取。

**示例**

* login.ets实现

  ```
  import { authentication } from '@kit.AccountKit';
  import { hilog } from '@kit.PerformanceAnalysisKit';
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct LoginPage {
    @State authorizationCode: string = '';
    @State src: ResourceStr = 'resource://rawfile/login.html';
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    navPathStack: NavPathStack = new NavPathStack();
    async getAuthorizationCode() {
      // 创建登录请求，并设置参数
      let loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();
      // 当用户未登录华为账号时，是否强制拉起华为账号登录界面
      loginRequest.forceLogin = true;
      loginRequest.state = 'xxx';
      // 执行登录请求
      try {
        let controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());
        controller.executeRequest(loginRequest, (err, data) => {
          if (err) {
            hilog.error(0x0000, 'testTag', 'login fail, error: %{public}s', JSON.stringify(err));
            return;
          }
          let loginWithHuaweiIDResponse = data as authentication.LoginWithHuaweiIDResponse;
          let state = loginWithHuaweiIDResponse.state;
          if (state != undefined && loginRequest.state != state) {
            hilog.error(0x0000, 'testTag', 'login fail,The state is different: %{public}s',
              JSON.stringify(loginWithHuaweiIDResponse));
            return;
          }
          hilog.info(0x0000, 'testTag', 'login success, %{public}s', JSON.stringify(loginWithHuaweiIDResponse));
          let loginWithHuaweiIDCredential = loginWithHuaweiIDResponse.data!;
          this.authorizationCode = loginWithHuaweiIDCredential.authorizationCode!;
        });
      } catch (error) {
        hilog.error(0x0000, 'testTag', 'login failed: %{public}s', JSON.stringify(error));
      }
    }
    async aboutToAppear() {
      await this.getAuthorizationCode();
    }
    build() {
      NavDestination() {
        if(this.authorizationCode){
          AtomicServiceEnhancedWeb({
            src: this.src + `?AuthorizationCode=${this.authorizationCode}`,
            navPathStack: this.navPathStack,
            controller: this.controller
          })
        }
      }
      .onReady((context: NavDestinationContext) => {
        this.navPathStack = context.pathStack;
      })
    }
  }
  @Builder
  export function AtomicServiceEnhancedWebPageBuilder(name: string, param: Object) {
    LoginPage()
  }
  ```
* login.html实现

  ```
  <!DOCTYPE html>
  <html>
  <style type="text/css">
      body { padding-left: 30px; }
      h1 { font-size: 100px; }
      .button { font-size: 80px; margin: 8px 0px; padding: 8px 15px; border-radius: 10px; color: #fff; background-color: #007bff; border-color: #007bff; border: 1px solid transparent; }
      .button_error { color: #fff; background-color: #dc3545; border-color: #dc3545; }
  </style>
  <body>
  <h1>H5 Page</h1>
  <br/>
  <button type="button" class="button" onclick="getUrlParams()">获取AuthorizationCode参数</button>
  <p id="demo"></p>
  <script src="../dist/aseweb-sdk.umd.js"></script>
  <script>
      function getUrlParams() {
          const params = {};
          const url = window.location.href;
          const urlObj = new URL(url);
          for (const [key, value] of urlObj.searchParams.entries()) {
          params[key] = value;
          document.getElementById("demo").innerText = params[key];
       }
      return params;
  }
  </script>
  </body>
  </html>
  ```

## 通过路由传参

常见场景为H5跳转ArkTS开发的元服务页面实现账号关联、调用原生实名认证等能力。

同样以账号关联为例：

在升级到AtomicServiceEnhancedWeb的场景中，将通过路由跳转到在ArkTS开发的元服务页面，进行账号关联或取消关联，同时在跳转路由中传递参数。

通过路由进行传参格式如下：

```
has.router.pushPath('LoginPage','xxxxx')
```

**示例**

* login.html实现

  ```
  <!DOCTYPE html>
  <html>
  <meta charset="utf-8">
  <style>
      body { padding-left: 30px; }
      h1 { font-size: 100px; }
      .button { font-size: 80px; margin: 8px 0px; padding: 8px 15px; border-radius: 10px; color: #fff; background-color: #007bff; border-color: #007bff; border: 1px solid transparent; }
      .button_error { color: #fff; background-color: #dc3545; border-color: #dc3545; }
  </style>
  <body>
  <h1>H5 Page</h1>
  <br/>
  <button type="button" class="button" onclick="pushPath('LoginPage', 'xxxxx')">H5传递参数</button>
  <p id="demo"></p>
  <script src="../dist/aseweb-sdk.umd.js"></script>
  <script>
      function pushPath(name, param, animated, onPop) {
          has.navPathStack.pushPath({
              name: name,
              param: param,
              animated: animated,
              onPop: onPop,
              callback: (err, res) => commonCallback('pushPath', err, res)
          });
      }
      let onPop = event => {
          consoleLog('pushPath onPop event=' + JSON.stringify(event));
      };
  </script>
  </body>
  </html>
  ```
* LoginPage.ets实现

  ```
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';

  @Entry
  @Component
  struct LoginPage {
    @State src: ResourceStr = 'resource://rawfile/login.html';
    @State param: object | string = '';
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    navPathStack: NavPathStack = new NavPathStack();

    build() {
      NavDestination() {
        if (this.param ) {
          Column() {
            Text(`接收H5页面传递参数：${this.param}`)
          }
          .width('100%')
        } else {
          AtomicServiceEnhancedWeb({
            src: this.src,
            navPathStack: this.navPathStack,
            controller: this.controller
          })
        }
      }
      .onReady((context: NavDestinationContext) => {
        this.navPathStack = context.pathStack;
        this.param = context.pathInfo?.param as string
      })
    }
  }

  @Builder
  export function AtomicServiceEnhancedWebPageBuilder(name: string, param: Object) {
    LoginPage()
  }
  ```
* MainPage.ets实现

  ```
  @Entry
  @Component
  struct MainPage {
    navPathStack: NavPathStack = new NavPathStack();

    @Builder
    NavPathStackComponent(name: string, page: string, param?: object): void {
      Button(name)
        .type(ButtonType.Capsule)
        .width('60%')
        .margin({
          top: '50px'
        }).onClick(() => {
        this.navPathStack.pushPath({ name: page, param: param });
      })
    }

    build() {
      Navigation(this.navPathStack) {
        Row() {
          Column() {
            this.NavPathStackComponent('LoginPage', 'LoginPage')
          }.width('100%')
        }.height('100%')
      }.title('XXX')
    }
  }
  ```

  [创建路由跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation#创建路由跳转)，route\_map.json添加对应路由。

  ```
  {
    "name": "LoginPage",
    "pageSourceFile": "src/main/ets/pages/LoginPage.ets",
    "buildFunction": "AtomicServiceEnhancedWebPageBuilder",
    "data": {
      "description": "this is LoginPage"
    }
  }
  ```

## 常用接口/属性迁移指导

* controller

  替换AtomicServiceEnhancedWebController。

  ```
  // xxx.ets
   import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
   @Entry
   @Component
   struct WebComponent {
   @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
    Column() {
      AtomicServiceEnhancedWeb({
        src: 'www.example.com',
        controller: this.controller
      })
     }
    }
   }
  ```
* javaScriptAccess

  默认是true，无需单独设置.
* domStorageAccess

  默认值为true，无需单独设置.
* mixedMode

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
   struct WebComponent {
     @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
     @State mixedMode: MixedMode = MixedMode.All;
     build() {
       Column() {
         AtomicServiceEnhancedWeb({
           src: 'www.example.com',
           controller: this.controller,
        mixedMode: this.mixedMode
         })
       }
     }
   }
  ```
* darkMode

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
   struct WebComponent {
     @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
     @State mode: WebDarkMode = WebDarkMode.On;
     build() {
       Column() {
         AtomicServiceEnhancedWeb({
           src: 'www.example.com',
           controller: this.controller,
           darkMode: this.mode,
         })
       }
     }
   }
  ```
* forceDarkAccess

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
     @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
     @State access: boolean = true;
     build() {
       Column() {
      AtomicServiceEnhancedWeb({
        src: 'www.example.com',
        controller: this.controller,
        forceDarkAccess: this.access
        })
       }
     }
   }
  ```
* fileAccess

  AtomicServiceEnhancedWeb中默认false，仅只读资源目录"/data/storage/el1/bundle/entry/resources/resfile"里面的file协议资源依然可以访问，$rawfile(filepath/filename)中rawfile路径的文件不受该属性影响而限制访问。升级AtomicServiceEnhancedWeb后不再支持自定义该接口，需删除。
* onlineImageAccess

  AtomicServiceEnhancedWeb中默认值为True，升级AtomicServiceEnhancedWeb后不再支持自定义该接口，需删除。
* imageAccess

  AtomicServiceEnhancedWeb中默认值为True，升级AtomicServiceEnhancedWeb后不再支持自定义该接口，需删除。
* geolocationAccess

  升级AtomicServiceEnhancedWeb后不再支持该接口，在H5页面替换使用has.location.getLocation()。
* onGeolocationShow

  升级AtomicServiceEnhancedWeb后不再支持该接口，在H5页面替换使用has.location.getLocation()。
* onPageEnd

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
    @Component
    struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
     build() {
      Column() {
      AtomicServiceEnhancedWeb({
        src: 'www.example.com',
        controller: this.controller,
            onPageBegin: (event: OnPageBeginEvent) => {
          console.log(`AtomicServiceEnhancedWeb onPageBegin event=${JSON.stringify({ url: event.url })}`);
          }
         })
       }
     }
   }
  ```
* onPageBegin

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
    struct WebComponent {
      @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
      build() {
        Column() {
          AtomicServiceEnhancedWeb({
            src: 'www.example.com',
            controller: this.controller,
            onPageBegin: (event: OnPageBeginEvent) => {
              console.log(`AtomicServiceEnhancedWeb onPageBegin event=${JSON.stringify({ url: event.url })}`);
            }
          })
        }
      }
    }
  ```
* onErrorReceive

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
      build() {
      Column() {
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller,
          onErrorReceive: (event: OnErrorReceiveEvent) => {
            console.log(`AtomicServiceEnhancedWeb onErrorReceive event=${JSON.stringify({
              requestUrl: event.request?.getRequestUrl(),
              requestMethod: event.request?.getRequestMethod(),
              errorCode: event.error?.getErrorCode(),
              errorInfo: event.error?.getErrorInfo()
            })}`);
          },
        })
      }
    }
  }
  ```
* onHttpErrorReceive

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller,
            onHttpErrorReceive: (event: OnHttpErrorReceiveEvent) => {
            console.log(`AtomicServiceEnhancedWeb onHttpErrorReceive event=${JSON.stringify({
              requestUrl: event.request?.getRequestUrl(),
              requestMethod: event.request?.getRequestMethod(),
              responseCode: event.response?.getResponseCode(),
              responseData: event.response?.getResponseData(),
            })}`);
          },
        })
      }
    }
  }
  ```
* onShowFileSelector

  升级AtomicServiceEnhancedWeb后不再支持该接口，可在H5页面中替换使用has.request.uploadFile()或has.photoViewPicker.select()，样例如下：

  ```
  <script type="text/javascript">
      let filePath1;
      let filePath2;
      function downloadImage(url) {
          has.request.downloadFile({
              url: url,
              callback: (err, res) => {
                  commonCallback('downloadImage', err, res);
                  filePath1 = res.uri;
              }
          });
      }
      function chooseImage() {
          has.photoViewPicker.select({
              callback: (err, res) => {
                  commonCallback('chooseImage', err, res);
                  if (res.photoUris && res.photoUris.length > 0) {
                      filePath2 = res.photoUris[0];
                  }
              }
          });
      }
      function uploadFile(filePath) {
          if (!filePath) {
              consoleError('filePath is null');
              return;
          }
          has.request.uploadFile({
              url: 'https://www.baidu.com/upload',
              header: { 'Accept': '*/*' },
              method: 'POST',
              files: [{
                  filename: '123456.jpg',
                  name: 'file',
                  uri: filePath,
                  type: 'jpg'
              }],
              data: [{
                  name: 'key1',
                  value: 'value1'
              }],
              callback: (err, res) => commonCallback('uploadImage', err, res)
          });
      }
      function uploadFileAll() {
          let files = [];
          if (filePath1) {
              files.push({
                  filename: '123456.jpg',
                  name: 'file',
                  uri: filePath1,
                  type: 'jpg'
              });
          }
          if (filePath2) {
              files.push({
                  filename: '345678.jpg',
                  name: 'file',
                  uri: filePath2,
                  type: 'jpg'
              });
          }
          has.request.uploadFile({
              url: 'http://www.baidu.com/upload',
              header: { 'Accept': '*/*' },
              method: 'POST',
              files: files,
              data: [],
              callback: (err, res) => commonCallback('uploadImage', err, res)
          });
      }
  </script>
  ```
* onLoadIntercept

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller,
          onLoadIntercept: (event: OnLoadInterceptEvent) => {
            console.log("AtomicServiceEnhancedWeb onLoadIntercept event = " + JSON.stringify({
              getRequestUrl: event.data.getRequestUrl(),
              getRequestMethod: event.data.getRequestMethod(),
              getRequestHeader: JSON.stringify(event.data.getRequestHeader()),
              isRequestGesture: event.data.isRequestGesture(),
              isMainFrame: event.data.isMainFrame(),
              isRedirect: event.data.isRedirect(),
            }));
            return false;
          }
        })
      }
    }
  }
  ```
* onControllerAttached

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller,
          onControllerAttached: () => {
            console.log('AtomicServiceEnhancedWeb onControllerAttached');
            this.controller.setCustomUserAgent('Mozilla/5.1 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36  ArkWeb/4.1.6.1 Mobile');
          }
        })
      }
    }
  }
  ```
* setWebDebuggingAccess

  当前debug证书默认支持。
* accessBackward

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('accessBackward')
          .onClick(() => {
            let result = this.controller.accessBackward()
            console.log('result:' + result)
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* accessForward

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('accessForward')
          .onClick(() => {
            let result = this.controller.accessForward()
            console.log('result:' + result)
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* accessStep

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('accessStep')
          .onClick(() => {
            let result = this.controller.accessStep(-1)
            console.log('result:' + result)
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* forward

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('forward')
          .onClick(() => {
            this.controller.forward();
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* backward

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('accessStep')
          .onClick(() => {
            let result = this.controller.accessStep(-1)
            console.log('result:' + result)
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* clearHistory

  替换使用has.router.clear()/has.navPathStack.clear()
* refresh

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('refresh')
          .onClick(() => {
            this.controller.refresh();
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* loadData

  建议将data写入html本地存储，替换loadUrl
* getUserAgent

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        Button('getUserAgent')
          .onClick(() => {
            let userAgent = this.controller.getUserAgent();
          })
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller
        })
      }
    }
  }
  ```
* setCustomUserAgent

  升级AtomicServiceEnhancedWeb后使用样例如下：

  ```
  // xxx.ets
  import { AtomicServiceEnhancedWeb, AtomicServiceEnhancedWebController } from '@atomicservice/ascfapi';
  @Entry
  @Component
  struct WebComponent {
    @State controller: AtomicServiceEnhancedWebController = new AtomicServiceEnhancedWebController();
    build() {
      Column() {
        AtomicServiceEnhancedWeb({
          src: 'www.example.com',
          controller: this.controller,
          onControllerAttached: () => {
            this.controller.setCustomUserAgent('Mozilla/5.1 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36  ArkWeb/4.1.6.1 Mobile');
          }
        })
      }
    }
  }
  ```
