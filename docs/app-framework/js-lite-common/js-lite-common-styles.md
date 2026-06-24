---
title: "通用样式"
upstream_id: "harmonyos-references/js-lite-common-styles"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:16.959697"
---

# 通用样式

组件普遍支持的可以在style或css中设置组件外观样式。

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| width | | 5+ | - | 否 | 设置组件自身的宽度。 未设置时组件宽度默认为0。 |
| height | | 5+ | - | 否 | 设置组件自身的高度。 未设置时组件高度默认为0。 |
| padding | | 0 | 否 | 使用简写属性设置所有的内边距属性。 该属性可以有1到4个值： - 指定一个值时，该值指定四个边的内边距。 - 指定两个值时，第一个值指定上下两边的内边距，第二个指定左右两边的内边距。 - 指定三个值时，第一个指定上边的内边距，第二个指定左右两边的内边距，第三个指定下边的内边距。 - 指定四个值时分别为上、右、下、左边的内边距（顺时针顺序）。 |
| padding-[left|top|right|bottom] | | 0 | 否 | 设置左、上、右、下内边距属性。 |
| margin | | 5+ | 0 | 否 | 使用简写属性设置所有的外边距属性，该属性可以有1到4个值。 - 只有一个值时，这个值会被指定给全部的四个边。 - 两个值时，第一个值被匹配给上和下，第二个值被匹配给左和右。 - 三个值时，第一个值被匹配给上, 第二个值被匹配给左和右，第三个值被匹配给下。 - 四个值时，会依次按上、右、下、左的顺序匹配 (即顺时针顺序)。 |
| margin-[left|top|right|bottom] | | 5+ | 0 | 否 | 设置左、上、右、下外边距属性。 |
| border-width | | 0 | 否 | 使用简写属性设置元素的所有边框宽度。 |
| border-color | | black | 否 | 使用简写属性设置元素的所有边框颜色。 |
| border-radius | | - | 否 | border-radius属性是设置元素的外边框圆角半径。 |
| background-color | | - | 否 | 设置背景颜色。 |
| opacity5+ | number | 1 | 否 | 元素的透明度，取值范围为0到1，1表示为不透明，0表示为完全透明。 |
| display | string | flex | 否 | 确定一个元素所产生的框的类型，可选值为： - flex：弹性布局。 - none：不渲染此元素。 |
| [left|top] | | 6+ | - | 否 | left|top确定元素的偏移位置。 - left属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。 - top属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。 |

![](./img/note_3.0-zh-cn.png) 通用样式都不是必填项。

目前，样式支持的颜色格式如下：

- rgb(255, 255, 255)
- rgba(255, 255, 255, 1.0)
- HEX格式：#rrggbb，#aarrggbb
- 枚举格式：black，white等，详见 **表1** 当前支持的颜色枚举。Script脚本中不支持枚举格式。

表1 当前支持的颜色枚举

