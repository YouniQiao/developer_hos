---
title: "用户身份认证"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/user_authentication-0000002290451165
---

## 场景介绍

用户身份认证是各类应用中的高频使用场景之一，如用户查看重要文件、登录银行账户、支付交易时需要进行身份认证，保护隐私信息安全。

本示例通过[用户认证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth)实现用户身份认证（指纹认证或锁屏密码认证），认证成功后进入文件预览。

## 效果预览

![](./img/a922d35d.gif "点击放大")

![](./img/9293e835.png)

指纹认证和锁屏密码认证界面无法录制。

## 实现思路

定义用户认证相关参数（指纹认证，锁屏密码认证）、用户认证界面相关参数，拉起用户认证，认证成功后进入文件预览。

```
// 定义用户认证相关参数
let authParam: userAuth.AuthParam = {}
// 定义用户认证界面配置相关参数
let widgetParam: userAuth.WidgetParam = {}
// 拉起用户认证
static async startUserAuth(authParam: userAuth.AuthParam, widgetParam: userAuth.WidgetParam,
callback: VoidCallback, context: common.Context) {
  try {
    let userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    userAuthInstance.on('result', {
      onResult: (result) => {
        // 认证成功
        if (result.result === userAuth.UserAuthResultCode.SUCCESS) {
          filePre(context)
          callback()
        }
      }
    })
    userAuthInstance.start()
  } catch (e) {
    // ...
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。
* 获取身份认证权限：[ohos.permission.ACCESS\_BIOMETRIC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionaccess_biometric)。

## 工程目录

```
├──entry/src/main/ets                        // 代码区
│  ├──common
│  │  └──Constants.ets                       // 常量文件
│  ├──component
│  │  ├──CommonTimeLine.ets                  // 时间轴组件
│  │  └──FileComponent.ets                   // 文件展示组件
│  │  └──PdfComponent.ets                    // Pdf文件展示组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──pages
│  │  ├──MainPage.ets                        // 首页
│  │  └──UserAuthPage.ets                    // 用户身份认证页
│  └──utils
│     ├──Logger.ets                          // 日志工具类
│     ├──FileUtil.ets                        // 文件预览工具类
│     └──UserAuth.ets                        // 身份认证工具类
└──entry/src/main/resources                  // 应用资源目录
```

## 参考文档

[@ohos.userIAM.userAuth（用户认证）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth)

## 代码下载

[用户身份认证示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100033.18874011951296865714879194937859%3A50001231000000%3A2800%3AA1DAC9362652D702A94391C484635656A3464AD0ACFE845B3F72100F098AD509.zip?needInitFileName=true)
