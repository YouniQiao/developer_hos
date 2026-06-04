---
title: "如何判断蜂窝信号强度"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-telephony-1
---

可以通过radio.getSignalInformation()接口获取蜂窝信号强度，具体步骤如下：

1. 导入相应的模块。
2. 调用getSignalInformation()方法，返回SignalInformation列表。
3. 遍历SignalInformation数组，根据不同的signalType获取相应制式的信号强度。
4. （可选）订阅蜂窝网络信号变化。

参考代码如下：

```
import { radio, observer } from '@kit.TelephonyKit';

// Taking obtaining the signal strength of card 1 as an example
let slotId: number = 0;
radio.getSignalInformation(slotId, (err, data) => {
  if (!err) {
    console.log("get signal information success.");
    // Traverse the array and output the signal strength under different network standards
    for (let j = 0; j < data.length; j++) {
      console.log("type:" + data[j].signalType + ", level:" + data[j].signalLevel);
    }
  } else {
    console.error("get signal information fail, err is:" + JSON.stringify(err));
  }
});

// Subscription to cellular network signal changes (optional)
observer.on("signalInfoChange", (data) => {
  console.log("signal info change, data is:" + JSON.stringify(data));
});
```

**参考链接**

[getSignalInformation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-radio#radiogetsignalinformation7)
