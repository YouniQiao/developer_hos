---
format: md
title: "如何在Navigation跳转页面时返回传参"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-12
---

在页面跳转时使用[pushPath()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pushpath12)，添加onPop回调接收入栈页面出栈时的返回结果。当页面返回时，通过[pop()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pop11)设置result参数并传递给目标页面，由onPop回调接收返回参数。示例代码如下：

```
interface paramType {
  param: string
}

let paramA: paramType = {
  param: 'test1'
}

@Entry
@Component
struct Index {
  @Provide('pathInfos') pathInfos: NavPathStack = new NavPathStack();

  @Builder
  myRouter(name: string) {
    if (name === 'MyFirstNavDestination') {
      MyFirstNavDestination()
    } else if (name === 'MySecondNavDestination') {
      MySecondNavDestination()
    }
  }

  build() {
    Navigation(this.pathInfos) {
      Row() {
        Column() {
          Text('hello world')
        }
        .height('100%')
      }
      .onClick(() => {
        this.pathInfos.pushPathByName('MyFirstNavDestination', paramA);
      })
    }
    .navDestination(this.myRouter)
  }
}

@Component
export struct MyFirstNavDestination {
  @Consume('pathInfos') pathInfos: NavPathStack;

  getParamsPrint() {
    console.info('param is ' + JSON.stringify(this.pathInfos.getParamByName('MyFirstNavDestination')));
  }

  build() {
    NavDestination() {
      Row() {
        Column() {
          Text('MyFirstNavDestination')
        }
        .width('100%')
      }
      .height('100%')
      .onClick(() => {
        this.pathInfos.pushPath({
          name: 'MySecondNavDestination', param: null, onPop: (popInfo: PopInfo) => {
            console.info(`[pushPath]last page is: ${popInfo.info.name},result: ${JSON.stringify(popInfo.result)}`);
          }
        });
      })
    }.onShown(() => {
      this.getParamsPrint();
    })
  }
}

@Component
export struct MySecondNavDestination {
  @Consume('pathInfos') pathInfos: NavPathStack;
  private routerParams: paramType = { param: 'test 2' };

  build() {
    NavDestination() {
      Row() {
        Text('MySecondNavDestination')
      }
      .height('100%')
    }.onBackPressed(() => {
      this.pathInfos.pop(this.routerParams);
      return true;
    })
  }
}
```
