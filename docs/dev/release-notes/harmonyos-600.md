---
title: "HarmonyOS 6.0.0(20)"
format: md
original_url: /docs/dev/release-notes/harmonyos-600
upstream_id: dev/release-notes/harmonyos-600
last_sync: 2026-06-07
sync_hash: e83f7d7e
---
# HarmonyOS 6.0.0(20)

HarmonyOS开发者版本6.0.0(20) Release于2025年9月25日正式发布。

6.0.0(20)在5.1.1(19)的基础上，进一步增强ArkUI组件能力，新增多个系统组件并优化多个组件调用细节等；ArkWeb的Chromium内核升级至132版本，ArkWeb能力增强；新增端侧问答模型，支持端侧的智能问答，新增智慧化数据检索C API，支持向量化、知识检索和知识问答的能力；地图能力新增矢量图层、流场图层、海量点图层、热力图层，支持通过自定义组件生成marker图标等等，更多详情可参见[OS平台新增和增强特性](/docs/dev/release-notes/os-new-feature-600)。

DevEco Studio新增AI智能辅助编程，进一步提升编译构建效率和优化内存占用，ArkUI Inspector新增支持按照组件粒度3D展开应用，方便查看组件之间的嵌套、遮挡关系，智慧调优能力新增支持对Allocation内存分配问题和Snapshot内存堆快照问题进行分析，更多详情可参见[DevEco Studio新增和增强特性](/docs/dev/release-notes/deveco-studio-new-features-600)。

## 版本信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/EX7IkJg7Rj-Fw1507LY1Og/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260524T132924Z&HW-CC-Expire=86400&HW-CC-Sign=436AE53D2804F18299AEB35F7AD2FE0F088CAC4963031A50826BA3DA669B63D4) 

使用正确的配套关系进行应用开发可以获得更流畅的开发体验。

请在阅读版本更新和变更内容前，务必确认版本的配套关系是否与当前您所使用的开发套件是一致的。

### 6.0.0(20) Release开发者套件配套信息

| ****软件包**** | ****发布类型**** | ****版本号**** | ****发布时间**** |
| --- | --- | --- | --- |
| API版本 | Release | 6.0.0(20)  **\*****注意****：设备系统支持的API能力范围请以****API版本********为准。** | 2025/09/25 |
| DevEco Studio | Release | DevEco Studio 6.0.0 Release（6.0.0.878）  （Patch版本） | 2025/12/24 |
| DevEco Studio 6.0.0 Release (6.0.0.868)  （Patch版本） | 2025/10/23 |
| DevEco Studio 6.0.0 Release (6.0.0.858) | 2025/09/25 |
| SDK | Release | HarmonyOS 6.0.0 Release SDK  基于OpenHarmony SDK Ohos\_sdk\_public 6.0.0.47 (API 20 Release) | 2025/09/25 |

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/UHWKZo7gQGyT4pDIasGYKQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260524T132924Z&HW-CC-Expire=86400&HW-CC-Sign=A6BA04251C555A3B801CA9B9BE974DE73D044F763270352681C848566EE8B67A) 

- ****API版本****请在设备的“设置”中点击设备名称，进入“****关于本机****”进行查询。

