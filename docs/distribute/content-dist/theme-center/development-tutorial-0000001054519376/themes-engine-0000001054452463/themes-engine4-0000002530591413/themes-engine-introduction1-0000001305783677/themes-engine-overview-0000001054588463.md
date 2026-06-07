---
title: "引擎概述"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/themes-engine-introduction1-0000001305783677/themes-engine-overview-0000001054588463
---


import MergeTable from '@site/src/components/MergeTable';

# 引擎概述

华为主题官方动态引擎，通过xml特定语法描述锁屏和桌面界面，在一定需求下可用于开发风格多变的用户界面。可方便地通过更换皮肤改变界面风格、动画甚至交互方式。

引擎框架支持动态帧率，不必按照固定帧率不停渲染：在没有动画和更新的时候停止渲染，此时仅占用极少资源；对于缓慢变化的动画使用低帧率渲染；高动态的动画开始后立即调整到高帧率全速渲染。全速渲染时全屏帧率基本可以达到60帧。合理使用可以既炫酷又不费电。

## 支持设备

动态引擎支持应用于直板手机、平板和折叠屏。

## 应用位置

动态引擎支持应用于：

* [锁屏](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/unlock-application-0000001305921217)
* 桌面（[视频桌面](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/livewallpaper-0000001073967005)+[可交互桌面](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/interactivewallpaper-0000001170976217)）
* [桌面万象小组件](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/widget-0000001245999755)

## 引擎能力与应用位置




