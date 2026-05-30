---
title: "Testing API指南"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-guide-0000002236015562
---

在正式发布前，您通过Testing API可以对HarmonyOS应用/元服务版本进行测试，还可以先邀请部分测试用户进行体验，并收集用户的使用意见。

具体流程如下：

1. 调用[新建测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-test-version-0000002236041526)接口，创建应用测试版本。
2. （可选）如果是邀请测试的方式，在创建测试版本时设置了上架自检，可以调用[查询上架自检报告信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-get-detect-task-0000002525033189)接口来确认自检是否通过。
3. 调用[添加软件包](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-test-package-0000002236201330)接口，在上传软件包之后，将测试版本接口绑定软件包。
4. 在提交测试版本之前，调用[更新测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-modify-test-version-0000002271160657)接口，根据需要更新应用测试版本信息；调用[更新测试生效版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-release-test-version-0000002271000713)接口，可以将公开测试版本转为全网版本或者分阶段版本；调用[更新有效期内的测试版本时间和额度信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-update-test-version-opentest-0000002236041530)接口，可以更新有效期内的测试版本的测试时间和下载安装次数。
5. 调用[提交测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-submit-test-version-0000002236201334)接口，将测试版本提交审核。
6. （可选）如果是邀请测试的方式，则调用[新增测试群组](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-test-group-0000002271160661)接口，在测试版本中创建带邀请的测试群组；调用[查询测试群组列表](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-get-test-grouplist-0000002271000717)接口，获取已创建的测试群组列表；调用[删除测试群组](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-delete-test-group-0000002236041534)接口，触发删除邀请测试版本的测试群组。
7. （可选）如果是邀请测试的方式，在已经创建测试群组的前提下，则调用[生成邀请码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-invite-code-0000002236201342)接口，生成用于邀请测试人员的邀请码；调用[查询测试组邀请码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-get-invite-code-0000002271160669)接口，测试人员就可以使用邀请码，获取测试版本软件包进行测试；调用[停止邀请码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-stop-invite-code-0000002271000725)接口，触发停止生成邀请码。
8. 待测试完成后，调用[停止测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-stop-test-version-0000002236041542)接口，触发停止测试版本。
9. 调用[删除测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-delete-test-version-0000002236201346)接口，最终删除已停止的测试版本。
