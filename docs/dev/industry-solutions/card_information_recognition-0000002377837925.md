---
title: "卡证信息识别"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/card_information_recognition-0000002377837925
---

## 场景介绍

卡证信息识别是便捷生活类应用中的高频使用场景之一，如用户进行实名认证时，需要拍照或选择身份证、银行卡、护照等各类卡证图片上传。

本示例通过[CardRecognition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-card-recognition)实现对证件信息识别提取。

## 效果预览

![](./img/95d8622f.gif "点击放大")

## 实现思路

1. 用户实名认证前，选择证件类型cardType，传入[CardRecognition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-card-recognition)中。
2. 通过拍照或者相册图片上传证件照片（双面），识别后将卡证信息传入信息提交页面。
3. 识别的信息提交后返回认证主页，显示已实名效果。

```
CardRecognition({
  supportType: CardConstants.CARD_ID_LIST[this.cardType],
  cardSide: CardSide.DEFAULT,
  cardRecognitionConfig: {
    defaultShootingMode: ShootingMode.MANUAL,
    isPhotoSelectionSupported: true
  },
  callback: ((params: CardRecognitionResult) => {
    if (params.code !== 200) {
      this.pageStack.pop();
    }
    // Front of ID photo
    if (params.cardInfo?.front !== undefined) {
      this.cardDataSource.push(params.cardInfo?.front);
      this.cardData.cardType = this.cardType;
      this.cardData.name = this.cardDataSource[0].name;
      this.cardData.id = this.cardDataSource[0].idNumber;
      this.cardImgUri = this.cardDataSource[0].cardImageUri;
    }
    // Back of ID photo
    if (params.cardInfo?.back !== undefined) {
      this.cardDataSource.push(params.cardInfo?.back);
    }
  })
})
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                       // 代码区
│  ├──components
│  │  └──CardData.ets                       // 身份信息组件
│  ├──entryability
│  │  └──EntryAbility.ets                   // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──DataModel.ets                      // 数据类
│  └──pages
│     ├──CardRecognitionPage.ets            // 卡证识别页
│     └──MainPage.ets                       // 主页面
└──entry/src/main/resources                 // 应用资源目录
```

## 参考文档

[CardRecognition（卡证识别控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-card-recognition)

[卡证识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition)

## 代码下载

[卡证信息识别示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165528.78941722752834636611268033491790%3A50001231000000%3A2800%3AED766D2B2D5BE6EFB029F4133A4B4E060D3475158000A78DBCF69C158E00AEEA.zip?needInitFileName=true)
