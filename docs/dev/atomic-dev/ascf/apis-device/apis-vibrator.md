---
title: "振动"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-vibrator
format: md
---


## has.vibrateShort

has.vibrateShort(Object object)

дҪҝи®ҫеӨҮеҸ‘з”ҹиҫғзҹӯж—¶й—ҙзҡ„жҢҜеҠЁпјҲ15 msпјүгҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.0

**йңҖиҰҒжқғйҷҗпјҡ** еңЁmodule.json5дёӯеЈ°жҳҺ**ohos.permission.VIBRATE**гҖӮ

**еҸӮж•°пјҡ**

еҸӮж•°дёәObjectеҜ№иұЎпјҢеҢ…жӢ¬д»ҘдёӢеӯ—ж®өгҖӮ

| еҸӮж•° | зұ»еһӢ | й»ҳи®ӨеҖј | еҝ…еЎ« | жҸҸиҝ° |
| --- | --- | --- | --- | --- |
| type | string | - | жҳҜ | жҢҜеҠЁејәеәҰзұ»еһӢпјҢжңүж•ҲеҖјдёәпјҡheavyгҖҒmediumгҖҒlight |
| success | function | - | еҗҰ | жҺҘеҸЈи°ғз”ЁжҲҗеҠҹзҡ„еӣһи°ғеҮҪж•°гҖӮ |
| fail | function | - | еҗҰ | жҺҘеҸЈи°ғз”ЁеӨұиҙҘзҡ„еӣһи°ғеҮҪж•°гҖӮ |
| complete | function | - | еҗҰ | жҺҘеҸЈи°ғз”Ёз»“жқҹзҡ„еӣһи°ғеҮҪж•°пјҲи°ғз”ЁжҲҗеҠҹгҖҒеӨұиҙҘйғҪдјҡжү§иЎҢпјүгҖӮ |

**failиҝ”еӣһеҖјпјҡ**

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| errMsg | string | й”ҷиҜҜдҝЎжҒҜгҖӮ |

**зӨәдҫӢпјҡ**

```
has.vibrateShort({
  type: 'heavy',
  success: (res) => {
    console.info('vibrateShort success', res);
  },
  fail: (err) => {
    console.error('vibrateShort fail', err);
  },
  complete: (res) => {
    console.info('vibrateShort complete', res);
  }
});
```

## has.vibrateLong

has.vibrateLong(Object object)

дҪҝи®ҫеӨҮеҸ‘з”ҹиҫғй•ҝж—¶й—ҙзҡ„жҢҜеҠЁпјҲ400 msпјүгҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.0

**йңҖиҰҒжқғйҷҗпјҡ** еңЁmodule.json5дёӯеЈ°жҳҺ**ohos.permission.VIBRATE**гҖӮ

**еҸӮж•°пјҡ**

еҸӮж•°дёәObjectеҜ№иұЎпјҢеҢ…жӢ¬д»ҘдёӢеӯ—ж®өгҖӮ

| еҸӮж•° | зұ»еһӢ | й»ҳи®ӨеҖј | еҝ…еЎ« | жҸҸиҝ° |
| --- | --- | --- | --- | --- |
| success | function | - | еҗҰ | жҺҘеҸЈи°ғз”ЁжҲҗеҠҹзҡ„еӣһи°ғеҮҪж•°гҖӮ |
| fail | function | - | еҗҰ | жҺҘеҸЈи°ғз”ЁеӨұиҙҘзҡ„еӣһи°ғеҮҪж•°гҖӮ |
| complete | function | - | еҗҰ | жҺҘеҸЈи°ғз”Ёз»“жқҹзҡ„еӣһи°ғеҮҪж•°пјҲи°ғз”ЁжҲҗеҠҹгҖҒеӨұиҙҘйғҪдјҡжү§иЎҢпјүгҖӮ |

**зӨәдҫӢпјҡ**

```
has.vibrateLong({
  success: () => {
    console.info('vibrateLong success');
  },
  fail: (err) => {
    console.error('vibrateLong fail', err);
  },
  complete: (res) => {
    console.info('vibrateLong complete', res);
  }
});
```
