---
displayed_sidebar: appDevSidebar
title: "通用文件缓存加速（C/C++）"
original_url: /docs/dev/app-dev/application-services/preview-kit-guide/preview-filecacheboost
format: md
---


从6.1.0(23)版本开始，新增通用文件缓存加速功能。提供了缓存机制将文件的解码数据缓存到磁盘中，后续用户再次打开或浏览该文件，应用无需执行解码流程，可直接从磁盘中获取缓存的解码数据，省去耗时的解码时间。

## 接口说明

具体API说明详见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview)。

**表1** 文件缓存接口介绍

| 接口名 | 描述 |
| --- | --- |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_Init (  const char\* path, size\_t pathLen, uint32\_t cacheUpperLimitMb, const char\* dbName, size\_t dbNameLen) | 初始化缓存路径、缓存容量上限、数据库名称。系统保证了线程并发安全控制，如需支持多进程并发场景，建议各进程使用不同的数据库文件名以保证访问安全性。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_AddObjectByKey (  const uint8\_t \*key, size\_t keyLen, const uint8\_t \*data, size\_t dataLen, uint32\_t weight) | 向系统添加缓存。计算的key为缓存的唯一标识。用户可传入缓存的权重，系统会参考该权重计算缓存的优先级进行容量管理，若开发者希望某个缓存对象优先保留，应为其分配较高的权重。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_GetObjectByKey (  const uint8\_t \*key, size\_t keyLen, uint8\_t \*\*data, size\_t \*dataLen) | 根据key值获取对应的缓存。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_RemoveObjectByKey (const uint8\_t \*key, size\_t keyLen) | 根据key值删除对应的缓存。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_ClearAllCache (void) | 删除当前所有的缓存。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_AddSerialObjectByKey (const uint8\_t \*key, size\_t keyLen, SerializeFunc func, const void \*object, uint32\_t weight) | 创建一个复杂类型对象的缓存项，通过传入自定义的序列化函数SerializeFunc对该象进行序列化处理，以便将其存储至磁盘并支持后续恢复。 |
| FileCacheBoost\_ErrCode HMS\_FileCacheBoost\_GetSerialObjectByKey (const uint8\_t \*key, size\_t keyLen, DeserializeFunc func, void \*\*object) | 根据指定的key值从缓存中获取复杂类型对象，并通过传入的反序列化函数DeserializeFunc将其还原为原始数据，从而获得完整的对象内容。 |

## 开发准备

