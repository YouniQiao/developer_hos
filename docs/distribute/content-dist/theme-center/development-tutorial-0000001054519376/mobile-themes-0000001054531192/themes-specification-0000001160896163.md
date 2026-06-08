---
title: "HarmonyOS 2.0主题设计指导及规范"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/mobile-themes-0000001054531192/themes-specification-0000001160896163
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/mobile-themes-0000001054531192/themes-specification-0000001160896163
last_sync: 2026-06-07
sync_hash: 66480fcc
---
import MergeTable from '@site/src/components/MergeTable';

# HarmonyOS 2.0主题设计指导及规范

小主题：小主题是锁屏、桌面及图标范围进行换肤的主题。

大主题：大主题是锁屏、桌面、图标、联系人、信息、控制中心、拨号、通话范围进行换肤的主题。

锁屏主题：锁屏主题是仅锁屏范围换肤的主题。

图标主题：图标主题是仅图标范围换肤的主题。

以上类型主题均可直接使用主题工具直接制作。

## 1. 快速指引-必做设计项总计

| 类别 | 主题包内名称 | 小主题 | 大主题 | 锁屏主题 | 图标主题 |
| --- | --- | --- | --- | --- | --- |
| 锁屏 | unlock | 1个 | 1个 | 1个 | / |
| 壁纸 | wallpaper | 2张 | 2张 | 1张 | / |
| 图标 | icons | 74个 | 74个 | / | 74个 |
| 桌面 | com.huawei.android.launcher | 1个 | 1个 | / | 1个 |
| 联系人 | com.android.contacts | / | 1个 | / | / |
| 信息 | com.android.mms | / | 1个 | / | / |
| 控制中心 | com.android.systemui | / | 1个 | / | / |
| 拨号设置 | com.android.phone | / | 1个 | / | / |
| 拨号设置-通话自动录音 | com.huawei.phone.recorder | / | 1个 | / | / |
| 拨号设置-来电拒接短信 | com.android.server.telecom | / | 1个 | / | / |
| 通话 | com.android.incallui | / | 1个 | / | / |
| 音频播控中心 | com.huawei.mediacontroller | / | 1个 | / | / |
| 预览图 | preview | 6-20张 | 11-20张 | 3-20张 | 4-20张 |
| 描述文件 | description.xml | 1个 | 1个 | 1个 | 1个 |

