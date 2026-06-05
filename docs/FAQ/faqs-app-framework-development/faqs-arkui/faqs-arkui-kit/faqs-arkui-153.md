---
format: md
title: "Image或者ImageSpan传入一个string类型的路径时无法加载图片"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-153
---


**解决措施**

string类型的路径图片无法加载的可能情况以及对应的解决方案如下：

1. 使用的网络图片的路径

   确保网络图片路径可用，并且申请了ohos.permission.INTERNET权限，具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
2. 使用沙箱路径或媒体库路径

   支持file://路径前缀的字符串，应用沙箱URI：file://\<bundleName\>/\<sandboxPath\>。应用沙箱路径URI构造可参考[constructor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri#constructor10)。沙箱路径需要使用[fileUri.getUriFromPath(path)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri#fileurigeturifrompath)方法将路径转换为应用沙箱URI，然后传入显示。同时需要保证目录包路径下的文件有可读权限。
3. 使用base64字符串

   需要注意路径格式，路径格式为data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data]，其中[base64 data]为Base64字符串数据。

**参考链接：**

[加载图片资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-graphics-display#加载图片资源)
