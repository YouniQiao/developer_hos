---
title: "导入小程序资源"
original_url: /docs/dev/atomic-dev/ascf/use-ide/convert-atomic-service-resources
format: md
upstream_id: dev/atomic-dev/ascf/use-ide/convert-atomic-service-resources
last_sync: 2026-06-07
sync_hash: 9c1011a3
---
开发者可以通过导入小程序的资源，来构建元服务。

1. 在DevEco Studio顶部菜单栏中选择“**Tools**&gt; **ASCF Devtools** &gt; **ASCF Converter**”。

   ![](./img/5ca0fc8a.png)
2. 选择元服务源码目录和输出目录。

   ![](./img/937c6e4d.png)

   在转换之前，请确保ascf目录为空，避免覆盖已有的代码。

   ![](./img/4d4e934b.png "点击放大")
3. 配置高级设置。

   可以通过填写对应参数控制转换器行为。当前支持以下参数：

   * --logging=[level]

     用于控制日志最低打印级别，level可取值为["debug" | "info" | "warn" | "error"]，默认级别为"info"。
   * --notaddtodo

     用于控制在转换后的源码中，不支持的接口处不添加注释。建议在压缩后的源码中添加此参数以防止不必要的注释干扰。
4. 适配元服务。

   转换完成后，部分元服务的业务实现方式可能与原小程序存在差异。请参考[开发指南](/docs/dev/atomic-dev/ascf/ascf-development-guide/ascf-development-guide)，对相关功能和要求进行适配调整。
