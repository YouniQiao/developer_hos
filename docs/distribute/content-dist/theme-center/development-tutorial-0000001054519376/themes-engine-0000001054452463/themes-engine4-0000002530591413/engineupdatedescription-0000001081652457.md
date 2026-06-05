---
title: "版本更新说明"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/engineupdatedescription-0000001081652457
format: md
---


# 版本更新说明

## 【2023/8/29】引擎1.1.15.300版本

| 更新特性： |
| --- |
| 新增[蓝牙耳机数据开放&lt;BluetoothBattery&gt;](https://developer.huawei.com/consumer/cn/doc/content/bluetooth-battery-0000001615147322)：开放蓝牙耳机数据，包括蓝牙耳机连接状态、名称和电量。 |

## 【2023/7/7】引擎1.1.14.300版本

| 更新特性： |
| --- |
| 新增[用户自定义文案](https://developer.huawei.com/consumer/cn/doc/content/edittext-0000001563365008)：支持开发出具有用户自定义文案功能的主题，该主题应用后，支持用户自定义编辑文案内容。 |
| 新增[系统深色模式](https://developer.huawei.com/consumer/cn/doc/content/globavariant-0000001074475028#section146256561599)：支持自动获取系统深色模式设置状态，并根据该状态进行显示效果的适配。 |
| 新增[锁屏异步加载](https://developer.huawei.com/consumer/cn/doc/content/performance-optimization-0000001439870338#section66597168126)：锁屏设置异步加载后，每解析一个视图标签就会添加并显示到画面上，有效减少锁屏黑屏时间和无响应出现的频率。 |
| 新增[性能优化建议](https://developer.huawei.com/consumer/cn/doc/content/performance-optimization-0000001439870338#section813778698)：提供脚本规模、文本视图、图片资源、视频/帧动画、变量定义、动画设计、命令触发等方面的性能优化建议。 |
| AR视图&lt;ARBase&gt;：删除AI相关的参数：useAI、aiRefreshTime、aiSceneType。 |
| AI场景识别动效日落。 |

## 【2023/3/29】引擎1.1.13.300版本

| 更新特性： |
| --- |
| 增加小组件容器限制，最多可添加15个。 |
| 可交互桌面、视频桌面耗电优化。 |

## 【2023/2/3】引擎1.1.12.300版本

| 更新特性： |
| --- |
| [系统数据开放](https://developer.huawei.com/consumer/cn/doc/content/system-data-0000001339911605)：新增设备可用空间、设备总空间数值类型数据开放。 |

## 【2022/12/30】引擎1.1.11.300版本

| 更新特性： |
| --- |
| [2D物理碰撞&lt;CollisionWorld&gt;](https://developer.huawei.com/consumer/cn/doc/content/collisionworld-0000001277995829)：新增&lt;Texture&gt;标签，支持为刚体世界和刚体设置动态图片。 |
| 按压动效&lt;PressingAPNGView&gt;：新增isPlayingVar参数，支持监测当前APNG动画的播放状态。 |
| [全局变量&lt;GlobalVariable&gt;](https://developer.huawei.com/consumer/cn/doc/content/globavariant-0000001074475028)：新增[音乐时长和进度条变量](https://developer.huawei.com/consumer/cn/doc/content/globavariant-0000001074475028#section9365153091514)。 |

## 【2022/10/17】引擎1.1.10.300版本

| 更新特性： |
| --- |
| 优化[文本&lt;Text&gt;](https://developer.huawei.com/consumer/cn/doc/content/text-0000001074068045)：增加文本滚动显示功能；支持设置文本的对齐方式。 |
| 优化[2D物理碰撞&lt;CollisionWorld&gt;](https://developer.huawei.com/consumer/cn/doc/content/collisionworld-0000001277995829)：开放刚体实时的位置数据；支持点击刚体跳转到目标应用程序。 |
| 优化[音乐数据开放&lt;MediaControl&gt;](https://developer.huawei.com/consumer/cn/doc/content/mediacontrol-0000001275775133)：新增一句歌词控件，支持制作一句歌词。 |

## 【2022/9/5】引擎1.1.9.300版本

| 更新特性： |
| --- |
| 优化[系统数据开放](https://developer.huawei.com/consumer/cn/doc/content/system-data-0000001339911605)：优化声音模式、音量/亮度进度条相关内容。 |
| 优化[动态图片&lt;APNG&gt;](https://developer.huawei.com/consumer/cn/doc/content/apng-0000001252739922)：支持设置APNG动画隐藏后，再次显示出来时，是否刷新状态重新从第一帧开始播放。 |
| 优化按压动效&lt;PressingAPNGView&gt;：支持设置持续正序播放apng动画至结束时，是否重新从第一帧开始播放。 |

## 【2022/6/24】引擎1.1.8.300版本

| 更新特性： |
| --- |
| 新增[桌面万象小组件单独上架规范](https://developer.huawei.com/consumer/cn/doc/content/widget-separate-0000001337881265)：支持桌面万象小组件单独上架销售。 |
| 新增[系统数据开放](https://developer.huawei.com/consumer/cn/doc/content/system-data-0000001339911605)：开放设备版本、设备可用空间、设备总空间、手电筒开关状态、自动旋转开关状态、设备开机时长、CPU使用率、CPU空闲率、声音模式、音量/亮度进度条等系统数据，并支持调整手电筒开关、自动旋转开关和音量/亮度进度条。 |
| 优化[音乐数据开放&lt;MediaControl&gt;](https://developer.huawei.com/consumer/cn/doc/content/mediacontrol-0000001275775133)：音乐控制器&lt;MediaControl&gt;标签新增packageName参数，通过设置packageName="com.huawei.music" 指定华为音乐app，以制作华为音乐小组件；增加media\_loading\_status变量，检测音乐播放前的加载状态；歌曲名称、艺术家名称支持超出文本框宽度后裁剪内容；音乐进度条&lt;MediaProgressbar&gt;增加isRightAngle参数，支持设置圆角。 |
| 修复设计师反馈的若干已知问题。 |

## 【2022/5/9】引擎1.1.7.300版本

| 更新特性： |
| --- |
| 新增[2D物理碰撞&lt;CollisionWorld&gt;](https://developer.huawei.com/consumer/cn/doc/content/collisionworld-0000001277995829)：2D物理碰撞作为常见的游戏引擎能力，通过为平面刚性物体赋予真实的物理属性的方式，来计算刚体运动、碰撞情况，进而制作各类趣味交互主题。设计师可以创造一个刚体世界，设置刚体世界的大小、重力等参数，并给需要运动的素材赋予刚体属性（重力、密度、初始力、初始速度等），模拟真实世界的运动和碰撞效果。 |
| 新增[运动健康数据开放&lt;Healthy&gt;](https://developer.huawei.com/consumer/cn/doc/content/healthy-0000001278806637)：开放运动健康APP的步数、距离、卡路里、实时心率和静息心率数据，设计师可以根据这些数据制作创意主题。 |
| 新增[动态图片&lt;APNG&gt;](https://developer.huawei.com/consumer/cn/doc/content/apng-0000001252739922)：Image的增强功能，支持APNG格式图片循环播放。APNG是基于PNG格式的位图动画格式图片，是PNG的位图动画扩展，可以实现PNG格式的动态图片效果。使用APNG，可以减少脚本量，提升性能。 |
| 新增按压动效&lt;PressingAPNGView&gt;：根据变量控制正序/倒序播放apng动画，实现按压动效。 |
| 修复设计师反馈的若干已知问题。 |

## 【2022/4/24】引擎1.1.6.300版本

| 更新特性： |
| --- |
| 新增[音乐数据开放&lt;MediaControl&gt;](https://developer.huawei.com/consumer/cn/doc/content/mediacontrol-0000001275775133)：开放歌曲名称、艺术家名称、专辑封面、播放、暂停、切换歌曲、歌词开关、播放模式和进度条、歌词、歌曲风格等音乐数据和功能交互，支持在锁屏、桌面和小组件中使用，设计师可以据此制作创意主题。 |
| 修复华为折叠屏动态壁纸功能应用荣耀折叠屏上视频播放后折叠状态切换闪帧问题。 |
| 修复nova 9手机上使用一镜到底主题包出现花屏现象。 |
| 修复设计师反馈的若干已知问题。 |

## 【2022/3/8】引擎1.1.5.302版本

| 更新特性： |
| --- |
| 新增[一镜到底](https://developer.huawei.com/consumer/cn/doc/content/oneshot-0000001214104994)：提供了一系列图片旋转、透明度设置和缩放设置的组合动效，实现锁屏→AOD、锁屏→桌面、AOD→桌面、AOD→锁屏和桌面→AOD这5个变化过程的动效展示，实现一镜到底效果。 |
| 新增[麦克风音量感知&lt;Microphone&gt;](https://developer.huawei.com/consumer/cn/doc/content/microphone-0000001215010418)：提供麦克风音量感知相关的全局变量#microphone\_state、#microphone\_volume和#isSupportMicro，通过调用这些全局变量，实现麦克风音量感知创意主题。 |
| 修复设计师反馈的若干已知问题。 |

## 【2022/1/26】引擎1.1.5.300版本

| 更新特性： |
| --- |
| 新增[桌面万象小组件&lt;widget&gt;](https://developer.huawei.com/consumer/cn/doc/content/widget-0000001245999755)：桌面万象小组件支持引擎的绝大部分能力。桌面万象小组件应用方式：双手捏合桌面，在窗口小工具中找到并单击主题图标，唤出小组件弹窗，在弹窗中选择目标小组件添加到桌面。长按小组件可调整大小。桌面万象小组件制作方式请查看本文档。需要提醒用户将主题app版本更新至12.0.12.300以上方可使用桌面万象小组件功能。 |
| 优化[天气数据变量集成&lt;Weather&gt;](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110)：优化天气数据来源为华为天气app，新增Weather.today.weatherIcon和Weather.today.weatherIconDes变量。使用前请确保华为天气app已使用，并有当前定位城市的天气信息。用户将主题app版本更新至12.0.12.300之后，下载天气类主题无需授权位置信息。 |
| 俯视下落动效&lt;StereDropView&gt;：&lt;StereoDropItem&gt;新增&lt;ItemConvergence&gt;子标签（定义了粒子的汇聚点）和  &lt;SourcesAnimation&gt;子标签（定义了粒子的帧动画），使动画效果更加逼真。 |
| 修复设计师反馈的若干已知问题。 |

## 【2021/12/13】引擎1.1.4.300版本

| 更新特性： |
| --- |
| 新增[多分辨率机型适配（普通手机、平板、折叠屏）](https://developer.huawei.com/consumer/cn/doc/content/adapter-0000001186735768)：为了更好地适配不同分辨率的终端设备，引擎提供了一种多分辨率机型适配的方案，包括以下两大方向，详情请查看本篇文档。   * 针对平板、折叠屏等分辨率与普通手机差别较大的场景：[设计不同分辨率的脚本文件，以适配平板、折叠屏的不同状态](https://developer.huawei.com/consumer/cn/doc/content/adapter-0000001186735768#section129052316616)。 * 针对同设备类型的不同机型分辨率会有轻微差别，背景可能会有拉伸变形的问题：[背景等比缩放，居中裁剪，以适配同设备类型的不同机型](https://developer.huawei.com/consumer/cn/doc/content/adapter-0000001186735768#section1141831673)。常用于背景的标签包括：图片&lt;Image&gt;、视频&lt;Video&gt;、流体动效&lt;FluidsView&gt;和视频桌面&lt;LiveWallpaper&gt;。实现等比缩放，居中裁剪的参数值为：isBackground="true"、scaleType="center\_crop"。 |
| 新增俯视下落动效&lt;StereDropView&gt;：俯视下落动效提供了一系列物体3D移动动效。对单张图片进行复用，减小相关内存的消耗。其中下落的动效符合物理规律，提供重力设置项，能够随着物体大小和重力传感器的数值改变物体的运动轨迹。 |
| 3D旋转视图&lt;StereoView&gt;新增fixed参数，fixed赋值为1时，可实现在一个旋转的扇面上自由设置图片大小及位置。 |
| 修复设计师反馈的若干已知问题。 |

## 【2021/9/17】引擎1.1.3.302版本

| 更新特性： |
| --- |
| 新增[桌面锁屏联动&lt;globalPersist&gt;](https://developer.huawei.com/consumer/cn/doc/content/globalpersist-0000001205906063)：可通过在锁屏和桌面变量声明脚本中同时给globalPersist属性设置为true，实现桌面和锁屏使用同一个变量。globalPersist是锁屏和桌面变量同步的桥梁，可以将锁屏上的变化传递给桌面，实现更多的创意主题。 |
| [自定义变量Var](https://developer.huawei.com/consumer/cn/doc/content/variant-0000001074315406)新增globalPersist参数，具体用法见[桌面锁屏联动&lt;globalPersist&gt;](https://developer.huawei.com/consumer/cn/doc/content/globalpersist-0000001205906063)。 |
| [天气数据变量集成&lt;Weather&gt;](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110)新增globalPersist参数，赋值为"true"即开启天气变量全局持久化，实现桌面天气数据与锁屏保持一致。 |
| [控件数组&lt;Array&gt;](https://developer.huawei.com/consumer/cn/doc/content/array-0000001074077081)新增注意事项：在该控件中使用Text控件，需使用textEmp的方式获取数组中文本数据。 |
| 修复可交互桌面最高支持15帧问题，当前最高支持60帧，支持展示更加细腻的桌面动态效果。 |
| 修复通过引擎实现视频桌面时，进入桌面视频首帧拉升跳变问题。 |
| 修复HarmonyOS系统上锁屏动效中的偶现的基础动画卡顿掉帧问题。 |
| 修复其他若干已知的问题。 |

## 【2021/08/23】引擎1.1.3.301版本

| 更新特性： |
| --- |
| 新增[流体动效&lt;FluidsView&gt;](https://developer.huawei.com/consumer/cn/doc/content/fluidsview-0000001194289627)：支持模拟流体流动效果，可以设置流体的颜色，数量以及区域等，可以应用在锁屏和桌面上。 |
| 新增[流体增减命令&lt;ParticleCommand&gt;](https://developer.huawei.com/consumer/cn/doc/content/particlecommand-0000001197827299)：配合[流体动效&lt;FluidsView&gt;](https://developer.huawei.com/consumer/cn/doc/content/fluidsview-0000001194289627)使用，实现动态增加或减少流体数量。 |
| 新增[线性马达振动命令&lt;VibrateCommand&gt;](https://developer.huawei.com/consumer/cn/doc/content/vibratecommand-0000001194207997)：实现点击按钮或者屏幕定义的某特定位置触发振动命令，调用系统振动能力。 |
| 新增[天气数据刷新命令&lt;RefreshWeatherCommand&gt;](https://developer.huawei.com/consumer/cn/doc/content/refreshweathercommand-0000001194207227)：支持手动刷新[天气变量](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110)。 |
| 优化[滑块&lt;Slider&gt;](https://developer.huawei.com/consumer/cn/doc/content/slider-0000001073875027)的keypoint属性描述。 |
| 修复某些场景下滑块的可见性参数异常。 |
| 修复某些场景下设置图片/视频为自定义图片/视频，上传图片/视频到指定路径后在锁屏不显示图片/视频的异常。 |
| 修复其他若干已知问题。 |

## 【2021/08/05】

| 更新特性： |
| --- |
| 新增[可交互桌面&lt;InteractiveWallpaper&gt;](https://developer.huawei.com/consumer/cn/doc/content/interactivewallpaper-0000001170976217)的注意事项：需要在主题包descrption.xml中添加&lt;wallpaper&gt;HWThemeEngine&lt;/wallpaper&gt;标签。 |
| 新增AR视图&lt;ARBase&gt;AR主题模型设计的指导视频和指导建议。 |

## 【2021/06/28】引擎5.0.2版本

| 更新特性： |
| --- |
| 新增AR视图&lt;ARBase&gt;：支持在锁屏上实现从虚拟走向现实的AR效果。 |
| 新增AI场景识别&lt;AISceneView&gt;：支持100多个场景的AI识别，并支持根据不同的场景识别结果替换锁屏动画。 |
| 新增[可交互桌面&lt;InteractiveWallpaper&gt;](https://developer.huawei.com/consumer/cn/doc/content/interactivewallpaper-0000001170976217)：基本全面继承现有锁屏的功能和写法，支持多种动效实现。桌面与锁屏联动的功能正在优化性能，后续开放。 |
| 修复视频标签的visibility属性在特定场景下失效问题。 |
| 修复应用部分动效锁屏时的卡顿掉帧问题。 |
| 修复其他若干设计师反馈的问题。 |

## 【2021/04/22】

| 更新特性： |
| --- |
| 部分[天气数据变量集成&lt;Weather&gt;](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110#section5106916545)无昨天和明天数据，已在文档中注明。 |
| [视频桌面&lt;LiveWallpaper&gt;](https://developer.huawei.com/consumer/cn/doc/content/livewallpaper-0000001073967005)中删除了无用属性id 及对部分参数的用法做了修改。 |

## 【2021/04/17】

| 更新特性： |
| --- |
| 新增[日历数据变量集成&lt;Calendar&gt;](https://developer.huawei.com/consumer/cn/doc/content/calendar-0000001126131857#section840971213599)，集成了日历App中订阅管理模块的黄历、星座、历史上的今天中大事件等相关数据。 |
| 新增桌面壁纸和锁屏壁纸支持[音乐动效](https://developer.huawei.com/consumer/cn/doc/content/globavariant-0000001074475028#section17838427194411)。 |
| 新增[视频桌面&lt;LiveWallpaper&gt;](https://developer.huawei.com/consumer/cn/doc/content/livewallpaper-0000001073967005)支持暂停、右滑动切换下一段视频、播放过程中切屏不切换视频。 |
| 修复立体图层帧动画卡顿，修复灭屏后cpu占用过高问题。 |
| 修复3D动效点击事件区域外触发问题。 |
| 修复天气主题空气质量描述不准确问题。 |
| 修复天气数据来源不准确问题，建议设计师将weatherId修改为cnweatherId ，weatherDes修改为cnweatherDes。 |

## 【2021/03/02】

| 更新特性： |
| --- |
| 新增[天气数据变量集成&lt;Weather&gt;](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110#section5106916545)。 |

## 【2021/02/20】

| 更新特性： |
| --- |
| 新增[3D旋转视图&lt;StereoView&gt;](https://developer.huawei.com/consumer/cn/doc/content/stereoview-0000001079344334)。 |
| 新增[视图组Group](https://developer.huawei.com/consumer/cn/doc/content/group2-0000001074157102) align和alignV参数说明。 |

## 【2021/01/13】

| 更新特性： |
| --- |
| 新增[充电状态与新充电动效的区别](https://developer.huawei.com/consumer/cn/doc/content/emui11-0000001074184130)。 |
| 新增新充电动效Demo视频。 |

## 【2021/01/06】

| 更新特性： |
| --- |
| 新增工作日和节假日[全局变量](https://developer.huawei.com/consumer/cn/doc/content/globavariant-0000001074475028)。 |
| 新增全景桌面说明、修改窗口视差posZ和[复杂路径](https://developer.huawei.com/consumer/cn/doc/content/pathutil-0000001074068047)小写指令说明。 |
| 修改[柱状全景](https://developer.huawei.com/consumer/cn/doc/content/vr-0000001073796119)imageType参数说明。 |
| 修改[动态图片](https://developer.huawei.com/consumer/cn/doc/content/dynamicimage-0000001074184128)save参数说明。 |
| 新增[立体图层](https://developer.huawei.com/consumer/cn/doc/content/multilayer-0000001074173883)模糊blur和可见性visibility参数说明。 |
| 新增[立体图层Demo视频](https://developer.huawei.com/consumer/cn/doc/content/multilayer-0000001074173883#section81094538393)。 |