- DevEco Studio版本请从DevEco Studio界面菜单选择“Help > About DevEco Studio”进行查询。请[点击此处](https://developer.huawei.com/consumer/cn/deveco-studio/)获取最新的DevEco Studio软件版本。
- SDK内置在DevEco Studio，安装DevEco Studio时自动安装配套版本SDK。具体版本请从DevEco Studio界面菜单选择“Help > About HarmonyOS SDK”进行查询。

## 应用工程版本信息配置建议

应用工程中应当正确配置应用运行所依赖的SDK版本信息，以确保[应用在不同系统版本的设备上运行时的兼容性](/docs/dev/release-notes/app-compatibility)。

使用该版本开发的应用，其build-profile.json5配置项中关于版本的配置项建议如下：

| ****build-profile.json5配置项**** | ****已开发应用**** | | ****新启动开发应用**** |
| --- | --- | --- | --- |
| ****配置建议**** | ****配置示例**** |
| compileSdkVersion | 无需显性配置，编译时默认使用配套的SDK版本，即默认为：  “compileSdkVersion”: “6.0.0(20)” | NA | 推荐使用[6.0.0(20)](/docs/dev/release-notes/overview-600)进行新应用的开发。 |
| compatibleSdkVersion | 建议与工程升级前的compatibleSdkVersion保持一致 | 和升级前保持一致，如：  “compatibleSdkVersion”: “5.0.5(17)” |
| targetSdkVersion | 推荐您适配新版本的最新变更，然后配置为：“targetSdkVersion”: “6.0.0(20)”。  如果您期望延迟适配变更，可配置targetSdkVersion与工程升级前的targetSdkVersion一致。 | 1、应用适配变更，变更适配完成后配置为：  “targetSdkVersion”: “6.0.0(20)”  2、应用暂不适配变更，需配置为工程升级前的值，如：  “targetSdkVersion”: “5.0.5(17)” |

## 历史Beta版本

### 6.0.0(20) Beta5

| ****软件包**** | ****发布类型**** | ****版本号**** | ****发布时间**** |
| --- | --- | --- | --- |
| API版本 | Beta | 6.0.0(20) Beta5  **\*****注意****：设备系统支持的API能力范围请以****API版本********为准。** | 2025/09/15 |
| DevEco Studio | Beta | DevEco Studio 6.0.0 Beta5 (6.0.0.848) | 2025/09/15 |
| SDK | Beta | HarmonyOS 6.0.0 Beta5 SDK  基于OpenHarmony SDK Ohos\_sdk\_public 6.0.0.47 (API 20 Beta5) | 2025/09/15 |

### 6.0.0(20) Beta3

| ****软件包**** | ****发布类型**** | ****版本号**** | ****发布时间**** |
| --- | --- | --- | --- |
| API版本 | Beta | 6.0.0(20) Beta3  **\*****注意****：设备系统支持的API能力范围请以****API版本********为准。** | 2025/08/20 |
| DevEco Studio | Beta | DevEco Studio 6.0.0 Beta3 (6.0.0.828) | 2025/08/20 |
| SDK | Beta | HarmonyOS 6.0.0 Beta3 SDK  基于OpenHarmony SDK Ohos\_sdk\_public 6.0.0.45(API 20 Beta3) | 2025/08/20 |

### 6.0.0(20) Beta2

| ****软件包**** | ****发布类型**** | ****版本号**** | ****发布时间**** |
| --- | --- | --- | --- |
| API版本 | Beta | 6.0.0(20) Beta2  **\*****注意****：设备系统支持的API能力范围请以****API版本********为准。** | 2025/07/23 |
| DevEco Studio | Beta | DevEco Studio 6.0.0 Beta2 (6.0.0.456) | 2025/07/23 |
| SDK | Beta | HarmonyOS 6.0.0 Beta2 SDK  基于OpenHarmony SDK Ohos\_sdk\_public 6.0.0.39(API 20 Beta2) | 2025/07/23 |

### 6.0.0(20) Beta1

| ****软件包**** | ****发布类型**** | ****版本号**** | ****发布时间**** |
| --- | --- | --- | --- |
| API版本 | Beta | 6.0.0(20) Beta1  **\*****注意****：设备系统支持的API能力范围请以****API版本********为准。** | 2025/06/20 |
| DevEco Studio | Beta | DevEco Studio 6.0.0 Beta1 (6.0.0.418SP) | 2025/06/25 |
| DevEco Studio 6.0.0 Beta1 (6.0.0.418) | 2025/06/20 |
| SDK | Beta | HarmonyOS 6.0.0 Beta1 SDK  基于OpenHarmony SDK Ohos\_sdk\_public 6.0.0.35(API 20 Beta1) | 2025/06/20 |

## 6.0.0(20) Release

6.0.0(20) Release不涉及新增特性。

## 6.0.0(20) Beta5关键特性

### AppGallery Kit

应用市场更新功能新增支持Wearable设备。（[指南](/docs/dev/app-dev/application-services/store-kit-guide/store-introduction#支持的设备)）

### App Linking Kit

新增支持通过聚合链接按指定方式跳转至应用，例如跳转至HarmonyOS平台预览页、应用市场详情页、自定义网址、深度链接地址等。（[指南](/docs/dev/app-dev/application-services/app-linking-kit-guide/applinking-cross-platform)）

### ArkUI

C API新增提供渲染节点的能力。（[指南](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-embed-render-components)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-render-h)）

### Camera Kit

新增支持对微距状态变化事件的监听。（[API参考-PhotoSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photosession#onmacrostatuschanged20)、[API参考-VideoSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession#onmacrostatuschanged20)）

### Media Kit

新增支持通过C API设置捕获图像在目标区域的填充模式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforfillmode)）

### Network Kit

- 新增支持设置当前PAC脚本的URL地址。通过解析脚本地址可以获取代理信息。([API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectionsetpacfileurl20))
- 新增TLS认证支持国密证书。([API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#httprequestoptions))

### Telephony Kit

新增支持查看卡槽ID和SIM卡的对应关系。([API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sim#simgetsimlabel20))

## 6.0.0(20) Beta3关键特性

### Ability Kit

新增支持应用预加载机制。该机制会根据用户的使用习惯，在系统资源充足时提前加载应用至特定阶段。（[指南](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/preload-application)）

### Ads Kit

开放匿名设备标识服务新增支持TV设备。（[指南](/docs/dev/app-dev/application-services/ads-kit-guide/oaid-service#约束和限制)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-oaid)）

### Agent Framework Kit

【新增Kit】新增Agent Framework Kit（智能体框架服务）提供了拉起指定智能体的能力。（[指南](/docs/dev/app-dev/ai/harmony-agent-framework-kit-guide/hmaf-introduction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hmaf-function-component)）

### ArkData

- 新增支持监听附件传输的进度，支持接续传输。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-distributedobject#onprogresschanged20)）
- 新增支持应用间配置信息的共享。（[指南](/docs/dev/app-dev/application-framework/arkdata/cross-app-data-share/one-to-many-data-share/share-config)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-datashare#datasharecreatedataproxyhandle20)）

### ArkUI

- 新增闪控球功能，提供控制闪控球的相关API。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-floatingball)）
- @Consume装饰的变量支持设置默认值。（[指南](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume#consume装饰的变量支持设置默认值)）
- 新增支持将属性字符串根据文本布局选项转换成对应的Paragraph数组。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-measureutils#getparagraphs20)）
- SymbolGlyph新增支持快速替换动效（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#constructor20)）、阴影效果（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#symbolshadow20)）、禁用动效（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#constructor20)）、渐变效果（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#shaderstyle20)）。
- Text组件新增支持设置为数字翻牌动效。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#contenttransition20)）
- Scroll组件新增支持设置手势缩放的大小比例控制。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#maxzoomscale20)）
- Swiper组件新增支持滑动状态变化事件回调，在跟手滑动、离手动画、停止三种滑动状态变化时触发，返回值为当前滑动状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#onscrollstatechanged20)）
- Navigation新增支持绑定路由栈到Navigation组件，并且指定一个NavDestination作为Navigation的导航栏（主页）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigation20)）
- 弹出菜单新增属性anchorPosition，用于支持通过设定水平与垂直偏移量，控制菜单相对于绑定组件左上角的弹出位置。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#contextmenuoptions10)）
- PC/2in1设备或自由多窗模式的平板设备的窗口能力增强：
  - 新增支持设置一级子窗是否支持与主窗保持相对位置不变。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setrelativepositiontoparentwindowenabled20)）
  - 新增支持设置主窗口是否显示阴影。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowshadowenabled20)）
  - 新增支持设置主窗口容器在焦点态和非焦点态时的背景色。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowcontainercolor20)）
- 屏幕管理新增支持将指定屏幕左上角为原点的相对坐标转换成主屏左上角为原点的全局坐标。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayconvertrelativetoglobalcoordinate20)）

### ArkWeb

- 新增支持获取网页的滚动偏移量。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#getpageoffset20)）
- 新增支持嵌套滚动时的快速调度策略，该策略允许渲染流程跳过垂直同步调度，直接触发绘制。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#bypassvsynccondition20)）
- 新增支持设置Web组件手势获焦的模式，可切换为点击或长按在触摸抬起时获焦。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#gesturefocusmode20)）
- 新增支持设置私有网络访问检查功能（Private Network Access）的启用状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#enableprivatenetworkaccess20)）
- 新增支持在网络加载错误时返回自定义的错误页。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onoverrideerrorpage20)）
- 新增支持设置Web组件的销毁模式，不同模式会影响Web内核资源释放的时机。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setwebdestroymode20)）
- 基于Web的PDF浏览能力增强：
  - 新增支持PDF文档预览回调功能。（[指南](/docs/dev/app-dev/application-framework/arkweb/web-process-page-content/web-pdf-preview#pdf文档预览回调功能)）
  - 新增支持指定PDF文档背景色。（[指南](/docs/dev/app-dev/application-framework/arkweb/web-process-page-content/web-pdf-preview#通过配置pdf文件预览参数控制打开预览时页面状态)）
  - 新增支持通知用户PDF页面加载状态，包括成功或失败（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onpdfloadevent20)）；支持通知用户PDF页面已经滚动到底（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onpdfscrollatbottom20)）。

