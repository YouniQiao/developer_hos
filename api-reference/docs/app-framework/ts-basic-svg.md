---
title: "SVG标签说明"
upstream_id: "harmonyos-references/ts-basic-svg"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:22.624489"
---

# SVG标签说明

SVG（Scalable Vector Graphics）是可缩放矢量图形，它是一种基于XML（可扩展标记语言）的图形格式，用于描述二维图形和图像。[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)组件支持的SVG范围，为SVG1.1规范的部分功能。支持的标签以及属性如下：

#### 基础形状

基础形状标签包括：<rect>、<circle>、<ellipse>、<line>、<polyline>、<polygon>和<path>。

![](./img/note_3.0-zh-cn.png) 基础标签支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-common-attributes)：id、fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、opacity、transform、clip-path、clip-rule，其中transform属性只支持平移。

从API version 21开始，当[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)组件的[supportSvg2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#supportsvg221)属性设置为true时，transform属性支持平移、旋转、缩放、倾斜、矩阵变换，详细请参考[SVG标签解析能力增强](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities)。

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 矩形 | x：x轴方向偏移分量； y：y轴方向偏移分量； width：宽度； height：高度； rx：圆角x轴半径； ry：圆角y轴半径。 |
| | 圆形 | cx：圆心x轴坐标； cy：圆心y轴坐标； r：圆形半径。 |
| | 椭圆 | cx：x轴坐标； cy：y轴坐标； rx：x轴半径； ry：y轴半径。 |
| | 线 | x1：起点x轴坐标； y1：起点y轴坐标； x2：终点x轴坐标； y2：终点y轴坐标。 |
| | 折线 | points：顶点坐标。 |
| | 多边形 | points：顶点坐标。 |
| | 路径 | d：路径。 |

SVG基础形状标签与支持的通用属性的示例如下。

```
<!-- svg01.svg -->
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg" style="background:#f0f0f0">
    <!-- 1. <rect> 矩形 -->
    <rect x="50" y="50" width="100" height="60"
          id="myRect"
          fill="#4CAF50"
          stroke="#333"
          stroke-width="4"
          stroke-dasharray="10,5"
          stroke-linecap="round"
          opacity="0.9"
          transform="translate(1,0)"/>

    <!-- 2. <circle> 圆形 -->
    <circle cx="200" cy="100" r="50"
            id="myCircle"
            fill="none"
            stroke="#FF5722"
            stroke-width="6"
            stroke-linejoin="bevel"
            fill-opacity="0.7"
            stroke-opacity="0.9"
            transform="translate(30,0)"/>

    <!-- 3. <ellipse> 椭圆 -->
    <ellipse cx="350" cy="100" rx="70" ry="40"
             id="myEllipse"
             fill="#2196F3"
             fill-rule="evenodd"
             stroke="#000"
             stroke-width="3"
             opacity="0.8"
             transform="translate(20,0)"/>

    <!-- 4. <line> 直线 -->
    <line x1="50" y1="200" x2="350" y2="200"
          stroke="#9C27B0"
          stroke-width="5"
          stroke-dasharray="8,4"
          stroke-linecap="square"
          transform="translate(0,100)"/>

    <!-- 5. <polyline> 折线（开放路径） -->
    <polyline points="50,250 100,220 150,270 200,240 250,280"
              fill="none"
              stroke="#FFC107"
              stroke-width="4"
              stroke-linejoin="round"
              opacity="0.9"
              transform="translate(0,100)"/>

    <!-- 6. <polygon> 多边形（闭合路径） -->
    <polygon points="400,100 450,50 500,100 450,150"
             id="myPolygon"
             fill="#E91E63"
             fill-rule="nonzero"
             stroke="#333"
             stroke-width="3"
             stroke-dasharray="6,3"
             fill-opacity="0.8"
             transform="translate(-350,80)"/>

    <!-- 7. <path> 路径（复杂图形） -->
    <path d="M550,100 C600,50 700,50 750,100 S800,150 750,200 Z"
          fill="#00BCD4"
          fill-rule="evenodd"
          stroke="#009688"
          stroke-width="4"
          stroke-opacity="0.7"
          transform="translate(-300,90)"/>
</svg>
```
 
```
//xxx.ets
@Entry
@Component
struct Index {
  build() {
    Column() {
      // $r('app.media.svg01')需要替换为开发者所需的图像资源文件。
      Image($r('app.media.svg01'))
        .objectFit(ImageFit.None)
        .width('100%')
        .height('100%')
    }.width('100%').height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626070630.png)

#### 图形效果

#### [h2]滤镜

滤镜标签包括：<filter>、<feOffset>、<feGaussianBlur>、<feBlend>、<feComposite>、<feColorMatrix>、<feFlood>。其中，<filter>定义滤镜范围，其它标签定义滤镜效果。

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 定义滤镜 | x：滤镜区域x轴偏移分量，默认值为0； y：滤镜区域y轴偏移分量，默认值为0； width：滤镜区域宽； height：滤镜区域高。 **说明**：从API version 21开始，当Image组件的[supportSvg2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#supportsvg221)属性设置为true时，默认值参考[filter参数异常时默认效果变更](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities#filter参数异常时默认效果变更)。 |
| | 定义沿x、y方向偏移距离 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）; result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入，dx和dy。 |
| | 定义高斯模糊效果 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）; result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入，edgemode和stddeviation。 |
| | 定义两张输入图像混合模式 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）; result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入； in2：第二图源（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result），mode。 |
| | 定义两张输入图像合成方式。当operator为arithmetic时，合成算法为：result = k1 * in * in2 + k2 * in + k3 * in2 + k4；当operator为其他值时，使用对应的[BlendMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#blendmode11枚举说明)合成方式。 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）； in2：第二图源（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）； operator( over | in | out | atop | xor | lighter | arithmetic )：定义两张输入图像的合成方式，非arithmetic值对应[BlendMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#blendmode11枚举说明)； k1：arithmetic合成算法中in与in2乘积的系数； k2：arithmetic合成算法中in的系数； k3：arithmetic合成算法中in2的系数； k4：arithmetic合成算法中的常量偏移。 |
| | 基于转换矩阵对颜色进行变换 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）； result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入； type ( matrix | saturate | hueRotate)、 values。 |
| | 定义填充颜色和透明度 | in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）； result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入；flood-color和flood-opacity。 |

#### [h2]遮罩

遮罩标签：<mask>

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 定义遮罩 | x：遮罩区域x轴偏移分量； y：遮罩区域y轴偏移分量； width：遮罩区域宽； height：遮罩区域高。 **说明**：从API version 21开始，当Image组件的[supportSvg2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#supportsvg221)属性设置为true时，默认值参考[mask参数异常时默认效果变更](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities#mask参数异常时默认效果变更)。 |

#### [h2]裁剪

裁剪标签：<clippath>

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 定义一条剪切路径 | x：裁剪区域x轴偏移分量； y：裁剪区域y轴偏移分量； width：裁剪区域宽； height：裁剪区域高。 |

#### [h2]图案

图案标签：<pattern>

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 定义填充图案 | x：填充区域x轴偏移分量； y：填充区域y轴偏移分量； width：填充区域宽； height：填充区域高。 |

#### [h2]渐变色

渐变色相关的标签包括：<linearGradient>、<radialGradient>、<stop>

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 线性渐变 | x1、y1、x2、y2 |
| | 放射渐变 | fx、fy、cx、cy、r |
| | 色阶 | offset、stop-color |

#### 静态图片

图片标签：<image>

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 用于图像显示 | x：图像x轴偏移； y：图像y轴偏移； width：图像宽； height：图像高； href：目标图片(支持：jpg、jpeg、png、bmp、webp、heic、base64，不支持svg)。 |

#### 动画

动画标签：<animate>、<animateTransform>

![](./img/note_3.0-zh-cn.png) 当前仅支持单个元素的属性动画或者变形动画，不支持元素间动画嵌套。

| 元素 | 说明 | 特有属性 |
| --- | --- | --- |
| | 定义元素属性动画 | attributeName：定义动画属性，取值：( cx | cy | r | fill | stroke | fill-opacity | stroke-opacity | stroke-miterlimit )； begin：定义动画起始时间； dur：定义动画持续时间； from：定义起始值； to：定义结束值； fill：定义动画结尾状态； calcMode：定义插值； keyTimes：设置关键帧动画的开始时间，值为0~1之间的数值用分号隔开，比如0;0.3;0.8;1。keyTimes、keySplines、values组合设置关键帧动画。keyTimes和values的个数保持一致。keySplines个数为keyTimes个数减一。 values：设置一组动画的变化值。格式为value1;value2;value3。 keySplines：与keyTimes相关联的一组贝塞尔控制点。定义每个关键帧的贝塞尔曲线，曲线之间用分号隔开。曲线内的两个控制点格式为x1 y1 x2 y2。比如0.5 0 0.5 1; 0.5 0 0.5 1;0.5 0 0.5 1 |
| | 定义元素变形动画 | attributeName：定义动画属性，取值：transform； type：属性定义转换类型取值：( translate | scale | rotate | skewX | skewY )； begin：定义动画起始时间； dur：定义动画持续时间； from：定义起始值； to：定义结束值； fill：定义动画结尾状态； calcMode：定义插值； keyTimes：设置关键帧动画的开始时间，值为0~1之间的数值用分号隔开，比如0;0.3;0.8;1。keyTimes、keySplines、values组合设置关键帧动画。keyTimes和values的个数保持一致。keySplines个数为keyTimes个数减一。 values：设置一组动画的变化值。格式为value1;value2;value3。 keySplines：与keyTimes相关联的一组贝塞尔控制点。定义每个关键帧的贝塞尔曲线，曲线之间用分号隔开。曲线内的两个控制点格式为x1 y1 x2 y2。比如0.5 0 0.5 1; 0.5 0 0.5 1;0.5 0 0.5 1 |

#### 其它

除了标识图形图像效果的标签，还支持分组等标签，分别有<svg>、<g>、<use>和<defs>。

![](./img/note_3.0-zh-cn.png) 当前支持的颜色值格式包括#rgb、#rrggbb、rgb()、rgba()，以及常用颜色关键字（如red、black、blue等）。

| 元素 | 说明 | 特有属性 | 通用属性 |
| --- | --- | --- | --- |
| | 容器，定义个svg片段 | x：x轴偏移分量； y：y轴偏移分量； width：宽度； height：高度； viewBox：视口 | fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform |
| | 分组 | width：宽度； height：高度。 x、y轴偏移分量：可通过transform属性的translate(x, y)实现，参考[SVG标签解析能力增强](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities)。 | fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform |
| | 复用已有元素 | x：x轴偏移分量； y：y轴偏移分量； href：目标元素 | fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform |
| | 定义可复用对象 | 无特有属性 | fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform |
