---
format: md
title: "如何获知数据存储沙箱路径"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-33
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-33
last_sync: 2026-06-07
sync_hash: fc2d81cc
---
关系型数据库：

"/data/app/el2/100/database/(bundleName)/entry/rdb/"下的.db文件

键值型数据库：

"/data/app/el2/100/database/(bundleName)/entry/kvdb/\<系统默认生成文件名\>/single\_ver/main/"路径下的.db文件

首选项：

"data/app/el2/100/base/(bundleName)/haps/entry/preferences"路径下的文件

应用持久化存储路径：

"/data/app/el2/100/base/(bundleName)/haps/\<模块名\>/files/persistent\_storage"

通过[获取应用文件路径](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#获取应用文件路径)获取kvStore、Rdb路径前缀databaseDir和preferences路径前缀preferencesDir，后面自行拼接。
