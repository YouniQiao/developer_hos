---
title: "运营文本"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-audio-0000002405271209/themes-audio-spec-0000002471394974/themes-audio-spec-guide-0000002429826773/themes-audio-spec-guide-operationtext-0000002429826797
format: md
---


# 运营文本

<strong>表1</strong>

| 参数 | 类型 | 注释 |
| --- | --- | --- |
| textPrimaryColor | 字符串 | 主文本字体颜色，填写颜色的RBG值，不填写默认为黑色。 |
| textSecondaryColor | 字符串 | 副文本字体颜色，填写颜色的RBG值，不填写默认为黑色。 |
| locationY | 数值 | 运营位区域中心点坐标的Y轴占比，以弹窗背景为参照物，弹窗背景左上角的点为原点（0,0），右下角的点为（1,1）  计算方法：坐标点的Y轴像素位置值/1792（小数保留8位截取）  取值范围：0-1  默认值：0.77678571  示例：若坐标点的Y轴像素位置值为1392，则用1392除于1792得到数再截取8位小数，最后得到0.77678571 |

![](./img/61e0b7110a92.png)

运营文本区域大小宽高为1312×192 px，左右居中，仅可调上下位置。

运营文本的字体跟随手机系统设置的字体。