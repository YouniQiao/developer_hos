---
title: "表情包推荐"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/emoji_pack_recommended-0000002330999945
---

## 场景介绍

表情包推荐是社交通讯类应用中高频使用场景之一，如用户在聊天时，输入法会根据用户输入的文字，弹出对应的表情包，方便用户快速选择并发送合适的表情。

本示例基于[Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-98)类型数组存储并记录表情包与特定文字间的关系，并进行联想匹配。然后通过[Image组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#image12)完成对服务器上正确匹配表情包的加载。

## 效果预览

![](./img/83d2b1c9.png "点击放大")

## 实现思路

文本内容与表情包匹配：通过Record数组记录文字(key)与表情包数组(value)的映射关系，并通过text.includes方法将用户输入文字与[Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-98)数组key值进行匹配，找到文字对应的表情包数组。

```
// 根据输入文本匹配对应的表情符号，并进行去重处理
matchEmojis(text: string) {
  if (text.length === 0) {
    this.showEmojis = false;
    return;
  }

  let matched: Array<EmojiItem> = [];
  let keywords = Object.keys(this.emojiMap);
  // 遍历所有表情关键词进行匹配
  for (let keyword of keywords) {
    if (text.includes(keyword)) {
      matched.push(...this.emojiMap[keyword]); // 当输入文本包含当前关键词时，将对应表情加入匹配结果
    }
  }

  if (matched.length > 0) {
    // 对匹配结果进行去重处理
    let uniqueEmojis = matched.filter((emoji, index, self) =>
    index === self.findIndex((t) => (
      t.type === emoji.type && t.content === emoji.content
    ))
    );
    this.matchedEmojis = uniqueEmojis;
    this.showEmojis = true;
  } else {
    this.showEmojis = false;
  }
}
```

表情文件加载：使用[Image组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#image12)直接加载服务器上的表情包文件。

```
Image(BASE_URL + this.chatText)
    .width(80)
    .height(80)
    .margin({ right: 10, top: 10 })
    .onError((error: ImageError) => {
      hilog.error(0x0000, 'testTag', `ImageLoadError： ${error.message}`);
    })
```

![](./img/42a0fd96.png)

参考[HFS配置文件服务器](https://gitee.com/harmonyos_samples/RcpFileTransfer/blob/master/service/README.md)，使得demo可以获取服务器中的表情包。

需要将步骤3-2：disk source中绑定本地文件存储的文件夹中配置的文件夹设置为src/main/resources/base/media。

需要将步骤4修改为：设置src/main/resources/base/element/string.json文件中的BASE\_URL为图中序号4处链接。

配置完毕，使用demo时，在聊天界面输入框输入特定内容后，输入框上方会自动关联出相关的表情，用户可以点击表情进行发送。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

允许应用在上传下载场景中访问网络：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                 // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets           // 备份入口类
│  └──pages
│     ├──Chat.ets                         // 聊天界面主页
│     ├──ChatRecord.ets                   // 聊天记录类
│     ├──Models.ets                       // 数据类型定义文件
│     └──TopNameBar.ets                   // 顶部姓名框类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[如何使用Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-98)

[Image组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#image12)

[网络图片加载的两种方式及常见问题](https://developer.huawei.com/consumer/cn/doc/architecture-guides/office-v1_2-ts_4-0000002292413200)

## 代码下载

[表情包推荐示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101011.51291236549923127316152340227414%3A50001231000000%3A2800%3A5E7B69D86BE28E635871BE2CC7CED650E9207B274C040D0FCB663773E16170FF.zip?needInitFileName=true)
