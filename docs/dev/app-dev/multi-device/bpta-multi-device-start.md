---
title: "从一个例子开始"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/bpta-multi-device-start
format: md
upstream_id: dev/app-dev/multi-device/bpta-multi-device-start
last_sync: 2026-06-07
sync_hash: f64c2b17
---
# 从一个例子开始

本章通过一个天气应用，介绍一多应用的整体开发过程，包括UX设计、工程管理及调试、页面开发等。

## UX设计

本示例中的天气应用包含主页、管理城市和添加城市三个页面，其中主页中又包含菜单和更新间隔两个弹窗，基本业务逻辑如下所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/jUtUxccvQymjUB3RPQ39-g/zh-cn_image_0000002417910860.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=FD3A62E48E400498083D20B9943FD1B42DBAD0F5D99FE90674D35F17EBFB0D34 "点击放大")

“一多”建议从最初的设计阶段开始就拉通多设备综合考虑。考虑实际智能终端设备种类繁多，设计师无法针对每种具体设备各自出一份UX设计图。“一多”建议从设备应用窗口宽度和窗口高宽比两个维度，将设备划分类别。

以应用窗口宽度为判断条件，建议划分为5个区间：

| 设备类型 | 窗口宽度（vp） |
| --- | --- |
| 超小设备 | (0, 320） |
| 小设备 | [320, 600) |
| 中设备 | [600, 840) |
| 大设备 | [840, 1440) |
| 超大设备 | [1440, +∞) |

根据应用窗口的高宽比进行判断，建议划分为3个区间：

| 设备类型 | 高宽比 |
| --- | --- |
| 小设备 | (0, 0.8) |
| 中设备 | [0.8, 1.2) |
| 大设备 | [1.2, +∞) |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/Q0wYDN5OQ6G_3Mbub36e-w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=66F0E26DB37D9DF3BA54B28F1D164EF6D4ADBA4C604C5B3FF91F62E01616D91D)

* vp是virtual pixel（虚拟像素）的缩写，是常用的长度单位。

直板机、双折叠、平板对应于小设备、中设备及大设备，本示例以这三种设备场景为例，介绍不同设备上的UX设计。天气主页在不同设备上的设计图如下所示。

|  | 小设备 | 中设备 | 大设备 |
| --- | --- | --- | --- |
| 主页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/4LzMGqchTHC4-LqB0ZnxSg/zh-cn_image_0000002451272749.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=122FD8D1EFB3856460C767FF1AF33B4FC611902E2CB6A9443E025ACA3CEC2AEF "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/PrVyCN1CTS6Zx88pTW6Skw/zh-cn_image_0000002321306570.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=9812C2F0EB23CF9FF517D5EBE9E57817B94E2CE38AA4C77F32A4964DD3AC6FAB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/cOYjKzdQSRGh0Y5xFjTwgg/zh-cn_image_0000002355145437.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=0B1E1F9ED837830E9744BFE9E4955F36C993CF050297A28323CDA4D4838731F0 "点击放大") |

另外，大设备中天气主页还允许用户开启或者隐藏侧边栏。

| 开启侧边栏 | 隐藏侧边栏 |
| --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/223ROFW4RG2dlF_mLg0lMA/zh-cn_image_0000002321146742.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=FC9A05E24B43F53E903808B4933BAFB6D9C908ED386FE4C3756C23EFC3CAED77 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/xunLIfVpQAmOqYr2_MpnNQ/zh-cn_image_0000002355265289.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=0812118EEA0708EE2BC5B0F923E88EB7D3004FE1614C4A0EB2BA74676F1D62C7 "点击放大") |

从天气应用在各设备上的UX设计图中，可以观察到如下UX的一些“规律”：

* 在不同的屏幕宽度下，应用的整体风格基本保持一致。
* 在相近的屏幕宽度范围内，应用的布局基本不变；在不同的屏幕宽度范围内，应用的布局有较大差异。
* 应用在小屏幕下显示的元素，是大屏幕中显示元素的子集。

  + 考虑到屏幕尺寸及显示效果，大屏幕中可以显示的元素数量一定不少于小屏幕。
  + 为充分利用屏幕尺寸优势，大屏幕可以有其独有的元素或设计（如本示例中的侧边栏）。

