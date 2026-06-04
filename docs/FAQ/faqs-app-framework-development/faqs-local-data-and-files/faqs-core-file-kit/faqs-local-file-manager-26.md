---
title: "从FilePicker返回的图片地址uri是不是只是在一定的时间内有访问权限"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-26
---

重启应用后，URI失效是正常现象。系统通过Picker生成的URI具有临时访问权限，应用被终止后（包括重启）该权限将失效。因此，需要重新通过Picker选择来生成新的URI。
