---
title: "HarmonyOS 26.0.0 Beta1"
format: md
original_url: /docs/dev/release-notes/harmonyos-2600
upstream_id: dev/release-notes/harmonyos-2600
last_sync: 2026-06-26
sync_hash:
upstream_status:
---
# HarmonyOS 26.0.0 Beta1

HarmonyOS开发套件26.0.0 Beta1版本在HDC.2026正式面向开发者发布。本次发布对HarmonyOS开发套件的版本号格式进行了调整，详情见版本号格式调整说明。26.0.0 Beta1在6.1.1(24)的基础上，进一步增强了组件的材质效果，实现更好的沉浸光感效果；Core File Kit支持将沙箱目录共享为系统级可见；Device Security Kit增强了星盾引擎能力和超级隐私管控能力；Graphics Accelerate Kit新增预启动特性，提升游戏应用的启动体验；Notification Kit进一步增强了通知管理能力和显示效果，支持以半模态方式拉起应用的通知设置界面，等等。另外，ArkWeb的Chromium内核从132升级为144版本。更多详情可参见[OS平台新增和增强特性](/docs/dev/release-notes/os-new-feature-2600)。

DevEco Studio能力进一步增强：支持开发API 26.0.0工程；支持按需加载模块，提升代码索引效率；新增Code Scanner工具，支持检查整个项目的资源泄漏问题；支持同时预览应用在8个典型档位断点下的UI效果；新增Car设备模拟器，支持远程控制模拟器；支持将设备投屏到DevEco Studio中使用；支持对应用崩溃生成的dump文件进行解析，并展示异常堆栈，等等。更多详情可参见[DevEco Studio新增和增强特性](/docs/dev/release-notes/deveco-studio-new-features-2600)。

## 版本信息

使用正确的配套关系进行应用开发可以获得更流畅的开发体验。

请在阅读版本更新和变更内容前，务必确认版本的配套关系是否与当前您所使用的开发套件是一致的。

### 26.0.0 Beta1 开发者套件配套信息

| **软件包** | **发布类型** | **版本号** | **发布时间** |
| --- | --- | --- | --- |
| API版本 | Beta | 26.0.0 Beta1 | 2026/06/12 |
| DevEco Studio | Beta | DevEco Studio 26.0.0 Beta1 (26.0.0.461) | 2026/06/12 |
| SDK | Beta | HarmonyOS SDK 26.0.0 Beta1 基于OpenHarmony SDK Ohos_sdk_public 26.0.0.23 | 2026/06/12 |

- **API版本**请在设备的"设置"中点击设备名称，进入"**关于本机**"进行查询。
- DevEco Studio版本请从DevEco Studio界面菜单选择"Help > About DevEco Studio"进行查询。请[点击此处](https://developer.huawei.com/consumer/cn/deveco-studio/)获取最新的DevEco Studio软件版本。
- SDK内置在DevEco Studio，安装DevEco Studio时自动安装配套版本SDK。具体版本请从DevEco Studio界面菜单选择"Help > About HarmonyOS SDK"进行查询。

## 26.0.0 Beta1新增和增强特性

### Ability Kit

- 新增支持AgentCard，提供AgentCard的配置、解析与持久化。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agent-extension-configuration)）
- 新增支持基于ArkTS脚本的应用Skill开发能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-skill-development-guide)）
- 新增支持获取指定包名和分身索引的应用名称。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetapplicationlabel)）
- 新增用于脚本管理的ArkTS API模块，提供管理和组织脚本信息的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-scriptmanager)）
- 新增支持用于管理ModularObjectExtensionAbility的C API，提供查询ModularObjectExtensionAbility信息、连接与断开连接等能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-manager-h)）

### Accessibility Kit

- 新增支持应用接入系统的关怀模式，使应用提升长辈关怀功能及体验。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/eldercare-appconfig)）

### Accessory Kit

- 【新增Kit】Accessory Kit（配件接入服务）为合作配件设备及生态企业应用提供关联唤醒、系统服务联动、按需调度与安全授信管理等能力，有效提升配件设备接入效率。
- 详细信息请参见[Accessory Kit开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/accessorykit-introduction)。

### Account Kit

- LoginWithHuaweiIDButton组件新增支持自定义设置文本多语言显示、自定义动效加载。（[API参考-文本多语言显示](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-component-manager#setlocale)、[API参考-自定义动效加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-component-manager#extrastyle)）

### AR Engine

- 新增C API，支持控制相机闪光灯。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_openflash)）
- 新增ArkTS API，支持获取预览流图片数据。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arframeacquirecameraimage)）
- 新增ArkTS API，支持加载3D高斯模型。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arviewcontroller#arviewcontextloadgsmodel)）
- 新增ArkTS API、C API，支持获取外部相机和传感器数据进行计算。（[ArkTS API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine#arremotesensormode)、[C API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_remotesensormode)）

### ArkGraphics 2D

- 绘制模块新增用于处理坐标点的类，支持对坐标点取反和设置偏移量。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-pointutils)）

### ArkUI

