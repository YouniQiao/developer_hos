---
title: "设置"
original_url: /docs/dev/atomic-dev/ascf/apis-open-apis/apis-setting
format: md
---


## has.openSetting

has.openSetting(Object object)

调起元服务设置界面，并返回用户设置的操作结果。

**起始版本：** 1.0.0

**参数：**

参数为Object对象，包括以下字段。

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | function | 否 | 接口调用成功的回调函数。  从1.0.7版本开始，以键值对的形式返回授权结果。 |
| fail | function | 否 | 接口调用失败的回调函数。 |
| complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

**success返回值：**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| authSetting | Object | 以键值对的形式返回[授权](/docs/dev/atomic-dev/ascf/develop-basic-capabilities/develop-authorization)结果。例如：  &#123;  "scope.userLocation": true,  "scope.userFuzzyLocation": true,  "scope.camera": false,  "scope.record": false,  "scope.bluetooth": true,  "scope.addPhoneCalendar": false  &#125;  **起始版本：** 1.0.7 |

**示例：**

```
has.openSetting({
  success: (res) => {
    console.info('openSetting success', res);
  },
  fail: (err) => {
    console.error('openSetting fail', err);
  },
  complete: (res) => {
    console.info('openSetting complete', res);
  }
});
```

## has.getSetting

has.getSetting(Object object)

获取用户的当前设置。**返回值中只会出现元服务已经向用户请求过的权限**。

**起始版本：** 1.0.4

**参数：**

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | function | 否 | 接口调用成功的回调函数。 |
| fail | function | 否 | 接口调用失败的回调函数。 |
| complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

**success返回值：**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| authSetting | Object | 以键值对的形式返回[授权](/docs/dev/atomic-dev/ascf/develop-basic-capabilities/develop-authorization)结果。例如：  &#123;  "scope.userLocation": true,  "scope.userFuzzyLocation": true,  "scope.camera": false,  "scope.record": false,  "scope.bluetooth": true,  "scope.addPhoneCalendar": false  &#125; |

**示例：**

```
has.getSetting({
  success: (res) => {
    let authSetting = res.authSetting;
    console.info('getSetting success', res);
  },
  fail: (err) => {
    console.error('getSetting fail', err);
  },
  complete: (res) => {
    console.info('getSetting complete', res);
  }
});
```
