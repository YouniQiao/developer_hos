---
title: "内容审核规范"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/neirongshenheguifan-0000001419878881
---


import MergeTable from '@site/src/components/MergeTable';

# 内容审核规范

所有作品必须在符合[内容信息规范](https://developer.huawei.com/consumer/cn/doc/distribution/content/content-information-test-0000001057563280)、[设计元素规范](https://developer.huawei.com/consumer/cn/doc/distribution/content/design-elements-0000001057325102)及[测试规范](https://developer.huawei.com/consumer/cn/doc/distribution/content/theme-test-0000001055661259#section3698921142310)的基础上进行定价。

<strong>1.1 皮肤内容定价规范</strong>

资源上传至国内的价格档汇总：

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |



<MergeTable
  headers={['价格档位', '美观/新颖', '', '具备能力', '', '', 'IP授权']}
  rows={
    [null, '背景', '键盘字体/贴图', '动效', '动画', '创意功能', null],
    ['等级1', { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }],
    ['免费', null, null, null, null, null, null],
    ['等级2', { text: '√', rowspan: 1, colspan: 2 }, null, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }],
    ['1元', { text: '至少具备一项', rowspan: 1, colspan: 2 }, null, null, null, null, null],
    ['等级3', { text: '√', rowspan: 1, colspan: 2 }, null, { text: '√', rowspan: 1, colspan: 3 }, null, null, { text: '×', rowspan: 2, colspan: 1 }],
    ['2元', { text: '至少具备一项', rowspan: 1, colspan: 2 }, null, { text: '至少具备一项', rowspan: 1, colspan: 3 }, null, null, null],
    ['等级4', { text: '√', rowspan: 1, colspan: 2 }, null, { text: '√', rowspan: 1, colspan: 3 }, null, null, { text: '×', rowspan: 2, colspan: 1 }],
    ['3元', { text: '至少具备一项', rowspan: 1, colspan: 2 }, null, { text: '至少具备两项', rowspan: 1, colspan: 3 }, null, null, null],
    ['等级5', { text: '√', rowspan: 1, colspan: 2 }, null, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '×', rowspan: 2, colspan: 1 }, { text: '√', rowspan: 2, colspan: 1 }],
    ['(3,6]元', { text: '至少具备一项', rowspan: 1, colspan: 2 }, null, null, null, null, null],
    ['等级5', { text: '√', rowspan: 1, colspan: 2 }, null, { text: '√', rowspan: 1, colspan: 3 }, null, null, { text: '√', rowspan: 2, colspan: 1 }],
    ['（6,12]元', { text: '至少具备一项', rowspan: 1, colspan: 2 }, null, { text: '至少具备一项', rowspan: 1, colspan: 3 }, null, null, null]
  }
/>


说明：

“×” 表示非必选

创意功能：音效、盲打键盘、机械键盘等

<strong>1.2 皮肤页面审核规范</strong>

以下内容仅限键盘皮肤内容。

1.键盘输入页面显示

|  |  |  |
| --- | --- | --- |



<MergeTable
  headers={['预处理条件', '测试步骤', '预期结果']}
  rows={
    [{ text: '1.横/竖屏 2.输入方式：26键、9键、笔画、五笔 3.键盘模式：普通、单手、悬浮（仅折叠机、平板）、拇指 4.深色模式关闭/开启', rowspan: 10, colspan: 1 }, { text: '1.拉起输入法键盘，点击对应图标 2.检查键盘侧各对应页面、功能显示', rowspan: 10, colspan: 1 }, '1.键盘各页面显示适配皮肤，显示正常'],
    [null, null, '1.进入键盘侧表情页面 2.键盘侧各表情页面适配皮肤，显示正常'],
    [null, null, '2.首个候选词会高亮显示'],
    [null, null, '2.长按候选词，界面ui适配皮肤，显示正常'],
    [null, null, '1.进入拼音串编辑框页面 2.拼音串编辑框和拼音串编辑框关闭按钮适配皮肤，显示正常'],
    [null, null, '2.上滑气泡适配皮肤，显示正常'],
    [null, null, '2长按键盘按键气泡显示适配皮肤，显示正常'],
    [null, null, '1.更多候选词页面适配皮肤，显示正常'],
    [null, null, '1.更多符号页面显示适配皮肤，显示正常 2.符号分组页面适配皮肤，显示正常'],
    [null, null, '1.键盘左上角menu图标显示正常']
  }
