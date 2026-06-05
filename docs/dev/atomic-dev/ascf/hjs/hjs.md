---
title: "hjs"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/hjs
format: md
---


hjs是ASCF框架的一套脚本语言，结合hxml一起来构建页面。

hjs代码可以编写在hxml文件中的\&lt;hjs\&gt;标签内，也可以单独写在 .hjs 文件内。每一个\&lt;hjs\&gt;标签和.hjs文件都是一个单独的模块。

以下是一个使用 hjs 的简单示例：

```
// test.hjs
var testData = 'Hello AtomicService';
var testFun = function(param) {
  return param;
};

module.exports = {
  testData: testData,
  testFun: testFun
};
```

```
<!--index.hxml-->
<hjs src="./test.hjs" module="test"/>
<view> {{ test.testData }}</view>
<view> {{ test.testFun(msg) }}</view>
```

```
// index.js
Page({
  data: {
    msg: "hello world"
  }
});
```

* **[响应事件](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/hjs-responding-event)**