制作完主题后，各位设计师们可以根据[手机主题测试规范](https://developer.huawei.com/consumer/cn/doc/content/theme-test-0000001055661259#section3698921142310)进行自检测试。自检无误后可参考[手机主题内容上传指南](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/uploadguide-0000001054359939/themes-upload-0000001055029726#section96731130204020)将主题包上传至联盟。

## 2. 快速入门

### 2.1 小主题

小主题结构包含：

* 锁屏
* 壁纸
* 图标
* 桌面
* 预览图
* 描述文件

如下图所示，通过打包所有小主题的结构文件，就制作完成了一个小主题：

![](./img/53304029b5b3.jpg "点击放大")

### 2.2 大主题

除小主题包含结构内容，大主题还包含：

* 联系人
* 信息
* 控制中心
* 拨号设置
* 拨号设置-通话自动录音
* 拨号设置-来电拒接短信
* 通话
* 音频播控中心

如下图所示，通过打包所有大主题的结构文件，就制作完成了一个大主题：

![](./img/d18eeb90450d.jpg "点击放大")

### 2.3 锁屏主题

锁屏主题结构包含：

* 锁屏
* 壁纸中的锁屏壁纸：unlock\_wallpaper\_X
* 预览图
* 描述文件

如下图所示，通过打包所有锁屏主题的结构文件，就制作完成了一个锁屏主题：

![](./img/4f1f2603c1e3.jpg "点击放大")

### 2.4 图标主题

图标主题结构包含：

* 图标
* 桌面
* 预览图
* 描述文件

如下图所示，通过打包所有图标主题的结构文件，就制作完成了一个图标主题：

![](./img/5e7cf34052f0.jpg "点击放大")

## 3. 锁屏（unlock）制作指导及规范

HarmonyOS 2.0的锁屏类型如下：滑动锁屏、杂志锁屏、动态锁屏、视频解锁四选一。

所有类型的锁屏，unlock文件夹下都必须有theme.xml文件。并均可以使用主题制作工具制作。

### 3.1 滑动锁屏

滑动锁屏为一张静态壁纸全屏滑动解锁。需在壁纸wallpaper文件夹下放置锁屏壁纸一张。

锁屏壁纸的尺寸为：1080×2160px，格式为.jpg，文件名为：unlock\_wallpaper\_X.jpg（X为阿拉伯数字按顺序排列，首张壁纸X为0）。

锁屏壁纸样板如下：

![](./img/faaf7b93950c.jpg "点击放大")

滑动锁屏设计师仅能修改壁纸，其他显示内容为默认效果。unlock文件夹下只有一个XML文件，代码固定，如下所示：

```
<?xml version="1.0" encoding="utf-8"?>
<HWTheme>
   <item style="slide"/>
</HWTheme>
```

滑动锁屏应用效果如下图所示：

![](./img/c00a358c9f6a.png "点击放大")

滑动锁屏可通过工具可视化制作：

![](./img/87c8e7b424ed.png "点击放大")

### 3.2 杂志锁屏

杂志锁屏在设置中开启开关时，每次亮屏时显示不同的锁屏图片，首次亮屏显示设计师设计的锁屏壁纸。需在壁纸wallpaper文件夹下放置锁屏壁纸一张。

锁屏壁纸的尺寸为：1080×2160px，格式为.jpg，文件名为：unlock\_wallpaper\_X.jpg（X为阿拉伯数字按顺序排列，首张壁纸X为0）。

锁屏壁纸样板如下：

![](./img/cd79c995c02a.jpg "点击放大")

杂志锁屏和滑动解锁相似，设计师仅能修改壁纸，其他显示内容为默认效果。unlock文件夹下只有一个XML文件，代码固定，如下所示：

```
<?xml version="1.0" encoding="utf-8"?>
<HWTheme>
   <item style="magazine"/>
</HWTheme>
```

杂志锁屏应用效果如下图所示：

![](./img/ef074a1cf8d8.png "点击放大")

杂志锁屏可通过工具可视化制作：

![](./img/eb4c37fd5fe3.png "点击放大")

### 3.3 动态锁屏

动态锁屏能够实现风格多变的用户界面。可方便地通过更换皮肤改变界面风格、动画甚至交互方式。

结构：动态锁屏unlock文件夹下有一个lockscreen文件夹和一个theme.xml文件。

![](./img/402bf829b6f5.jpg "点击放大")

设计师可以在lockscreen文件夹下，建立一个manifest.xml文件，调用制作的图片素材，使用脚本编写各式各样的动态效果，具体脚本写法参见[HarmonyOS 4.X及以下版本主题引擎规范](https://developer.huawei.com/consumer/cn/doc/content/themes-engine-0000001054452463)。

动态锁屏可通过工具可视化制作：

![](./img/8c157eb40d80.png "点击放大")

### 3.4 视频锁屏

视频锁屏是在锁屏上面循环播放视频的锁屏，默认全屏滑动解锁。设计师可以制作视频锁屏壁纸，并能修改锁屏时间切图、日期及上下午颜色。视频锁屏可通过工具可视化制作：

![](./img/75bea3549bf6.png "点击放大")

### 3.5 锁屏安全区域

* 屏幕内指纹

在某些产品中有屏幕内指纹功能，指纹位置不同，时间显示和提示语位置不一样，需注意避免操作区域重叠：

1. 安全区域内不可有点击、滑动等操作内容，热区边缘不可与安全区域重叠。
2. 安全区域内可出现动画或提示信息等无操作内容，但不能影响指纹功能图标识别性。

单个安全区域（红色）大小为240x360px，综合目前产品的指纹位置确定整体安全区域为：

安全区域1:

距离屏幕底部536px红色区域，大小为240x418px。

安全区域2:

距离屏幕底部24px红色区域，大小为240x420px。

![](./img/b32af8afc66f.png "点击放大")

* 状态栏高度

安全区域3:

综合目前所有产品的状态栏高度确定整体安全区域为高度为140px。HarmonyOS 2.0产品状态栏高度最高为140px，设计师需要注意避免内容显示区域与状态栏高度重叠：

1. 安全区域内不可有点击、滑动等操作内容，热区边缘不可与安全区域重叠。
2. 安全区域内可出现动画或提示信息等无操作内容，但不能影响指纹功能图标识别性。

![](./img/50165920d3e0.png "点击放大")

* 通知卡片

安全区域4：

通知显示规则：通知最大显示条数：3条半，通知最大高度为：372dp。

![](./img/cff7cd2f5ec6.png "点击放大")

## 4. 壁纸（wallpaper）

壁纸分为桌面壁纸和锁屏壁纸，大小均控制在1M以内，均可按照顺序放置多张壁纸。

由于系统特性，锁屏壁纸实际效果会被放大10%，设计师在制作时请注意规避。

锁屏壁纸必须放在wallpaper中才会自适应兼容18:9及以上的手机。

### 4.1 桌面壁纸

桌面壁纸分为浅色壁纸和深色壁纸，两者规格一致，尺寸为：2160×2160px，格式为.jpg。

首张桌面浅色壁纸必做，文件名为：home\_wallpaper\_X.jpg（X为阿拉伯数字按顺序排列，首张壁纸X为0）。

浅色壁纸样板如下：

![](./img/8a83c5432547.jpg "点击放大")

桌面深色壁纸可选制作，文件名为：home\_dark\_wallpaper\_X.jpg（X为阿拉伯数字按顺序排列，首张壁纸X为0）。

深色壁纸样板如下：

![](./img/f89404f3f58d.jpg "点击放大")

配置桌面深色壁纸时，description.xml文件需增加一行脚本方可生效：&lt;wallpaper-dark&gt;true&lt;/wallpaper-dark&gt; 。

样例如下：

```
<?xml version="1.0" encoding="utf-8"?>
<HwTheme>
    <title>English Name</title>
    <title-cn>主题中文名称</title-cn>
    <author>制作者名称</author>
    <designer>设计师名称</designer>
    <screen>FHD</screen>
    <version>12.0.0</version>
    <font>Default</font>
    <font-cn>默认</font-cn>
    <wallpaper-dark>true</wallpaper-dark>
    <briefinfo>这是模板，请自行修改设计。</briefinfo>
</HwTheme>
```

### 4.2 锁屏壁纸

首张锁屏壁纸必做，尺寸为：1080×2160px，格式为.jpg，文件名为：unlock\_wallpaper\_X.jpg（X为阿拉伯数字按顺序排列，首张壁纸X为0）。

锁屏壁纸样板如下：

![](./img/0ba68822f293.jpg "点击放大")

## 5. 图标（icons）

图标包含了系统图标和第三方图标；其中系统图标又分为动态图标和静态图标；所有图标尺寸：192×192px；所有图标格式：png格式。

### 5.1 系统图标-静态图标

* 一共75个静态图标，其中下图绿色选框的1个图标为选做，其余74个为必做。
* 日历，时钟的静态图标不能出现带有误导性的数字。
* 不同应用不能使用相同图标。
* 系统图标必须经过重新绘制。其中，红色框选的图标需保留官方图标中心元素，设计师不可随意更改其形状。
* 对于官方应用图标，除需保留中心元素的图标外，其他图标不允许出现任何品牌标识。

![](./img/b411b7d9eba5.png "点击放大")

<strong>文件夹背景图标</strong>

新增小文件夹深色背景图标，当系统开启深色模式时，小文件夹背景切换为深色背景资源。

![](./img/41ee7ce83e22.png)

新增大文件夹浅、深色背景图标，设计元素绘制区域如图红色区域，宽度为24px。设计元素必须在红色区域内，不可以干扰文件夹内图标的识别。

![](./img/6789f3544bdc.png)

新增大文件夹右下角堆叠背景，此处会给icons目录下的图标资源额外加一个背板，避免透明图标资源叠加后导致看不清的问题。

堆叠背景资源不可设计为透出下层图标的样式，不可导致图标重叠产生看不清的问题。

![](./img/12b65a29e079.png)

### 5.2 系统图标-动态图标

动态图标在icons下面的dynamic\_icons文件夹下，分别支持以下4个动态图标：

![](./img/4b8cdecd1846.png "点击放大")

* 以上动态图标均是选做图标，动态时钟只允许选择一种放入主题包内。
* 动态日历只用提供背板，具体时间详情由系统自动写入，可通过launcher中的theme.xml文件修改显示的时间数字的颜色。
* 若没有适配动态图标，需将其所属文件夹删除，若四个动态图标都没有适配，则直接删除dynamic\_icons。
* 动态模拟时钟旋转中心为切图的中心，设计师可以参考模板图标制作。

### 5.3 第三方图标-模板适配

![](./img/3757283526ac.png)

我们希望设计师尽可能多的适配第三方图标，但是也会有没有适配的情况。为此，华为主题提供了一套解决方案：通过背板，遮罩，蒙版组合出一套底板使未适配的第三方图标风格趋近于统一。一组第三方图标底板，由icon\_background\_01.png、 icon\_border.png、icon\_mask.png组成，三个资源缺一不可。

1. icon\_background\_01.png ——图标底板。可以做多张底板图片（如不同材质、颜色），系统会随机调取该底板放到第三方应用的下方。做这个底板的时候，要考虑到其它图标大小，视觉上要保持一致。

   ![](./img/a6c2b93c833a.png "点击放大")
2. icon\_border.png——图标遮罩。统一罩在第三方图标的最上层，可以灵活应用，做出多种效果。比如下图中图标上的做旧划痕或者阴影过渡等效果。如果不需要用这种叠加效果，则在主题包中将这张图做成完全空白透明的。

   ![](./img/3ba10bb25598.jpg "点击放大")
3. icon\_mask.png——图标蒙版。该图片的图像区域必须为纯黑色，第三方图标只显示黑色图像范围的内容。

### 5.4 第三方图标-包名适配

![](./img/400702b2e53c.png)

主题图标作为锁屏模块外第二重要大模块，是考究主题质量好坏的重要一环。我们鼓励设计师在主题上适配更多的第三方图标，官方将对系统图标和第三方图标适配的数量和质量重点标注为主题推荐标准之一。

通过查询图标包名，将相应适配好的图标命名为正确的包名放置在icons图标中，可以更好的适配第三方图标。第三方图标适配上限为1万个。

第三方图标包名可以通过手机安装第三方“包名查看器”应用查看，或[点击链接](https://sj.qq.com/)查看：

如：文件管理器的包名为：com.dianxin.file.explorer。

![](./img/845053d01f23.png "点击放大")

## 6. 公共系统控件（framework-res-hwext）

### 6.1 公共系统控件切图

公共系统控件需要预先制作好的切图文件有9项：




<MergeTable
  headers={['PNG', '备注', 'HarmonyOS 2.0资源名称', '尺寸（px）', '工具位置']}
  rows={
    [{ text: '', rowspan: 24, colspan: 1 }, '拨号数字0', 'dial_num_0_blk.png', '建议值：152*167', { text: '电话-拨号盘-拨号按钮', rowspan: 24, colspan: 1 }],
    [null, '拨号数字1', 'dial_num_1_blk.png', '建议值：152*167', null],
    [null, '拨号数字2', 'dial_num_2_blk.png', '建议值：152*167', null],
    [null, '拨号数字3', 'dial_num_3_blk.png', '建议值：152*167', null],
    [null, '拨号数字4', 'dial_num_4_blk.png', '建议值：152*167', null],
    [null, '拨号数字5', 'dial_num_5_blk.png', '建议值：152*167', null],
    [null, '拨号数字6', 'dial_num_6_blk.png', '建议值：152*167', null],
    [null, '拨号数字7', 'dial_num_7_blk.png', '建议值：152*167', null],
    [null, '拨号数字8', 'dial_num_8_blk.png', '建议值：152*167', null],
    [null, '拨号数字9', 'dial_num_9_blk.png', '建议值：152*167', null],
    [null, '拨号数字0按下', 'dial_num_0_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字1按下', 'dial_num_1_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字2按下', 'dial_num_2_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字3按下', 'dial_num_3_blkpress.png', '建议值：152*167', null],
    [null, '拨号数字4按下', 'dial_num_4_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字5按下', 'dial_num_5_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字6按下', 'dial_num_6_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字7按下', 'dial_num_7_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字8按下', 'dial_num_8_blk_press.png', '建议值：152*167', null],
    [null, '拨号数字9按下', 'dial_num_9_blk_press.png', '建议值：152*167', null],
    [null, '拨号*', 'xing.png', '建议值：152*167', null],
    [null, '拨号*按下', 'xingpress.png', '建议值：152*167', null],
    [null, '拨号#', 'jing.png', '建议值：152*167', null],
    [null, '拨号#按下', 'jingpress.png', '建议值：152*167', null],
    ['', '索引条背景（下）', 'fastscroll_familyname_normal.9.png', '无固定尺寸', { text: '电话-联系人-索引条弹框背景', rowspan: 2, colspan: 1 }],
    ['', '索引条背景（上）', 'fastscroll_label_phonebook_emui_icon.png', '180*210', null],
    ['', '索引条背景（英文）', 'fastscroll_label_phonebook_emui_null_icon.png', '180*180', '电话-联系人-索引条弹框背景（英文）'],
    ['', '新建联系人公司弹窗', 'company_pop_background.9.png', '无固定尺寸', '电话-新建联系人-新建/编辑联系人（公司弹窗）'],
    ['', '拨号盘背景（可自定义图片或纯色背景）', 'dialpad_background_drawable.9.png', '建议值：1080*1184', '电话-拨号盘-拨号盘背景'],
    ['', '拨号背景（不透明度必须为100%）', 'header_background4.9.png', '建议值：1080*384', '电话-拨号盘-拨号背景']
  }
/>


以上切图按照上述表格制作好后，可直接使用主题工具替换，例如【背景图片 background\_emui.9.png】资源对应在截图红框处替换：

电话-主页-背景图片

![](./img/a4efb6cda798.png "点击放大")

短信-短信列表-背景图片

![](./img/036fb7244298.png "点击放大")

桌面-桌面设置-背景图片

![](./img/2b22efde3bb8.png "点击放大")

### 6.2 公共系统控件结构及颜色编辑描述

framework-res-hwext 为公共系统控件，在所有模块中都有用到。内有2个文件，如下图所示：

![](./img/eda2769bbe36.png)

![](./img/4d0c4b43c525.png)

res内有一个drawable-xxhdpi文件夹，内为上述公共系统控件切图；theme.xml为公共系统控件的颜色代码。

公共系统控件的颜色在工具中的【全局】菜单下面编辑：

![](./img/8a70f83d474a.png "点击放大")

## 7. 桌面（com.huawei.android.launcher）

### 7.1 桌面模块切图

桌面模块需要预先制作好的切图文件有10项：

| PNG | 备注 | HarmonyOS 2.0资源名称 | 尺寸（px） | 工具位置 |
| --- | --- | --- | --- | --- |
| ![](./img/0a089da1a1c3.png "点击放大") | 文件夹内添加按钮 | folder\_add\_icon.png | 168×168 | 桌面-文件夹-添加按钮 |
| ![](./img/21ff8dea6d87.png "点击放大") | 一键清理 | ic\_widget\_bg.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/a1d6c1e8a755.png "点击放大") | 一键清理 | ic\_widget\_circle.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/98edf356515d.png "点击放大") | 一键清理 | ic\_widget\_glowline\_danger.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/6091d9e2c5be.png "点击放大") | 一键清理 | ic\_widget\_glowline\_risk.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/5d06619dd3fa.png "点击放大") | 一键清理 | ic\_widget\_glowline\_safe.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/bb815d740226.png "点击放大") | 一键清理 | ic\_widget\_preview.png | 192×192 | 图标-动态图标-一键清理 |
| ![](./img/dc9bd49f37c7.png "点击放大") | 移除 | ic\_edit\_delete.9.png | 无固定尺寸 | 桌面-切屏效果-编辑按钮背景图 |
| ![](./img/288ac0871d68.png "点击放大") | 分享 | ic\_edit\_share.9.png | 无固定尺寸 | 桌面-切屏效果-编辑按钮背景图 |
| ![](./img/4a42ff601d1a.png) | 健康使用角标背景图 | ic\_mark.9.png | 无固定尺寸 | 桌面-桌面属性-健康使用角标背景图 |

