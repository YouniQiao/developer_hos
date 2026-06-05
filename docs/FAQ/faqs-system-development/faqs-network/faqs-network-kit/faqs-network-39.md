---
format: md
title: "按照Axios三方库的下载安装步骤安装Axios，报错404如何解决"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-39
---

**问题现象**

按照Axios三方库的下载安装步骤安装Axios，执行命令npm install @ohos/axios --save报错，错误码为404。

**解决措施**

错误码404表示资源文件未找到。可能镜像环境配置错误或者OHPM代理配置错误。

1. 打开DevEco中的终端命令窗口。
2. 输入命令：

   ```
   ohpm config set registry https://repo.harmonyos.com/ohpm/
   ```
3. 执行安装Axios三方库的命令：

   ```
   ohpm install @ohos/axios
   ```

OHPM代理配置可参考[配置OHPM代理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-environment-config#section10372836765)
