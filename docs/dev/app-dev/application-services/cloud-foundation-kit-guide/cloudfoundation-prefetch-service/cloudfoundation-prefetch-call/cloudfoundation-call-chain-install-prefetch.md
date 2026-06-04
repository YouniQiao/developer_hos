---
displayed_sidebar: appDevSidebar
title: "调用跳链安装预加载"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-call-chain-install-prefetch
---

在项目的EntryAbility.ets文件中导入预加载实现类[PrefetchWrapper](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-implementation-class#prefetchwrapper)，并在onCreate中调用PrefetchWrapper的doLinkPrefetch方法。方法内部会先调用[popDeferredLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/applinking-deferredlink-api#popdeferredlink)接口获取延迟链接，再调用[getPrefetchResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudresprefetch#getprefetchresult)获取跳链安装预加载缓存数据。

![](./img/5b59a61a.png)

跳链安装预加载缓存的是应用详情页数据，仅允许调用一次，被调用后将被销毁。

```
import { GlobalContext } from '../common/GlobalContext';
import { PrefetchWrapper } from '../prefetchUtil/PrefetchWrapper';

onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  GlobalContext.initContext(this.context); // 初始化全局上下文
  PrefetchWrapper.getInstance().doLinkPrefetch();
}
```
