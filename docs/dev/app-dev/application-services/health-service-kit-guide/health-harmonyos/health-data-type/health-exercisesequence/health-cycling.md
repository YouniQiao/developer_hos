---
displayed_sidebar: appDevSidebar
title: "骑行"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-cycling
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-cycling
last_sync: 2026-06-07
sync_hash: f16a5bdf
---
йӘ‘иЎҢзӣёе…ій”»зӮји®°еҪ•зұ»еһӢеҰӮдёӢпјҡ

| **й”»зӮји®°еҪ•еӯҗзұ»еһӢеёёйҮҸ** | **жҸҸиҝ°** | ж•°жҚ®жқҘжәҗ |
| --- | --- | --- |
| [exerciseSequenceHelper.cycling.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#еёёйҮҸ-7) | жҲ·еӨ–йӘ‘иЎҢ | жүӢжңәгҖҒжүӢиЎЁгҖҒжүӢзҺҜ |
| [exerciseSequenceHelper.indoorCycling.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#еёёйҮҸ-13) | е®ӨеҶ…еҚ•иҪҰ | е®ӨеҶ…иҮӘиЎҢиҪҰгҖҒе®ӨеҶ…йӘ‘иЎҢеҸ° |
| [exerciseSequenceHelper.spinning.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#еёёйҮҸ-27) | еҠЁж„ҹеҚ•иҪҰ | еҠЁж„ҹеҚ•иҪҰ |
| [exerciseSequenceHelper.bmx.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#еёёйҮҸ-4) | BMXиҮӘиЎҢиҪҰ | и¶ҠйҮҺиҮӘиЎҢиҪҰ |

## е…іиҒ”зҡ„з»ҹи®Ўж•°жҚ®иҜҙжҳҺ

* еӯ—ж®өе®ҡд№үпјҡ[exerciseSequenceHelper.cycling.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-6)

| **еӯ—ж®ө**еҲ—иЎЁ | жҸҸиҝ° | **зұ»еһӢ** | еҸҜйҖү/еҝ…йҖү |
| --- | --- | --- | --- |
| distance | и·қзҰ»з»ҹи®Ў | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | зғӯйҮҸз»ҹи®Ў | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| speed | йҖҹеәҰз»ҹи®Ў | [SpeedSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speedsummary) | M |
| exerciseHeartRate | иҝҗеҠЁеҝғзҺҮз»ҹи®Ў | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |
| resistance | йҳ»еҠӣз»ҹи®Ў | [ResistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#resistancesummary) | O |
| pedalingCadence | иёҸйў‘з»ҹи®Ў | [PedalingCadenceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#pedalingcadencesummary) | O |
| power | еҠҹзҺҮз»ҹи®Ў | [PowerSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#powersummary) | O |
| altitude | жө·жӢ”з»ҹи®Ў | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |
| location | дҪҚзҪ®з»ҹи®Ў | [LocationSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#locationsummary) | O |

## е…іиҒ”зҡ„жҳҺз»Ҷж•°жҚ®иҜҙжҳҺ

* еӯ—ж®өе®ҡд№үпјҡ[exerciseSequenceHelper.cycling.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-6)

| **еӯ—ж®ө**еҲ—иЎЁ | жҸҸиҝ° | **зұ»еһӢ** | еҸҜйҖү/еҝ…йҖү |
| --- | --- | --- | --- |
| exerciseHeartRate | иҝҗеҠЁеҝғзҺҮиҜҰжғ… | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | йҖҹеәҰиҜҰжғ… | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| pedalingCadence | иёҸйў‘иҜҰжғ… | [PedalingCadence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#pedalingcadence)[] | O |
| power | еҠҹзҺҮиҜҰжғ… | [Power](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#power)[] | O |
| location | дҪҚзҪ®иҜҰжғ… | [Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#location)[] | O |
| altitude | жө·жӢ”иҜҰжғ… | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |
| resistance | йҳ»еҠӣиҜҰжғ… | [Resistance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#resistance)[] | O |
