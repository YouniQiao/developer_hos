---
format: md
title: "如何在编译过程中添加自定义任务"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-58
---

1. 打开模块级的hvigorfile.ts文件。
2. 使用 pluginContext的registerTask方法注册自定义任务，开发者在run方法内编写自定义任务。

   ```
   import { hapTasks } from '@ohos/hvigor-ohos-plugin';
   import { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';

   const node = getNode(__filename);
   node.registerTask({
       name: 'customTask',
       run() {
           console.log('this is Task');
       }});
   ```
3. 在终端中输入以下代码执行任务。

   ```
   ./hvigorw customTask
   ```

**参考链接**

[开发hvigor任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-task)