以上切图按照上述表格制作好后，可直接使用主题工具替换，例如【文件夹内添加按钮 folder\_add\_icon.png】资源对应在截图红框处替换：

桌面-文件夹-添加按钮/文件夹背景

![](./img/d55001e904c7.png "点击放大")

### 7.2 桌面模块结构及颜色编辑描述

com.huawei.android.launcher 为桌面模块，内有3个文件，如下图所示：

![](./img/aa05348f5218.png)

![](./img/1784a1eba6e2.png)

framework-res-hwext为界面内的公共模块，设计师可修改桌面模块引用的部分；res内有一个drawable-xxhdpi文件夹，内为上述桌面模块切图；theme.xml为桌面模块的部分颜色代码。

桌面模块的颜色在工具中的【桌面】菜单下面编辑：

![](./img/cc60981efba4.png "点击放大")

## 8. 联系人（com.android.contacts）

### 8.1 联系人模块切图

联系人模块需要预先制作好的切图文件有31项：

| PNG | 备注 | HarmonyOS 2.0资源名称 | 尺寸（px） | 工具位置 |
| --- | --- | --- | --- | --- |
| ![](./img/d360021b0f38.png "点击放大") | 拨号数字0 | dial\_num\_0\_blk.png | 建议值：152\*167 | 电话-拨号盘-拨号按钮 |
| 拨号数字1 | dial\_num\_1\_blk.png | 建议值：152\*167 |
| 拨号数字2 | dial\_num\_2\_blk.png | 建议值：152\*167 |
| 拨号数字3 | dial\_num\_3\_blk.png | 建议值：152\*167 |
| 拨号数字4 | dial\_num\_4\_blk.png | 建议值：152\*167 |
| 拨号数字5 | dial\_num\_5\_blk.png | 建议值：152\*167 |
| 拨号数字6 | dial\_num\_6\_blk.png | 建议值：152\*167 |
| 拨号数字7 | dial\_num\_7\_blk.png | 建议值：152\*167 |
| 拨号数字8 | dial\_num\_8\_blk.png | 建议值：152\*167 |
| 拨号数字9 | dial\_num\_9\_blk.png | 建议值：152\*167 |
| 拨号数字0按下 | dial\_num\_0\_blk\_press.png | 建议值：152\*167 |
| 拨号数字1按下 | dial\_num\_1\_blk\_press.png | 建议值：152\*167 |
| 拨号数字2按下 | dial\_num\_2\_blk\_press.png | 建议值：152\*167 |
| 拨号数字3按下 | dial\_num\_3\_blkpress.png | 建议值：152\*167 |
| 拨号数字4按下 | dial\_num\_4\_blk\_press.png | 建议值：152\*167 |
| 拨号数字5按下 | dial\_num\_5\_blk\_press.png | 建议值：152\*167 |
| 拨号数字6按下 | dial\_num\_6\_blk\_press.png | 建议值：152\*167 |
| 拨号数字7按下 | dial\_num\_7\_blk\_press.png | 建议值：152\*167 |
| 拨号数字8按下 | dial\_num\_8\_blk\_press.png | 建议值：152\*167 |
| 拨号数字9按下 | dial\_num\_9\_blk\_press.png | 建议值：152\*167 |
| 拨号\* | xing.png | 建议值：152\*167 |
| 拨号\*按下 | xingpress.png | 建议值：152\*167 |
| 拨号# | jing.png | 建议值：152\*167 |
| 拨号#按下 | jingpress.png | 建议值：152\*167 |
| ![](./img/7ee08fa0ab1d.png "点击放大") | 索引条背景（下） | fastscroll\_familyname\_normal.9.png | 无固定尺寸 | 电话-联系人-索引条弹框背景 |
| ![](./img/6f19100be3e4.png "点击放大") | 索引条背景（上） | fastscroll\_label\_phonebook\_emui\_icon.png | 180\*210 |
| ![](./img/6248d0df607e.png "点击放大") | 索引条背景（英文） | fastscroll\_label\_phonebook\_emui\_null\_icon.png | 180\*180 | 电话-联系人-索引条弹框背景（英文） |
| ![](./img/70ccd626aff8.png "点击放大") | 新建联系人公司弹窗 | company\_pop\_background.9.png | 无固定尺寸 | 电话-新建联系人-新建/编辑联系人（公司弹窗） |
| ![](./img/8c18a9da4ff9.png "点击放大") | 拨号盘背景（可自定义图片或纯色背景） | dialpad\_background\_drawable.9.png | 建议值：1080\*1184 | 电话-拨号盘-拨号盘背景 |
| ![](./img/5ac14fb6966d.png "点击放大") | 拨号背景（不透明度必须为100%） | header\_background4.9.png | 建议值：1080\*384 | 电话-拨号盘-拨号背景 |

