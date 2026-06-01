---
title: "AirTouch格式说明"
displayed_sidebar: serviceDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/service/format-description-0000002112248816
---

import MergeTable from '@site/src/components/MergeTable';

# AirTouch格式说明

标签如果包含AirTouch格式的记录，标签内容就会转发给AirTouch，由AirTouch对内容进行处理，符合AirTouch格式的标签定义如下：

<MergeTable
  headers={['格式', '字段', '示例']}
  rows={[
    [{ text: 'AirTouch格式记录', rowspan: 3 }, 'Record Head', 'TNF：0x02（NdefRecord.TNF_MIME_MEDIA）'],
    [null, 'Type', 'hw或airtouch'],
    [null, 'Payload', 'AirTouch标签内容']
  ]}
/>
![](./img/5e9ad6c25cab.png)

AirTouch标签内容为“[创建服务](https://developer.huawei.com/consumer/cn/doc/service/create-service-0000002105172798#ZH-CN_TOPIC_0000002105172798__li1318115108185)”章节下载的标签内容（下载下来后需先进行Base64解码，再写入Payload）。

标签内容说明（Base64编码）：

Airtouch标识|AirTouch格式版本信息|AirTouch签名|AirtTouch ID|AirTouch跳转信息|AirTouch跳转参数| Airtouch签名公钥。

其中，当开发者在[新建商家直达服务](https://developer.huawei.com/consumer/cn/doc/service/create-service-0000002105172798#ZH-CN_TOPIC_0000002105172798__li20667114554214)配置签名算法字段时，如果选择HMACSHA256签名算法，则标签内容中含有AirTouch签名信息，无AirTouch签名公钥信息；如果选择RSA3072签名算法，则标签内容中含有AirTouch签名信息和AirTouch签名公钥信息。
