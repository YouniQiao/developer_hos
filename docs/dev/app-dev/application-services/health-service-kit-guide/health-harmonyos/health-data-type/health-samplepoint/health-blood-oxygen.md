---
displayed_sidebar: appDevSidebar
title: "血氧"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-oxygen
format: md
---


жӯӨж•°жҚ®и®°еҪ•з”ЁжҲ·еңЁжҹҗж—¶еҲ»зҡ„иЎҖж°§пјҢжҜҸдёҖжқЎж•°жҚ®йғҪд»ЈиЎЁиҜҘж—¶еҲ»зҡ„иЎҖж°§еҖјгҖӮжҜҸжқЎж•°жҚ®дёҚиғҪеӯҳеңЁдәӨеҸүпјҢеҗҺдёҖжқЎж•°жҚ®зҡ„ејҖе§Ӣж—¶й—ҙеә”иҜҘеӨ§дәҺжҲ–зӯүдәҺеүҚдёҖжқЎж•°жҚ®зҡ„з»“жқҹж—¶й—ҙгҖӮ

* Harmony SDKзұ»еһӢеёёйҮҸпјҡ[samplePointHelper.bloodOxygenSaturation.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#еёёйҮҸ)

## OAuthжқғйҷҗ

иҒ”зӣҹеҚЎзүҮз”іиҜ·зҡ„жқғйҷҗеҗҚз§°пјҡеҒҘеә·ж•°жҚ® > иЎҖж°§ж•°жҚ®

## йҮҮж ·жҳҺз»Ҷж•°жҚ®

### жҳҺз»Ҷеӯ—ж®өиҜҙжҳҺ

* еӯ—ж®өе®ҡд№үпјҡ[samplePointHelper.bloodOxygenSaturation.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields)

| **еӯ—ж®ө**еҲ—иЎЁ | жҸҸиҝ° | **зұ»еһӢ** | еҸҜйҖү/еҝ…йҖү | еҚ•дҪҚ | еҸ–еҖјиҢғеӣҙ |
| --- | --- | --- | --- | --- | --- |
| spo2 | иЎҖж°§йҘұе’ҢеәҰ | number | M | зҷҫеҲҶжҜ” | (0, 100] |

### ж•°жҚ®ејҖж”ҫиҜҙжҳҺ

| ејҖж”ҫAPI | жҹҘиҜўеҸҠж—¶жҖ§ | ж•°жҚ®жәҗ |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | е°Ҹж—¶зә§ | йғЁеҲҶжүӢиЎЁгҖҒжүӢзҺҜзӯү |

## йҮҮж ·з»ҹи®Ўж•°жҚ®

**иҒҡеҗҲз»ҹи®Ўзӯ–з•ҘиҜҙжҳҺ**

еӯ—ж®өе®ҡд№үпјҡ[samplePointHelper.bloodOxygenSaturation.AggregateFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#aggregatefields)

| **еӯ—ж®ө**еҲ—иЎЁ | жҸҸиҝ° | иҒҡеҗҲзӯ–з•Ҙ | **зұ»еһӢ** | еҚ•дҪҚ |
| --- | --- | --- | --- | --- |
| spo2 | иЎҖж°§йҘұе’ҢеәҰ | avg | max | min | last | number | зҷҫеҲҶжҜ” |

### ж•°жҚ®ејҖж”ҫиҜҙжҳҺ

| ејҖж”ҫAPI | жҹҘиҜўеҸҠж—¶жҖ§ | ж•°жҚ®жәҗ |
| --- | --- | --- |
| [healthStore.aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata) | е°Ҹж—¶зә§ | йғЁеҲҶжүӢиЎЁгҖҒжүӢзҺҜзӯү |
