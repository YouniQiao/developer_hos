---
title: 滑动条
sidebar_label: 滑动条
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/slider-0000001957012565
---
# 滑动条

滑动条是一种常见的移动端的进度控制类控件，用于在界面中选择一个数值或调节某个设置。它通常由一个长条形的轨道和一个可以沿轨道滑动的拖动块组成。拖动块的位置代表了当前选择的数值，滑动条可以是水平或垂直方向的。开发相关文档请参考 [Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.12593664566652095843057597613512_50001231000000_2800_0C9F1F95C3A3F3180C08A7D45CDE1A3AD612784980B7AFCA11C25879668608B9.jpg "点击放大")

### 如何使用

**选择合适的滑动条样式。**滑动条在使用场景中可分为有明确刻度和无明确刻度两种类型，有明确刻度的滑动条通常会在控件内显示最小值和最大值范围，并在轨道两端以文字或图标的形式标明。当用户拖动滑块时，应实时反映出当前选择的数值，可以在滑块上方或附近显示。无明确刻度的一般使用无极滑动条，这种滑动条不会显示具体的刻度信息，根据开发者设定的滑动步幅来进行手势适配。

**如果滑动条的数值范围较大，可以考虑将轨道分成若干个等分段，并在每个分段处标注数值。**通过 [showSteps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#showsteps) 为滑动条增加刻度。滑动条也可以支持点击轨道来快速定位滑块位置，可以搭配刻度点来一起使用。

**类型**

从控件样式上划分可以分为外置滑动条、内置滑动条和无极滑动条。外置与内置主要区别于滑动手柄的布局规则是否超出滑动条容器本身，而无极滑动条则没有滑动手柄，会极大程度的降低界面复杂度，但无极滑动条的进度展示只能为直角，可以更直观的展示当前进度或即将抵达边缘时的反馈，避免较大圆角带来的视觉错差。

|  |  |  |
| --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.77988537711954890499092634607944_50001231000000_2800_F1D79C201275C316F229C234209ACD5C8C55CC65280EC13C3872CF0B6107FA23.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.36699920268713254614361855821915_50001231000000_2800_BC5D99D6320159A00B93CD34224D3778A9D40A1FCA40EC8B4A0482412FAE74DF.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.98468036960320238697588287998197_50001231000000_2800_D4B07A4442D800E4CDBE1BA721024494E90989DB91A598CB3607E9EA52EC0C7B.png "点击放大") |
| **Slider**  无手柄样式，多用于较密集进度调节的场景，或用于降低界面元素复杂度时使用。 | **OutSetSlider**  用于界面轻量化展示，可用于音乐播放、视频播放等等。 | **InSetSlider**  用于强调性场景使用，可以直观的感受到参数调节反馈，如音量、亮度、色彩饱和度以及字体大小等。 |

### 定制化场景

滑动条也可以使用在色彩选择场景，通过 [trackColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#trackcolor) 接口配置可以自定义渐变色的属性。

可以为业务场景自定义滑块的样式，通过 [SliderBlockType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#sliderblockstyle10对象说明) 接口可以选择不同的类型，默认会跟随系统使用圆形滑块。若使用 Image 样式则可以自定义滑块的资源样式，也可以通过 Shape 来对圆形滑块的圆角进行自定义参数。

|  |  |  |
| --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.03732141716239128355025701529072_50001231000000_2800_929B48D6A5BAFC929533735D7D93C9511EBE73B8C7411588D948E288E683C87E.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.65980861959494266423008810693246_50001231000000_2800_14C02D198F26986B6948FAA69812834852DCE6BD451C2FD145B9D91A3EBCF38B.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.09292797919046107159623802381011_50001231000000_2800_7A4ECADF2952056A522985E39B633C8347320A86842C59E505D57AC785692978.png "点击放大") |
| **LinearGradient**  使用渐变色定义滑动条的背景色。 | **Shape**  同时自定义滑动条整体的圆角，搭配滑块的圆角一同使用。 | **Image**  可用于个性化定制资源。 |

### 常用组合类型

**连续滑动**

不求精准，以主观感觉为主的设置，使用连续滑动条。

部分场景缓冲进度，如在线音乐播放界面。

带气泡的滑动条：通过气泡指示当前选择的值，在需要给用户展示当前选择值的时候使用。

|  |  |
| --- | --- |
|  |  |
| 连续滑块的蓝色条跟手运动。 | 连续滑块带气泡，蓝色条和气泡都会跟手运动。 |
|  |  |
|  |  |
| 带气泡滑动条 | 连续滑块跟手移动 |

**间续滑动**

在固定值中选择时，使用间续滑动。

【推荐】：滑动条两边的预览文字／图标，可点击调整设置值。

调节时白底和蓝色条会在磁力曲线的作用下向前进一个刻度。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213510.51946491812293536694583599726831_50001231000000_2800_BEAF720B2C1FEF3A1517FDB5A3E5F241D60BD4177D74318E4994C3BC8B821072.jpg "点击放大") |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213511.43571213925386805972359869659642_50001231000000_2800_B6D2729BD2022EB637E10B3583DF413F9C8CB558562800682261967D6FC9318F.jpg "点击放大") |  |

**智能穿戴滑动条**

用来快速调节设置值，如音量、亮度、色彩饱和度。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213511.98819887018068295853926950403446_50001231000000_2800_C0636FBC0D135AE2FC72FE8BAE49ABAEA09DC566FF0297EEDC74B77070F19B05.png "点击放大")![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213511.56688977976804812508290816548675_50001231000000_2800_AE62D70594F74817804381E3F60BF41E8E4EA17DADBA6D9440DBC6BF42D82922.png "点击放大")

**如何使用**

· 对于连续数值变化的调节（如音量、亮度），整体控件独占界面，任何区域均可连续滑动, 支持通过表冠滚动调节；上下图标区域支持点击，每次点击变化增减 5%。

· 对于档位变化的调节（如字体大小），整体控件独占界面，任何区域均可连续滑动, 支持通过表冠滚动调节，每次滑动或滚动调节一个档位；上下图标区域支持点击每次点击变化增减一个档位。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213511.68265777853624466308101407187382_50001231000000_2800_667F00281E86C33152366FE041398354798611FD6EB5B07F092234CA32E75EA8.png "点击放大")![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213511.91120249458220659893209994594564_50001231000000_2800_CBC2A69A4D211ACE168A9772722CFC78C38AFE6CB4AF66EF03A67B693B5C33C6.png "点击放大")

### 开发文档

[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)