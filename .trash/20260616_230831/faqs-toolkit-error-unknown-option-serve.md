---
title: "报错ERROR: unknown option '--serve'"
original_url: /docs/dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-error-unknown-option-serve
format: md
upstream_id: dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-error-unknown-option-serve
last_sync: 2026-06-07
sync_hash: e8283572
---
**问题现象**

1. 点击启动按钮![](./img/8299a616.png)后长时间无反应，元服务无法正常启动。
2. 命令行启动热重载，报错信息为：error: unknown option '--serve'。

**可能原因**

ASCF ToolKit版本低于最低依赖版本要求。

**解决措施**

请将ASCF ToolKit版本升级至1.0.4以上，方法请参考：[升级已有项目的ASCF Toolkit版本](/docs/dev/atomic-dev/ascf/ascf-plugin#升级已有项目的ascf-toolkit版本)。
