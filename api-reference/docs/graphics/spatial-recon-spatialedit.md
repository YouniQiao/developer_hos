---
title: "spatialEdit"
upstream_id: "harmonyos-references/spatial-recon-spatialedit"
catalog: "harmonyos-references"
content_hash: "1b22ce09bfb5"
synced_at: "2026-07-09T01:01:08.388162"
---

# spatialEdit

spatialEdit模块提供了编辑3DGS（3D Gaussian Splatting）模型的能力，支持选择、变换、上色和删除高斯点等操作。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

#### 导入模块

```
import { spatialEdit } from '@kit.SpatialReconKit';
```

#### PaintMode

定义颜色混合模式的枚举类型。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| REPLACE | 0 | 直接替换原始颜色。 |
| MULTIPLY | 1 | 将原始颜色乘以给定颜色。 |
| ADD | 2 | 将给定颜色添加到原始颜色。 |

#### GSEdit

3DGS模型编辑句柄类，提供对高斯模型的各种编辑操作。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

#### [h2]editGSNode

static editGSNode(node: spatialRender.GSNode): GSEdit | undefined

创建3DGS模型的编辑句柄。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| node | [GSNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialrender#gsnode) | 是 | 需要编辑的3DGS节点。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [GSEdit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialedit#gsedit) | undefind | 3DGS模型编辑句柄。如果节点不满足编辑要求，则返回 undefined。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function EditGSNode() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
  });
}
```

#### [h2]selectBy2DBox

selectBy2DBox(rect: Rect): void

在视口坐标中选择2D矩形区域内的高斯点（添加到当前选区）。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rect | [Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#rect) | 是 | 视口中的2D矩形区域。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Rect, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function SelectBy2DBox() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
  });
}
```

#### [h2]selectBy3DBox

selectBy3DBox(aabb: Aabb): void

在3D空间中选择轴对齐边界框内的高斯点（添加到当前选区）。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aabb | [Aabb](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#aabb) | 是 | 3D轴对齐边界框。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Aabb, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function SelectBy3DBox() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择轴对齐边界框内的高斯点（添加到当前选区）
    let aabb: Aabb = {
      aabbMin: {x: 0, y: 0, z: 0},
      aabbMax: {x: 10, y: 10, z: 10}
    };
    editor.selectBy3DBox(aabb);
  });
}
```

#### [h2]selectByIndex

selectByIndex(indices: number[]): void

通过索引选择高斯点（添加到当前选区）。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| indices | number[] | 是 | 高斯点索引数组。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function SelectByIndex() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 通过索引选择高斯点（添加到当前选区）
    let indices: number[] = [];
    for (let i = 1; i <= 50000; i++) {
      indices.push(i);
    }
    editor.selectByIndex(indices);
  });
}
```

#### [h2]selectBy2DMask

selectBy2DMask(mask: image.PixelMap): void

通过2D遮罩图像选择高斯点（添加到当前选区）。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mask | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 是 | 遮罩图像。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';
import { resourceManager } from '@kit.LocalizationKit';
import { image } from '@kit.ImageKit';

function SelectBy2DMask(context : Context) : void {
  // 获取resourceManager资源管理器
  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 通过图片解码创建PixelMap对象
    // 此处'test.jpg'仅作示例，请开发者自行替换
    let fileData: Uint8Array = await resourceMgr?.getRawFileContent("test.jpg");
    let imageSource: image.ImageSource = image.createImageSource(fileData?.buffer);
    let pixelMap: image.PixelMap = imageSource.createPixelMapSync();
    imageSource.release();
    // 通过2D遮罩图像选择高斯点（添加到当前选区）
    editor.selectBy2DMask(pixelMap);
  });
}
```

#### [h2]invertSelection

invertSelection(): void

反选当前选区。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function InvertSelection() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 反选当前选区
    editor.invertSelection();
  });
}
```

#### [h2]clearSelection

clearSelection(): void

清除当前选区。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function ClearSelection() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 清除当前选区
    editor.clearSelection();
  });
}
```

#### [h2]transform

transform(matrix: Mat4x4): void

对当前选区应用变换矩阵。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| matrix | [Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#mat4x423) | 是 | 4x4变换矩阵。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [GSEdit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialedit#gsedit) | 3DGS模型编辑句柄。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Mat4x4, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function Transform() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 对当前选区应用变换矩阵
    let matrix: Mat4x4 = {
      x: {x: 0.8, y: 0, z: 0, w: 0},
      y: {x: 0, y: 0.8, z: 0, w: 0},
      z: {x: 0, y: 0, z: 0.8, w: 0},
      w: {x: 0, y: 0, z: 0, w: 1}
    };
    editor.transform(matrix);
  });
}
```

#### [h2]paint

paint(color: Color, mode: PaintMode): void

使用指定混合模式为当前选区上色。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | [Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#color) | 是 | 要应用的颜色。 |
| mode | [PaintMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialedit#paintmode) | 是 | 颜色混合模式。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Color, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function Paint() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 使用指定混合模式为当前选区上色
    let color: Color = {
      r: 1.0,
      g: 1.0,
      b: 0.0,
      a: 1.0
    };
    editor.paint(color, spatialEdit.PaintMode.MULTIPLY);
  });
}
```

#### [h2]remove

remove(): void

删除当前选区中的高斯点。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function Remove() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 删除当前选区中的高斯点
    editor.remove();
  });
}
```

#### [h2]undo

undo(): void

撤销最近的操作（支持多次调用连续撤销）。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function undo() : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 删除当前选区中的高斯点
    editor.remove();
    // 撤销上一步操作
    editor.undo();
  });
}
```

#### [h2]saveToPLY

saveToPLY(uri: string): Promise<boolean>

将编辑后的模型保存为PLY格式，使用Promise异步回调。

系统能力： SystemCapability.Graphics.spatialEdit

模型约束： 此模块的接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 目标文件路径。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，保存成功返回true，否则返回false。 |

示例：

```
import { spatialRender, spatialEdit } from '@kit.SpatialReconKit';
import { Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';

function SaveToPLY(context: Context) : void {
  // 加载3DGS插件
  Scene.getDefaultRenderContext()?.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
  // 加载场景
  Scene.load().then(async (scene: Scene) => {
    let rf: SceneResourceFactory = scene.getResourceFactory();
    // 获取GSNode实例
    let gsNode: spatialRender.GSNode = await rf.createNode({ name: "gs", path: "//gs" })
    // 获取GSEdit实例
    let editor: spatialEdit.GSEdit = spatialEdit.GSEdit.editGSNode(gsNode);
    // 选择2D矩形区域内的高斯点（添加到当前选区）
    let rect: Rect = {x: 0.25, y: 0.25, height: 0.5, width: 0.5};
    editor.selectBy2DBox(rect);
    // 删除当前选区中的高斯点
    editor.remove();
    // 将编辑后的模型保存为PLY格式写入沙盒路径：/data/storage/el2/base/haps/entry/files
    // 此处'edited_model.ply'仅作示例，请开发者自行替换
    let filePath: string = context.filesDir + "edited_model.ply";
    let result: boolean = await editor.saveToPLY(filePath);
    if (result) {
      console.info("保存成功");
    } else {
      console.error("保存失败");
    }
  });
}
```
