---
displayed_sidebar: appDevSidebar
title: "高性能GPU排序"
original_url: /docs/dev/app-dev/graphics/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting
format: md
upstream_id: dev/app-dev/graphics/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting
last_sync: 2026-06-07
sync_hash: 124a3681
---
从6.0.0(20) 版本开始，新增高性能GPU排序特性。

XEngine Kit HPS(High Performance Sorting)特性提供高性能GPU排序能力。相比于其它排序能力，该能力依托于华为Maleoon GPU的软硬结合优化，效率更高。

## 约束与限制

可通过以下方式查询相关扩展特性是否支持：

对于Vulkan，使用[HMS\_XEG\_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)扩展特性查询接口进行查询，如查询结果包含XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。

## 接口说明

以下接口为使用高性能GPU排序所需要使用的接口，关于这些接口的详细说明见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)。

| 接口名 | 描述 |
| --- | --- |
| VKAPI\_ATTR VkResult VKAPI\_CALL HMS\_XEG\_CreateHPS (VkDevice device, const XEG\_HPSCreateInfo \*pCreateInfo, XEG\_HPS \*pHps) | 创建XEG\_HPS对象。 |
| VKAPI\_ATTR void VKAPI\_CALL HMS\_XEG\_DestroyHPS (XEG\_HPS hps) | 销毁XEG\_HPS对象。 |
| VKAPI\_ATTR VkResult VKAPI\_CALL HMS\_XEG\_CmdRadixSortHPS (VkCommandBuffer commandBuffer, XEG\_HPS hps, const XEG\_HPSRadixSortDescription \*pDescription) | 录制HPS排序命令，使用此接口前需要通过HMS\_XEG\_EnumerateDeviceExtensionProperties接口查询是否支持XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME扩展。 |

## 开发步骤

本章以在Vulkan应用程序渲染为例，说明使用高性能GPU排序的开发步骤。

### 配置项目

编译HAP时，Native层so需要依赖NDK中的XEngine相关库和头文件。

* 头文件引用

  ```
  #include <algorithm>
  #include <vector>
  #include <string>
  #include <xengine/xeg_vulkan_hps.h>
  #include <xengine/xeg_vulkan_extension.h>
  #include <xengine/xeg_extension_defs.h>
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

### 集成高性能GPU排序（Vulkan）

XEngine 高性能GPU排序可以独立使用。相关代码在Native层实现。

在调用XEngine Kit特性接口前，需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#什么是systemcapabilitysyscap)查询确认您的目标设备支持SystemCapability.Graphic.XEngine系统能力。

1. 调用[HMS\_XEG\_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口，获取XEngine支持的扩展信息，只有在支持XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME扩展时才可以使用高性能GPU排序接口。

   ```
   VkPhysicalDevice physicalDevice;
   std::vector<std::string> supportedExtensions;
   uint32_t propertyCount;
   HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);
   if (propertyCount > 0) {
       std::vector<XEG_ExtensionProperties> properties(propertyCount);
       if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, &properties.front()) ==
           VK_SUCCESS) {
           for (auto ext : properties) {
               supportedExtensions.push_back(ext.extensionName);
           }
       }
   }
   if (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_HPS_RADIX_SORT_EXTENSION_NAME) ==
       supportedExtensions.end()) {
       exit(1);
   }
   ```
2. 准备HPS相关资源。

   ```
   VkDevice device;
   VkCommandBuffer cmdBuffer;
   VkQueue queue;
   // 要被排序的key
   VkBuffer keyBuffer;
   // 与key对应的value
   VkBuffer indexBuffer;
   // 排序量
   VkBuffer sortCount;
   ```
3. 声明实例句柄。

   ```
   XEG_HPS xegHPS { VK_NULL_HANDLE };
   ```
4. 调用[HMS\_XEG\_CreateHPS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createhps)接口，实例化句柄。

   ```
   // 构造输入描述符
   XEG_HPSRadixSort sorInfo{
       XEG_STRUCTURE_TYPE_HPS_RADIX_SORT,
       nullptr
   };

   XEG_HPSCreateInfo info {
       XEG_STRUCTURE_TYPE_HPS_CREATE_INFO,
       &sorInfo
   };
   // 实例化句柄
   HMS_XEG_CreateHPS(device, &info, &xegHPS);
   ```
5. 构造排序描述符，调用[HMS\_XEG\_CmdRadixSortHPS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdradixsorthps)接口录制排序命令。

   ```
   VkCommandBufferBeginInfo cmdBufferBeginInfo {};
   cmdBufferBeginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;

   // 录制排序命令
   vkBeginCommandBuffer(cmdBuffer, &cmdBufferBeginInfo);
   XEG_HPSRadixSortDescription sortDescription{
       XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION,
       nullptr,
       sortCount,
       keyBuffer,
       indexBuffer
   };
   HMS_XEG_CmdRadixSortHPS(cmdBuffer, xegHPS, &sortDescription);
   vkEndCommandBuffer(cmdBuffer);
   ```
6. 提交排序命令。

   ```
   // 提交command buffer
   VkResult res;
   {
       VkSubmitInfo submitInfo{};
       submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;
       submitInfo.waitSemaphoreCount = 0;
       submitInfo.signalSemaphoreCount = 0;
       submitInfo.pSignalSemaphores = nullptr;
       submitInfo.commandBufferCount = 1;
       submitInfo.pCommandBuffers = &cmdBuffer;
       submitInfo.pWaitSemaphores = nullptr;
       res = vkQueueSubmit(queue, 1, &submitInfo, nullptr);
   }
   // 等待结束
   vkDeviceWaitIdle(device);
   ```
7. 销毁HPS对象。

   ```
   if(xegHPS){
       HMS_XEG_DestroyHPS(xegHPS);
   }
   ```
