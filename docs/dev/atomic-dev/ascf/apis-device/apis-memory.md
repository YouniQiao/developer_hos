---
title: "内存"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-memory
format: md
---


## has.onMemoryWarning

has.onMemoryWarning(function callback)

зӣ‘еҗ¬еҶ…еӯҳдёҚи¶іе‘ҠиӯҰдәӢд»¶гҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.16

**еҸӮж•°пјҡ**

| еҸӮж•° | зұ»еһӢ | еҝ…еЎ« | жҸҸиҝ° |
| --- | --- | --- | --- |
| callback | function | жҳҜ | еҪ“HarmonyOSеҗ‘е…ғжңҚеҠЎиҝӣзЁӢеҸ‘еҮәеҶ…еӯҳиӯҰе‘Ҡж—¶пјҢиҜҘдәӢд»¶е°Ҷиў«и§ҰеҸ‘гҖӮи§ҰеҸ‘жӯӨдәӢд»¶е№¶дёҚж„Ҹе‘ізқҖе…ғжңҚеҠЎиҝӣзЁӢдјҡдёӯж–ӯпјӣеӨ§еӨҡж•°жғ…еҶөдёӢпјҢиҝҷеҸӘжҳҜиӯҰе‘ҠгҖӮејҖеҸ‘иҖ…еңЁж”¶еҲ°йҖҡзҹҘеҗҺпјҢеҸҜд»ҘйҖҡиҝҮеӣһж”¶дёҖдәӣдёҚеҝ…иҰҒзҡ„иө„жәҗжқҘйҒҝе…ҚиҝӣдёҖжӯҘеҠ еү§еҶ…еӯҳзҙ§еј гҖӮ |

**callbackзӣ‘еҗ¬дәӢд»¶пјҡ**

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| level | number | еҶ…еӯҳе‘ҠиӯҰзӯүзә§гҖӮ  еҗҲжі•еҖјпјҡ  5пјҡж•ҙжңәеҸҜз”ЁеҶ…еӯҳйҖӮдёӯгҖӮ  10пјҡж•ҙжңәеҸҜз”ЁеҶ…еӯҳдҪҺгҖӮ  15пјҡж•ҙжңәеҸҜз”ЁеҶ…еӯҳжһҒдҪҺгҖӮ |

**зӨәдҫӢпјҡ**

```
has.onMemoryWarning(function(res) {
  console.info('onMemoryWarning callback triggered', res.level);
})
```

## has.offMemoryWarning

has.offMemoryWarning(function callback)

з§»йҷӨеҶ…еӯҳдёҚи¶іе‘ҠиӯҰдәӢд»¶зҡ„зӣ‘еҗ¬еҮҪж•°гҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.16

**еҸӮж•°пјҡ**

| еҸӮж•° | зұ»еһӢ | еҝ…еЎ« | жҸҸиҝ° |
| --- | --- | --- | --- |
| callback | function | еҗҰ | [has.onMemoryWarning](#hasonmemorywarning)дј е…Ҙзҡ„зӣ‘еҗ¬еҮҪж•°гҖӮдёҚдј жӯӨеҸӮж•°еҲҷз§»йҷӨжүҖжңүзӣ‘еҗ¬еҮҪж•°гҖӮ |

**зӨәдҫӢпјҡ**

```
const onMemoryWarningFn = function(res) {
  console.info('onMemoryWarning callback triggered', res.level);
}
has.onMemoryWarning(onMemoryWarningFn);
has.offMemoryWarning(onMemoryWarningFn); // йңҖдј е…ҘдёҺзӣ‘еҗ¬ж—¶еҗҢдёҖдёӘзҡ„еҮҪж•°еҜ№иұЎгҖӮ
```
