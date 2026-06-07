---
title: "电量电池图标"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-audio-0000002405271209/themes-audio-spec-0000002471394974/themes-audio-spec-guide-0000002429826773/themes-audio-spec-guide-powercon-0000002429826785
format: md
---


# 电量电池图标

<strong>表1</strong>

| 参数 | 类型 | 注释 |
| --- | --- | --- |
| levelIcon | 对象 | 电池等级图标对象，必须 |
| levelIcon.location | 数值 | 图标中心点坐标占比，以弹窗背景为参照物，弹窗背景左上角的点为原点（0,0），右下角的点为（1,1）  计算方法：坐标点的X轴像素位置值/1440，坐标点的Y轴像素位置值/1792（小数保留8位截取）  取值范围：0-1  示例：若坐标点的像素位置值为（1020,1392），则用1020除于1440，用1392除于1792，得到数再截取8位小数，最后得到（0.70833333,0.77678571） |
| levelIcon.size | 数值 | 图标宽高占比  计算方法：图标宽度像素值/1440，图标高度像素值/1792（小数保留8位截取）  默认值：0.07222222,0.04464288  示例：若图标宽度像素值为104，图标高度像素值为80，则用104除于1440，用80除于1792，再截取8位小数，最后得到0.07222222,0.04464288  注意：系统图标需要保持104:80，不然会变形 |
| levelIcon.sysBorderColor | 数值 | 系统电池图标边框的颜色，填写颜色的RBG值，不填写显示默认值#000000。（仅对系统电池图标生效） |
| levelIcon.sysSafeColor | 字符串 | 系统电量条安全电量的颜色，填写颜色的RBG值，不填写显示默认值#7DD12A。  修改后的电量条安全色不可接近提示色（#FF9B1A）和电量警示色（#FF3320）。（仅对系统电池图标生效） |
| levelIcon.resources | 对象 | 自定义电池块的样式，未指定则使用系统电池图标。  格式：png，  "level5": "battery\_5.png",  "level10": "battery\_10.png",  "level20": "battery\_20.png",  "level30": "battery\_30.png",  "level40": "battery\_40.png",  "level50": "battery\_50.png",  "level60": "battery\_60.png",  "level70": "battery\_70.png",  "level80": "battery\_80.png",  "level90": "battery\_90.png",  "level95": "battery\_95.png",  "level100": "battery\_100.png" |