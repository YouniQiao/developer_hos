---
title: "意图装饰器生成和小艺智能体创建"
displayed_sidebar: aiAssistSidebar
original_url: /docs/tools/ai-assist/ide-insight-intent2
format: md
upstream_id: tools/ai-assist/ide-insight-intent2
last_sync: 2026-06-07
sync_hash: 11075833
---
# 意图装饰器生成和小艺智能体创建

通过装饰类或方法可以将应用的功能定义为"意图"，然后将应用功能以"意图"形式集成至系统入口。用户通过系统入口（如语音助手、智能推荐卡片）触发意图执行，即可便捷使用应用提供的功能。

从DevEco Studio 6.0.0 Beta2开始，CodeGenie新增通过装饰器开发意图的功能，支持生成五类意图装饰器。同时，DevEco Studio新增Application Agent入口，通过该入口可完成意图插件注册、智能体创建等，提升开发效率。

## 使用约束

* 使用API 20及以上版本。
* 仅支持使用团队账号登录时，添加意图插件。个人加入目标团队方式具体可参考[添加成员](/docs/distribute/agc/agc-help-developid-0000002235870038/agc-help-manageaccount-0000002306610129#section151241455193313)。
* 应用在AGC已注册，具体可参考[创建HarmonyOS应用](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-create-app-0000002247955506#section1772711713288)。
* 生成意图装饰器时使用HarmonyOS Ask智能体。

## 意图装饰器分类

CodeGenie提供了几类意图装饰器，开发者可根据业务场景进行选择，具体请参考[意图装饰器定义](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator)：

* @InsightIntentLink装饰器：在class头部或内部位置唤起意图装饰器，在class上方插入生成的代码。
* @InsightIntentPage装饰器：在@Component头部/struct结构体内部/选中整个结构体区域唤起意图装饰器，在@Entry上方插入生成的代码。
* @InsightIntentFunction装饰器：在类中静态方法区域唤起意图装饰器，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。
* @InsightIntentForm装饰器：在继承FormExtensionAbility的class头部或内部唤起意图装饰器，在class上方插入生成的代码。
* @InsightIntentEntry装饰器：在直接继承InsightIntentEntryExecutor的class头部或内部唤起意图装饰器，在class上方插入生成的代码。

### @InsightIntentLink装饰器

1. 打开module.json5文件，配置<strong>abilities > skills > uris</strong>字段。uri格式要求请参考[应用链接说明](./app-uri-config.md)。

   ![](./img/zh-cn_image_0000002602186303.png)
2. 在class头部或内部位置，右键选择 <strong>CodeGenie > Insight Intent > Link Insight Intent</strong>。

   ![](./img/zh-cn_image_0000002571387160.png)
3. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](./img/zh-cn_image_0000002602066273.png)
4. 生成结果后，点击对话框中生成代码块右上方的<strong>插入</strong>按钮，在class上方插入生成的代码。开发者可基于结果微调，实现意图调用。

   ![](./img/zh-cn_image_0000002602186337.png)

### @InsightIntentPage装饰器

基于组件导航（Navigation）的子页面使用，@Component和struct需成对出现。

1. 在@Component头部\struct结构体内部\选中整个结构体区域，点击<strong>右键 > CodeGenie > Insight Intent > Page Insight Intent</strong>。

   ![](./img/zh-cn_image_0000002571546800.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](./img/zh-cn_image_0000002571387164.png)
3. 生成结果后，点击对话框中生成代码块右上方的<strong>插入</strong>按钮，在@Entry上方插入生成的代码。开发者可基于结果微调，实现意图调用。

   ![](./img/zh-cn_image_0000002571546798.png)

### @InsightIntentFunction装饰器

1. 在类中静态方法区域，右键选择 <strong>CodeGenie > Insight Intent > Function Insight Intent</strong>。

   ![](./img/zh-cn_image_0000002571546804.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](./img/zh-cn_image_0000002602066285.png)
3. 生成结果后，点击对话框中生成代码块右上方的<strong>插入</strong>按钮，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。开发者可基于结果微调，实现意图调用。

   ![](./img/zh-cn_image_0000002602066283.png)

### @InsightIntentForm装饰器

1. 基于FormExtensionAbility使用，在继承FormExtensionAbility的class头部或内部，右键选择<strong>CodeGenie > Insight Intent > Form Insight Intent</strong>。

   ![](./img/zh-cn_image_0000002602066247.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](./img/zh-cn_image_0000002602186299.png)
3. 生成结果后，点击对话框中生成代码块右上方的<strong>插入</strong>按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。

   ![](./img/zh-cn_image_0000002571387170.png)

### @InsightIntentEntry装饰器

1. 基于InsightIntentEntryExecutor使用，在直接继承InsightIntentEntryExecutor的class头部或内部，右键选择<strong>CodeGenie > Insight Intent > Entry Insight Intent</strong>。

   ![](./img/zh-cn_image_0000002571387134.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](./img/zh-cn_image_0000002571546796.png)
3. 生成结果后，点击对话框中生成代码块右上方的<strong>插入</strong>按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。

   ![](./img/zh-cn_image_0000002571546770.png)

## 生成意图插件和创建小艺智能体

1. 点击DevEco Studio右上角![](./img/zh-cn_image_0000002571546766.png)图标登录个人账号，再切换至个人所在的团队账号。

   ![](./img/note_3.0-zh-cn.png)

   * 个人账号需要完成实名认证，具体请参考[实名认证](https://developer.huawei.com/consumer/cn/doc/start/rna-0000001062530373)。
   * 如下企业开发者账号为某团队账号名称，仅供参考。

   ![](./img/zh-cn_image_0000002571546806.png)
2. 在意图注解代码块内部任意位置，右键选择<strong>CodeGenie > Add Intent Plugin</strong>，生成的意图注解插件将注册到小艺智能平台中。

   ![](./img/zh-cn_image_0000002571387156.png)
3. 在DevEco Studio菜单栏点击<strong>View > Tool Windows > Application Agent</strong> ，打开内嵌的小艺智能平台新建智能体和添加插件。小艺智能平台更多具体操作可参考[鸿蒙智能体](https://developer.huawei.com/consumer/cn/doc/service/developer-guide-0000002469667881)。