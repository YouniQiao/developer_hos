---
title: "DeviceBaseInfo"
original_url: /docs/distribute/agc/agc-help-beacon-api-data-model-0000002382718893/agc-help-beacon-api-devicebaseinfo-0000002382838601
format: md
---


| **参数** | **必选(M)/****可选(O)** | **参数类型** | **描述** |
| --- | --- | --- | --- |
| locationDeviceId | M | String | 设备ID，由UUID+Major+Minor组成的40位16进制数。 |
| name | M | String | 设备名称，长度不超过30个字符。 |
| uuid | M | String | Beacon信标设备的UUID，32位16进制数。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| major | M | Integer | Beacon信标广播中的Major字段值，取值范围：0~65535。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| minor | M | Integer | Beacon信标广播中的Minor字段值，取值范围：0~65535。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| deviceModel | M | String | 设备型号，长度不超过128个字符。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| deviceRole | M | String | 设备类型。仅允许传0（信标设备）。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| mac | O | String | 设备的Mac地址。  **更新信标设备信息时，此参数不支持修改，须与首次创建信标设备的传值保持一致。** |
| healthStatus | O | String | Beacon信标设备工作状态。   * ONLINE：在线 * OFFLINE：离线 * LOW\_BATTERY：低电量 |
| batteryLevel | M | Integer | 电量百分比，取值范围：0~100。 |
| siteId | M | String | 设备所处位置在花瓣地图上的唯一标识。  建议调用位置服务的[关键字搜索](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-keyword-search-0000001050161916)接口获取。 |
| locationInfo | M | String | 设备的位置信息。  建议调用位置服务的[关键字搜索](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-keyword-search-0000001050161916)接口获取。 |
| longitude | M | String | 经度。  建议调用位置服务的[关键字搜索](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-keyword-search-0000001050161916)接口获取。 |
| latitude | M | String | 纬度。  建议调用位置服务的[关键字搜索](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-keyword-search-0000001050161916)接口获取。 |
| classification | M | String | 设备位置二级分类，例如文旅、医院、购物等。 |
| locationFloor | O | String | 楼层信息，长度不超过14个字符。 |
| transmitPower | M | String | 广播功率，单位为dbm，取值范围：0~10dbm。 |
| broadcastInterval | M | String | 广播间隔，单位为ms，取值范围：50~2000ms。 |
