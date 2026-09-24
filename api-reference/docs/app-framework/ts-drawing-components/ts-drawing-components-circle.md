---
title: "Circle"
upstream_id: "harmonyos-references/ts-drawing-components-circle"
catalog: "harmonyos-references"
content_hash: "a7289701eec7"
synced_at: "2026-09-24T18:51:46.163566"
---

# Circle

用于绘制圆形的组件。

![](./img/note_3.0-zh-cn.png) 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 子组件

无

#### 接口

#### [h2]Circle

new Circle(value?: CircleOptions)

用于绘制圆形的构造函数。调用后创建一个Circle对象，可设置宽高属性。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CircleOptions](#circleoptions对象说明) | 否 | 设置圆形尺寸。当需要自定义圆形大小时传入此参数，不传入时width和height默认为0。 异常值undefined和null按照无效值处理，本次设置不生效。 |

#### [h2]Circle

Circle(value?: CircleOptions)

用于绘制圆形的构造函数。调用后创建一个Circle对象，可设置宽高属性。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CircleOptions](#circleoptions对象说明) | 否 | 设置圆形尺寸。当需要自定义圆形大小时传入此参数，不传入时width和height默认为0。 异常值undefined和null按照无效值处理，本次设置不生效。 |

#### CircleOptions对象说明

用于描述Circle组件绘制属性。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| width | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | 否 | 是 | 宽度，取值范围≥0。当需要自定义圆形大小时设置此属性，不传入时默认为0。 默认单位：vp 异常值undefined、null、NaN和Infinity按照默认值处理。 |
| height | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | 否 | 是 | 高度，取值范围≥0。当需要自定义圆形大小时设置此属性，不传入时默认为0。 默认单位：vp 异常值undefined、null、NaN和Infinity按照默认值处理。 |

#### 属性

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)以及[图形绘制通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-common)外，还支持以下属性：

#### [h2]stroke

stroke(value: ResourceColor | ColorMetrics)

设置边框颜色，相较于图形绘制通用属性中的[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-common#stroke)接口，本接口新增支持使用[ColorMetrics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#colormetrics12)描述颜色。支持[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)动态设置属性。不设置时，默认边框颜色为[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Transparent，即没有边框。异常值undefined和null按照默认值处理，NaN和Infinity按照[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Black处理。

起始版本： 26.0.0

卡片能力： 从API版本26.0.0开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | [ColorMetrics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#colormetrics12) | 是 | 边框颜色。 默认值：[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Transparent 异常值undefined和null按照默认值处理，NaN和Infinity按照[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Black处理。 |

#### [h2]fill

fill(value: ResourceColor | ColorMetrics)

设置填充区域的颜色，相较于图形绘制通用属性中的[fill](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-common#fill)接口，本接口新增支持使用[ColorMetrics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#colormetrics12)描述颜色。支持[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)动态设置属性。不设置时，默认填充颜色为[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Black。异常值undefined、null、NaN和Infinity按照默认值处理。与通用属性foregroundColor同时设置时，后设置的属性生效。

起始版本： 26.0.0

卡片能力： 从API版本26.0.0开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | [ColorMetrics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#colormetrics12) | 是 | 填充区域颜色。 默认值：[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color).Black 异常值undefined、null、NaN和Infinity按照默认值处理。 |

#### 示例

#### [h2]示例1（组件属性绘制）

通过fillOpacity、stroke、strokeDashArray属性可分别设置圆的透明度、边框颜色和边框间隙样式。

```
// xxx.ets
@Entry
@Component
struct CircleExample {
  build() {
    Column({ space: 10 }) {
      // 绘制一个直径为150的圆
      Circle({ width: 150, height: 150 })
      // 绘制一个直径为150、线条为红色虚线的圆环（宽高设置不一致时以短边为直径）
      Circle()
        .width(150)
        .height(200)
        .fillOpacity(0)
        .strokeWidth(3)
        .stroke(Color.Red)
        .strokeDashArray([1, 2])
    }.width('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002772900299.png)

#### [h2]示例2（宽和高使用不同参数类型绘制圆）

width、height属性分别使用不同的长度类型绘制圆。

```
// xxx.ets
@Entry
@Component
struct CircleTypeExample {
  build() {
    Column({ space: 10 }) {
      // 绘制一个直径为50的圆
      Circle({ width: '50', height: '50' }) // 使用string类型
      // 绘制一个直径为100的圆
      Circle({ width: 100, height: 100 }) // 使用number类型
      // 绘制一个直径为150的圆
      Circle({ width: $r('app.string.CircleWidth'), height: $r('app.string.CircleHeight') }) // 使用Resource类型，需用户自定义
    }.width('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002743381048.png)

#### [h2]示例3（使用attributeModifier动态设置Circle组件的属性）

以下示例展示了如何使用attributeModifier动态设置Circle组件的fill、fillOpacity、stroke、strokeDashArray、strokeDashOffset、strokeLineCap、strokeOpacity、strokeWidth和antiAlias属性。

```
// xxx.ets
class MyCircleModifier implements AttributeModifier<CircleAttribute> {
  applyNormalAttribute(instance: CircleAttribute): void {
    // 填充颜色#707070，填充透明度0.5，边框颜色#2787D9，虚线样式[20]，起点偏移量15，端点样式为圆头，边框透明度0.5，边框宽度10，抗锯齿开启
    instance.fill("#707070")
    instance.fillOpacity(0.5)
    instance.stroke("#2787D9")
    instance.strokeDashArray([20])
    instance.strokeDashOffset("15")
    instance.strokeLineCap(LineCapStyle.Round)
    instance.strokeOpacity(0.5)
    instance.strokeWidth(10)
    instance.antiAlias(true)
  }
}

@Entry
@Component
struct CircleModifierDemo {
  @State modifier: MyCircleModifier = new MyCircleModifier()

  build() {
    Column() {
      Circle({ width: 150, height: 150 })
        .attributeModifier(this.modifier)
        .offset({ x: 20, y: 20 })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002743221162.png)
