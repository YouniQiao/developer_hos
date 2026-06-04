---
title: "解压Zip文件"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/unzip_compressed_file_demo-0000002331316561
---

## 场景介绍

解压Zip文件是实用工具类应用中的高频使用场景之一。

本示例基于[@ohos.zlib](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib)及[@ohos.worker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker)实现Zip文件的解压。

## 效果预览

![](./img/e68bd54e.gif "点击放大")

![](./img/ee217f1d.png)

解压后文件路径为/data/app/el2/100/base/<bundle-name>/haps/<module-name>/cache。

## 实现思路

* 使用zlib解压：调用[zlib.decompressFile()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib#zlibdecompressfile9)实现文件的解压。

  ```
  function decompressZlib(context: Context, name: string, promptActionDecompress: PromptAction) {
    let outFileDir = `${context.cacheDir}/${name}(解压)`;
    let inFile = `${context.cacheDir}/${name}.zip`;
    let options: zlib.Options = {
      level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION
    };
    try {
      zlib.decompressFile(inFile, outFileDir, options, (errData: BusinessError) => {
        promptActionDecompress.showToast({
          message: `解压成功`
        });
      })
    } catch (errData) {
      let code = (errData as BusinessError).code;
      let message = (errData as BusinessError).message;
    }
  }
  ```

* 使用Worker进行解压：
  1. 通过调用[ThreadWorker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#threadworker9)的[constructor()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#constructor9)方法创建Worker对象，并注册[ThreadWorker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#threadworker9)的onmessage回调函数（当宿主线程接收到来自其创建的Worker通过postMessage()接口发送的消息时被调用，在宿主线程执行），通过[postMessage()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#postmessage9)发送消息给Worker线程。

     ```
     function decompressWorker(context: Context, name: string, promptActionDecompress: PromptAction) {
       const WORKERINSTANCE: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/work/Worker.ets');
       WORKERINSTANCE.onmessage = (e: MessageEvents): void => {
         // 主线程使用terminate()销毁Worker线程
         promptActionDecompress.showToast({
           message: e.data
         });
         WORKERINSTANCE.terminate();
       }
       WORKERINSTANCE.postMessage({
         pathDir: `${context.cacheDir}/${name}(解压)`,
         rawfileZipName: `${context.cacheDir}/${name}.zip`
       });
     }
     ```
  2. 在Worker文件中注册ThreadWorker.onmessage回调函数（当Worker线程收到来自其宿主线程通过postMessage()接口发送的消息时被调用，在Worker线程执行），通过[postMessage()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#postmessage9-2)发送消息给主线程。

     ```
     const WORKERPORT: ThreadWorkerGlobalScope = worker.workerPort;
     WORKERPORT.onmessage = (e: MessageEvents) => {
       let pathDir: string = e.data.pathDir; // 沙箱目录
       let rawfileZipName: string = e.data.rawfileZipName; // 带.zip后缀的压缩文件名称
       let options: zlib.Options = {
         level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION
       };

       try {
         zlib.decompressFile(rawfileZipName, pathDir, options, (errData: BusinessError) => {
           // Worker线程向主线程发送消息
           WORKERPORT.postMessage('解压成功');
         })
       } catch (errData) {
         let code = (errData as BusinessError).code;
         let message = (errData as BusinessError).message;
       }
     }
     ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                       // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ListModel.ets                      // 数据内容
│  ├──pages
│  │  └──UnzipPage.ets                      // 首页
│  └──work
│     └──Worker.ets                         // Worker线程文件
└──entry/src/main/resources                 // 应用资源目录
```

## 参考文档

[@ohos.zlib（Zip模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib)

[@ohos.worker（启动一个Worker）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker)

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

## 代码下载

[解压Zip文件示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101755.74936391194716276386645478810254%3A50001231000000%3A2800%3A8FBBCAAB8653ED2E8070CDE1F6FF51FCAD58275269B3947DFA81AE450F5BFFA5.zip?needInitFileName=true)