/>


2.menu二级菜单页面显示

|  |  |  |
| --- | --- | --- |



<MergeTable
  headers={['预处理条件', '测试步骤', '预期结果']}
  rows={
    [{ text: '1.横/竖屏 2.键盘模式：普通、单手、悬浮（仅折叠机、平板）、拇指 3.深色模式关闭/开启', rowspan: 13, colspan: 1 }, { text: '1.输入框中拉起输入法键盘 2.点击左上角menu图标，进入二级菜单页面 3.点击对应图标 4.检查对应页面、功能显示', rowspan: 13, colspan: 1 }, '1.二级菜单页面适配皮肤，显示正常'],
    [null, null, '1.进入文字编辑页面 2.文字编辑页面适配皮肤，显示正常'],
    [null, null, '1.进入剪贴板页面 2.剪贴板页面适配皮肤，显示正常 3.弹起【清空】弹框页面，点击【取消】【确认】显示正常'],
    [null, null, '1.进入按键反馈页面 2.按键反馈页面适配皮肤，显示正常'],
    [null, null, '1.进入键盘布局页面 2.键盘布局页面适配皮肤，26键键盘布局图标默认选中，并且高亮显示'],
    [null, null, '1.进入键盘模式页面 2.键盘模式页面适配皮肤，普通键盘图标默认选中，并且高亮显示'],
    [null, null, '1.进入语录（鸿蒙5.0称常用语）页面 2.语录（鸿蒙5.0称常用语）页面适配皮肤，显示正常'],
    [null, null, '1.【上滑输入】图标适配皮肤，并且高亮显示 2.【上滑输入】图标适配皮肤，取消高亮显示'],
    [null, null, '1.【繁体输入】图标适配皮肤，并且高亮显示 2.【繁体输入】图标适配皮肤，取消高亮显示'],
    [null, null, '1.进入编辑键盘页面，显示灰色蒙层 2.键盘点击之后，页面显示正常适配皮肤'],
    [null, null, '1.检查候选词表情显示正常，大小没有超过候选词栏高度 2.检查候选词英文字母显示正常，大小没有超过候选词栏高度'],
    [null, null, '1.翻译输入框背景、暗纹显示正常'],
    [null, null, '1.帮写输入框背景显示正常']
  }
/>


3.emoji页面显示

|  |  |  |
| --- | --- | --- |
| 预处理条件 | 测试步骤 | 预期结果 |
| 1.横/竖屏  2.键盘模式：普通、单手、悬浮（仅折叠机、平板）、拇指  3.深色模式关闭/开启 | 1.输入框中拉起输入法键盘，点击对应图标  2.检查键盘侧各对应页面显示 | 1.进入键盘侧表情页面  2.键盘侧各表情页面适配皮肤，显示正常  3.点击emoji-密语、删除等适配皮肤 |

4.其他检查

|  |  |  |
| --- | --- | --- |
| 预处理条件 | 测试步骤 | 预期结果 |
| 1.横/竖屏  2.输入方式：26键、九键、笔画、手写/五笔  3.键盘模式：普通、单手、悬浮（仅折叠机、平板）、拇指  4.深色模式关闭/开启 | 1.拉起输入法键盘  2.点击【123】数字按键，检查九宫格数字页面显示  3.在邮箱输入框汇中拉起输入法键盘  4.在密码输入框汇总拉起华为安全输入法键盘  5.在数字输入框中拉起输入法键盘 | 2.九宫格数字页面显示适配皮肤，显示正常  3.在邮箱键盘页面显示适配皮肤，显示正常  4.密码键盘页面显示适配皮肤，显示正常  5.页面显示适配皮肤，显示正常  6.页面显示适配皮肤，显示正常 |

<strong>1.3 文字审核规范</strong>

1. 资源命名规范

