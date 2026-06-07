---
title: "单客户端订阅场景"
original_url: /docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-audit/devicesecurity-audit-subscribe-arkts-suevent
format: md
---


## еңәжҷҜд»Ӣз»Қ

жҸҗдҫӣз»ҹдёҖзҡ„е®үе…Ёе®Ўи®Ўж•°жҚ®еҚ•е®ўжҲ·з«Ҝи®ўйҳ…дёҺеҸ–ж¶Ҳи®ўйҳ…жҺҘеҸЈпјҢеә”з”ЁеҸҜд»ҘиҺ·еҸ–и®ҫеӨҮдёҠзҡ„е®үе…Ёе®Ўи®Ўж•°жҚ®пјҲеҰӮдёӢиЎЁпјүпјҢд»Ҙж”Ҝж’‘е®Ўи®Ўзӣёе…ідёҡеҠЎгҖӮ

| е®Ўи®ЎдәӢд»¶ID | иҜҙжҳҺ |
| --- | --- |
| 0x027000000 | еүӘеҲҮжқҝеӨҚеҲ¶зІҳиҙҙдәӢд»¶ |
| 0x810800800 | иҙҰеҸ·зҷ»еҪ•зҷ»еҮәдәӢд»¶ |
| 0x007000000 | зӘ—еҸЈжҲӘеұҸеҪ•еұҸжҠ•еұҸдәӢд»¶ |
| 0x00F000000 | з§»еҠЁеӯҳеӮЁжҸ’жӢ”дәӢд»¶пјҢеҰӮUзӣҳгҖҒеӯҳеӮЁеҚЎзӯүе…·жңүеӯҳеӮЁеҠҹиғҪзҡ„еӨ–и®ҫжҸ’жӢ”дәӢд»¶ |
| 0x02E000000 | жү“еҚ°жңәдәӢд»¶ |
| 0x01C000007 | ж–Үд»¶дәӢд»¶ |
| 0x01C000008 | иҝӣзЁӢеҲӣе»әйҖҖеҮәдәӢд»¶ |
| 0x01C000009 | зҪ‘з»ңдәӢд»¶ |
| 0x01C00000A | KIAж–Үд»¶жӢҰжҲӘдәӢд»¶ |
| 0x02D000000 | зӣёжңәдәӢд»¶ |
| 0x010000000 | еә”з”ЁдәӢд»¶ |
| 0x011000000 | edmдәӢд»¶ |
| 0x012003000 | иҜҒд№Ұж“ҚдҪңдәӢд»¶ |
| 0x01C00000B | KIAж–Үд»¶ж–°еўһдәӢд»¶ |
| 0x01C00000C | KIAж–Үд»¶еҸҳз§ҚдәӢд»¶ |
| 0x01C00000E | зҪ‘з»ңжөҒйҮҸдәӢд»¶ |
| 0x01C00000F | зҪ‘з»ңиҝһжҺҘдәӢд»¶ |
| 0x00B000000 | еә”з”ЁжқғйҷҗеҸҳжӣҙдәӢд»¶ |
| 0x003000001 | DNSе®Ўи®ЎдәӢд»¶ |

## зәҰжқҹдёҺйҷҗеҲ¶

еҪ“еүҚиғҪеҠӣд»…ж”ҜжҢҒ2in1и®ҫеӨҮгҖӮ

## дёҡеҠЎжөҒзЁӢ

![](./img/b22cdf35.png)

**жөҒзЁӢиҜҙжҳҺпјҡ**

1. ејҖеҸ‘иҖ…еә”з”Ёи®ўйҳ…е®үе…Ёе®Ўи®Ўж•°жҚ®гҖӮ
2. Device Security Kitи°ғз”Ёеӣһи°ғеҮҪж•°йҖҡзҹҘејҖеҸ‘иҖ…еә”з”ЁпјҢејҖеҸ‘иҖ…еә”з”Ёж №жҚ®е®Ўи®Ўж•°жҚ®иҝӣиЎҢдёҡеҠЎеӨ„зҗҶгҖӮ
3. еҪ“ејҖеҸ‘иҖ…еә”з”ЁдёҚйңҖиҰҒдҪҝз”ЁиҜҘе®Ўи®Ўж•°жҚ®ж—¶пјҢеҸ–ж¶Ҳи®ўйҳ…е®үе…Ёе®Ўи®Ўж•°жҚ®гҖӮ

