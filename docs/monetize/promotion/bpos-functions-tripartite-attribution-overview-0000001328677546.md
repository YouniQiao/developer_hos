---
title: "概述"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-overview-0000001328677546
format: md
---

# 概述

鲸鸿动能广告支持使用业界常用的监测平台进行转化效果跟踪，当前支持的监测平台如下：

| 三方监测平台 | 监测目标 | OAID归因支持的SDK版本 | Referrer归因支持的SDK版本 | 是否支持回传 |
| --- | --- | --- | --- | --- |
| [AppsFlyer](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-appsflyer-0000001328357950) | 效果 | 支持5.4.0以上版本 | 支持6.2.3以上版本 | 是 |
| [Adjust](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-adjust-0000001379677869) | 效果 | 支持4.2.2以上版本 | 支持4.28.6以上版本 | 是 |
| [Kochava](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-kochava-0000001379837565) | 效果 | 支持3.8.0及以上版本 | / | 是 |
| [Sizmek](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-sizmek-0000001328517630) | 品牌 | 支持 | / | 否 |

## 曝光、点击数据监测流程

如果您想使用任何一个三方监测平台监测曝光、点击数据，您只需要按照如下步骤进行操作。如果您想监测更多的数据，例如：安装、激活、付费等数据，您可以参考步骤1中“三方监测平台”列表。

1. 在三方监测平台获取曝光和点击监测链接。

   详细操作请参照下表：

   | 三方监测平台 | 是否需要设置监测链接 | 监测链接获取指导 |
   | --- | --- | --- |
   | [AppsFlyer](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-appsflyer-0000001328357950) | 是 | [AppsFlyer操作指导](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250123103532.30674602736164625628094935370383:50001231000000:2800:5E4F8B257E4094F9706B73A48A5AB3CE260B0F47BF06D3349D9635AA1898DAD1.pdf?needInitFileName=true) |
   | [Adjust](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-adjust-0000001379677869) | 是 | [Adjust操作指导](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250123103532.67403481110935646905789581129201:50001231000000:2800:416F3B0BAF620F7DA21B1FC6D0463424AE6DB85D34493220A085B45F0EE083AD.pdf?needInitFileName=true) |
   | [Kochava](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-kochava-0000001379837565) | 否 | / |
   | [Sizmek](https://developer.huawei.com/consumer/cn/doc/promotion/bpos-functions-tripartite-attribution-sizmek-0000001328517630) | 是 | [Sizmek](https://advertising.amazon.com/en-us/solutions/products/sizmek-ad-suite?ref_=a20m_us_hnav_lng_en_us)官网 |

   ![](./img/097bfb5737ce.png) 

   - 如果您后期修改了关联分析工具中的曝光/点击监测链接，您需要重新对任意一个指标进行手动测试，测试成功后新的曝光/点击监测链接才生效，其他的指标启用状态，与修改链接前保持一致。
   - 如果您使用的监测链接未包含Referrer参数（例如：af\_ref=\_\_REFERRER\_\_），请重新在三方监测平台拷贝监测链接并填入鲸鸿动能广告。

2. 在鲸鸿动能广告平台创建关联。

   需要为您希望跟踪的每一个应用使用指定的监测工具创建关联。

3. 在鲸鸿动能广告平台创建广告任务。

   您在上传广告创意时，系统将会自动关联到创意中的曝光/点击监测链接（自动关联的链接不要修改，避免影响跟踪数据）。

   ![](./img/3edd7911ba34.png) 

   如果您后期修改了关联分析工具中的曝光/点击监测链接，投放网络为展示广告的任务，修改后的监测链接将自动同步到任务中；投放网络为应用市场的任务，您需要编辑任务，进入到创意，重新点击“提交”，此时监测链接生效。