### AVCodec Kit

- 新增同步模式的视频编解码能力。（[指南-视频编码同步模式](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/synchronous-video-encoding)、[指南-视频解码同步模式](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/synchronous-video-decoding)）
- 新增支持在OH\_AVDataSource回调中传递用户自定义数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avsource)）
- 新增支持视频解码器在停止或释放时将输出空白帧（通常为黑色），以确保显示设备平滑过渡到无信号状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)）

### AVSession Kit

音视频会话新增支持发送私有数据到远端设备，支持在媒体应用（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#sendcustomdata20)）、投播控制器（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsessioncontroller#sendcustomdata20)）、播控中心（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avcastcontroller#sendcustomdata20)）的会话中发送私有数据到远端设备。

### Call Service Kit

voip接口新增支持wearable设备。([指南](/docs/dev/app-dev/application-services/call-kit-guide/call-introduction#设备限制)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/call-voipcall))

### Camera Kit

- 面向三方应用开放白平衡相关功能的API。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-whitebalance)）
- 新增支持对系统性能压力变化的监听。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession#onsystempressurelevelchange20)）

### CANN Kit

新增支持获取AI模型Dump维测数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_omtype)）

### Core File Kit

新增端云文件版本管理类。支持对端云文件的历史版本进行管理，提供获取文件历史版本信息列表的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-cloudsync#fileversion20)）

### Data Augmentation Kit

- 新增智慧化数据检索C接口，支持向量化、知识检索和知识问答的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi)）
- 新增端侧问答模型，支持端侧的智能问答。（[指南](/docs/dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-localchatmodel)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-localchatmodel-api)）

### Desktop Extension Kit（原Status Bar Extension Kit）

- Kit名称从Status Bar Extension Kit修改为Desktop Extension Kit，相关Kit API引用方式同步变更。（[指南](/docs/dev/app-dev/system/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-introduction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager)）
- 新增支持点击状态栏图标展开二级菜单场景下，可加载动效。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#quickoperation)）

### Device Security Kit

- 新增模拟点击检测。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-brid-develop/devicesecurity-simulatedclickdetection)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-brid-api#simulatedclickdetectionrequest)）
- 新增支持安全审计阻断类事件阻断功能，应用可通过获取设备上的安全审计数据，按需进行阻断，以支撑审计相关业务。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-audit/devicesecurity-audit-subscribe-arkts/devicesecurity-audit-subscribe-arkts-auth)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api)）
- 新增安全审计应用进程信息查询场景，应用可以通过查询能力获取设备上已启动的应用进程信息。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-audit/devicesecurity-audit-queryproc-arkts)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api)）
- 新增病毒防护服务管理场景，应用可以向设备提交自身软件信息、查询设备中防病毒软件信息列表、启停设备自带的安全防护服务。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-vps-c)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus)）

### Enterprise Data Guard Kit

新增获取重置锁屏密码的企业恢复密钥。（[指南](/docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykeyforresettingpin)）

### Enterprise Space Kit

- 新增配置空间互传单双通策略的能力。（[指南](/docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacedatatransfer-guide/enterprisespace-policy-push)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacedatatransfer#policypush)）
- 新增提供空间管理服务，包括创建工作空间、移除工作空间、订阅空间事件等功能。（[指南](/docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager)）

### Graphics Accelerate Kit

- 新增顶点标记的Vulkan平台能力。（[指南](/docs/dev/app-dev/graphics/graphics-accelerate-fg-mv-vulkan)）
- 新增AI超帧能力。（[指南](/docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai)）

