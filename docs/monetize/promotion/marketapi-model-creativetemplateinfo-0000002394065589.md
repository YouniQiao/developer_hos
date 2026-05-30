---
title: "CreativeTemplateInfo"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-model-creativetemplateinfo-0000002394065589
---
# CreativeTemplateInfo

| <strong>参数</strong> | <strong>必</strong> <strong>选</strong> <strong>(M)/</strong> <strong>可</strong> <strong>选</strong> <strong>(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| externalCreativeId | O | Long | 外部创意Id |
| creativeName | M | String | 创意名称 |
| groupName | O | String | 创意分组名称 |
| formatType | M | Integer | 创意规格类型 1：焦点图（竞价） 2：大卡单图 3：大卡GIF 4：大卡双图 5：大卡三图 6：大卡视频 7：竖版视频 8：竖版大图 9：横版视频 10：横版大图 11：横版小三图 12：横版小图 13：卸载召回单图 14：卸载召回GIF 15：卸载召回视频 16：中卡单图 17：更新介绍 |
| attachmentId | O | String | 资质文件ID,使用新增素材接口上传资质文件获取资质文件ID。涉及资质证明时必传。 |
| summary | O | String | 缩略文案，如果创意只有一个文案，则这里为空，填写slogan。 |
| slogan | O | String | 详情文案 |
| images | O | List&lt;[ImageInfo](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-model-imageinfo-0000002360425730)&gt; | 图片素材 |
| video | O | VideoInfo | 视频素材 |
| openCreative | O | OpenCreative | 打开创意 |
| intention | O | String | 召回意图，创建卸载召回单图、卸载召回GIF、卸载召回视频创意时使用。 |
| version | O | String | 版本号，创建更新介绍创意时使用 |
