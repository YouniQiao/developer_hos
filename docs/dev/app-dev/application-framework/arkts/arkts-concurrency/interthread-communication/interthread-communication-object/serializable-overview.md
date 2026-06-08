---
title: "线程间通信对象概述"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview
last_sync: 2026-06-07
sync_hash: 3eb8f7e8
---
在多线程并发场景中，例如通过TaskPool或Worker创建后台线程，不同线程间需要进行数据交互。由于线程间内存隔离，线程间通信对象必须通过序列化实现值拷贝或内存共享。

![](./img/c439e681.png)

* 单次序列化传输的数据量大小限制为16MB。
* 序列化不支持使用[@State装饰器](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state)、[@Prop装饰器](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop)、[@Link装饰器](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link)等装饰器修饰的复杂类型。

目前ArkTS支持线程间通信的对象有以下几种：

* [普通对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/normal-object)：可直接传递基本数据类型及自定义对象（需满足序列化规范）。
* [容器类对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/container-object)：可直接传递已经支持的容器类对象（需满足序列化规范）。
* [ArrayBuffer对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object)：用于二进制数据的高效传递，适用于大段连续内存数据（如图片、音频原始数据）。
* [SharedArrayBuffer对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/shared-arraybuffer-object)：支持多线程共享内存，允许线程间直接访问同一块内存区域，提升数据传递效率。
* [Transferable对象（NativeBinding对象）](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object)：支持跨线程转移对象所有权（如文件描述符、图形资源等），转移后原线程不再拥有访问权限。
* [Sendable对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable)：符合ArkTS语言规范的可共享对象，需通过[@Sendable装饰器](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable装饰器)标记，并且满足Sendable约束，详情可查[Sendable使用规则与约束](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints)。
