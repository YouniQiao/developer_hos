---
format: md
title: "在docker或者wsl系统中，无USB设备节点，hdc执行后无返回信息"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-66
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-66
last_sync: 2026-06-07
sync_hash: dfbe536b
---
**问题现象**

1. 运行hdc命令没有任何回显或存在Connect server failed.

2. 查看hdc.log日志存在报错信息USB mod ctxUSB is nullptr, recompile please.

**可能原因**

1. docker未映射外接USB设备到容器内，导致/dev/bus/usb节点为空。

2. 使用的hdc版本过低，使用3.1.0e(API15 SDK)或更高版本的hdc工具，将支持无USB设备节点启动服务进程（hdc server）。

**解决措施**

1. 在docker映射外接USB设备，使得/dev/bus/usb出现对应的设备，提供两种常用方法：

方法一：device参数（推荐且安全）。

* 主机查找设备，执行lsusb列出USB设备，使用dmesg | grep tty\*或ls /dev/tty\*查看串口设备信息。
* 运行容器：使用--device将主机的设备节点映射到容器内。

```
# 映射USB串口设备如/dev/ttyUSB0
docker run -it --device=/dev/ttyUSB0:/dev/ttyUSB0 image_name
# 映射通用USB设备如/dev/bus/usb/001
docker run -it --device=/dev/bus/usb/001 image_name
```

方法二：privileged参数（操作简单，容器获得主机所有USB设备访问权限，安全风险较大）。

```
docker run -it --privileged image_name
```

2. 请参考[hdc版本配套表](/docs/dev/app-dev/system/hdc#hdc版本配套表)更新到API15（3.1.0e）或更高版本。
