---
format: md
title: "el1与el2文件之间的区别"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-14
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-14
last_sync: 2026-06-07
sync_hash: 754fe819
---
三级目录el1/和el2/：代表不同文件加密类型。

el1（设备级加密区）：设备开机后可访问的数据区。

el2（用户级加密区）：设备开机后，需解锁对应用户的锁屏界面（包括密码、指纹、人脸等认证方式；若未设置锁屏则无需解锁）至少一次，才能访问加密数据区。

应用若无特殊需求，应将数据存放在el2加密目录下，以保障数据安全。对于需要在用户解锁前访问的文件，如时钟、闹铃、壁纸等，应将这些文件存放在设备级加密区（el1）。

具体关于应用沙箱路径的内容可以参考[应用沙箱路径](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory#应用沙箱目录与应用沙箱路径)。
