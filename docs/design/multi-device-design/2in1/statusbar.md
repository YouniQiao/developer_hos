---
title: 应用状态栏接入
sidebar_label: 应用状态栏接入
original_url: /docs/design/multi-device-design/2in1/statusbar
format: md
---

\{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用\<MergedTable\>组件还原 */\}

# 应用接入状态栏

### 状态栏

状态栏用于显示设备当前的状态信息，包括时间、WLAN、电量、音量等，也支持用户快捷使用应用功能和设置应用功能，如输入法、截屏等。状态栏默认显示在屏幕的底部区域。

### 适用场景

* 建议场景：应用长时间使用时，需提供部分重要应用功能，以便高频和快捷操作。
* 不建议场景：应用短时间使用或在应用窗口内就能更加便捷操作的功能。

|  |
| --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/BCrlcF2ORwiW-VodQJxY8Q/zh-cn_image_0000002353786401.jpg "点击放大") |

### 交互规则

**鼠标左键**

1. 点击应用功能图标，直接触发相对应的功能操作，如截屏。
2. 点击应用功能图标，呼出快捷功能详情面板，适用于应用提供部分高频或重要功能，同时也可通过面板跳转至应用窗口。不推荐点击应用功能图标后，直接跳转至应用窗口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/hTV2Zj3dQ_2Qa0Y_FQWkgQ/zh-cn_image_0000002564247067.jpg "点击放大")

|  |
| --- |
| ![](../../general-design-basics/visual-design/img/img_c0654a6ca3a2_zh-cn_image_0000002356034513.png "点击放大") |
| 推荐体验 |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/AjBUzpeIQ8ah00EpFDcv1A/zh-cn_image_0000002319827652.jpg "点击放大")  ![](../../general-design-basics/visual-design/img/img_c1173f5f78be_zh-cn_image_0000002322035866.png "点击放大") |
| 不推荐体验 |

**鼠标右键**

鼠标右键点击应用功能图标，可呼出功能管理菜单。应用可提供“退出”等菜单项。

**鼠标悬停**

鼠标悬停在应用功能图标，可显示气泡提示。应用可根据场景提供当前状态或应用功能名称。

|  |  |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/fH6DRBqsTrWgKCESjkEixA/zh-cn_image_0000002353910281.jpg "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/98mo66VfTWODYtTdRuoNWQ/zh-cn_image_0000002319991532.jpg "点击放大") |
| 鼠标右键 | 鼠标悬停 |

### 详情面板

## 面板构成

功能详情面板结构：包含标题区、内容区和更多设置区，应用可根据场景按需组合。

* 标题区：应用需定义功能名称。
* 内容区：应用按需定义功能内容。
* 更多设置区：应用按需提供相对应地应用窗口跳转入口，支持点击直接打开窗口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/iUteuSOtTqaYC2zl8VU84w/zh-cn_image_0000002533247260.jpg "点击放大")

|  |  |
| --- | --- |
|  | |

## 面板视觉规则

**标题文本**

文本大小：Title\_S（Bold）

文本颜色：font\_primary

**标题文本超长规则**

文本至多显示一行，逐级缩小字号至 16sp，仍然超长使用“…”截断。

**模糊材质**

状态栏菜单默认附带模糊和阴影材质，且支持深浅两套效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/0-2z2045Q92Xi6B6XkyYVA/zh-cn_image_0000002533408280.jpg "点击放大")

|  |  |  |
| --- | --- | --- |
|  | | |

**面板最大高度**

1. 应用可根据内容配置高度。
2. 最大高度：桌面高度-dock栏高度-上下安全间距8vp\*2。
3. 超过最大面板高度后，内容区增加滚动条，通过滚动条上下滑动查看内容。

|  |  |  |
| --- | --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/IOjyz6MyTcuaM-34laML4Q/zh-cn_image_0000002319831764.jpg "点击放大") | | |

### 图标样式

状态栏是桌面重要的一部分，视觉效果需要和谐美观。不推荐直接使用色彩鲜艳的应用图标，推荐上传系统图标，具体样式请参阅[HarmonyOS Symbol](/docs/design/general-design-basics/visual-design/harmonyos-symbol)。

|  |  |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/BhTcBA_-SdGYfhWDW0_Jlg/zh-cn_image_0000002353910333.jpg "点击放大")  ![](../../general-design-basics/visual-design/img/img_12ed98ed4e0d_zh-cn_image_0000002355954377.png "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/AHkWhPs-T9KB9cMZyRUJ6A/zh-cn_image_0000002319991588.jpg "点击放大")  ![](../../general-design-basics/visual-design/img/img_d8cb38ba44e2_zh-cn_image_0000002322195686.png "点击放大") |
| 推荐样式 | 不推荐样式 |

**图标尺寸和颜色**

* 图标尺寸：20\*20vp
* 热区大小：34\*34vp
* 资源格式推荐 Symbol 与 SVG 格式，其次为 PNG 格式。

|  |  |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/6aEvIV2nSg67H81EQxC_zA/zh-cn_image_0000002353790549.jpg "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/zFkyMFDtR9aIfZOH95_OrA/zh-cn_image_0000002319831768.jpg "点击放大") |
| 浅色背景-图标颜色：#000000 90%不透明度 | 深色背景-图标颜色：#FFFFFF |

### 开发文档

应用接入状态栏请参阅开发指导[Status Bar Extension Kit](/docs/dev/app-dev/system/system-basicfun/status-bar-extension-kit-guide)。