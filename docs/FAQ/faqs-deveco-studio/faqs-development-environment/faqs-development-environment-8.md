---
format: md
title: "安装npm包失败的处理办法"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-development-environment/faqs-development-environment-8
upstream_id: FAQ/faqs-deveco-studio/faqs-development-environment/faqs-development-environment-8
last_sync: 2026-06-07
sync_hash: 00931a36
---
**问题现象**

执行npm install命令安装npm包时，可能会提示安装失败。

**解决措施**

由于未设置npm仓库地址，可执行如下命令后重新安装。

```
npm config set @ohos:registry=https://repo.harmonyos.com/npm/
```
