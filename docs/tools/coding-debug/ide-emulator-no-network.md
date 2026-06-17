---
title: "离线部署模拟器"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-emulator-no-network
format: md
upstream_id: tools/coding-debug/ide-emulator-no-network
last_sync: 2026-06-07
sync_hash: 6e4ae06e
---
# 离线部署模拟器

如果开发者所使用的电脑处于完全无网络的离线环境中，需要先在一台可访问网络的电脑上准备好DevEco Studio并下载模拟器镜像，将DevEco Studio和模拟器镜像文件拷贝到无网络电脑中。

<strong>有网络电脑：</strong>

在可访问网络的电脑上下载安装DevEco Studio，并下载所需的模拟器镜像，具体可参考[创建模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create)。

例如在Windows电脑下载手机镜像，并指定镜像下载路径为D:\Sdk，实际完整的镜像路径是D:\Sdk\system-image\HarmonyOS-xxx\phone\_all\_x86。

![](./img/note_3.0-zh-cn.png)

如未指定镜像下载路径，默认路径请参考[创建模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create)。

<strong>无网络电脑：</strong>

1. 将DevEco Studio和模拟器镜像文件拷贝到无网络电脑中，需要注意有网络和无网络电脑的镜像子文件夹路径（如system-image\HarmonyOS-xxx\phone\_all\_x86）要保持一致。

   拷贝镜像时，在无网络电脑新建存放镜像的目录，如D:\No-network\Sdk，在此目录下新建镜像子文件夹路径system-image\HarmonyOS-xxx\phone\_all\_x86，将有网络电脑phone\_all\_x86下的所有文件拷贝到该路径下。
2. 在无网络电脑上创建模拟器，注意创建时将镜像路径更改为上个步骤的路径，如D:\No-network\Sdk，具体可参考[创建模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create)，创建成功后即可使用模拟器。

   ![](./img/zh-cn_image_0000002571385668.png)