### IAP Kit

支持仅传递商品ID查询商品信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-iap#iapqueryproducts-2)）

### Live View Kit

- 实况支持显示夕阳和赏月背景。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#backgroundtype)）
- 实况胶囊支持显示尾部图标。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#capsuledata)）
- 实况窗进度胶囊支持显示副文本。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#progresscapsule)）

### Map kit

- 瓦片图层新增本地加载方式，并支持瓦片数据缓存能力。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-tile#支持瓦片数据缓存)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addtileoverlay)）
- 新增矢量图层，用于在基础地图之上叠加矢量数据。通过矢量图层可对基础底层地图添加额外的特性。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-mvt-overlay)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addmvtoverlay)）
- 新增流场图层，用于在基础地图之上叠加数据。通常用于实时展示天气风场、洋流等场景。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-flow-field)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addflowfieldoverlay)）
- 新增海量点图层，用于批量展示坐标点数据。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-mass-point)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addmasspointoverlay)）
- 支持通过自定义组件生成marker图标。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-marker#自定义组件实现marker图标)）
- 新增热力图层，用于展示数据的分布情况。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-drawing/map-heat)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addheatmap)）

### MDM Kit

- 允许设置禁用/启用的特性新增短信（sms）、蜂窝数据（mobileData）、飞行模式（airplaneMode）、通知消息（notification）、NFC（nfc）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy)）
- 新增支持针对指定应用设置user\_grant权限的管理策略。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-securitymanager#securitymanagersetpermissionmanagedstate20)）
- 新增支持通过设备管理设置桌面壁纸。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-devicesettings#devicesettingssethomewallpaper20)）
- 针对PC/2in1设备，新增支持对无锁屏密码的设备设置重启后自动解锁。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-systemmanager#systemmanagersetautounlockafterreboot20)）
- 针对PC/2in1设备，新增支持多项用户行为限制策略，如禁止用户修改网卡IP地址、禁止用户修改设备名称、禁止用户修改锁屏密码等。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-restrictions#restrictionssetuserrestriction20)）

### Mechanic Kit

【新增Kit】Mechanic Kit（机械设备管理服务）主要面向云台、机械臂等智能机械体配件设备提供交互控制的能力。（[指南](/docs/dev/app-dev/system/system-hardware/mechanic-kit/mechanic-kit-intro)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/mechanic-kit-api)）

### Media Kit

- 新增支持设置录屏时屏幕自动跟随旋转。（[指南](/docs/dev/app-dev/media/media-kit/media-kit-dev-c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios#设置旋转适配)）
- 使用AVTranscoder实现视频转码的能力新增支持C++语言。（[指南](/docs/dev/app-dev/media/media-kit/media-kit-dev-c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering)）.
- 新增支持获取媒体资源的轨道（tracks）信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avmetadata11)）

### Media Library Kit

新增支持对媒体资产发生变化（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#onphotochange20)）和相册发生变化（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#onphotoalbumchange20)）的监听。

### NDK开发

新增格物服务，提供QoS感知的推理加速和资源管理优化能力。（[指南](/docs/dev/app-dev/system/gewu-ndk-api-guidelines)）

### Network Kit

新增C API，支持网络探测（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-h#oh_netconn_queryproberesult)）和网络跟踪路由（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-h#oh_netconn_querytraceroute)）。

### Network Boost Kit

新增连接迁移（多网并发）功能。（[指南](/docs/dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-netmultipathguide)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-nethandover#nethandoverrequestmultipath)）

### Payment Kit

新增thirdPaymentService服务，支持直接通过三方支付提供的SDK拉起三方支付收银台，实现支付的能力。（[指南](/docs/dev/app-dev/application-services/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-third-payment-service)）

### Pen Kit

新增C API，支持新增报点预测能力。（[指南](/docs/dev/app-dev/system/system-hardware/pen-kit-guide/pen-features/pen-point-prediction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-c)）

### Performance Analysis Kit

- 新增资源泄露的检测能力，支持对内存泄漏、句柄泄漏和线程泄漏进行故障检测。（[指南](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines)）
- HiAppEvent的CPU高负载事件订阅新增返回Top5线程信息（threads属性）。具体操作可参见[订阅CPU高负载事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-arkts)，订阅后可在Log窗口看到对系统事件数据的处理日志，日志中包含新增的[threads属性](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-event#threads字段说明)。

### Share Kit

- 碰一碰分享支持组队场景的应用设置仅单向发送能力。（[指南](/docs/dev/app-dev/application-services/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group#注册单向分享能力)）
- 碰一碰分享支持云预览图延迟更新。（[指南](/docs/dev/app-dev/application-services/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content#使用预览图更新能力)）
- 沙箱接收支持拒绝接收能力。（[指南](/docs/dev/app-dev/application-services/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox#拒绝本次沙箱接收)）
- 隔空传送支持指定窗口注册事件。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-harmony-share#ongesturesshare-1)）

### Test Kit

- UITest新增支持获取控件对象的文本信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#getoriginaltext20)）
- UITest新增支持通过文本匹配指定的控件。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#originaltext20)）

### UI Design Kit

- HdsListItemCard新增C区（列表右侧）Text、Arrow和Icon组合元素的配置项。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitemcard#suffixarrowicontextoptions)）
- HdsListItemCard下拉按钮样式新增是否显示默认选定图标的开关。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitemcard#selectstyle)）
- HdsNavigation新增标题栏模糊生效策略。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#blurstrategy)）
- HdsNavigation新增支持PixelMap图标类型设置。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#icontype)）
- HdsNavigation新增支持设置组件级安全区。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#hdsnavigationtitlebaroptions)）
- HdsNavigation新增支持设置内容区滚动距离与标题栏隐藏比例。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#dynamichideparams)）
- 侧边栏样式、侧边栏菜单样式、即时操作和核心操作栏新增支持TV设备。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-introduction#支持的设备)）

### User Authentication Kit

新增支持订阅用户认证的中间状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#onauthtip20)）

### 标准库

新增支持HiTSS标准库。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hitss-api-ref)）

## 6.0.0(20) Beta2关键特性

### Ability Kit

- 新增Kiosk模式管理，适用于企业应用。企业应用可以使用该模式将设备锁定至单一应用。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-kioskmanager)）

  另见MDM Kit相关功能。
- 向三方应用开放获取应用快捷方式信息的能力。应用的快捷方式信息在module.json5配置文件中定义。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-shortcutinfo)）

### AppGallery Kit

新增应用评论服务，用户无需进入应用市场应用详情页，可直接在应用内进行评论。（[指南](/docs/dev/app-dev/application-services/store-kit-guide/appgallery-comment)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/appgallery-commentmanager)）

