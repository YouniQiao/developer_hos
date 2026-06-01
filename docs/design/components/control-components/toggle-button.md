---
title: 状态按钮
sidebar_label: 状态按钮
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/togglebutton-0000001956842045
---
# 状态按钮

状态按钮用于从一组选项中进行选择，并可能在界面上实时显示选择后的结果。通常这一组选项都是由状态按钮构成。开发相关描述请参考 [Toggle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle)文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213454.19105635166193772066846687201277_50001231000000_2800_3EB43BFED727A525DD701EE35F11DF7A760F80009BB9E35DFEDFE7708657F1A4.jpg "点击放大")

### 如何使用

状态按钮有已选择和未选择两种状态。

状态按钮不单独使用，通常由多个状态按钮组成一组选择项。

多个状态按钮作为单选选择时，只能有一个状态按钮处于选择状态，并作为当前的选择。

多个状态按钮也可以组成多选选项，每个状态按钮都可以被选择，根据业务的需求，也可以设定其中某些状态按钮为互斥状态，即选择一个后，另一个状态按钮就自动设置为未选择状态。

### 视觉规则

**手机**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.05177342935126538347342865066321_50001231000000_2800_459CBC229EF9AA42BA29DB4B03F8454A99F3EF2A0664B4FA966BEC441CD6C171.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.20438646619946725391083853190485_50001231000000_2800_58F43BB1A85727261A5228BCF06EB37221C8D2C24894063E3B67D536EC6CD22D.png "点击放大") |
| **未选择状态** | **选择状态** |

**电脑设备**

在电脑设备上圆角规格与手机有圆角参数差异

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.61113905923173800092816902502682_50001231000000_2800_17646ACA71E039E834B024880D846606F4D39995F24E9C9AC0827B9F8E8AAC00.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.47330347536667480167720919094379_50001231000000_2800_2718AD9993C0C6720A1D5EA41F809A23BB4AB4A54DE62D7579F1C7DA7596EEE5.png "点击放大") |
| **未选择状态** | **选择状态** |

### 开发文档

[Toggle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle)