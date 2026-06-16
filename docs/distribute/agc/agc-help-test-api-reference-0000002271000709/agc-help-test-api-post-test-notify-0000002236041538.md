---
title: "发送邀请测试通知"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-post-test-notify-0000002236041538
format: md
upstream_id: distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-post-test-notify-0000002236041538
last_sync: 2026-06-07
sync_hash: 33a34896
---
#### еҠҹиғҪд»Ӣз»Қ

жӯӨжҺҘеҸЈз”ЁдәҺз»ҷжөӢиҜ•з”ЁжҲ·еҸ‘йҖҒйӮҖиҜ·жөӢиҜ•зҡ„йҖҡзҹҘгҖӮ

жҺҘеҸЈи°ғз”ЁиҖ…зҡ„и§’иүІпјҡиҙҰеҸ·жҢҒжңүиҖ…гҖҒз®ЎзҗҶе‘ҳгҖҒAPPз®ЎзҗҶе‘ҳгҖҒиҝҗиҗҘгҖӮ

#### жҺҘеҸЈеҺҹеһӢ

|  |  |
| --- | --- |
| жүҝиҪҪеҚҸи®® | HTTPS POST |
| жҺҘеҸЈж–№еҗ‘ | ејҖеҸ‘иҖ…жңҚеҠЎеҷЁ -> еҚҺдёәжңҚеҠЎеҷЁ |
| жҺҘеҸЈURL | https://connect-api.cloud.huawei.com/api/publish/v2/test/user/action/notify |
| ж•°жҚ®ж јејҸ | иҜ·жұӮпјҡContent-Type: application/json  е“Қеә”пјҡContent-Type: application/json |

#### иҜ·жұӮеҸӮж•°

#### [h2]Header

![](../img/agc-help-test-api-post-test-notify-0000002236041538_0.png)

жң¬жҺҘеҸЈж”ҜжҢҒдҪҝз”ЁService Accountж–№ејҸе’ҢAPIе®ўжҲ·з«Ҝж–№ејҸпјҢдәҢиҖ…еҢәеҲ«иҜ·еҸӮи§Ғ[иҺ·еҸ–жңҚеҠЎз«ҜжҺҲжқғ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)гҖӮ

**Service Account****ж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{JWT}`*вҖқгҖӮJWTдёә[йҖҡиҝҮService Accountж–№ејҸиҺ·еҸ–жҺҲжқғ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)дёӯиҺ·еҸ–зҡ„йүҙжқғд»ӨзүҢгҖӮ |
| appId | M | String(32) | еә”з”ЁIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)гҖӮ |

**APIе®ўжҲ·з«Ҝж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| client\_id | M | String | е®ўжҲ·з«ҜIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[еҲӣе»әAPIе®ўжҲ·з«Ҝ](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)гҖӮ |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{access\_token}`*вҖқгҖӮaccess\_tokenдёә[иҺ·еҸ–Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)дёӯиҺ·еҸ–зҡ„access\_tokenгҖӮ |
| appId | M | String(32) | еә”з”ЁIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)гҖӮ |

#### [h2]Body

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| groupId | M | String(32) | жөӢиҜ•зҫӨз»„IDгҖӮ |
| testerIds | M | `List&lt;String(32)>` | йңҖиҰҒйҖҡзҹҘзҡ„жөӢиҜ•з”ЁжҲ·IDгҖӮ  ж•°з»„й•ҝеәҰдёҚи¶…иҝҮ10000гҖӮ |

#### иҜ·жұӮзӨәдҫӢ

```
POST /api/publish/v2/test/user/action/notify HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 4141******68
Content-Type: application/json
Authorization: Bearer *******
appId: 6917********65
{
  "groupId": "76********08",
  "testerIds": [
    "41*****45"
  ]
}
```

#### е“Қеә”еҸӮж•°

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-connectret-0000002272455641) | еҢ…еҗ«иҝ”еӣһз ҒеҸҠжҸҸиҝ°дҝЎжҒҜзҡ„з»“жһңгҖӮ |

#### е“Қеә”зӨәдҫӢ

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    }
}
```
