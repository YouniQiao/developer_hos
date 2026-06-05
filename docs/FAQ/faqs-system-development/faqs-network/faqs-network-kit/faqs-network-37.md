---
format: md
title: "手机网络正常，但是调用connection.hasDefaultNet()接口失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-37
---


**问题现象**

手机已连接互联网，浏览器可以正常访问网页，但调用hasDefaultNet方法时失败，回调函数进入了错误处理流程。

**原因**

未申请ohos.permission.GET\_NETWORK\_INFO权限。

**解决措施**

connection.hasDefaultNet接口需要申请ohos.permission.GET\_NETWORK\_INFO权限。在Stage模型中，开发者需在module.json5配置文件中声明该权限。参考代码如下：

```
{
  "module": {
    // ...
    "requestPermissions": [
      {
        "name": "ohos.permission.GET_NETWORK_INFO",
        "reason": "$string:reason",
        "usedScene": {
          "abilities": [
            "FormAbility"
          ],
          "when": "inuse"
        }
      }
    ]
  }
}
```

**参考链接**

[访问控制概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-token-overview)
