---
title: 数字加减
sidebar_label: 数字加减
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/counter-0000001929853284
---
# 数字加减

数字加减控件是一种常见的输入控件,用于在移动端应用中输入或调整数值。开发能力相关可参考 [Advance.Counter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-counter) 和 [Counter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-counter) 文档。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250814201337.83589138252485198985924475268824_50001231000000_2800_0EA34207BE5BBCDE8012D010007A2EE65D24970D6D1B579FA3007C52140292F7.jpg "点击放大")

### 如何使用

**聚焦控件使用场景，用于精确调节数值的场景。**如商品数量、使用次数、人数、空调温度、健身活动目标卡路里数等场景。

**涉及敏感数据信息或易操作失误场景，同合理的规避方案。**控件应设置合理的最小值和最大值限制，防止输入非法数值。考虑是否需要支持手动输入数值的功能，通过使用内联输入样式来实现业务诉求，对于涉及金额等重要数值，建议增加确认弹窗等操作，以防止误操作。

**类型**

|  |  |
| --- | --- |
| **列表型**  整列布局，数字显示和调节按键分开或结合。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250814201338.46757913104714606469867312081092_50001231000000_2800_C8B3CC29493AFBA4DC7057F229727F879AF7082D6E80B705936BC77875BA9D0A.png "点击放大") |
|  |  |
| **紧凑型 (上下布局型)**  数值标签显示在操作区域下方，一行可布局多个或和其他控件搭配使用，布局较为紧凑时可以考虑此类型。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250814201338.39620153865405267068938816342547_50001231000000_2800_0A3991350690A24A10A9A0C1CE4778140EDCF1CF161AC7812F357B2D8EB7633F.png "点击放大") |
|  |  |
| **数字内联型**  主要使用在电脑设备中精细调节， 以箭头图标呈现。可以通过 [CounterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-counter#countertype) 中的 INLINE 类型进行配置。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250814201338.59565441314172007355140028866744_50001231000000_2800_30B70882A0788292DFEC34198B5707DC172F323F284AC167DBCB0DADA31699CD.png "点击放大") |
|  |  |
| **日期内联型**  支持在该组件内使用日期计数的样式，通过 [DateStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-counter#datestyleoptions) 来配置其展示格式范围。在日期模式场景下通过键鼠操作时，文本内容的首选项获取焦点，按方向左右键按顺序遍历，当焦点在文字上时可以通过键盘输入，方向键可以上下穿透走焦。 | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250814201338.84050021263783098107901234782126_50001231000000_2800_F950BD278D57FBE53B5805B5AB66DD748624DF7CC212E289F318746397A3C16D.png "点击放大") |

### 开发文档

[Counter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-counter)

[Advance.Counter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-counter)