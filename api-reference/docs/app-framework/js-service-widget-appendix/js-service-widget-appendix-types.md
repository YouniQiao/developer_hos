---
title: "数据类型说明"
upstream_id: "harmonyos-references/js-service-widget-appendix-types"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:30.551447"
---

# 数据类型说明

![](./img/note_3.0-zh-cn.png) 从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

#### 长度类型

| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| length | string | number | 用于描述尺寸单位，输入为number类型时，使用px单位。输入为string类型时，需要显式指定像素单位，当前支持的像素单位有： - px：逻辑尺寸单位。 - fp：字体尺寸单位，随系统字体大小设置发生变化，仅支持文本类组件设置相应的字体大小。 |
| percentage | string | 百分比尺寸单位，如“50%”。 |

#### 颜色类型

| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| color | string |颜色枚举 | 用于描述颜色信息。 字符串格式如下： - 'rgb(255, 255, 255)'。 - 'rgba(255, 255, 255, 1.0)'。 - HEX格式：'#rrggbb'，'#aarrggbb'。 - 枚举格式：'black'，'white'。 JS脚本中不支持颜色枚举格式。 |

表1 当前支持的颜色枚举

| 枚举名称 | 对应颜色 | 颜色 |
| --- | --- | --- |
| aliceblue | #f0f8ff | ![](./img/zh-cn_image_0000002626231132.png) |
| antiquewhite | #faebd7 | ![](./img/zh-cn_image_0000002626071222.png) |
| aqua | #00ffff | ![](./img/zh-cn_image_0000002656470499.png) |
| aquamarine | #7fffd4 | ![](./img/zh-cn_image_0000002656350549.png) |
| azure | #f0ffff | ![](./img/zh-cn_image_0000002626231134.png) |
| beige | #f5f5dc | ![](./img/zh-cn_image_0000002626071224.png) |
| bisque | #ffe4c4 | ![](./img/zh-cn_image_0000002656470501.png) |
| black | #000000 | ![](./img/zh-cn_image_0000002656350551.png) |
| blanchedalmond | #ffebcd | ![](./img/zh-cn_image_0000002626231136.png) |
| blue | #0000ff | ![](./img/zh-cn_image_0000002626071226.png) |
| blueviolet | #8a2be2 | ![](./img/zh-cn_image_0000002656470503.png) |
| brown | #a52a2a | ![](./img/zh-cn_image_0000002656350553.png) |
| burlywood | #deb887 | ![](./img/zh-cn_image_0000002626231138.png) |
| cadetblue | #5f9ea0 | ![](./img/zh-cn_image_0000002626071228.png) |
| chartreuse | #7fff00 | ![](./img/zh-cn_image_0000002656470505.png) |
| chocolate | #d2691e | ![](./img/zh-cn_image_0000002656350555.png) |
| coral | #ff7f50 | ![](./img/zh-cn_image_0000002626231140.png) |
| cornflowerblue | #6495ed | ![](./img/zh-cn_image_0000002626071230.png) |
| cornsilk | #fff8dc | ![](./img/zh-cn_image_0000002656470507.png) |
| crimson | #dc143c | ![](./img/zh-cn_image_0000002656350557.png) |
| cyan | #00ffff | ![](./img/zh-cn_image_0000002626231142.png) |
| darkblue | #00008b | ![](./img/zh-cn_image_0000002626071232.png) |
| darkcyan | #008b8b | ![](./img/zh-cn_image_0000002656470509.png) |
| darkgoldenrod | #b8860b | ![](./img/zh-cn_image_0000002656350559.png) |
| darkgray | #a9a9a9 | ![](./img/zh-cn_image_0000002626231144.png) |
| darkgreen | #006400 | ![](./img/zh-cn_image_0000002626071234.png) |
| darkgrey | #a9a9a9 | ![](./img/zh-cn_image_0000002656470511.png) |
| darkkhaki | #bdb76b | ![](./img/zh-cn_image_0000002656350561.png) |
| darkmagenta | #8b008b | ![](./img/zh-cn_image_0000002626231146.png) |
| darkolivegreen | #556b2f | ![](./img/zh-cn_image_0000002626071236.png) |
| darkorange | #ff8c00 | ![](./img/zh-cn_image_0000002656470513.png) |
| darkorchid | #9932cc | ![](./img/zh-cn_image_0000002656350563.png) |
| darkred | #8b0000 | ![](./img/zh-cn_image_0000002626231148.png) |
| darksalmon | #e9967a | ![](./img/zh-cn_image_0000002626071238.png) |
| darkseagreen | #8fbc8f | ![](./img/zh-cn_image_0000002656470515.png) |
| darkslateblue | #483d8b | ![](./img/zh-cn_image_0000002656350565.png) |
| darkslategray | #2f4f4f | ![](./img/zh-cn_image_0000002626231150.png) |
| darkslategrey | #2f4f4f | ![](./img/zh-cn_image_0000002626071240.png) |
| darkturquoise | #00ced1 | ![](./img/zh-cn_image_0000002656470517.png) |
| darkviolet | #9400d3 | ![](./img/zh-cn_image_0000002656350567.png) |
| deeppink | #ff1493 | ![](./img/zh-cn_image_0000002626231152.png) |
| deepskyblue | #00bfff | ![](./img/zh-cn_image_0000002626071242.png) |
| dimgray | #696969 | ![](./img/zh-cn_image_0000002656470519.png) |
| dimgrey | #696969 | ![](./img/zh-cn_image_0000002656350569.png) |
| dodgerblue | #1e90ff | ![](./img/zh-cn_image_0000002626231154.png) |
| firebrick | #b22222 | ![](./img/zh-cn_image_0000002626071244.png) |
| floralwhite | #fffaf0 | ![](./img/zh-cn_image_0000002656470521.png) |
| forestgreen | #228b22 | ![](./img/zh-cn_image_0000002656350571.png) |
| fuchsia | #ff00ff | ![](./img/zh-cn_image_0000002626231156.png) |
| gainsboro | #dcdcdc | ![](./img/zh-cn_image_0000002626071246.png) |
| ghostwhite | #f8f8ff | ![](./img/zh-cn_image_0000002656470523.png) |
| gold | #ffd700 | ![](./img/zh-cn_image_0000002656350573.png) |
| goldenrod | #daa520 | ![](./img/zh-cn_image_0000002626231158.png) |
| gray | #808080 | ![](./img/zh-cn_image_0000002626071248.png) |
| green | #008000 | ![](./img/zh-cn_image_0000002656470525.png) |
| greenyellow | #adff2f | ![](./img/zh-cn_image_0000002656350575.png) |
| grey | #808080 | ![](./img/zh-cn_image_0000002626231160.png) |
| honeydew | #f0fff0 | ![](./img/zh-cn_image_0000002626071250.png) |
| hotpink | #ff69b4 | ![](./img/zh-cn_image_0000002656470527.png) |
| indianred | #cd5c5c | ![](./img/zh-cn_image_0000002656350577.png) |
| indigo | #4b0082 | ![](./img/zh-cn_image_0000002626231162.png) |
| ivory | #fffff0 | ![](./img/zh-cn_image_0000002626071252.png) |
| khaki | #f0e68c | ![](./img/zh-cn_image_0000002656470529.png) |
| lavender | #e6e6fa | ![](./img/zh-cn_image_0000002656350579.png) |
| lavenderblush | #fff0f5 | ![](./img/zh-cn_image_0000002626231164.png) |
| lawngreen | #7cfc00 | ![](./img/zh-cn_image_0000002626071254.png) |
| lemonchiffon | #fffacd | ![](./img/zh-cn_image_0000002656470531.png) |
| lightblue | #add8e6 | ![](./img/zh-cn_image_0000002656350581.png) |
| lightcoral | #f08080 | ![](./img/zh-cn_image_0000002626231166.png) |
| lightcyan | #e0ffff | ![](./img/zh-cn_image_0000002626071256.png) |
| lightgoldenrodyellow | #fafad2 | ![](./img/zh-cn_image_0000002656470533.png) |
| lightgray | #d3d3d3 | ![](./img/zh-cn_image_0000002656350583.png) |
| lightgreen | #90ee90 | ![](./img/zh-cn_image_0000002626231168.png) |
| lightpink | #ffb6c1 | ![](./img/zh-cn_image_0000002626071258.png) |
| lightsalmon | #ffa07a | ![](./img/zh-cn_image_0000002656470535.png) |
| lightseagreen | #20b2aa | ![](./img/zh-cn_image_0000002656350585.png) |
| lightskyblue | #87cefa | ![](./img/zh-cn_image_0000002626231170.png) |
| lightslategray | #778899 | ![](./img/zh-cn_image_0000002626071260.png) |
| lightslategrey | #778899 | ![](./img/zh-cn_image_0000002656470537.png) |
| lightsteelblue | #b0c4de | ![](./img/zh-cn_image_0000002656350587.png) |
| lightyellow | #ffffe0 | ![](./img/zh-cn_image_0000002626231174.png) |
| lime | #00ff00 | ![](./img/zh-cn_image_0000002626071262.png) |
| limegreen | #32cd32 | ![](./img/zh-cn_image_0000002656470539.png) |
| linen | #faf0e6 | ![](./img/zh-cn_image_0000002656350589.png) |
| magenta | #ff00ff | ![](./img/zh-cn_image_0000002626231176.png) |
| maroon | #800000 | ![](./img/zh-cn_image_0000002626071264.png) |
| mediumaquamarine | #66cdaa | ![](./img/zh-cn_image_0000002656470541.png) |
| mediumblue | #0000cd | ![](./img/zh-cn_image_0000002656350591.png) |
| mediumorchid | #ba55d3 | ![](./img/zh-cn_image_0000002626231178.png) |
| mediumpurple | #9370db | ![](./img/zh-cn_image_0000002626071266.png) |
| mediumseagreen | #3cb371 | ![](./img/zh-cn_image_0000002656470543.png) |
| mediumslateblue | #7b68ee | ![](./img/zh-cn_image_0000002656350593.png) |
| mediumspringgreen | #00fa9a | ![](./img/zh-cn_image_0000002626231180.png) |
| mediumturquoise | #48d1cc | ![](./img/zh-cn_image_0000002626071268.png) |
| mediumvioletred | #c71585 | ![](./img/zh-cn_image_0000002656470545.png) |
| midnightblue | #191970 | ![](./img/zh-cn_image_0000002656350595.png) |
| mintcream | #f5fffa | ![](./img/zh-cn_image_0000002626231182.png) |
| mistyrose | #ffe4e1 | ![](./img/zh-cn_image_0000002626071270.png) |
| moccasin | #ffe4b5 | ![](./img/zh-cn_image_0000002656470547.png) |
| navajowhite | #ffdead | ![](./img/zh-cn_image_0000002656350597.png) |
| navy | #000080 | ![](./img/zh-cn_image_0000002626231184.png) |
| oldlace | #fdf5e6 | ![](./img/zh-cn_image_0000002626071272.png) |
| olive | #808000 | ![](./img/zh-cn_image_0000002656470549.png) |
| olivedrab | #6b8e23 | ![](./img/zh-cn_image_0000002656350599.png) |
| orange | #ffa500 | ![](./img/zh-cn_image_0000002626231186.png) |
| orangered | #ff4500 | ![](./img/zh-cn_image_0000002626071274.png) |
| orchid | #da70d6 | ![](./img/zh-cn_image_0000002656470551.png) |
| palegoldenrod | #eee8aa | ![](./img/zh-cn_image_0000002656350601.png) |
| palegreen | #98fb98 | ![](./img/zh-cn_image_0000002626231188.png) |
| paleturquoise | #afeeee | ![](./img/zh-cn_image_0000002626071276.png) |
| palevioletred | #db7093 | ![](./img/zh-cn_image_0000002656470553.png) |
| papayawhip | #ffefd5 | ![](./img/zh-cn_image_0000002656350603.png) |
| peachpuff | #ffdab9 | ![](./img/zh-cn_image_0000002626231190.png) |
| peru | #cd853f | ![](./img/zh-cn_image_0000002626071278.png) |
| pink | #ffc0cb | ![](./img/zh-cn_image_0000002656470555.png) |
| plum | #dda0dd | ![](./img/zh-cn_image_0000002656350605.png) |
| powderblue | #b0e0e6 | ![](./img/zh-cn_image_0000002626231192.png) |
| purple | #800080 | ![](./img/zh-cn_image_0000002626071280.png) |
| rebeccapurple | #663399 | ![](./img/zh-cn_image_0000002656470557.png) |
| red | #ff0000 | ![](./img/zh-cn_image_0000002656350607.png) |
| rosybrown | #bc8f8f | ![](./img/zh-cn_image_0000002626231194.png) |
| royalblue | #4169e1 | ![](./img/zh-cn_image_0000002626071282.png) |
| saddlebrown | #8b4513 | ![](./img/zh-cn_image_0000002656470559.png) |
| salmon | #fa8072 | ![](./img/zh-cn_image_0000002656350609.png) |
| sandybrown | #f4a460 | ![](./img/zh-cn_image_0000002626231196.png) |
| seagreen | #2e8b57 | ![](./img/zh-cn_image_0000002626071284.png) |
| seashell | #fff5ee | ![](./img/zh-cn_image_0000002656470561.png) |
| sienna | #a0522d | ![](./img/zh-cn_image_0000002656350611.png) |
| silver | #c0c0c0 | ![](./img/zh-cn_image_0000002626231198.png) |
| skyblue | #87ceeb | ![](./img/zh-cn_image_0000002626071286.png) |
| slateblue | #6a5acd | ![](./img/zh-cn_image_0000002656470563.png) |
| slategray | #708090 | ![](./img/zh-cn_image_0000002656350613.png) |
| slategrey | #708090 | ![](./img/zh-cn_image_0000002656350613.png) |
| snow | #fffafa | ![](./img/zh-cn_image_0000002626231200.png) |
| springgreen | #00ff7f | ![](./img/zh-cn_image_0000002626071288.png) |
| steelblue | #4682b4 | ![](./img/zh-cn_image_0000002656470565.png) |
| tan | #d2b48c | ![](./img/zh-cn_image_0000002656350615.png) |
| teal | #008080 | ![](./img/zh-cn_image_0000002626231202.png) |
| thistle | #d8bfd8 | ![](./img/zh-cn_image_0000002626071290.png) |
| tomato | #ff6347 | ![](./img/zh-cn_image_0000002656470567.png) |
| turquoise | #40e0d0 | ![](./img/zh-cn_image_0000002656350617.png) |
| violet | #ee82ee | ![](./img/zh-cn_image_0000002626231204.png) |
| wheat | #f5deb3 | ![](./img/zh-cn_image_0000002626071292.png) |
| white | #ffffff | ![](./img/zh-cn_image_0000002656470569.png) |
| whitesmoke | #f5f5f5 | ![](./img/zh-cn_image_0000002656350619.png) |
| yellow | #ffff00 | ![](./img/zh-cn_image_0000002626231206.png) |
| yellowgreen | #9acd32 | ![](./img/zh-cn_image_0000002626071294.png) |
