---

title: "数据类型说明"
upstream_id: "harmonyos-references/js-appendix-types"
catalog: "harmonyos-references"
synced_at: "2026-07-09T00:58:26.722333"
content_hash: "948487d3b8bf"
---


# 数据类型说明

#### 长度类型

| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| length | string | number | 用于描述尺寸单位，输入为number类型时，使用px单位；输入为string类型时，需要显式指定像素单位，当前支持的像素单位有： - px：逻辑尺寸单位。 - fp6+：字体尺寸单位，会随系统字体大小设置发生变化，仅支持文本类组件设置相应的字体大小。 |
| percentage | string | 百分比尺寸单位，如“50%”。 |

#### 颜色类型

| 名称 | 类型定义 | 描述 |
| --- | --- | --- |
| color | string | 颜色枚举字符串 | 用于描述颜色信息，JS脚本中不支持颜色枚举格式。 字符串格式如下： - 'rgb(255, 255, 255)' - 'rgba(255, 255, 255, 1.0)' - HEX格式：'#rrggbb'、'#aarrggbb'。 - 枚举格式：'black'、'white'。 |

表1 当前支持的颜色枚举

| 枚举名称 | 对应颜色 | 颜色 |
| --- | --- | --- |
| aliceblue | #f0f8ff | ![](./img/zh-cn_image_0000002656350369.png) |
| antiquewhite | #faebd7 | ![](./img/zh-cn_image_0000002626230956.png) |
| aqua | #00ffff | ![](./img/zh-cn_image_0000002626071046.png) |
| aquamarine | #7fffd4 | ![](./img/zh-cn_image_0000002656470323.png) |
| azure | #f0ffff | ![](./img/zh-cn_image_0000002656350371.png) |
| beige | #f5f5dc | ![](./img/zh-cn_image_0000002626230958.png) |
| bisque | #ffe4c4 | ![](./img/zh-cn_image_0000002626071048.png) |
| black | #000000 | ![](./img/zh-cn_image_0000002656470325.png) |
| blanchedalmond | #ffebcd | ![](./img/zh-cn_image_0000002656350373.png) |
| blue | #0000ff | ![](./img/zh-cn_image_0000002626230960.png) |
| blueviolet | #8a2be2 | ![](./img/zh-cn_image_0000002626071050.png) |
| brown | #a52a2a | ![](./img/zh-cn_image_0000002656470327.png) |
| burlywood | #deb887 | ![](./img/zh-cn_image_0000002656350375.png) |
| cadetblue | #5f9ea0 | ![](./img/zh-cn_image_0000002626230962.png) |
| chartreuse | #7fff00 | ![](./img/zh-cn_image_0000002626071052.png) |
| chocolate | #d2691e | ![](./img/zh-cn_image_0000002656470329.png) |
| coral | #ff7f50 | ![](./img/zh-cn_image_0000002656350377.png) |
| cornflowerblue | #6495ed | ![](./img/zh-cn_image_0000002626230964.png) |
| cornsilk | #fff8dc | ![](./img/zh-cn_image_0000002626071054.png) |
| crimson | #dc143c | ![](./img/zh-cn_image_0000002656470331.png) |
| cyan | #00ffff | ![](./img/zh-cn_image_0000002656350379.png) |
| darkblue | #00008b | ![](./img/zh-cn_image_0000002626230966.png) |
| darkcyan | #008b8b | ![](./img/zh-cn_image_0000002626071056.png) |
| darkgoldenrod | #b8860b | ![](./img/zh-cn_image_0000002656470333.png) |
| darkgray | #a9a9a9 | ![](./img/zh-cn_image_0000002656350381.png) |
| darkgreen | #006400 | ![](./img/zh-cn_image_0000002626230968.png) |
| darkgrey | #a9a9a9 | ![](./img/zh-cn_image_0000002626071058.png) |
| darkkhaki | #bdb76b | ![](./img/zh-cn_image_0000002656470335.png) |
| darkmagenta | #8b008b | ![](./img/zh-cn_image_0000002656350383.png) |
| darkolivegreen | #556b2f | ![](./img/zh-cn_image_0000002626230970.png) |
| darkorange | #ff8c00 | ![](./img/zh-cn_image_0000002626071060.png) |
| darkorchid | #9932cc | ![](./img/zh-cn_image_0000002656470337.png) |
| darkred | #8b0000 | ![](./img/zh-cn_image_0000002656350385.png) |
| darksalmon | #e9967a | ![](./img/zh-cn_image_0000002626230972.png) |
| darkseagreen | #8fbc8f | ![](./img/zh-cn_image_0000002626071062.png) |
| darkslateblue | #483d8b | ![](./img/zh-cn_image_0000002656470339.png) |
| darkslategray | #2f4f4f | ![](./img/zh-cn_image_0000002656350387.png) |
| darkslategrey | #2f4f4f | ![](./img/zh-cn_image_0000002626230974.png) |
| darkturquoise | #00ced1 | ![](./img/zh-cn_image_0000002626071064.png) |
| darkviolet | #9400d3 | ![](./img/zh-cn_image_0000002656470341.png) |
| deeppink | #ff1493 | ![](./img/zh-cn_image_0000002656350389.png) |
| deepskyblue | #00bfff | ![](./img/zh-cn_image_0000002626230976.png) |
| dimgray | #696969 | ![](./img/zh-cn_image_0000002626071066.png) |
| dimgrey | #696969 | ![](./img/zh-cn_image_0000002656470343.png) |
| dodgerblue | #1e90ff | ![](./img/zh-cn_image_0000002656350391.png) |
| firebrick | #b22222 | ![](./img/zh-cn_image_0000002626230978.png) |
| floralwhite | #fffaf0 | ![](./img/zh-cn_image_0000002626071068.png) |
| forestgreen | #228b22 | ![](./img/zh-cn_image_0000002656470345.png) |
| fuchsia | #ff00ff | ![](./img/zh-cn_image_0000002656350393.png) |
| gainsboro | #dcdcdc | ![](./img/zh-cn_image_0000002626230980.png) |
| ghostwhite | #f8f8ff | ![](./img/zh-cn_image_0000002626071070.png) |
| gold | #ffd700 | ![](./img/zh-cn_image_0000002656470347.png) |
| goldenrod | #daa520 | ![](./img/zh-cn_image_0000002656350395.png) |
| gray | #808080 | ![](./img/zh-cn_image_0000002626230982.png) |
| green | #008000 | ![](./img/zh-cn_image_0000002626071072.png) |
| greenyellow | #adff2f | ![](./img/zh-cn_image_0000002656470349.png) |
| grey | #808080 | ![](./img/zh-cn_image_0000002656350397.png) |
| honeydew | #f0fff0 | ![](./img/zh-cn_image_0000002626230984.png) |
| hotpink | #ff69b4 | ![](./img/zh-cn_image_0000002626071074.png) |
| indianred | #cd5c5c | ![](./img/zh-cn_image_0000002656470351.png) |
| indigo | #4b0082 | ![](./img/zh-cn_image_0000002656350399.png) |
| ivory | #fffff0 | ![](./img/zh-cn_image_0000002626230986.png) |
| khaki | #f0e68c | ![](./img/zh-cn_image_0000002626071076.png) |
| lavender | #e6e6fa | ![](./img/zh-cn_image_0000002656470353.png) |
| lavenderblush | #fff0f5 | ![](./img/zh-cn_image_0000002656350401.png) |
| lawngreen | #7cfc00 | ![](./img/zh-cn_image_0000002626230988.png) |
| lemonchiffon | #fffacd | ![](./img/zh-cn_image_0000002626071078.png) |
| lightblue | #add8e6 | ![](./img/zh-cn_image_0000002656470355.png) |
| lightcoral | #f08080 | ![](./img/zh-cn_image_0000002656350403.png) |
| lightcyan | #e0ffff | ![](./img/zh-cn_image_0000002626230990.png) |
| lightgoldenrodyellow | #fafad2 | ![](./img/zh-cn_image_0000002626071080.png) |
| lightgray | #d3d3d3 | ![](./img/zh-cn_image_0000002656470357.png) |
| lightgreen | #90ee90 | ![](./img/zh-cn_image_0000002656350405.png) |
| lightpink | #ffb6c1 | ![](./img/zh-cn_image_0000002626230992.png) |
| lightsalmon | #ffa07a | ![](./img/zh-cn_image_0000002626071082.png) |
| lightseagreen | #20b2aa | ![](./img/zh-cn_image_0000002656470359.png) |
| lightskyblue | #87cefa | ![](./img/zh-cn_image_0000002656350407.png) |
| lightslategray | #778899 | ![](./img/zh-cn_image_0000002626230994.png) |
| lightslategrey | #778899 | ![](./img/zh-cn_image_0000002626071084.png) |
| lightsteelblue | #b0c4de | ![](./img/zh-cn_image_0000002656470361.png) |
| lightyellow | #ffffe0 | ![](./img/zh-cn_image_0000002656350409.png) |
| lime | #00ff00 | ![](./img/zh-cn_image_0000002626230996.png) |
| limegreen | #32cd32 | ![](./img/zh-cn_image_0000002626071086.png) |
| linen | #faf0e6 | ![](./img/zh-cn_image_0000002656470363.png) |
| magenta | #ff00ff | ![](./img/zh-cn_image_0000002656350411.png) |
| maroon | #800000 | ![](./img/zh-cn_image_0000002626230998.png) |
| mediumaquamarine | #66cdaa | ![](./img/zh-cn_image_0000002626071088.png) |
| mediumblue | #0000cd | ![](./img/zh-cn_image_0000002656470365.png) |
| mediumorchid | #ba55d3 | ![](./img/zh-cn_image_0000002656350413.png) |
| mediumpurple | #9370db | ![](./img/zh-cn_image_0000002626231000.png) |
| mediumseagreen | #3cb371 | ![](./img/zh-cn_image_0000002626071090.png) |
| mediumslateblue | #7b68ee | ![](./img/zh-cn_image_0000002656470367.png) |
| mediumspringgreen | #00fa9a | ![](./img/zh-cn_image_0000002656350415.png) |
| mediumturquoise | #48d1cc | ![](./img/zh-cn_image_0000002626231002.png) |
| mediumvioletred | #c71585 | ![](./img/zh-cn_image_0000002626071092.png) |
| midnightblue | #191970 | ![](./img/zh-cn_image_0000002656470369.png) |
| mintcream | #f5fffa | ![](./img/zh-cn_image_0000002656350417.png) |
| mistyrose | #ffe4e1 | ![](./img/zh-cn_image_0000002626231004.png) |
| moccasin | #ffe4b5 | ![](./img/zh-cn_image_0000002626071094.png) |
| navajowhite | #ffdead | ![](./img/zh-cn_image_0000002656470371.png) |
| navy | #000080 | ![](./img/zh-cn_image_0000002656350419.png) |
| oldlace | #fdf5e6 | ![](./img/zh-cn_image_0000002626231006.png) |
| olive | #808000 | ![](./img/zh-cn_image_0000002626071096.png) |
| olivedrab | #6b8e23 | ![](./img/zh-cn_image_0000002656470373.png) |
| orange | #ffa500 | ![](./img/zh-cn_image_0000002656350421.png) |
| orangered | #ff4500 | ![](./img/zh-cn_image_0000002626231008.png) |
| orchid | #da70d6 | ![](./img/zh-cn_image_0000002626071098.png) |
| palegoldenrod | #eee8aa | ![](./img/zh-cn_image_0000002656470375.png) |
| palegreen | #98fb98 | ![](./img/zh-cn_image_0000002656350423.png) |
| paleturquoise | #afeeee | ![](./img/zh-cn_image_0000002626231010.png) |
| palevioletred | #db7093 | ![](./img/zh-cn_image_0000002626071100.png) |
| papayawhip | #ffefd5 | ![](./img/zh-cn_image_0000002656470377.png) |
| peachpuff | #ffdab9 | ![](./img/zh-cn_image_0000002656350425.png) |
| peru | #cd853f | ![](./img/zh-cn_image_0000002626231012.png) |
| pink | #ffc0cb | ![](./img/zh-cn_image_0000002626071102.png) |
| plum | #dda0dd | ![](./img/zh-cn_image_0000002656470379.png) |
| powderblue | #b0e0e6 | ![](./img/zh-cn_image_0000002656350427.png) |
| purple | #800080 | ![](./img/zh-cn_image_0000002626231014.png) |
| rebeccapurple | #663399 | ![](./img/zh-cn_image_0000002626071104.png) |
| red | #ff0000 | ![](./img/zh-cn_image_0000002656470381.png) |
| rosybrown | #bc8f8f | ![](./img/zh-cn_image_0000002656350429.png) |
| royalblue | #4169e1 | ![](./img/zh-cn_image_0000002626231016.png) |
| saddlebrown | #8b4513 | ![](./img/zh-cn_image_0000002626071106.png) |
| salmon | #fa8072 | ![](./img/zh-cn_image_0000002656470383.png) |
| sandybrown | #f4a460 | ![](./img/zh-cn_image_0000002656350431.png) |
| seagreen | #2e8b57 | ![](./img/zh-cn_image_0000002626231018.png) |
| seashell | #fff5ee | ![](./img/zh-cn_image_0000002626071108.png) |
| sienna | #a0522d | ![](./img/zh-cn_image_0000002656470385.png) |
| silver | #c0c0c0 | ![](./img/zh-cn_image_0000002656350433.png) |
| skyblue | #87ceeb | ![](./img/zh-cn_image_0000002626231020.png) |
| slateblue | #6a5acd | ![](./img/zh-cn_image_0000002626071110.png) |
| slategray | #708090 | ![](./img/zh-cn_image_0000002656470387.png) |
| slategrey | #708090 | ![](./img/zh-cn_image_0000002656350435.png) |
| snow | #fffafa | ![](./img/zh-cn_image_0000002626231022.png) |
| springgreen | #00ff7f | ![](./img/zh-cn_image_0000002626071112.png) |
| steelblue | #4682b4 | ![](./img/zh-cn_image_0000002656470389.png) |
| tan | #d2b48c | ![](./img/zh-cn_image_0000002656350437.png) |
| teal | #008080 | ![](./img/zh-cn_image_0000002626231024.png) |
| thistle | #d8bfd8 | ![](./img/zh-cn_image_0000002626071114.png) |
| tomato | #ff6347 | ![](./img/zh-cn_image_0000002656470391.png) |
| turquoise | #40e0d0 | ![](./img/zh-cn_image_0000002656350439.png) |
| violet | #ee82ee | ![](./img/zh-cn_image_0000002626231026.png) |
| wheat | #f5deb3 | ![](./img/zh-cn_image_0000002626071116.png) |
| white | #ffffff | ![](./img/zh-cn_image_0000002656470393.png) |
| whitesmoke | #f5f5f5 | ![](./img/zh-cn_image_0000002656350441.png) |
| yellow | #ffff00 | ![](./img/zh-cn_image_0000002626231028.png) |
| yellowgreen | #9acd32 | ![](./img/zh-cn_image_0000002626071118.png) |
