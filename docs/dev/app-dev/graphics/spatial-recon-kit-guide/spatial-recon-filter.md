---
displayed_sidebar: appDevSidebar
title: "添加滤镜效果"
original_url: /docs/dev/app-dev/graphics/spatial-recon-kit-guide/spatial-recon-filter
format: md
---


为3DGS模型渲染画面添加风格化滤镜，包括：复古滤镜、漫画风格、黑白bit效果、颜色编辑。

## 接口说明

以下仅列出本指南示例代码中调用的部分主要接口：

| 接口名 | 描述 |
| --- | --- |
| RETRO\_EFFECT\_ID | 表示复古效果对应的ID。 |
| COMIC\_EFFECT\_ID | 表示漫画效果对应的ID。 |
| OBRA\_DINN\_EFFECT\_ID | 表示黑白bit效果对应的ID。 |
| COLOR\_EDITING\_EFFECT\_ID | 表示颜色编辑效果对应的ID。 |

## 开发步骤

1. 首先从项目根目录进入/src/main/ets/entryability/EntryAbility.ets文件，导入空间建模模块。

   ```
   import { Scene, RenderContext } from '@kit.ArkGraphics3D';
   import { spatialRender } from '@kit.SpatialReconKit';
   import { RenderingPipelineType } from '@ohos.graphics.scene'
   ```
2. 加载当前场景的上下文。

   ```
   let renderContext: RenderContext | null = Scene.getDefaultRenderContext();
   ```
3. 调用滤镜接口。

   ```
   if (renderContext != null) {
     renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);
     Scene.load().then(async (scene: Scene) => {
       let rf = scene.getResourceFactory();
       let effect : spatialRender.RetroEffect =
         await rf.createEffect({ effectId: spatialRender.GSPlugin.RETRO_EFFECT_ID }) as spatialRender.RetroEffect;
       let camera = await rf.createCamera({ name: "gsCam", path: "//gsCam" }, { renderingPipeline: RenderingPipelineType.FORWARD });
       camera.effects.append(effect)
     });
   }
   ```
