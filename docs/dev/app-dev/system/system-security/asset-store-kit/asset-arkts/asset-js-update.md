---
displayed_sidebar: appDevSidebar
title: "更新关键资产(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-update
format: md
---


## жҺҘеҸЈд»Ӣз»Қ

ејҖеҸ‘иҖ…еҸҜд»ҘжҹҘйҳ…APIж–ҮжЎЈпјҢиҺ·еҸ–е…ій”®иө„дә§жӣҙж–°жҺҘеҸЈзҡ„иҜҰз»ҶиҜҙжҳҺпјҡ[update(query: AssetMap, attributesToUpdate: AssetMap)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetupdate)гҖҒеҗҢжӯҘжҺҘеҸЈ[updateSync(query: AssetMap, attributesToUpdate: AssetMap)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetupdatesync12)гҖӮ

еңЁжӣҙж–°е…ій”®иө„дә§ж—¶пјҢе…ій”®иө„дә§еұһжҖ§зҡ„еҶ…е®№пјҲAssetMapпјүеҸӮж•°еҰӮдёӢиЎЁжүҖзӨәпјҡ

![](./img/151e456a.png)

дёӢиЎЁдёӯвҖңALIASвҖқе’ҢеҗҚз§°еҢ…еҗ«вҖңDATA\_LABELвҖқзҡ„е…ій”®иө„дә§еұһжҖ§пјҢз”ЁдәҺеӯҳеӮЁдёҡеҠЎиҮӘе®ҡд№үдҝЎжҒҜпјҢе…¶еҶ…е®№дёҚдјҡиў«еҠ еҜҶпјҢиҜ·еӢҝеӯҳж”ҫж•Ҹж„ҹдёӘдәәж•°жҚ®гҖӮ

