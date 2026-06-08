---
title: "应用和元服务可复用设计"
original_url: /docs/dev/atomic-dev/app-atomic-service-reusable/app-atomic-service-reusable
format: md
upstream_id: dev/atomic-dev/app-atomic-service-reusable/app-atomic-service-reusable
last_sync: 2026-06-07
sync_hash: fabd67a4
---
我们提供了两种可复用设计模式来帮助开发者实现应用和元服务间的代码或者功能复用：

* 开发态可复用设计：在开发阶段将元服务的代码复用到应用，在应用内快速实现和元服务相同的功能。应用和元服务分别打包上架，在运行态用户可以通过元服务体验功能，也可以通过应用来体验相同的功能。应用和元服务包体都包含了这一部分的功能代码，通过自身的功能入口分别对用户提供相同的服务。

  ![](./img/666b4c4e.png)

  应用和元服务之间共享的模块代码只能使用元服务API集。

* 运行态可复用设计：在开发阶段，应用不需要实现和元服务相同的功能，也不需要将元服务的功能代码复用到应用中。只需要在应用的界面中增加运行元服务的功能入口，通过系统提供的嵌入式运行元服务的能力，将元服务的功能页面嵌入到应用中完成对元服务的功能复用。

* **[开发态可复用设计](/docs/dev/atomic-dev/reusable-develop-state/reusable-develop-state)**
* **[运行态可复用设计](/docs/dev/atomic-dev/reusable-runtime-state/reusable-runtime-state)**
