---
title: "scanBarcode实现扫描药品条形码获取信息"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/scan_to_add_medication-0000002396859981
---

## 场景介绍

scanBarcode实现扫描药品条形码获取信息是运动健康类应用的高频使用场景之一，如用户需要记录个人用药历史或保留购药记录时，可快速录入药品信息。

本示例基于[默认界面扫码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-scanbarcode)和[绑定半模态页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sheet-page)实现扫码功能和添加药品的半模态弹窗界面。

## 效果预览

![](./img/679b8fb7.png "点击放大")

## 实现思路

1. 在界面底部“添加药品”按钮下设置[bindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)绑定“添加药品”弹窗。
2. 点击“扫条码”按钮时，调用startDefaultScan函数，通过[startScanForResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api#section829511911349)拉起默认扫码界面。
3. 在getMedicationInfo函数中查找匹配的药品数据，存入[@State装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state)修饰的medication中，显示在“条形码识别结果”弹窗中。点击“添加到列表”可将当前药品添加到药品列表。

```
// MedicationAssistantPage.ets
struct MedicationAssistantPage {
  // ...
  @State medications: MedicationScanInfo[] = [];
  @State currentMedication: MedicationScanInfo | undefined = undefined;  // 扫码结果
  startDefaultScan(){  // 拉起默认扫码界面
    let options: scanBarcode.ScanOptions = {...};
    try {
      scanBarcode.startScanForResult(this.getUIContext().getHostContext(), options)
      .then((result: scanBarcode.ScanResult) => {
        this.showAddMedicationSheet = false;
        this.showRecognitionResultSheet = true;
        this.currentMedication = getMedicationInfo(result.originalValue, this.resourceManager);
      }).catch((error: BusinessError) => {...}
    } catch (error) {...}
  }
  addMedicationSheetBuilder() {...}  // 添加药品弹窗
  recognitionResultSheetBuilder() {...}  // 条形码识别结果弹窗

  build() {
    Column() {
      // ...
      Button($r('app.string.add_medication'))
      .bindSheet($this.showAddMedicationSheet, this.addMedicationSheetBuilder(), {...})
    }
    .bindSheet($this.showRecognitionResultSheet, this.recognitionResultSheetBuilder(), {...})
  }
}
```

![](./img/8dc79ca6.png)

1. 点击页面下方“添加药品按钮”，在弹出的“添加药品”弹窗中选择“扫条码”。
2. 在跳转的默认扫码界面中扫码，扫码结果将显示在“条形码扫码结果”弹窗界面。(注：可以使用/sceenshots目录下的37457656785686786.png和63567246789848537.png进行已入库药品的扫码成功测试。)
3. 点击扫码结果“添加到列表”按钮，将药品添加到“我的药品”列表。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──Constants.ets                        // 常量数据
│  ├──entryability
│  │  └──EntryAbility.ets                     // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──MedicationScanInfo.ets               // 药品信息类
│  │  └──MockData.ets                         // 数据打桩
│  └──pages
│     └──MedicationAssistantPage.ets          // 用药助手页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[默认界面扫码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-scanbarcode)

[绑定半模态页面(bindSheet)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sheet-page)

[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)

[@State装饰器：组件内状态](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state)

## 代码下载

[scanBarcode实现扫描药品条形码获取信息示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212090857.67454098890453630577802758046807%3A50001231000000%3A2800%3A2858AAAFBA145E09D06BCB4FA01F60CB557EE687D095F2CA262AD327B13A1348.zip?needInitFileName=true)
