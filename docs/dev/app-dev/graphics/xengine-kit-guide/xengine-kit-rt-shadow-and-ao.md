---
displayed_sidebar: appDevSidebar
title: "光线追踪阴影和环境光遮蔽"
original_url: /docs/dev/app-dev/graphics/xengine-kit-guide/xengine-kit-rt-shadow-and-ao
format: md
upstream_id: dev/app-dev/graphics/xengine-kit-guide/xengine-kit-rt-shadow-and-ao
last_sync: 2026-06-07
sync_hash: 385ab9af
---
从6.0.0(20) 版本开始，新增光线追踪阴影和环境光遮蔽特性。

XEngine VisibleMask特性提供开箱即用的光线追踪阴影和环境光遮蔽（Ray-Traced Shadow and AO）渲染能力。相比于这些效果的传统光线追踪实现方式，依托于华为马良GPU的软硬结合优化，XEngine支持FERT(Flexible Entry Raytracing)求交加速技术，可以减少光线与场景几何的求交计算次数，从而降低实现高画质光追效果时的GPU负载。此外，XEngine通过高度优化的时空域降噪技术，解决光线追踪渲染时因为光线数量不足而引入的噪声问题，可以在发射较少光线数的情况下达成高画质表现，实现同等画质GPU负载更轻，同等负载下画质更好的效果。

## 约束与限制

* 支持的设备类型：此特性依赖设备支持Vulkan光线追踪扩展[VK\_KHR\_acceleration\_structure](https://docs.vulkan.org/refpages/latest/refpages/source/VK_KHR_acceleration_structure.html)、[VK\_KHR\_ray\_query](https://docs.vulkan.org/refpages/latest/refpages/source/VK_KHR_ray_query.html)。
* 可通过以下方式查询相关扩展特性是否支持：

  对于Vulkan，使用[HMS\_XEG\_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)扩展特性查询接口进行查询，如查询结果包含XEG\_RT\_SHADOW\_AO\_EXTENSION\_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。

## 接口说明

以下为光线追踪阴影和环境光遮蔽特性需要使用的接口，详细说明请参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)。

**Vulkan接口：**

| 接口名 | 描述 |
| --- | --- |
| VKAPI\_ATTR VkResult VKAPI\_CALL HMS\_XEG\_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32\_t \* pPropertyCount, XEG\_ExtensionProperties \* pProperties) | XEngine Vulkan扩展特性查询接口。 |
| VKAPI\_ATTR VkResult VKAPI\_CALL HMS\_XEG\_CreateRTVisibleMask (VkDevice device, const void \*pCreateInfo, XEG\_RTVisibleMask \*pRTVisibleMask) | 创建XEG\_RTVisibleMask对象。 |
| VKAPI\_ATTR VkResult VKAPI\_CALL HMS\_XEG\_CmdRenderRTVisibleMask (VkCommandBuffer commandBuffer, XEG\_RTVisibleMask rtVisibleMask, const void \*pDescription) | 录制光线追踪VisibleMask渲染命令。 |
| VKAPI\_ATTR void VKAPI\_CALL HMS\_XEG\_DestroyRTVisibleMask (XEG\_RTVisibleMask rtVisibleMask) | 销毁XEG\_RTVisibleMask对象。 |

## 业务流程

![](./img/a0c8fd75.jpg)

1. 游戏进入适用光线追踪阴影和环境光遮蔽效果的游戏场景。
2. 在确认设备支持光线追踪扩展和XEG\_RT\_SHADOW\_AO\_EXTENSION\_NAME扩展时，调用HMS\_XEG\_CreateRTVisibleMask接口创建实例。
3. 游戏构建或更新场景的光线追踪加速结构
4. 在延迟渲染GBuffer渲染阶段后，调用HMS\_XEG\_CmdRenderRTVisibleMask接口计算阴影和环境光遮蔽贴图。
5. 在延迟渲染光照计算阶段，采样前一步生成的阴影和环境光遮蔽值，进行光照效果计算。
6. 进行后续渲染流程，如后处理和UI渲染，完成一帧渲染后送显当前帧。
7. 用户退出游戏场景时，游戏应用调用HMS\_XEG\_DestroyRTVisibleMask接口销毁XEngine实例。

## 开发步骤

本章以在Vulkan应用程序延迟渲染管线中集成为例，说明使用XEngine光线追踪阴影和环境光遮蔽特性的开发步骤。

### 配置项目

编译HAP时，Native层so需要依赖NDK中的XEngine相关库和头文件。

* 头文件引用

  ```
  #include <vector>
  #include <algorithm>
  #include <string>
  #include <xengine/xeg_vulkan_extension.h>
  #include <xengine/xeg_vulkan_rt_visible_mask.h>
  ```
