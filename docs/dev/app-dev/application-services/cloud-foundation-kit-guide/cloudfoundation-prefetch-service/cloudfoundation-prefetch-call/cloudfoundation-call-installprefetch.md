---
displayed_sidebar: appDevSidebar
title: "调用安装预加载"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-call-installprefetch
format: md
---


在项目的EntryAbility.ets文件中导入预加载实现类[PrefetchWrapper](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class#prefetchwrapper)，并在onCreate中调用PrefetchWrapper的doInstallPrefetch方法。方法内部会调用[getPrefetchResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudresprefetch#getprefetchresult)获取安装预加载缓存数据。

![](./img/ed3a98b0.png)

* 安装预加载缓存数据，仅允许调用一次，被调用后将被销毁。
* 应用安装开始时，系统会拉取安装预加载云侧数据并缓存到本地。

```
import { GlobalContext } from '../common/GlobalContext';
import { PrefetchWrapper } from '../prefetchUtil/PrefetchWrapper';

onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  GlobalContext.initContext(this.context); // 初始化全局上下文
  PrefetchWrapper.getInstance().doInstallPrefetch();
}
```

![](./img/816c33a6.png)

调用安装预加载过程中，可参考[FAQ](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5)定位预加载问题。
