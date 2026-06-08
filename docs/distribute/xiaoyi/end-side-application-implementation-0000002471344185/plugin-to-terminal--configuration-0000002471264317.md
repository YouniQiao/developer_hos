---
title: "插件工具对应在端侧文件配置"
displayed_sidebar: xiaoyiSidebar
original_url: /docs/distribute/xiaoyi/end-side-application-implementation-0000002471344185/plugin-to-terminal--configuration-0000002471264317
format: md
upstream_id: distribute/xiaoyi/end-side-application-implementation-0000002471344185/plugin-to-terminal--configuration-0000002471264317
last_sync: 2026-06-07
sync_hash: 956b916c
---
# 插件工具对应在端侧文件配置

在端侧应用工程根目录下新建PROJECT\_HOME/entry/src/main/resources/base/profile/insight\_intent.json文件。

端插件工具的名称和版本号一定要和insight\_intent.json文件中的intentName、intentVersion匹配。

```
{
  "insightIntents": [
     {
       "intentName": "CallPhone",
       "domain": "",
       "intentVersion": "1.0.1",
       "srcEntry": "./ets/entryability/InsightIntentExecutorImpl.ets",
       "uiAbility": {
         "ability": "EntryAbility",
         "executeMode": [
           "foreground"
         ]
       }
     },
     {
       "intentName": "LoadCalendarEventCard",
       "domain": "",
       "intentVersion": "1.0.1",
       "srcEntry": "./ets/entryability/InsightIntentExecutorImpl.ets",
       "uiAbility": {
         "ability": "EntryAbility",
         "executeMode": [
           "background"
         ]
       }
     },
     {
       "intentName": "Travel",
       "domain": "",
       "intentVersion": "1.0.1",
       "srcEntry": "./ets/entryability/InsightIntentExecutorImpl.ets",
       "form": {
         "ability": "EntryFormAbility",
         "formName": "widget"
       }
     },
    {
     "intentName": "SearchWeather",
     "domain": "",
     "intentVersion": "1.0.1",
     "srcEntry": "./ets/entryability/InsightIntentExecutorImpl.ets",
     "uiExtension": {
        "ability": "EntryEmbeddedUIExtAbility"
     }
    },
    {
       "intentName": "ServiceExtensionIntent",
       "domain": "",
       "intentVersion": "1.0.1",
       "srcEntry": "./ets/entryability/InsightIntentExecutorImpl.ets",
       "serviceExtension": {
          "ability": "ServiceExtAbility"
       }
     }
   ]
 }
```
