---
title: "Scan Kit常见问题"
original_url: /docs/dev/atomic-dev/atomic-code-scan-development/atomic-scan-faq
format: md
upstream_id: dev/atomic-dev/atomic-code-scan-development/atomic-scan-faq
last_sync: 2026-06-07
sync_hash: 098d7fd7
---
## Scan Kit无法识别多个码图

**问题现象**

实时扫描多个码图时，只返回一个码图结果。

**解决措施**

1. 检查[ScanOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api#scanoptions)的enableMultiMode参数是否设置为true，开启多码扫描。
2. 检查ScanOptions的scanTypes参数是否已设置相应的码类型。
3. 检查开发者的码图类型是否在Scan Kit所定义支持的码图类型内。
4. 目前实时扫描多个码图时，最多仅支持返回4个码图。
5. 如还未解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

## 上传软件包时提示“上传的软件包与声明支持设备不一致”

**问题现象**

在进行元服务应用上架操作中，上传软件包时，AGC平台提示“上传的软件包与声明支持设备不一致，请重新上传或修改可支持设备”。

**解决措施**

1. 检查开发者的工程entry路径下，module.json5文件中的“deviceTypes”是否和AGC平台上元服务应用支持的设备勾选的元服务应用基本信息中支持的设备保持一致。
2. 如支持设备勾选手机，那么module.json5中“deviceTypes”需配置为：phone。
3. 如还未解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

## 相册扫码识别多码失败

**问题现象**

启动默认界面进行扫码，当开启相册扫码识别多码时，识别失败。

**解决措施**

相册扫码只支持单码识别。

## 条形码识别错误

**问题现象**

条形码识别过程中存在码图类型识别错误的场景。

**解决措施**

条形码识别是通过粗细黑白条组成的模式来进行匹配，由于条形码的图案都比较相似，不同类型的码会出现误匹配现象，Scan Kit在不断优化扫码识别算法，持续提升识别的准确率。

## 默认界面扫码取消后，如何感知

**问题现象**

调用默认界面扫码功能，没有扫码直接关闭，如何在逻辑中判断？

**解决措施**

开启扫码，却没有进行任何扫码操作而直接取消扫码，可以从回调中获取返回错误码：[1000500002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-error-code#section1000500002-用户取消扫码)，用户取消扫码，据此自行修改逻辑操作。

## 通过字节数组生成的码图无法识别

**问题现象**

Scan Kit识别该码图内容显示内容为乱码，无法解析。

**解决措施**

通过字节数组生成码图，Scan Kit识别该码图内容显示内容为乱码，这种字节数组需要专门的解码器解析，例如地铁闸机。
