---
title: "自定义字体的注册方式是什么，如何从资源存放路径中取出字体资源"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-47
---

在工程中存放自定义字体资源文件，通过代码中的registerFont接口注册这些字体，然后在文本组件中使用fontFamily属性引用。

推荐使用 $rawfile 方式引用自定义字体资源，资源应放置在 resources/rawfile 目录下。

获取字体资源可参考如下代码：

```
this.getUIContext().getFont().registerFont({
  familyName: 'Gealova',
  familySrc: $rawfile('font/gealova.otf')
})
```

**参考链接**

[@ohos.font (注册自定义字体)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-font)