### ArkData

- 新增支持基于标准化数据结构的预置卡片，用于快速调用和展示。（[指南](/docs/dev/app-dev/application-framework/arkdata/uniform-data-definition/components-based-on-uniform-data-structure)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-udmfcomponents)）
- 标准化数据通路新增支持用于延迟加载数据的处理函数，支持数据发送方根据接收方传入的信息，动态生成数据，实现更灵活、精准的数据交互策略。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-unifieddatachannel#dataloadhandler20)）

### ArkGraphics 2D

- 新增支持卸载自定义字体的能力。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#unloadfontsync20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-register-font-h#oh_drawing_unregisterfont)）
- 新增文本垂直对齐方式枚举。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#textverticalalign20)）

### ArkUI

- 新增uiAppearance模块，提供获取系统外观的一些基础能力，包括获取深浅色模式、字体大小缩放比例、字体粗细缩放比例。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uiappearance)）
- 文本组件能力增强：
  - Text组件新增支持设置文本颜色按线性或径向渐变。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#shaderstyle20)）
  - 文本类组件与富文本组件支持设置中文与西文的自动间距。（[API参考-RichEditor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#enableautospacing20)、[API参考-Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#enableautospacing20)、[API参考-Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#enableautospacing20)、[API参考-TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#enableautospacing20)、[API参考-TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#enableautospacing20)）
  - 富文本编辑器组件新增支持预设的段落样式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#settypingparagraphstyle20)）
  - 富文本组件新增支持在content接口中引用本地资源文件。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richtext#接口)）

- 拖拽事件能力增强：
  - 新增支持获取拖起方的包名。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop#getdragsource20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_dragevent_getdragsource)）
  - 新增支持延迟提供数据的能力，以提升拖拽的响应效率和用户体验。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop#setdataloadparams20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_dragaction_setdataloadparams)）
  - 新增支持悬停检测，并提供回调能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement#ontouchtestdone20)）
- 滚动类组件能力增强：
  - List组件新增支持设置方向键走焦模式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#focuswrapmode20)）
  - ScrollBar组件新增支持设置滚动条滑块的颜色。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-scrollbar#scrollbarcolor20)）
  - Grid组件新增支持设置方向键走焦模式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid#focuswrapmode20)）
  - 滚动组件通用接口新增支持设置划动离手时触发，并限定使用鼠标滚轮划动时不会触发。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#onwillstopdragging20)）
- BuilderNode、ComponentContent新增支持查询当前对象是否设置为继承父组件中自定义组件的冻结策略。（[API参考-BuilderNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode#inheritfreezeoptions20)、[API参考-ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#inheritfreezeoptions20)）
- XComponent的C API新增支持获取功能键按压状态信息的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h#oh_nativexcomponent_getmouseeventmodifierkeystates)）
- 手势拦截新增支持由应用自定义需要阻止的手势。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement#ontouchtestdone20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h#oh_arkui_preventgesturerecognizerbegin)）
- 图形变换新增支持设置组件的三维变换矩阵。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation#transform3d20)）
- 弹出式菜单新增支持多个生命周期回调，如onWillAppear、onDidAppear、onWillDisappear等。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#contextmenuoptions10)）
- 全屏模态新增参数enableSafeArea，支持适配安全区域。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition#contentcoveroptions)）
- 自定义绘制新增绘制前景的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-draw-modifier#drawforeground20)）
- 新增C API支持在UIContext作用域内运行自定义函数的能力，基于该能力可确保在调用跨实例组件设置属性时的上下文正确性，避免跨实例接口调用失败。（[指南](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-scope-task)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_runtaskinscope)）
- 新增C API支持获取目标节点的uniqueId的能力（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getnodeuniqueid)），及通过uniqueId获取节点的能力（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getnodehandlebyuniqueid)）。
- 窗口管理能力增强：
  - 新增监听窗口内uiExtension安全限制变化事件的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onuiextensionsecurelimitchange20)）
  - 针对PC/2in1设备和开启了自由多窗的平板设备，新增支持在同应用内窗口的分合场景下将触屏输入事件从源窗口转移到目标窗口的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-f#windowshiftappwindowtouchevent20)）
  - 针对PC/2in1设备和开启了自由多窗的平板设备，新增支持将窗口最大化按钮置灰的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#setsupportedwindowmodes20)）

### ArkWeb

- Web组件新增支持设置文本识别配置。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#datadetectorconfig20)）
- Web事件新增支持在同层标签上执行鼠标操作（如左右键长按等）时触发回调。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedmouseevent20)）
- 新增支持获取当前网页加载进度的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#getprogress20)）

### Audio Kit

