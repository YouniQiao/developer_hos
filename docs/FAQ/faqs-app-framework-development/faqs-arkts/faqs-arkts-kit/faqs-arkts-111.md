---
title: "如何遍历JSON对象"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-111
format: md
---


具体请参考如下示例代码：

```
import { ArrayList } from '@kit.ArkTS';

interface Winner { num: number };
let tmpStr: Record<string, Winner> = JSON.parse('{ "0": {"num": 1}, "1": {"num": 2} }');
const arrayList: ArrayList<Winner> = new ArrayList();
Object.entries(tmpStr).forEach((item) => {
  const value = item[1];
  arrayList.add(value);
})
```
