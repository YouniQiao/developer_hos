---
title: "FAQ"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-link-faq-0000001299338236
format: md
upstream_id: monetize/promotion/bp-functions-link-faq-0000001299338236
last_sync: 2026-06-07
sync_hash: 2d138e40
---
# FAQ

## 华为监测链接发送服务提供哪些用户行为数据？

提供展示曝光、行为点击、下载完成、安装完成场景的数据。

## 监测链接发送服务通过什么接口对接，开发者是否需要更新APP版本？

开发者和推广平台之间通过服务端方式对接，开发者不需要更新APP版本。

## 展示曝光、行为点击、下载完成、安装完成事件的监测链接可以配置成一样的吗？

可以配置成一样的，虽然链接是一样的，但是实际是针对不同用户场景时触发，因此发送的信息代表的含义不同。

## 监测链接中支持自定义宏参数吗？

只能使用定义好的宏参数，不支持自定义的宏参数。

## 监测链接中可以设置固定值的参数吗？

可以，有些开发者为了区分不同的媒体渠道通常会在华为提供的参数外再自行设置一个固定值参数。

## 如何获取测试手机的OAID？

设置-隐私-广告与隐私-更多信息-广告标识符（OAID）。

## 获取不到OAID或者获取的OAID为空，怎么处理？

1. 需要设备的EMUI为3.0及以上版本，HMS Core（APK）为2.6.2及以上版本。
2. 需要确保用户未开启手机的限制个性化广告开关。
3. 推荐使用移动安全联盟的OAID采集SDK。

## 监控链接什么场景下OAID返回的是空？

如果限制广告跟踪开关开启了，会获取不到OAID，回传的OAID就是空值。

## 快游戏如何获取OAID进行数据回传？

runtime版本获取<strong>oaid</strong>方式请参见[qg.getOAID接口文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickgame-api-getoaid-0000001439846464)。H5版本获取<strong>oaid</strong>方式请参见[device.getOAID接口文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-api-device-0000001075389690#section10872012268)。

## 监测链接接口响应超时时间是多久？

接口响应超时时间为1s。

## 监测链接归因是否必须基于“主任务+子任务”？

是，监测链接归因必须基于“主任务+子任务”。主任务ID是整体推广活动的核心标识，子任务ID用于细分策略追溯。由于在特定场景下，子任务ID可能为空，因此需要两者结合归因。子任务ID为空时，主任务ID可确保数据归属整体活动不丢失；子任务ID有效时，能进一步拆解细分效果，实现全面归因。
