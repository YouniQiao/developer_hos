---
title: "如何校验文件一致性"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-22
format: md
---


通过比较Hash值的方法来校验文件的一致性。Hash算法使用MD5算法，[消息摘要计算MD5(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-message-digest-md5)，参考代码如下：

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { fileIo } from '@kit.CoreFileKit'
import { buffer } from '@kit.ArkTS';

async function calFileMd5(fileUrl: string) {
  let md = cryptoFramework.createMd('MD5');
  let file = fileIo.openSync(fileUrl, fileIo.OpenMode.READ_ONLY);
  let arrayBuffer = new ArrayBuffer(2048);
  let len: number = 0;
  let position: number = 0;
  do {
    len = fileIo.readSync(file.fd, arrayBuffer, { offset: position });
    if (len > 0) {
      let uint8Array = new Uint8Array(arrayBuffer.slice(0, len));
      let updateMessageBlob: cryptoFramework.DataBlob = { data: uint8Array };
      await md.update(updateMessageBlob);
      position += len;
    }
  } while (len > 0);
  fileIo.closeSync(file);
  let mdOutput = await md.digest();
  console.info('...calFileMd5: ' + buffer.from(mdOutput.data).toString('hex'));
}
```

**参考链接：**

[@ohos.file.hash (文件哈希处理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-hash)
