---
title: "查询与回放对战录像"
original_url: /docs/dev/game-dev/gameobe-queryrecord-js-0000002395190513
format: md
upstream_id: dev/game-dev/gameobe-queryrecord-js-0000002395190513
last_sync: 2026-06-07
sync_hash: 3c5aa4a8
---
在AGC控制台开启录像保存功能后，近7天内所有的游戏对战数据将会以记录文件的形式在云侧自动保存（过期自动清理），可根据相关接口查询玩家自己所有的对战记录列表信息，或他人分享的对战记录。同时，支持下载对战记录文件，用于后续录像回放功能的实现。

## 前提条件

您已[开启保存录像](/docs/dev/game-dev/gameobe-framesync-management-0000002395350373#section17164254104)功能。

## 开发步骤

1. 调用[Client.queryRecordList](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1868240111317)方法查询玩家参与的所有对战记录列表信息。

   ```
   Global.client.queryRecordList().then((res: RecordListResponse) => {
      // 查询成功
      if(res){
          // 处理对战回放数据
      }
   }).catch((err) => {
      // 查询失败
   });
   ```
2. 如需查询指定对战记录的详情，可调用[Client.queryRecordById](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section12305713191215)方法进行查询。

   ```
   Global.client.queryRecordById(recordId: string).then((res: RecordInfoResponse) => {
       // 查询成功
   }).catch((err) => {
       // 查询失败
   });
   ```
3. 根据对战详情中的对战记录文件信息（下载地址和SHA256值），可将对应的文件下载下来，并自行实现后续的录像回放功能（以下示例仅供参考）。

   ```
   // 根据recordId获取单个帧文件
   Global.client.queryRecordById('recordId')
       .then((res) => {
           Util.printLog(`查询战绩成功${JSON.stringify(res)}`);
           // 根据recordId查询回放数据成功后，再通过返回数据中的url下载帧数据文件
           if (res.url) {
               let remoteUrl = res.url;
               let fileSha256 = res.fileSha256;
               // 开发者自己实现一个HTTP GET方法的download接口，用于下载帧文件
               download(remoteUrl).then(async (res: Blob) => {
                   // 获取zip包中的帧文件路径(后面解压时用到)
                   const pathName = remoteUrl.substring(remoteUrl.lastIndexOf('_') + 1, remoteUrl.lastIndexOf('.'));
                   // 获取zip包中的帧文件名称(后面解压时用到)
                   const fileName = remoteUrl.substring(remoteUrl.lastIndexOf('/') + 1, remoteUrl.lastIndexOf('.'));
                   // 开发者自己实现一个getFileHash接口，根据下载的zip Blob生成文件的sha256值，与queryRecordById返回的sha256值对比，校验文件完整性
                   const sha256 = await getFileHash(res);
                   if (sha256 == fileSha256) {
                       console.log(`文件完整性校验成功,sha256: ${sha256}`);
                       let newZip = new JSZip();
                       // 通过JSZip解压zip
                       newZip.loadAsync(res).then(zip => {
                           zip.file(`${pathName}/${fileName}.data`).async('text').then(data => {
                               // 按行读取帧文件内容，文件格式参照下方的'文件数据结构'章节
                               let lines = data.split('\n');
                               // 读取到帧数据后，根据游戏需求实现回放内容
                           });
                       });
                   }
                   else{
                       Util.printLog(`sha256校验不一致，recordId：${recordId}`);
                   }
               });
           }
       })
       .catch((err) => {
           Util.printLog(`查询战绩失败,err: ${err}`);
       });
   ```

   对战记录文件数据结构如下：

   ![](./img/89dc2ee7.png)

   * 通过计算第一帧和最后一帧的时间戳差值，可预估录像回放时长。
   * 玩家属性、房间事件等信息可记录在玩家帧数据中，用于后续录像回放。

   ```
   ├── type = 10   // 帧消息
        └──ts          // 帧产生的时间戳
        └──frameId     // 服务端帧号
        └──frameInfo   // 帧详情
            └──playerId    // 玩家ID
            └──data            // 玩家帧数据
            └──ts            // 玩家帧时间戳
        └──seed   // 随机数
   ├── type = 12   // 玩家加入
   ├── type = 13     // 玩家离开
        └──ts    // 时间戳
        └──playerId    // 玩家ID
   ```