需要先通过[Syscap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap#使用caniuse判断syscap是否可调用)查询您的目标设备是否支持SystemCapability.PCService.OpenFileBoost系统能力，当前仅在2in1设备上支持该能力。

## 开发步骤

1. 添加对应的头文件。

   ```
   #include "PreviewKit/file_cache_boost.h"
   #include <string>
   ```
2. 编写CMakeLists.txt，新增对通用文件缓存功能的依赖。

   ```
   target_link_libraries(entry PUBLIC
       libfile_cache_boost.so
   )
   ```
3. 初始化操作，开发者可初始化缓存路径、缓存容量上限、数据库名称，系统会创建缓存路径和对应的数据库。

   ```
   // 开发者可传入一个相对路径
   const char* path = "ohcache";
   size_t pathLen = strlen(path);
   // 以MB为单位，2GB = 2048MB
   uint32_t cacheUpperLimitMb = 2048;
   const char* dbName = "cache";
   size_t dbNameLen = strlen(dbName);
   FileCacheBoost_ErrCode res = HMS_FileCacheBoost_Init(path, pathLen,
       cacheUpperLimitMb, dbName, dbNameLen);
   if (res != FILE_CACHE_BOOST_SUCCESS) {
       // 初始化失败，开发者可自定义错误处理
   }
   ```
4. 初始化完成后，开发者可实现添加、获取和删除等操作，将需要的缓存数据落盘，下次使用时直接获取缓存数据。

   ```
   // 添加缓存
   std::string keyStr = "test_000";
   std::vector<uint8_t> keyVector(keyStr.begin(), keyStr.end());
   size_t keyLen = keyStr.size();
   uint8_t *key = keyVector.data();
   uint8_t *data = new uint8_t[90 * 1024];
   size_t dataLen = 90 * 1024;
   uint32_t weight = 100;
   // 用 abc 填充
   for (size_t i = 0; i < dataLen; i++) {
      data[i] = 'a' + (i % 3);
   }
   FileCacheBoost_ErrCode res = HMS_FileCacheBoost_AddObjectByKey(key, keyLen, data, dataLen, weight);
   if (res == FILE_CACHE_BOOST_SUCCESS) {
       // 添加缓存成功，开发者后续可使用该缓存
   } else if (res == FILE_CACHE_BOOST_ERROR_KEY_EXIST) {
       // key缓存已经存在，如果开发者需要对缓存进行修改，需要先删除后再添加
       HMS_FileCacheBoost_RemoveObjectByKey(key, keyLen);
   } else if (res == FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED) {
       // 未初始化，开发者可初始化后执行
   } else if (res == FILE_CACHE_BOOST_ERROR_EXCEED_LIMIT) {
       // 单个缓存大于容量上限，无法添加
   } else {
       // 添加缓存失败，开发者可自定义错误处理
   }

   // 获取缓存
   uint8_t *revData = new uint8_t[90 * 1024 * 1024];
   FileCacheBoost_ErrCode res = HMS_FileCacheBoost_GetObjectByKey(key, keyLen, &revData, &dataLen);
   if (res == FILE_CACHE_BOOST_SUCCESS) {
       // 获取缓存数据成功，开发者可直接使用该缓存数据执行后续逻辑

       // 使用完成后，开发者可以释放系统分配的内存空间
       HMS_FileCacheBoost_FreeObject(revData);
   } else if (res == FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND) {
       // key值不存在，开发者可对该key进行添加缓存
       HMS_FileCacheBoost_AddObjectByKey(key, keyLen, data, dataLen, weight);
   } else if (res == FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED) {
       // 未初始化，开发者可初始化后执行
   } else {
       // 获取缓存失败，开发者可自定义错误处理
   }

   // 删除缓存
   FileCacheBoost_ErrCode res = HMS_FileCacheBoost_RemoveObjectByKey(key, keyLen);
   // 新增key不存在的返回值
   if (res != FILE_CACHE_BOOST_SUCCESS) {
       // 删除失败，开发者可自定义错误处理
   }
   ```
5. 如果开发者需要清除所有缓存，可以调用HMS\_FileCacheBoost\_ClearAllCache。

   ```
   FileCacheBoost_ErrCode res = HMS_FileCacheBoost_ClearAllCache();
   if (res != FILE_CACHE_BOOST_SUCCESS) {
       // 删除失败，开发者可自定义错误处理
   }
   ```
6. 如果缓存数据依附于一个复杂类的对象，该类中可能包含其他复杂对象数据结构、指针等不可控数据，不一并保存，落盘后无法恢复。对于这种复杂类型数据需要开发者提供序列化和反序列化函数，然后调用HMS\_FileCacheBoost\_AddSerialObjectByKey和HMS\_FileCacheBoost\_GetSerialObjectByKey实现添加和获取缓存。

   ```
   // 自定义的图片结构体样例
   struct SimpleImage {
       int width;
       int height;
       int format;
       unsigned char* pixels; // RGB 三通道或灰度图等
   };

   static FileCacheBoost_CbErrCode serialize(const void* object, WriteFunc writeFunc, struct CacheKey* key) {
       const struct SimpleImage* img = (const struct SimpleImage*)object;

       // 写头部信息: width, height, format
       int header[3] = {img->width, img->height, img->format};
       if (writeFunc(header, sizeof(header), key) != 0) {
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }

       // 计算像素总大小
       int dataSize = img->width * img->height *
           ((img->format == 1) ? 1 : 3); // 格式1为灰度图，其它当作RGB处理

       // 写入像素数据
       if (writeFunc(img->pixels, dataSize, key) != 0) {
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }
       return FILE_CACHE_BOOST_CALLBACK_SUCCESS;
   }
   // 添加复杂类数据缓存
   std::string keyStr = "test_000";
   std::vector<uint8_t> keyVector(keyStr.begin(), keyStr.end());
   size_t keyLen = keyStr.size();
   uint8_t *key = keyVector.data();
   void *object = nullptr;
   uint32_t weight = 100;
   HMS_FileCacheBoost_AddSerialObjectByKey(key, keyLen, serialize, object, weight);

   static FileCacheBoost_CbErrCode deserialize(void** object, ReadFunc readFunc, struct CacheKey* key) {
       // width, height, format
       int header[3];
       size_t headerSize = sizeof(header);
       if (readFunc(header, &headerSize, key) != 0) {
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }

       int w = header[0], h = header[1], fmt = header[2];
       int bytesPerPixel = (fmt == 1) ? 1 : 3;
       int dataSize = w * h * bytesPerPixel;

       // 分配像素内存
       unsigned char* pixelData = (unsigned char*)malloc(dataSize);
       if (!pixelData) {
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }

       size_t pixelSize = dataSize;
       if (readFunc(pixelData, &pixelSize, key) != 0 || pixelSize != (size_t)dataSize) {
           free(pixelData);
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }

       // 构造新结构体
       struct SimpleImage* newImg = (struct SimpleImage*)malloc(sizeof(struct SimpleImage));
       if (!newImg) {
           free(pixelData);
           return FILE_CACHE_BOOST_CALLBACK_FAILURE;
       }

       newImg->width = w;
       newImg->height = h;
       newImg->format = fmt;
       newImg->pixels = pixelData;

       *object = newImg;
       return FILE_CACHE_BOOST_CALLBACK_SUCCESS;
   }
   // 获取复杂类数据缓存
   HMS_FileCacheBoost_GetSerialObjectByKey(key, keyLen, deserialize, &object);
   ```
