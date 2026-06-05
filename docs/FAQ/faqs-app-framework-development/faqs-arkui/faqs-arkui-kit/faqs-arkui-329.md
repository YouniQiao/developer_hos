---
format: md
title: "LocalStorage频繁读写复杂对象时性能变差的原因是什么？"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-329
---

LocalStorage的读写操作是同步的，读取或写入时程序会阻塞，直到操作完成，由于同步阻塞特性，频繁操作会导致主线程卡顿，特别是复杂对象需要序列化/反序列化时会产生额外开销，不推荐频繁修改复杂对象。