以上切图按照上述表格制作好后，可直接使用主题工具替换，例如【拨号盘背景 dialpad\_background\_drawable.9.png】资源对应在截图红框处替换：

![](./img/8bc086965cda.png "点击放大")

### 8.2 联系人模块结构及颜色编辑描述

com.android.contacts 为联系人模块，内有3个文件，如下图所示：

![](./img/fb601f63821a.png)

![](./img/99d8e0403d9f.png)

framework-res-hwext为界面内的公共模块，设计师可修改联系人模块引用的部分；res内有一个drawable-xxhdpi文件夹，内为上述联系人模块切图；theme.xml为联系人模块的部分颜色代码。

联系人模块的颜色在工具中的【电话】菜单下面编辑：

![](./img/19a9ee5819ce.png "点击放大")

## 9. 信息（com.android.mms）

### 9.1 信息模块切图

信息模块需要预先制作好的切图文件有16项：

| PNG | 备注 | HarmonyOS 2.0资源名称 | 尺寸（px） | 工具位置 |
| --- | --- | --- | --- | --- |
| ![](./img/6530851d4e70.png "点击放大") | 短信/会话界面/卡片式气泡背景 | v\_bg\_3.9.png | 无固定尺寸 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/da21da04d718.png "点击放大") | 短信/会话界面/机票信息气泡背景 | v\_bg\_4.9.png | 无固定尺寸 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/d5433004d313.png "点击放大") | 待发区气泡背景 如有方向，注意镜像 | message\_attachment\_preview\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/c1ad04f69a88.png "点击放大") | 发送的地理位置气泡背景 如有方向，注意镜像 | message\_location\_pop\_send\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-发送类气泡 |
| ![](./img/059df83cffee.png "点击放大") | 收藏的发送的短信气泡背景 如有方向，注意镜像 | message\_pop\_favorite\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-接收类气泡 |
| ![](./img/a79f17aba792.png "点击放大") | 接收信息气泡、收藏的接收气泡背景 如有方向，注意镜像 | message\_pop\_incoming\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-接收类气泡 |
| ![](./img/0dbaf0b07b64.png "点击放大") | 收藏的发送的rcs气泡背景 如有方向，注意镜像 | message\_pop\_rcs\_favorite\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-接收类气泡 |
| ![](./img/991ba015e911.png "点击放大") | 四圆角蒙版气泡背景，需要有透明度，否则看不清短信文字 如有方向，注意镜像 | message\_pop\_rcs\_image\_bg\_long\_press.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/127134069dcb.png "点击放大") | 接收气泡蒙版气泡背景，需要有透明度，否则看不清短信文字 如有方向，注意镜像 | message\_pop\_rcs\_receive\_bg\_long\_press.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-接收类气泡 |
| ![](./img/4cc95ebfaa33.png "点击放大") | rcs发送气泡气泡背景 如有方向，注意镜像 | message\_pop\_rcs\_send\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-发送类气泡 |
| ![](./img/fe2b0a8ff874.png "点击放大") | 发送气泡蒙版气泡背景，需要有透明度，否则看不清短信文字 如有方向，注意镜像 | message\_pop\_rcs\_send\_bg\_long\_press.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-发送类气泡 |
| ![](./img/2d7dd43f8f02.png "点击放大") | 短信发送出去之后气泡背景 如有方向，注意镜像 | message\_pop\_send\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-发送类气泡 |
| ![](./img/c3b123602937.png "点击放大") | 彩信幻灯片带图片接收气泡背景 如有方向，注意镜像 | message\_slide\_pop\_incoming\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/ef16c1296438.png "点击放大") | 彩信幻灯片带图片发送气泡背景 如有方向，注意镜像 | message\_slide\_pop\_send\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-智能短信-圆角类卡片气泡 |
| ![](./img/52be63f9614a.png "点击放大") | 加密短信气泡背景 如有方向，注意镜像 | encrypted\_message\_pop\_send\_bg.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-会话-发送类气泡 |
| ![](./img/69c9232fb2ce.png) | 智能短信卡片气泡长按时背景 如有方向，注意镜像 | a2p\_card\_pop\_bg\_long\_press.9.png | 172x102 可以不固定，保证全区域可显示 | 短信-智能短信-圆角类卡片气泡 |

