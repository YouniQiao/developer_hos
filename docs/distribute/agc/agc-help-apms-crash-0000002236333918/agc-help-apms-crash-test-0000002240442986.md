---
title: "测试崩溃实现"
original_url: /docs/distribute/agc/agc-help-apms-crash-0000002236333918/agc-help-apms-crash-test-0000002240442986
format: md
---


通常应用程序崩溃出现的概率较小，您没必要等待崩溃出现来确定崩溃模块是否正常工作。您可以在测试应用时手动制造一个崩溃，然后在AGC上查看崩溃上报情况，以测试崩溃模块是否正常运行。

1. 参照如下示例制造一次崩溃。

   ![](../img/agc-help-apms-crash-test-0000002240442986_0.png)

   * 在测试完成后应用上架前，请确保将测试崩溃的测试代码删除。
   * 创建应用后AGC将为应用自动开通APMS服务，由于后台需要6小时准备资源，故首次查看应用崩溃情况需等待6小时后再前往AppGallery Connect。后续产生的崩溃数据将会实时上报。

   ```
   let test:string = "{name:'xiaoming' age:10}";
   let result:object = JSON.parse(test);
   ```
2. 前往崩溃页面查看上报的崩溃数据，[分析崩溃问题](/docs/distribute/agc/agc-help-apms-crash-0000002236333918/agc-help-apms-crash-analyse-0000002271413041)。
