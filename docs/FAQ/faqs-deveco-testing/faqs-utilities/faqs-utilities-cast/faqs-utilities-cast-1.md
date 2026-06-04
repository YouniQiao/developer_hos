---
title: "设备投屏时，投屏画面持续加载中如何处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-utilities-cast-1
---

打开cmd窗口，在设备上执行hdc指令删除该文件：

```
hdc shell rm -r /data/local/tmp/latestScreen.jpeg
```

重试设备投屏，如果获取页面仍失败，请重启设备后再次尝试。
