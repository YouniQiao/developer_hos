---
title: 图片
sidebar_label: 图片
original_url: /docs/design/components/view-components/image
format: md
upstream_id: design/components/view-components/image
last_sync: 2026-06-07
sync_hash: de007bc7
---
\{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用\<MergedTable\>组件还原 */\}

# 图片

图片用于展示界面中的静态或动态图片资源。开发相关描述请参考 [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image) 文档。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/A33E72ABAD17.jpg "点击放大")

### 如何使用

**图片作为界面布局填充内容的基础组件，常用于在应用中显示图片信息。**图片支持加载 [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)、[ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) 和[DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-drawabledescriptor#drawabledescriptor) 类型的数据源，支持 png、jpg、jpeg、bmp、svg、webp、gif 和 heif 类型的图片格式。

**使用快捷组合键对Image组件复制时，Image组件必须处于**[获焦状态](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-focus-event)**。**Image组件默认不获焦，需将[focusable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus#focusable)属性设置为true，即可使用TAB键将焦点切换到组件上，再将[focusOnTouch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus#focusontouch9)属性设置为true，即可实现点击获焦。图片设置为svg图源时，当前支持的标签是svg、rect、circle、ellipse、path、line、polyline、polygon、feFlood、feBlend、feColorMatrix、feGaussianBlur、feComposite、filter、mask和use。

**图片尺寸应与设备屏幕分辨率相匹配，避免失真。**图片大小的使用应控制在合理范围内，避免资源过大影响加载速度或影响界面布局正常展示。为图片提供占位符或加载中状态，优化用户等待期间的体验。

**图片填充规格**

图片在容器内的填充方式支持：Contain、Cover、Fill、None 等多种填充方式 (默认为 Cover)。有关图片填充方式，详情请参阅 [ImageFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#imagefit) 接口文档。

| 名称 | 描述 |
| --- | --- |
| Contain | 保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内。如果图片尺寸小于容器尺寸，系统会自动放大图片以适应容器边界。 |
| Cover | 保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。 |
| Auto | 保持宽高比进行缩小或者放大，使得图片宽边与边界匹配。 |
| Fill | 不保持宽高比进行放大缩小，使得图片充满显示边界。 |
| ScaleDown | 保持宽高比显示，图片缩小或者保持不变。如果图片尺寸大于容器尺寸，则会自动缩小，效果同“Contain”。如果图片尺寸小于或等于容器尺寸，则保持不变，效果同“None”。 |
| None | 保持原有尺寸显示。 |

| **图片容器** | **横向图片素材** | **竖向图片素材** |
| --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/67F02E2D1BF0.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/D7D461E27FC9.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/F39E24E511D5.jpg "点击放大") |
| Contain  保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内。如果图片尺寸小于容器尺寸，系统会自动放大图片以适应容器边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/96AF6947D7DC.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/49F9DEE73197.png "点击放大") |
| Cover  保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/D4FBA3C0547F.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/3B9893050BC0.png "点击放大") |
| Auto  保持宽高比进行缩小或者放大，使得图片宽边与边界匹配。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/5B829468F467.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/BB0F2C097821.png "点击放大") |
| Fill  不保持宽高比进行放大缩小，使得图片充满显示边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/5FB79DCCE9D8.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/DB3AF07C753E.png "点击放大") |
| ScaleDown  保持宽高比显示，图片缩小或者保持不变。如果图片尺寸大于容器尺寸，则会自动缩小，效果同“Contain”。如果图片尺寸小于或等于容器尺寸，则保持不变，效果同“None”。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/EF83E7161A8C.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/3F6D6260DE74.png "点击放大") |
| None  保持原有尺寸显示。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/E622B5A1FD57.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/636960D98458.png "点击放大") |

**图片加载态规格**

在页面未加载完成时，可先在图片容器内显示占位图，以避免加载完成后页面重新布局。图片加载过程有以下几种加载样式：自动取色、模糊、自定义图标、扫光。

* 自动取色

|  |  |
| --- | --- |
|  |  |
| 加载成功 | 加载失败 |

* 样式二：模糊

|  |  |
| --- | --- |
|  |  |
| 加载成功 | 加载失败 |

* 样式三：自定义图标

|  |  |
| --- | --- |
|  |  |
| 加载成功 | 加载失败 |

* 样式四：扫光

|  |  |
| --- | --- |
|  |  |
| 加载成功 | 加载失败 |

**加载失败占位图**

加载失败时，可在图片容器内显示失败状态图示，通过配置 [alt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#alt) 属性，并支持自定义修改默认样式。当图片加载异常时可以通过 [onError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#onerror9) 回调能力来触发默认占位效果。

|  |  |
| --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/127F3F55AD8D.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/20A6B1534F52.png "点击放大") |
| 默认样式 | 自定义样式 |

**修饰属性**

支持修饰图片的展示效果，通过修改布局，蒙层，混合模式等能力来呈现界面上的特殊视效。开发者可以通过阅读[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)章节内的接口能力来实现。

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/A5DAD0DEF738.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/70DAB71BBBE0.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/891D60F72DED.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/1E645D70023C.png "点击放大") |
| 支持自定义形状修饰，可按需将图片裁剪为任意形状 | | | |

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/5A75AC39FAEF.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/A260E2361EFA.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/220B66705055.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/5D9F9D3B833A.png "点击放大") |
| 支持添加边框 | 支持添加渐变边框 | 支持添加蒙层 | 支持颜色滤镜调整 |

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/1CC2449A2620.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/323DD9C2C944.png "点击放大") |  |  |
| 支持模糊效果 | 支持添加投影 |  |  |

**图片重复平铺布局**

在一些定制场景下开发者需要实现通过一个较小的资源来实现内容平铺的布局方式，可以使用 [objectRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#objectrepeat) 属性设置图片的重复样式方式，重复样式请参考 [ImageRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#imagerepeat) 枚举说明。

|  |  |  |
| --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/CEEF36DF85A4.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/668C4FF1D9DC.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/83609FCD8291.png "点击放大") |
| ImageRepeat.XY | ImageRepeat.Y | ImageRepeat.X |

### 开发文档

[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)

[ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan)

[ImageAnimator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imageanimator)

[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)