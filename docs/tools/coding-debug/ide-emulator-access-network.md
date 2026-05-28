---
title: "模拟器访问网络"
displayed_sidebar: toolsSidebar
---

# 模拟器访问网络

#### 模拟器访问互联网

模拟器可以通过本地计算机的网络直接访问互联网。

模拟器访问互联网实际上利用的是本地计算机的以太网或者WLAN，与本地计算机共享同一网络资源。如果无法连接网络，请确认本地网络访问是否受到了限制（如使用公司内网）。如果网络访问受到限制，则需要在模拟器上配置网络代理，请参考[网络代理设置](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section206461549731)。

如果访问网络时需要安装数字证书，请参考[使用模拟器发起https请求时如何安装数字证书](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-27)。

![](./img/note_3.0-zh-cn.png)

由于模拟器的虚拟以太网一直处于连接状态，断开本地计算机的网络或模拟器内的WiFi，无法使模拟器进入网络完全断开的状态。

#### 模拟器访问本机网络

在本地计算机上建立网络服务端，模拟器可以通过10.0.2.2:&lt;localPort&gt;访问本地计算机服务端，其中10.0.2.2为模拟器的默认网关。

#### 两个模拟器实现互相访问

如果两个模拟器需要进行通信互联，请按如下步骤进行设置。

1. 在本地计算机上，运行模拟器A和模拟器B，模拟器本机IP为10.0.2.15。
2. 在模拟器B上设置服务端，使其监听10.0.2.15:&lt;serverPort&gt;。
3. 在本地计算机上，设置从本地计算机localhost:&lt;localPort&gt;到模拟器B 10.0.2.15:&lt;serverPort&gt;的重定向，如：

   ```
   hdc -t 127.0.0.1:5555 fport tcp:<localPort> tcp:<serverPort>
   ```

   该命令中127.0.0.1:5555为模拟器B的HDC服务端口号，可通过hdc list targets命令查询。
4. 在模拟器A上，设置客户端连接到10.0.2.2:&lt;localPort&gt;，其中10.0.2.2为模拟器的默认网关。

![](./img/zh-cn_image_0000002602184835.png)
