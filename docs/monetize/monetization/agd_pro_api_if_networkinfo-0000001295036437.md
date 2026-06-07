---
title: "NetworkInfo"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_api_if_networkinfo-0000001295036437
format: md
---



| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| connectType | M | `Integer` | 网络类型。  取值范围：   * 0：未知 * 1：wifi * 2：2G * 3：3G * 4：4G * 5：5G |
| carrier | M | `Integer` | 运营商信息。  取值范围：   * 0：未知 * 1：移动 * 2：联通 * 3：电信 |
| plmn | O | `String` | 移动网络编码。 |
| ip | M | `String` | 请求广告时，对应设备的公网IPv4地址。如果获取到的是IPv6，也可传入对应的IPv6地址参数。  多个端使用代理时，允许上传相同的代理IP地址。 |
