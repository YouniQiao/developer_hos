---
title: "位置"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-location-development
format: md
---


## 位置服务开发概述

移动终端设备已经深入人们日常生活的方方面面，如查看所在城市的天气、新闻轶事、出行打车、旅行导航、运动记录。这些习以为常的活动，都离不开定位用户终端设备的位置。

当用户处于这些丰富的使用场景中时，系统的位置能力可以提供实时准确的位置数据。对于开发者，设计基于位置体验的服务，也可以使应用的使用体验更贴近每个用户。

当应用在实现基于设备位置的功能时，如：驾车导航，记录运动轨迹等，可以调用该模块的API接口，完成位置信息的获取。

### 位置服务简介

位置子系统使用多种定位技术提供服务，如GNSS定位、基站定位、WLAN/蓝牙定位（基站定位、WLAN/蓝牙定位后续统称“网络定位技术”）；通过这些定位技术，无论用户设备在室内或是户外，都可以准确地确定设备位置。

位置服务除了提供基础的定位服务之外，还提供了地理围栏、地理编码、逆地理编码、国家码等功能和接口。

* **坐标**

  系统以1984年世界大地坐标系统为参考，使用经度、纬度数据描述地球上的一个位置。
* **GNSS定位**

  基于全球导航卫星系统，包含：GPS、GLONASS、北斗、Galileo等，通过导航卫星、设备芯片提供的定位算法，来确定设备准确位置。定位过程具体使用哪些定位系统，取决于用户设备的硬件能力。
* **基站定位**

  根据设备当前驻网基站和相邻基站的位置，估算设备当前位置。此定位方式的定位结果精度相对较低，并且需要设备可以访问蜂窝网络。
* **WLAN、蓝牙定位**

  根据设备可搜索到的周围WLAN、蓝牙设备位置，估算设备当前位置。此定位方式的定位结果精度依赖设备周围可见的固定WLAN、蓝牙设备的分布，密度较高时，精度也相较于基站定位方式更高，同时也需要设备可以访问网络。

### 运作机制

位置能力作为系统为应用提供的一种基础服务，需要应用在所使用的业务场景，向系统主动发起请求，并在业务场景结束时，主动结束此请求，在此过程中系统会将实时的定位结果上报给应用。

### 约束与限制

使用设备的位置能力，需要用户进行确认并主动开启位置开关。如果位置开关没有开启，系统不会向任何应用提供位置服务。

设备位置信息属于用户敏感数据，所以即使用户已经开启位置开关，应用在获取设备位置前仍需向用户申请位置访问权限。在用户确认允许后，系统才会向应用提供位置服务。

## 申请位置权限开发指导

### 场景概述

应用在使用位置服务系统能力前，需要检查是否已经获取用户授权访问设备位置信息。如未获得授权，可以向用户申请需要的位置权限。

系统提供的定位权限有：

* ohos.permission.LOCATION：用于获取精准位置，精准度在米级别。
* ohos.permission.APPROXIMATELY\_LOCATION：用于获取模糊位置，精确度为5公里。
* ohos.permission.LOCATION\_IN\_BACKGROUND：用于应用切换到后台仍然需要获取定位信息的场景。

访问设备的位置信息，必须申请权限，并且获得用户授权。

**表1** 位置权限申请方式介绍

| target API level | 申请位置权限 | 申请结果 | 位置的精确度 |
| --- | --- | --- | --- |
| 小于9 | ohos.permission.LOCATION | 成功 | 获取到精准位置，精准度在米级别。 |
| 大于等于9 | ohos.permission.LOCATION | 失败 | 无法获取位置。 |
| 大于等于9 | ohos.permission.APPROXIMATELY\_LOCATION | 成功 | 获取到模糊位置，精确度为5公里。 |
| 大于等于9 | 同时申请ohos.permission.APPROXIMATELY\_LOCATION和ohos.permission.LOCATION | 成功 | 获取到精准位置，精准度在米级别。 |

如果应用在后台运行时也需要访问设备位置，需要申请ohos.permission.LOCATION\_IN\_BACKGROUND权限或申请LOCATION类型的长时任务，这样应用在切入后台之后，系统可以继续上报位置信息。

应用如需使用后台位置权限，需要在设置界面由用户手动授予，具体授权方式请参考[ohos.permission.LOCATION\_IN\_BACKGROUND的权限说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation_in_background)。

长时任务申请可参考[长时任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/continuous-task)。

开发者可以在应用配置文件中声明所需要的权限，具体可参考[向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)。

## 获取设备的位置信息开发指导

### 场景概述

开发者可以调用位置相关接口，获取设备实时位置，或者最近的历史位置。

对于位置敏感的应用业务，建议获取设备实时位置信息。如果不需要设备实时位置信息，并且希望尽可能的节省耗电，开发者可以考虑获取最近的历史位置。

### 接口说明

获取设备的位置信息所使用的接口如下，详细说明参见：[位置服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)。

**表2** 获取设备的位置信息接口介绍

