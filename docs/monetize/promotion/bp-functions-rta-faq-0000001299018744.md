---
title: "FAQ"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-rta-faq-0000001299018744
format: md
---

# FAQ

## RTA ID是否为必填项？

RTA ID为必填项，由开发者自定义，可用于开发者内部区分不同的RTA投放策略。

## RTA时延如何验证？

开发者可以与对口的行业运营沟通，提供RTA接口地址，进行时延测试，请注意RTA接口需为HTTPS协议，同时请确保接口响应符合[响应参数定义](https://developer.huawei.com/consumer/cn/doc/distribution/promotion/bp-functions-rta-interface-request-0000001299178600#section21761435152419)。

## RTA时延对投放有什么影响？

RTA是实时接口，直接影响推广投放效率，如果时延不满足要求，会导致开发者无法正常投放。请开发者确保RTA服务器处理时延及通信网络时延的稳定性，一般情况下，为了优化时延效果，建议开发者将RTA服务器部署在华北区域。

## RTAID和taskid之间的对应关系是什么？

一个RTAID可以对应一个taskid，也可以对应多个taskid，取决于开发者的策略，不存在一个taskid对应多个RTAID的情况。

## 是一个RTA策略就下发全量请求消息？还是一个RTA接口下发全量请求消息？

一个应用使用一个RTA接口，使用一个RTA策略，在一次请求消息中发送应用下全部RTA策略（即RTA任务）。

一个RTA接口可以对应多个应用，是1对N的关系。

一个RTA策略对应一个应用，是1对1的关系。

RTA接口和RTA策略没有直接关系，两者之间通过应用间接关联，是1对N的关系。

所以，对于一个应用而言，通常是一个RTA策略，使用一个RTA接口，在一次请求消息中发送应用下全部RTA任务。

## RTA流量QPS是多少？

建议每个应用按照6w准备。

## RTA性能测试的并发量是多少，也是6w吗？

测试的并发量在5000左右。

## RTA任务叠加了人群包，RTA的请求和人群包的顺序是什么？对投放结果有什么影响吗？

RTA任务叠加人群包的顺序是RTA请求先于人群包；但是RTA和人群包的先后顺序对于投放结果没有影响，都是对候选集进行精选过滤，从而达到精准选择用户的目标；最终结果取RTA和定向交集。

## 只有RTA投放模式下的子任务才能设置RTA ID吗？

不是。系统投放和内容推荐投放模式下也可以设置RTA ID，具体要看创建子任务时是否支持设置RTA ID即可。详细支持RTA的任务请参见[支持RTA的任务类型说明](/docs/monetize/promotion/bp-functions-rta-create-0000001351897861#section3451122195920)。
