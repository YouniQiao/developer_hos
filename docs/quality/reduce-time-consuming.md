---
title: "耗时操作减少"
original_url: /docs/quality/reduce-time-consuming
format: md
---


# 耗时操作减少

在应用开发中，避免主线程执行冗余和耗时操作至关重要。这可以降低主线程负载，提升UI响应速度。

## 避免主线程冗余操作

冗余操作是不必要的，重复执行且对程序功能无实质性贡献的操作。这些操作浪费计算资源，降低程序运行效率，特别是在高频调用时，其负面影响更为显著。下面列举一些release版本中常见的冗余操作：

* debug日志打印
* Trace打点
* 冗余空回调

具体案例与性能实验数据请参阅[常见冗余操作](/docs/quality/time-optimization-of-the-main-thread#section1193294163616)。

## 避免高频回调执行耗时操作

高频回调接口是指在应用程序运行过程中会被频繁触发的事件或回调函数。在以下常见高频回调场景中，应避免执行耗时操作：

* [高频事件回调](/docs/quality/time-optimization-of-the-main-thread#section204221336134312)
* [组件复用回调](/docs/quality/time-optimization-of-the-main-thread#section20815336174316)
* [组件生命周期回调](/docs/quality/time-optimization-of-the-main-thread#section418843713435)
* [循环渲染](/docs/quality/time-optimization-of-the-main-thread#section4551193714439)
* [组件属性](/docs/quality/time-optimization-of-the-main-thread#section166841738154316)

## 避免使用耗时接口

* 在应用开发中，调用系统接口（如文件读写或数据处理），若耗时接口使用不当，将引发延迟、卡顿、丢帧等性能问题。具体案例参阅[避免使用耗时接口](/docs/quality/time-optimization-of-the-main-thread#section193673511440)。
* 通过系统框架封装的API，可以访问、管理、增添或更新数据及其结构。数据库调用耗时较长，增、删、改、查等操作提供了异步接口，合理使用这些接口不会影响响应性能。具体案例与性能实验数据请参阅[减少调用数据库API次数](/docs/quality/application-latency-optimization-cases#section1478111913814)。
