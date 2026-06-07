---
title: "线程模型"
original_url: /docs/dev/app-dev/application-framework/ability-kit/fa-model-development/thread-model-fa
format: md
---


[FA模型](/docs/dev/app-dev/application-framework/ability-kit/ability-terminology#fa模型)下的线程主要有如下三类：

* 主线程：

  负责管理其他线程。
* Ability线程：

  + 每个Ability一个线程。
  + 输入事件分发。
  + UI绘制。
  + 应用代码回调（事件处理，生命周期）。
  + 接收Worker发送的消息。
* Worker线程：

  执行耗时操作。

基于当前的线程模型，不同的业务功能运行在不同的线程上，业务功能的交互就需要线程间通信。线程间通信目前主要有[Emitter](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/itc-with-emitter)和[Worker](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/worker-introduction)两种方式，其中Emitter主要适用于线程间的事件同步， Worker主要用于新开一个线程执行耗时任务。

![](./img/088b028e.png)

FA模型每个Ability都有一个独立的线程，Emitter可用于Ability线程内、Ability线程间、Ability线程与Worker线程的事件同步。