如此，既在各设备上体现了UX的一致性，也在各设备上体现了UX的差异性，从而既可以保障各设备上应用界面的体验，也可以最大程度复用界面代码。

## 工程管理及调试

完成UX设计后，接下来需要考虑如何将设计转化为实际可运行的工程，在本文[多设备工程部署](/docs/dev/app-dev/multi-device/bpta-multi-device-ide)中，将详细介绍一多的工程创建及管理等，本小节仅介绍最基础的工程创建及多设备预览调试。

###工程创建

一多应用的工程创建过程，与传统应用并无较大差异。只需在工程创建过程中，注意在“Device Type”选项中勾选所有该应用期望运行的目标设备类型，保证后续该应用可以在所有目标设备上正确安装即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/UFC4e-BmTmmTSykeu2nqWQ/zh-cn_image_0000002552894591.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=2E35DCC565D06D5BD6C9B199F5B69E2E75EF91010045A8913562D332B9209E70 "点击放大")

###预览调试

在代码开发过程中，可以开启预览器，并打开“Multi-profile preview”开关，实时观察应用在不同设备下的表现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/59hAgbNuT4ekRbs2d7KuTw/zh-cn_image_0000002355145441.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=B79F1CEBF04B84BA8C901EA2BA4F50F7A3B210804161E30A6B6A87B950A86ADB "点击放大")

特别的，还可以点击“+ New Profile”按钮，新增自定义预览器。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/gOYM_3VsT4ip9QfrFbC70Q/zh-cn_image_0000002321146750.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=728ED19A6BB3B1816CA265E3EBFDE3766EAA29394F493222BF29F39C7B27EF56 "点击放大")

## 页面开发

天气应用中涉及较多的页面和弹窗，本小节以天气主页为例，简单介绍不同设备下的页面实现思路。

观察天气主页在不同设备上的UX设计图，可以进行如下设计：

* 将天气主页划分为9个基础区域，如：

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/FOu9ADv4TB2ELSseC0Op4A/zh-cn_image_0000002355265301.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=27C4262FEC23ED631A007BFE15781665339140A03D23C1AD3E1AD0051DE3E051 "点击放大")
* 基础区域9仅在大设备上显示（需要在大设备上展开侧边导航栏），基础区域1-8虽然在各设备上始终展示但其尺寸及区域内的布局基本保持不变（区域8需要向下滑动设备至底部，下方示例图不做展示），可以结合[自适应布局](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout)能力以[自定义组件](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components)的形式分别实现这9个基础区域。

  |  | 小设备 | 中设备 | 大设备 |
  | --- | --- | --- | --- |
  | 主页 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/NvY5E8soSWGr3_P7Ps4s_g/zh-cn_image_0000002321306594.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=A52B5475781E8BDFF1E82A4DA36DE5F6DBF6C391AFF68FF2F6B78301D2D11868 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/vxVZwpDfTIOK2fGDK1qL-A/zh-cn_image_0000002355145457.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=770F74556AE3FE03D66752571D98CADED691F93EC6D012FBE19F6B711EF5F81A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/bV675E8fSrukKYdIWnp8bQ/zh-cn_image_0000002321146770.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=5062AF16322D01A2CFE8C581EDA7C9FAA087C72C1E803D2E19B99463E0DD86E5 "点击放大") |
* 基础区域1-8之间的布局在不同设备上有较大差异，可以使用响应式布局中的[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)能力实现组件间的布局效果。
* 展开和隐藏侧边栏的功能可以通过[侧边栏组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)来实现。侧边栏是大设备上独有的，借助响应式布局中的[媒体查询](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1950102518311)能力，控制仅在大设备上展示侧边栏即可。

###主页基础区域

天气主页中的9个基础区域介绍及实现方案如下表所示。

