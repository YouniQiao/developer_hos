---
format: md
title: "运行测试用例时，结果树始终处于加载状态"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-test/faqs-app-test-3
upstream_id: FAQ/faqs-deveco-studio/faqs-app-test/faqs-app-test-3
last_sync: 2026-06-07
sync_hash: 63c02a48
upstream_hash: f3230c27fc83
---

**问题现象**

如果多个模块（如entry和feature模块）同时依赖HSP，在设备上先运行entry和HSP模块，再执行feature模块下的测试用例时，任务结果树会一直处于加载状态，无法正常完成。

![](./img/8b270529.png)

**解决措施**

1. 打开非entry模块的ohosTest/ets/testrunner/OpenHarmonyTestRunner.ts文件。
2. 在lMonitor与want中分别增加moduleName字段，该字段用于指定当前模块的名称（即该模块下的module.json5文件中module字段下name的值）。示例代码如下：

   ![](./img/3c21a3df.png)