- 新增通用属性systemMaterial，所有支持通用属性的组件，均支持通过systemMaterial设置系统材质。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#systemmaterial)）
- Chip组件新增支持通过backgroundSystemMaterial和activatedBackgroundSystemMaterial配置正常状态和激活状态下的系统材质背景。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip#示例10设置系统材质样式)）
- 弹窗类组件或元素新增配置项systemMaterial，支持系统材质效果：[Tips组件悬浮气泡](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-tips#示例3设置悬浮气泡的系统材质视效)、[Toast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#showtoastoptions)、[对话框](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#showdialogoptions)、[操作菜单](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#actionmenuoptions)、[自定义弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box#customdialogcontrolleroptions对象说明)、[半模态](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#示例10半模态设置系统材质)、[Popup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#popupoptions类型说明)等。
- 新增ArkUI组件级沉浸光感，提供的一套高品质视觉与动效体系，通过沉浸式系统材质效果与空间动效的结合，为应用组件带来通透、精致的视觉表现。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-immersive-light-sense)）
- 新增自定义组件全局复用能力，可针对指定@Reusable/@ReusableV2复用组件配置复用池，用于提供全局复用的能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-global-reuse-pool)）
- 窗口管理新增闪控窗。闪控窗是悬浮在桌面/应用界面上的小型窗口，提供灵活的窗口管理能力，包括判断设备是否支持闪控窗功能、创建闪控窗控制器以启动、更新或停止闪控窗等。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-floatview)）

### ArkWeb

- ArkWeb基于上游社区的Chromium内核从132升级为144版本。（[变更说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-7001#ch2026032368425)）
- 新增安全特性选项配置的类，用于设置网页的安全配置属性。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-securityparams)）

### AVCodec Kit

- H265硬件编码器新增支持CBRHQ（高质量恒定码率模式）。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-configuration-typical-scenarios#低时延场景)）
- Audio Vivid能力新增支持Audio Vivid编码。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-audioencoder)）
- C API新增提供Audio Vivid相关的函数和枚举。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-vivid-h)）

### AVSession Kit

- AVSession的枚举新增定义了在不同场景中使用的额外键的枚举。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-e#extrakey)）

### Background Tasks Kit

- 提醒的倒计时实例对象新增参数重复周期（repeatInterval）和重复次数（repeatCount）。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagentmanager#reminderrequesttimer)）

### Core Vision Kit

- 新增支持图像超分能力，可实现对低分辨率图像进行超分辨率重建，使图像更加清晰。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-image-super-resolution)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-image-super-resolution-api)）
- 新增支持通过文本语意搜索图片的能力，即用户可以通过输入文本语意，从图片库中搜索匹配的图像结果。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-search-image)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-search-image-api)）

### Core File Kit

- 打开文件或目录时新增参数UNCACHE，支持读写文件不进行页缓存。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileioopen)）
- 新增listFileExt方法支持递归列出和自定义文件名过滤。可通过配置options中recursion参数实现递归列出所有文件的相对路径。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiolistfileext)）
- 新增支持开发者通过文件mmap能力集（基于文件描述符或文件对象创建文件映射对象），实现文件的高效读写访问。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiommap)）
- 新增支持应用捐献自身沙箱目录给系统设置为共享，其他应用可以通过文管直接获取到目录里的文件。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-app-file-configuration)）

### Data Augmentation Kit

- 知识加工新增邮件智能分析模块（Handler），支持邮件分类、摘要、待办抽取。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-knowledge-processing#开发步骤)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-knowledgeprocessor-api#knowledgeprocessorconfig)）

### Device Security Kit

- 新增星盾机密风控引擎能力，支持风险因子引入、联防联控。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-starshieldconfidentialriskcontrolengine)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-riskcontrolengine-api)）
- 新增统一风控凭证能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-safetydetect-queryriskfactors)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-safetydetectenhanced-api#queryriskfactors)）
- 新增超级隐私策略化管控能力，支持对相机、麦克风、位置分别进行管控。（[指南-查询管控策略场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-getsuperprivacypolicies)、[指南-订阅管控策略改变事件场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-subscribe-superprivacypolicy)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-superprivacymode-api)）
- 新增按文件操作类型订阅文件事件，支持订阅文件打开、关闭、删除、重命名、拷贝等事件。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#notifyevent)、[API参考-C/C++](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h#枚举)）
- 新增按文件路径正则表达式过滤文件事件，支持按正则表达式过滤文件事件。（[API参考-ArkTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#filtertype)、[API参考-C/C++](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h#枚举)）

### Driver Development Kit

- 新增支持查询外接USB Hub并开发用户态驱动。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_getnonroothubs)）

### Enterprise Data Guard Kit

- 文件分级管控服务新增getPolicy接口，支持用户获取当前设备生效的管控策略内容。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#getpolicy)）
- 文件分级管控服务新增isKia接口，支持用户判断文件或文件夹是否是KIA。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#iskia)）

### Enterprise Space Kit

- 新增支持查询设备双空间状态、判断工作空间是否为企业空间的能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-lifecycle-management)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager)）

### FAST Kit

