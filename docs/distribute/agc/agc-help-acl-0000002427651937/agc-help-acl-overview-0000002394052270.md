---
title: "概述"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-acl-overview-0000002394052270
format: md
---


ACL权限即允许普通应用使用ACL方式跨级别申请的system\_basic权限，又名受限开放权限。关于每个ACL权限的介绍、可用场景及其建议方案，请参考[受限开放权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)。

若应用/元服务确定使用ACL权限，请按如下流程操作：

**第一步：****[申请ACL权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138)**

首先需在AGC申请ACL权限，AGC会根据应用/元服务的使用场景审核是否可以使用对应的权限。

**第二步：****[添加ACL权限至Profile文件中](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-0000002270709473)**

审批通过、应用/元服务获取ACL权限后，您需创建用于签名的Profile文件，Profile文件将包含应用/元服务已获取的所有ACL权限。

**第三步：[在软件包配置文件中声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)**

在软件包配置文件中添加权限信息。

![](../img/agc-help-acl-overview-0000002394052270_0.png)

在Profile中添加的权限必须包含软件包中声明的所有权限。如果应用/元服务使用的权限超出申请范围，或申请权限后使用的功能和场景超出可使用的范围，将影响应用/元服务调试或上架。
