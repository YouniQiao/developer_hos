---
title: 索引条
sidebar_label: 索引条
original_url: /docs/design/components/view-components/alphabet-indexer
format: md
upstream_id: design/components/view-components/alphabet-indexer
last_sync: 2026-06-07
sync_hash: 50ca4475
---
# 索引条

索引条主要针对按字母顺序排序的列表进行快速定位。用于快速精确定位，如：联系人列表 (查找联系人)、天气、世界时钟 (添加城市)。开发相关描述请参考 [AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer) 文档。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/D8324E1945AE.png "点击放大")

### 如何使用

**索引条作为快速检索类型组件，需要充分适配设备尺寸。**例如在手机竖屏情况下时，能够完整展示索引条内容；若将手机旋转成横屏显示，由于屏幕高度限制，优先显示对应的字母索引；如果字母仍然显示不全，则使用缩略的方式展示关键字母条目。索引条可以通过 [usingPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer#usingpopup) 接口显示浮层窗口，用于展示索引内容的首字母，可以配置仅展示英文，或展示对应该条目下的所有同类型字母前缀，主要适用于中文场景。

|  |  |
| --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/B66AADED6380.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/2EE4376D2708.png "点击放大") |
| 纯首字母索引浮层 | 多项索引浮层 |

### 组件规则

## 控件构成

索引条控件主要由索引项、索引浮层和检索内容区域为主。其中索引项一般为英文字母，用来进行选择，切换对应选后会对内容区进行筛选，做到快速定位。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/68A5AF371463.png "点击放大")

|  |  |  |
| --- | --- | --- |
| 序号 | 元素名称 | 描述 |
| 1 | 当前索引项 | 表示内容区域正显示由此索引项对应的内容 |
| 2 | 快捷操作浮层 | 用户在索引项列表上滑动时出现，支持点击操作，如无操作显示 3 秒后自动隐藏 |
| 3 | 索引项列表 | 展示所有可操作的索引项 |
| 4 | 内容区域 | 跟随索引项操作变化内容显示 |

## 动态布局

当设备处于横屏下时，例如手机设备，或是当应用窗口处于分屏场景时，由于可展示的应用高度不够，字母索引可以以间隔方式显示字母。 通过使用 [autoCollapse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer#autocollapse11) 接口能力可以实现动态判断。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/9D8CED52E2F3.png "点击放大")

### 设备差异

## 手机设备

|  |  |
| --- | --- |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/79D554102251.png "点击放大") | ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/ACAD9E8EF310.png "点击放大") |
| 索引条的位置需要在界面中可以自由布局，通常情况下建议在界面中保持居中位置。在 HarmonyOS 应用中通常会将界面中的信号栏和底部工具栏/底部页签高度去除掉，然后居中展示。 | 若顶部的内容还包含子页签等其他组合组件，字母索引起始位置可以考虑基于顶部组件高度提供一个默认间距，固定显示。 |

## 穿戴设备

索引条是快速定位列表内容的操作条。用于快速精确定位，如联系人列表查找联系人。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/BEC5353C834A.png "点击放大")

**使用规则**

* 索引条最少显示 2 个索引；当索引数在索引条上量超过 4 个时，可通过点击折叠箭头> 展开或折叠索引条。
* 未展开状态下，用户可以在索引条上通过滑动交互和点击交互来获取精确定位。当用户手指滑动或点击至某一字母位置时，界面顶部有气泡提示当前字母，用户在非索引条区域滚动或点击时，此气泡消失；若用户没有操作，则 3.5s 后气泡自动消失。
* 展开状态的索引条，点击或用滑动索引条，均可进行焦点选择，此时界面有气泡提示当前字母，消失规则与未展开时相同； 滑动列表中的内容或点击箭头，可将索引条折叠。
* 展开状态的索引条弧长根据数量增长，最长可形成整圆。方形表为胶囊形。
* 多语言情况下，整圆状态下超过 30 个字符时，可隐藏一些字符并以“.”显示，焦点处于此位置时，气泡显示被隐藏的多个字符。
* 多语言情况下，一些语言需要切换至字母索引时，本地语言末尾有一个字母，点击或滑动可切换至字母语言；切换至字母索引时，字母索引上方有一个本地语言字符，点击或获得可切换至本地语言。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/EF52B17B1DE7.png "点击放大")

方形表：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/84F5E8678F08.png "点击放大")

**视觉规则**

圆形表：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/BF30BF768432.png "点击放大")

方形表：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/BD02ABCFC72F.png "点击放大")

### 开发文档

[AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer)