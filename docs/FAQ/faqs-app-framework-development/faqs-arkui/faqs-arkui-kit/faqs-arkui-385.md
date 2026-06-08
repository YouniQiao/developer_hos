---
format: md
title: "如何实现字体渐变效果"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-385
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-385
last_sync: 2026-06-07
sync_hash: 4a69c285
---
**问题现象**

当通过linearGradient设置渐变时，默认是背景色的渐变，而非文字渐变的效果。应该如何实现文字渐变？

**可能原因**

由于linearGradient颜色渐变属于组件内容且绘制在背景上方，若仅对文本应用渐变，效果将作用于背景而非文字本身，其效果如下：

![](./img/1820fe5c.png)

**解决措施**

要实现作用在字体上，目前以下实现方式：

1、API20之前

* ArkTS侧可以结合blendMode将背景色裁掉。通过**混合模式（BlendMode）**可以指定当前像素如何与其下方的像素混合，可以用来实现裁切、蒙版、提亮等效果。关于BlendMode的具体使用可以参考：[BlendMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-e#blendmode)。

  实现文字渐变的示例如下：

  ```
  @Entry
  @Component
  struct Index {
    @State message: string = 'Hello World';

    build() {
      RelativeContainer() {
        Row() {
          Text(this.message)
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .blendMode(BlendMode.DST_IN, BlendApplyType.OFFSCREEN)
        }
        .linearGradient({
          direction: GradientDirection.Right,
          colors: [['#ff0631f5', 0.0], ['#ff922626', 1]]
        })
        .blendMode(BlendMode.SRC_OVER, BlendApplyType.OFFSCREEN)
      }
      .width('100%')
      .height('100%')
    }
  }
  ```

  ![](./img/86cecc0b.png)
* C-API侧，使用方案同上，使用[ArkUI\_NodeAttributeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)的NODE\_BLEND\_MODE，以及NODE\_LINEAR\_GRADIENT进行设置；

2、API20及以上

* 采用ArkTS实现文字渐变，可以使用Text的[shaderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#shaderstyle20)属性，直接设置字体的渐变，示例如下：

  ```
  @Entry
  @Component
  struct Index {
    @State message: string = 'Hello World';

    build() {
      RelativeContainer() {
        Text(this.message)
          .fontSize(24)
          .fontWeight(FontWeight.Bold)
          .shaderStyle({
            direction: GradientDirection.Right,
            colors: [['#ff0631f5', 0.0], ['#ff922626', 1]]
          })
      }
      .width('100%')
      .height('100%')
    }
  }
  ```
* 对于使用C-API开发的应用，可以使用[ArkUI\_NodeAttributeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)的 NODE\_TEXT\_LINEAR\_GRADIENT属性，实现文字渐变。

更多文字效果请参考：[基于Text组件及通用属性实现文字特效](https://gitcode.com/harmonyos_samples/text-effects)。
