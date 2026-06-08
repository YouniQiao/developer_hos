---
title: 勾选
sidebar_label: 勾选
original_url: /docs/design/components/selection-components/checkbox
format: md
upstream_id: design/components/selection-components/checkbox
last_sync: 2026-06-07
sync_hash: 20810b4f
---
# 勾选

勾选用于表示用户同意该项的描述，明确接受该选项被选中。常见的场景如：USB 连接界面的“不再提示”，图片发送时的选中状态等。单个选项独自使用时请参考 [Checkbox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox) 文档，多个选项之间有父子级关系请参考 [CheckboxGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/091ED9E2518D.jpg "点击放大")

### 如何使用

**勾选控件允许用户从一组选项中选择一个或者多个选项。**一般情况下由一个勾选图形搭配一段文本进行展示使用，也可以将勾选布局在图片、宫格或者列表中使用。

**在宫格类场景下使用多个勾选布局时，需要考虑其点击热区带来的影响。**结合人因确保勾选的热区比例足够用户可点击，且不发生热区冲突。

**合理展示选择内容的优先级别。**勾选控件建议以逻辑顺序排列选项，例如，被选择可能性的从高到低、从小到大、操作难度从简单到复杂、风险程度从低到高等。

**勾选项是界面中主要内容或操作的一个附加选项。**勾选项是否默认开启，需考虑勾选项对用户所带来的影响，默认状态不应该对用户带来负面影响。不要通过默认勾选这种方式，诱导用户或趁用户不注意时开启或关闭某个功能，如果与用户意愿违背则会带来强烈的欺骗感。

**基础样式**

勾选的样式可自定义选择，在 HarmonyOS 中使用圆形背板代替传统的圆角矩形，开发者可以通过 [CheckBoxShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox#shape11) 中的属性配置其形状，常用的有 CIRCLE 和 ROUNDED\_SQUARE，也可以使用 path 路径进行自定义绘制。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/17DCB2BD6C5E.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/43A4C6CD5B7E.png "点击放大") |
| **勾选状态** | **未勾选状态** |

**成组勾选**

|  |  |
| --- | --- |
| 多选的默认选中状态为勾号，若在成组勾选中使用，当子选项有多一项或多项未被选中，则父选项会从勾号变成一条横线。 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BDAA91932CC3.png "点击放大") |

在 电脑 设备上，多选使用小圆角形式，以体现设备风格。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CE551A920641.png "点击放大")  勾选状态 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FEA7E5F3ED7B.png "点击放大")  未勾选状态 |

**智能穿戴勾选**

勾选用于表示用户同意该项的描述。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6D9914A27302.png "点击放大")

**界面用语超长处理规则**

超长文本状态下，字号不变，图标与文本上下居中。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CBC0325C9ACE.png "点击放大")

### 开发文档

[CheckBox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox)

[CheckBoxGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup)

[Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio)

[Toggle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle)