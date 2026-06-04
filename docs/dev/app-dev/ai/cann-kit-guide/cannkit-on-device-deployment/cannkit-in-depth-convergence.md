---
displayed_sidebar: appDevSidebar
title: "深度融合"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-in-depth-convergence
---

模型推理时结合硬件深度融合，减少对DDR的访问，提升能效比。目前仅支持编译前可变shape场景，调用[HMS\_HiAIOptions\_SetTuningStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaioptions_settuningstrategy)设置模型优化策略为"HIAI\_TUNING\_STRATEGY\_ON\_DEVICE\_TUNING"。
