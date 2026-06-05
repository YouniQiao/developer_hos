---
title: "授权"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/develop-authorization
format: md
---


部分接口在使用之前，需要经过用户授权同意，按照使用范围，这些接口被分成多个scope。用户按scope范围进行授权，此时，该scope对应的所有接口均可以被调用。

在调用这类接口前，需要在项目的配置文件中，逐个声明需要的权限，否则应用将无法获取授权，导致接口调用失败。声明文件中的字段说明及样例可查阅：[在配置文件中声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions#在配置文件中声明权限)。

开发者在对应业务功能执行前，必须先向用户发起授权申请。一旦用户明确同意或拒绝过授权，其授权关系会记录在后台，直到用户主动删除元服务。

此类接口调用时，可能出现以下情况：

* 如果用户未接受或拒绝过此权限的授权申请，将不会出现弹窗。
* 如果用户已授权，可以直接调用接口。
* 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口fail回调。请开发者兼容用户拒绝授权的场景。

![](./img/e5fbf163.png)

授权弹窗会展示元服务在元服务用户隐私保护指引中填写的说明，请按照[要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions#权限使用理由的文案内容规范)填写。

## 申请权限的方式

### 引导用户在“设置”授权

用户可以在元服务设置界面（「右上角」 - 「设置」 - 「管理」）中控制对该元服务的授权状态。

开发者可以调用 [has.openSetting](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-setting#hasopensetting) 打开设置界面，引导用户开启授权。

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

### 发起授权请求

开发者在调用需授权API之前，必须先 [has.authorize](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-authorization#hasauthorize)，向用户发起授权请求。

```
has.authorize({
  scope: 'scope.userLocation',
  success: (res) => {
    console.info('authorize success', res);
  },
  fail: (err) => {
    console.error('authorize fail', err);
  },
  complete: (res) => {
    console.info('authorize complete', res);
  }
});
```

## scope 列表

当前发起authorize请求前，开发者还需要在应用配置文件中声明所需要的HarmonyOS系统的权限，具体可参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

| **scope** | **对应接口** | **描述** | 所需权限 |
| --- | --- | --- | --- |
| scope.userLocation | [has.getLocation](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-location#hasgetlocation)  [MapContext.moveToLocation](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-map#mapcontextmovetolocation)  [has.onWifiConnected](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-wifi#hasonwificonnected)  [has.getWifiList](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-wifi#hasgetwifilist)  [has.getConnectedWifi](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-wifi#hasgetconnectedwifi)  [has.connectWifi](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-wifi#hasconnectwifi) | 精确地理位置 | ohos.permission.LOCATION  ohos.permission.APPROXIMATELY\_LOCATION |
| scope.userFuzzyLocation | [has.getFuzzyLocation](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-location#hasgetfuzzylocation)  [has.startLocationUpdate](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-location#hasstartlocationupdate)  [has.startLocationUpdateBackground](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-location#hasstartlocationupdatebackground) | 模糊地理位置 | ohos.permission.APPROXIMATELY\_LOCATION |
| scope.camera | [camera](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/components-camera)组件  [CameraContext.takePhoto](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-camera#cameracontexttakephoto)  [CameraContext.startRecord](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-camera#cameracontextstartrecord)  [has.startLivenessDetection](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-ai-face-liveness-detection#hasstartlivenessdetection) | 摄像头 | ohos.permission.CAMERA |
| scope.addPhoneCalendar | [has.addPhoneCalendar](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-calendar#hasaddphonecalendar)  [has.addPhoneRepeatCalendar](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-calendar#hasaddphonerepeatcalendar) | 添加日历 | ohos.permission.READ\_CALENDAR  ohos.permission.WRITE\_CALENDAR |
| scope.bluetooth | [蓝牙-通用](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-bluetooth)下的所有接口  [蓝牙-低功耗中心设备](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-ble)下的所有接口 | 蓝牙 | ohos.permission.ACCESS\_BLUETOOTH |
| scope.record | [camera](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/components-camera)组件  [CameraContext.startRecord](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-camera#cameracontextstartrecord)  [CameraContext.takePhoto](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-camera#cameracontexttakephoto)  [has.startRecord](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-record#hasstartrecord)  [RecorderManager.start](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-record#recordermanagerstart)  [RecorderManager.pause](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-record#recordermanagerpause)  [RecorderManager.resume](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-record#recordermanagerresume)  [RecorderManager.stop](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-record#recordermanagerstop) | 麦克风 | ohos.permission.MICROPHONE |
