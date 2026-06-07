---
format: md
title: "ArkTS线程模型和并发"
original_url: /docs/FAQ/faqs-arkts-threading-model
---


* **[有哪些创建线程的方式](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-2)**
* **[应该如何设计大量线程并发方案](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-25)**
* **[如何设置Task优先级](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-26)**
* **[线程间JS对象通过序列化方式进行数据通信，是否存在性能问题](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-24)**
* **[TaskPool和Worker的异同点](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-27)**
* **[Worker和TaskPool的线程数量是否有限制](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-28)**
* **[JS线程通过napi创建的C++线程的处理结果，如何返回JS线程](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-30)**
* **[系统多线程模型是什么样的](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-32)**
* **[是否支持Context跨线程传递](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-33)**
* **[在多线程并发场景中，如何实现安全访问同一块共享内存](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-34)**
* **[子线程和主线程的优先级及任务执行策略是什么](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-35)**
* **[ArkTS中Worker线程、TaskPool线程如何与宿主线程通信](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-36)**
* **[ArkTS是否支持类似Java的共享内存模型进行多线程开发](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-37)**
* **[ArkTS的线程机制是怎么样的？每个线程是一个单独的JS引擎吗？如果每个线程开销较小的话，为什么要限制线程数量](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-39)**
* **[TaskPool在任务执行过程中如何跟主线程进行通信？如何操作同一块内存变量](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-40)**
* **[对于多线程操作首选项和数据库是不是线程安全的？还是每一个线程独立的](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-41)**
* **[如果在ArkTS中大部分后台任务（计算、埋点、数据存储）都使用异步并发的方式，是否会使主线程响应变慢，引起卡顿掉帧问题](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-42)**
* **[在ArkTS的主线程中使用await会阻塞主线程吗](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-43)**
* **[是否可以在TaskPool中动态加载模块（HAR、HSP、SO）](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-47)**
* **[TaskPool线程内存如何共享](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-58)**
* **[TaskPool后台I/O任务池，应用能否自行做管控？是否有方法开放管理机制](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-59)**
* **[如何解决应用需要避免创建过多线程，并发处理任务数量受限，无法充分发挥设备性能的问题](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-60)**
* **[Worker线程内存如何共享](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-66)**
* **[如何判断是否为主线程](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-68)**
* **[如何对异步方法进行插桩/替换](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-100)**
* **[ArkTS实现多Worker实例](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-103)**
* **[如何使用TaskPool在子线程调用对象成员函数](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-120)**
* **[如何在Worker中开启多级子线程](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-121)**
* **[如何在TaskPool和Worker获取上下文Context](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-122)**
* **[是否支持#include \<memory\_resource\>和std::pmr::vector](/docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-149)**
