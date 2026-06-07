---
format: md
title: "如何通过hdc命令关闭整个应用"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-47
---


可以通过以下命令结束应用：

```
hdc shell aa force-stop <bundleName>
```

返回“force stop process successfully”，表示应用已成功结束。

示例如下：

```
hdc shell aa force-stop com.example.myapplication
```

![](./img/1a38cb3b.png "点击放大")

**参考链接**

[aa工具](/docs/dev/app-dev/system/aa-tool)
