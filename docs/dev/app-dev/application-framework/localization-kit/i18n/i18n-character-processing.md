---
title: "字符处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-character-processing
format: md
---


## 功能介绍

在不同语言中，字符规则差异较大。通过字符处理，可以保证在不同语言规则下，以相似的逻辑处理文本。

## 开发步骤

1. 导入模块。

   ```
   import { i18n } from '@kit.LocalizationKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L19-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>

2. 使用场景。

* 字符属性：字符属性用于判断字符类别，如判断字符是否为数字、字母、空格，是否为从右到左语言的字符，是否为表意文字（主要是中文日文韩文）等。使用Unicode类的[isDigit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#isdigit9)等接口可以实现该功能。示例代码如下：

  ```
  // 判断字符是否是数字
  let isDigit = i18n.Unicode.isDigit('1'); // isDigit = true

  // 判断字符是否是从右到左语言的字符
  let isRTL = i18n.Unicode.isRTL('a'); // isRTL = false

  // 判断字符是否是表意文字
  let isIdeograph = i18n.Unicode.isIdeograph('华'); // isIdeograph = true

  // 获取字符的一般类别值
  let unicodeType = i18n.Unicode.getType('a'); // unicodeType = 'U_LOWERCASE_LETTER'
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L33-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>

* 音译：是指将采用某个文字系统或字母表表示的文本转换为发音相同的采用另一个文字系统或字母表表示的文本的过程，并不等同于翻译。使用Transliterator类的[transform](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#transform9)接口可以实现音译功能。示例代码如下：

  ![](./img/6c79df71.png)

  本模块支持中文汉字转拼音，但当中文文本中包含多音字时，可能出现部分多音字无法按照正确的发音转换为拼音的问题。

  ```
  // 音译成Latn格式
  let transliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn');
  let translatedText = transliterator.transform('中国'); // translatedText = 'zhōng guó'

  // 汉语音译去声调
  let toneLessTransliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn;Latin-Ascii');
  let toneLessTranslatedText = toneLessTransliterator.transform('中国'); // toneLessTranslatedText = 'zhong guo'

  // 汉语姓氏读音
  let nameTransliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Han-Latin/Names');
  let nameTranslatedText = nameTransliterator.transform('单老师'); // nameTranslatedText = 'shàn lǎo shī'

  // 获取音译支持的转换ID列表
  let ids = i18n.Transliterator.getAvailableIDs(); // ids = ['ASCII-Latin', 'Accents-Any', ...]
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L59-L74" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>

* 文本标准化：是指按指定的范式标准化文本。文本标准化的范式包括NFC、NFD、NFKC和NFKD，范式的详细介绍请参考[国际标准](https://www.unicode.org/reports/tr15/#Norm_Forms)。使用Normalizer类的[normalize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#normalize10)接口可以实现文本标准化。示例代码如下：

  ```
  // 按照NFC范式对文本进行标准化处理
  let normalizer: i18n.Normalizer = i18n.Normalizer.getInstance(i18n.NormalizerMode.NFC);
  let normalizedText = normalizer.normalize('\u1E9B\u0323'); // normalizedText = 'ẛ̣'
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L86-L90" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>

* 获取文本的可换行点：使用[BreakIterator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#breakiterator8)类的接口可以根据设定的区域获取文本的可换行点。示例代码如下：

  ```
  // 创建获取文本可换行点的对象，该对象将按照指定区域的规则计算文本中的可换行点的位置
  let iterator: i18n.BreakIterator  = i18n.getLineInstance('en-GB');

  // 设置处理文本
  iterator.setLineBreakText('Apple is my favorite fruit.');

  // 将换行迭代器移动到文本起始位置
  let firstPos = iterator.first(); // firstPos = 0

  // 将换行迭代器向后移动2个可换行点，nextPos为移动后在文本中的位置，如果超出文本的长度范围，返回-1
  let nextPos = iterator.next(2); // nextPos = 9

  // 获取换行迭代器在当前所处理文本中的位置
  let currentPos = iterator.current(); // currentPos = 9

  // 判断某个位置是否是可换行点
  let isBoundary = iterator.isBoundary(9); // isBoundary = true

  // 获取BreakIterator对象处理的文本
  let breakText = iterator.getLineBreakText(); // breakText = 'Apple is my favorite fruit.'
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L113-L134" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>

* 文件路径镜像处理：是指传入镜像语言时，对文件路径字符串进行本地化处理，实现镜像语言下文件路径的镜像显示效果。使用I18NUtil类的[getUnicodeWrappedFilePath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#getunicodewrappedfilepath20)接口可以实现文件路径镜像处理。示例代码如下：

  ```
  let mirrorPath = '';
  let unMirrorPath = '';

  // 传入镜像语言，对路径进行镜像处理
  let path = 'data/out/tmp';

  try {
    let delimiter = '/';
    let locale: Intl.Locale = new Intl.Locale('ar');
    // mirrorPath = 'tmp/out/data/'
    mirrorPath = i18n.I18NUtil.getUnicodeWrappedFilePath(path, delimiter, locale);

    // 传入非镜像语言，不处理路径
    let localeZh: Intl.Locale = new Intl.Locale('zh');
    // unMirrorPath = '/data/out/tmp'
    unMirrorPath = i18n.I18NUtil.getUnicodeWrappedFilePath(path, delimiter, localeZh);
  } catch (error) {
    console.error(`call I18NUtil.getUnicodeWrappedFilePath failed, error code: ${error.code}, message: ${error.message}.`);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/CharacterProcessing.ets#L144-L164" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CharacterProcessing.ets</a></div>


## 示例代码

* [国际化-字符处理](https://gitcode.com/harmonyos_samples/international)
