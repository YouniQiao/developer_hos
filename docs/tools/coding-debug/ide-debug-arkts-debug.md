---
title: "debug启动调试"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-arkts-debug
format: md
upstream_id: tools/coding-debug/ide-debug-arkts-debug
last_sync: 2026-06-07
sync_hash: 40defe5d
---
# debug启动调试

可以按照如下方式启动调试会话。

1. 如果需要设置断点调试，找到需要暂停的代码片段，点击该代码行的左侧边线，或将光标置于该行上并按Ctrl + F8（macOS为Command+F8）。如果无法添加断点，请查看FAQ[调试过程中无法添加断点](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-1)。

   ![](./img/zh-cn_image_0000002602066083.png)

   设置断点后，调试能够在正确的断点处中断，并高亮显示该行。
2. 在设备选择框中，选择调试的设备。

   ![](./img/zh-cn_image_0000002571546600.png)
3. 选择启动调试的配置，在模块选择框中选择需要调试的模块。也可以通过Edit Configurations[配置调试参数](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-debug-configurations)。

   ![](./img/zh-cn_image_0000002602186133.png)
4. 在工具栏中，单击Debug![](./img/zh-cn_image_0000002602186135.png "点击放大")。

   ![](./img/zh-cn_image_0000002602186137.png)

   或者在工具栏中Run中选择Debug。

   ![](./img/zh-cn_image_0000002602186139.png)
5. 启动调试后，开发者可以通过[调试器](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debugger)进行代码调试。

   如有断点会在断点处高亮，并展示当前断点处的Frames和Variables。

   ![](./img/zh-cn_image_0000002571546602.png)
