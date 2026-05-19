---
title: "实用工具"
sidebar_label: "实用工具"
description: "DevEco Testing - 实用工具"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deveco-testing-tool
---
# 实用工具

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/xln9xiGzQb2xmxHzGaTRIQ/zh-cn_image_0000002503553988.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=C1D1E2F0E1A247ADF57D2266364057FD96FFFA6DD21150AC19DC659124212848 "点击放大")

## 应用图谱管理工具

**应用图谱管理工具：**支持从探索测试执行报告导入和创建空白图谱等多种方式创建图谱，支持通过屏幕录制和从图谱选择方式创建场景，支持对场景路径进行调试对比。

## 应用图谱特性管理

打开DevEco Testing客户端，在左侧菜单栏选择“实用工具”，点击“应用图谱管理工具”卡片进入工具界面。

**创建图谱**

点击“创建图谱”，有以下选项：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/kwmmcpIUSYahXd3X7SOmEA/zh-cn_image_0000002524623461.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=50B43DD7DCEE281399CB265CA7F46DCE427E1F540EC0B2C856141DD6DE292C84 "点击放大")

探索测试报告：选择相应的探索测试任务，输入待创建的图谱名称和说明。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/yFDCydzFRratpMzV284NTQ/zh-cn_image_0000002524623437.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=2A52F5AD7295A7AC2B89251884787AFE74B1230DF5F81A33450279ECCF715F9D "点击放大")

从现有图谱文件：复用已有的图谱文件。

在用户的DevEco Testing数据路径（DevEco Testing客户端->设置中可查看数据路径）中找到“graphTool”文件夹，找到相应图谱文件夹后；将其中所有打包成zip文件（注意：打包后文件需要直接是图谱文件，不能多加一层目录，如下图所示）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/q0TyTklpSBy-DRw3d2SmKw/zh-cn_image_0000002492503772.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=F7802F4356CEEB29503E0DFE0A14F7BAE9CB61D8A1E7EA3FCE1A7B1BF158E155 "点击放大")![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/usxJ3APDQ3e6mI5wkxQZ7w/zh-cn_image_0000002524503471.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=32CB57F59096D9F17B1417AF278B4717F34031199B0B6C2DD8435418CD20D6FD "点击放大")

空白图谱：选择对应的应用创建空白图谱。

图谱名：图谱名称。

图谱说明：增加图谱说明。

设备列表：选择连接的设备。

应用包名：选择设备已安装的应用。

应用描述：对应用增加描述。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/tuZy9vr3Q5q4-up31avMqw/zh-cn_image_0000002524623469.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=248439854B5A04AC4C112BDEF76A600942D22C5E110D185F1C878D76F56DEDD2 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/-FFKBMwLQCy3UtyxhJnX2Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=A8DA286F08310A80A4C7269776E2E49B2D398A9C8EE8455B3680434507B35439) 

在客户端设置->基本设置页面的数据路径下，“graphTool”文件夹存放所有图谱数据。

**特性管理**

新增特性：点击新增特性按钮，输入特性名称和特性描述（非必填），点击提交按钮新增特性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/rbsa15QURLC2NJkvENADbg/zh-cn_image_0000002542128675.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=48B2C2D99718925A6E37A1BA168B512AD02647CCC864643883FA80004B409058 "点击放大")

删除特性：勾选特性后，点击删除特性按钮，勾选待删除特性，出现删除确认框，点击确定按钮完成删除。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/NBU3RHOBT_OPUWASwdqY7A/zh-cn_image_0000002542128863.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=FF9EF6CB58A507A96EFC0715FB40B817391B6AEB2D99E52586DB36E733573C5E "点击放大")

编辑特性：鼠标右键点击特性名称，选择修改特性按钮，修改特性名称、特性描述信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/OPgx2FCcSj2Mp0-FjaGuHQ/zh-cn_image_0000002524623467.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=6AEDC9B134B31E79248A680880F9BE27FBD672E61F7311F5956D8A0F571B1F08)

## 应用图谱工具场景路径管理

**新建场景路径**

