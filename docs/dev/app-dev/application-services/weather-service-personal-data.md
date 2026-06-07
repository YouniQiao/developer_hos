---
displayed_sidebar: appDevSidebar
title: "个人数据处理说明"
original_url: /docs/dev/app-dev/application-services/push-kit-guide/push-personal-data
format: md
---


Weather Service Kit基于调用方提供的位置信息查询对应位置的天气预报数据，不主动采集用户的位置信息。

![](./img/6c7df60b.png)

全球范围支持大致位置信息（小数点后两位），仅中国支持精确位置信息（小数点后五位）。

## 华为处理的个人数据清单

最后修改时间：2026/1/30

| 个人数据清单 | 使用目的 | 存留期 |
| --- | --- | --- |
| 经纬度（小数点后两位/五位） | 根据经纬度查询天气数据。 | 不存储。 |

## 指导开发者如何帮助最终用户实现对数据的控制

* 如何清除最终用户的数据

  经纬度经过假名化处理，不与用户ID、设备ID等可识别用户身份的信息关联，云侧服务器不存储。