音频新增低时延耳返的能力。（[指南](/docs/dev/app-dev/media/audio-kit/audio-recording/audio-ear-monitor-loopback)）

### Background Tasks Kit

针对PC/2in1设备，新增支持设置是否跟随系统的能效模式，以合理保证进程的运行。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-backgroundprocessmanager#powersavemode20)）

### Core File Kit

新增备份恢复框架安全退出的回调API，可在应用备份或恢复完成时自定义执行一些额外的处理动作。（[指南](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension#开发步骤)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-backupextensionability#onrelease20)）

### Data Augmentation Kit

新增获取知识加工状态功能。（[指南](/docs/dev/app-dev/application-framework/data-augmentation-kit-guide/data-augmentation-knowledge-processing)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-knowledgeprocessor-api)）

### Device Security Kit

新增支持审计通知类事件过滤功能，应用可通过获取设备上的安全审计数据，按需进行过滤，以支撑审计相关业务。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-audit/devicesecurity-audit-subscribe-arkts/devicesecurity-audit-subscribe-arkts-filterevent)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#addfilter)）

### Game Service Kit

- 游戏近场快传支持返回发现设备列表，手动选择绑定接收端设备。（[指南](/docs/dev/app-dev/application-services/game-service-kit-guide/gameservice-nearbytransfer-dev)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-nearbytransfer)）
- 游戏近场快传支持碰一碰模式传输资源包。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-nearbytransfer#mode)）

### Input Kit

针对PC/2in1设备，新增C API支持由应用申请注入权限，包括注入按键事件、触屏事件、鼠标事件的权限。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_requestinjection)）

### Live View Kit

- 订阅抢购场景新增支持倒计时到0，端侧自动更新。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#liveviewtimer)）
- 实况窗卡片新增支持展示天气效果。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#layoutdata)）

### Localization Kit

新增支持获取时区跳变规则，包括时区跳变点的时间戳和偏移量。（[指南](/docs/dev/app-dev/application-framework/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#getzonerules20)）

### Map kit

- 切换地图类型时，新增支持卫星图、混合地图类型。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-creation/map-type)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#maptype)）
- 室内图场景下，新增支持设置楼层调节控件位置的能力。（[指南](/docs/dev/app-dev/application-services/map-kit-guide/map-creation/map-presenting#室内图)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#setfloorcontrolsposition)）

### PDF Kit

PDF预览场景下，新增支持内容水平翻页浏览。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfviewmanage#setdisplaydirection)）

### Pen Kit

- 手写套件新增自定义画布大小。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwritecomponent#handwritecomponent)）
- 手写套件新增缩略图。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwritecontroller#getthumbnail)）

### Performance Analysis Kit

- HiAppEvent新增支持订阅应用查杀事件，用于上报应用被系统基于资源管控策略而对应用实施的查杀行为。（[指南](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events)）
- HiDumper新增支持导出精简模式的内存信息，即通过“--prune”参数，只获取进程内存使用信息。（[指南](/docs/dev/app-dev/system/hidumper#查询整机内存)）

### Remote Communication Kit

- 在发起网络请求的场景下，新增支持通过ResponseCache使用HTTP缓存的功能。（[指南](/docs/dev/app-dev/system/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic#使用http缓存)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#responsecache)）
- 在发起网络请求的场景下，新增支持通过fetchForSendable返回ResponseSendable类型响应数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#fetchforsendable)）

### Share Kit

新增隔空传送分享能力，“一抓一放”实现跨端传输。（[指南](/docs/dev/app-dev/application-services/gestures-share-overview)）

### Test Kit

UITest新增多个UI测试能力的接口，如：获取指定屏幕内的控件对象（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#belongingdisplay20)），获取控件对象所属的屏幕ID（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#getdisplayid20)）。

### MDM Kit

新增支持针对企业设备清除应用产生的所有数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager#applicationmanagerclearupapplicationdata20)）

新增支持将应用锁定在Kiosk模式（即通过系统层面限定设备只能运行单个应用或者一组应用）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability#onkioskmodeentering20)）

### Media Kit

C API新增支持低功耗音视频播放的能力。（[API参考-低功耗音频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpoweraudiosink)、[API参考-低功耗视频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpowervideosink)）

新增支持监听SoundPool的错误事件。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-soundpool#onerroroccurred20)）

### NDK开发

新增支持使用扩展的Node-API接口在当前线程中创建、切换和销毁上下文环境。（[指南](/docs/dev/ndk-dev/use-napi-about-context)）

### UI Design Kit

- HdsSnackBar新增回退到上一个页面的回调函数。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssnackbar#snackbarstyleoptions)）
- HdsTabs新增多个滚动组件场景下控制父滚动组件的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdstabs#bindscroller)）
- HdsTabs新增页签点击后返回索引的回调函数。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdstabs#ontabbarclick)）

### 公共能力

配置文件app.json5新增字段appPreloadPhase，允许配置应用预加载到不同阶段。（[指南](/docs/dev/app-dev/getting-started/dev-fundamentals/app-configuration-file#配置文件标签)）

## 6.0.0(20) Beta1关键特性

### Ability Kit

- 新增StartOptions的可选参数CompletionHandler，用于处理拉端请求的结果。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-completionhandler)）
- 新增setEventHubMultithreadingEnabled，用于启用Context的EventHub跨线程数据传递功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-sendablecontextmanager#sendablecontextmanagerseteventhubmultithreadingenabled20)）
- 新增C API，支持获取本应用的应用级的资源目录。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-application-context-h#oh_abilityruntime_applicationcontextgetresourcedir)）
- 新增C API，支持查询当前应用的调试模式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h#oh_nativebundle_isdebugmode)）
- 新增C API，支持获取当前应用程序的模块元数据数组。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h#oh_nativebundle_getmodulemetadata)）
- 新增元数据信息（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle-oh-nativebundle-metadata)）和模块元数据信息（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle-oh-nativebundle-modulemetadata)）的C API定义。
- 新增支持获取指定资源标识符和组件信息标志对应的Ability信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetabilityinfo20)）
- 新增AppServiceExtensionAbility模块，提供后台服务相关扩展能力，包括后台服务的创建、销毁、连接、断开等生命周期回调。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-appserviceextensionability)）

