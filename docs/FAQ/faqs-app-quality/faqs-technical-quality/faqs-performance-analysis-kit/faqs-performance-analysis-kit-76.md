---
format: md
title: "hdc list targets回显慢"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-76
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-76
last_sync: 2026-06-07
sync_hash: 0bb343d6
---
**问题现象**

执行hdc list targets命令回显慢。

**可能原因**

USB问题。

**解决措施**

USB原因排查思路及解决方法。

| 序号 | 排查方法 | 解决思路 |
| --- | --- | --- |
| 1 | 执行hdc -l5 list targets查询回显缓慢的日志详情 | 查看回显缓慢的日志操作并提供给hdc开发人员 |
| 2 | Windows查询设备管理器是否有带感叹号的USB设备 | 卸载设备管理器中带有感叹号的USB设备 |
| 3 | Windows打开任务管理器，查看hdc.exe启动用户是否一致 | 结束进程并重启hdc |
| 4 | unix ps -u |grep hdc查询启动hdc.exe用户 | 如启动用户和当前用户不一致，请结束后重启hdc |

Linux平台排查思路拓展：在Linux环境出现该问题，可以尝试使用time lsusb命令来排查是否usb的阻塞导致list targets回显慢，如果time lsusb执行时间大于0.5秒，则可以怀疑是USB存在问题，此时可以执行dmesg |grep -i USB来查询USB故障类型，已知故障类型及解决措施如下：

| 序号 | 故障类型 | 解决思路 |
| --- | --- | --- |
| 1 | maybe the cable is bad | 更换USB数据线；若当前使用USB2.0标准的数据线可尝试更换为USB3.0标准的数据线。 |