<MergeTable
  headers={['分类', '标签', '锁屏', '桌面', '桌面万象小组件']}
  rows={
    [{ text: '基础功能&gt;视图', rowspan: 15, colspan: 1 }, '文本&lt;Text&gt;', '√', '√', '√'],
    [null, '图片&lt;Image&gt;', '√', '√', '√'],
    [null, '动态图片&lt;APNG&gt;', '√', '√', '√'],
    [null, '动态图片&lt;Gif&gt;', '√', '√', '√'],
    [null, '视频&lt;Video&gt;', '√', 'x（可使用 视频桌面&lt;LiveWallpaper&gt; ）', 'x'],
    [null, '时间&lt;Time&gt;', '√', '√', '√'],
    [null, '日期&lt;DateTime&gt;', '√', '√', '√'],
    [null, '倒计时&lt;CountDownTime&gt;', '√', '√', '√'],
    [null, '数字图片&lt;ImageNumber&gt;', '√', '√', '√'],
    [null, '串联图片&lt;ImageSeries&gt;', '√', '√', '√'],
    [null, '帧解锁视图&lt;SourceImage&gt;', '√', 'x', 'x'],
    [null, '遮罩&lt;Mask&gt;', '√', '√', '√'],
    [null, '图片混合&lt;GroupImage&gt;', '√', '√', '√'],
    [null, '几何图形&lt;Geometrical figure&gt;', '√', '√', '√'],
    [null, '路径解析&lt;PathUtil&gt;', '√', '√', '√'],
    [{ text: '基础功能&gt;组', rowspan: 2, colspan: 1 }, '视图组&lt;Group&gt;', '√', '√', '√'],
    [null, '虚拟屏幕&lt;VirtualScreen&gt;', '√', '√', '√'],
    [{ text: '基础功能&gt;控件', rowspan: 3, colspan: 1 }, '按钮&lt;Button&gt;', '√', '√（pressed事件不起作用）', '√'],
    [null, '滑块&lt;Slider&gt;', '√', 'x', 'x'],
    [null, '解锁&lt;Unlocker&gt;', '√', 'x', 'x'],
    [{ text: '基础功能&gt;变量', rowspan: 4, colspan: 1 }, '自定义变量&lt;Var&gt;', '√', '√', '√'],
    [null, '全局变量&lt;GlobalVariable&gt;', '√', '√', '√'],
    [null, '变量数组&lt;VarArray&gt;', '√', '√', '√'],
    [null, '控件数组&lt;Array&gt;', '√', '√', '√'],
    [{ text: '基础功能&gt;表达式', rowspan: 2, colspan: 1 }, '数字表达式&lt;Expression&gt;', '√', '√', '√'],
    [null, '字符串表达式&lt;StringExpression&gt;', '√', '√', '√'],
    [{ text: '基础功能&gt;命令', rowspan: 12, colspan: 1 }, '基础命令&lt;Command&gt;', '√', '√', '√'],
    [null, '声音命令&lt;SoundCommand&gt;', '√', '√', '√'],
    [null, '可见性命令&lt;visibility&gt;', '√', '√', '√'],
    [null, 'Intent命令&lt;IntentCommand&gt;', '√', '√', '√'],
    [null, '变量命令&lt;VariableCommand&gt;', '√', '√', '√'],
    [null, '通用命令&lt;ExternCommand&gt;', '√', '√', '√'],
    [null, '命令组&lt;GroupCommands&gt;', '√', '√', 'x'],
    [null, '周期命令&lt;CycleCommand&gt;', '√', '√', 'x'],
    [null, '天气数据刷新命令&lt;RefreshWeatherCommand&gt;', '√', '√', '√'],
    [null, '线性马达振动命令&lt;VibrateCommand&gt;', '√', '√', '√'],
    [null, '流体增减命令&lt;ParticleCommand&gt;', '√', '√', 'x'],
    [null, '刚体变速受力命令&lt;CollBodyCommand&gt;', '√', '√', '√'],
    ['基础功能&gt;多语言', '图片多语言&lt;PicMultiLanguage&gt;', '√', '√', '√'],
    ['基础功能&gt;数学曲线', '变速函数&lt;VarSpeedFun&gt;', '√', '√', '√'],
    [{ text: '数据开放', rowspan: 6, colspan: 1 }, '天气数据开放&lt;Weather&gt;', '√', '√', '√'],
    [null, '日历数据开放&lt;Calendar&gt;', '√', '√', '√'],
    [null, '音乐数据开放&lt;MediaControl&gt;', '√', '√', '√'],
    [null, '运动健康数据开放&lt;Healthy&gt;', 'x', '√', '√'],
    [null, '系统数据开放', '√', '√', '√'],
    [null, '步数&lt;StepCount&gt;', '√', '√', '√'],
    [{ text: '基础功能&gt;适配功能', rowspan: 8, colspan: 1 }, '传感器&lt;SensorBinder&gt;', '√', '√', '√'],
    [null, '摇一摇&lt;shake&gt;', '√', '√', '√'],
    [null, '充电状态&lt;BatteryCharging&gt;', '√', '√', 'x'],
    [null, '震动设置&lt;vibrate&gt;', '√', '√', '√'],
    [null, '恒定帧率&lt;frameRate&gt;', '√', '√', '√'],
    [null, '可变帧率&lt;VariableFramerate&gt;', '√', '√', '√'],
    [null, '多屏幕展示&lt;MultiScreens&gt;', '√', 'x', 'x'],
    [null, '麦克风音量感知&lt;Microphone&gt;', 'x', '√', '√'],
    [{ text: '2D基础动效', rowspan: 7, colspan: 1 }, '透明度动画&lt;AlphaAnimation&gt;', '√', '√', '√'],
    [null, '位移动画&lt;PositionAnimation&gt;', '√', '√', '√'],
    [null, '旋转动画&lt;RotationAnimation&gt;', '√', '√', '√'],
    [null, '缩放动画&lt;SizeAnimation&gt;', '√', '√', '√'],
    [null, '帧动画&lt;SourcesAnimation&gt;', '√', '√', '√'],
    [null, '变量动画&lt;VariableAnimation&gt;', '√', '√', '√'],
    [null, '时间动画&lt;TimeAnimation&gt;', '√', '√', '√'],
    [{ text: '2D高级动效', rowspan: 11, colspan: 1 }, '2D物理碰撞&lt;CollisionWorld&gt;', '√', '√', '√'],
    [null, '流体动效&lt;FluidsView&gt;', '√', '√', 'x'],
    [null, '新充电动效&lt;EMUI11.0&gt;', '√', 'x', 'x'],
    [null, '网格化-位移&lt;MeshImage-Translation&gt;', '√', '√', '√'],
    [null, '网格化-水波纹&lt;MeshImage-SinMotion&gt;', '√', '√', '√'],
    [null, '笔刷&lt;Paint&gt;', '√', 'x', 'x'],
    [null, '下落动效&lt;DropPhysicalView&gt;', '√', 'x', 'x'],
    [null, '全景动效&lt;VR&gt;', '√', '√', 'x'],
    [null, '延时解锁&lt;DelayUnlock&gt;', '√', 'x', 'x'],
    [null, '水波纹&lt;WaterWallpaper&gt;', '√', '√', 'x'],
    [null, '跟手粒子&lt;ParticleView&gt;', '√', 'x', 'x'],
    [{ text: '3D高级动效', rowspan: 2, colspan: 1 }, '3D旋转视图&lt;StereoView&gt;', '√', 'x', '√'],
    [null, '立体图层&lt;MultiLayer&gt;', '√', 'x', 'x']
  }
