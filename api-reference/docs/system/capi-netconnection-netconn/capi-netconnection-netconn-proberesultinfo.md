---
title: "NetConn_ProbeResultInfo"
upstream_id: "harmonyos-references/capi-netconnection-netconn-proberesultinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.339659"
---

# NetConn_ProbeResultInfo

```
typedef struct NetConn_ProbeResultInfo {...} NetConn_ProbeResultInfo
```

#### 概述

定义探测结果信息。

起始版本： 20

相关模块： [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

所在头文件： [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t lossRate | 丢包率，百分制，值100表示100%丢包；50表示50%丢包。 |
| uint32_t rtt[[NETCONN_MAX_RTT_NUM]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) | 时延结果，包含最小、最大、平均、标准差。 |
