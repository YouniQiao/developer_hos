---
displayed_sidebar: appDevSidebar
title: "未成年人模式开启后USB断连如何解决"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-13
format: md
upstream_id: dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-13
last_sync: 2026-06-07
sync_hash: 671c7b08
---
开发者可以进入设置-系统-开发者选项，点击USB调试开关，会校验健康使用设备密码，校验成功后可解除开发者调试模式限制。

如开发者重新开启USB调试开关后，发现DevEco Studio工具上hilog日志未恢复到断连之前，请执行“hdc shell hilog -G 16M”来扩大hilog日志缓存区，若hilog日志仍无法完全展示，可取出hilog日志本地查看。更多命令请参见[hilog](/docs/dev/app-dev/system/hilog)。
