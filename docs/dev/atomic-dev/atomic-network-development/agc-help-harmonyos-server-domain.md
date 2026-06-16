---
title: "配置服务器域名"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-server-domain
format: md
upstream_id: dev/atomic-dev/atomic-network-development/agc-help-harmonyos-server-domain
last_sync: 2026-06-16
---

# 配置服务器域名

## 前提条件

## 配额限制

同一个元服务每个自然月服务器域名修改次数，默认为50次。每修改一次域名，剩余修改次数减一。

若修改次数不能满足您的需求，您可发送邮件向华为运营人员申请放宽限制。在收到您的申请后，华为运营人员将在1-3个工作日内为您安排对接人员。申请方法如下：

## 配置服务器域名

如果“修改”按钮置灰不可点击，表示已将此元服务授权给服务商，请联系授权的服务商操作。具体修改方法，请参考服务商配置服务器域名。

域名仅支持英文大小写字母、数字以及符号“-”“.”，且单个域名长度不能超过128个字符，不同域名之间以英文";"分隔。

配置项

说明

httpRequest合法域名

httpRequest服务器域名，以“https://”开头，支持两种配置方法：

例如域名配置为`https://myserver`.com:8080，后续只能向`https://myserver`.com:8080发起请求。如果向`https://myserver`.com、`https://myserver`.com:9091等URL发起请求则会失败。

例如域名配置为`https://myserver`.com，后续请求的URL中将不能包含端口，即使是向默认的443端口（`https://myserver`.com:443）发起请求也会失败。

webSocket合法域名

webSocket服务器域名，以“wss://”开头，不需要配置端口，默认允许请求该域名下所有端口。

download合法域名

download服务器域名，以“https://”开头，支持两种配置方法：

例如域名配置为`https://myserver`.org:8080，后续只能向`https://myserver`.org:8080发起请求。如果向`https://myserver`.org、`https://myserver`.download:9091等URL发起请求则会失败。

例如域名配置为`https://myserver`.org，后续请求的URL中将不能包含端口，即使是向默认的443端口（`https://myserver`.org:443）发起请求也会失败。

upload合法域名

upload服务器域名，以“https://”开头，支持两种配置方法：

例如域名配置为`https://myserver`.net:8080，后续只能向`https://myserver`.net:8080发起请求。如果向`https://myserver`.net、`https://myserver`.net:9091等URL发起请求则会失败。

例如域名配置为`https://myserver`.net，后续请求的URL中将不能包含端口，即使是向默认的443端口（`https://myserver`.net:443）发起请求也会失败。

可能出现的域名配置错误有以下几种情况：

失败原因

解决方法

该域名协议头非法

按照服务器域名类型修改为合法协议头。

不能使用IP地址作为域名

设置为合法域名。

不能使用本地域名localhost

设置为合法域名。

域名格式只支持英文大小写字母、数字及符号“-”“.”

去除域名中包含的非法字符。

webSocket域名不能包含端口号

webSocket服务器类型的域名不需要配置端口，默认允许请求该域名下所有端口，去除域名中包含的端口。

域名长度超过128

单个域名长度不超过128个字符。

为保障安全不可使用此域名地址

配置的域名存在于域名禁止清单内，已被全局禁用，需替换为合法域名。

后续若您需要修改或删除已添加的域名，可点击“修改”进行刷新。

新增或更新的域名，将于24小时后生效。

## 跳过域名校验

在元服务开发过程中，您可以在HarmonyOS设备端临时开启“开发中元服务豁免管控”选项，跳过服务器域名的校验。操作方法如下：

选项开启后在设备上运行非正式版本的元服务时，将不再进行服务器域名的校验。

服务器域名配置成功后，建议您关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。
