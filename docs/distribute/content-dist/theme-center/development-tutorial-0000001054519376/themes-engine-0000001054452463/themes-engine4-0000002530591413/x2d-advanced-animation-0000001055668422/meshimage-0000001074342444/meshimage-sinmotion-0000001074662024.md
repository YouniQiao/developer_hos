---
title: "网格化-水波纹&lt;MeshImage-SinMotion&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/meshimage-0000001074342444/meshimage-sinmotion-0000001074662024
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/meshimage-0000001074342444/meshimage-sinmotion-0000001074662024
last_sync: 2026-06-07
sync_hash: 4dfcc890
---
# 网格化-水波纹&lt;MeshImage-SinMotion&gt;

## 动效概述

可实现局部水波荡漾、迎风飘舞等效果。局部水波荡漾、飘舞区域与[局部位移区域](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/meshimage-0000001074342444/meshimage-translation-0000001074502054#section1451516242434)计算方法一致。

## 场景举例

* 海底的水草晃动。
* 衣服，裙子，头发的飘动。
* 彩旗飘飘。
* 柳枝随风飘动。

## XML规范

```
<MeshImage x="" y="" w="" h="" mesh="" center_point="" src="">
     <SinMotion a="" factor_k="" no_move_distance_x="" no_move_distance_y=""/>
</MeshImage>
```

* <strong>MeshImage</strong> <strong>参数说明</strong>

详见[MeshImage参数说明](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/meshimage-0000001074342444/meshimage-translation-0000001074502054#section8176183645319)。

* <strong>SinMotion</strong> <strong>参数说明</strong>

| 参 数 | 类 型 | 选 项 | 注 释 |
| --- | --- | --- | --- |
| a | 数值 | 选填 | 水波幅度(振幅)，取实数，单位为像素，默认为20，支持表达式。 |
| factor\_k | 数值 | 选填 | 相位，k值可以产生水波移动，值越大运动越快，值越小运动越缓，默认0.2，支持表达式。 |
| no\_move\_distance\_x | 数值 | 选填 | x轴方向不动的点，离中心点大于no\_move\_distance\_x距离的点无水波荡漾。设置的值需大于0，如果为0值则被认为是图片宽度，默认为图片宽度，单位为像素，支持表达式。 |
| no\_move\_distance\_y | 数值 | 选填 | y轴方向不动的点，离中心点大于no\_move\_distance\_y距离的点无水波荡漾。设置的值需大于0，如果为0值则被认为是图片高度，默认为图片高度，单位为像素，支持表达式。 |

## 效果和脚本示例

不用点击图片，局部区域进行水波荡漾动画。

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173502.73504914729957168664499260492987:20260601222001:2800:7F895075D50C11E5BD9721789C0F24C1C878732BC004A48F4A761890A9AB1566.mp4)

```
<MeshImage x="0" y="0" w="1080" h="1920" mesh="20,20" center_point="221" src="text_bar.png">
      <SinMotion a="20" factor_k="0.1" no_move_distance_x="200" no_move_distance_y="200"/>
</MeshImage>
```

## 制作视频

[](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20251218173502.02905684730561201908090329819607:20260601222001:2800:4EF33BB0B9327FC020B9F8972199F97B0C20CD0810AB836DCE2CD82704F917BC.mp4)