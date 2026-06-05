---
format: md
title: "如何查询应用堆内存的已分配内存大小和堆内存的空闲内存大小"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-15
---


目前有两种方法可以查询当前CPU占用，如下：

在代码中查询：

查询应用堆内存的已分配内存大小使用 hidebug.getNativeHeapAllocatedSize，查询空闲内存大小使用 hidebug.getNativeHeapFreeSize。

参考代码如下：

```
let nativeHeapAllocatedSize: bigint = hidebug.getNativeHeapAllocatedSize(); // Get the allocated memory size of the heap memory in this application
let nativeHeapFreeSize: bigint = hidebug.getNativeHeapFreeSize(); // Get the free memory size of the heap memory in this application
```

在命令行中查询：

使用 --mem pid 命令可以获取总内存占用率；如果指定了 pid，则获取该 pid 对应的内存占用率。

```
hidumper --mem pid
```

**参考链接**

[hidebug.getNativeHeapFreeSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug#hidebuggetnativeheapfreesize)

[hidebug.getNativeHeapAllocatedSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug#hidebuggetnativeheapallocatedsize)

[hidumper](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper)
