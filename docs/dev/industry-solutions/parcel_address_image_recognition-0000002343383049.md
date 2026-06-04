---
title: "快递地址图片识别"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/parcel_address_image_recognition-0000002343383049
---

## 场景介绍

快递地址图片识别是便捷生活类应用的高频使用场景之一，如用户在填写收件或寄件地址时，可选择上传地址图片，通过图片识别功能快速录入地址信息。

本示例使用[文字识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-recognition-api)技术提取图片中的文字信息，使用[文本处理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)技术对提取的文字进行结构化处理，智能提取关键信息（如姓名、电话、地址等），实现自动化信息录入功能。

## 效果预览

![](./img/f459116a.gif "点击放大")

## 实现思路

1. 基于Core Vision Kit的文字识别，识别图片中的文本信息。
   1. 添加文本识别[textRecognition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-recognition-api)初始化和释放方法。

      ```
      // 初始化
      async aboutToAppear(): Promise<void> {
        let initResult = await textRecognition.init();
      }
      // 释放
      async aboutToDisappear(): Promise<void> {
        await textRecognition.release();
      }
      ```
   2. 获取图片资源，将图片转换为PixelMap类型。

      ```
      // 加载指定路径的图片
      private async loadImage(name: string) {
        let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);
        this.imageSource = image.createImageSource(fileSource.fd);
        this.chooseImage = await this.imageSource.createPixelMap();
      }
      ```
   3. 调用[textRecognition.recognizeText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-recognition-api#section1446761711464)接口，识别图片文字信息，并对识别结果进行处理。

      ```
      // 识别图片
      recognizeImageToText() {
       if (!this.chooseImage) {
         this.getUIContext().getPromptAction().showToast({
           message: $r('app.string.image_recognition_fail'),
           duration: CommonConstants.TOAST_DURATION
         });
         return;
       }
       // 调用文本识别接口
       let visionInfo: textRecognition.VisionInfo = {
         pixelMap: this.chooseImage
       };
       let textConfiguration: textRecognition.TextRecognitionConfiguration = {
         isDirectionDetectionSupported: false
       };
       setTimeout(() => {
         try {
           textRecognition.recognizeText(visionInfo, textConfiguration,
             (error: BusinessError, data: textRecognition.TextRecognitionResult) => {
               // 识别成功，获取对应的结果
               if (error?.code == 0) {
                 // 将结果更新到Text中显示
                 this.recognizeText = data.value;
               }
             });
         } catch (e) {
           this.getUIContext().getPromptAction().showToast({
             message: $r('app.string.recognition_fail'),
             duration: CommonConstants.TOAST_DURATION
           });
         }
       }, CommonConstants.TOAST_DURATION);
      }
      ```
2. 基于Natural Language Kit的[文本处理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)，从文本中自动识别并抽取关键信息（如姓名、电话、地址等），并将其自动填充至地址信息表单。
   1. 调用实体抽取[textProcessing.getEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api#section6469197174917)接口，抽取文本关键信息。

      ```
      doEntityRecognition() {
         textProcessing.getEntity(this.recognizeText, {
            entityTypes: [EntityType.NAME, EntityType.PHONE_NO, EntityType.LOCATION]
         }).then(result => {
            // 格式化结果
            this.formatEntityResult(result);
         }).catch((err: BusinessError) => {
            this.getUIContext().getPromptAction().showToast({
               message: $r('app.string.recognition_fail'),
               duration: CommonConstants.TOAST_DURATION
            });
         })
      }
      ```
   2. 将实体抽取结果（姓名、电话、地址等关键信息）显示到对应文本输入框。

      ```
      // 格式化识别结果
      formatEntityResult(entities: textProcessing.Entity[]): void {
       if (!entities || !entities.length) {
         this.getUIContext().getPromptAction().showToast({
           message: $r('app.string.recognition_fail'),
           duration: CommonConstants.TOAST_DURATION
         });
         return;
       }
       for (let i = 0; i < entities.length; i++) {
         let entity = entities[i];
         if (entity.type === EntityType.NAME) {
           // 姓名
           this.name = entity.text;
         } else if (entity.type === EntityType.PHONE_NO) {
           // 电话
           this.phone = entity.text;
         } else if (entity.type === EntityType.LOCATION) {
           // 地址
           let addresses = entity.text.split('区')
           this.address = addresses[0];
           if (addresses.length > 1) {
             this.detailAddress = addresses[1];
           }
         }
       }
      }
      ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──CommonConstants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Index.ets                            // 主页面
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[textRecognition（文字识别）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-recognition-api)

[textProcessing（文本处理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)

## 代码下载

[快递地址图片识别示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165527.26608584316769069935398083655856%3A50001231000000%3A2800%3A195904566E9BC729FA15DEFBB0D5462290E72827BAF14FB409072563244B6220.zip?needInitFileName=true)