以上切图按照上述表格制作好后，可直接使用主题工具替换，例如【短信发送出去之后气泡背景 message\_pop\_send\_bg.9.png】资源对应在截图红框处替换：

![](./img/b831211e41ca.png "点击放大")

### 9.2 信息模块结构及颜色编辑描述

com.android.mms 为信息模块，内有3个文件，如下图所示：

![](./img/85fc40353f11.png)

![](./img/4528f734e973.png)

framework-res-hwext为界面内的公共模块，设计师可修改信息模块引用的部分；res内有一个drawable-xxhdpi文件夹，内为上述信息模块切图；theme.xml为信息模块的部分颜色代码。

信息模块的颜色在工具中的【短信】菜单下面编辑：

![](./img/dcae0ee1301c.png "点击放大")

## 10. 控制中心（com.android.systemui）

### 10.1 控制中心模块切图

控制中心模块需要预先制作好的切图文件有10项：

| PNG | 备注 | HarmonyOS 2.0资源名称 | 尺寸（px） | 工具位置 |
| --- | --- | --- | --- | --- |
| ![](./img/c8b1666de852.png "点击放大") | 一键锁屏（预览） | ic\_onekey\_widget\_preview.png | 192×192 | 通知-窗口小工具图标 |
| ![](./img/ee008b8c28f1.png "点击放大") | 一键锁屏（桌面） | ic\_onekey\_widget\_shortcut.png | 192×192 | 通知-窗口小工具图标 |
| ![](./img/3263425114bc.png "点击放大") | 手电筒（预览） | ic\_flashlight\_preview.png | 192×192 | 通知-窗口小工具图标 |
| ![](./img/460dd7e03992.png "点击放大") | 手电筒（桌面） | ic\_flashlight\_shortcut.png | 192×192 | 通知-窗口小工具图标 |
| ![](./img/0b6d4656f7c7.png "点击放大") | 音量控制滑块 | ic\_seekbar\_thumb.png | 96×96 | 通知-音量调节-音量条滑块图片 |
| ![](./img/4d3980996411.png "点击放大") | 滑块不可用状态 | hwseekbar\_slider\_thumb\_disable\_emui.png | 120x120 | 通知-下拉通知-滑块图片 |
| ![](./img/be1b16d7cbcf.png "点击放大") | 滑块正常状态 | hwseekbar\_slider\_thumb\_normal\_emui.png | 120x120 | 通知-下拉通知-滑块图片 |
| ![](./img/a002ca0bd2f8.png "点击放大") | 滑块按压状态 | hwseekbar\_slider\_thumb\_pressed\_emui.png | 120x120 | 通知-下拉通知-滑块图片 |

