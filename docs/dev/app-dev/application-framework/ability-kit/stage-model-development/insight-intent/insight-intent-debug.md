---
title: "调试意图"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-debug
---

## 概述

意图框架提供了一个意图调试工具，便于接入意图框架后进行意图调试。该工具支持查询意图、执行意图。

## 约束限制

仅支持在手机上进行意图调试，且对应的API版本不低于20。

## 功能接入

1. 开启意图调试能力。

   1. 打开设备的“设置”应用。
   2. 选择“系统”菜单。
   3. 选择“开发者选项”菜单。
   4. 选择“意图框架调试”菜单，开启该功能开关。
2. 查看意图：在意图框架调试页面，点击“查看设备上所有意图”。

   开发者可以在当前页面查看所有已注册的意图。
3. 调试意图。

   1. 配置意图参数。
   2. 点击“执行意图”。

      如果开发者实现的意图正确，则执行成功。执行结果：

   | 装饰器类型 | 执行模式 | 意图调用结果 |
   | --- | --- | --- |
   | [@InsightIntentLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintentlink) | UI\_ABILITY\_FOREGROUND | 页面跳转，下方出现半模态窗口展示意图调用返回结果。 |
   | [@InsightIntentPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintentpage) | UI\_ABILITY\_FOREGROUND | 页面跳转，下方出现半模态窗口展示意图调用返回结果。 |
   | [@InsightIntentEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintententry) | UI\_ABILITY\_FOREGROUND | 页面跳转，下方出现半模态窗口展示意图调用返回结果。 |
   | [@InsightIntentEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintententry) | UI\_ABILITY\_BACKGROUND | 下方出现半模态窗口展示意图调用返回结果。 |
   | [@InsightIntentEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintententry) | UI\_EXTENSION\_ABILITY | 下方出现半模态窗口展示内嵌[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability#uiextensionability)页面。 |
   | [@InsightIntentFunctionMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintentfunctionmethod) | UI\_ABILITY\_BACKGROUND | 下方出现半模态窗口展示意图调用返回结果。 |
   | [@InsightIntentForm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintentform) | - | 内嵌卡片页面，点击卡片可跳转至应用 |