| 接口名 | 功能描述 |
| --- | --- |
| on(type: 'locationChange', request: LocationRequest, callback: Callback\&lt;Location\&gt;): void | 开启位置变化订阅，并发起定位请求。 |
| off(type: 'locationChange', callback?: Callback\&lt;Location\&gt;): void | 关闭位置变化订阅，并删除对应的定位请求。 |
| getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback\&lt;Location\&gt;): void | 获取当前位置，使用callback回调异步返回结果。 |
| getCurrentLocation(request?: CurrentLocationRequest): Promise\&lt;Location\&gt; | 获取当前位置，使用Promise方式异步返回结果。 |
| getLastLocation(): Location | 获取最近一次定位结果。 |

### 开发步骤

1. 获取设备的位置信息，需要有位置权限，位置权限申请的方法和步骤见[申请位置权限开发指导](#申请位置权限开发指导)。
2. 导入geoLocationManager模块，所有与基础定位能力相关的功能API，都是通过该模块提供的。

   ```
   import geoLocationManager from '@ohos.geoLocationManager';
   ```
3. 获取单次定位，多用于查看当前位置、签到打卡、服务推荐等场景：

   **方式一：**

   获取系统缓存的最新位置，如果系统当前没有缓存位置会返回错误码。推荐优先使用该接口获取位置，可以减少系统功耗；如果对位置的新鲜度比较敏感，可以先获取缓存位置，将位置中的时间戳与当前时间对比，若新鲜度不满足预期可以使用方式二获取位置。

   ```
   import geoLocationManager from '@ohos.geoLocationManager';
   import BusinessError from "@ohos.base";
   try {
       let location = geoLocationManager.getLastLocation();
   } catch (err) {
       console.error("errCode:" + (err as BusinessError.BusinessError).code + ",errMessage:" + (err as BusinessError.BusinessError).message);
   }
   ```

   **方式二：**

   获取当前位置。首先要实例化[CurrentLocationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#currentlocationrequest)对象，用于告知系统该向应用提供何种类型的位置服务，以及位置结果上报的频率。如果对位置的返回速度和精确度要求较高，建议[LocationRequestPriority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#locationrequestpriority)参数优先选择FIRST\_FIX，会同时使用GNSS定位、基站定位和WLAN、蓝牙定位技术，以便室内和户外场景下，通过此策略都可以获得位置结果，当各种定位技术都有提供位置结果时，系统会选择其中精度较好的结果返回给应用。由于同时使用各种定位技术，对设备的硬件资源消耗较大，功耗也较大。如果对定位结果精度要求不高，建议参数选择LOW\_POWER，主要使用基站定位和WLAN、蓝牙定位技术，也可以同时提供室内和户外场景下的位置服务，因为其依赖周边基站、可见WLAN、蓝牙设备的分布情况，定位结果的精度波动范围较大，但可以有效节省设备功耗。

   因为设备环境、设备所处状态、系统功耗管控策略等的影响，定位返回的时延会有较大波动，建议单次定位设置10秒定位时延。

   以策略选择为FIRST\_FIX为例，调用方式如下：

   ```
   import geoLocationManager from '@ohos.geoLocationManager';
   import BusinessError from "@ohos.base";
   let requestInfo: geoLocationManager.CurrentLocationRequest = {'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX, 'timeoutMs': 10000};
   let locationChange = (err:BusinessError.BusinessError, location:geoLocationManager.Location):void => {
       if (err) {
           console.error('getCurrentLocation: err=' + JSON.stringify(err));
       }
       if (location) {
           console.log('getCurrentLocation: location=' + JSON.stringify(location));
       }
   };
   try {
       geoLocationManager.getCurrentLocation(requestInfo, locationChange);
   } catch (err) {
       console.error("errCode:" + (err as BusinessError.BusinessError).code + ",errMessage:" + (err as BusinessError.BusinessError).message);
   }
   ```
4. 持续定位，多用于导航、运动轨迹、出行等场景：

   首先要实例化[LocationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#locationrequest)对象，用于告知系统该向应用提供何种类型的位置服务，以及位置结果上报的频率。建议[LocationRequestPriority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#locationrequestpriority)参数优先选择FIRST\_FIX，会同时使用GNSS定位、基站定位和WLAN、蓝牙定位技术，以便室内和户外场景下，通过此策略都可以获得位置结果，当各种定位技术都有提供位置结果时，系统会选择其中精度较好的结果返回给应用。

   以策略选择为FIRST\_FIX为例，调用方式如下：

   ```
   import geoLocationManager from '@ohos.geoLocationManager';
   import BusinessError from "@ohos.base";
   let requestInfo: geoLocationManager.LocationRequest = {'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX, 'timeInterval': 1};
   let locationChange = (location:geoLocationManager.Location):void => {
       console.log('locationChanger: data: ' + JSON.stringify(location));
   };
   try {
       geoLocationManager.on('locationChange', requestInfo, locationChange);
   } catch (err) {
       console.error("errCode:" + (err as BusinessError.BusinessError).code + ",errMessage:" + (err as BusinessError.BusinessError).message);
   }
   ```

   如果不主动结束定位可能导致设备功耗高，耗电快；建议在不需要获取定位信息时及时结束定位。

   ```
   geoLocationManager.off('locationChange', locationChange);
   ```
