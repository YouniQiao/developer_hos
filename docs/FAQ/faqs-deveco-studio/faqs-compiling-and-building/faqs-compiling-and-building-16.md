---
format: md
title: "应用/服务的启动界面信息缺失，提示“Schema validate failed”报错"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-16
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-16
last_sync: 2026-06-07
sync_hash: cc20a561
---
**问题现象**

在工程同步或编译构建时，出现“Schema validate failed”的错误提示。

![](./img/ecb4087d.png)

**解决措施**

在开发应用/服务时，创建工程后，默认设置了启动界面信息。如果开发者误删其中某个字段，将导致报错。下面以重新设置启动界面信息为例，为提高冷启动性能，可以通过以下方式设置启动界面的图标和背景颜色。

1. 在模块的**resources > base > element**目录下，右键点击并选择**New > Element Resource File**来创建资源文件。

   ![](./img/16b092bc.png)
2. 在弹出的对话框中，开发者可以自定义“File name”，例如 color；“Root element”请选择 **color**。

   ![](./img/ab4fa1aa.png)

   创建完成后，color.json文件如下图所示：

   ![](./img/1c38d651.png)
3. 将[2](#zh-cn_topic_0000001233028585_li124901748185712)创建的color.json文件拷贝至模块的**ohosTest > resources > base > element**目录下。

   ![](./img/468fe495.png)
4. 在模块的**src > main > module.json5**文件的abilities数组中，添加startWindowIcon和startWindowBackground字段。若缺少任一字段，将出现ERROR: Schema validate failed报错。startWindowIcon字段索引模块下**resources > base > media**中的图标资源，startWindowBackground字段索引**resources > base > element > color.json**中的颜色。

   ![](./img/21c9cddd.png)
5. 在**src > ohosTest > module.json5**文件的abilities数组中，添加startWindowIcon和startWindowBackground字段。其中，startWindowIcon字段引用模块ohosTest下 **resources > base > media**中的图标资源，startWindowBackground字段引用 **resources > base > element > color.json**中的颜色。
