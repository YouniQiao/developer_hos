---
title: "如何将HAR（静态共享包）转为HSP（动态共享包）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-7
---

[HAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package)转换成[HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp)可参考如下步骤：

1. 新建一个HSP，将HAR包拷贝到lib目录，并在HSP的oh-package.json5文件的dependencies下配置HAR包。

   ```
   "dependencies": {
     "myhar": "file:./lib/myHar.har" // MyHar.Har path: oh-package.json5 file in the same directory as the lib folder
   },
   ```
2. 在HSP的Index.ets中直接导出HAR内容。

   ```
   export * as myhar from 'myhar';
   ```
3. 最后编译该HSP。
