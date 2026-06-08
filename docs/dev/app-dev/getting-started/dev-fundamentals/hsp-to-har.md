---
title: "HSP转HAR指导"
original_url: /docs/dev/app-dev/getting-started/dev-fundamentals/hsp-to-har
upstream_id: dev/app-dev/getting-started/dev-fundamentals/hsp-to-har
last_sync: 2026-06-07
sync_hash: 7c8904b2
---
HSP对bundleName和签名有一致性要求，在调试阶段需要先安装HSP包，这导致多模块集成开发场景下容易出现多种集成问题。在此场景下，建议使用HAR包来提供所需功能。本文通过配置项的变更将HSP工程变成HAR工程。

![](./img/15319158.png)

阅读本文前，请开发者完成[HSP](/docs/dev/app-dev/getting-started/dev-fundamentals/in-app-hsp)、[HAR](/docs/dev/app-dev/getting-started/dev-fundamentals/har-package)、[module.json5](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)、[hvigorfile.ts](/docs/tools/coding-debug/ide-hvigor-config-ohos-guide)、[oh-package.json5](/docs/tools/ohpm/ide-oh-package-json5)、[build-profile.json5](/docs/tools/coding-debug/ide-hvigor-build-profile-app)学习。

部分组件和模块在HAP、HSP、HAR中集成使用时存在差异，例如[加载HAR中Worker线程文件相比HSP存在单独的使用约束](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#文件路径注意事项)，因此按照如下步骤完成HSP转HAR后，请关注对应组件和模块介绍并进行适配。

## HSP转HAR的操作步骤

1. 修改HSP模块下的module.json5文件，将type字段值改为har，删除deliveryWithInstall和pages字段。

   ```
   {
     "module": {
       "name": "har",
       "type": "har",
       "deviceTypes": [
         "tablet",
         "2in1"
       ]
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/bmsSample/HspToHar/library/src/main/module.json5#L16-L27" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：module.json5</a></div>

2. 在resource\base\profile文件夹下，删除main\_pages.json文件。
3. 修改HSP模块的hvigorfile.ts文件，将内容替换为以下内容。

   ```
   // MyApplication\library\hvigorfile.ts
   import { harTasks } from '@ohos/hvigor-ohos-plugin';

   export default {
     system: harTasks,  // 编译修改成HAR的任务
     plugins:[]
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/bmsSample/HspToHar/library/hvigorfile.ts#L16-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：hvigorfile.ts</a></div>

4. 修改HSP模块的oh-package.json5文件，删除packageType配置。
5. 修改项目级的配置文件 build-profile.json5，在 modules 模块下找到 HSP 的配置信息，删除 HSP 配置下的 targets。
