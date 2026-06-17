---
title: "多进程调试"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-multi-process
format: md
upstream_id: tools/coding-debug/ide-debug-multi-process
last_sync: 2026-06-07
sync_hash: 15d21c93
---
# 多进程调试

部分设备上，UIAbility支持以独立进程的方式运行并调试，详细请参考[进程模型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-stage#其他进程类型)，可按照以下步骤对UIAbility进行调试。

#### 编译构建配置

1. 新建一个Ability，该Ability继承AbilityStage，作为独立进程的入口。

   ![](./img/zh-cn_image_0000002602066025.png)
2. 右键ets目录，新建其它需要作为独立进程启动的UIAbility。

   ![](./img/zh-cn_image_0000002602066023.png "点击放大")
3. 修改module.json5配置文件，增加独立进程入口及isolationProcess配置项。

   ![](./img/zh-cn_image_0000002602186073.png)

#### 调试

1. 编写跳转UIAbility的代码。

   ![](./img/zh-cn_image_0000002571386906.png)
2. 在跳转的UIAbility中或独立进程入口处设置断点，启动调试。

   ![](./img/zh-cn_image_0000002571386908.png)

   跳转到以独立进程启动的UIAbility时将会新启动一个调试会话窗口。

   ![](./img/zh-cn_image_0000002571546542.png)
