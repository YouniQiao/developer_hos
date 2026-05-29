---
title: 图片
sidebar_label: 图片
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/image-0000001956975273
---
{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用<MergedTable>组件还原 */}

# 图片

图片用于展示界面中的静态或动态图片资源。开发相关描述请参考 [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image) 文档。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.62941915199072600753875142632436:50001231000000:2800:A33E72ABAD170D2906D2F09A1492833AF24608D6960D046B92053E4BF3DA0049.jpg "点击放大")

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
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.30211837164074658851333397736457:50001231000000:2800:67F02E2D1BF00B7F9B32742D412E335DDDB1309D609B43947E46998F9FE6FD5A.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.41290562835480293665876842579351:50001231000000:2800:D7D461E27FC97CDB445789F37E12AEAE897AEC7BC16DC7F0993C9CF1D38CBBF0.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.73356321108686732231454332044365:50001231000000:2800:F39E24E511D5BC72D39232805EC0E01CF450584FFA14BEAFCD3DDEE2AB2B0877.jpg "点击放大") |
| Contain  保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内。如果图片尺寸小于容器尺寸，系统会自动放大图片以适应容器边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.06371200526477901899706768138464:50001231000000:2800:96AF6947D7DCD9A48C88668657BCDB59E985FFC5AF8582F070994FE2B0BD257A.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.96879557523371458839036121722038:50001231000000:2800:49F9DEE73197F26EECEE988712A20D5FC9BB875213E64972A4D83C6EC9045924.png "点击放大") |
| Cover  保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.77145090642655791274445850324309:50001231000000:2800:D4FBA3C0547F9478AA98742225F3C807ADFCC5454F5D3D4058624A140FEE0263.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.96570596676086396418165140203967:50001231000000:2800:3B9893050BC031967C7337D2962A9F93F7C63EE619F304E11DC4CDCB56D6C13C.png "点击放大") |
| Auto  保持宽高比进行缩小或者放大，使得图片宽边与边界匹配。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.48275640694172954683215454293450:50001231000000:2800:5B829468F467216AE206C41AE69399DD27917D836E5486123C7916ED19A5CDF5.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.66463088140703157623133541735023:50001231000000:2800:BB0F2C0978215AFE429D45EC4B3493FF1DC0B5080939348107404FAD26728E39.png "点击放大") |
| Fill  不保持宽高比进行放大缩小，使得图片充满显示边界。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.24526054078501461856025472280205:50001231000000:2800:5FB79DCCE9D84C46DBCFB61A99C5E4195F0DE1403FC853231D33D2A19A994A28.jpg "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.36430037871926003752247995598370:50001231000000:2800:DB3AF07C753E43B4C7E765FCECB60C2F398FB6B2557D9A8184DDC37070BB8434.png "点击放大") |
| ScaleDown  保持宽高比显示，图片缩小或者保持不变。如果图片尺寸大于容器尺寸，则会自动缩小，效果同“Contain”。如果图片尺寸小于或等于容器尺寸，则保持不变，效果同“None”。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.73600430712522348019876102103556:50001231000000:2800:EF83E7161A8CF003C0B36664D214D6B151BE89F2989FE66F21DE4BD62B01A568.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.59897864382396744597505907042205:50001231000000:2800:3F6D6260DE742FFC58C9ABA2286AB5395178A2779FFC20AF0FB2CA65FD60C005.png "点击放大") |
| None  保持原有尺寸显示。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160052.37894675771972949621631941279513:50001231000000:2800:E622B5A1FD574DD6CB097C65E2B9AD59ED5CEAC727B65A0D79220E8D21C593E1.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.99941857940771773601351903447145:50001231000000:2800:636960D9845815CA5411103B0EC6049A084717908951B5DD75830E4C9C0B3DA5.png "点击放大") |

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
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.85360223957101113827271071095518:50001231000000:2800:127F3F55AD8DAB62F636391F576A490243158396DFB7933D631179B608A67F7B.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.62563787662918511727062457212523:50001231000000:2800:20A6B1534F52B4E0031C6DA404EBCA8D063078D40EE293D998E06831654F2200.png "点击放大") |
| 默认样式 | 自定义样式 |

**修饰属性**

支持修饰图片的展示效果，通过修改布局，蒙层，混合模式等能力来呈现界面上的特殊视效。开发者可以通过阅读[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)章节内的接口能力来实现。

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.93930575811587001520432955394578:50001231000000:2800:A5DAD0DEF7385E990A0567233AE14A2A9A5B82CEF412D1D6BE917B4B667A130C.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.95938096031229693907018840386593:50001231000000:2800:70DAB71BBBE0B9979523694AB0E526F76689B865609681E3F4EA652ABB4E1BEC.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.23861581520642203291960329936627:50001231000000:2800:891D60F72DEDC6E3049C49D64DFC590B161A0E95CD251C922114EF62EF7DCB06.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.66883380440382146862819836263456:50001231000000:2800:1E645D70023CBFAA30DFB9346738B532F3EB2CF3E7BA9B4BA621FEEF21BAF521.png "点击放大") |
| 支持自定义形状修饰，可按需将图片裁剪为任意形状 | | | |

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.10508526829601164891568537943684:50001231000000:2800:5A75AC39FAEFC0CB6E5A481797351B6D215E7782928C927703E0FFC68E4DBE97.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.02736477130070714251181526987676:50001231000000:2800:A260E2361EFA46DAC7D04DD7C7C7A3276DD02FE8C2DB8307C31BBFFEBB4C4042.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.52263532785993771972475996969667:50001231000000:2800:220B66705055089C23B94022044C8D26FEFE53428A52D96D0EA673636752BFFC.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.45905825046276161455659621000963:50001231000000:2800:5D9F9D3B833A481E8F10E807C89E7B3FD7A7E7A925CBF4A2861768BA7F0792BF.png "点击放大") |
| 支持添加边框 | 支持添加渐变边框 | 支持添加蒙层 | 支持颜色滤镜调整 |

|  |  |  |  |
| --- | --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.94443438609089107855301163349060:50001231000000:2800:1CC2449A26202791B697D6E60AE1DD9C7034B1095B58ACD3B4AE90A577633AD7.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.99697941636477419297759842290560:50001231000000:2800:323DD9C2C944C6C66CEAD62CAC5FF30A2D8417347F605FC574D175E95D656D4B.png "点击放大") |  |  |
| 支持模糊效果 | 支持添加投影 |  |  |

**图片重复平铺布局**

在一些定制场景下开发者需要实现通过一个较小的资源来实现内容平铺的布局方式，可以使用 [objectRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#objectrepeat) 属性设置图片的重复样式方式，重复样式请参考 [ImageRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#imagerepeat) 枚举说明。

|  |  |  |
| --- | --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.61678950768741345736845501929062:50001231000000:2800:CEEF36DF85A41E0BC711F5795BA77D12DB53452F514E48FB227E8D1FB0CD80C4.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160053.19440635255208590382278564518767:50001231000000:2800:668C4FF1D9DC4C986AC2BB1460F473F163EE8F5A7CC4CF693012E8CEA7F832DD.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251110160054.76541986246518526541757304669287:50001231000000:2800:83609FCD8291C7711CF949F876696C24D9D505790871206524866702D0FEE5CF.png "点击放大") |
| ImageRepeat.XY | ImageRepeat.Y | ImageRepeat.X |

### 开发文档

[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)

[ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan)

[ImageAnimator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imageanimator)

[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)