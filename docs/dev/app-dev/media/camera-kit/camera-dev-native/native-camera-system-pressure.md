---
displayed_sidebar: appDevSidebar
title: "压力管控(C/C++)"
original_url: /docs/dev/app-dev/media/camera-kit/camera-dev-native/native-camera-system-pressure
format: md
upstream_id: dev/app-dev/media/camera-kit/camera-dev-native/native-camera-system-pressure
last_sync: 2026-06-07
sync_hash: 8721c398
---
从API version 20开始，相机框架提供对系统压力等级的监听。

在长时间使用相机的场景（如直播业务）中，相机应用可以通过监听系统压力等级变化，动态调整画质（如帧率、分辨率等），平衡功耗、发热和系统负载，保证功能长时间可用。

## 状态监听

可以通过注册[OH\_CaptureSession\_OnSystemPressureLevelChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-capture-session-h#oh_capturesession_onsystempressurelevelchange)的回调函数获取系统压力的监听结果。

当系统压力发生变化时，callback返回Camera\_SystemPressureLevel参数。

参数的具体内容可参考相机管理器回调接口实例[Camera\_SystemPressureLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_systempressurelevel)。

```
void SystemPressureLevelChangeCallback(Camera_CaptureSession *captureSession,
    Camera_SystemPressureLevel systemPressureLevel)
{
    OH_LOG_INFO(LOG_APP, "SystemPressureLevelChangeCallback level: %{public}d", systemPressureLevel);
}

Camera_ErrorCode NDKCamera::RegisterSystemPressureCallback()
{
    Camera_ErrorCode ret = OH_CaptureSession_RegisterSystemPressureLevelChangeCallback(
        captureSession_, SystemPressureLevelChangeCallback);
    if (ret != CAMERA_OK) {
        OH_LOG_ERROR(LOG_APP,
            "OH_CaptureSession_RegisterSystemPressureLevelChangeCallback failed.");
    }
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L1544-L1561" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：camera_manager.cpp</a></div>
