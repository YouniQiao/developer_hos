---
title: "HarmonyOS标签开发流程"
original_url: /docs/distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-usage-0000002382896621
format: md
upstream_id: distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-usage-0000002382896621
last_sync: 2026-06-07
sync_hash: ecfaaa9a
---
您可以使用HarmonyOS标签服务API实现批量创建和查询HarmonyOS NEXT应用标签或元服务标签。

#### 前提条件

Software Hardware Synergy API支持Service Account方式和API客户端方式访问，在访问前需[获取服务端API授权](/docs/distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-authorize-0000002553919617)。

* HarmonyOS NEXT应用：创建HarmonyOS NEXT应用标签前，在AGC控制台创建应用链接，并[配置网址域名](/docs/dev/app-dev/application-services/app-linking-kit-guide/app-linking-startupapp#在agc为应用创建关联的网址域 名)，确保域名发布状态为“成功”。
* 元服务：创建元服务标签前，请确保您已在AGC控制台为该元服务[创建元服务链接](/docs/dev/atomic-dev/atomic-linking/atomic-applinking#section48651523147)，并确保链接状态为“已生效”。

#### 创建HarmonyOS标签

您可以调用标签服务API为HarmonyOS NEXT应用或元服务[创建HarmonyOS标签](/docs/distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-create-0000002382856341)。

#### 查询HarmonyOS标签

HarmonyOS NEXT应用标签或元服务标签创建成功后，您可以[查询HarmonyOS标签](/docs/distribute/agc/agc-help-harmonyoslabel-api-0000002382896589/agc-help-harmonyoslabel-api-query-0000002349016172)信息，包含标签名称、标签类型和标签下载路径等内容。