| 编号 | 简介 | 实现方案 |
| --- | --- | --- |
| 1 | 标题栏 | 自适应布局拉伸能力。 |
| 2 | 天气概览 | Row和Column组件，并指定其子组件按照主轴起始方向对齐或居中对齐。 |
| 3 | 每小时天气 | 自适应布局延伸能力。 |
| 4 | 每日天气 | 自适应布局延伸能力。 |
| 5 | 空气质量 | Canvas画布组件绘制空气质量图，并使用Row组件和Column组件控制内部元素的布局。 |
| 6 | 生活指数 | 自适应布局均分能力。 |
| 7 | 日出日落 | Canvas画布组件绘制日出日落图。 |
| 8 | 应用信息 | Row和Column组件，并指定其子组件居中对齐。 |
| 9 | 侧边导航栏 | 综合运用自适应布局中的拉伸能力、占比能力和延伸能力。 |

天气主页涉及的内容较多，因篇幅限制，本小节仅介绍区域3（每小时天气）的实现。

延伸能力是指容器组件内的子组件，按照其在列表中的先后顺序，随容器组件尺寸变化显示或隐藏。随着可用显示区域的增加，用户可以看到的“每小时天气”信息也不断增加，故“每小时天气”可以通过延伸能力实现，其核心代码如下所示。

```
import { Forecast, getHoursData, MyDataSource, Style } from 'common';

@Preview
@Component
export default struct HoursWeather {
  hoursData: Forecast[] = getHoursData(0);
  @State hoursDataResource: MyDataSource<Forecast> = new MyDataSource(this.hoursData);
  @StorageLink('curBp') curBp: string = 'lg';

  // ...
  build() {
    // Implement extensibility capability through list component.
    List() {
      LazyForEach(this.hoursDataResource, (hoursItem: Forecast) => {
        ListItem() {
          this.HoursWeatherItem(hoursItem,
            this.curBp === 'lg' ? Style.WEATHER_ITEM_WIDTH + 2 : Style.WEATHER_ITEM_WIDTH)
        }
      }, (hoursItem: Forecast, index: number) => JSON.stringify(hoursItem) + index)
    }
    .width('100%')
    .height(Style.CARD_HEIGHT)
    .borderRadius(Style.NORMAL_RADIUS)
    .backgroundColor(Style.CARD_BACKGROUND_COLOR)
    .listDirection(Axis.Horizontal)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/Weather/product/default/src/main/ets/pages/HoursWeather.ets#L17-L80" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HoursWeather.ets</a></div>


###城市天气详情

天气主页右侧的城市天气详情由区域1-8组成，区域1（标题栏）始终固定在页面顶部，区域2-8在不同设备下的布局不同且可以随页面上下滚动。本小节介绍如何实现城市天气详情中区域2~8的布局效果。

设备屏幕可能无法一次性显示区域2-8的所有内容，故需要在外层增加滚动组件（即Scroll组件）以支持上下滚动。不同设备下区域2-8的相对位置一共有三套不同的布局，可以借助响应式布局中的[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)实现这一效果。本示例中将栅格在不同场景下分别划分为4列、8列和12列，区域2-8在不同场景下的布局如下表所示。

| 小设备 | 中设备 或 大设备（侧边栏显示状态） | 大设备（侧边栏隐藏状态） |
| --- | --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/xfhB24aMQbWaioKB2Wvi_g/zh-cn_image_0000002355265317.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=D0C174285866FE362014C0C2C492CACE7551FF99CB1AABCFB558A4B72F94D04E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/Vyz6MJz4RiW5vdL3kcFwxA/zh-cn_image_0000002321306610.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=4E26A6D8E6E72345E9E02C6631E14EE9E8D5F513053BA3C55796175BDD9D6009 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/p7c_ZC5JTgmnBzZRUvHyhw/zh-cn_image_0000002355145469.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=8270B07B4F7BC070CC97CC6480ABDA4DC456BDDE588B67BA43AA3283E47E5208 "点击放大") |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/npvZRbIxSVauOQ_e97mXKQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=6B8C99B680EF14AF8C4D53E4E4CBA4D20C5706D7110B14FF165C8428E5BA15D2)

为提升用户体验，大设备侧边栏隐藏状态下，每日天气与空气质量的相对顺序发生了改变。可以通过调整GridCol栅格子组件的order属性，实现目标效果。

```
import AirQuality from './AirQuality';
import HoursWeather from './HoursWeather';
import IndexHeader from './IndexHeader';
import IndexEnd from './IndexEnd';
import LifeIndex from './LifeIndex';
import MultidayWeather from './MultidayWeather';
import SunCanvas from './SunCanvas';
import { CityListData, Style } from 'common';

