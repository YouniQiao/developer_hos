---
title: "探索测试"
sidebar_label: "探索测试"
description: "DevEco Testing - 探索测试"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deveco-testing-exploratory-testing
---
# 探索测试

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/6APtddtFSDyPI19h1P9UAA/zh-cn_image_0000002492503674.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=8669B8C4FCEC7DD7594C1DD5ED9CF7225BECEE9CE4735A7C90D96F352481BB0A "点击放大")

## 应用探索测试

**应用探索测试：**通过在测试过程中结合专家经验与AI技术，对测试数据持续学习，实现场景智能感知和控件语义分析，以不断优化遍历策略，帮助用户高效识别和定位应用中潜在异常、崩溃、泄漏等稳定性问题。

**创建任务**

进入DevEco Testing客户端，在左侧菜单栏选择“探索测试”，点击“应用探索测试”卡片，进入任务创建界面。按需配置任务参数，点击创建任务开始测试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/xvQSfFMqQqyledmpT9znEQ/zh-cn_image_0000002524503387.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=2374F587E744796271E21FE51BF96646BF8A0376901B3BCE4773893F8D0E5935 "点击放大")

任务名称：用于标识任务，系统会根据时间生成默认任务名，支持用户自定义修改。

备注信息：填写任务备注信息，便于快速筛选报告。

测试设备：待测设备，支持 HarmonyOS 5.0及以上版本。

选择应用：选择测试设备上已安装的应用，或在测试设备上安装新的应用包。

测试时长：任务总时长，建议时长不低于1小时，时长过低的测试结果不具备代表性。

模式类型：可选探索测试模式或者场景压测模式。

- 探索测试 ：基于智能遍历算法，通过模拟用户的操作，对应用进行长时间、高频率操作。

- 场景压测 ：基于应用探索测试生成的应用图谱，在图谱管理工具中进行自定义场景，对指定页面进行压测。

## **探索测试****模式**

图谱选择（非必选项）：选择应用后，将提供该应用在应用图谱管理工具中的图谱以供选择。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/TxFgehfqTiy3oUp8jvx3eg/zh-cn_image_0000002524623357.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=2A14A6D44156602612142064BA6E688C6E346D0FFD294B49598819B665DE3408 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/ywtcO4clTGS40s4qgZAtGg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=17AAF762B44A1C63BCAB8BB79E4E6530520F4631DCCA4AB504DD384252336507) 

不选择图谱文件：探索测试将进行随机遍历，在设置的时间内遍历应用页面，并生成图谱文件。

选择图谱文件：探索测试将优先遍历图谱文件中的各个节点。

- 关于图谱文件的介绍，可查看应用图谱管理工具 -> 创建图谱指导文档。

## **场景压测****模式**

图谱选择：选择应用后，将提供该应用在应用图谱管理工具中的图谱以供选择。

场景选择：选择在应用图谱管理工具中创建的场景路径。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/UCWJihkVTA2vl4dV6lEtxw/zh-cn_image_0000002524623363.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=6B9D483FA287F638E010BCFA2EB85EAD8058B6D9704EA9671DC0F1BBE6920402 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/UjTlC0B8QI-MQ8gO9Aergg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=94C786AFE3E381A2C1DA4642BACC0A03253116A72CA7771A5BB226C628A384FD) 

创建场景压测任务前需要自定义创建场景路径，可查看应用图谱工具场景路径管理指导文档。

**高级配置**

重启切换场景：场景压测中场景切换是否通过重启应用完成。当不勾选时，正常执行需要场景的开始和结束都为首页。

截屏间隔：步骤执行完成操作后到页面截图的时间间隔。

跳过预处理：预处理流程会授予待测应用定位、通知、网络等权限，并自动跳过引导页、登录华为账号。如果前述操作未实施，建议取消勾选。

参数配置完成后，点击“创建任务”即开始测试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/bwOLD5K7QyasPCicib3dcA/zh-cn_image_0000002492503672.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=DD1D99616FA1446B34920665B48779F43F04F40D7639A9EFB8E0F2EBF4CFBE09 "点击放大")

**测试执行**

任务创建后进入测试执行页面。创建任务时，如未选择跳过预处理，则会在遍历开始前，进行应用预处理，如同意隐私声明，自动授予待测应用定位、通知、网络等权限，并自动跳过引导页、登录华为账号。在测试过程中，页面显示测试进度、遍历路径地图、设备截图及语义分析过程。

探索测试执行页面：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/qUsq2Q56QO26ggQuKZzx5w/zh-cn_image_0000002524503391.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=E2CC320FCF30FB20F2C53144C25E1736D297683BA37036210D161C24F0D1993F "点击放大")

场景压测执行页面：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/rLZbZuCoT1m-MU6qI9V7KQ/zh-cn_image_0000002492503670.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=9D770CA0A9BA3CB935ED3536AF03F8A4A9AB0DDFBE285910E74C2AB0F3F5FBB4 "点击放大")

AI语义分析：智能AI结合用户操作习惯，为界面控件归类排序，测试过程参照排序执行。测试过程中支持用户暂停或启动语义分析，语义分析暂停时，任务会继续计时，直至任务时间结束。

控件色块颜色说明：

绿色：下一步即将操作的控件。

黄色：鼠标悬停在控件语义识别列表时关联的控件。

蓝色：已覆盖遍历的控件。

灰色：黑名单被屏蔽的控件。

测试过程中，会优先覆盖核心功能区域，如底部菜单栏、顶部频道栏、应用功能集入口等，探索出应用的主要功能页面；完成核心功能区域覆盖后执行常见的测试操作，如扫码、关注、点赞、收藏等，保障应用关键事件覆盖完全；最后补充遍历非核心功能页面和控件，补全应用图谱。

测试过程中可实时查看故障数据，点击页面上故障红色提示数字，查看问题列表与详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/1UF0GO2TR12b1K4BrNupiA/zh-cn_image_0000002492503676.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=C20242CB0D879427C3E74D51F65F6E8522F1A99A3498206FAAD73EC1445EE220 "点击放大")

执行过程中如果发生设备断连、重启等情况，遍历暂停，但任务会继续计时；当设备重新连接（或重启完毕），遍历任务继续执行，断连（或重启）前的测试信息依然存在；若设备断连，且在测试任务完成前都未重新连接，则会导致生成的报告数据不完整。

**测试报告**

探索测试报告页面:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/nvY215R6TiKPfxjliXcRTQ/zh-cn_image_0000002524503397.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=8837F0B98EFAA686C1B89C0DCAED56CA7012B3A72C868A1D4B92F5BFFC8ACF9A "点击放大")

场景压测报告页面：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/AFxCuNguT0mHKHf0qyBD0w/zh-cn_image_0000002492503658.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=D2F47CC325F27472695A749312C7142C99F9CBB6F10E70DAB6F48098194A52A7 "点击放大")

任务信息：在报告的最上方可查看本次任务的应用信息，运行时间，环境参数和执行日志，点击打开目录按钮可导出html格式报告。

应用信息：获取待测试应用的包名、版本、API版本。

环境参数：展示测试设备信息和参数配置。

概览：本次任务的主要数据概览及本次任务模型包存放路径。

遍历路径地图：本次任务遍历的页面地图。

压测详情：选择场景压测模式，压测的节点以及次数等信息可显示在报告页。点击失败次数显示失败的页面截图。

问题列表：对测试过程中产生问题信息的分类统计。点击列表中![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/2h9TxGUoQFGj_0CRqi0aSg/zh-cn_image_0000002524503393.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=344A8DC2BBA2E5574145FFCC678623809C0EAC339E5AD75050798015E1AA9629)符号能够对指定列的数据进行筛选，点击列表中![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/50H5HTntRHqK-1ypdUL1Pw/zh-cn_image_0000002492503680.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=C19B812480B3C5CDA101A7401FBA5D605B038DC7FD4AD608747EBCC35D4CD684)三角符号可以对指定列进行正序或倒序的排序，默认按照发生时间的正序排序。点击概要信息列查看按钮对应故障的概要信息，点击定位日志列查看按钮跳转到存放faultlog日志及故障发生时段hilog日志的文件夹。

问题详情：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/3hc1s1pBQgywj6DNGLBcqQ/zh-cn_image_0000002492503662.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=01A691D511FC04262E61B79B4C036F9CA42993317892021605086D4A45644F15 "点击放大")

故障概要信息：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/uyE9UIXER7-lDvqbPeaftA/zh-cn_image_0000002492503678.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=AB58F2211C30FE476840A5B662451C04E2C62C7EE2BA1AAFE05B300B43620E27 "点击放大")

定位日志：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/hi9AGZjPQ1KTIZKr0CQNGw/zh-cn_image_0000002492503650.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=93CBEE5D97C02728635178311623DF59826ACCE5303CCD940082C5F0BCD0DA28 "点击放大")

\*更多应用稳定性体验优化建议及问题定位，请查阅：应用稳定性体验建议 及 稳定性概览

**测试****故障说明**

DevEco Testing探索测试服务会发现并收集测试过程中发生的故障，故障类型包含以下几种：

1. JS\_CRASH：应用异常，应用程序在JS层发生了崩溃。
2. APP\_FREEZE：应用无响应，前台应用无法及时响应用户操作。
3. CPP\_CRASH：进程崩溃，C++编写的Native进程（包含c++应用进程和统服务进程）发生崩溃。
4. FD\_LEAK：句柄泄漏故障，是由于进程句柄数过高且持续增长，以此判定该进程可能存在句柄泄漏。
5. THREAD\_LEAK：线程泄漏故障，是由于进程的线程数过高且持续增长，以此判定该进程可能存在线程泄漏。
6. MEMORY\_LEAK：内存泄漏故障，是由于进程的PSS内存大小过高且持续增长，以此判定该进程可能存在内存泄漏。
7. HiAppEvent：HiAppEvent故障是来自应用开发者在应用内预埋的HiAppEvent故障类打点事件，每一个HiAppEvent故障类事件会生成一个对应的故障记录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/j9XLLUTnSKiDVBKifXO0jQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260519T051440Z&HW-CC-Expire=86400&HW-CC-Sign=E86B58F73A0A28CBA3BC4A474F3922E0F9F4E557E4DE377ABD840D1AF2E510CA) 

更多测试服务详情，请前往DevEco Testing客户端 -> 探索测试 -> 应用探索测试 -> 任务创建页 -> 测试指南中查询。