---
displayed_sidebar: appDevSidebar
title: "使用意图框架调试助手Agent进行联调时，小艺拉起应用后，出现闪退情况，应该如何处理？"
original_url: /docs/dev/app-dev/ai/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-three
format: md
upstream_id: dev/app-dev/ai/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-three
last_sync: 2026-06-07
sync_hash: 61c0f0f7
---
出现此现象时，优先排查接入意图框架的代码是否被混淆。接入意图框架的代码文件不可被混淆。关于混淆的详细内容请参考[应用代码混淆](/docs/security/code-obfuscation#section13780943192313)。若排查后问题依然存在，请检查应用的业务代码是否有其他异常引发应用闪退。