- 新增实数快速傅里叶变换（FFT）及其逆变换功能，支持实数时域信号及其相应频域信号间的快速转换。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-dsp-transform)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-transform-8h)）
- 新增智能序列预测功能，支持接收历史采样数据预测下一时刻的序列值。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-math-prediction)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-math-prediction)）

### Game Service Kit

- 游戏近场快传新增支持免集成Game Service Kit实现安装包传输。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-nearbytransfer-installation-package#免集成game-service-kit实现安装包传输)）

### Graphics Accelerate Kit

- 游戏资源加速服务新增isSupportAssetDownload接口，支持查询用户的当前设备类型是否支持资源包下载能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerissupportassetdownload)）
- 游戏资源加速服务的AppDownloadProgress新增resourceVersion参数，支持开发者通过正在下载资源的版本标识符上报下载进度信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-assetdownloadmanager#appdownloadprogress)）
- 游戏启动加速服务新增预启动特性，支持根据用户的使用习惯，在系统资源充足时提前加载游戏，进行部分初始化和资源加载的能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-prelaunch)）

### Image Kit

- 新增[GIF图像元数据类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-gifmetadata)、[JFIF图像元数据类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-jfifmetadata)、[TIFF图像元数据类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-tiffmetadata)、[PNG图像元数据类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pngmetadata)以及[AVIS图像元数据类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-avismetadata)，用于存储对应格式图像的元数据。
- 新增[XMP（Extensible Metadata Platform）元数据](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-xmpmetadata)。

### Input Kit

- 新增输入事件注入模块，提供键盘和鼠标输入事件模拟能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputeventclient)）

### Live View Kit

- 新增实况窗卡片辅助区模板，支持展示百分比进度环。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#extensiondata)）

### NDK

- JSVM新增支持从外部内存创建ArrayBuffer对象。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-h#oh_jsvm_createarraybufferfromexternalmemory)）

### Nearlink Kit

- 新增startScan接口，支持扫描所有可发现的周边星闪设备。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-scan#startscan-1)）

### Network Boost Kit

- 新增netBoost.setDataFlowDesc接口，支持应用根据五元组信息设置流描述。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netboost#netboostsetdataflowdesc)）

### Notification Kit

- 新增是否开启锁屏通知等字段。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationsetting20)）
- 新增支持以半模态方式拉起应用的通知设置界面。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanageropennotificationsettingswithresult)）

### Online Authentication Kit

- 新增DID（Decentralized Identifier，去中心化身份）能力，支持DID密钥生成、数字凭证导入/查询/删除、数据签名等功能。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-did)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication-did-api)）

### PDF Kit

- 新增支持将多张页面的指定区域转化为一张图片。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#getpixelmapwithpages)）

### Push Kit

- 推送实况窗消息能力新增支持Wearable设备。([指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-update-liveview)）

### Performance Analysis Kit

- 新增应用灰度采集的管理，可通过端云配合，采集应用故障日志，提升应用运维能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiretrieval-intro)）
- HiAppEvent新增应用冻屏告警事件，提供事件的订阅能力。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-appfreezewarning-events)）

### Preview Kit

- 新增C API，支持应用扫描文件，扫描文件结果用于判断该文件是否具备加速条件。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview)）
- 新增C API，支持应用在文件加速场景下，定制文件预加载策略，包括动态配置文件后缀和文件大小范围。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview)）
- 新增C API，支持文件打开加速服务可用性查询和文件操作事件上报功能。（[API参考-可用性查询](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview#hms_preview_openfileboost_isenabled)、[API参考-文件操作事件上报](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview#hms_preview_openfileboost_notifyfileoperation)）

### Remote Communication Kit

- 新增HttpVersionSelectCallback接口，支持选择HTTP版本。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#httpversionselectcallback)）
- 新增HMS_Rcp_SetRequestGetDataCallback()接口，支持流式上传。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_setrequestgetdatacallback)）
- 新增HMS_Rcp_SetFormOrder()接口，支持发送有序表单。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_setformorder)）
- 新增C API，支持使用QUIC客户端进行数据传输。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-quic-persistent-connection)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_quic_h)）

### Scan Kit

- 新增支持查询当前设备是否支持默认界面扫码。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scancore#isdefaultscansupported)）
- 新增支持查询当前设备是否支持自定义界面扫码。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scancore#iscustomscansupported)）

### Scenario Fusion Kit

- 场景化分享Button新增参数，支持分享图片、视频、文本等格式。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#shareparam)）

### Share Kit

- 手机与PC/2in1、手机与Tablet设备触发碰一碰分享时，新增支持在PC/2in1或Tablet设备侧获取轻碰的位置信息。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-mutually#获取轻碰坐标)）

### Spatial Recon Kit

- 新增支持编辑3DGS模型中的高斯球，包括选择、变换、上色和删除等操作。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialedit)）
- 新增空间照片能力，输入单张照片，输出三维模型，并支持小幅度的新角度合成能力，从而实现照片的空间感。（[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-spatial-image)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialimage)）

### UI Design Kit

- 新增标题顶部自定义区域更新节点的配置能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#titlebarcontentoptions)）
- 新增标题底部自定义区域是否更新节点的配置能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation#bottombuilderparams)）
