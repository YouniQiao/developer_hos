---
format: md
title: "ohpm私仓修改upload_max_times不生效"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-7
---


**问题描述**

默认值为100，修改为9999后仍存在100的限制。

**解决方案**

[2024-03-05T19:17:41.123] [INFO] default - "deploy\_root" environment variables: "OHPM\_REPO\_DEPLOY\_ROOT = C:\Users\uhamc\AppData\Roaming\Huawei\ohpm-repo". PS C:\Users\uhamc> ohpm-repo start

[2024-03-05T19:18:10.555] [INFO] default - config file path: "C:\Users\uhamc\AppData\Roaming\Huawei\ohpm-repo\conf\config.yaml".

ohpm-repo启动时会打印config地址。修改该config文件后，重启服务以使更改生效。

**参考链接**

[配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration)
