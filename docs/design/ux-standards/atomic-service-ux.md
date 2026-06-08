---
title: 元服务 UX 体验标准
sidebar_label: 元服务 UX 体验标准
original_url: /docs/design/ux-standards/atomic-service-ux
format: md
upstream_id: design/ux-standards/atomic-service-ux
last_sync: 2026-06-07
sync_hash: 955c449b
---
\{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用\<MergedTable\>组件还原 */\}

# 元服务 UX 体验标准

### 概述（全量检测范围）

元服务和 APP 是 HarmonyOS 生态的“一体两面”，相比较 APP，元服务即开即用、纯净轻量、高效触达特征尤为明显。元服务在体验管控方面强调“一进一出"丝滑流畅无拦截、“一上一下”导航清晰无遮挡，在自动化检测维度上包含通用应用、大屏应用、折叠屏应用、电脑应用 UX 体验标准，全量指标如下：

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 标准类型 | 标准子类型 | 标准编号 | 标准项名称 | 标准项描述 | 是否必须遵守 |
| 通用应用 UX 体验标准 | [基础体验](/docs/design/ux-standards/general-ux#section11938161416124) | 2.1.1.1 | 系统返回 | 所有界面响应系统返回操作，全屏界面提供返回/关闭/取消按钮 | 必须 |
| 2.1.2.1 | 布局基础要求 | 应用支持在不同屏幕尺寸的设备上良好显示 | 必须 |
| 2.1.2.2 | 挖孔区适配 | 界面布局适配摄像头的挖孔区域 | 必须 |
| 2.1.2.3 | 元素排布对齐 | 元素排布对齐 | 推荐 |
| 2.1.2.4 | 文本排版对齐 | 中西文排版对齐 | 推荐 |
| 2.1.2.5 | 留白率达标 | 留白率 | 推荐 |
| 2.1.2.6 | 元素图形平衡 | 元素图形平衡 | 推荐 |
| 2.1.2.7 | 页面视觉平衡 | 页面视觉平衡 | 推荐 |
| 2.1.2.8 | 深度层级合理 | 卡片/控件背景明度层级 | 推荐 |
| 2.1.2.9 | 平面层级合理 | 平面层级 | 推荐 |
| 2.1.2.10 | 分组线索清晰 | 分组线索清晰 | 推荐 |
| 2.1.2.11 | 同组元素整体 | 同组元素整体 | 推荐 |
| 2.1.2.12 | 元素排布规律性 | 元素排布规律性 | 推荐 |
| 2.1.2.13 | 页面布局规律性 | 页面布局规律性 | 推荐 |
| 2.1.3.1 | 避免与手势系统冲突 | 应用/元服务自定义手势与系统手势无冲突 | 必须 |
| 2.1.3.2 | 典型手势时长设计 | 应用/元服务使用的典型手势时长合理 | 必须 |
| 2.1.3.3 | 点击热区 | 点击热区不得小于 40vp×40vp | 必须 |
| 2.1.4.1 | 色彩对比度 | 应用/元服务使用的色彩满足最小对比度要求 | 必须 |
| 2.1.4.2 | 字体大小 | 应用/元服务的文字大小满足最小字号要求 | 必须 |
| 2.1.4.3.1 | 应用图标 | 应用图标资源需分层，尺寸需满足规范要求 | 必须 |
| 2.1.4.3.2 | 界面图标 | 应用/元服务的界面图标大小满足最小尺寸要求 | 必须 |
| 2.1.4.3.3 | 图标清晰度 | 应用/元服务的图标清晰度 | 必须 |
| 2.1.5.1.1 | 层级转场 | 层级转场采用左右位移的运动方式 | 强烈推荐 |
| 2.1.5.1.2 | 搜索转场 | 搜索转场采用共享元素的转场方式 | 强烈推荐 |
| 2.1.5.1.3 | 新建转场 | 新建转场采用上下位移的运动方式 | 推荐 |
| 2.1.5.1.4 | 编辑转场 | 编辑转场采用淡入淡出的过渡方式 | 推荐 |
| 2.1.5.1.5 | 共享元素转场 | 对于转场前后持续存续的的元素 | 强烈推荐 |
| 2.1.5.1.6 | 秩序感元素转场 | 对于有明显成组排列的布局，建议进入页面时，成组排列的布局有节奏的使用时间差 | 推荐 |
| 2.1.5.2.1 | 动效无缺失 | 存在转场动效过渡检查 | 必须 |
| 2.1.5.2.2 | 转场动效时长下限 | 全屏页面的转场动效时长满足要求 | 必须 |
| 2.1.5.3.1 | 启动页动效时长 | 有内容填充的启动页在全屏状态停留时长不建议超过3s | 强烈推荐 |
| 2.1.5.3.2 | 滑动跟手反馈动效一致性 | 滑动跟手反馈动效一致性 | 必须 |
| 2.1.5.3.3 | 滑动过界反馈动效一致性 | 界面滑动到边界位置存在反馈动效 | 推荐 |
| 2.1.5.3.4 | 离手减速动效一致性 | 离手减速动效检查 | 必须 |
| [系统特性](/docs/design/ux-standards/general-ux#section15603108141517) | 2.2.1 | 底部导航条适配 | 界面布局适配底部导航条 | 必须 |
| 2.2.2 | 通知 | 应用/元服务通知设计需遵循通知规范 | 涉及则必须 |
| 2.2.3 | 实况窗 | 实况窗通知样式需符合设计规范 | 必须 |
| 2.2.4.1 | 悬浮窗适配 | 应用支持以悬浮窗模式运行 | 必须 |
| 2.2.4.2 | 分屏适配 | 应用支持上下分屏和左右分屏 | 必须 |
| 2.2.5 | 深色模式 | 应用需支持深色模式显示 | 必须 |
| 2.2.6 | 状态栏 | 应用需要对状态栏进行适配显示 | 必须 |
| 大屏应用 UX 体验标准 | [功能完整](/docs/design/ux-standards/large-screen-ux#section12976125418475) | 3.1.1 | 横竖屏适配 | 横竖屏适配检查 | 必须 |
| 3.1.2 | 多窗适配 | 多窗适配检查 | 必须 |
| [布局合理美观](/docs/design/ux-standards/large-screen-ux#section146787220496) | 3.2.1.1 | 布局基础要求(大屏) | 折叠屏在各个形态下显示正常 | 必须 |
| 3.2.1.2 | 图标文字大小适中 | 折叠屏图标文字大小符合要求 | 必须 |
| 3.2.1.3 | 弹出框大小适中 | 折叠屏展开态弹出框高度符合要求 | 必须 |
| 3.2.1.4 | 宫格图片信息量适中 | 宫格图片控件占比符合要求 | 必须 |
| 3.2.1.5 | 广告图信息量适中 | 广告图控件占比符合要求 | 必须 |
| 3.2.1.6 | 上下图文信息量适中 | 上下图文信息量符合要求 | 必须 |
| 3.2.1.7 | 单行文本 | 单行文本字数检查 | 推荐 |
| 3.2.1.8 | 边距适中 | 应用/元服务左右边距符合要求 | 必须 |
| 3.2.1.9 | 效率型布局 | 效率型应用/元服务应使用分栏布局 | 推荐 |
| 3.2.1.10 | 浏览型布局 | 浏览型应用/元服务应使用宫格/瀑布流等布局 | 推荐 |
| 3.2.2.1 | 布局创新 | 折叠屏应在布局视觉提升的创新 | 推荐 |
| 3.2.2.2 | 侧边导航栏 | 应用窗口宽度 ≥840vp 时底部导航栏切换为侧边导航栏 | 推荐 |
| [交互易用](/docs/design/ux-standards/large-screen-ux#section192433105012) | 3.3.1.1 | 按钮易点击 | 按钮应避开难交互区域 | 推荐 |
| 3.3.1.2 | 键盘易操作 | 键盘按键应避开难交互区域 | 推荐 |
| 3.3.1.3 | 弹框易操作 | 弹出框位置易操作 | 推荐 |
| 3.3.2.1 | 临时悬浮窗 | 应用内启动临时的需要跨应用或跨实例跳转的任务应使用临时悬浮窗 | 推荐 |
| 3.3.2.2 | 临时双窗 | 应用内启动的临时的辅助任务应使用临时双窗 | 推荐 |
| [鼠标、触控板和键盘交互](/docs/design/ux-standards/large-screen-ux#section65561444209) | 3.4.1 | 可交互控件响应光标悬浮 | 当光标悬浮在应用/元服务的可交互控件上，控件或者光标需要提供对应的视觉反馈 | 必须 |
| 3.4.2 | 目标单选 | 对于界面中支持选中态的目标，可使用鼠标或触控板对其进行选择 | 必须 |
| 3.4.3 | 多目标框选 | 当需要选择多个目标时，可通过框选操作进行选择 | 必须 |
| 3.4.4 | 多目标连选 | 当需要选择多个目标时，可通过连选操作进行选择 | 必须 |
| 3.4.5 | 多目标点选 | 当需要选择多个目标时，可通过点选操作进行选择 | 必须 |
| 3.4.6 | 目标点击 | 对于应用界面中可点击的控件，通过光标进行点击 | 必须 |
| 3.4.7 | 滑动页面内容 | 当显示的内容超出应用窗口，可通过滑动页面浏览未显示的内容 | 必须 |
| 3.4.8 | 文本选择 | 在文本内容区域，可对文本进行多选操作 | 必须 |
| 3.4.9 | 旋转 | 对于界面中支持旋转的目标，可使用鼠标或触控板对其进行旋转 | 推荐 |
| 3.4.10 | 缩放 | 对于界面中支持缩放的目标，可使用鼠标或触控板对其进行缩放 | 必须 |
| 3.4.11 | 拖移 | 对于界面中支持拖移的目标，可使用鼠标或触控板对其进行拖移 | 必须 |
| 3.4.12 | 显示上下文菜单 | 对于界面中支持显示上下文菜单的目标，可使用鼠标或触控板打开上下文菜单 | 必须 |
| 3.4.13 | 支持使用外接键盘键入 | 应用支持使用外接键盘键入文本 | 必须 |
| 3.4.14 | 支持全键盘操作 | 应用/元服务中的主要任务流支持键盘的焦点导航 | 必须 |
| 3.4.15 | 支持常用功能的通用快捷键 | 支持常用功能的通用快捷键 | 必须 |
| 折叠屏应用 UX 体验标准 | [基础体验](/docs/design/ux-standards/foldable-screen-ux#section1519516555910) | 4.1 | 开合连续性 | 应用/元服务在开合过程中体验连续 | 涉及则必须 |
| 4.2 | 开合流畅 | 应用/元服务在开合过程中动效流畅 | 推荐 |
| 4.3 | 悬停适配 | 应用/元服务在悬停态时布局满足要求 | 推荐 |
| 4.4 | 折痕避让 | 应用/元服务在悬停态时应避开折痕 | 推荐 |
| 电脑应用UX体验标准 | [窗口响应式](/docs/design/ux-standards/2in1-ux#section4545182215262) | 5.1.1 | 支持窗口化运行 | 应用/元服务支持窗口化运行 | 推荐 |
| 5.1.2 | 支持窗口形态转换 | 应用/元服务支持通过窗口控制器转换窗口形态 | 推荐 |
| 5.1.3 | 支持窗口尺寸调节 | 应用/元服务支持在可调范围内任意调节窗口大小 | 推荐 |
| 5.1.4 | 支持分屏和比例调节 | 应用/元服务支持分屏和比例调节 | 推荐 |
| 5.1.5 | 窗口内容状态保持 | 应用/元服务窗口在调节时内容保持 | 涉及则必须 |
| 元服务 UX 特征体验标准 | [特征体验](#ZH-CN_TOPIC_0000002019655177__section392114613448) | 7.1.1 | 图标设计规范 | 详情如下 | 必须 |
| 7.1.2 | 元服务启动过程无自定义动画 | 详情如下 | 必须 |
| 7.1.3 | 启动无开屏、无扑脸广告 | 详情如下 | 必须 |
| 7.1.4 | 退出时无拦截 | 详情如下 | 必须 |
| 7.1.5 | 头部导航栏 | 详情如下 | 必须 |
| 7.1.6 | 元服务胶囊 | 详情如下 | 必须 |
| 7.1.7 | 底部导航栏 | 详情如下 | 必须 |
| 7.1.8 | 沉浸式设计 | 详情如下 | 推荐 |
| 7.1.9 | 基本转场过程无多余加载过渡 | 详情如下 | 推荐 |

### 特征体验

7.1.1 图标设计规范

|  |  |  |
| --- | --- | --- |
| 标准编号 | 7.1.1 | 图标设计规范 |
| 标准描述 | | 1.元服务图标与应用图标有明显区别，它继承了 HarmonyOS 的设计语言体系，内部圆形表示完整独立，外圈装饰线表示可分可合可流转的特点。  2.元服务图标生成需提供尺寸为 1024 x 1024 px 的静态图片资源（参考[图标设计规范](/docs/design/atomic-service-design/basic-elements/basic-info#section158386422413)），并使用元服务图标工具（[生成元服务图标](/docs/dev/atomic-dev/develop-first-atomic-service/atomic-service-icon-generation)）生成相应的规范图标。  3.元服务图标外圈线请勿使用纯白或纯黑，以避免在纯白/纯黑页面背景上无法清晰辨识其轮廓形态。当中心圆背景为纯白/纯黑时，需给中心圆增加描边，以确保图标中心圆轮廓清晰可见。 |
| 测试方法 | | 规范图标需满足：  1）内环圆形、外形点状轮廓需符合元服务装饰特征。  2）生成的元服务图标统一为 PNG 格式资源。  3）元服务图标在黑白背景下清晰无锯齿、无拉伸。  4）元服务工程文件中的图标尺寸满足 512\*512 px。  5）AppGallery Connect 上架元服务时，[“应用信息”页面](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965#section94111352985)上传的图标满足相应要求。 |
| 判定标准 | | 所有元服务图标透出场景均需满足图标显示要求 |
| 标准等级 | | 必须 |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 |
| 需考虑的特殊事项 | | 无 |
| 系统能力 | | 请参阅：[生成元服务图标](/docs/dev/atomic-dev/develop-first-atomic-service/atomic-service-icon-generation) |

7.1.2 元服务启动过程无自定义动画

| 标准编号 | 7.1.2 | 元服务启动过程无自定义动画 | | |
| --- | --- | --- | --- | --- |
| 标准描述 |  | 平台针对元服务启动过程提供了系统原生启动动效，不可在系统启动动效的基础上叠加使用其他自定义加载效果。 | | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/AC99B435DB0F.png "点击放大")  Do | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D2CB15EC3947.png "点击放大")  Don't（使用非系统原生动效） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/B79EA0559A96.png "点击放大")  Don't（在原生动效上叠加其他加载效果） |
| 测试方法 | | 启动元服务，检查元服务启动过程中，无系统加载动效外的其他自定义加载效果。 | | |
| 判定标准 | | 进入元服务时，展示元服务系统原生启动动效，动效完成后直接进入首页，过程中无其他动效。 | | |
| 标准等级 | | 必须 | | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | | |
| 需考虑的特殊事项 | | 无 | | |
| 系统能力 | | 设计规则 | | |

7.1.3 启动无开屏、无扑脸广告

| 标准编号 | 7.1.3 | 启动无开屏、无扑脸广告 | | |
| --- | --- | --- | --- | --- |
| 标准描述 |  | 通过元服务图标、服务卡片、场景调用等方式打开元服务，无开屏界面。非用户主动操作，应避免出现扑脸弹框（系统隐私提醒除外）干扰用户。 | | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DEF628C3BB63.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CA8D82635BE6.png "点击放大")  Do | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2F868E3278C7.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/51035C1E62D4.png "点击放大")  Don't | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2BB472B47F1E.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/AE7D15048214.png "点击放大")  Don't |
| 测试方法 | | 启动元服务，元服务系统加载完后，直接进入首页。 | | |
| 判定标准 | | 元服务加载完后，直接进入首页，无其他开屏、弹窗等广告信息干扰。 | | |
| 标准等级 | | 必须 | | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | | |
| 需考虑的特殊事项 | | 无 | | |
| 系统能力 | | 官方提供底部悬浮窗样式，请参阅：[InterstitialDialogAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-interstitialdialogaction)  其他按照设计规则 | | |

7.1.4 退出时无拦截

| 标准编号 | 7.1.4 | 退出时无拦截 | |
| --- | --- | --- | --- |
| 标准描述 | | 系统返回手势需一键关闭元服务、一键返回上一级页面，不允许二次弹框等形式打断用户行为。 | |
|  | | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D94B4CBF499C.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/814FEF107A48.png "点击放大")  Don't | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/61287F45A6A7.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0E5DA3664D86.png "点击放大")  Don't |
| 测试方法 | | 启动元服务，在元服务内使用侧滑返回手势，检查手势响应效果。 | |
| 判定标准 | | 遵循元服务轻量高效规范 | |
| 标准等级 | | 必须 | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | |
| 需考虑的特殊事项 | | 无 | |
| 系统能力 | | 设计规则 | |

7.1.5 头部导航栏

|  |  |  |  |
| --- | --- | --- | --- |
| 标准编号 | 7.1.5 | 头部导航栏 | |
| 标准描述 |  | 如开发者需使用头部导航栏，建议开发者直接调用元服务官方提供的导航栏 ([AtomicServiceNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicenavigation)) 控件。  若开发者选择自行设计开发导航样式，请遵循：  1）为确保头部导航简洁清晰，一级标题栏范围内有且仅最多显示 2 个元素（含文本、图片标识、功能操作），非一级标题栏范围内有且仅最多显示 3 个元素。（必须）   * 合理利用头部空间，避免使用双行竖排标题。 * 为适应头部 banner 运营需求，一级标题栏标题元素非强制显示。   2）合理设置标题栏高度，避免过低（低于44vp）出现元服务胶囊与标题栏、底部内容信息重叠问题。（必须）  3）为确保标题栏左右信息对称，标题元素均需与元服务胶囊水平中心对齐。（必须）  4）标题栏范围仅有一个元素时，需要保证左对齐。（必须）   * 手机左侧第一个元素距离左侧屏幕边缘不超过 16vp（建议 16vp）。 * 折叠屏左侧第一个元素距离左侧屏幕边缘不超过 24vp（建议 24vp）。 * 平板左侧第一个元素距离左侧屏幕边缘不超过 32vp（建议 32vp）。   5）合理设置标题文本字号，一级标题建议加粗，默认字号不小于 20fp，非一级标题默认字号不小于 18fp 。（推荐）  6）明确一级界面和非一级界面关系，非一级界面的标题栏必须提供返回或关闭按钮。（必须） | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DEB7717A91C4.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/69AC10890394.png "点击放大")  Do（标题栏高度显示合理） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/964B78387C9A.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2632A3D9A63A.png "点击放大")  Don't（标题栏过低） |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/78B3578FE41B.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/1A3081DE720C.png "点击放大")  Do（一级标题显示元素数量适中） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7151A004F944.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6814E51B9640.png "点击放大")  Don't（一级标题显示元素数量过密） |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6769905C02B8.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/AE1156A482F9.png "点击放大")  Do（标题与胶囊水平中心对齐） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A45809A60D73.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/20D3E87FBE41.png "点击放大")  Don't（标题元素靠上） |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3A8EF05604BD.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F80E7AE3014A.png "点击放大")  Do（单元素标题左对齐） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/ED16444A65FF.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/07F9A25EE153.png "点击放大")  Don't（单元素标题未保持左对齐） |
| 测试方法 | | 启动元服务，检查界面各级页面头部导航栏。 | |
| 判定标准 | | 元服务所有头部导航栏信息构成、显示高度、标题字号、标题显示位置满足元服务规范要求。 | |
| 标准等级 | | 必须 | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | |
| 需考虑的特殊事项 | | 无 | |
| 系统能力 | | 请参阅：[AtomicServiceNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicenavigation) | |

7.1.6 元服务胶囊（Menubar）

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 标准编号 | 7.1.6 | 元服务胶囊（Menubar） | | |
| 标准描述 |  | 元服务胶囊在静态或第一屏界面显示时，胶囊区域无文本信息或功能控件遮挡，无热区冲突。 | | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/847C7834C034.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0C521D2A1794.png "点击放大")  Do | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0D0D7EC2F302.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2103443BC6AA.png "点击放大")  Don't（操作热区冲突） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CFEC4E935A87.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BF88851E95C1.png "点击放大")  Don't（标题栏过低，信息遮挡） |
| 测试方法 | | 元服务胶囊在静态或第一屏界面显示时，胶囊区域无文本信息或功能控件遮挡，无热区冲突。 | | |
| 判定标准 | | 除全屏模态弹窗场景，其他静态或第一屏界面显示时，元服务胶囊需保证显示清晰且可操作，胶囊区域无文本信息或功能控件遮挡，无热区冲突。 | | |
| 标准等级 | | 必须 | | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | | |
| 需考虑的特殊事项 | | 无 | | |
| 系统能力 | | 设计规则 | | |