@Component
export default struct HomeContent {
  @Prop showSideBar: boolean;
  @StorageLink('titleText') titleText: string[] = [];
  @StorageLink('swiperIndex') swiperIndex: number = 0;
  @State headerOpacity: number = 1;
  cityListData?: CityListData;
  index: number = 1;
  scroller: Scroller = new Scroller();

  build() {
    Scroll(this.scroller) {
      GridRow({
        columns: {
          xs: 4,
          sm: 4,
          md: 8,
          lg: this.showSideBar ? 8 : 12
        },
        gutter: { x: Style.GRID_GUTTER, y: Style.GRID_GUTTER },
        breakpoints: { reference: BreakpointsReference.WindowSize }
      }) {
        // Weather overview.
        GridCol({
          span: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: this.showSideBar ? 8 : 12
          },
          order: 0
        }) {
          IndexHeader({ headerDate: this.cityListData!.header, index: this.index })
            .opacity(this.headerOpacity)
        }

        // Hourly weather.
        GridCol({
          span: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: 8
          },
          order: 1
        }) {
          HoursWeather({ hoursData: this.cityListData!.hoursData })
        }

        // Daily weather.
        GridCol({
          span: 4,
          order: {
            xs: 2,
            sm: 2,
            md: 2,
            lg: this.showSideBar ? 2 : 3
          }
        },) {
          MultidayWeather({ weekData: this.cityListData!.weekData })
        }

        // Air quality.
        GridCol({
          span: 4,
          order: {
            xs: 3,
            sm: 3,
            md: 3,
            lg: this.showSideBar ? 3 : 2
          }
        }) {
          AirQuality({ airData: this.cityListData!.airData, airIndexData: this.cityListData!.airIndex })
        }

        // Living index.
        GridCol({ span: 4, order: 4 }) {
          LifeIndex({ lifeData: this.cityListData!.suitDate })
        }

        // Sun canvas.
        GridCol({ span: 4, order: 5 }) {
          SunCanvas()
        }

        // Index end.
        GridCol({
          span: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: this.showSideBar ? 8 : 12
          },
          order: 6
        }) {
          IndexEnd()
        }
      }
    }
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/Weather/product/default/src/main/ets/pages/HomeContent.ets#L17-L142" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HomeContent.ets</a></div>


###主页整体实现

综合考虑各设备下的效果，天气主页的根节点使用侧边栏组件：

* 小设备和中设备既不展示侧边栏，也不提供控制侧边栏显示和隐藏的按钮。
* 大设备默认展示侧边栏，同时提供控制侧边栏显示和隐藏的按钮。

另外主页右侧的城市天气详情，支持左右滑动切换城市，可以使用[Swiper组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)实现目标效果：

* 小设备和中设备开启Swiper组件的导航点，引导用户通过左右滑动切换不同城市。
* 大设备中用户通过点击侧边栏中的城市列表即可高效的切换不同城市，此时需要关闭Swiper组件的导航点。

