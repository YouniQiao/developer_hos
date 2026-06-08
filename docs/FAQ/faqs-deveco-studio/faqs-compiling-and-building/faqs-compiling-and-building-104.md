---
title: "如何在构建任务中执行shell脚本"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-104
format: md
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-104
last_sync: 2026-06-07
sync_hash: 6e0b0c94
---
在hvigorfile.ts文件中执行如下示例：

```
import { harTasks } from '@ohos/hvigor-ohos-plugin';
import { exec } from 'node:child_process';
import util from 'node:util';

const scriptPath = 'xxxx.bat';

export function customPluginFunction1(str?: string) {
  return {
    pluginId: 'CustomPluginID1',
    apply(pluginContext) {
      pluginContext.registerTask({
       // Write a custom task
        name: 'customTask1',
        run: (taskContext) => {
          console.log('run into: ');
          const execPromise = util.promisify(exec)
          execPromise(scriptPath).then(res => {
            console.log(res, 'res');
          }).catch(err => {
            console.log(err, 'err');
          })
        },
        // Confirm custom task insertion position
        dependencies: ['default@BuildJS'],
        postDependencies: ['default@CompileArkTS']
      })
    }
  }
}

export default {
  system: harTasks, /* Built-in plugin of Hvigor. It cannot be modified. */
  plugins: [customPluginFunction1()] /* Custom plugin to extend the functionality of Hvigor. */
}
```

![](./img/88ac4991.png)

需要特别注意system字段的取值，不同的模块需要使用不同的值：

1. 在项目的hvigorfile.ts中，需要使用system: appTasks。
2. 在har模块的hvigorfile.ts中，需要使用system: harTasks。
3. 在hsp模块的hvigorfile.ts中，需要使用system: hspTasks。
4. 在hap模块的hvigorfile.ts中，需要使用system: hapTasks。
