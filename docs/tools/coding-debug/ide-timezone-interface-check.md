---
title: "@performance/timezone-interface-check"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-timezone-interface-check
format: md
upstream_id: tools/coding-debug/ide-timezone-interface-check
last_sync: 2026-06-07
sync_hash: 8fd11c23
---
# @performance/timezone-interface-check

在获取非本地时间时，建议使用统一标准的i18n.Calendar接口获取时间时区相关信息。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/timezone-interface-check": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例1

```
import i18n from '@ohos.i18n';

let calendar = i18n.getCalendar(i18n.getSystemLocale());
calendar.setTimeZone(i18n.getTimeZone().getID());
```

#### 正例2

```
import i18n from '@ohos.i18n';

let timeZone1 = '123';
let calendar1 = i18n.getCalendar(i18n.getSystemLocale());
calendar1.setTimeZone(timeZone1);
calendar1.get('zone_offset');
calendar1.get('dst_offset');
```

#### 反例1

```
import i18n from '@ohos.i18n';

let timeZone1 = '123';
let calendar1 = i18n.getCalendar(i18n.getSystemLocale());
calendar1.setTimeZone(timeZone1);
//告警，缺少获取dst_offset
calendar1.get('zone_offset');
//calendar1.get('dst_offset');
```

#### 反例2

```
import moment from '@hview/moment';
//告警
moment().utcOffset();
//告警
moment().utcOffset(120);
//告警
moment().utcOffset("+08:00");
//告警
moment().utcOffset(-5, true);
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
