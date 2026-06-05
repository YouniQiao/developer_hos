---
format: md
title: "应用运行时进程资源使用规格"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-background-tasks-6
---

内存资源配额为2GB。当内存使用量连续1分钟超过2GB时，前台触发告警，后台终止进程。

* 后台10分钟单核平均使用率超过10%时，结束进程。
* 后台20分钟单核平均使用率超过7.5%时，结束进程。
* 后台单核平均使用率在60分钟内高于2.5%时，结束进程。
* 后台120分钟内单核平均使用率超过1.3%，结束进程。

  IO：资源配额1GB，进程重启后配额清零。

**参考链接**

[Stage模型开发概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stage-model-development-overview)

[Background Tasks Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/background-tasks-api)
