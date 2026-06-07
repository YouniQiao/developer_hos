---
title: "编译命令行中如何传递参数并且在Hvigor编译阶段扩展插件中获取到"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-79
format: md
---


使用hvigor命令：

```
 > hvigorw -s -p key1=value2222
```

获取自定义参数代码：

```
// hvigorfile.ts
import { harTasks } from '@ohos/hvigor-ohos-plugin';
import { hvigor } from '@ohos/hvigor';

export default {
    system: harTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */
}
console.log('value===', hvigor.getParameter().getExtParam('key1'));
```