步骤1：选择已有特性，点击新建场景路径按钮或鼠标右键选择新建场景路径，进入场景路径编辑页面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/ivXEHOt7RlOMhpCC9goZDg/zh-cn_image_0000002510528426.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=D86CD99CD0D4E228444FF1955300DD43375B7940F4F02A7E343AF32882BD9B41) ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/YiN5yek2R_GdcD1MZF0QHw/zh-cn_image_0000002510568464.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=4896B007441482A592AEAF064814988A1D2DED44619FA59826C1F3184FFC3FE8 "点击放大")

步骤2：“编辑模式”窗口中的首个页面为设备桌面截图。点击窗口中的“➕”号创建场景路径，支持“通过屏幕录制添加”和“从已有图谱事件选择添加”两种方式。

步骤3：添加场景路径。

（1）通过屏幕录制添加

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/2dvfrhozRze6s_OWnlYe2A/zh-cn_image_0000002492343776.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=C65EE56F1B4FE18A3570BB99F3E22D6CEFB80A4F256781941DDFCE0D5DAFD189 "点击放大")

在点击“➕”号之后，选择“通过屏幕录制添加”。

通过在左侧投屏设备的区域内，执行点击、滑动或者右键弹窗输入文本动作，添加相应的场景步骤，点击保存按钮完成场景创建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/ALhmYdlZSkuzF9nfZRHXrA/zh-cn_image_0000002492343790.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=48C2663A36BE89ADA2998339075AFFF9D61C50D5CB9F7A8E4036D3D4BF4C867F "点击放大")

将鼠标移动到设备投屏上，右键单击后会出现以下功能选项：

在此控件上输入内容并回车：用于搜索场景，输入文本并搜索。

在此控件上仅输入内容：用于搜索和文本框场景，仅输入文本。

重新获取当前页面控件：当页面控件识别不准确，或未识别到预期控件时，重新获取当前界面的控件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/0DrU6achRIiBMZ46-UVyLA/zh-cn_image_0000002524623433.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=37D51EACC1E5B9CA78C5FDE600FA3044E7B6D0C0D157CFB8F1E044DB3F846840 "点击放大")

（2）从已有图谱事件选择添加

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/qS5yxMrAR3qBWVBsgPRKcA/zh-cn_image_0000002492343798.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=965A63AF647F393BC79ECFBA53CD856A1376C939A28BD1B7893FD99040A481D4 "点击放大")

如下图所示：

①：展示当前页面。

②③：展示对应选框点击前后的页面。

点击“➕”号之后，选择“从已有图谱事件选择添加”，将出现图谱中记录的事件，选择图谱事件创建路径。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/gnkw1F-zQlilvXRieO7Rtw/zh-cn_image_0000002524503449.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=538C66AF7F1438BF430E769F5FA4CE6799AE584D305A3FFF848E27E4AF79591D "点击放大")

步骤4：调试场景路径。

场景路径创建完成后，支持对其进行调试，验证创建的场景路径能否在设备上运行正确。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/QcGBX8voQ0Wbq-GtrnAoeQ/zh-cn_image_0000002524623443.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=3ED2F7EF95E6B8EFF7ADD15FC8182D0787FE07D53C81973843F19A7B97F561CA "点击放大")

**编辑场景路径**

选择已有的场景路径，点击鼠标右键或点击窗口右上角的按钮进行编辑。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/i5S8NwWuRxiQ7AEENq7Lpw/zh-cn_image_0000002492503756.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=0E67520E95EF3666972FFDC2CE365944D7D88D8F2427AC8EFCE705FA8B895CD1 "点击放大")

屏幕录制场景路径编辑：支持删除、刷新旧页面和“插入新节点”（注意：需手动将测试设备保持在所需页面）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/FPsxEaC4QhaePCmbArgkKA/zh-cn_image_0000002492503750.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=D8B0C0706074A9B5EB8B306B26546E5EFF3DDDD2DDFC862A8C084E0C3A75DED9 "点击放大")

**场景路径压测**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/KcLZLNJNRlW30uLbhTZXxA/zh-cn_image_0000002492503776.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=B9672A1AFB1B4E0F2D91F4C15BA827FF14084F4911CE9C65EE46C462508B40A6 "点击放大")

探索测试服务创建场景压测任务**：**

选择测试服务：打开DevEco Testing客户端，在左侧菜单栏选择“探索测试”，点击“探索测试”卡片，进入探索测试服务创建页面。