资源名称符合信、达、雅的要求，以文雅、简洁为佳；

(1)表情包：不超过 30 个字，9 个字以内显示效果最佳，不能使用标点符号和空格;

(2)表情图：不超过 5 个字，不能使用标点符号或空格；

(3)皮肤：不超过7个字，不能使用标点符号或空格；

2. 资源简介规范

避免和名称重复，能够展示出内容的故事或特点；简介中不可出现福利、返现、赠送等诱导用户购买或下载的内容。

(1)表情包：不超过15个字，尽量避免包含标点符号;

(2)皮肤：不超过15个字，尽量避免包含标点符号；

3. 资源预览图规范

为保持合规性，画面、图标等内容均不可带有“金钱元素或货币符号”。

(1)表情包：1张，从表情图中挑选，亦可单独绘制;

(2)皮肤：4张（1张商店主页预览图，3张皮肤详情页预览图），尺寸：1248\*960，大小：不超过500kb；格式：png；

4. 关键词规范

不同资源内容的关键词分为多个维度，您可根据实际情况进行关键词填加；为提升标签的准确度，建议您不要打同义词标签和无意义标签。

Ps:每个标签不超过 10 个字符，不能使用标点符号和空格;

|  |  |  |  |
| --- | --- | --- | --- |



<MergeTable
  headers={['内容类别', '标签个数', '标签维度', '示例']}
  rows={
    [{ text: '表情包', rowspan: 4, colspan: 1 }, { text: '4', rowspan: 4, colspan: 1 }, '形象载体', '萌宠'],
    [null, null, '应用场景', '日常'],
    [null, null, '情感情绪', '开心'],
    [null, null, '行为目的', '点赞'],
    [{ text: '表情图', rowspan: 4, colspan: 1 }, { text: '4-5', rowspan: 4, colspan: 1 }, '形象载体', '萌宠,兔子（至少一个）'],
    [null, null, '应用场景', '工作'],
    [null, null, '情感情绪', '开心'],
    [null, null, '行为目的', '点赞'],
    [{ text: '皮肤', rowspan: 3, colspan: 1 }, { text: '4', rowspan: 3, colspan: 1 }, '形象载体', '卡通,熊本熊'],
    [null, null, '内容风格', '可爱'],
    [null, null, '功能属性', '盲打（没有特殊效果，可填“普通”）']
  }
/>


5. 其他规范

游戏、影视和明星以上三类资源，上架需进行统一评审，评审通过后方可上架。

<strong>1.4 资源元素审核规范</strong>

华为小艺输入法致力于传达生活美学，享受美好生活的理念，欢迎设计师提供文雅、商务、卡通、简约、机械等风格的优质资源。

建议设计尽量遵守以下原则：

<strong>1.</strong> <strong>键盘皮肤</strong>

风格协调性

键盘背景、图标、字体的整体风格需要一致，例如：商务风格图标不可结合卡通类背景皮肤上架。

图标可识别性

在保证整体和谐前提下，建议图标、文字颜色与皮肤大背景颜色有一定区别，清晰可识别。

交互准确性

实际应用效果、预览图应与描述说明一致，交互类不可出现bug；每个按键要有明显的按下效果，所有按键按下状态，位置和大小需保持和非按下状态一致；

色彩合理性

色彩搭配和谐，不建议出现视觉上会引起不适感的配色。

搭配创意性

不建议使用简单拼凑、无美感的图片。

构图美观性

不建议使用画面变形杂乱、马赛克等素材，保持画面简洁清晰。

背景清晰度

不建议使用模糊图片，否则影响用户视觉体验。

避免同质化

避免上传同质程度过高的内容，不能仅修改颜色、个别元素、动效后再次上传。

<strong>2.</strong> <strong>表情包</strong>

1.符合《小艺输入法表情制作规范》。

2.不能直接提交未添加任何艺术效果的照片作品。

3.表情主图、表情缩略图、表情推广图等内容须对应。

4.不能含有错别字或错误拼写。

5.须易于用户辨识或理解。

6.文字信息不能含有仅部分手机终端可显示的字符。

7.不得包含网址链接。