以上切图按照上述表格制作好后，可直接使用主题工具替换，例如【音量控制滑块 ic\_seekbar\_thumb.png】资源对应在截图红框处替换：

![](./img/6b3c1515c704.png "点击放大")

### 10.2 控制中心模块结构及颜色编辑描述

com.android.systemui 为控制中心模块，内有3个文件，如下图所示：

![](./img/aed912d8c71b.png)

![](./img/44de24a5bf66.png)

framework-res-hwext为界面内的公共模块，设计师可修改控制中心模块引用的部分；res内有一个drawable-xxhdpi文件夹，内为上述控制中心模块切图；theme.xml为控制中心模块的部分颜色代码。

控制中心模块的颜色在工具中的【通知】菜单下面编辑：

![](./img/6d564fe937e2.png "点击放大")

## 11. 拨号设置（com.android.phone）

com.android.phone 为拨号设置模块，内有1个文件，如下图所示：

![](./img/edaa15ccdedc.png)

![](./img/2b6d5b5ca8b5.png)

framework-res-hwext为公共系统控件，设计师可修改拨号设置模块引用的部分。

## 12. 拨号设置-通话自动录音（com.huawei.phone.recorder）

com.huawei.phone.recorder 为拨号设置-通话自动录音模块，内有1个文件：

