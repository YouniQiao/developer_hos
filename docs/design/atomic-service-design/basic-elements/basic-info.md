---
title: 基础信息
sidebar_label: 基础信息
original_url: https://developer.huawei.com/consumer/cn/doc/design-guides/ux-guidelines-overview-0000001900384976
format: md
---

# 基础信息

每个元服务有独立的图标、名称。基础信息将根据场景在元服务市场、元服务面板等界面展示。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165245.96208610308887523646946877124789:50001231000000:2800:8041B5CD1038CDC0AA3715B753FA8C41D08DCE8E6689AC086BF32BF15DC0AB93.png "点击放大")

### 名称

元服务名称应精确表示服务内容，不宜过长，确保简短、易懂、易记忆。为确保系统界面展示效果，服务名称建议不超过8个中文字符。

### 图标

元服务图标与应用图标有明显区别，它继承了 HarmonyOS 的设计语言体系，内部圆形表示完整独立，外圈装饰线表示可分可合可流转的特点。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165245.42413357562676371599562381732526:50001231000000:2800:456220EBADCEC1075BECCDBC8E573BD9C1A441611DAF95FA91C9669BF493E4E2.png "点击放大")

为便于开发者快速生成统一的元服务图标样式，我们在 DevEco Studio 提供了[元服务图标生成工具](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-icon-generation)。通过使用该工具，开发者仅需按照要求上传方形资源图，工具会自动裁剪生成完整的元服务图标。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165246.87353279193350542184058360881847:50001231000000:2800:B5F2B883CB239A0342CD3C76E663BBA295A29516B535824DF72A8295EEEFB3E4.png "点击放大")

## 方形资源图上传要求

开发者在元服务图标生成工具中上传的方形图资源需满足以下要求：

* 图片格式：.png、.jpeg、.jpg格式的静态图片资源
* 图片尺寸：1024 x 1024 px （正方形）
* 图片背景：不透明
* 质量要求：图标内容需清晰可辨，避免存在模糊、锯齿、拉伸等问题。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165246.35508910955711433349516423166404:50001231000000:2800:02978F3FDE5C90E3F2F3D02C4A773B81CDD89557550C03442B9E556DFFA388FB.png "点击放大")

## 图标资源设计

1）图标生成工具在生成元服务图标时，会将开发者上传的方形图等比缩放到中心圆的尺寸，然后将方形图遮罩裁剪成中心圆。开发者在设计图标资源时，需确保主体元素占比适中，避免出现主体元素占比过大，导致图标内容显示不完整；或出现主体元素占比过小，图标展示不够饱满均衡的问题。图标主体元素在图片尺寸中的建议占比为77%。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165247.11903044515221066141716195181153:50001231000000:2800:7DDCB37262AC52F9C049D60E2D8224D649E0C3947C220D087010164020CA5707.png "点击放大")

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165247.09081567123083088073867415326706:50001231000000:2800:AABD049F01AA1BF3AC5DF5FC0E16CFA890624C5CBECC9BB6D19B0060F92D90D9.png "点击放大")

2）上传的资源图背景需确保为不透明背景，且资源图尺寸需满足要求。避免出现因尺寸或背景问题导致图标中心圆填充不完全的情况。（注：生成的元服务图标需确保图标中心圆为填充完全的正圆，不可出现其他形态）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165248.83460560272861117125482853813447:50001231000000:2800:5680602780034B5BCEDAE7DA55354242A283E9D734287EDE5C725C0522E6B8D8.png "点击放大")

3）请勿使用可能误导用户的文字或图形元素，例如图标中包含新事件标记红点、HOT等元素，误导用户。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165248.99510977032818670206433608364144:50001231000000:2800:49E8C3514946D827E35D78FCB12D8D96D21CB7DAB95D71BD14151C0D16748D3D.png "点击放大")

4）元服务图标外圈线请勿使用纯白或纯黑，以避免在纯白/纯黑页面背景上无法清晰辨识其轮廓形态。当中心圆背景为纯白/纯黑时，需给中心圆增加描边，以确保图标中心圆轮廓清晰可见。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165248.32506263538903718275141123481271:50001231000000:2800:31ED44E45BB8FC7E6CDD89AC3E6DD36309497FA25277FF84620DACB21408240A.png "点击放大")

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165249.29115299524427505521439827037049:50001231000000:2800:099D188276EDF7DA580312849444BC5F22CFE25EB4B51E01F6B8036D2081F003.png "点击放大")

5）若同一开发者名下有多个元服务，建议在图标中增加业务名称标签以区分不同业务。应避免出现多个元服务使用同一元服务图标的情况。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250624165249.28107524839450211889582577614010:50001231000000:2800:89759D2246EF1DF6E78BE343E9A3BBFDA984F868186045B9BBCCE2A3233AA96B.png "点击放大")