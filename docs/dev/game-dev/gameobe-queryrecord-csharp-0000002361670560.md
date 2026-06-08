---
title: "查询与回放对战录像"
original_url: /docs/dev/game-dev/gameobe-queryrecord-csharp-0000002361670560
format: md
upstream_id: dev/game-dev/gameobe-queryrecord-csharp-0000002361670560
last_sync: 2026-06-07
sync_hash: bd0a0fdb
---
在AGC控制台开启录像保存功能后，近7天内所有的游戏对战数据将会以记录文件的形式在云侧自动保存（过期自动清理），可根据相关接口查询玩家自己所有的对战记录列表信息，或他人分享的对战记录。同时，支持下载对战记录文件，用于后续录像回放功能的实现。

## 前提条件

您已[开启录像保存](/docs/dev/game-dev/gameobe-framesync-management-0000002395350373#section17164254104)功能。

## 开发步骤

1. 调用[Client.QueryRecordList](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section53295396416)方法查询玩家参与的所有对战记录列表信息。

   ```
   Global.client.QueryRecordList(response => {
   	if (response.RtnCode == (int)ErrorCode.COMMON_OK)
   	{
                   // 查询成功
                 foreach (RecordInfo recordInfo in response.RecordInfos)
                 {
                        Debug.Log($"recordInfo Id={recordInfo.Id}");
                        Debug.Log($"recordInfo downloadUrl={recordInfo.DownLoadUrl}");
                        Debug.Log($"recordInfo file sha256={recordInfo.FileSha256}");
                 }
   	      return;
   	}else {
                 // 查询失败
           }
   }, 0, 20);
   ```
2. 如需查询指定对战记录的详情，可调用[Client.QueryRecordInfoById](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section860906104)方法进行查询。

   ```
   Global.client.QueryRecordInfoById(string recordId, response => {
   	if (response.RtnCode == (int)ErrorCode.COMMON_OK)
   	{
                 // 查询成功
                 Debug.Log($"recordInfo downloadUrl={response.DownLoadUrl}");
                 Debug.Log($"recordInfo file sha256={response.FileSha256}");
   	      return;
   	}else {
                 // 查询失败
           }
   });
   ```
3. 根据对战详情中的对战记录文件信息（下载地址和SHA256值），可将对应的文件下载下来，并自行实现后续的录像回放功能（以下示例仅供参考）。

   ```
   // 根据recordId获取单个帧文件
   Global.client.QueryRecordInfoById(recordId, response => {
   	if (response.RtnCode == (int)ErrorCode.COMMON_OK)
   	{
                 // 查询成功
                 Debug.Log($"recordInfo downloadUrl={response.DownLoadUrl}");
                 Debug.Log($"recordInfo file sha256={response.FileSha256}");
                 if (response.DownLoadUrl) {
                     // 开发者自己实现一个HTTP GET方法的Download接口，用于下载帧文件
                     Download(response.DownLoadUrl, (res) => {
                         // 开发者自己实现一个GetFileHash接口，生成下载的zip文件的Sha256值，与QueryRecordById接口返回的FileSha256值对比，校验文件完整性
                         string Sha256 = GetFileHash(res);
                         if (Sha256 == response.FileSha256) {
                             Debug.Log($"文件完整性校验成功 Sha256 ={Sha256 }");
                             // 根据res将数据缓存在本地或直接读取帧文件内容，文件格式参照下方的'文件数据结构'章节
                             // 从本地缓存的帧文件或res读取到帧数据后，根据具体游戏需求实现回放内容
                         }
                         else {
                             Debug.Log($"文件完整性校验失败 Sha256 ={Sha256 }");
                         }
                     })
                 }
   	      return;
   	}else {
                 // 查询失败
                 Debug.Log("QueryRecordById Failed");
           }
   });
   ```

   对战记录文件数据结构如下：

   ```
   ├── type = 10   // 帧消息
        └──ts          // 帧产生的时间戳
        └──frameId     // 帧ID
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
