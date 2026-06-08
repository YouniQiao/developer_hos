---
displayed_sidebar: appDevSidebar
title: "使用Image_NativeModule完成多图对象解码"
original_url: /docs/dev/app-dev/media/image-kit/image-native/image-decoding-c/image-source-picture-c
format: md
upstream_id: dev/app-dev/media/image-kit/image-native/image-decoding-c/image-source-picture-c
last_sync: 2026-06-07
sync_hash: 7c3afad9
---
创建ImageSource实例，将所支持格式的图片文件解码成Picture多图对象，以便在应用或系统中进行HDR图片显示、辅助图处理等操作。当前支持的图片文件格式包括JPEG、HEIF。

Picture是包含主图、辅助图和元数据的多图对象。主图包含主要图像信息，辅助图用于存储与主图相关的附加信息（如HDR增益图GAINMAP），元数据用于存储与图片相关的其他信息。Picture适用于HDR图片处理、HEIF专业格式解码等场景。

## Picture与PixelMap的区别

Picture和PixelMap是两种不同的图片解码对象，适用于不同的场景：

| 对象类型 | 适用场景 | 特性 |
| --- | --- | --- |
| [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative) | 单图显示、基础图片处理 | 单一像素数据，支持图像变换（裁剪、缩放、旋转等）、位图操作。 |
| [Picture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-picturenative) | HDR图片、HEIF专业格式、辅助图处理 | 包含主图+辅助图+元数据，可提取主图/增益图/合成HDR图为PixelMap后显示或处理，支持辅助图和元数据操作。 |

**选择建议：**