![](./img/052cad1f73d2.png)

![](./img/7631ce45953b.png)

framework-res-hwext为公共系统控件，设计师可修改拨号设置-通话自动录音模块引用的部分。

## 13. 拨号设置-来电拒接短信（com.android.server.telecom）

com.android.server.telecom 为拨号设置-来电拒接短信模块，内有1个文件：

![](./img/5083636bf527.png)

![](./img/ef59ddf1bcc2.png)

framework-res-hwext为公共系统控件，设计师可修改拨号设置-来电拒接短信模块引用的部分。

## 14. 通话（com.android.incallui）

com.android.incallui为通话模块，内有2个文件：

![](./img/85ebde860c8b.png)

![](./img/033b7cfe8fcf.png)

framework-res-hwext为界面内的公共模块，设计师可修改通话模块引用的部分；theme.xml为通话模块的部分颜色代码，主题工具中此部分颜色代码均合并至其他模块。

## 15. 音频播控中心（com.huawei.mediacontroller）

com.huawei.mediacontroller为音频播控中心模块，内有3个文件：

![](./img/c23cacd917e4.png)

![](./img/45f9c27e30aa.png)

com.huawei.mediacontroller包内所有内容与com.android.systemui一致。

## 16. 描述文件（description.xml）

![](./img/8d72627e5e45.png)

description.xml 描述文件是储存主题基本信息的文件。

主题英文名，中文名，开发者名称，设计师名称四项待主题上线后均不可修改；

设计师名称与设计师的开发者联盟账号绑定；

主题分辨率，主题英文字体，中文字体均采用默认不可以修改；

主题版本号第一版为12.0.0，后续有更新则更改为12.0.X（X为阿拉伯数字按顺序更新）。

### 16.1 小/大主题描述文件说明

![](./img/65ab779d261a.jpg "点击放大")

### 16.2 锁屏主题描述文件说明

![](./img/30aeb8f6b73d.jpg "点击放大")

![](./img/873e82082bbc.png)

设计师单独上传锁屏包时，必须在锁屏包内description.xml文件中添加主题类型字段，锁屏主题的类型字段为：&lt;formatType&gt;1&lt;/formatType&gt;。

### 16.3 图标主题描述文件说明

![](./img/7eda7ed946f5.jpg "点击放大")

![](./img/0224112dc408.png)

设计师单独上传图标包时，必须在图标包内description.xml文件中添加主题类型字段，图标主题的类型字段为：&lt;formatType&gt;2&lt;/formatType&gt;。

## 17. 预览图（preview）

![](./img/8c5e4778a7ae.png)

预览图是主题的一个概览，用户通过预览图判断一个主题的大体风格。所有静态预览图均可使用主题工具直接截图制作。

除cover及图标预览图外预览图的尺寸均为 1080×2160px，cover图的尺寸为1080×1920px，格式为.jpg，图标预览图使用PSD文件替换图标即可。