选择应用：选择应用图谱对应的应用。

选择图谱测试的路径：选择所需的测试时长、模式类型等配置信息。

模式类型：场景压测模式会出现场景选择选项。

图谱选择：选择编辑的图谱。

场景选择：选择已创建的场景路径。

创建任务：点击创建任务按钮，探索测试将在设定时间里循环对该路径进行压测。

## 性能测试报告对比

**性能测试报告对比：**提供同类性能测试服务的报告对比分析，涵盖场景化性能测试、性能基础质量测试及性能指标监控测试三大服务。

**选择测试报告**

按需选择同类性能测试服务报告对比分析，支持按任务名、备注信息或任务状态筛选。点击开始对比，即可一键生成对比报告。

性能测试报告对比有两个任务创建通道。

（1）从实用工具创建任务

步骤1：进入工具任务创建页面。

点击导航栏的实用工具，点击“性能测试报告对比”进入任务创建页。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/e2NUoDYzTBC7OMmbLptnhw/zh-cn_image_0000002492503724.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=F182E4A9ADE2DCBC816A95025B02F7EC1D400B5CA79ED80ABB9302EFD22DA5D3 "点击放大")

步骤2：点击选择需要分析的测试任务报告，再点击开始对比即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/PFxzfAiMRlewPS9RG-Qkgw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=DE9760140C2A59707E87EC203325614D3B89067AECABEEBC36B40A8FB65E1F84) 

性能测试报告对比只支持场景化性能测试、性能基础质量测试和性能指标监控测试生成的报告。

（2）从性能报告页面创建任务

步骤1：在场景化性能测试和性能基础质量测试执行分析结束后，以性能基础质量测试为例，报告页面上会有“报告对比”按钮，点击后跳转至性能测试报告对比工具。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/plNVVxISRtCuOvBumqOG_g/zh-cn_image_0000002492503722.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=7625CDF5A2BA8CD8BFF9D9DB9F9529F1D780069D9C35F862B9386750F9F51A7A "点击放大")

步骤2**：**跳转到性能测试报告对比创建任务界面后，会自动选中刚执行完的任务；选择基线报告后，点击开始对比。

**查看对比报告**

性能基础质量测试报告对比样例：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/i1lXCYo4R7Gz5QTuO_rojQ/zh-cn_image_0000002492343766.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=DEB39575B9B9C0CF91CA0BF1AD4853212995C7649E1A7776908C5AA1B69D252A "点击放大")

场景化性能测试报告对比样例：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/iGVWBrxaS162ncNeZIjRCw/zh-cn_image_0000002492343760.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=B935423DB69EB69B5C87DCCEF35D1947C5DF7CB0C3B8F0984A07ECCC3BEA8CCD "点击放大")

性能指标监控测试报告对比样例：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/OHxCoNuRSey5DYpYPlQMbg/zh-cn_image_0000002492503728.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=619FEBED53DC7188A74B6EC59B19453173649816D6E870F017EE31D9589F2A16 "点击放大")

## 性能报告自动分析

**性能报告自动分析：**工具通过自动化手段深入分析测试数据，运用高级算法和技术自动识别异常情况，并尝试定位问题的根本原因，帮助用户快速找到影响应用性能的关键因素。该工具支持分析场景化性能测试和性能基础质量测试两种服务生成的报告。

**工具使用场景：**用户在日常测试开发中遇到场景化性能测试或性能基础质量测试检测出的问题时，可使用本工具进一步分析问题原因。

性能报告自动分析会将检测指标分为以下几类，仅支持对部分指标进行诊断，具体如下：

|  |  |
| --- | --- |
| **指标大类** | **指标名称** |
| 时延 | 响应时延 |
| 完成时延 |
| 卡顿 | 最大连续丢帧数 |
| 卡顿率 |

**任务创建**

性能报告自动分析测试服务有两个创建通道。

（1）从实用工具创建任务

步骤1：进入工具任务创建页面，点击导航栏的实用工具，点击“性能报告自动分析卡片”进入任务创建页。

步骤2：点击选择需要分析的测试任务报告，再点击创建任务即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/pVjOrwVvTTOhpBeJPo1x4g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=79003688DAE5347E9B67230782E4B4AD80774D185EE924258A0786BACFCA40D5) 

