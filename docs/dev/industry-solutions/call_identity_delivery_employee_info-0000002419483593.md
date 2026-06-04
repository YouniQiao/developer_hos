---
title: "来电显示企业员工信息"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/call_identity_delivery_employee_info-0000002419483593
---

## 场景介绍

来电显示企业员工信息是综合办公类应用中的高频使用场景之一。

本示例通过[Call Service Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-introduction)通话服务和[@ohos.data.relationalStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore)关系型数据库，使应用不启动仍可获取来电员工信息，并展示在通话页面前台。

## 效果预览

![](./img/1e3ca485.gif "点击放大")

## 实现思路

1. 在主进程EntryAbility类中，创建一个用于存储员工信息的rdb数据库。
2. 初始化数据库，导入相关员工数据，手动存储一位员工信息用于测试。
3. 非第一次启动此应用时，需跳过初始化流程。
4. 自定义ExtensionAbility类型组件并继承CallerInfoQueryExtensionAbility，将this.context转化为common.Context类型。
5. 重写onQueryCallerInfo方法，通过入参phoneNumber查询rdb数据库获取员工信息并返回。
6. 使用[Call Service Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-introduction)前，需[开通推送服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-config-setting)。
7. 通过邮件[申请接入](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/callservice-enterprise-contact-display#section9684181513312)企业来电显示能力。
8. 申请成功后，需重新申请调试Profile。
9. 在应用配置文件module.json5中注册extensionAbilities。
10. 在调试设备上，打开电话应用，点击右上角“更多”图标，进入“设置->陌生号码和信息识别”页面，开启对应企业应用的号码识别功能开关，进行调试。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                                   // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                               // 创建并初始化rdb数据库用于查询员工信息
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──entrycallability
│  │  └──EntryCallAbility.ets                           // 复写onQueryCallerInfo方法
│  └──pages
│     └──Index.ets                                      // 入口界面
└──entry/src/main/resources                             // 应用资源目录
```

## 参考文档

[Call Service Kit简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-introduction)

[@ohos.data.relationalStore模块描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore)

[开通推送服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-config-setting)

[企业联系人信息来去电页面显示](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/callservice-enterprise-contact-display)

## 代码下载

[来电显示企业员工信息示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164306.45031619167024920378974186027010%3A50001231000000%3A2800%3A5BFA14D6E87EFFA15E91351FFFD5FEC95D84CE09C3EF006ADCC8C5F84A9B2455.zip?needInitFileName=true)
