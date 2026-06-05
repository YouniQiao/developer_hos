---
format: md
title: "录制结束时提示录制失败，无录制文件生成"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-test-12
---

**可能原因**

录制能力依赖的uitest检测能力被其他程序占用。

**解决措施**

重启手机或使用命令以杀死该服务，命令如下：

```
hdc shell killall -9 uitest
```