性能报告自动分析只支持场景化性能测试服务和性能基础质量测试服务生成的报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/hXeQ5uTkT1Gg9yCTonrewA/zh-cn_image_0000002492343778.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=F6915A6BEAF66B93D6717ED41164A672776827629A855AEEA3BB3D546CCBCC51 "点击放大")

（2）从性能报告页页面创建任务

步骤1：在场景化性能测试和性能基础质量测试执行分析结束后，以性能基础质量测试为例，报告页面上会有“性能报告自动分析”按钮，点击后跳转至性能报告自动分析工具。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/68a9b1UrSWyJ2xjwDiJvCQ/zh-cn_image_0000002492503748.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=D075CB6698CE1CDB0E2396B376FC1EE26F8E67172AFE5E915BD3E337F0598225 "点击放大")

步骤2：跳转到性能报告自动分析创建任务界面后，会自动选中跳转前的任务；点击创建任务开始分析。

**报告解读**

**基础信息**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/fUZ0d3J0S9KfRo34Rs-Sww/zh-cn_image_0000002492343806.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=D99E5B71D17306F13CA089A3728E3F00FF027A3440B4455DAB4FAB6868C3CB11 "点击放大")

报告基础信息中主要包括如下部分**：**

- 任务信息：任务名称、开始时间、持续时间、执行人。
- 工程路径：分析的测试任务所在位置。
- 备注：备注信息支持自定义修改。
- 环境参数：支持查看任务下发的参数。
- 执行日志：支持查看任务执行过程中的日志，支持日志级别的筛选。
- 打开目录：点击打开任务数据文件夹。

**概览**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/EN591OvBRJGB0jzq5GWftg/zh-cn_image_0000002492503734.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=BC475B494F35EF3D386B18838D79089CCE5FC2729E00915711B9438E4AC3D42D "点击放大")

测试服务：分析的任务类型。

测试报告名称：分析的任务名称，点击可跳转至该报告。

支持问题分析数/问题总数：如上文介绍，部分问题不支持分析，因此分析数会存在小于总数的情况。

根因统计：所有分析问题的根因统计列表，由于一个问题可能存在多个根因，因此总数可能大于问题数。

分析结果导出：将所有支持分析的问题步骤打包归类在导出目录下，并生成excel文件存储每个文件对应的分析结论，每个问题步骤会打包成zip文件，每个 zip 文件包含 perfdata，视频和帧图片集。

导出的目录内容结构如下所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/DKFgoSLUQEOQTFWl9_cvdA/zh-cn_image_0000002492503720.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=AF336663270BE8987FA2920AAD84C41B31E4042B5E56C03118D4071AC3FBD3A3 "点击放大")

**分析详情**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/ZTfoqXhbS9aGq4eM9hNpaw/zh-cn_image_0000002524503501.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=12742998436C3934C4BFF7C81F1E9E26DB52A8ACC3C2559166C6228C41131F44 "点击放大")

用例场景：测试用例名称。

操作步骤：测试步骤名称。

指标类型：不达标的问题类型。

根因：导致不达标的主要原因。

指标值：指标具体的测试值。

分析结果：成功表示存在分析结论详情，失败表示该任务未分析出具体结果。

维测数据：点击打开按钮可以跳转到问题步骤对应的资源文件目录。

分析详情：点击展开可以看到对应问题的详细分析结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/SsQAqKoKR2Ot35f7qlyLwg/zh-cn_image_0000002524503483.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=988314E1AD0CCC75DBF95BEABE204BBF359056F2E9CE25E1ED449C018DF418CE "点击放大")

根因归属：导致此问题的主要原因在于应用还是系统。

根因描述：问题产生的原因描述，从上到下根因归类更细。

分析详情：详细的分析结果，如哪段函数耗时异常、节点创建过多等问题。

耗时分段拆解：自顶向下逐步分解性能问题，聚焦真正影响性能的问题。橙色区块代表影响性能的主要原因，需要重点关注；蓝色区块代表耗时拆解的次要原因，对性能问题影响较小。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/AuJSHXVBSnagEy8a0v4New/zh-cn_image_0000002524503493.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=A47FD41780403A4FF8496A24A97E1528A2A05A052AFAC6118B564F1E5A259BD6 "点击放大")