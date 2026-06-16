---
title: "新建测试版本"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-add-test-version-0000002236041526
format: md
upstream_id: distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-add-test-version-0000002236041526
last_sync: 2026-06-07
sync_hash: 2efa6b36
---
#### еҠҹиғҪд»Ӣз»Қ

жӯӨжҺҘеҸЈз”ЁдәҺеҲӣе»әHarmonyOSеә”з”Ё/е…ғжңҚеҠЎзҡ„жөӢиҜ•зүҲжң¬гҖӮ

жҺҘеҸЈи°ғз”ЁиҖ…зҡ„и§’иүІпјҡиҙҰеҸ·жҢҒжңүиҖ…гҖҒз®ЎзҗҶе‘ҳгҖҒAPPз®ЎзҗҶе‘ҳгҖҒиҝҗиҗҘгҖӮ

#### жҺҘеҸЈеҺҹеһӢ

|  |  |
| --- | --- |
| жүҝиҪҪеҚҸи®® | HTTPS POST |
| жҺҘеҸЈж–№еҗ‘ | ејҖеҸ‘иҖ…жңҚеҠЎеҷЁ -> еҚҺдёәжңҚеҠЎеҷЁ |
| жҺҘеҸЈURL | https://connect-api.cloud.huawei.com/api/publish/v2/test/app/version |
| ж•°жҚ®ж јејҸ | иҜ·жұӮпјҡContent-Type: application/json  е“Қеә”пјҡContent-Type: application/json |

#### иҜ·жұӮеҸӮж•°

#### [h2]Header

![](../img/agc-help-test-api-add-test-version-0000002236041526_0.png)

жң¬жҺҘеҸЈж”ҜжҢҒдҪҝз”ЁService Accountж–№ејҸгҖҒAPIе®ўжҲ·з«Ҝж–№ејҸе’ҢOAuthе®ўжҲ·з«Ҝж–№ејҸпјҢеҢәеҲ«иҜ·еҸӮи§Ғ[иҺ·еҸ–жңҚеҠЎз«ҜжҺҲжқғ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)гҖӮ

**Service Account****ж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{JWT}`*вҖқгҖӮJWTдёә[йҖҡиҝҮService Accountж–№ејҸиҺ·еҸ–жҺҲжқғ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)дёӯиҺ·еҸ–зҡ„йүҙжқғд»ӨзүҢгҖӮ |

**APIе®ўжҲ·з«Ҝж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| client\_id | M | String | е®ўжҲ·з«ҜIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[еҲӣе»әAPIе®ўжҲ·з«Ҝ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)гҖӮ |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{access\_token}`*вҖқгҖӮaccess\_tokenдёә[иҺ·еҸ–Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)дёӯиҺ·еҸ–зҡ„access\_tokenгҖӮ |

**OAuthе®ўжҲ·з«Ҝж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| teamId | M | String(64) | ејҖеҸ‘иҖ…жүҖеңЁеӣўйҳҹзҡ„еӣўйҳҹIDгҖӮ |
| oauth2Token | M | String | и®ӨиҜҒдҝЎжҒҜпјҢдј е…Ҙ[иҺ·еҸ–з”ЁжҲ·жҺҲжқғз Ғ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)дёӯиҺ·еҸ–зҡ„Access TokenгҖӮ |

#### [h2]Query

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| appId | M | String | еә”з”ЁIDгҖӮ |

#### [h2]Body

иҜ·жұӮBodyдёӯдҪҝз”ЁJSONж јејҸжҗәеёҰж·»еҠ зҡ„жөӢиҜ•зүҲжң¬дҝЎжҒҜпјҢеҸӮж•°еҰӮдёӢиЎЁжүҖзӨәгҖӮ

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| releaseType | M | Integer(32) | HarmonyOSжөӢиҜ•еҸ‘еёғж–№ејҸпјҲAPI>=10пјүгҖӮ  й»ҳи®ӨеҖјпјҡ6 |
| testType | M | Integer(32) | жөӢиҜ•зұ»еһӢгҖӮ  еҸ–еҖјиҢғеӣҙпјҡ   * 3пјҡHarmonyOSйӮҖиҜ·жөӢиҜ•гҖӮ * 4пјҡHarmonyOSе…¬ејҖжөӢиҜ•гҖӮ |
| testDesc | M | String(50) | жөӢиҜ•зүҲжң¬жҸҸиҝ°гҖӮ  жңҖй•ҝ50дёӘеӯ—з¬ҰгҖӮ |
| onshelfSelfDetect | O | Integer(32) | жҳҜеҗҰиҝӣиЎҢдёҠжһ¶иҮӘжЈҖгҖӮ  еҸ–еҖјиҢғеӣҙпјҡ   * 0пјҡеҗҰгҖӮ * 1пјҡжҳҜгҖӮ   иҜҙжҳҺпјҡ  * йҖүжӢ©вҖңжҳҜвҖқпјҢе°ҶжҸҗдәӨйӮҖиҜ·жөӢиҜ•е№¶жҢүз…§жӯЈејҸдёҠжһ¶зҡ„е®Ўж ёиҰҒжұӮиҮӘжЈҖпјҢдёҠжһ¶иҮӘжЈҖйў„и®Ў1еӨ©еҶ…е®ҢжҲҗгҖӮ * йҖүжӢ©вҖңеҗҰвҖқпјҢе°Ҷд»…жҸҗдәӨйӮҖиҜ·жөӢиҜ•е®Ўж ёпјҢдёҚиҝӣиЎҢжӯЈејҸдёҠжһ¶иҮӘжЈҖгҖӮ * дёҠжһ¶иҮӘжЈҖдёҚеҪұе“ҚжӮЁйӮҖиҜ·жөӢиҜ•зҡ„дёҠжһ¶з»“жһңгҖӮ * дёҖдёӘеә”з”Ёжңүдё”д»…ж”ҜжҢҒеӯҳеңЁдёҖдёӘдёҠжһ¶иҮӘжЈҖдёӯзҡ„д»»еҠЎпјҢиӢҘеӯҳеңЁдёҠжһ¶иҮӘжЈҖдёӯзҡ„д»»еҠЎж—¶пјҢеҶҚж¬ЎеҲӣе»әйӮҖиҜ·жөӢиҜ•пјҢиҜҘеӯ—ж®өи®ҫзҪ®ж— ж•ҲгҖӮ |

#### иҜ·жұӮзӨәдҫӢ

```
 POST /api/publish/v2/test/app/version?appId=10****47 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 {
   "releaseType": 6,
   "testType": 3,
   "testDesc": "жөӢиҜ•зүҲжң¬жҸҸиҝ°demo",
   "onshelfSelfDetect": 1
 }
```

#### е“Қеә”еҸӮж•°

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-connectret-0000002272455641) | еҢ…еҗ«иҝ”еӣһз ҒеҸҠжҸҸиҝ°дҝЎжҒҜзҡ„з»“жһңгҖӮ |
| versionId | O | String | жөӢиҜ•зүҲжң¬IDгҖӮ |

#### е“Қеә”зӨәдҫӢ

```
{
     "ret": {
         "code": 0,
         "msg": "success"
     },
     "versionId": "17*********8710"
}
```
