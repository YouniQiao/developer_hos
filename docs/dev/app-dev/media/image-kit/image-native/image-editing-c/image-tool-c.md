---
displayed_sidebar: appDevSidebar
title: "使用Image_NativeModule编辑图片Exif信息"
original_url: /docs/dev/app-dev/media/image-kit/image-native/image-editing-c/image-tool-c
format: md
upstream_id: dev/app-dev/media/image-kit/image-native/image-editing-c/image-tool-c
last_sync: 2026-06-07
sync_hash: c8186798
---
Image Kit提供图片Exif信息的读取与编辑能力。

Exif（Exchangeable image file format）是专门为数码相机的照片设定的文件格式，可以记录数码照片的属性信息和拍摄数据。当前支持JPEG、PNG、HEIF、WEBP23+、DNG23+格式，且需要图片包含Exif信息。

在图库等应用中，需要查看或修改数码照片的Exif信息。当摄像机的手动镜头参数无法自动写入到Exif信息中，或者相机断电等原因会导致拍摄时间出错时，可手动修改错误的Exif数据。

系统目前仅支持对部分Exif信息的查看和修改，具体支持的范围请参见：[变量](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-common-h#变量)里的OHOS\_IMAGE\_PROPERTY\_XXX类型。需要注意的是，DNG格式图片仅支持读取Exif信息，不支持修改。

## 开发步骤

### 添加链接库

在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target\_link\_libraries依赖中添加libimage\_source.so 以及日志依赖libhilog\_ndk.z.so。

```
target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so)
```

### Native接口调用

Exif信息的读取与编辑相关C API接口的详细介绍请参见[OH\_ImageSourceNative\_GetImageProperty()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourcenative_getimageproperty)和[OH\_ImageSourceNative\_ModifyImageProperty()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourcenative_modifyimageproperty)。

在Deveco Studio新建Native C++应用，默认生成的项目中包含index.ets文件，在entry\src\main\cpp目录下会自动生成一个cpp文件（hello.cpp或napi\_init.cpp，本示例以hello.cpp文件名为例）。在hello.cpp中实现C API接口调用逻辑，示例代码如下：

**读取和编辑图片Exif信息接口使用示例**

![](./img/21a4f8cf.png)

部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。

1. 导入相关头文件。

   ```
   #include <string>
   #include <hilog/log.h>
   #include <multimedia/image_framework/image/image_source_native.h>
   #include "napi/native_api.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadImageSource.cpp#L17-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadImageSource.cpp</a></div>

2. 日志宏定义可参考下述代码按实际需求自行修改。

   ```
   #undef LOG_DOMAIN
   #undef LOG_TAG
   #define LOG_DOMAIN 0x3200
   #define LOG_TAG "IMAGE_SAMPLE"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadImageSource.cpp#L31-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadImageSource.cpp</a></div>

3. 定义ImageSourceNative类。

   ```
   class ImageSourceNative {
   public:
       OH_ImageSource_Info *imageInfo;
       OH_ImageSourceNative *source = nullptr;
       OH_PixelmapNative *resPixMap = nullptr;
       OH_Pixelmap_ImageInfo *pixelmapImageInfo = nullptr;
       uint32_t frameCnt = 0;
       ImageSourceNative() {}
       ~ImageSourceNative() {}
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/imageKits.h#L61-L72" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：imageKits.h</a></div>

4. 创建ImageSourceNative的一个实例。

   ```
   static ImageSourceNative *g_thisImageSource = new ImageSourceNative();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadImageSource.cpp#L41-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadImageSource.cpp</a></div>

5. 创建GetJsResult函数处理napi返回值。

   ```
   // 处理napi返回值。
   napi_value GetJsResult(napi_env env, int result)
   {
       napi_value resultNapi = nullptr;
       napi_create_int32(env, result, &resultNapi);
       return resultNapi;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/napi_init.cpp#L21-L29" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

6. 在成功创建ImageSource对象后，读取、编辑Exif信息。

   ![](./img/baa644a0.png)

   创建ImageSource对象可参考[图片解码](/docs/dev/app-dev/media/image-kit/image-native/image-decoding-c/image-source-c)。

   ```
   // 获取指定property的value值。
   napi_value GetImageProperty(napi_env env, napi_callback_info info)
   {
       napi_value argValue[1] = {nullptr};
       size_t argCount = 1;
       if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < 1 ||
           argValue[0] == nullptr) {
           OH_LOG_ERROR(LOG_APP, "GetImageProperty napi_get_cb_info failed!");
           return GetJsResult(env, IMAGE_BAD_PARAMETER);
       }
       // 修改指定属性键的值。
       char key[MAX_STRING_LENGTH];
       size_t keySize = MAX_STRING_LENGTH;
       napi_get_value_string_utf8(env, argValue[0], (char *)key, sizeof(key), &keySize);
       Image_String getKey;
       getKey.data = key;
       getKey.size = keySize;
       Image_String getValue = {nullptr, 0};
       OH_LOG_INFO(LOG_APP, "OH_ImageSourceNative_GetImageProperty key: %{public}s.", getKey.data);
       Image_ErrorCode errCode = OH_ImageSourceNative_GetImagePropertyWithNull(g_thisImageSource->source,
                                                                               &getKey, &getValue);
       if (errCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "OH_ImageSourceNative_GetImageProperty failed, errCode: %{public}d.", errCode);
           if (getValue.data != nullptr) {
               free(getValue.data);
               getValue.data = nullptr;
           }
           return GetJsResult(env, errCode);
       }
       napi_value resultNapi = nullptr;
       napi_create_string_utf8(env, getValue.data, getValue.size, &resultNapi);
       free(getValue.data);
       getValue.data = nullptr;
       return resultNapi;
   }

   // 修改指定property的value值。
   napi_value ModifyImageProperty(napi_env env, napi_callback_info info)
   {
       napi_value argValue[2] = {nullptr};
       size_t argCount = 2;
       const size_t minCount = 2;
       if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < minCount ||
           argValue[0] == nullptr || argValue[1] == nullptr) {
           OH_LOG_ERROR(LOG_APP, "ModifyImageProperty napi_get_cb_info failed!");
           return GetJsResult(env, IMAGE_BAD_PARAMETER);
       }

       // 获取要修改的key值。
       char key[MAX_STRING_LENGTH];
       size_t keySize = MAX_STRING_LENGTH;
       napi_get_value_string_utf8(env, argValue[0], (char *)key, sizeof(key), &keySize);
       Image_String setKey;
       setKey.data = key;
       setKey.size = keySize;
       OH_LOG_INFO(LOG_APP, "ModifyImageProperty key: %{public}s.", setKey.data);

       // 获取要修改的value值。
       char value[MAX_STRING_LENGTH];
       size_t valueSize;
       napi_get_value_string_utf8(env, argValue[1], (char *)value, MAX_STRING_LENGTH, &valueSize);
       Image_String setValue;
       setValue.data = value;
       setValue.size = valueSize;
       OH_LOG_INFO(LOG_APP, "ModifyImageProperty value: %{public}s.", setValue.data);

       Image_ErrorCode errCode = OH_ImageSourceNative_ModifyImageProperty(g_thisImageSource->source, &setKey, &setValue);
       return GetJsResult(env, errCode);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadImageSource.cpp#L133-L203" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadImageSource.cpp</a></div>
