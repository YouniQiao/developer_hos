---
title: 电商购物类
sidebar_label: 电商购物类
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/responsive-design-examples5-0000001930419478
---
# 电商购物类

购物、买菜等服务类型的应用或业务场景，旨在让用户享受高效的浏览和互动。这类场景的核心是浏览商品、商品比价、直播购，因此，在大屏设备上可以向用户展示更多的商品选择，提供更轻便高效的交互体验。此类应用有如下特点：

* 界面布局舒适美观
* 展示更多的商品信息
* 高效的详情对比
* 快捷流畅的界面交互
* 关键信息无干扰

### 首页

## 首页的沉浸广告

|  |
| --- |
| 在电商购物应用中，首页通常会有入口图标和商品卡片等丰富的商品信息。通过对入口图标进行挪移或延展，商品卡片增加列数的方式高效适配多端设备尺寸，从而提升大屏设备上界面布局的舒适性、美观性和浏览效率。 |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250701110525.09439168414604868726773130167256:50001231000000:2800:00E3E9556C0E5A6B6ABA579B6B0DDADDDBAE55CF85EBEFE77E9114E952B5E9EE.png "点击放大") |

## 首页的卡片响应式布局

有多张卡片时，在宽屏设备上采用延伸布局以露出更多卡片。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0E343C651185.png "点击放大")

只有两张卡片时，在更宽的设备上卡片自适应形变。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/07571EA1C96C.png "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式一：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F467CD046571.png "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式二：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/ECDF4F40D8F4.png "点击放大")

本场景的开发指南，请参阅[一多开发实例（购物比价）-首页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1976644133811)。

### 商品分类

商品分类页主要用于快速查找目标商品，在大屏设备上建议通过分栏布局提升查找效率。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3326117C1015.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品分类页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1048762514385)。

### 商品搜索

为了避免进入整屏搜索界面时产生的大面积跳转，同时也为了规避搜索联想词列表的留白问题，在折叠屏/平板上建议采用轻量化搜索体验。当用户点击搜索框/搜索按钮时，原地激活搜索框，使用搜索面板承载推荐内容和搜索联想词，保持界面布局的整体稳定性。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/22CBCD061197.png)

**注：应用根据自身业务属性决策是否在首页使用，推荐运用于二级频道页。**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BC7918588C80.png "点击放大")

### 商品详情

商品详情页中通常有顶部的商品图片，在折叠屏上建议通过延伸布局露出更多商品图片，在平板上建议从商品列表到进入商品详情时，提供分栏体验，帮助用户更高效的查找商品。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/80C6CF12BAE2.png "点击放大")

平板上分栏布局时，点击全屏按钮，进入全屏，显示全屏的挪移布局。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/4A39AEC7D204.png "点击放大")

也可以为平板提供默认的全屏体验，点击商品卡片直接进入商品详情。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DA2222EA898E.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section112893356386)。

平板上挪移布局显示商品详情时，查看下一层级内容时，建议使用以下两种范式。

范式一：在商品详情页，点击评论等功能进入下一层级页面时，通过侧边面板显示下一层级内容：

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250701110532.19597471828587971842599668221941:20260530174944:2800:909120453B250FBA74DBF61466971AAF174B3C9513C70CADFFD863E08661884E.mp4)

范式二：在商品详情页，点击评论等功能进入下一层级页面时，原来的全屏界面被缩窄，右侧露出的面板上显示下一层级内容。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/8A329D1938B9.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section8305102524814)。

### 分屏购物比价

查看商品详情时，在宽屏设备上，可点击应用内“分屏”按钮进行分屏，可满足同时查看两个商品的详细参数进行购物比价的诉求。

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250701110532.07007074780122771307764361794807:20260530174944:2800:073E177604D90B074D8D8D850648C7BA0D485F2B745F47F3C29CA9A386E5EC57.mp4)

形成分屏后，“分屏”按钮自动切换为“全屏”按钮，可再次点击“全屏”按钮回到当前获焦窗口的全屏，退出另一侧的分屏任务。

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250701110532.77887094727525278879700672746512:20260530174944:2800:FC45542F8AD16220BD65E16A0500D916A3B4C58F46A049796D4E9DC94E17938A.mp4)

多端的应用内分屏购物比价效果：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A7BBE56FA831.png "点击放大")

### 侧边面板咨询客服

在查看商品详情时，经常会有咨询客服的诉求，可采用侧边辅助面板显示客服对话等辅助信息，从而提升浏览效率，实现边看商品详情边聊天咨询的体验。

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250701110532.63869920436848397756073573079414:20260530174944:2800:4F3424663E613C27287C9F90C5CAE26CADC3A27E0E2184B0FA5F9AB95585C397.mp4) [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250701110532.18908527746993175942856472725772:20260530174944:2800:AA3A5C0D6B48252385EA4F745DA0548D18656AB483EDD7DA8E117080EE641D7A.mp4)

侧边面板同样可用于更多场景，例如在商品详情页临时打开购物车、查看评论、查看店铺信息等。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D94B23CECCD8.png "点击放大")

### 购物车

购物车页面通常用于快速查看并支付待购买的商品。折叠上可全屏适配显示更多关键参数信息，平板和更大尺寸的屏幕设备的显示区域较大，为避免界面留白较多信息过疏，建议采用重复布局、露出辅助信息等方式确保页面的使用效率。

范式一：重复布局

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7DE905130502.png "点击放大")

范式二：右侧露出辅助信息

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/047955A2244A.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-购物车页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section49871612174810)。

|  |
| --- |
| 范式三：从列表变卡片  查看商品详情时，有需要临时查看购物车内待支付商品的诉求，可利用侧边辅助面板显示购物车页面，提升浏览效率。  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6B144419A789.png "点击放大") |
|  |

### 浅层窗口支付

全屏商品详情支付时，采用浅层窗口可以有效避免大面积的页面跳转带来的体验中断。平板和折叠屏上调用居中的半模态控件；手机上调用底部半模态控件，来实现浅层窗口体验。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6C567BCC8402.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品支付页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1965713469388)。

### 直播购物

直播购物在电商购物场景中很常见。

## 全屏直播间

直播画面和推荐的商品信息，在多端基于设备屏幕尺寸进行响应式适配。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/760244AD95F9.png "点击放大")

同一设备上，可根据直播画面比例进行自适应的布局适配。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D1FBA78B5BE5.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播间页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section838561613490)。

## 边看边买

**直播 + 商品详情**

在看直播时，经常需要一边听商品讲解一边浏览商品信息，可利用侧边辅助面板查看商品详情，提升购买决策效率。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9DA215CF4C4C.png "点击放大")

**直播 + 直播间购物袋**

看直播时，会有临时查看直播间中直播商品的诉求，通过侧边辅助面板可快速查看直播间购物袋直播商品，提高浏览效率。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/4DEBFABDEEE9.png "点击放大")

**直播 + 支付**

看直播时，可以通过侧边辅助面板直接进行支付，确保任务不会被中断和支付效率。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/42B47FADF97B.png "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section972591693910)。