7.1.7 底部导航栏

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 标准编号 | 7.1.7 | 底部导航栏 | | |
| 标准描述 |  | 如开发者需使用底部导航栏，建议开发者直接调用元服务官方提供的底部页签 ([AtomicServiceTabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicetabs)) 控件。  若开发者选择自行设计开发导航样式，请确保导航简洁清晰，并遵循：  1）页签数量配置最多不超过 5 个，最少不少于 2 个。  2）合理设置底部导航栏高度，除去导航条固定高度（28vp），底部页签栏（此处仅涉及手机、折叠屏）在设计时应避免过高（超过70vp）或过低（低于 40vp）。 | | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F453C433772F.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/8882510F44BD.png "点击放大")  Do | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/235BC6710CF7.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BC56A8B572B7.png "点击放大")  Don't | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6774A1E07576.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3F172E7CBD6D.png "点击放大")  Don't |
| 测试方法 | | 启动元服务，检查元服务底部导航栏。 | | |
| 判定标准 | | 元服务底部导航栏显示高度、页签数量、与导航条避让间距满足元服务规范要求。 | | |
| 标准等级 | | 必须 | | |
| 适用设备类 | | 手机、折叠屏、平板、电脑 | | |
| 需考虑的特殊项 | | 无 | | |
| 系统能力 | | 请参阅：[AtomicServiceTabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicetabs) | | |

7.1.8 沉浸式设计

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 标准编号 | 7.1.8 | 沉浸式设计 | | |
| 标准描述 |  | 元服务头部标题栏满足沉浸一体式设计：  1）避免标题栏底部背景色与服务内底部背景色（含状态栏背景色）差异过大，确保自然过渡。  2）融合背景的同时，需要确保标题栏信息清晰可阅读。字体和背景的对比度至少 3:1。 | | |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/C84D405EE609.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A103D562C6C1.png "点击放大")  Do | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/15BBDA96F22E.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0FBB51490405.png "点击放大")  Don't（背景色分割块面多） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A4B48844987F.png "点击放大")  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/723D6603B62E.png "点击放大")  Don't（标题信息模糊） |
| 测试方法 | | 启动元服务时，检查标题栏背景色沉浸式效果。 | | |
| 判定标准 | | 元服务所有头部标题栏满足沉浸一体式设计 | | |
| 标准等级 | | 推荐 | | |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 | | |
| 需考虑的特殊事项 | | 无 | | |
| 系统能力 | | 设计规则 | | |

7.1.9 基本转场过程无多余加载过渡

|  |  |  |
| --- | --- | --- |
| 标准编号 | 7.1.9 | 基本转场过程无多余加载过渡 |
| 标准描述 | | 检查元服务一二级界面切换效果，保证元服务转场切换沉浸无干扰，页面跳转遵循元服务动效规范，切换过程中无须动画/文字加载状态。  动效设计满足：  1）父子层级转场流畅，无多余动画/文字加载提示。  2）搜索、新建、编辑场景转场流畅，无多余动画/文字加载提示。  3）卡片（列表、网格、按钮、图片、视频）打开转场流畅，无多余动画/文字加载提示。  4）左右翻页滑动流畅，无多余动画/文字加载提示。 |
| 测试方法 | | 检查元服务一二级界面切换效果。 |
| 判定标准 | | 遵循元服务加载状态规范 |
| 标准等级 | | 推荐 |
| 适用设备类型 | | 手机、折叠屏、平板、电脑 |
| 需考虑的特殊事项 | | 无 |
| 系统能力 | | 请参阅[合理使用页面间转场-转场场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-page-transition#section92341720171119) |