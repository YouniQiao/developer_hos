---
title: "智能体版本管理"
displayed_sidebar: xiaoyiSidebar
original_url: /docs/distribute/xiaoyi/developing-intelligent-agents-0000002435989592/agent-version-management-0000002532867477
format: md
upstream_id: distribute/xiaoyi/developing-intelligent-agents-0000002435989592/agent-version-management-0000002532867477
last_sync: 2026-06-07
sync_hash: 719d93fd
---
# 智能体版本管理

智能体的版本管理功能，包括查看、回退到历史版本。版本记录中包括智能体上下架及撤回审核时的版本。

**查看历史版本**

点击智能体编排页右上角【版本记录】图标可查看版本记录，点击某个版本可以查看该版本智能体编排情况。注意：查看历史版本时不可编辑智能体信息，可先切回当前或回退至此版本进行编辑。

![](./img/843841b26330.gif "点击放大")

**回退到历史版本**

点击智能体编排页右上角【版本记录】图标，选择历史版本，点击右下角【回退至此版本】将该历史版本覆盖当前智能体的草稿态版本。回退原则：

a. 因历史版本关联插件、工作流、卡片或知识库可能会发生变化，资源相关配置可能发生变化；

* 若资源已更新版本，回退后将自动关联资源的最新版本。
* 若资源已下架或删除，回退后将自动删除智能体与资源的关联关系。

b. 除插件/工作流/知识库/卡片外，其他配置均可以完全还原。

![](./img/0d90a7d4d096.gif "点击放大")