* CMakeLists.txt添加库依赖

  CMakeLists.txt中添加对XEngine动态链接库依赖的代码如下。

  ```
  find_library(
      # 设置路径变量的名称。
      xengine-lib
      # 指定希望CMake定位的NDK库的名称。
      xengine
  )
  target_link_libraries(nativerender PUBLIC
      // 其他库文件
      // ...
      ${xengine-lib})
  ```

### 集成XEngine光线追踪阴影和环境光遮蔽（Vulkan）

XEngine VisibleMask特性的光线追踪阴影（Ray-Traced Shadow，简称RTShadow）和环境光遮蔽（Ray-Traced AO，简称RTAO）效果API需要与Vulkan API延迟渲染管线配合使用。相关代码在Native层实现，渲染结果通过[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件显示到屏幕。

在调用XEngine Kit特性接口前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#什么是systemcapabilitysyscap)查询确认您的目标设备支持SystemCapability.Graphic.XEngine系统能力。

1. 调用[HMS\_XEG\_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口，获取XEngine支持的扩展信息，只有在支持XEG\_RT\_SHADOW\_AO\_EXTENSION\_NAME扩展时才可以使用光线追踪阴影和环境光遮蔽特性的接口。

   ```
   // physicalDevice为当前应用程序的Vulkan物理设备，需用户进行初始化
   VkPhysicalDevice physicalDevice;
   // 查询XEngine支持的Vulkan扩展列表
   std::vector<std::string> supportedExtensions;
   uint32_t propertyCount;
   HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);
   if (propertyCount > 0) {
       std::vector<XEG_ExtensionProperties> properties(propertyCount);
       if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, &properties.front())
           == VK_SUCCESS) {
           for (auto ext : properties) {
               supportedExtensions.push_back(ext.extensionName);
           }
       }
   }
   // 查询是否支持XEngine光线追踪阴影和环境光遮蔽特性
   if (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_RT_SHADOW_AO_EXTENSION_NAME)
       == supportedExtensions.end()) {
       exit(1);  // 不支持时处理错误
   }
   ```
2. 调用[HMS\_XEG\_CreateRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_creatertvisiblemask)接口，创建实例句柄。

   ```
   // 声明实例句柄
   XEG_RTVisibleMask rtVisibleMask = VK_NULL_HANDLE;
   // RTShadow和RTAO初始化信息
   XEG_RTShadowAOCreateInfo createInfo;
   createInfo.sType = XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO;
   createInfo.pNext = nullptr;
   // GBuffer图像大小
   createInfo.rtInputGbufferSize = {1280, 720};
   // 输出的RTShadow和RTAO图像大小，需要与GBuffer等比例
   createInfo.rtShadowAOSize = {640, 360};
   createInfo.enableRTShadow = true;
   createInfo.enableRTAO = true;
   // 去噪器质量模式设置为平衡模式
   createInfo.denoiseMode = XEG_DENOISE_QUALITY_MODE_BALANCED;
   // 场景遍历模式设置为性能模式
   createInfo.traversalMode = XEG_TRAVERSAL_MODE_PERFORMANCES;
   createInfo.aoOnlyInShadow = false;
   createInfo.reverseZ = false;
   // device为当前应用程序的Vulkan设备对象，需用户进行初始化
   VkDevice device;
   if (HMS_XEG_CreateRTVisibleMask(device, &createInfo, &rtVisibleMask) != VK_SUCCESS) {
       exit(1);  // 创建失败，进行错误处理
   }
   ```
3. 调用[HMS\_XEG\_CmdRenderRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderrtvisiblemask)接口执行渲染命令，每帧都需要调用。

   ```
   // RTShadow算法参数设置
   XEG_RTShadowParameters shadowParameters;
   // RTAO算法参数设置
   XEG_RTAOParameters aoParameters;
   // 去噪器参数设置
   XEG_RTShadowAODenoiserParameters denoiserParameters;
   // RTShadow和RTAO渲染输入信息
   XEG_RTShadowAODescription description;
   // 光线求交只考虑不透明物体
   const uint32_t gl_RayFlagsOpaqueEXT = 1U;
   // 在找到第一个相交点时即停止光线求交查询
   const uint32_t gl_RayFlagsTerminateOnFirstHitEXT = 4U;
   const uint32_t rayFlags = (gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) << 8;

   shadowParameters.rayTMax = 200.0f;
   shadowParameters.rayTMin = 1.0f;
   shadowParameters.sunDirection[0] = 0.1;
   shadowParameters.sunDirection[1] = 0.1;
   shadowParameters.sunDirection[2] = 0.1;
   shadowParameters.raySourceAngleInDegree = 0.35f;
   shadowParameters.shadowCullMask = rayFlags | 0xFF;
   shadowParameters.shadowCullDistance = 2000.0f;

   aoParameters.rayTMax = 30.0f;
   aoParameters.rayTMin = 0.1f;
   aoParameters.aoIntensity = 0.8f;
   aoParameters.aoNormalBias = 0.5f;
   aoParameters.aoCullMask = rayFlags | 0xFF;
   aoParameters.aoCullDistance = 2000.0f;

   denoiserParameters.temporalBlendFactor = 0.75f;
   denoiserParameters.positionConstantDistance = 5.0f;
   denoiserParameters.spatialDenoiseTimes = 2;
   denoiserParameters.ghostingAlpha = 0.5;
   denoiserParameters.spatialNormalWeight = 0.0f;
   denoiserParameters.spatialMaxKernelStep = 1;

   description.sType = XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION;
   description.pNext = nullptr;
   // 以相机实际位置的x坐标为准
   description.worldCameraOrigin[0] = 0.0;
   // 以相机实际位置的y坐标为准
   description.worldCameraOrigin[1] = 0.0;
   // 以相机实际位置的z坐标为准
   description.worldCameraOrigin[2] = 0.0;
   // gBufferDepth是GBuffer深度图像的VkImageView，需要用户进行初始化
   VkImageView gBufferDepth;
   description.inputDepthImage = gBufferDepth;
   // gBufferNormal是GBuffer法线图像的VkImageView，需要用户进行初始化，关于法线的格式和编码详见API参考
   VkImageView gBufferNormal;
   description.inputNormalImage = gBufferNormal;
   // outputShadowAOView是保存XEngine RTShadow和RTAO渲染输出的VkImageView，需要用户进行初始化
   VkImageView outputShadowAOView;
   description.outputShadowAOImage = outputShadowAOView;
   // sceneTlas是场景的Top Level光线追踪加速结构，需要用户进行初始化
   VkAccelerationStructureKHR sceneTlas;
   description.accelerationStructure = sceneTlas;
   // 相机观察矩阵，需要用户进行初始化
   float viewMatrix[16];
   // 相机投影矩阵，需要用户进行初始化
   float projectionMatrix[16];
   memcpy(description.viewMatrix, viewMatrix, sizeof(viewMatrix));
   memcpy(description.projectionMatrix, projectionMatrix, sizeof(projectionMatrix));
   // Vulkan命令缓冲区，需要用户进行初始化
   VkCommandBuffer vkCommandBuffer;
   VkResult ret = HMS_XEG_CmdRenderRTVisibleMask(vkCommandBuffer, rtVisibleMask, &description);
   if (ret != VK_SUCCESS) {
       // 录制命令错误，进行错误处理
   }
   // 设置Pipeline Barrier以同步对RTShadow和RTAO渲染输出的读取
   VkImageMemoryBarrier imageMemoryBarrier;
   imageMemoryBarrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
   imageMemoryBarrier.pNext = nullptr;
   imageMemoryBarrier.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
   // 根据实际访问方式设置
   imageMemoryBarrier.dstAccessMask = VK_ACCESS_COLOR_ATTACHMENT_READ_BIT;
   imageMemoryBarrier.oldLayout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;
   imageMemoryBarrier.newLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
   imageMemoryBarrier.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
   imageMemoryBarrier.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
   // outputShadowAOImage是保存RTShadow和RTAO渲染输出的VkImage，需要用户进行初始化
   VkImage outputShadowAOImage;
   imageMemoryBarrier.image = outputShadowAOImage;
   imageMemoryBarrier.subresourceRange = { VK_IMAGE_ASPECT_COLOR_BIT, 0, 1, 0, 1 };
   vkCmdPipelineBarrier(vkCommandBuffer,
       VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
       // 根据实际访问stage设置
       VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT,
       0, 0, nullptr, 0, nullptr, 1, &imageMemoryBarrier);
   ```

   应用RTShadow和RTAO输出的outputShadowAOImage贴图到光照计算过程中，计算着色点颜色时的Shader片段示例：

   ```
   // 光照片段着色器代码示例
   // textureRayTracingOutputShadowAO需要绑定为RTShadow和RTAO的输出图像
   layout (binding = 0) uniform sampler2D textureRayTracingOutputShadowAO;

   // color为当前着色点不考虑阴影和环境光遮蔽时的颜色值
   vec3 color;
   // 用户的着色点颜色计算过程
   // ...
   // 采样阴影和环境光遮蔽纹理，TexCoords为当前采样点的UV坐标。
   vec2 shadowAO = texture(textureRayTracingOutputShadowAO, TexCoords).xy;
   float shadow = shadowAO.x;
   float ao = shadowAO.y;
   // finalColor为最终颜色值
   vec3 finalColor = color * pow(ao, 2.0) * shadow;
   ```
4. 调用[HMS\_XEG\_DestroyRTVisibleMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyrtvisiblemask)接口销毁特性实例句柄以释放资源，在不需要再使用特性或应用退出时需要调用。

   ```
   if (rtVisibleMask != VK_NULL_HANDLE) {
       HMS_XEG_DestroyRTVisibleMask(rtVisibleMask);
   }
   ```