### AR Engine

- 新增ArkTS API，支持体积测量能力，可识别空间中立方体物体或者嵌入式立方体空间，并计算出被识别物体或空间的长、宽、高以及体积。（[指南](/docs/dev/app-dev/graphics/ar-engine-kit-guide/get-volume/arengine-volume-measurement)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arsemanticdensedata)）
- 新增C API，支持体积测量能力，可识别空间中立方体物体或者嵌入式立方体空间，并计算出被识别物体或空间的长、宽、高以及体积。（[指南](/docs/dev/app-dev/graphics/ar-engine-kit-guide/get-volume/arengine-c-volume-measurement)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata)）

### ArkData

新增接口having，支持筛选符合条件的分组数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbpredicates#having20)）

### ArkGraphics 2D

将原有的一批C API能力封装提供为ArkTS API，详见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-drawing)中标记为“20+”的API。

### ArkGraphics 3D

新增支持从屏幕指定位置发射射线，检测并返回所有命中的3D物体信息的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-nodes#raycast20)）

### ArkUI

- 文本与输入组件能力增强。包括：
  - 新增文本装饰线样式，支持对文本设置删除线和下划线。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-styled-string#constructor20)）
  - 文本组件新增支持定义所设置的文本行间距是否对首行生效。（[API参考-Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#linespacing20)、[API参考-TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#linespacing20)）
  - 文本组件的基础定义新增支持设置文本超长时的显示效果。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#maxlinesoptions20对象说明)）
  - 文本输入组件（TextInput、TextArea、Search）新增验证码类型的输入模式ONE\_TIME\_CODE。（[API参考-TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#inputtype枚举说明)、[API参考-TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#textareatype11枚举说明)、[API参考-Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#searchtype11枚举说明)）

    同时也对应提供的C API属性ARKUI\_TEXTINPUT\_TYPE\_ONE\_TIME\_CODE。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textinputtype)）
  - 文本组件新增文本描边样式，支持设置描述宽度和颜色。（[API参考-属性字符串](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-styled-string#textstyleinterface对象说明)、[API参考-TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#strokewidth20)、[API参考-TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#strokewidth20)、[API参考-Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#strokewidth20)）
  - 新增C API，支持统计文本组件中的文本行数（NODE\_TEXT\_LINE\_COUNT）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)）
  - 新增C API，支持触发Span组件的长按事件（NODE\_TEXT\_SPAN\_ON\_LONG\_PRESS）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)）
- Refresh支持设置最大下拉距离。（[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh#maxpulldowndistance20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)）
- Tabs在滑动页面切换时，支持设置翻页动画曲线。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#animationcurve20)）
- 滚动类组件支持设置滚动条的起始和末尾边距。（[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#scrollbarmargin20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)）
- Swiper组件支持在显示区域上方或前方插入或删除数据时，设置是否保持可见内容的位置不变。（[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#maintainvisiblecontentposition20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)）
- 拖拽事件支持获取事件发生时所在的屏幕ID。（[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop#getdisplayid20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_dragevent_getdisplayid)）
- 图形变化过程中，支持设置单个方向的旋转角。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation#rotate20)）
- 自定弹窗支持获取初始化等弹窗状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#getstate20)）
- 优化栅格布局断点，若未配置更小断点的栅格列数，系统取已配置的更大断点的栅格列数补全未配置的栅格列数。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow#gridrowcolumnoption)、[指南](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout)）
- 新增ToolBarItem组件，支持为窗口标题栏添加工具栏项。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toolbaritem)）
- 新增无障碍事件的相关能力，在系统开启无障碍模式后，提供拦截无障碍事件的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-accessibility-event#onaccessibilityactionintercept20)）
- 支持自定义开启/禁止角标显示。（[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-dragcontroller#enabledropdisallowedbadge20)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_enabledropdisallowedbadge)）
- 支持查询当前ComponentContent对象是否已解除与后端实体节点的引用关系。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#isdisposed20)）
- 新增C API，支持通过百分比或具体数值形式设置组件平移（NODE\_TRANSLATE\_WITH\_PERCENT）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)）
- 绘制类组件支持通过attributeModifier动态设置属性方法。（[API参考-Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)、[API参考-Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-shape)）
- CanvasRenderingContext2D支持绘制圆角矩形。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-offscreencanvasrenderingcontext2d#roundrect20)）

### ArkWeb

- 新增支持在长按弹出菜单时设置振动效果。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-i#previewmenuoptions20)）
- 当Web页面触发window.open(url, name)时，支持根据name查找是否存在已绑定的Web实例。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onactivatecontent20)）
- ArkWeb基于谷歌Chromium内核开发，使用的Chromium版本升级为M132。（[指南](/docs/dev/app-dev/application-framework/arkweb/web-component-overview#约束与限制)）
- 新增支持ArkWeb和客户端同步调用JSBridge。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-arkweb-h#oh_nativearkweb_registerasyncthreadjavascriptproxy)）
- 新增支持设置应用级自定义用户代理。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setappcustomuseragent20)、[指南](/docs/dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-default-useragent)）
- 新增支持查询/注册/取消WebViewController与Web组件的绑定状态。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#getattachstate20)）
- 上下文菜单新增支持撤销/重做/粘贴为纯文本操作。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcontextmenuresult#undo20)）
- Web组件提供画中画功能，应用可在网页中创建浮动窗口以播放视频。（[指南](/docs/dev/app-dev/application-framework/arkweb/web-use-multimedia/web-picture-in-picture)）

### Audio Kit

新增支持查询指定的source type是否支持回声消除。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#isacousticechocancelersupported20)）

### Basic Services Kit

新增设备类型枚举值，可用于校验deviceType的返回值。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info#devicetypes20)）

### Data Augmentation Kit

【新增Kit】Data Augmentation Kit（数据增强套件）提供知识库、知识检索、知识问答（RAG）能力，打造个性化智慧数据平台，实现个性化智慧体验。（[指南](/docs/dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-introduction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api)）

### Device Certificate Kit

新增支持根据编码类型获取X509证书的颁发者名称（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getissuername20)），以及证书吊销列表的颁发者名称（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getissuername20-1)）。

