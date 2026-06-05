---
title: "存储数据"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/develop-data-storage
format: md
---


每个元服务都可以有自己的本地缓存，可以通过以下接口对本地缓存进行读写和清理。

| API | 描述 |
| --- | --- |
| [has.setStorage](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hassetstorage) | 将数据存储在本地缓存中指定的key中。 |
| [has.setStorageSync](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hassetstoragesync) | has.setStorage的同步版本。 |
| [has.getStorage](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasgetstorage) | 获取指定key的缓存。 |
| [has.getStorageSync](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasgetstoragesync) | has.getStorage的同步版本。 |
| [has.clearStorage](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasclearstorage) | 清空本地缓存。 |
| [has.clearStorageSync](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasclearstoragesync) | has.clearStorage的同步版本。 |
| [has.removeStorage](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasremovestorage) | 删除指定key的缓存。 |
| [has.removeStorageSync](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasremovestoragesync) | has.removeStorage的同步版本。 |
| [has.getStorageInfo](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasgetstorageinfo) | 获取缓存的信息。 |
| [has.getStorageInfoSync](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-data-storage#hasgetstorageinfosync) | has.getStorageInfo的同步版本。 |

**示例：**

```
has.setStorageSync('key1', 'test-data');
let res = has.getStorageSync('key1');
console.info(`res = ${res}`);
```

## 隔离策略

同一个用户，同一个元服务 storage 上限为10MB。

storage以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据；不同元服务之间也无法互相读写数据。

## 清理策略

本地缓存的清理时机跟安装包一样，只有在安装包被清理的时候本地缓存才会被清理。