## жҺҘеҸЈиҜҙжҳҺ

д»ҘдёӢжҳҜе®үе…Ёе®Ўи®Ўж•°жҚ®и®ўйҳ…дёҺеҸ–ж¶Ҳи®ўйҳ…жҺҘеҸЈпјҢжӣҙеӨҡжҺҘеҸЈеҸҠдҪҝз”Ёж–№жі•иҜ·еҸӮи§Ғ[APIеҸӮиҖғ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#onauditeventoccur)гҖӮ

| жҺҘеҸЈеҗҚ | жҸҸиҝ° |
| --- | --- |
| on(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback: Callback\<AuditEvent\>): void | и®ўйҳ…е®үе…Ёе®Ўи®Ўж•°жҚ® |
| off(type: 'auditEventOccur', auditEventInfo: AuditEventInfo, callback?: Callback\<AuditEvent\>): void | еҸ–ж¶Ҳи®ўйҳ…е®үе…Ёе®Ўи®Ўж•°жҚ® |

## ејҖеҸ‘жӯҘйӘӨ

![](./img/79d1cef6.png)

* еңЁејҖеҸ‘еҮҶеӨҮиҝҮзЁӢдёӯпјҢйңҖиҰҒз”іиҜ·жқғйҷҗпјҡohos.permission.QUERY\_AUDIT\_EVENTгҖӮ
* еҸӘе…Ғи®ёжё…еҚ•еҶ…зҡ„дјҒдёҡзұ»еә”з”Ёз”іиҜ·иҜҘжқғйҷҗпјҢз”іиҜ·ж–№ејҸиҜ·еҸӮиҖғпјҡ[з”іиҜ·дҪҝз”ЁдјҒдёҡзұ»еә”з”ЁеҸҜз”Ёжқғйҷҗ](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps)гҖӮ

1. еҜје…ҘDevice Security KitжЁЎеқ—еҸҠзӣёе…іе…¬е…ұжЁЎеқ—гҖӮ

   ```
   import { securityAudit } from '@kit.DeviceSecurityKit';
   import { BusinessError} from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. и®ўйҳ…е®үе…Ёе®Ўи®ЎдәӢд»¶гҖӮ

   ```
   const TAG = "SecurityAuditJsTest";
   const callback = (event: securityAudit.AuditEvent) => {
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func eventId= ' + event.eventId);
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func version= ' + event.version);
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func content= ' + event.content);
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func timestamp= ' + event.timestamp);
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func userId= ' + event.userId);
     hilog.info(0x0000, TAG, '%{public}s', 'Security_SecurityAudit_JsApi_Func deviceId= ' + event.deviceId);
   };
   let auditEventInfo: securityAudit.AuditEventInfo = {
      eventId: 0x810800800
   };

   try {
     hilog.info(0x0000, TAG, 'on begin.');
     securityAudit.on('auditEventOccur', auditEventInfo, callback);
     hilog.info(0x0000, TAG, 'Succeeded in on.');
   } catch (err) {
     let e: BusinessError = err as BusinessError;
     hilog.error(0x0000, TAG, 'on failed: %{public}d %{public}s', e.code, e.message);
   }
   ```
3. еҸ–ж¶Ҳи®ўйҳ…е®үе…Ёе®Ўи®ЎдәӢд»¶гҖӮ

   ```
   try {
     hilog.info(0x0000, TAG, 'off begin.');
     securityAudit.off('auditEventOccur', auditEventInfo, callback);
     hilog.info(0x0000, TAG, 'Succeeded in off.');
   } catch (err) {
     let e: BusinessError = err as BusinessError;
     hilog.error(0x0000, TAG, 'off failed: %{public}d %{public}s', e.code, e.message);
   }
   ```
