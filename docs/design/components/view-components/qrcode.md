---
title: 二维码
sidebar_label: 二维码
original_url: /docs/design/components/view-components/qrcode
format: md
---

# 二维码

可将链接转换生成为二维码的样式来展示，用户使用设备扫描后即可获取链接地址或获得对应信息。相关开发能力参考 [QRCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-qrcode) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/120668FA6DD9.jpg "点击放大")

### 如何使用

**二维码控件提供了基础的二维码生成能力，默认规格提供二维码和控件背景色。**开发者可以通过修改二维码的对应色彩参数来适配不同的界面样式。

**结合业务特性进行二次布局。**开发者可根据业务场景需要，选择基础样式或在二维码上增加其他图片样式进行使用。例如可以在账号场景呈现用户头像，或在应用下载场景提供应用图标样式。

**二维码在使用场景中会出现不同的使用状态，例如加载中、不可用状态等等，开发者可以结合业务场景需要自定义控件的交互行为。**需要注意的是，如果控件提供了多种状态，同样需要给出对应的界面布局和状态样式区分，例如通过透明度或色彩配置的方式形成对比。

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/396C1E55D5A9.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CF546B26F850.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A66BBB69F053.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/17F1BE6C16AC.png "点击放大") |
| **基础样式**  仅二维码本身 | **带图片样式**  用户头像、群组头像等 | **带图片样式**  应用图标 | **加载状态**  二维码置灰并显示加载动效 |

**自定义效果**

开发者可以根据自身业务需要配置不同的色彩风格来保证业务的个性化。

|  |  |  |
| --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/69DF4FD2A9CF.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FBAEA5F2E526.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7C44B1D5259E.png "点击放大") |

### 界面布局

在界面中使用时，需要注意二维码控件本身带有一个背景色，如果控件本身与界面风格差异较大可能会造成色块较多的情况。二维码可以展示在全界面中，也可以展示在其他容器布局中，例如弹出框、半模态等等。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FD35E8557E6F.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F432BD2B2CDB.png "点击放大") |
| **全页面布局** | **弹出框内布局** |

### 开发文档

[QRCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-qrcode)