---
format: md
title: "如何在HarmonyOS PC/2in1设备上查看MAC地址"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-50
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-50
last_sync: 2026-06-07
sync_hash: b86a78ce
---
**问题场景**

在“设置”或“关于”中未找到查看MAC地址的选项。要查看MAC地址，请按照以下步骤操作：

1. 打开设备的“设置”。

2. 选择“关于设备”或“关于手机”。

3. 滚动到“状态信息”或“设备信息”。

4. 查找“Wi-Fi MAC地址”或“蓝牙MAC地址”。

如果上述步骤无法找到MAC地址，可以尝试在设备的用户手册中查找详细信息，或联系设备制造商的客服支持。

**解决措施**

HarmonyOS PC/2in1无法直接查看MAC地址，使用hdc shell ifconfig命令查看。
