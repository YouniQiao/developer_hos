---
displayed_sidebar: appDevSidebar
title: "消息摘要计算SHA3(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-sha3
format: md
---


从API version 22开始，算法库支持使用该算法进行摘要计算操作。

对应的算法规格请查看[消息摘要计算算法规格](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-overview#支持的算法与规格)。

## 开发步骤

在调用update接口传入数据时，可以[一次性传入所有数据](#摘要算法一次性传入)，也可以把数据人工分段，然后[分段update](#分段摘要算法)。对于同一段数据而言，计算结果没有差异。对于数据量较大的数据，开发者可以根据实际需求选择是否分段传入。

下面分别提供两种方式的示例代码。

### 摘要算法（一次性传入）

1. 调用[cryptoFramework.createMd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatemd)，指定摘要算法SHA3-256，生成摘要实例（Md）。
2. 调用[Md.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-6)，传入自定义消息，进行摘要更新计算。单次update长度没有限制。
3. 调用[Md.digest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#digest)，获取摘要计算结果。
4. 调用[Md.getMdLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getmdlength)，获取摘要计算长度，单位为字节。

* 以使用await方式单次传入数据，获取摘要计算结果为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  async function doMd() {
    let mdAlgName = 'SHA3-256'; // 摘要算法名。
    let message = 'mdTestMessage'; // 待摘要的数据。
    let md = cryptoFramework.createMd(mdAlgName);
    // 数据量较少时，可以只做一次update，将数据全部传入，接口未对入参长度做限制。
    await md.update({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });
    let mdResult = await md.digest();
    console.info('Md result: ' + mdResult.data);
    let mdLen = md.getMdLength();
    console.info('md len: ' + mdLen);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/MessageDigestComputation/entry/src/main/ets/pages/sha3/singleTime/SingleTimeAsync.ets#L15-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SingleTimeAsync.ets</a></div>

* 以使用同步方式单次传入数据，获取摘要计算结果为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function doMdBySync() {
    let mdAlgName = 'SHA3-256'; // 摘要算法名。
    let message = 'mdTestMessage'; // 待摘要的数据。
    let md = cryptoFramework.createMd(mdAlgName);
    // 数据量较少时，可以只做一次update，将数据全部传入，接口未对入参长度做限制。
    md.updateSync({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });
    let mdResult = md.digestSync();
    console.info('[Sync]:Md result: ' + mdResult.data);
    let mdLen = md.getMdLength();
    console.info('md len: ' + mdLen);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/MessageDigestComputation/entry/src/main/ets/pages/sha3/singleTime/SingleTimeSync.ets#L15-L30" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SingleTimeSync.ets</a></div>


### 分段摘要算法

1. 调用[cryptoFramework.createMd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatemd)，指定摘要算法MD5，生成摘要实例（Md）。
2. 传入自定义消息，将一次传入数据量设置为20字节，多次调用[Md.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-7)，进行摘要更新计算。
3. 调用[Md.digest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#digest-1)，获取摘要计算结果。
4. 调用[Md.getMdLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getmdlength)，获取摘要计算长度，单位为字节。

* 以使用await方式分段传入数据，获取摘要计算结果为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  async function doLoopMd() {
    let mdAlgName = 'SHA3-256'; // 摘要算法名。
    let md = cryptoFramework.createMd(mdAlgName);
    // 假设信息总共43字节，根据utf-8解码后，也是43字节。
    let messageText = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee';
    let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);
    let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求。
    for (let i = 0; i < messageData.length; i += updateLength) {
      let updateMessage = messageData.subarray(i, i + updateLength);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      await md.update(updateMessageBlob);
    }
    let mdOutput = await md.digest();
    console.info('md result: ' + mdOutput.data);
    let mdLen = md.getMdLength();
    console.info('md len: ' + mdLen);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/MessageDigestComputation/entry/src/main/ets/pages/sha3/segmentation/SegmentationAsync.ets#L15-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SegmentationAsync.ets</a></div>

* 以使用同步方式分段传入数据，获取摘要计算结果为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function doLoopMdBySync() {
    let mdAlgName = 'SHA3-256'; // 摘要算法名。
    let md = cryptoFramework.createMd(mdAlgName);
    // 假设信息总共43字节，根据utf-8解码后，也是43字节。
    let messageText = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee';
    let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);
    let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求。
    for (let i = 0; i < messageData.length; i += updateLength) {
      let updateMessage = messageData.subarray(i, i + updateLength);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      md.updateSync(updateMessageBlob);
    }
    let mdOutput = md.digestSync();
    console.info('[Sync]:md result: ' + mdOutput.data);
    let mdLen = md.getMdLength();
    console.info('md len: ' + mdLen);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/MessageDigestComputation/entry/src/main/ets/pages/sha3/segmentation/SegmentationSync.ets#L16-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SegmentationSync.ets</a></div>
