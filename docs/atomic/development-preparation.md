---
title: "开发准备"
original_url: /docs/dev/atomic-dev/ads-kit-atomicservice/development-preparation
format: md
---


## 申请权限

元服务在使用Ads Kit能力前，需要检查是否已经获取对应权限。如未获得授权，需要声明对应权限。

Ads Kit所需的权限有：

* ohos.permission.INTERNET：用于请求和展示广告、回传竞价结果。

在模块的module.json5中配置所需申请的权限，示例代码如下所示：

```
{
  "module": {
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```