### Device Security Kit

- 新增支持数字盾服务，可保障用户设置、修改、认证密码时密码信息不被攻击者截取，并且在信息认证过程中呈现的信息不被攻击者覆盖、篡改。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-trusted-auth-api)）
- 新增防窥保护，支持应用根据窥视状态保护用户隐私，如非机主状态下不进行个性化推荐，隐藏浏览记录、支付记录、收藏记录等敏感信息。（[指南](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-dlpantipeep)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api)）

### Enterprise Space Kit

【新增Kit】Enterprise Space Kit（企业数字空间服务）为企业安全管控类MDM应用提供高效、智能的数据传输能力，支持空间数据的管理与应用服务。通过严格的空间数据传输审核流程，确保数据传输的安全与合规性，实现空间数据的独立管理与隔离。（[指南](/docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-introduction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacedatatransfer)）

### Graphics Accelerate Kit

新增游戏启动加速服务。（[指南](/docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-launchacceleration-service)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-launchacceleration)）

### Location Kit

- 新增支持查询POI信息的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagergetpoiinfo20)）
- 新增支持获取两个位置之间直线距离的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagergetdistancebetweenlocations20)）

### MDM Kit

- 新增支持禁用公网环境下升级的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-systemmanager#otaupdatepolicy)）
- 允许设置禁用/启用的特性新增设备维修模式（maintenanceMode）、备份恢复能力（backupAndRestore）、收发彩信能力（mms）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy)）

### Online Authentication Kit

新增支持通行密钥服务。（[指南](/docs/dev/app-dev/system/system-security/online-authentication-kit-guide/onlineauthentication-passkey)、[API参考-ArkTS API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication-passkey-api)、[API参考-C API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)）

### Remote Communication Kit

- 在使用HttpEventsHandler处理回调的场景下，新增支持返回Request。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#httpeventshandler)）
- 在设置dnsRules的场景下，新增支持Happy Eyeballs竞速连接。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#dnsconfiguration)）

### Scan Kit

- 默认界面扫码能力支持模拟器。（[指南](/docs/dev/app-dev/media/scan-kit-guide/scan-scanbarcode#模拟器开发)）
- 自定义界面扫码能力支持模拟器。（[指南](/docs/dev/app-dev/media/scan-kit-guide/scan-customscan#模拟器开发)）

### Screen Time Guard Kit

【新增Kit】在应用安全隐私保护前提下，Screen Time Guard Kit（屏幕时间守护服务）为开发者提供屏幕使用时间管控、应用使用限制等开放能力，满足不同用户对时间管理多样化诉求，更好的服务终端用户。（[指南](/docs/dev/app-dev/application-services/screen-time-guard-kit-guide/screentimeguard-introduction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/screen-time-guard-api)）

### Share Kit

- 碰一碰分享支持手机与PC/2in1设备间分享。（[指南](/docs/dev/app-dev/application-services/knock-share-pc-phones-overview)）
- 碰一碰分享支持PC/2in1设备上的应用沙箱接收分享数据。（[指南](/docs/dev/app-dev/application-services/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox)）

### Test Kit

新增支持多种场景下输入文本的测试能力。（[API参考-1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#inputtext20)、[API参考-2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-uitest#inputtext20-1)）

### UI Design Kit

- 组件导航新增设置自定义区域、标题栏动态显隐、半模态样式、图标类型设置的能力。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation)）
- 新增HdsSideBar组件，支持应用使用侧边栏组件实现自定义侧边栏和内容区。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-overlay-mode)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidebar)）
- 新增HdsSideMenu组件，支持应用设置侧边栏对应的一级菜单和二级菜单，并显示其新消息数量。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-side-menu)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidemenu)）
- 新增HdsTabs容器组件，支持页签栏分割线常隐、常显和渐进显隐。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdstabs)）
- 新增HdsSnackBar弹窗，支持文本图标展示和按钮操作区，为应用提供简短通知和操作。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-resident-notification)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssnackbar)）
- 新增HdsActionBar组件，支持有主按钮展开和收起的多按钮操作动效，支持无主按钮的多按钮操作区。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsactionbar)）
- 新增HdsListItemCard组件，支持应用使用HDS的列表卡片组件实现多设备上的系统列表卡片样式。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitemcard)）
- 新增HdsListItem组件，支持应用使用HDS的列表组件实现多设备上的系统列表样式以及横滑删除效果。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitem)）
- 新增UI界面场景下的光影效果的能力。（[指南](/docs/dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light)）

### 调试工具

打包工具新增通用归一指令。（[指南](/docs/dev/app-dev/system/packing-tool#通用归一指令generalnormalize)）
