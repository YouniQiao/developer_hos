---
title: 触控板
sidebar_label: 触控板
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/hmi-touchpad-0000002464444730
---
# 触控板

触控板同时具备精细化指向型输入（鼠标）和多指触控手势输入（触屏） 的特性，使得触控板既适合用于对指点精度有较高要求的生产力应用，也适合用于基于触摸交互优化的用户界面。

在为您的应用设计或适配触控板交互时，触控板交互应满足用户手眼分离状态下 (眼睛看着屏幕，手在触控板上盲操作) 的使用习惯，应遵循以下原则：

1. 触控板应当具备替代鼠标的功能。

2. 应用在触屏上的手势操作功能可通过在触摸板上相应的手势来实现。

### 基础手势

触控板基础手势是指**与应用进行交互**的相关手势，应用可结合业务特点以及手势交互规范进行对应交互的设计，一般地，触控板基础手势以一指或者二指进行交互。

|  |  |
| --- | --- |
| 手势 | 描述 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160440.71129235500915087660737694395945_50001231000000_2800_7D33F244B8EEE77A0B3E3472ACA6AE8558E052F20948B639BB8089AE3736B58A.png "点击放大") | **单指轻点后移动**。  移动光标。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.76454369356483598669815288757900_50001231000000_2800_4423C506E70A1EFA3375DE1E4FF5D0CAF7D95F69EED4ACB893BC7BBA309AAB18.png "点击放大") | **单击。**  **单指轻点**或**点按下去**来进行点按。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.67864351579978260172453813759011_50001231000000_2800_1D5B4D1E4BD783A9B0967C643ECFD12B0027B4E54EC3E65527E0394428940355.png "点击放大") | **呼出菜单。**  用**双指点按**或**轻点**  如部分触控板不支持多指交互能力，可通过点击触控板左下角或右下角触发菜单功能。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.93774187909463313518176302533377_50001231000000_2800_B8FDC2A9344390A1D5AF33C342BCFEC530BEE0517BD76D8CF514779C231647AC.png "点击放大") | **双击。**  **轻点两下，**可进行某些快捷操作，如快速放大图片、点赞等。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.04272054388310550793427822113053_50001231000000_2800_57A0272EA395635D2186503DE91BA1BA3D8D86B891AB809ECEE4158AF0D9B8BD.png "点击放大") | **拖拽。**  **点按住并移动，**或**轻点两下后移动**以拖拽它  单指轻点两下，第二下不抬起手指并移动可进行拖拽。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.48227947941534029018807851929287_50001231000000_2800_C3902208A1A5057DB478795EB45552D243F111813F70C0FF402701F4238B782C.png "点击放大") | **轻扫。**  **双指快速移动，**可轻扫页面。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.82217342346528000318061288403429_50001231000000_2800_7BFD054C3ABDA361BE8CB5CE926EF724771DC2A57A6F5FA811ABABCD6EB0C601.png "点击放大") | **滚动**或**平移**。  **双指移动**可上下或左右滚动。双指移动支持平移。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.29140587705701887112193075903475_50001231000000_2800_341CEF3DB6CB8508A011E16C35D1C403244E1237DEDE440EC9C16A93E5E2B431.png "点击放大") | **缩放。**  **双指捏合或张开**，可放大或缩小。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.96806655846689756150829985716709_50001231000000_2800_2526368F53E8F68079662E4510C2D070BF0808CD941B219F0E50E95EA1F5FCDB.png "点击放大") | **旋转。**  **双指以对方为轴心进行旋转**，可旋转照片或其他项目。 |

### 系统手势

触控板系统手势是指与**系统进行交互**的相关手势，如返回桌面、进入多任务等，系统手势由系统统一控制，触控板系统手势通过**多指手势**、**边缘手势**或者**特殊手势**进行交互。

## 多指手势

|  |  |
| --- | --- |
| 手势 | 描述 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.41483947873952286233702592828382_50001231000000_2800_04EE3B661175E65FB6C3D3B4DF3ACF0C7F1BA58435DF322C8D226088CC81A284.png "点击放大") | **返回桌面。**  **三指上滑**以返回桌面。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.04727577037681607383980948245675_50001231000000_2800_9F239292370E2DAF8DC5AE34348068E17E676EF3C6E3FB3FF8C8397145B0A3CB.png "点击放大") | **进入多任务。**  **三指上滑并停顿**进入多任务。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.49508911204126147101915288175265_50001231000000_2800_93F0D3BD33A92FABD10276CCAD9331B7626B180101EFC2664CFC3B12137FBDC6.png "点击放大") | **切换桌面。**  **四指横滑**切换虚拟机、企业空间。 |

## 边缘手势

|  |  |
| --- | --- |
| 手势 | 描述 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160441.63804097866400956377680057237776_50001231000000_2800_1F16E7627B3F230A8FBAF4B0E016AA80AEDE256D6629C2CA5F0EF34CD4C150A4.png "点击放大") | **返回。**  **单指左边缘或右边缘向内滑**以返回应用上一级。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160442.57210410438171174512301285131539_50001231000000_2800_61D7C3010558094873D87CE73BDB46305A62572D863B9D836925B1439C753FFC.png "点击放大") | **亮度调节。**  **单指左边缘滑动**亮度调节。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160442.23937391908328579061072746668912_50001231000000_2800_F735776250056570CFA4078BAB965E28D199A139B2A09FF1EB1E4A288E6641E5.png "点击放大") | **音量调节。**  **单指右边缘滑动**音量调节。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160442.37962696560939983021117877930563_50001231000000_2800_F8ABA226B1E5C3D179937A23B08A73814671CB172BEA765097266814C1DC09FA.png "点击放大") | **进度调节。**  **单指上边缘滑动**进度调节。 |

## 特殊手势

|  |  |
| --- | --- |
| 手势 | 描述 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160442.54401433580708796485447745974534_50001231000000_2800_EDB27DED32B67A1D441FC00384EF486396D8443105223D1D41B9596272A34724.png "点击放大") | **截图。**  **单指关节敲击两下**进行截图。 |
| ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251029160442.85020619879546929170481686492037_50001231000000_2800_6E182506ABAFEA45A62A8DE23DA0A4AD5C80A362752B86002C9CAA14701A99BE.png "点击放大") | **录屏。**  **双指关节敲击两下**进行录屏。 |

关于光标和界面对象的悬浮态表现，请参考[光标的交互](https://developer.huawei.com/consumer/cn/doc/design-guides/hmi-cursor-0000001795531205)。