* 需要直接显示单张图片或进行裁剪、缩放、旋转等图像处理时，使用PixelMap。
* 需要处理HDR图片、获取辅助图（如GAINMAP）、操作图片元数据时，使用Picture。如需对Picture的内容进行裁剪缩放，可通过[OH\_PictureNative\_GetMainPixelmap()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h#oh_picturenative_getmainpixelmap)等接口提取PixelMap后再处理。

## 开发步骤

### 添加链接库

在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target\_link\_libraries依赖中添加libimage\_source.so 以及日志依赖libhilog\_ndk.z.so。

```
target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so)
```

### Native接口调用

具体接口说明请参考[Image\_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)。

在Deveco Studio新建Native C++应用，默认生成的项目中包含index.ets文件，在entry\src\main\cpp目录下会自动生成一个cpp文件（hello.cpp或napi\_init.cpp，本示例以hello.cpp文件名为例）。在hello.cpp中实现C API接口调用逻辑，示例代码如下：

**解码接口使用示例**

![](./img/18bd529a.png)

部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。

1. 导入相关头文件。

   ```
   #include <hilog/log.h>
   #include <multimedia/image_framework/image/image_native.h>
   #include <multimedia/image_framework/image/image_packer_native.h>
   #include <multimedia/image_framework/image/image_source_native.h>
   #include <multimedia/image_framework/image/picture_native.h>
   #include <multimedia/image_framework/image/pixelmap_native.h>
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadPicture.cpp#L15-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadPicture.cpp</a></div>

2. 日志宏定义可参考下述代码按实际需求自行修改。

   ```
   #undef LOG_DOMAIN
   #undef LOG_TAG
   #define LOG_DOMAIN 0x3200
   #define LOG_TAG "IMAGE_SAMPLE"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadImageSource.cpp#L31-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadImageSource.cpp</a></div>

3. 定义ImagePictureNative类。

   ```
   class ImagePictureNative {
   public:
       Image_ErrorCode errorCode = IMAGE_SUCCESS;
       OH_DecodingOptionsForPicture *options = nullptr;
       OH_ImagePackerNative *imagePacker = nullptr;
       OH_PackingOptions *packerOptions = nullptr;
       OH_PictureNative *picture = nullptr;
       OH_ImageSourceNative *source = nullptr;
       ImagePictureNative() {}
       ~ImagePictureNative() {}
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/imageKits.h#L74-L86" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：imageKits.h</a></div>

4. 创建一个ImagePictureNative实例。

   ```
   static ImagePictureNative *g_thisPicture = new ImagePictureNative();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadPicture.cpp#L30-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadPicture.cpp</a></div>

5. 定义ImageAuxiliaryPictureNative类。

   ```
   class ImageAuxiliaryPictureNative {
   public:
       Image_ErrorCode errorCode = IMAGE_SUCCESS;
       Image_AuxiliaryPictureType type = AUXILIARY_PICTURE_TYPE_GAINMAP;
       OH_AuxiliaryPictureNative *auxiliaryPicture = nullptr;
       size_t buffSize = 640 * 480 * 4; // 辅助图size：`长 * 宽 * 每个像素占用的字节数`。
       ImageAuxiliaryPictureNative() {}
       ~ImageAuxiliaryPictureNative() {}
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/imageKits.h#L88-L98" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：imageKits.h</a></div>

6. 创建一个ImageAuxiliaryPictureNative实例。

   ```
   static ImageAuxiliaryPictureNative *g_thisAuxiliaryPicture  = new ImageAuxiliaryPictureNative();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadPicture.cpp#L33-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadPicture.cpp</a></div>

7. 创建GetJsResult函数处理napi返回值。

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

8. 创建解码参数，配置解码参数，调用解码接口进行解码并获取辅助图。

   解码时可指定需要解码的辅助图类型。辅助图本身不作为独立图像直接显示，而是作为辅助数据参与图像处理（如HDR合成、深度信息提取等）。常见的辅助图类型包括：

   | 辅助图类型 | 说明 |
   | --- | --- |
   | GAINMAP | 增益图，用于HDR图像的高动态范围渲染。 |
   | DEPTH\_MAP | 深度图，存储像素距离信息，用于3D重建、背景分离等场景。 |
   | UNREFOCUS\_MAP | 未重对焦原图，用于人像虚化后期处理。 |
   | LINEAR\_MAP | 线性图，用于视觉效果增强与色彩后期处理。 |
   | FRAGMENT\_MAP | 水印裁剪图，用于水印移除、原图恢复等场景。 |

   ![](./img/25a66bf0.png)

   并非所有图片都包含辅助图。在获取辅助图前，应先调用OH\_PictureNative\_GetAuxiliaryPicture接口尝试获取。其他辅助图类型请参考[Image\_AuxiliaryPictureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h#image_auxiliarypicturetype)。

   ```
   // 释放ImageSource。
   napi_value ReleasePictureSource(napi_env env, napi_callback_info info)
   {
       if (g_thisPicture->source != nullptr) {
           g_thisPicture->errorCode = OH_ImageSourceNative_Release(g_thisPicture->source);
           g_thisPicture->source = nullptr;
           return GetJsResult(env, g_thisPicture->errorCode);
       }

       if (g_thisPicture->picture != nullptr) {
           g_thisPicture->errorCode = OH_PictureNative_Release(g_thisPicture->picture);
           g_thisPicture->picture = nullptr;
           return GetJsResult(env, g_thisPicture->errorCode);
       }

       OH_LOG_DEBUG(LOG_APP, "ReleasePictureSource source is null !");
       return GetJsResult(env, g_thisPicture->errorCode);
   }

   // 创造解码参数。
   napi_value CreateDecodingOptions(napi_env env, napi_callback_info info)
   {
       g_thisPicture->errorCode = OH_DecodingOptionsForPicture_Create(&g_thisPicture->options);

       if (g_thisPicture->errorCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "OH_DecodingOptionsForPicture_Create failed, errCode: %{public}d.",
                        g_thisPicture->errorCode);
           return GetJsResult(env, g_thisPicture->errorCode);
       } else {
           OH_LOG_DEBUG(LOG_APP, "OH_DecodingOptionsForPicture_Create success !");
       }

       return GetJsResult(env, g_thisPicture->errorCode);
   }

   // 配置解码参数 从应用层传入。
   napi_value SetDesiredAuxiliaryPictures(napi_env env, napi_callback_info info)
   {
       size_t argc = 1;
       napi_value args[1] = {nullptr};
       if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok || argc < 1 || args[0] == nullptr) {
           OH_LOG_ERROR(LOG_APP, "napi_get_cb_info failed !");
           return GetJsResult(env, IMAGE_BAD_PARAMETER);
       }

       uint32_t length = 0;
       napi_get_array_length(env, args[0], &length);
       if (length <= 0) {
           OH_LOG_INFO(LOG_APP, "Desired auxiliary picture type list is empty.");
           return GetJsResult(env, IMAGE_BAD_PARAMETER);
       }
       Image_AuxiliaryPictureType typeList[length];
       for (int index = 0; index < length; index++) {
           napi_value element;
           uint32_t ulType = 0;
           napi_get_element(env, args[0], index, &element);
           napi_get_value_uint32(env, element, &ulType);
           typeList[index] = static_cast<Image_AuxiliaryPictureType>(ulType);
           OH_LOG_DEBUG(LOG_APP, "ulType is :%{public}d", ulType);
       }

       // 调用OH_DecodingOptionsForPicture_Create接口创建DecodingOptions。
       CreateDecodingOptions(env, info);
       g_thisPicture->errorCode =
           OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures(g_thisPicture->options, typeList, length);
       if (g_thisPicture->errorCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures failed,errCode: %{public}d.",
                        g_thisPicture->errorCode);
           return GetJsResult(env, g_thisPicture->errorCode);
       } else {
           OH_LOG_DEBUG(LOG_APP, "OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures success !");
       }

       return GetJsResult(env, g_thisPicture->errorCode);
   }

   // 解码。
   napi_value CreatePictureByImageSource(napi_env env, napi_callback_info info)
   {
       size_t argc = 1;
       napi_value args[1] = {nullptr};

       if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok || argc < 1 || args[0] == nullptr) {
           OH_LOG_ERROR(LOG_APP, "CreatePicture_ napi_get_cb_info failed !");
           return GetJsResult(env, IMAGE_BAD_PARAMETER);
       }

       char filePath[MAX_SIZE];
       size_t pathSize;
       napi_get_value_string_utf8(env, args[0], filePath, MAX_SIZE, &pathSize);

       g_thisPicture->errorCode = OH_ImageSourceNative_CreateFromUri(filePath, pathSize, &g_thisPicture->source);
       if (g_thisPicture->errorCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "OH_ImageSourceNative_CreateFromUri failed, errCode: %{public}d.",
                        g_thisPicture->errorCode);
           return GetJsResult(env, g_thisPicture->errorCode);
       } else {
           OH_LOG_DEBUG(LOG_APP, "OH_ImageSourceNative_CreateFromUri success !");
       }

       // 先创建解码参数，再进行解码，此处创建解码参数的接口在SetDesiredAuxiliaryPictures实现。
       g_thisPicture->errorCode =
           OH_ImageSourceNative_CreatePicture(g_thisPicture->source, g_thisPicture->options, &g_thisPicture->picture);

       // 释放options。
       OH_DecodingOptionsForPicture_Release(g_thisPicture->options);
       g_thisPicture->options = nullptr;

       g_thisAuxiliaryPicture ->errorCode = OH_PictureNative_GetAuxiliaryPicture(g_thisPicture->picture,
           g_thisAuxiliaryPicture ->type, &g_thisAuxiliaryPicture ->auxiliaryPicture);
       if (g_thisAuxiliaryPicture ->errorCode == IMAGE_SUCCESS) {
           uint8_t* buff = new uint8_t[g_thisAuxiliaryPicture ->buffSize];
           Image_ErrorCode readCode = OH_AuxiliaryPictureNative_ReadPixels(g_thisAuxiliaryPicture ->auxiliaryPicture, buff,
               &g_thisAuxiliaryPicture ->buffSize);
           if (readCode != IMAGE_SUCCESS) {
               OH_LOG_ERROR(LOG_APP, "OH_AuxiliaryPictureNative_ReadPixels failed, errCode: %{public}d.", readCode);
           }
           OH_AuxiliaryPictureNative_Release(g_thisAuxiliaryPicture ->auxiliaryPicture);
           g_thisAuxiliaryPicture ->auxiliaryPicture = nullptr;
           delete []buff;
       }

       if (g_thisPicture->errorCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "ImageSourceNative_CreatePicture failed, errCode: %{public}d.",
                        g_thisPicture->errorCode);
           return GetJsResult(env, g_thisPicture->errorCode);
       } else {
           OH_LOG_DEBUG(LOG_APP, "ImageSourceNative_CreatePicture success !");
       }

       return GetJsResult(env, g_thisPicture->errorCode);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadPicture.cpp#L37-L170" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadPicture.cpp</a></div>