| 枚举名称 | 对应颜色 | 颜色 |
| --- | --- | --- |
| aliceblue | #f0f8ff | ![](./img/zh-cn_image_0000002626231030.png) |
| antiquewhite | #faebd7 | ![](./img/zh-cn_image_0000002626071120.png) |
| aqua | #00ffff | ![](./img/zh-cn_image_0000002656470397.png) |
| aquamarine | #7fffd4 | ![](./img/zh-cn_image_0000002656350445.png) |
| azure | #f0ffff | ![](./img/zh-cn_image_0000002626231032.png) |
| beige | #f5f5dc | ![](./img/zh-cn_image_0000002626071122.png) |
| bisque | #ffe4c4 | ![](./img/zh-cn_image_0000002656470399.png) |
| black | #000000 | ![](./img/zh-cn_image_0000002656350447.png) |
| blanchedalmond | #ffebcd | ![](./img/zh-cn_image_0000002626231034.png) |
| blue | #0000ff | ![](./img/zh-cn_image_0000002626071124.png) |
| blueviolet | #8a2be2 | ![](./img/zh-cn_image_0000002656470401.png) |
| brown | #a52a2a | ![](./img/zh-cn_image_0000002656350449.png) |
| burlywood | #deB887 | ![](./img/zh-cn_image_0000002626231036.png) |
| cadetblue | #5f9ea0 | ![](./img/zh-cn_image_0000002626071126.png) |
| chartreuse | #7fff00 | ![](./img/zh-cn_image_0000002656470403.png) |
| chocolate | #d2691e | ![](./img/zh-cn_image_0000002656350451.png) |
| coral | #ff7f50 | ![](./img/zh-cn_image_0000002626231038.png) |
| cornflowerblue | #6495ed | ![](./img/zh-cn_image_0000002626071128.png) |
| cornsilk | #fff8dc | ![](./img/zh-cn_image_0000002656470405.png) |
| crimson | #dc143c | ![](./img/zh-cn_image_0000002656350453.png) |
| cyan | #00ffff | ![](./img/zh-cn_image_0000002626231040.png) |
| darkblue | #00008b | ![](./img/zh-cn_image_0000002626071130.png) |
| darkcyan | #008b8b | ![](./img/zh-cn_image_0000002656470407.png) |
| darkgoldenrod | #b8860b | ![](./img/zh-cn_image_0000002656350455.png) |
| darkgray | #a9a9a9 | ![](./img/zh-cn_image_0000002626231042.png) |
| darkgreen | #006400 | ![](./img/zh-cn_image_0000002626071132.png) |
| darkgrey | #a9a9a9 | ![](./img/zh-cn_image_0000002656470409.png) |
| darkkhaki | #bdb76b | ![](./img/zh-cn_image_0000002656350457.png) |
| darkmagenta | #8b008b | ![](./img/zh-cn_image_0000002626231044.png) |
| darkolivegreen | #556b2f | ![](./img/zh-cn_image_0000002626071134.png) |
| darkorange | #ff8c00 | ![](./img/zh-cn_image_0000002656470411.png) |
| darkorchid | #9932cc | ![](./img/zh-cn_image_0000002656350459.png) |
| darkred | #8b0000 | ![](./img/zh-cn_image_0000002626231046.png) |
| darksalmon | #e9967a | ![](./img/zh-cn_image_0000002626071136.png) |
| darkseagreen | #8fbc8f | ![](./img/zh-cn_image_0000002656470413.png) |
| darkslateblue | #483d8b | ![](./img/zh-cn_image_0000002656350461.png) |
| darkslategray | #2f4f4f | ![](./img/zh-cn_image_0000002626231048.png) |
| darkslategrey | #2f4f4f | ![](./img/zh-cn_image_0000002626071138.png) |
| darkturquoise | #00ced1 | ![](./img/zh-cn_image_0000002656470415.png) |
| darkviolet | #9400d3 | ![](./img/zh-cn_image_0000002656350463.png) |
| deeppink | #ff1493 | ![](./img/zh-cn_image_0000002626231050.png) |
| deepskyblue | #00bfff | ![](./img/zh-cn_image_0000002626071140.png) |
| dimgray | #696969 | ![](./img/zh-cn_image_0000002656470417.png) |
| dimgrey | #696969 | ![](./img/zh-cn_image_0000002656350465.png) |
| dodgerblue | #1e90ff | ![](./img/zh-cn_image_0000002626231052.png) |
| firebrick | #b22222 | ![](./img/zh-cn_image_0000002626071142.png) |
| floralwhite | #fffaf0 | ![](./img/zh-cn_image_0000002656470419.png) |
| forestgreen | #228b22 | ![](./img/zh-cn_image_0000002656350467.png) |
| fuchsia | #ff00ff | ![](./img/zh-cn_image_0000002626231054.png) |
| gainsboro | #dcdcdc | ![](./img/zh-cn_image_0000002626071144.png) |
| ghostwhite | #f8f8ff | ![](./img/zh-cn_image_0000002656470421.png) |
| gold | #ffd700 | ![](./img/zh-cn_image_0000002656350469.png) |
| goldenrod | #daa520 | ![](./img/zh-cn_image_0000002626231056.png) |
| gray | #808080 | ![](./img/zh-cn_image_0000002626071146.png) |
| green | #008000 | ![](./img/zh-cn_image_0000002656470423.png) |
| greenyellow | #adff2f | ![](./img/zh-cn_image_0000002656350471.png) |
| grey | #808080 | ![](./img/zh-cn_image_0000002626231058.png) |
| honeydew | #f0fff0 | ![](./img/zh-cn_image_0000002626071148.png) |
| hotpink | #ff69b4 | ![](./img/zh-cn_image_0000002656470425.png) |
| indianred | #cd5c5c | ![](./img/zh-cn_image_0000002656350473.png) |
| indigo | #4b0082 | ![](./img/zh-cn_image_0000002626231060.png) |
| ivory | #fffff0 | ![](./img/zh-cn_image_0000002626071150.png) |
| khaki | #f0e68c | ![](./img/zh-cn_image_0000002656470427.png) |
| lavender | #e6e6fa | ![](./img/zh-cn_image_0000002656350475.png) |
| lavenderblush | #fff0f5 | ![](./img/zh-cn_image_0000002626231062.png) |
| lawngreen | #7cfc00 | ![](./img/zh-cn_image_0000002626071152.png) |
| lemonchiffon | #fffacd | ![](./img/zh-cn_image_0000002656470429.png) |
| lightblue | #add8e6 | ![](./img/zh-cn_image_0000002656350477.png) |
| lightcoral | #f08080 | ![](./img/zh-cn_image_0000002626231064.png) |
| lightcyan | #e0ffff | ![](./img/zh-cn_image_0000002626071154.png) |
| lightgoldenrodyellow | #fafad2 | ![](./img/zh-cn_image_0000002656470431.png) |
| lightgray | #d3d3d3 | ![](./img/zh-cn_image_0000002656350479.png) |
| lightgreen | #90ee90 | ![](./img/zh-cn_image_0000002626231066.png) |
| lightpink | #ffb6c1 | ![](./img/zh-cn_image_0000002626071156.png) |
| lightsalmon | #ffa07a | ![](./img/zh-cn_image_0000002656470433.png) |
| lightseagreen | #20b2aa | ![](./img/zh-cn_image_0000002656350481.png) |
| lightskyblue | #87cefa | ![](./img/zh-cn_image_0000002626231068.png) |
| lightslategray | #778899 | ![](./img/zh-cn_image_0000002626071158.png) |
| lightslategrey | #778899 | ![](./img/zh-cn_image_0000002656470435.png) |
| lightsteelblue | #b0c4de | ![](./img/zh-cn_image_0000002656350483.png) |
| lightyellow | #ffffe0 | ![](./img/zh-cn_image_0000002626231070.png) |
| lime | #00ff00 | ![](./img/zh-cn_image_0000002626071160.png) |
| limegreen | #32cd32 | ![](./img/zh-cn_image_0000002656470437.png) |
| linen | #faf0e6 | ![](./img/zh-cn_image_0000002656350485.png) |
| magenta | #ff00ff | ![](./img/zh-cn_image_0000002626231072.png) |
| maroon | #800000 | ![](./img/zh-cn_image_0000002626071162.png) |
| mediumaquamarine | #66cdaa | ![](./img/zh-cn_image_0000002656470439.png) |
| mediumblue | #0000cd | ![](./img/zh-cn_image_0000002656350487.png) |
| mediumorchid | #ba55d3 | ![](./img/zh-cn_image_0000002626231074.png) |
| mediumpurple | #9370db | ![](./img/zh-cn_image_0000002626071164.png) |
| mediumseagreen | #3cb371 | ![](./img/zh-cn_image_0000002656470441.png) |
| mediumslateblue | #7b68ee | ![](./img/zh-cn_image_0000002656350489.png) |
| mediumspringgreen | #00fa9a | ![](./img/zh-cn_image_0000002626231076.png) |
| mediumturquoise | #48d1cc | ![](./img/zh-cn_image_0000002626071166.png) |
| mediumvioletred | #c71585 | ![](./img/zh-cn_image_0000002656470443.png) |
| midnightblue | #191970 | ![](./img/zh-cn_image_0000002656350491.png) |
| mintcream | #f5fffa | ![](./img/zh-cn_image_0000002626231078.png) |
| mistyrose | #ffe4e1 | ![](./img/zh-cn_image_0000002626071168.png) |
| moccasin | #ffe4b5 | ![](./img/zh-cn_image_0000002656470445.png) |
| navajowhite | #ffdead | ![](./img/zh-cn_image_0000002656350493.png) |
| navy | #000080 | ![](./img/zh-cn_image_0000002626231080.png) |
| oldlace | #fdf5e6 | ![](./img/zh-cn_image_0000002626071170.png) |
| olive | #808000 | ![](./img/zh-cn_image_0000002656470447.png) |
| olivedrab | #6b8e23 | ![](./img/zh-cn_image_0000002656350495.png) |
| orange | #ffa500 | ![](./img/zh-cn_image_0000002626231082.png) |
| orangered | #ff4500 | ![](./img/zh-cn_image_0000002626071172.png) |
| orchid | #da70d6 | ![](./img/zh-cn_image_0000002656470449.png) |
| palegoldenrod | #eee8aa | ![](./img/zh-cn_image_0000002656350497.png) |
| palegreen | #98fb98 | ![](./img/zh-cn_image_0000002626231084.png) |
| paleturquoise | #afeeee | ![](./img/zh-cn_image_0000002626071174.png) |
| palevioletred | #db7093 | ![](./img/zh-cn_image_0000002656470451.png) |
| papayawhip | #ffefd5 | ![](./img/zh-cn_image_0000002656350499.png) |
| peachpuff | #ffdab9 | ![](./img/zh-cn_image_0000002626231086.png) |
| peru | #cd853f | ![](./img/zh-cn_image_0000002626071176.png) |
| pink | #ffc0cb | ![](./img/zh-cn_image_0000002656470453.png) |
| plum | #dda0dd | ![](./img/zh-cn_image_0000002656350501.png) |
| powderblue | #b0e0e6 | ![](./img/zh-cn_image_0000002626231088.png) |
| purple | #800080 | ![](./img/zh-cn_image_0000002626071178.png) |
| rebeccapurple | #663399 | ![](./img/zh-cn_image_0000002656470455.png) |
| red | #ff0000 | ![](./img/zh-cn_image_0000002656350503.png) |
| rosybrown | #bc8f8f | ![](./img/zh-cn_image_0000002626231090.png) |
| royalblue | #4169e1 | ![](./img/zh-cn_image_0000002626071180.png) |
| saddlebrown | #8b4513 | ![](./img/zh-cn_image_0000002656470457.png) |
| salmon | #fa8072 | ![](./img/zh-cn_image_0000002656350505.png) |
| sandybrown | #f4a460 | ![](./img/zh-cn_image_0000002626231092.png) |
| seagreen | #2e8b57 | ![](./img/zh-cn_image_0000002626071182.png) |
| seashell | #fff5ee | ![](./img/zh-cn_image_0000002656470459.png) |
| sienna | #a0522d | ![](./img/zh-cn_image_0000002656350507.png) |
| silver | #c0c0c0 | ![](./img/zh-cn_image_0000002626231094.png) |
| skyblue | #87ceeb | ![](./img/zh-cn_image_0000002626071184.png) |
| slateblue | #6a5acd | ![](./img/zh-cn_image_0000002656470461.png) |
| slategray | #708090 | ![](./img/zh-cn_image_0000002656350509.png) |
| slategrey | #708090 | ![](./img/zh-cn_image_0000002656350509.png) |
| snow | #fffafa | ![](./img/zh-cn_image_0000002626231096.png) |
| springgreen | #00ff7f | ![](./img/zh-cn_image_0000002626071186.png) |
| steelblue | #4682b4 | ![](./img/zh-cn_image_0000002656470463.png) |
| tan | #d2b48c | ![](./img/zh-cn_image_0000002656350511.png) |
| teal | #008080 | ![](./img/zh-cn_image_0000002626231098.png) |
| thistle | #d8bfd8 | ![](./img/zh-cn_image_0000002626071188.png) |
| tomato | #ff6347 | ![](./img/zh-cn_image_0000002656470465.png) |
| turquoise | #40e0d0 | ![](./img/zh-cn_image_0000002656350513.png) |
| violet | #ee82ee | ![](./img/zh-cn_image_0000002626231100.png) |
| wheat | #f5deb3 | ![](./img/zh-cn_image_0000002626071190.png) |
| white | #ffffff | ![](./img/zh-cn_image_0000002656470467.png) |
| whitesmoke | #f5f5f5 | ![](./img/zh-cn_image_0000002656350515.png) |
| yellow | #ffff00 | ![](./img/zh-cn_image_0000002626231102.png) |
| yellowgreen | #9acd32 | ![](./img/zh-cn_image_0000002626071192.png) |