* **queryзҡ„еҸӮж•°еҲ—иЎЁпјҡ**

  | еұһжҖ§еҗҚз§°пјҲTagпјү | еұһжҖ§еҶ…е®№пјҲValueпјү | жҳҜеҗҰеҝ…йҖү | иҜҙжҳҺ |
  | --- | --- | --- | --- |
  | ALIAS | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-256еӯ—иҠӮгҖӮ | еҝ…йҖү | е…ій”®иө„дә§еҲ«еҗҚпјҢжҜҸжқЎе…ій”®иө„дә§зҡ„е”ҜдёҖзҙўеј•гҖӮ |
  | ACCESSIBILITY | зұ»еһӢдёәnumberпјҢеҸ–еҖјиҢғеӣҙиҜҰи§Ғ[Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#accessibility)гҖӮ | еҸҜйҖү | еҹәдәҺй”ҒеұҸзҠ¶жҖҒзҡ„и®ҝй—®жҺ§еҲ¶гҖӮ |
  | REQUIRE\_PASSWORD\_SET | зұ»еһӢдёәbooleanгҖӮ | еҸҜйҖү | жҳҜеҗҰд»…еңЁи®ҫзҪ®дәҶй”ҒеұҸеҜҶз Ғзҡ„жғ…еҶөдёӢпјҢеҸҜи®ҝй—®е…ій”®иө„дә§гҖӮдёәtrueж—¶иЎЁзӨәжӣҙж–°д»…з”ЁжҲ·и®ҫзҪ®дәҶй”ҒеұҸеҜҶз ҒжүҚе…Ғи®ёи®ҝй—®зҡ„е…ій”®иө„дә§пјӣдёәfalseж—¶иЎЁзӨәжӣҙж–°ж— и®әз”ЁжҲ·жҳҜеҗҰи®ҫзҪ®й”ҒеұҸеҜҶз ҒпјҢеқҮеҸҜи®ҝй—®зҡ„е…ій”®иө„дә§гҖӮ |
  | AUTH\_TYPE | зұ»еһӢдёәnumberпјҢеҸ–еҖјиҢғеӣҙиҜҰи§Ғ[AuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#authtype)гҖӮ | еҸҜйҖү | и®ҝй—®е…ій”®иө„дә§жүҖйңҖзҡ„з”ЁжҲ·и®ӨиҜҒзұ»еһӢгҖӮ |
  | SYNC\_TYPE | зұ»еһӢдёәnumberпјҢеҸ–еҖјиҢғеӣҙиҜҰи§Ғ[SyncType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#synctype)гҖӮ | еҸҜйҖү | е…ій”®иө„дә§ж”ҜжҢҒзҡ„еҗҢжӯҘзұ»еһӢгҖӮ |
  | IS\_PERSISTENT | зұ»еһӢдёәbooleanгҖӮ | еҸҜйҖү | еңЁеә”з”ЁеҚёиҪҪж—¶жҳҜеҗҰйңҖиҰҒдҝқз•ҷе…ій”®иө„дә§гҖӮдёәtrueж—¶иЎЁзӨәжӣҙж–°еә”з”ЁеҚёиҪҪеҗҺдјҡиў«дҝқз•ҷзҡ„е…ій”®иө„дә§пјӣдёәfalseж—¶иЎЁзӨәжӣҙж–°еә”з”ЁеҚёиҪҪеҗҺдјҡиў«еҲ йҷӨзҡ„е…ій”®иө„дә§гҖӮ |
  | DATA\_LABEL\_CRITICAL\_1 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”жңүе®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_CRITICAL\_2 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”жңүе®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_CRITICAL\_3 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”жңүе®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_CRITICAL\_4 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”жңүе®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_1 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_2 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_3 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_4 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_112+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_212+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_312+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_412+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | REQUIRE\_ATTR\_ENCRYPTED14+ | зұ»еһӢдёәbooleanгҖӮ | еҸҜйҖү | жҳҜеҗҰжӣҙж–°дёҡеҠЎиҮӘе®ҡд№үйҷ„еұһдҝЎжҒҜиў«еҠ еҜҶзҡ„ж•°жҚ®гҖӮдёәtrueж—¶иЎЁзӨәжӣҙж–°дёҡеҠЎиҮӘе®ҡд№үйҷ„еұһдҝЎжҒҜеҠ еҜҶеӯҳеӮЁзҡ„ж•°жҚ®пјҢдёәfalseж—¶иЎЁзӨәжӣҙж–°дёҡеҠЎиҮӘе®ҡд№үйҷ„еұһдҝЎжҒҜдёҚеҠ еҜҶеӯҳеӮЁзҡ„ж•°жҚ®гҖӮй»ҳи®ӨеҖјдёәfalseгҖӮ |
  | GROUP\_ID18+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә7-127еӯ—иҠӮгҖӮ | еҸҜйҖү | еҫ…жӣҙж–°зҡ„е…ій”®иө„дә§жүҖеұһзҫӨз»„пјҢй»ҳи®Өжӣҙж–°дёҚеұһдәҺд»»дҪ•зҫӨз»„зҡ„е…ій”®иө„дә§гҖӮ |
* **attributesToUpdateзҡ„еҸӮж•°еҲ—иЎЁпјҡ**

  | еұһжҖ§еҗҚз§°пјҲTagпјү | еұһжҖ§еҶ…е®№пјҲValueпјү | жҳҜеҗҰеҝ…йҖү | иҜҙжҳҺ |
  | --- | --- | --- | --- |
  | SECRET | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-1024еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§жҳҺж–ҮгҖӮ |
  | DATA\_LABEL\_NORMAL\_1 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_2 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_3 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_4 | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһдҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨгҖӮ  **иҜҙжҳҺпјҡ** API12еүҚй•ҝеәҰдёә1-512еӯ—иҠӮгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_112+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_212+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_312+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |
  | DATA\_LABEL\_NORMAL\_LOCAL\_412+ | зұ»еһӢдёәUint8ArrayпјҢй•ҝеәҰдёә1-2048еӯ—иҠӮгҖӮ | еҸҜйҖү | е…ій”®иө„дә§йҷ„еұһзҡ„жң¬ең°дҝЎжҒҜпјҢеҶ…е®№з”ұдёҡеҠЎиҮӘе®ҡд№үдё”ж— е®Ңж•ҙжҖ§дҝқжҠӨпјҢиҜҘйЎ№дҝЎжҒҜдёҚдјҡиҝӣиЎҢеҗҢжӯҘгҖӮ |

## д»Јз ҒзӨәдҫӢ

![](./img/2e78e4d0.png)

жң¬жЁЎеқ—жҸҗдҫӣдәҶејӮжӯҘе’ҢеҗҢжӯҘдёӨеҘ—жҺҘеҸЈпјҢд»ҘдёӢдёәејӮжӯҘжҺҘеҸЈзҡ„дҪҝз”ЁзӨәдҫӢпјҢеҗҢжӯҘжҺҘеҸЈиҜҰи§Ғ[@ohos.security.asset (е…ій”®иө„дә§еӯҳеӮЁжңҚеҠЎ)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset)гҖӮ

еңЁжҢҮе®ҡзҫӨз»„дёӯжӣҙж–°дёҖжқЎе…ій”®иө„дә§зҡ„дҪҝз”ЁзӨәдҫӢиҜҰи§Ғ[жӣҙж–°зҫӨз»„е…ій”®иө„дә§](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-group-access-control#жӣҙж–°зҫӨз»„е…ій”®иө„дә§)гҖӮ

еңЁжӣҙж–°еүҚпјҢйңҖзЎ®дҝқе·Іжңүе…ій”®иө„дә§пјҢеҸҜеҸӮиҖғ[жҢҮеҚ—ж–ҮжЎЈ](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-add)ж–°еўһе…ій”®иө„дә§пјҢеҗҰеҲҷе°ҶжҠӣеҮәNOT\_FOUNDй”ҷиҜҜпјҲй”ҷиҜҜз Ғ24000002пјүгҖӮ

жӣҙж–°еҲ«еҗҚжҳҜdemo\_aliasзҡ„е…ій”®иө„дә§пјҢе°Ҷе…ій”®иө„дә§жҳҺж–Үжӣҙж–°дёәdemo\_pwd\_newпјҢйҷ„еұһеұһжҖ§жӣҙж–°жҲҗdemo\_label\_newгҖӮ

1. еј•з”ЁеӨҙж–Үд»¶пјҢе®ҡд№үе·Ҙе…·еҮҪж•°гҖӮ

   ```
   import { asset } from '@kit.AssetStoreKit';
   import { util } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';

   function stringToArray(str: string): Uint8Array {
     let textEncoder = new util.TextEncoder();
     return textEncoder.encodeInto(str);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/update.ets#L17-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：update.ets</a></div>

2. еҸӮиҖғеҰӮдёӢзӨәдҫӢд»Јз ҒпјҢиҝӣиЎҢдёҡеҠЎеҠҹиғҪејҖеҸ‘гҖӮ

   ```
   let query: asset.AssetMap = new Map();
   query.set(asset.Tag.ALIAS, stringToArray('demo_alias'));
   let attrsToUpdate: asset.AssetMap = new Map();
   attrsToUpdate.set(asset.Tag.SECRET, stringToArray('demo_pwd_new'));
   attrsToUpdate.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label_new'));
   try {
     asset.update(query, attrsToUpdate).then(() => {
       console.info(`Succeeded in updating Asset.`);
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to update Asset. Code is ${err.code}, message is ${err.message}`);
       // ...
     });
   } catch (error) {
     let err = error as BusinessError;
     console.error(`Failed to update Asset. Code is ${err.code}, message is ${err.message}`);
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/update.ets#L30-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：update.ets</a></div>
