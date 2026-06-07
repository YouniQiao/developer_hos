---
displayed_sidebar: appDevSidebar
title: "调用全部预加载"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-call-install-and-periodic-prefetch
format: md
---


在项目的EntryAbility.ets文件中导入预加载实现类[PrefetchWrapper](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class#prefetchwrapper)，并在onCreate中调用PrefetchWrapper的doPrefetch方法。应用安装后首次打开时，跳转应用详情页调用跳链安装预加载，跳转首页调用安装预加载；应用安装后非首次打开时，调用周期性预加载。

```
import { GlobalContext } from '../common/GlobalContext';
import { PrefetchWrapper } from '../prefetchUtil/PrefetchWrapper';

onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  GlobalContext.initContext(this.context); // 初始化全局上下文
  PrefetchWrapper.getInstance().doPrefetch();
}
```
