---
title: "OpenGL离屏渲染视频画面"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/opengl_offscreen_render-0000002553789479
---

## 场景介绍

离屏渲染主要用于后处理和多图层合成，如滤镜效果、模糊、锐化、添加水印等，是影音娱乐类应用的高频使用场景之一。

本示例使用NativeImage对象对接解码器和[OpenGL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengles#引入opengl能力)，将NativeImage的OHNativeWindow对象设置给解码器，消费解码器生成的视频图像数据，然后将NativeImage获取到的视频图像缓存更新到OpenGL相关的纹理中。最后，通过eglSwapBuffers将渲染的缓存提交给XComponent的OHNativeWindow对象。

## 效果预览

![](./img/066ec709.png "点击放大")

## 实现思路

本示例以视频解码播放为场景案例，介绍了视频在解码后，如何将解码的视频数据离屏渲染送显到设备屏幕上。主要通过NativeImage对接解码器和OpenGL，首先创建NativeImage的对象OHNativeWindow，OHNativeWindow作为消费者设置给解码器消费生成的视频数据，然后创建帧缓存区对象FBO，将视频数据更新到OpenGL纹理上、外部纹理(视频数据)和2D纹理附着到FBO上，最后将渲染的缓冲提交给XComponent的OHNativeWindow对象来显示。具体步骤如下：

1. 初始化EGL环境。

   ```
   bool OpenGLRender::Init()
   {
       if (IsEglContextReady()) {
           return true;
       }

       OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "EglRenderContext", "EglRenderContext::Init begin.");
       eglDisplay_ = GetPlatformEglDisplay(EGL_PLATFORM_OHOS_KHR, EGL_DEFAULT_DISPLAY, NULL);
       if (eglDisplay_ == EGL_NO_DISPLAY) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
                       "EglRenderContext::Init: failed to create eglDisplay, error: %{public}s.", GetEglErrorString());
           return false;
       }

       EGLint major;
       EGLint minor;
       if (eglInitialize(eglDisplay_, &major, &minor) == EGL_FALSE) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
                       "EglRenderContext::Init: Failed to initialize EGLDisplay, error: %{public}s.",
                       GetEglErrorString());
       }
       SetupEglExtensions();

       if (eglBindAPI(EGL_OPENGL_ES_API) == EGL_FALSE) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
                       "EglRenderContext::Init: Failed to bind OpenGL ES API, error: %{public}s.", GetEglErrorString());
           return false;
       }
       EGLint count;
       EGLint configAttribs[] = { EGL_SURFACE_TYPE,
                                 EGL_WINDOW_BIT,
                                 EGL_RED_SIZE,
                                 8,
                                 EGL_GREEN_SIZE,
                                 8,
                                 EGL_BLUE_SIZE,
                                 8,
                                 EGL_ALPHA_SIZE,
                                 8,
                                 EGL_RENDERABLE_TYPE,
                                 EGL_OPENGL_ES3_BIT,
                                 EGL_NONE };
       if (eglChooseConfig(eglDisplay_, configAttribs, &config_, 1, &count) == EGL_FALSE) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
                       "EglRenderContext::Init: Failed to bind choose config, error: %{public}s.", GetEglErrorString());
           return false;
       }
       const EGLint contextAttribs[] = { EGL_CONTEXT_CLIENT_VERSION, 2, EGL_NONE };
       eglContext_ = eglCreateContext(eglDisplay_, config_, EGL_NO_CONTEXT, contextAttribs);
       if (eglContext_ == EGL_NO_CONTEXT) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
                       "EglRenderContext::Init: Failed to bind create context, error: %{public}s.", GetEglErrorString());
           return false;
       }

       OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "EglRenderContext", "EglRenderContext::Init end.");
       return true;
   }
   ```
2. 创建NativeImage对象，获取与OH\_NativeImage相关联的OHNativeWindow对象等。

   ```
   bool OpenGLRenderThread::CreateNativeImage()
   {
       nativeImage_ = OH_NativeImage_Create(-1, GL_TEXTURE_EXTERNAL_OES);
       if (nativeImage_ == nullptr) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "OH_NativeImage_Create failed.");
           return false;
       }
       int ret = 0;
       {
           std::lock_guard<std::mutex> lock(nativeImageSurfaceIdMutex_);
           // 获取NativeImage的NativeWindow对象
           nativeImageWindow_ = OH_NativeImage_AcquireNativeWindow(nativeImage_);
           ret = OH_NativeImage_GetSurfaceId(nativeImage_, &nativeImageSurfaceId_);
       }
       if (ret != 0) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread",
                       "OH_NativeImage_GetSurfaceId failed, ret is %{public}d.", ret);
           return false;
       }

       nativeImageFrameAvailableListener_.context = this;
       nativeImageFrameAvailableListener_.onFrameAvailable = &OpenGLRenderThread::OnNativeImageFrameAvailable;
       ret = OH_NativeImage_SetOnFrameAvailableListener(nativeImage_, nativeImageFrameAvailableListener_);
       if (ret != 0) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread",
                       "OH_NativeImage_SetOnFrameAvailableListener failed, ret is %{public}d.", ret);
           return false;
       }

       return true;
   }
   ```
3. 在XComponent创建时，通过回调函数OnSurfaceCreatedCB获取对应的OHNativeWindow对象，OpenGL通过XComponent的OHNativeWindow对象创建EGLSurface。
   * 获取XComponent的OHNativeWindow对象。

     ```
     void OnSurfaceCreatedCB(OH_NativeXComponent *component, void *window)
     {
         OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "Callback", "OnSurfaceCreatedCB");
         if ((component == nullptr) || (window == nullptr)) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "Callback",
                         "onSurfaceCreatedCB: component or window is null");
             return;
         }
         char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\0'};
         uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;
         if (OH_NativeXComponent_GetXComponentId(component, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "Callback",
                         "OnSurfaceCreatedCB:Unable to get XComponent id");
             return;
         }
         std::string id(idStr);
         auto render = PluginRender::GetInstance(id);
         uint64_t width;
         uint64_t height;
         int32_t xSize = OH_NativeXComponent_GetXComponentSize(component, window, &width, &height);
         if ((xSize != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) || (render == nullptr)) {
             OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "Callback",
                         "OnSurfaceCreatedCB: Unable to get XComponent size");
             return;
         }
         render->nativeWindow = reinterpret_cast<OHNativeWindow *>(window);
         (void)OH_NativeWindow_NativeWindowHandleOpt(render->nativeWindow, SET_BUFFER_GEOMETRY, static_cast<int>(width),
                                                         static_cast<int>(height));
         if (id == "OpenGL") {
             render->openGLRenderThread_->UpdateNativeWindow(render->nativeWindow, width, height);
         }
     }
     ```
   * 根据XComponent的OHNativeWindow对象，调用[eglCreateWindowSurface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengles#使用eglcreatewindowsurface创建窗口表面)创建EGLSurface对象。

     ```
     void OpenGLRenderThread::UpdateNativeWindow(void *window, uint64_t width, uint64_t height)
     {
         OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "UpdateNativeWindow.");
         auto nativeWindow = reinterpret_cast<OHNativeWindow *>(window);
         PostTask([this, nativeWindow, width, height](OpenGLRender &renderContext) {
             if (nativeWindow_ != nativeWindow) {
                 if (nativeWindow_ != nullptr) {
                     (void)OH_NativeWindow_NativeObjectUnreference(nativeWindow_);
                 }
                 nativeWindow_ = nativeWindow;
                 if (nativeWindow_ != nullptr) {
                     (void)OH_NativeWindow_NativeObjectReference(nativeWindow_);
                 }

                 if (eglSurface_ != EGL_NO_SURFACE) {
                     renderContext_->DestroyEglSurface(eglSurface_);
                     eglSurface_ = EGL_NO_SURFACE;
                     CleanGLResources();
                 }
             }
             if (nativeWindow_ != nullptr) {
                 (void)OH_NativeWindow_NativeWindowHandleOpt(nativeWindow_, SET_BUFFER_GEOMETRY, static_cast<int>(width),
                                                             static_cast<int>(height));
                 if (eglSurface_ == EGL_NO_SURFACE) {
                     eglSurface_ = renderContext_->CreateEglSurface(static_cast<EGLNativeWindowType>(nativeWindow_));
                 }
                 if (eglSurface_ == EGL_NO_SURFACE) {
                     OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "xfl CreateEglSurface failed.");
                     return;
                 }
                 renderContext_->MakeCurrent(eglSurface_);
                 CreateGLResources();
             }
         });
     }
     ```
4. 通过OnNeedOutputBuffer获取解码的视频数据后，在解码输出子线程中，将解码后的视频数据提交给输出Surface。

   ```
   int32_t VideoDecoder::Config(const SampleInfo &sampleInfo, CodecUserData *codecUserData)
   {
       if (decoder_ == nullptr) {
           OH_LOG_ERROR(LOG_APP, "Decoder is null");
           return AVCODEC_SAMPLE_ERR_ERROR;
       }

       if (codecUserData == nullptr) {
           OH_LOG_ERROR(LOG_APP, "Invalid param: codecUserData");
           return AVCODEC_SAMPLE_ERR_ERROR;
       }

       int32_t ret = Configure(sampleInfo);
       if (ret != AVCODEC_SAMPLE_ERR_OK) {
           OH_LOG_ERROR(LOG_APP, "Configure failed");
           return AVCODEC_SAMPLE_ERR_ERROR;
       }

       if (sampleInfo.window != nullptr) {
           // 设置视频解码器的Surface
           int ret = OH_VideoDecoder_SetSurface(decoder_, sampleInfo.window);
           if (ret != AV_ERR_OK) {
               OH_LOG_ERROR(LOG_APP, "Set surface failed, ret: %{public}d", ret);
               return AVCODEC_SAMPLE_ERR_ERROR;
           }
       }

       ret = SetCallback(codecUserData);
       if (ret != AVCODEC_SAMPLE_ERR_OK) {
           OH_LOG_ERROR(LOG_APP, "Set callback failed, ret: %{public}d", ret);
           return AVCODEC_SAMPLE_ERR_ERROR;
       }

       ret = OH_VideoDecoder_Prepare(decoder_);
       if (ret != AV_ERR_OK) {
           OH_LOG_ERROR(LOG_APP, "Prepare failed, ret: %{public}d", ret);
           return AVCODEC_SAMPLE_ERR_ERROR;
       }

       return AVCODEC_SAMPLE_ERR_OK;
   }
   ```
5. 通过[OH\_NativeImage\_AttachContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h#oh_nativeimage_attachcontext)绑定上下文，再通过[OH\_NativeImage\_UpdateSurfaceImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h#oh_nativeimage_updatesurfaceimage)将视频图像缓存更新至OpenGL的纹理上。

   ```
   void OpenGLRenderThread::DrawImage() {
       if (nativeImageTexId_ == 9999) {
           glGenTextures(1, &nativeImageTexId_);
           glBindTexture(GL_TEXTURE_EXTERNAL_OES, nativeImageTexId_);
           glTexParameteri(GL_TEXTURE_EXTERNAL_OES, GL_TEXTURE_WRAP_S, GL_REPEAT);
           glTexParameteri(GL_TEXTURE_EXTERNAL_OES, GL_TEXTURE_WRAP_T, GL_REPEAT);
           glTexParameteri(GL_TEXTURE_EXTERNAL_OES, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
           glTexParameteri(GL_TEXTURE_EXTERNAL_OES, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
           int viewWidth = 0;
           int viewHeight = 0;
           OH_NativeWindow_NativeWindowHandleOpt(nativeWindow_, GET_BUFFER_GEOMETRY, &viewHeight, &viewWidth);
           CreateFrameBufferObj(viewWidth, viewHeight);
       }
       OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "DrawImage.");

       if (eglSurface_ == EGL_NO_SURFACE) {
           OH_LOG_Print(LOG_APP, LOG_WARN, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "eglSurface_ is EGL_NO_SURFACE");
           return;
       }

       OH_NativeImage_AttachContext(nativeImage_, nativeImageTexId_);

       // 通过OH_NativeImage获取最新帧更新相关联的OpenGL ES纹理
       int32_t ret = OH_NativeImage_UpdateSurfaceImage(nativeImage_);

       if (ret != 0) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread",
                       "OH_NativeImage_UpdateSurfaceImage failed, ret: %{public}d, texId: %{public}d", ret,
                       nativeImageTexId_);
           return;
       }
       OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "OpenGLRenderThread",
                   "OH_NativeImage_UpdateSurfaceImage succeed.");

       OH_NativeImage_AcquireNativeWindow(nativeImage_);

       ret = OH_NativeImage_GetTransformMatrix(nativeImage_, matrix_);
       if (ret != 0) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "OpenGLRenderThread",
                       "OH_NativeImage_GetTransformMatrix failed, ret: %{public}d", ret);
           return;
       }

       int32_t transformTmp = 5;
       ComputeTransformByMatrix(transformTmp, matrix_);

       DrawFboImage();
       DrawPreviewImage();
   }
   ```
6. 创建帧缓存区对象FBO，将外部纹理和2D纹理附着到FBO上。

   ```
   bool OpenGLRenderThread::CreateFrameBufferObj(int32_t width, int32_t height) {
       // 创建并初始化FBO
       glGenFramebuffers(1, &fboId_);             // 创建帧缓存对象FBO
       glBindFramebuffer(GL_FRAMEBUFFER, fboId_); // 绑定帧缓存对象FBO

       // 创建并初始化FBO纹理
       glGenTextures(1, &fboTexId_);            // 创建纹理对象
       glBindTexture(GL_TEXTURE_2D, fboTexId_); // 绑定纹理对象
       // 设置纹理参数
       glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
       glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
       // 设置纹理过滤参数
       glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
       glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
       glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE,
                   nullptr); // 创建初始化纹理对象或更新现有纹理对象内容

       glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, fboTexId_, 0); // 将纹理绑定到FBO对象上
       GLenum status = glCheckFramebufferStatus(GL_FRAMEBUFFER); // 检查当前绑定的帧缓存对象的状态
       if (status != GL_FRAMEBUFFER_COMPLETE) {
           OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "RenderThread", "Frame buffer incomplete!.");
           return false;
       }

       glBindTexture(GL_TEXTURE_2D, GL_NONE);      // 解绑纹理对象
       glBindFramebuffer(GL_FRAMEBUFFER, GL_NONE); // 解绑FBO
       return true;
   }
   ```
7. 通过[OH\_Drawing\_TypographyPaint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_typographypaint)绘制文本。

   ```
   void SampleBitMap::DrawText(void) {
       OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, "OpenGLRenderThread", "SampleBitMap::DrawText");
       // 选择从左到右/左对齐等排版属性
       OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();
       OH_Drawing_SetTypographyTextDirection(typoStyle, TEXT_DIRECTION_LTR);
       OH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_JUSTIFY);

       // 设置文字颜色
       OH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();
       OH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0xFF, 0xFF));

       // 设置文字大小、字重等属性
       double fontSize = width_ / 15;
       OH_Drawing_SetTextStyleFontSize(txtStyle, fontSize);
       OH_Drawing_SetTextStyleFontWeight(txtStyle, FONT_WEIGHT_400);
       OH_Drawing_SetTextStyleBaseLine(txtStyle, TEXT_BASELINE_ALPHABETIC);
       OH_Drawing_SetTextStyleFontHeight(txtStyle, 1);

       // 设置字体类型等
       const char *fontFamilies[] = {"HarmonyOS Sans"};
       OH_Drawing_SetTextStyleFontFamilies(txtStyle, 1, fontFamilies);
       OH_Drawing_SetTextStyleFontStyle(txtStyle, FONT_STYLE_NORMAL);
       OH_Drawing_TypographyCreate *handler =
           OH_Drawing_CreateTypographyHandler(typoStyle, OH_Drawing_CreateFontCollection());
       OH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);

       // 设置文字内容
       const char *text = "离屏渲染";
       OH_Drawing_TypographyHandlerAddText(handler, text);
       OH_Drawing_TypographyHandlerPopTextStyle(handler);
       OH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);

       // 设置页面最大宽度
       double maxWidth = width_;
       OH_Drawing_TypographyLayout(typography, maxWidth);

       // 设置文本在画布上绘制的起始位置
       double position[2] = {width_ / 2.5, height_ / 2.0};

       // 将文本绘制到画布上
       OH_Drawing_TypographyPaint(typography, cCanvas_, position[0], position[1]);
   }
   ```
8. 通过eglSwapBuffers将渲染的缓存提交给XComponent的OHNativeWindow对象。

   ```
   void OpenGLRender::SwapBuffers(EGLSurface surface) const
   {
       EGLBoolean ret = eglSwapBuffers(eglDisplay_, surface);
       if (ret == EGL_FALSE) {
           EGLint surfaceId = -1;
           eglQuerySurface(eglDisplay_, surface, EGL_CONFIG_ID, &surfaceId);
           OH_LOG_Print(
               LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "EglRenderContext",
               "EglRenderContext::SwapBuffers: Failed to SwapBuffers on EGLSurface %{public}d, error is %{public}s.",
               surfaceId, GetEglErrorString());
       }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├───entry/src/main/cpp
│   ├───capbilities
│   │   ├───include
│   │   │   ├───SampleInfo.h                // 视频样本
│   │   │   ├───SampleCallback.h            // 视频回调
│   │   │   ├───Demuxer.h                   // 媒体解析
│   │   │   └───VideoDecoder.h              // 视频解码
│   │   └───src
│   │       ├───SampleCallback.cpp          // 视频回调
│   │       ├───Demuxer.cpp                 // 媒体解析
│   │       └───VideoDecoder.cpp            // 视频解码
│   ├───drawing
│   │   │   ├───sample_bitmap.h             // 绘制文本
│   │   │   └───sample_bitmap.cpp           // 绘制文本
│   ├───player
│   │   ├───include
│   │   │   └───Player.h                    // 视频播放
│   │   ├───src
│   │   │   └───Player.cpp                  // 视频播放
│   └───render
│       ├───include
│       │   ├───OpenGLRender.h              // OpenGL渲染上下文
│       │   ├───OpenGLRenderThread.h        // OpenGL渲染线程
│       │   ├───PluginManager.h             // XComponent管理
│       │   ├───PluginRender.h              // 渲染管理
│       │   └───ShaderProgram.h             // 着色器
│       └───src
│           ├───OpenGLRender.cpp            // OpenGL渲染上下文
│           ├───OpenGLRenderThread.cpp      // OpenGL渲染线程
│           ├───PluginManager.cpp           // XComponent管理
│           ├───PluginRender.cpp            // 渲染管理
│           └───ShaderProgram.cpp           // OpenGL着色器
├───entry/src/main/ets
│   ├───entryability
│   │   └───EntryAbility.ets                // 主Ability的生命周期回调内容
│   ├───entrybackupability
│   │   └───EntryBackupAbility.ets          // Ability的生命周期回调内容
│   └───pages
│       ├───OpenGLPlayer.ets                // OpenGL播放页面
│       └───Index.ets                       // 首页
└───entry/src/main/resources                // 资源目录
```

## 参考文档

[NativeImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h)

[OpenGL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengl)

[AVCodec Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-kit-intro)

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)

## 代码下载

[OpenGL离屏渲染视频画面示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310112804.96371425963185350394298570328280%3A20260604142245%3A2800%3AC7B52146B86DC835861787D472B4225CCF55C7818964DDD9CCF584F28B9C8C33.zip?needInitFileName=true)
