---
title: "电话"
original_url: /docs/dev/atomic-dev/ascf/apis-device/apis-telephony
format: md
upstream_id: dev/atomic-dev/ascf/apis-device/apis-telephony
last_sync: 2026-06-07
sync_hash: bef72b9f
---
## has.makePhoneCall

has.makePhoneCall(Object object)

拨打电话。

**起始版本：** 1.0.0

**参数：**

参数为Object对象，包括以下字段。

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 需要拨打的电话号码。 |
| success | function | 否 | 接口调用成功的回调函数。 |
| fail | function | 否 | 接口调用失败的回调函数。 |
| complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

**示例：**

```
has.makePhoneCall({
  phoneNumber: '请设置拨打的电话号码',
  success: () => {
    console.info('makePhoneCall success');
  },
  fail: (err) => {
    console.error('makePhoneCall fail', err);
  },
  complete: (res) => {
    console.info('makePhoneCall complete', res);
  }
});
```
