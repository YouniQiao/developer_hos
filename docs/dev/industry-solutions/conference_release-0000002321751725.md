---
title: "自定义弹窗发布会议并添加系统日程"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/conference_release-0000002321751725
---

## 场景介绍

自定义弹窗发布会议并添加系统日程是综合办公类应用中的高频使用场景之一。

本示例基于[CustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)实现自定义会议时间、时长、形式、参会人等各种信息填写弹窗，基于[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)和[@ohos.file.picker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)实现添加与会议相关的附件，并通过[@ohos.calendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)实现会议发布后添加到系统日程的功能。

## 效果预览

![](./img/4e68b0ed.png "点击放大")

## 实现思路

* 选择日期和时间：在自定义弹窗类CustomDatePickerDialog、CustomTimePickerDialog、CustomDurationPickerDialog中使用[DatePicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datepicker)、[TimePicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker)、TextPicker将用户选择的会议日期信息、开始时间信息及会议时长信息传回主页的meetingFormData变量中。

  ```
  // CustomDialog.ets
  struct CustomDatePickerDialog {
    // 日期选择自定义弹窗
  }
  struct CustomTimePickerDialog {
    // 会议开始时间选择自定义弹窗
  }
  struct CustomDurationPickerDialog {
    // 会议时长选择自定义弹窗
  }
  ```
* 上传附件：在uploadAttachment函数中调用[documentPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)拉起文件选择器选择要上传的附件，通过utfFileNameToString函数将可能获取到的乱码中文路径转换回正确编码的中文路径，并在readWriteFile函数中创建同名沙箱文件和拷贝附件内容。

  ```
  // PublishMeetingPage.ets
  uploadAttachment() {
    // 上传附件
  }
  // FileUtils.ets
  function createFile(uri: string): void {
    // 创建文件到沙箱
  }
  function readWriteFile(srcDir: string, destFileUri: string): void {
    // 读写文件
  }
  function preview(destFileName: string, destFileUri: string) {
    // 预览文件
  }
  function (utfFileName: string): string {
    // 转换文件名字
  }
  ```
* 创建日程：将meetingFormData变量中存储的会议信息传入日程事件[Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#event)中，并创建新日程。

  ```
  // PublishMeetingPage.ets
  Button()
    .onClick(() => {
      if (this.meetingIsCreated) {
        let eventInfo: calendarManager.Event = {
          // ...
        };
        this.calendarMgr?.editEvent(eventInfo).then((id: number): void => {
          if (id > 0) {
            this.promptAction.openToast({ message: $r('app.string.meeting_released'), offset: { dx: 0, dy: 28 } });
          }
        });
      } else {
        this.meetingIsCreated = true;
        this.promptAction.openToast({ message: $r('app.string.meeting_created'), offset: { dx: 0, dy: 28 } });
      }
    });
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取读取日历信息权限：[ohos.permission.READ\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_calendar)。
* 获取应用添加、移除或更改日历活动权限：[ohos.permission.WRITE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionwrite_calendar)。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                     // 应用入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──AlterAttendees.ets                   // 参会人抽象类
│  │  └──FormData.ets                         // 会议信息抽象类
│  ├──pages
│  │  └──PublishMeetingPage.ets               // 会议信息填写页
│  ├──utils
│  │  ├──FileUtils.ets                        // 文件处理工具集合
│  │  └──TimestampUtils.ets                   // 时间戳处理工具
│  └──views
│     └──CustomDialog.ets                     // 自定义弹窗集合
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

[@ohos.file.fileuri（文件URI）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)

[@ohos.file.picker（选择器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)

[@ohos.calendarManager（日程管理能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)

[自定义弹窗(CustomDialog)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)

## 代码下载

[自定义弹窗发布会议并添加系统日程示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317185406.44264809820503357926852725728526%3A20260604130327%3A2800%3A3D77C0BA06C9C16F105732B50FAE0A299AB8EAA05406821FDD68F9B433663AA0.zip?needInitFileName=true)
