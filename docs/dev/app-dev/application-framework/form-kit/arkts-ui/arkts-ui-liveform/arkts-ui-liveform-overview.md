---
title: "互动卡片概述"
original_url: /docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview
format: md
upstream_id: dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview
last_sync: 2026-06-07
sync_hash: 5a453087
---
从API version 20开始，支持互动卡片。互动卡片提供卡片动效能力，例如卡片破框动效，丰富信息提醒、浅层交互功能，显著提升用户体验。

## 使用场景

互动卡片包含两种类型：趣味交互类型互动卡片和场景动效类型互动卡片。

### 趣味交互类型

趣味交互类型互动卡片，提供卡片小游戏功能，当用户点击卡片时，开始体验对应卡片小游戏。当前仅支持基于[快游戏](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-interact-card-0000002045917828)开发。详细请参考[趣味交互类型互动卡片开发指导](/docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development)。

**图1** 趣味交互类型互动卡片样例

![](./img/fabca1e9.gif)

### 场景动效类型

场景动效类型互动卡片支持实现动态效果。以天气卡片为例，当天气变为雷雨天气时，卡片激活并触发互动卡片动效。动效结束后，卡片恢复原有显示效果。详细信息请参考[场景动效类型互动卡片概述](/docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview)。

## 约束和限制

* 互动卡片作为卡片功能的增强，卡片自身业务不能强依赖互动卡片动效能力。
