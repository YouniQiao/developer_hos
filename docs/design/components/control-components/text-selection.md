---
title: 文本选择菜单
sidebar_label: 文本选择菜单
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/textselection-0000001956842049
---
{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用<MergedTable>组件还原 */}

# 文本选择菜单

选中的文本以高亮的文字块呈现，通过手柄来调整文本的选择范围。操作菜单置于文本之上。开发相关描述请参考 [bindSelectionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#bindselectionmenu)和 [SelectionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-selectionmenu) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213501.51684604860217717961858440230750:50001231000000:2800:29B8888E4A77AD953D9FA81D3899A2AB87572F3BDED00651AF8C3D182DDEB0D5.jpg "点击放大")

### 如何使用

文本编辑时，需支持文本选择工具。例如信息、邮件、备忘录、浏览器等页面。

文本选择具备插件机制，可扩展功能。例如：安装了翻译软件，可动态增加选词翻译功能；安装了搜索软件，可动态增加搜索功能。

菜单主要功能：剪切，复制，粘贴和更多。选择“更多”时，变成二级菜单，显示更多操作。

菜单上的功能操作顺序：剪切，复制，粘贴，全选，翻译，分享，搜索，其他操作。文本选择强相关功能：“剪切”，“复制”，“粘贴”，“全选”，不放入“更多”中。

菜单上三方应用提供的操作，全部放到“更多”中。

### 视觉规格

**手机**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213501.46162641714454467955317151365746:50001231000000:2800:8832367444E470A2F96FF51CC44882F5DECE12C0666C31068501422C2EEEDA46.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213501.08050735198329512627605329567799:50001231000000:2800:00E2F9B6B1CEA7E87FF99C1B37E572908618F65BA4DA242DFC6267BF67F4C32C.png "点击放大") |
| 文本选择菜单 | 点击”更多“图标出现二级菜单 |

**电脑设备**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213501.23174445973059980871707258034731:50001231000000:2800:DF5E73D4B9CD9DE9EDFC8756A6819EFC121F29ABD8512AA760AF37FDC29108B5.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213501.13855547099636951994662320274925:50001231000000:2800:C67C817FFD22A94ED48A76B9A6AC29CC99D64F14A3992CFE4EC61F08E3F7EB1F.png "点击放大") |
| 文本二级菜单 | 带字体编辑的文本选择 |

**设备差异**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213502.33098381226851972019827970418272:50001231000000:2800:B60F072B883BB9E5F7C819F4E3384650DC4E02A703C55FDC227E3F7FFAA27076.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213502.32680122049220024957124098076816:50001231000000:2800:FEBCC83FAAEA41A34DF11472E642FB88C415D142C45C8E217001EB65721C0B80.png "点击放大") |
| **触控操作** | **鼠标操作** |

|  |  |  |  |
| --- | --- | --- | --- |
| **特性** | 手机 | 电脑设备 | |
| **样式** | 文本有手柄  菜单横向显示 | 文本无手柄  菜单上下文菜单显示 | |
| **翻译、搜索等扩展功能** | “更多”里 | 二级菜单 | |
| **可配置项** | 翻译、扩展等功能 | 除翻译、扩展等功能外，还支持可配置项，具体见“菜单” | |
| **交互** | 点击 | 见“菜单”控件 | |

### 开发文档

[SelectionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-selectionmenu)

[bindSelectionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#bindselectionmenu)