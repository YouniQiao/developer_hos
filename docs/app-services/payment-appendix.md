---
title: "附录"
upstream_id: "harmonyos-references/payment-appendix"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:47.758350"
---

# 附录

#### 获取对应的UTC过期时间示例

```
/**
* 获取UTC格式的过期时间
* @param expectedExpiredTime 交易过期时间，请换算为分钟
* @return UTC时间
*/
private static String getTradeExpireTime(int expectedExpiredTime) {
     SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
     formater.setTimeZone(TimeZone.getTimeZone("UTC"));
     Calendar calendar = Calendar.getInstance();
     calendar.set(Calendar.MINUTE, calendar.get(Calendar.MINUTE) + expectedExpiredTime);
     return formater.format(calendar.getTime());
 }
```
