---
title: "电量数值"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-audio-0000002405271209/themes-audio-spec-0000002471394974/themes-audio-spec-guide-0000002429826773/themes-audio-spec-guide-powernumber-0000002396307116
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-audio-0000002405271209/themes-audio-spec-0000002471394974/themes-audio-spec-guide-0000002429826773/themes-audio-spec-guide-powernumber-0000002396307116
last_sync: 2026-06-07
sync_hash: 6a75fa8d
---
# 电量数值

<strong>表1</strong>

| 参数 | 类型 | 注释 |
| --- | --- | --- |
| percentageText | 对象 | 必须 |
| percentageText.location | 数值 | 文本中心点坐标占比，以弹窗背景为参照物，弹窗背景左上角的点为原点（0,0），右下角的点为（1,1）  计算方法：坐标点的X轴像素位置值/1440，坐标点的Y轴像素位置值/1792（小数保留8位截取）  取值范围：0-1  示例：若坐标点的像素位置值为（1020,1392），则用1020除于1440，用1392除于1792，得到数再截取8位小数，最后得到（0.70833333,0.77678571） |
| percentageText.textSize | 数值 | 字体高度占比  计算方法：字体高度像素值/1440（小数保留8位截取）  默认值：0.02777777  示例：若字体高度像素值值为80，则用80除于1440得到数截取8位小数得到0.05555555 |
| percentageText.textColor | 数值 | 文字的颜色，填写颜色的RBG值，不填写显示默认值#000000 |