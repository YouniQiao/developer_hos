---
title: "三方平台"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-third-party-platform
format: md
---


## has.getExtConfig

has.getExtConfig(Object object)

获取ext配置信息。

**起始版本：** 1.0.0

**参数：**

参数为Object对象，包括以下字段。

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | function | 否 | 接口调用成功的回调函数。 |
| fail | function | 否 | 接口调用失败的回调函数。 |
| complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

**success返回值：**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| extConfig | Object | 第三方平台自定义的数据。 |

**示例：**

```
has.getExtConfig({
  success: (res) => {
    console.info('getExtConfig success', res);
  },
  fail: (err) => {
    console.error('getExtConfig fail', err);
  },
  complete: (res) => {
    console.info('getExtConfig complete', res);
  }
});
```

## has.getExtConfigSync

has.getExtConfigSync(): Object

获取ext配置信息同步方法。

**起始版本：** 1.0.0

**返回值：**

返回Object对象，第三方平台自定义的数据。

**示例：**

```
let extConfig = has.getExtConfigSync();
console.info(extConfig);
```
