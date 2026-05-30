---
title: "概述"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125
---

Profile格式为.p7b，包含HarmonyOS应用/元服务的包名、数字证书信息、HarmonyOS应用/元服务允许申请的证书权限列表，以及允许应用/元服务调试的设备列表（如果HarmonyOS应用/元服务类型为Release类型，则设备列表为空）等内容。每个HarmonyOS应用/元服务包中均必须包含一个Profile文件。

根据业务与场景需求，您可以使用不同类型的Profile。

| Profile类型 | 适用业务与场景 |
| --- | --- |
| [调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278) | 用于应用/元服务调试场景。在调试阶段，使用手动签名时，需要配置调试Profile。 |
| [发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090) | 用于应用/元服务发布场景。在发布阶段，需要使用发布Profile手动签名后，才能编译构建正式发布包。 |
| [In-house发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-profile-0000002283340021) | 用于In-house应用发布场景。发布In-house应用时，需要使用In-house发布Profile手动签名后，才能编译构建正式发布包。 |
| [指定设备发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internaltest-profile-0000002283260129) | 用于团队内部测试场景。使用指定设备发布功能时，需要使用指定设备发布Profile编译构建软件包。 |
| [企业应用发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-profile-0000002248181282) | 用于企业应用发布场景。发布企业应用时，需要使用企业应用发布Profile手动签名后，才能编译构建正式发布包。 |
