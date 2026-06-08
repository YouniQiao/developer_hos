---
format: md
title: "如何解决搭建流水线时commandline-tools-linux中sdkmgr下载开发包报错"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-76
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-76
last_sync: 2026-06-07
sync_hash: 3dd03803
---
**问**

使用 commandline-tools 工具在 Linux 上时，如果提示“Failed to request URL https://devecostudio-dre.op.hicloud.com/sdkmanager/v5/hos/getSdkList”，请检查网络连接是否正常，确保可以访问该 URL。如果网络无问题，尝试更新 commandline-tools到最新版本。

![](./img/046d512e.png "点击放大")

**解决措施**

该问题通常是因为Linux的国家码未设置为中国区所致。

请参考以下方法解决：

1. 进入sdkmgr脚本所在的文件夹：$\{命令行工具根目录\}/sdkmanager/bin。

   ![](./img/54b6e5ef.png "点击放大")
2. 打开sdkmgr文件。

   ![](./img/b7e9d908.png "点击放大")
3. 在文件的最后一行，-Dfile.encoding=UTF-8 后面添加 -Duser.country=CN。

   ![](./img/e0438ce7.png "点击放大")
4. 保存修改，再次执行sdkmgr相关命令即可。
