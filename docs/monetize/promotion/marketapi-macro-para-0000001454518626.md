---
title: "监测链接的宏参数说明"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-macro-para-0000001454518626
format: md
---

# 监测链接的宏参数说明

<strong>监测链接的定义格式如下：</strong>

```
https://xxx.xxx.xxx/xxx?key1=value1&key2=value2
```

<strong>具体格式样例如下：</strong>

https://www.example.com?taskId=\_\_AID\_\_&taskName=\_\_AID\_NAME\_\_&appid=\_\_APP\_ID\_\_&appName=\_\_APP\_NAME\_\_&channelId=\_\_CHANNEL\_ID\_\_&channelName=\_\_CHANNEL\_NAME\_\_&groupId=\_\_GROUP\_ID\_\_&groupName=\_\_GROUP\_NAME\_\_&oaid=\_\_OAID\_\_&action=\_\_ACTION\_TYPE\_\_&timestamp=\_\_TS\_\_&callBack=\_\_CALLBACK\_\_

<strong>监测链接所支持的宏参数如下表所示。</strong>

| 参数 | 说明 |
| --- | --- |
| \_\_AID\_\_ | 任务ID。  可从[查询推广任务列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-queryadtasklist-0000001135467040)中获取。 |
| \_\_AID\_NAME\_\_ | 任务名称。  可从[查询推广任务列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-queryadtasklist-0000001135467040)中获取。 |
| \_\_APP\_ID\_\_ | 应用ID。 |
| \_\_APP\_NAME\_\_ | 应用名称。 |
| \_\_CHANNEL\_NAME\_\_ | 智能分包名称。  若未开启智能分包直接返回空。 |
| \_\_CHANNEL\_ID\_\_ | 智能分包渠道号ID。  若未开启智能分包直接返回空。 |
| \_\_GROUP\_NAME\_\_ | 定向包名称。  若非定向任务直接返回空。 |
| \_\_GROUP\_ID\_\_ | 定向包ID。  若非定向任务直接返回空。 |
| \_\_OAID\_\_ | 客户端采集上报的OAID信息。 |
| \_\_ID\_TYPE\_\_ | 唯一标识类型。  取值范围：   - 0：表示系统低版本（安卓10版本以前）IMEI号作为唯一标识，MD5的32位小写加密。   注意：  获取用户设备识别号时，有OAID则回传OAID ，无OAID则回传IMEI（安卓10版本以前）。  具体回传机制请参见[回传用户行为数据接口](https://developer.huawei.com/consumer/cn/doc/distribution/promotion/bp-functions-ocpd-interface-return-0000001238484400)。 |
| \_\_UNIQUE\_ID\_\_ | 设备唯一标识的md5摘要。  32位小写加密。  注意：  仅支持安卓低版本。 |
| \_\_ACTION\_TYPE\_\_ | 归因类型：   - IMP：对应精准曝光监测链接 - CLICK：对应点击上报监测链接 - DOWNLOAD：对应下载上报监测链接 - INSTALL：对应安装上报监测链接 - DEEPLINKCLICK：对应打开跳转deeplink上报监测链接 |
| \_\_TS\_\_ | 以毫秒为单位时间戳（北京时间），例如：1625714142001。  不同事件TS对应的含义不同：   - 展示曝光：应用市场客户端推广位曝光时间 - 行为点击：用户点击的时间。具体口径：   - 点击icon   - 图片   - 视频   - 热词   - 安装按钮   - 打开按钮 - 下载完成：应用下载完成时间 - 安装完成：应用安装完成时间 - 应用打开：应用点击“打开”按钮的时间 |
| \_\_CALLBACK\_\_ | 推广请求时生成的归因标识ID用于进行转化数据回传。  若需要使用oCPD时，该数据回传是后续创建oCPD任务的前提，请务必添加这个宏。  参数示例：   ``` "callBack":"security:384330423431434635444431424135413031433739464631353338 4545413042:B4559624D440788AC9.....7D43E5DDCB68820" ``` |
| \_\_SUB\_TASKID\_\_ | 子任务ID。  若为定向字词子任务直接返回空。 |
| \_\_RTAID\_\_ | RTA ID。 |
