---
title: "XComponentNode"
upstream_id: "harmonyos-references/js-apis-arkui-xcomponentnode"
catalog: "harmonyos-references"
content_hash: "640c49767e55"
synced_at: "2026-07-28T16:41:47.768695"
---

# XComponentNode

提供XComponent节点XComponentNode，表示组件树中的[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件，用于[EGL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/egl)/[OpenGL ES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengles)渲染和媒体数据写入，并支持动态修改节点渲染类型，适用于需要在ArkUI组件树中嵌入Native自渲染内容的场景。

![](./img/note_3.0-zh-cn.png)

- 从API version 11开始支持，从API version 12开始废弃，建议使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#xcomponent12)类型的typeNode替代。
- 本模块接口仅可在Stage模型下使用。
- 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 当前不支持在预览器中使用XComponentNode。

#### 导入模块

```
import { XComponentNode } from '@kit.ArkUI';
```

#### XComponentNode(deprecated)

#### [h2]constructor(deprecated)

constructor(uiContext: UIContext, options: RenderOptions, id: string, type: XComponentType, libraryName?: string)

XComponentNode的构造函数。

![](./img/note_3.0-zh-cn.png) 从API version 11开始支持，从API version 12开始废弃，建议使用[createNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#createnodexcomponent12)替代。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | [UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext) | 是 | UI上下文，获取方式可参考[UIContext获取方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-node#uicontext获取方法)。 |
| options | [RenderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode#renderoptions) | 是 | XComponentNode的渲染配置选项，用于设置节点渲染相关参数，如理想尺寸（selfIdealSize）等。 |
| id | string | 是 | XComponent的唯一标识，最大支持字符串长度128，超出长度时接口创建失败。详见[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件。 |
| type | [XComponentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#xcomponenttype10) | 是 | 用于指定XComponent组件类型，取值为[XComponentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#xcomponenttype10)枚举定义的值。详见[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件。 |
| libraryName | string | 否 | Native层编译输出动态库名称。不传该参数时，默认不加载Native动态库。详见[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件。 |

![](./img/note_3.0-zh-cn.png) 需要显式指定[RenderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode#renderoptions)中的selfIdealSize，否则XComponentNode内容大小为空，不显示任何内容。

#### [h2]onCreate(deprecated)

onCreate(event?: Object): void

XComponentNode加载完成时触发该回调。

![](./img/note_3.0-zh-cn.png) 从API version 11开始支持，从API version 12开始废弃，建议使用[onLoad](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent#onload)替代。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Object | 否 | XComponent实例对象的事件参数，用于获取XComponent实例的context。context上挂载的方法由开发者在C++层定义，开发者可通过该context调用Native层注册的方法。 |

#### [h2]onDestroy(deprecated)

onDestroy(): void

XComponentNode销毁时触发该回调。

![](./img/note_3.0-zh-cn.png) 从API version 11开始支持，从API version 12开始废弃，建议使用[onDestroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent#ondestroy)替代。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### [h2]changeRenderType(deprecated)

changeRenderType(type: NodeRenderType): boolean

动态修改XComponentNode的渲染类型。例如，当需要在组件上进行EGL/OpenGL ES直接绘制时可使用DISPLAY类型；当需要将渲染内容作为纹理参与合成（如实现半透明叠加效果或离屏渲染）时可切换为TEXTURE类型。

![](./img/note_3.0-zh-cn.png) 从API version 11开始支持，从API version 12开始废弃，建议使用[appendChild](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#appendchild12)替代。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | [NodeRenderType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode#noderendertype) | 是 | 需要修改的目标渲染类型，取值为[NodeRenderType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode#noderendertype)枚举定义的值。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 修改渲染类型是否成功。 true：修改渲染类型成功；false：修改渲染类型失败。 |

#### 示例

```
import { NodeController, FrameNode, XComponentNode, NodeRenderType, XComponentType, UIContext } from '@kit.ArkUI';

class XComponentNodeController extends NodeController {
  private xComponentNode: MyXComponentNode | null = null;
  private soName: string = 'tetrahedron_napi'; // 该 so 由开发者通过 NAPI 编写并生成

  constructor() {
    super();
  }

  makeNode(context: UIContext): FrameNode | null {
    this.xComponentNode = new MyXComponentNode(context, {
      selfIdealSize: { width: 200, height: 200 }
    }, 'xComponentId', XComponentType.SURFACE, this.soName);
    return this.xComponentNode;
  }

  changeRenderType(renderType: NodeRenderType): void {
    if (this.xComponentNode) {
      this.xComponentNode.changeRenderType(renderType);
    }
  }
}

class MyXComponentNode extends XComponentNode {
  onCreate(event: Object) {
    // do something when XComponentNode has created
  }

  onDestroy() {
    // do something when XComponentNode is destroying
  }
}

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        NodeContainer(new XComponentNodeController())
      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002656008238.jpg)