因数据库图片文件名称长度有限制，主题包内preview文件夹下的预览图总张数需≤20张。

预览图可使用手机截图的方式制作，截图后需按照预览图样板进行部分修改。设计师还可以使用提供的PSD模板制作预览图，详情见[文件说明（PSD）](#section1158051862518)。

所有上传至海外的主题包不能包含短信预览图，即以preview\_mms\_X.jpg命名的图片,但仍然需要保证对短信模块的设计、换肤等。

所有预览图中不能出现谷歌系图标，同时不能出现谷歌搜索等GMS相关内容的展示。

### 17.1 小主题预览图样板

![](./img/a43a72beb2dd.jpg "点击放大")

![](./img/f886fd5574a0.png)

1. cover预览图，顶部和底部80px的范围内，壁纸不允许出现任何内容，包括状态栏信息，按钮等，cover预览图内容应与锁屏内容保持一致。
2. 除cover，icon\_small 、icon\_small\_1以外的其他预览图状态栏只允许出现信号、电量和时间。
3. 预览图所展示的内容应该与手机的实际效果相同。
4. 设计师寄语或者设计说明选做，预览图命名为 preview\_widget\_X.jpg（“X”可为2、3、4 … …）。

### 17.2 大主题预览图样板

![](./img/792cceea3b62.png "点击放大")

![](./img/31a1ab8463c6.png)

除cover，unlock，icon\_small以外的其他预览图状态栏只允许出现电量和时间； 预览图所展示的内容应该与手机的实际效果相同； 大主题必须包含所示预览图。

### 17.3 视频预览文件

主题支持视频动态预览，该文件无需打包在主题内，上传主题时，直接另外在联盟上上传。

* 视频尺寸为：1080×2340px（高端机型适用）、1080×1920px（低端机型适用）。
* 视频格式为MP4，编解码制式要求为H.264，视频大小建议在10MB以内，时长建议在15秒以内。
* 为保证预览效果，请提供能循环播放的视频，确保首尾衔接部分流畅，不会出现画面跳动或者闪烁。

## 18. 文件说明（PSD）

* cover.psd 封面
* icon\_small.psd 小图标预览图
* icon\_small\_1.psd 小图标预览图
* preview\_contacts\_0.psd 拨号盘预览图
* preview\_contacts\_1.psd 联系人预览图
* preview\_contacts\_2.psd 联系人详情预览图
* preview\_icons\_0.psd 图标预览图
* preview\_mms\_0.psd 信息预览图
* preview\_systemui\_0.psd 控制中心预览图
* preview\_unlock\_0.psd 锁屏预览图
* preview\_widget\_0.psd 桌面挂件预览图
* preview\_widget\_1.psd 桌面挂件预览图

## 19. 打包拆包说明

当需要单独修改某一具体代码或图片资源时，需要手动打包拆包。

![](./img/0382ef6736a7.png)

1. HarmonyOS 2.0大主题中，除了preview，unlock，wallpaper，description.xml 四个文件，其余模块均需要单独打包。
2. 主题包的文件名不能出现任何的非英文字符，否则将导致手机解析异常，一般直接使用主题英文名，请注意。

以com.huawei.android.launcher 桌面模块为例：

![](./img/840565e13185.png "点击放大")

以小主题打包为例：

![](./img/8f3bf37bd7be.jpg "点击放大")

## 20. 主题包制作注意事项

* 除了描述文件以外，主题包内各模块不能出现任何的非英文字符；
* 所有的xml文件均要将另存编码修改为UTF-8，如下图：

![](./img/c98263112f42.png "点击放大")

* 点9文件均要进行编译才可以正确读取；
* 为方便新设计师适配主题，HarmonyOS 2.0在线大、小主题模板中的点9文件均已编译；
* 使用截图方式制作的预览图，锁屏预览图的周几全部要通过PS修改为星期几；
* 建议结合HarmonyOS 2.0主题模板、HarmonyOS 2.0预览图psd源文件学习制作；
* 制作好的主题包，可通过电脑导入对应版本的华为手机或者荣耀手机（HarmonyOS 2.0的主题导入HarmonyOS 2.0手机）查看并测试，导入路径为手机内存/Huawei/Themes，之后便可在主题App-我的-我的主题里找到该主题；
* 如有疑问，可在[官方主题论坛](https://developer.huawei.com/consumer/cn/forum/blockdisplay?fid=0101211211623820128)发帖讨论。

## 21. 测试规范

[手机主题测试规范详情请点击查看](https://developer.huawei.com/consumer/cn/doc/content/theme-test-0000001055661259#section3698921142310)

## 22. 内容上传指南

[内容上传指南详情请点击查看](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/uploadguide-0000001054359939/themes-upload-0000001055029726#section96731130204020)

## 23. 附件下载

[附件-大主题模板](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251218173427.46432403572729339600407691291347%3A50001231000000%3A2800%3A74FC5A243A8C174BAA0C24D2AC4290FD00A933ED1570ACD678B869C47BB21019.zip?needInitFileName=true)

[附件-预览图PSD源文件](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251218173427.29717207750947315894480625255071%3A50001231000000%3A2800%3A609C2F768940F160A0ABCF67E14FE0F98B1EC282BD3FC6F08314409246A02415.zip?needInitFileName=true)