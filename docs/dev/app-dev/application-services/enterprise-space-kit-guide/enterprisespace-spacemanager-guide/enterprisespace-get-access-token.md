---
displayed_sidebar: appDevSidebar
title: "获取企业应用访问令牌"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-get-access-token
format: md
---


## 场景介绍

从6.1.0(23)开始，支持企业应用获取访问令牌的能力。

Enterprise Space Kit为企业应用提供获取企业应用访问令牌的能力，可实现企业应用免密登录。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getaccesstoken)。

| 接口名 | 描述 |
| --- | --- |
| [getAccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getaccesstoken)(businessParams: Record\<string, string\>): Promise\<Uint8Array\> | 获取企业应用令牌并返回结果。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[getAccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getaccesstoken)接口，进行企业账号认证。

   ```
   try {
     const params: Record<string, string> = {
       'clientId': 'test1' // 业务参数，由业务方根据请求协议自定义。
     };
     const result: Uint8Array = await spaceManager.getAccessToken(params);
     console.info(`Succeeded in getting access token. Result is: ` + JSON.stringify(result));
   } catch (err) {
     console.error(`Failed to get access token. Code: ${err.code}, message: ${err.message}`);
   }
   ```
