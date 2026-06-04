---
title: "目标拍摄跟踪开发指南"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-tracking-guide
---

从API version 20开始，支持使用机械体设备控制器，提供更丰富的拍摄体验，如目标跟踪和自动构图等专业功能，支持第三方应用。

目标拍摄跟踪功能通过机械体设备实现人脸和物体的自动化跟踪，提升拍摄质量和用户体验，助力开发者构建更自动化、高效的拍摄解决方案。

## 接口介绍

机械体设备控制器API的接口使用指导请参见[MechanicManager API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-mechanicmanager)。

| 接口名 | 描述 |
| --- | --- |
| on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void | 注册attachStateChange事件的回调监听，等待连接状态变化。  **说明**：从API version 20开始支持。 |
| off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void | 取消注册attachStateChange事件的回调监听。  **说明**：从API version 20开始支持。 |
| getAttachedMechDevices(): MechInfo[] | 获取已连接的机械体设备列表。  **说明**：从API version 20开始支持。 |
| setCameraTrackingEnabled(isEnabled: boolean): void | 启用或禁用摄像头跟踪。  **说明**：从API version 20开始支持。 |
| getCameraTrackingEnabled(): boolean | 检查是否启用了摄像头跟踪。  **说明**：从API version 20开始支持。 |
| on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void | 注册trackingStateChange事件的回调监听。  **说明**：从API version 20开始支持。 |
| off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void | 取消注册trackingStateChange事件的回调监听。  **说明**：从API version 20开始支持。 |
| setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void | 设置摄像头跟踪布局。  **说明**：从API version 20开始支持。 |
| getCameraTrackingLayout(): CameraTrackingLayout | 获取此机械设备摄像头跟踪布局。  **说明**：从API version 20开始支持。 |
| on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void | 注册rotationAxesStatusChange事件的回调监听。  **说明**：从API version 20开始支持。 |
| off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void | 取消注册rotationAxesStatusChange事件的回调监听。  **说明**：从API version 20开始支持。 |

## 开发步骤

### 开发准备

1. 支持Mechanic Kit协议的机械体设备。
2. 若要验证目标跟踪功能，主设备的相机驱动必须支持人脸检测。
3. 请将SDK更新到API 20或以上版本，具体操作参见[更新指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-software-install)。
4. 请确保机械体设备已通过蓝牙与主设备连接。

### 管理设备连接状态

确保机械体设备连接或断开时，应用能及时响应，支持设备连接状态的动态管理。

1. 导入机械体设备管理模块。

   ```
   import { mechanicManager } from '@kit.MechanicKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L16-L18" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>

2. 获取已连接的机械体列表。

   ```
   let savedMechanicIds: number[] = [];

   try {
   const devices = mechanicManager.getAttachedMechDevices();
   console.info('Connected devices:', devices);

   devices.forEach(device => {
       console.info(`Device ID: ${device.mechId}`);
       console.info(`Device Name: ${device.mechName}`);
       console.info(`Device Type: ${device.mechDeviceType}`);

   //保存设备类型为GIMBAL_DEVICE的设备的MechId
       if (device.mechDeviceType === mechanicManager.MechDeviceType.GIMBAL_DEVICE) {
       savedMechanicIds.push(device.mechId);
       console.info(`GIMBAL_TYPE device saved ID: ${device.mechId}`);
       } else {
       console.info(`Skip non-gimbal devices: ${device.mechId}`);
       }
   });

   console.info('List of saved gimbal device IDs:', savedMechanicIds);
   } catch (err) {
   console.error('Error getting attached devices:', err);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L179-L204" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>

3. 监听设备的连接状态变化，以便及时响应。

   ```
   const attachStateChangeCallback = (info: mechanicManager.AttachStateChangeInfo) => {
   if (info.state === mechanicManager.AttachState.ATTACHED) {
       console.info('Device attached:', info.mechInfo);
       // 执行设备连接的相关操作
       handleDeviceAttached(info.mechInfo);
   } else if (info.state === mechanicManager.AttachState.DETACHED) {
       console.info('Device detached:', info.mechInfo);
       // 执行设备断开的相关操作
       handleDeviceDetached(info.mechInfo);
   }
   };

   // 注册监听
   mechanicManager.on('attachStateChange', attachStateChangeCallback);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/AttachStateChangeCallbackRegister.ets#L72-L87" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：AttachStateChangeCallbackRegister.ets</a></div>

4. 处理设备的连接与断开的事件。

   ```
   function handleDeviceAttached(mechInfo: mechanicManager.MechInfo) {
   console.info(`New device is connected: ${mechInfo.mechName} (ID: ${mechInfo.mechId})`);
   savedMechanicIds.push(mechInfo.mechId);
   // To do sth.
   }

   function handleDeviceDetached(mechInfo: mechanicManager.MechInfo) {
   console.info(`Device disconnected: ${mechInfo.mechName} (ID: ${mechInfo.mechId})`);
   savedMechanicIds.filter(id => id !== mechInfo.mechId);
   // To do sth.
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/AttachStateChangeCallbackRegister.ets#L22-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：AttachStateChangeCallbackRegister.ets</a></div>

5. 取消连接状态的监听。

   ```
   // 取消连接状态的监听
   mechanicManager.off('attachStateChange', attachStateChangeCallback);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/AttachStateChangeCallbackRegister.ets#L108-L111" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：AttachStateChangeCallbackRegister.ets</a></div>


### 控制设备目标跟踪拍摄

启用目标拍摄功能后，设备将自动识别人脸并进行跟踪拍摄。

1. 启用摄像头的目标拍摄功能。

   ```
   try {
   //检查前判断savedMechIds不为空
   // 检查跟踪状态
   const isEnabled = mechanicManager.getCameraTrackingEnabled();

   if (isEnabled == false) {
       // 开启摄像头跟踪
       mechanicManager.setCameraTrackingEnabled(true);
       console.info('Camera tracking enabled');
   }

   console.info('Is tracking currently enabled:', isEnabled);
   } catch (err) {
   console.error('Failed to enable camera tracking:', err);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L330-L346" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>

2. 监听相机跟踪状态的变化。

   ```
   const trackingStateCallback = (eventInfo : mechanicManager.TrackingEventInfo) => {
   switch (eventInfo.event) {
       case mechanicManager.TrackingEvent.CAMERA_TRACKING_USER_ENABLED:
       console.info('The user has enabled camera tracking');
       handleTrackingEnabled();
       break;
       case mechanicManager.TrackingEvent.CAMERA_TRACKING_USER_DISABLED:
       console.info('The user has disabled camera tracking');
       handleTrackingDisabled();
       break;
       case mechanicManager.TrackingEvent.CAMERA_TRACKING_LAYOUT_CHANGED:
       console.info('Tracking layout has changed');
       handleLayoutChanged();
       break;
   }
   };

   // 注册跟踪状态监听
   mechanicManager.on('trackingStateChange', trackingStateCallback);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L400-L420" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>

3. 处理跟踪状态变化事件。

   ```
   function handleTrackingEnabled() {
   console.info('Handling camera tracking enable events');
   // 可以在此处更新UI状态
   updateTrackingUI(true);
   }

   function handleTrackingDisabled() {
   console.info('Handling camera tracking disabled events');
   // 可以在此处更新UI状态
   updateTrackingUI(false);
   }

   function handleLayoutChanged() {
   try {
       const newLayout = mechanicManager.getCameraTrackingLayout();
       console.info('New Tracking Layout:', newLayout);
       // 根据新布局更新UI
       updateLayoutUI(newLayout);
   } catch (err) {
       console.error('Failed to get new layout:', err);
   }
   }

   function updateTrackingUI(enabled: boolean) {
   // 更新UI显示跟踪状态
   // To do sth.
   console.info('Update tracking UI status:', enabled);
   }

   function updateLayoutUI(layout : mechanicManager.CameraTrackingLayout) {
   // 更新UI显示布局状态
   // To do sth.
   console.info('Update layout UI:', layout);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L25-L60" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>

4. 取消跟踪状态变化的监听。

   ```
   // 取消跟踪状态监听
   mechanicManager.off('trackingStateChange', trackingStateCallback);

   // 或者取消所有跟踪状态监听
   mechanicManager.off('trackingStateChange');
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MechanicKit/MechanicManagerSample/entry/src/main/ets/pages/ApiTestPage.ets#L445-L451" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ApiTestPage.ets</a></div>


### 调试验证

请按照以下步骤调试验证，确保机械体设备管理功能正常：

**建立连接**

1. 确保机械体与开发设备已通过蓝牙配对并连接。
2. 将开发设备放置在机械体设备上。

**功能验证步骤**

1. **设备列表查询**：调用 getAttachedMechDevices 接口查询当前已连接的机械体设备列表，验证设备是否正确识别。
2. **目标拍摄跟踪**：调用 setCameraTrackingEnabled 启用摄像头目标跟踪功能，使用 getCameraTrackingEnabled 验证状态，测试设备是否能跟随目标自动旋转。

**验证结果说明**

* 如果 getAttachedMechDevices 返回设备列表，表示设备识别成功。
* 如果 getCameraTrackingEnabled 返回真，目标拍摄跟踪启用成功。应用打开相机后，画面中出现人脸时，设备会跟随人脸转动。
