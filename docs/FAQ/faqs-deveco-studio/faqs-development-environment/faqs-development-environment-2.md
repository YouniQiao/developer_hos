---
format: md
title: "导入Sample时，提示连接Gitee超时"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-development-environment/faqs-development-environment-2
upstream_id: FAQ/faqs-deveco-studio/faqs-development-environment/faqs-development-environment-2
last_sync: 2026-06-07
sync_hash: 7e21a2fd
upstream_hash: 55d7a97a9b76
---

**问题现象**

导入Sample时，如果连接gitee.com的443端口超时，会提示“Failed to connect to gitee.com port 443: Time out”。

![](./img/1e5d3aeb.png)

**解决措施**

该问题可能是由于网络受限导致的，请检查网络连接状态。如果确实受限，需要通过代理服务器访问网络，请按照以下步骤配置git代理信息。

1. 打开Git安装目录（默认为C:\\Program Files\\Git），双击运行“git-cmd.exe”文件。
2. 在打开的命令行窗口中，执行以下命令配置代理服务器信息（将proxyUsername、proxyPassword、proxyServer和port按照实际代理服务器进行修改）。

   ![](./img/f52bd374.png)

   如果密码中包含特殊字符，如 @、#、\* 等，可能导致配置不生效。建议将这些特殊字符替换为 ASCII 码，并在 ASCII 码前加百分号 %。常用符号替换为 ASCII 码的对照表如下：

   * !：%21
   * @：%40
   * #：%23
   * $：%24
   * &：%26
   * \*：%2A

   ```
   git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
   ```
3. 执行完成后，请重新尝试导入Sample。
