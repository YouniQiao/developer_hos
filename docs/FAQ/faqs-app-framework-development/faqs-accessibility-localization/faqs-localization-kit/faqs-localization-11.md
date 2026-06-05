---
title: "如何实现汉字转拼音"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-localization-11
format: md
---


可以通过Transliterator将汉字转成拼音。

参考代码如下：

```
import { i18n } from '@kit.LocalizationKit';

let transliterator = i18n.Transliterator.getInstance('Any-Latn');
let res: string = transliterator.transform('中国'); // res = 'zhōng guó'

// Remove voice parts
let voiceRemovedTransliterator = i18n.Transliterator.getInstance('Latin-ASCII');
let res2 = voiceRemovedTransliterator.transform(res);
console.info('去除声部后拼音为：',res2);
```

**参考链接**

[Transliterator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#transliterator9)
