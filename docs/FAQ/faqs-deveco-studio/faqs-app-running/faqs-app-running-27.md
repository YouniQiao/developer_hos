---
format: md
title: "使用模拟器发起HTTPS请求时如何安装数字证书"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-27
---


**问题现象**

在使用网络代理发送HTTPS请求时，需要安装网站服务器的数字证书。

**解决措施**

1. 将证书拖拽上传至模拟器，可在文件管理的“我的手机”>“下载”目录下查看上传的文件。
2. 安装证书的方式如下：
   * 点击**设置 > WLAN >**![](./img/273ff835.png)**> 安装证书 > CA证书**，选择pem格式证书进行安装。

     ![](./img/7c0fa224.png) ![](./img/371041c1.png)
   * 在本机命令行窗口中使用以下命令打开证书管理。

     ```
     hdc shell aa start -a MainAbility -b com.ohos.certmanager
     ```

     选择从存储设备安装，安装pem格式的证书。
