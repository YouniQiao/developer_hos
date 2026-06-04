---
title: "H5页面图片保存或链接复制"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/press_to_save_or_copy-0000002328179937
---

## 场景介绍

H5页面图片保存或链接复制是各类应用中的高频使用场景之一，如用户在浏览图片时长按某图片进行保存或复制链接。

本示例通过[OnContextMenuShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#oncontextmenushow9)监听长按图片事件，并[使用弹窗授权保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton#使用弹窗授权保存媒体库资源)的方式保存图片或复制图片链接。

## 效果预览

![](./img/ccf0d12f.png "点击放大")

## 实现思路

1. 通过[OnContextMenuShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#oncontextmenushow9)接口监听长按图片事件，并获取图片的URL。

   ```
   Web({
      src: $rawfile('index.html'),
      controller: this.webVC
    })
      .onContextMenuShow((event) => {
        // 检测到长按图片，弹出菜单
        if (event?.param.getMediaType() === ContextMenuMediaType.Image) {
            this.result = event.result;
            this.imgUrl = event.param.getSourceUrl();
            this.showMenu = true;
            this.offsetX = 0;
            this.offsetY = Math.max(this.uiContext!.px2lpx(event?.param.y() ?? 0) - 0, 0) - 300;
            return true;
        }
        return false;
    });
   ```

2. 通过[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)为组件绑定气泡，实现自定义菜单弹出。

   ```
   Web({
      src: $rawfile('index.html'),
      controller: this.webVC
    })
    .bindPopup(this.showMenu,
    {
        builder: this.customMenu(),
        enableArrow: false,
        placement: Placement.LeftTop,
        offset: { x: this.offsetX, y: this.offsetY },
        mask: false,
        onStateChange: (e) => {
            if (!e.isVisible) {
                this.showMenu = false;
                this.result!.closeContextMenu();
            }
        }
    });
   ```

3. 保存图片：通过[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-web)下载在线图片，下载完成后[使用弹窗授权保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton#使用弹窗授权保存媒体库资源)的方式将图片保存至相册。

   ```
    this.showMenu = false;
    let imgSavedPath = '';
    // 下载图片
    try {
        this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {
            Logger.info("will start a download.");
            // 传入一个下载路径，并开始下载
            imgSavedPath = this.uiContext.getHostContext()?.getApplicationContext().tempDir + '/' +
            webDownloadItem.getSuggestedFileName();
            webDownloadItem.start(imgSavedPath);
        });
        // 下载中
        this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {
            // 下载任务的唯一标识
            Logger.info(`download update guid: ${webDownloadItem.getGuid()}`);
            // 下载的进度
            Logger.info(`download update percent complete: ${webDownloadItem.getPercentComplete()}`);
            // 当前的下载速度
            Logger.info(`download update speed: ${webDownloadItem.getCurrentSpeed()}`);
        });
        // 下载失败
        this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {
            Logger.info(`download failed guid: ${webDownloadItem.getGuid()}`);
            // 下载任务失败的错误码
            Logger.info(`download failed last error code: ${webDownloadItem.getLastErrorCode()}`);
        });
        // 下载完成
        this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {
            let msg: string = `download finish guid: ${webDownloadItem.getGuid()}`;
            Logger.info(msg);
            let context: UIContext = this.getUIContext();
            // 保存图片
            savePhotoToGallery(context, imgSavedPath);
            this.imgUrl = '';
        });
        // 开始下载
        this.webVC.setDownloadDelegate(this.delegate);
        this.webVC.startDownload(this.imgUrl);
    } catch (error) {
        Logger.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);
    }
   ```
4. 复制链接：将图片的URL复制到剪切板中。

   ```
   this.showMenu = false;
   let pasteboardData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, this.imgUrl);
   pasteboard.getSystemPasteboard().setData(pasteboardData, (error) => {
       if (!error) {
           showToast(this.getUIContext(), $r('app.string.copy_success'));
       } else {
           showToast(this.getUIContext(), $r('app.string.copy_failure'));
       }
       this.imgUrl = '';
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取Internet网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                        // 主页面
│  └──utils
│     ├──Logger.ets                       // 日志工具
│     └──Constants.ets                    // 常量
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-web)

[使用Web组件菜单处理网页内容](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-menu)

[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)

[使用弹窗授权保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton#使用弹窗授权保存媒体库资源)

## 代码下载

[H5页面图片保存或链接复制示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260602151135.49540285143967461663261774400946%3A20260604155947%3A2800%3A7DFDD44DD8D2AC86FC72FCBE4717C92582B1BE430C968018B2CCC445436D85A8.zip?needInitFileName=true)