```
import HomeContent from './HomeContent';
import IndexTitleBar from './IndexTitleBar';
import SideContent from './SideContent';
import { CityListData, Style, getBg, getCityListWeatherData, Logger } from 'common';
// ...

@Entry
@Component
struct Home {
  // ...
  @State curBp: string = 'md';
  @State cityListWeatherData: CityListData[] = getCityListWeatherData();
  @State showSideBar: boolean = false;
  // ...

  build() {
    SideBarContainer(SideBarContainerType.Embed) {
      // Left sidebar.
      SideContent({ showSideBar: $showSideBar })
        .height('100%')
      // Right content area.
      Column() {
        // Title bar.
        IndexTitleBar({ showSideBar: $showSideBar })
          .height(56)
        // Weather details.
        Swiper() {
          ForEach(this.cityListWeatherData, (item: CityListData, index: number) => {
            HomeContent({ showSideBar: this.showSideBar, cityListData: item, index: index })
          }, (item: CityListData, index: number) => JSON.stringify(item) + index)
        }
        .id('swiper')
        .padding({ left: Style.NORMAL_PADDING, right: Style.NORMAL_PADDING })
        .onChange(index => {
          this.swiperIndex = index;
          AppStorage.setOrCreate('swiperIndex', this.swiperIndex);
        })
        // Disable navigation dots on lg width breakpoint.
        .indicator(this.curBp !== 'lg' ? new DotIndicator()
          .selectedColor(Color.White) : false
        )
        .index(this.swiperIndex)
        .loop(false)
        .width('100%')
        .layoutWeight(1)
      }
      .height('100%')
    }
    .height('100%')
    .sideBarWidth('33.3%')
    .minSideBarWidth('33.3%')
    .maxSideBarWidth('33.3%')
    .showControlButton(false)
    .showSideBar(this.showSideBar)
    .backgroundImageSize(ImageSize.Cover)
    .backgroundImage(getBg(this.cityListWeatherData[this.swiperIndex].header.weatherType))
  }
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/Weather/product/default/src/main/ets/pages/Home.ets#L18-L138" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Home.ets</a></div>


最终，天气首页的运行效果如下图所示。

| 小设备 | 中设备 | 大设备（隐藏侧边栏） | 大设备（显示侧边栏） |
| --- | --- | --- | --- |
| ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/gz8WqlAISOW0k9lBnNaFlg/zh-cn_image_0000002321146778.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=980AF5847F4DEF101742A8AED0BE03383073EC06DB2B145A9428CF86BD66D322) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/qsopEkC9QK21VeIuogoP2Q/zh-cn_image_0000002355265329.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=1A87B13B6EF3114F586FA8C595D29B74F3CDAD357CDF6953CC1F2C0257BEA8C9) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/udO5nS3uSSqi3mlVvh1kPw/zh-cn_image_0000002321306622.png?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=75C3596613519820B606D9853CEABAB5085898833A67E1A79A0F0EC906C88F1C) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/WAJAm_1zSDu1qBd9NEKwvw/zh-cn_image_0000002355145485.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074232Z&HW-CC-Expire=86400&HW-CC-Sign=202AE5930E72291EEF12848B237C88FDC29CCDE7AACFA815F226F9C75108904E) |

## 功能开发

应用开发不仅包含应用页面开发，还包括应用后端功能开发以及服务器端开发等。服务器端开发不在本文的讨论范围内，本小节仅介绍多设备上应用功能开发的注意事项。

如前文所示，本示例的目标运行设备是小设备、中设备和大设备，对应实际的设备类型为默认设备和平板等。这些设备运行的都是标准系统，其系统能力一致，所以无需做特别考虑。但是在超小设备（对应的实际设备类型为智能穿戴设备等）上，考虑CPU、内存、硬盘等硬件限制，往往会对系统进行裁剪。如果在应用后端功能开发时调用当前系统没有的能力，就可能会引发异常。

通常有两种方式解决上述问题：

* 在应用安装包中描述其需要的系统能力，保证本应用仅被分发和安装到可以满足其诉求的系统中。
* 在使用特定系统能力前，通过canIUse接口判断系统能力是否存在，进而执行不同的逻辑。

在本文的[多设备功能开发](/docs/dev/app-dev/multi-device/bpta-multi-device-function)章节中，将详细展开介绍。

## 示例代码

* [一多天气](https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/Weather)
