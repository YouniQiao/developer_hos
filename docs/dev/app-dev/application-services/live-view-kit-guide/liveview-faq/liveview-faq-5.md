---
displayed_sidebar: appDevSidebar
title: "关于实况窗数量约束的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-5
---

1. 创建实况时的id约束：

   * 唯一性：应用可以一次性创建多个实况窗，需要保证每个实况窗id唯一。同一id在同一时刻只能创建一个实况窗。
   * 实况窗id复用限制：当实况窗结束后，Live View Kit可以立即通过该id再次创建，Push Kit在12小时内不允许重复使用该id创建实况窗。
2. 展示实况窗时的交互约束：在通知中心通过滑动最多展示24条实况窗。通过点击胶囊弹出的实况窗列表，无法滑动，只能展示5条实况窗。
