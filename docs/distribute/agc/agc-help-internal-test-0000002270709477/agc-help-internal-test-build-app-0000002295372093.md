---
title: "编译打包应用"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-build-app-0000002295372093
---

[准备好打包所需配置文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-prepare-0000002262046566)后，即可准备编译打包应用。

1. 打开DevEco Studio，在顶部菜单栏选择“File > Project Structure”，进入“Project Structure”界面。
2. 导航选择“Project”，点击“Signing Configs”页签，取消“Automatically generate signature”勾选项，配置工程的签名信息，完成后点击“OK”。
   * Store file：密钥文件，选择之前准备好的密钥.p12文件。
   * Store password：密钥库密码，需与之前生成密钥设置的密钥库密码保持一致。
   * Key alias：密钥的别名信息，需与之前生成密钥设置的别名保持一致。
   * Key password：密钥的密码，需与之前生成密钥设置的密码保持一致。
   * Sign alg：固定设置为“SHA256withECDSA”。
   * Profile file：选择准备好的指定设备发布Profile。
   * Certpath file：选择准备好的发布证书.cer文件。

   ![](../img/agc-help-internal-test-build-app-0000002295372093_0.png)
3. 分别将应用工程下的各个module进行编译打包。**指定设备发布****仅支持编译HAP和应用内HSP包。**
   * 编译HAP包
     1. 菜单栏选择“Build > Build Hap(s)/APP(s) > Build Hap(s)”。
     2. 等待编译构建。构建完成，在各模块的“build > default > outputs > default”目录下，获取到XXX-signed.hap文件。
   * 编译HSP包（仅支持应用内HSP包）
     1. 选中待编译共享包模块，菜单栏选择“Build > Make Module \\$`{libraryName}`”。
     2. 等待编译构建。构建完成，在共享包模块的“build > default > outputs > default”目录下，获取到\*.hsp文件。