/>


## 通用属性

通用属性为视图组件共有的一系列属性，提供了默认的属性和设置，如果在支持通用属性的视图组件中存在与通用属性相同的属性名，以视图组件的说明为准。支持通用属性的组件标签见[通用属性支持列表。](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/themes-engine-introduction1-0000001305783677/themes-engine-common-attribute-0000001054789799)

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| name | 字符串 | 选填 | 元素变量名，在支持表达式的情况中使用@name的格式来取当前变量的值。 |
| x | 数值 | 选填 | 相对于屏幕左上角的x坐标，单位为像素，显示范围为屏幕的宽（1920\*1080的屏幕，显示的宽的范围为0~1080），默认为0，支持表达式。 |
| y | 数值 | 选填 | 相对于屏幕左上角的y坐标，单位为像素，显示范围为屏幕的高（1920\*1080的屏幕，显示的高的范围为0~1920），默认为0，支持表达式。 |
| width | 数值 | 选填 | 显示在屏幕上的宽，单位为像素，显示范围为屏幕的宽（1920\*1080的屏幕，显示的宽的范围为0~1080），支持表达式，w和width写法都可以。 |
| height | 数值 | 选填 | 显示在屏幕上的高，单位为像素，显示范围为屏幕的高（1920\*1080的屏幕，显示的高的范围为0~1920），支持表达式，h和height写法都可以。 |
| pivotX | 数值 | 选填 | 旋转的点的X坐标，相对于View的左上角位置，单位为像素，支持表达式，pivotX和centerX写法都可以。 |
| pivotY | 数值 | 选填 | 旋转的点的Y坐标，相对于View的左上角位置，单位为像素，支持表达式，pivotY和centerY写法都可以。 |
| rotation | 数值 | 选填 | 旋转角度，一周360度，围绕(pivotX,pivotY)点旋转（若无pivotX和pivotY，则默认(0,0)点旋转），支持表达式。正数表示顺时针，负数表示逆时针，rotation和angle写法都可以。 |
| rotationX | 数值 | 选填 | 以X轴为旋转中心旋转，一周360度，支持表达式。正数表示顺时针，负数表示逆时针，rotationX和angleX写法都可以。 |
| rotationY | 数值 | 选填 | 以Y轴为旋转中心旋转，一周360度，支持表达式。正数表示顺时针，负数表示逆时针，rotationY和angleY写法都可以。 |
| alpha | 数值 | 选填 | 透明度，0-255，默认为255，当值小于0时则该值取0，当值大于255时，该值取255，支持表达式。 |
| visibility | 数值 | 选填 | 元素可见性，&lt;=0 不可见 &gt;0可见，true为可见，false为不可见，默认为1，支持表达式。 |
| category | 字符串 | 选填 | 取值"Normal", "Charging", "BatteryLow", "BatteryFull"，表示当手机处于指定充电状态时显示该元素。 |
| align | 字符串 | 选填 | 坐标点水平对齐方式left, center, right，对齐的效果为view的左上角x坐标分别表示该view的左、中、右位置。 |
| alignV | 字符串 | 选填 | 坐标点垂直对齐方式top, center, bottom，对齐的效果为view的左上角y坐标分别表示该view的上、中、下位置。 |
| enableMove | 字符串 | 选填 | 元素是否支持移动，当值为false或者0时表示不可移动，当值为true或者非0值表示可移动，默认为0。 |
| moveRect | 字符串 | 选填 | 移动区域，当enableMove为可移动时有效。格式为moveRect="minH,minV,maxH,maxV"，分别表示：最小水平移动，最小垂直移动，最大水平移动，最大垂直移动。四个参数类型为数值，单位为像素，不支持表达式。例如：移动目标的原坐标为(x,y)，则该目标水平方向的移动范围是：(x+minH)~(x+maxH)，垂直方向的移动范围是：(y+minV)~(y+maxV)。 |
| active | 数值 | 选填 | 激活状态，0代表不激活，视图不显示，所有的动画和可见性均失效，默认值1。 |