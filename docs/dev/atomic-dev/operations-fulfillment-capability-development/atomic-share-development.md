---
title: "分享"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-share-development
has_merged_cells: true
---

## 场景介绍

从6.0.0(20)开始，支持元服务页面的分享。可通过服务面板入口进行当前页面的分享，也可通过分享Button组件在元服务页面内嵌入实现。

| 元服务分享 | 适用范围 | 分享入口 | 使用接口或组件 |
| --- | --- | --- | --- |
| 元服务页面分享 | 适用于ArkUI开发的元服务页面 | 服务面板 | [onShare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onshare10)生命周期函数 |
| 页面内自定义 | [元服务分享Button](https://developer.huawei.com/consumer/cn/doc/atomic-guides/scenario-fusion-button-atomic-service-share) |

## 接入指导

本能力依赖于[组件导航（Navigation）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)能力，使用Navigation来实现元服务的分页能力。

开发者需要在元服务工程中，在UIAbility中配置onShare生命周期函数，在wantParams中声明atomicservice.param.key.shareInfo表示分享方要分享页面数据。

元服务面板能够依赖此数据根据判断用户所处分页是否允许分享，进而构建分享数据，拉起系统分享面板。

```
import UIAbility from '@ohos.app.ability.UIAbility';
interface ShareInfo {
  showShareMenu: boolean;  // 当前页面是否允许分享，面板分享开关是否打开, 不填默认为不允许。
  title?: string;  // 系统分享面板标题，默认为元服务名称。
  description?: string;  // 系统分享面板简介，默认为元服务一句话描述。
}
export default class EntryAbility extends UIAbility {
  onShare(wantParams: Record<string, Object>) {
    /*
    * 定义分享数据
    */
    const shareInfo: ShareInfo = {
      showShareMenu: true,
      title: '分享标题',
      description: '分享简介',
    }
    wantParams['atomicservice.param.key.shareInfo'] = shareInfo;
  }
  //...
}
```

[NavigationSubPageName](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package)指的是开发者在navigation中使用NavDestination页面名称，以下是自定义路由表的实现举例。

```
// 使用navigation组件一般通过如下方式更新页面。
@Entry
@Component
struct NavigationExample {
  pageInfos: NavPathStack = new NavPathStack();
  isUseInterception: boolean = false;

   @Builder
  pageMap(pageName: string, params: Record<string, string>) {
    if (pageName === NavigationSubPageName.PageOne) {
      PageOne()
    } else if (pageName === NavigationSubPageName.PageTwo) {
      PageTwo()
    } else if (pageName === NavigationSubPageName.PageThree) {
      PageThree()
    }
  }

  build() {
    Navigation(this.pageInfos) {
      Column() {
        Button('pushPath', { stateEffect: true, type: ButtonType.Capsule })
          .width('80%')
          .height(40)
          .margin(20)
          .onClick(() => {
            this.pageInfos.pushPath({ name: NavigationSubPageName.PageOne }); //将name指定的NavDestination页面信息入栈
          })
        Button('use interception', { stateEffect: true, type: ButtonType.Capsule })
          .width('80%')
          .height(40)
          .margin(20)
          .onClick(() => {
            this.isUseInterception = !this.isUseInterception;
            if (this.isUseInterception) {
              this.registerInterception();
            } else {
              this.pageInfos.setInterception(undefined);
            }
          })
      }
    }.navDestination(this.pageMap)
  }
}
```
