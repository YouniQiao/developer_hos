---
title: "如何写har包的编译脚本"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-64
format: md
---


在har包目录下的hvigorfile.ts文件中编写代码如下：

```
import { harTasks } from '@ohos/hvigor-ohos-plugin';

function harTask(): HvigorPlugin {
    return {
        pluginId: 'harTask',
        apply(node: HvigorNode) {
            console.log('hello harTasks!');
        }
    }
}

export default {
    system: harTasks,
    plugins: [harTask()]
}
```
