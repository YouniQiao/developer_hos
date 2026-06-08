---
displayed_sidebar: appDevSidebar
title: "日历账户管理"
original_url: /docs/dev/app-dev/application-services/calendar-kit/calendarmanager-calendar-developer
format: md
upstream_id: dev/app-dev/application-services/calendar-kit/calendarmanager-calendar-developer
last_sync: 2026-06-07
sync_hash: 391c2e5e
---
日历账户‌用于存储和管理个人或团队的日程，通过日历账户，用户可以方便地查看、编辑和共享日程信息。

日历管理器[CalendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendarmanager)用于管理日历账户[Calendar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendar)。日历账户主要包含账户信息[CalendarAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendaraccount)和配置信息[CalendarConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendarconfig)。

开发者可以创建属于应用特有的日历账户，还可以对日历账户进行新增、删除、更新和查询。此外，每个日程[Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#event)归属于某一个特定的日历账户，可以通过日历账户对该账户下面的日程进行管理，具体相关指导可见[日程管理](/docs/dev/app-dev/application-services/calendar-kit/calendarmanager-event-developer)。

## 接口说明

以下是日历账户管理的相关接口，更多详细接口及使用请参考[@ohos.calendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)。

| 接口名称 | 描述 |
| --- | --- |
| getCalendarManager(context: Context): CalendarManager | 根据上下文获取日历管理器对象CalendarManager，用于管理日历。 |
| createCalendar(calendarAccount: CalendarAccount): Promise\<Calendar\> | 根据日历账户信息，创建一个Calendar对象，使用Promise异步回调。 |
| getCalendar(calendarAccount?: CalendarAccount): Promise\<Calendar\> | 获取默认Calendar对象或者指定Calendar对象，使用Promise异步回调。  默认Calendar是日历存储首次运行时创建的，若创建Event时不关注其Calendar归属，则无须通过createCalendar()创建Calendar，直接使用默认Calendar。 |
| getAllCalendars(): Promise\<Calendar[]\> | 获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用Promise异步回调。 |
| deleteCalendar(calendar: Calendar): Promise\<void\> | 删除指定Calendar对象，使用Promise异步回调。 |
| getConfig(): CalendarConfig | 获取日历配置信息。 |
| setConfig(config: CalendarConfig): Promise\<void\> | 设置日历配置信息，使用Promise异步回调。 |
| getAccount(): CalendarAccount | 获取日历账户信息。 |

## 开发步骤

1. 导入相关依赖。

   ```
   import { abilityAccessCtrl, AbilityConstant, common, PermissionRequestResult, Permissions, UIAbility, Want } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { calendarManager } from '@kit.CalendarKit';
   import { window } from '@kit.ArkUI';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/entryability/EntryAbility.ets#L16-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>

2. 申请权限。使用Calendar Kit时，需要在module.json5中声明申请读写日历日程所需的权限：ohos.permission.READ\_CALENDAR和ohos.permission.WRITE\_CALENDAR。具体指导可见[声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。
3. 根据上下文获取日程管理器对象calendarMgr，用于对日历账户进行相关管理操作。推荐在EntryAbility.ets文件中进行操作。

   ```
   const DOMAIN = 0x0000;

   export let calendarMgr: calendarManager.CalendarManager | null = null;

   export let mContext: common.UIAbilityContext | null = null;

   export default class EntryAbility extends UIAbility {
     onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');
     }

     onDestroy(): void {
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');
     }

     onWindowStageCreate(windowStage: window.WindowStage): void {
       // 主窗口已创建，请为此Ability设置主页
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
       windowStage.loadContent('pages/Index', (err, data) => {
         if (err.code) {
           hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
           return;
         }
         hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
       });
       mContext = this.context;
       const permissions: Permissions[] = ['ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR'];
       let atManager = abilityAccessCtrl.createAtManager();
       atManager.requestPermissionsFromUser(mContext, permissions).then((result: PermissionRequestResult) => {
         hilog.info(DOMAIN, 'testTag', 'get Permission success');
         calendarMgr = calendarManager.getCalendarManager(mContext);
       }).catch((error: BusinessError) => {
         hilog.error(DOMAIN, 'testTag', 'get Permission error, Cause: %{public}s', JSON.stringify(error));
       })
     }

     onWindowStageDestroy(): void {
       // 主窗口已销毁，释放 UI 相关资源
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
     }

     onForeground(): void {
       // Ability 进入前台
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');
     }

     onBackground(): void {
       // Ability 进入后台
       hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/entryability/EntryAbility.ets#L25-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>

4. 根据日历账户信息，创建一个日历账户Calendar对象。

   创建日历账户之前，开发者需要先根据账户信息进行查询，如果账户不存在则抛出异常信息，捕获到异常再进行日历账户的创建，否则可能会出现账户重复创建的问题。

   ```
   import { BusinessError } from '@kit.BasicServicesKit';
   import { calendarMgr } from '../entryability/EntryAbility';
   import { calendarManager } from '@kit.CalendarKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const DOMAIN = 0x0000;

   let calendar: calendarManager.Calendar | undefined = undefined;
   // 指定日历账户信息
   const calendarAccount: calendarManager.CalendarAccount = {
     // 日历账户名称
     name: 'MyCalendar',
     // 日历账户类型
     type: calendarManager.CalendarType.LOCAL,
     // 日历账户显示名称，该字段如果不填，创建的日历账户在界面显示为空字符串。
     displayName: 'MyCalendar'
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L16-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   ```
   // 创建日历账户
   calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
     hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in creating calendar data->${JSON.stringify(data)}`);
     calendar = data;
     // 请确保日历账户创建成功后，再进行后续相关操作
     // ...
   }).catch((error: BusinessError) => {
     hilog.error(DOMAIN, 'testTag', `Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L112-L122" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

5. 日历账户创建之后，日历账户颜色默认为黑色，不指定日历账户颜色可能导致部分版本/设备深色模式下显示效果不佳。开发者需要调用setConfig()接口设置日历配置信息，包括是否打开日历账户下的日程提醒能力、设置日历账户颜色。

   ```
   const calendarAccounts: calendarManager.CalendarAccount = {
     name: 'MyCalendar',
     type: calendarManager.CalendarType.LOCAL,
     displayName: 'MyCalendar'
   };
   // 日历配置信息
   calendarMgr?.getCalendar(calendarAccounts, (err, data) => {
     // 获取日历账户
     if (err) {
       hilog.error(DOMAIN, 'testTag', `Failed to get calendar, Code is ${err.code}, message is ${err.message}`);
     } else {
       const config: calendarManager.CalendarConfig = {
         // 打开日程提醒
         enableReminder: true,
         // 设置日历账户颜色
         color: '#aabbcc'
       };
       // 设置日历配置信息
       data.setConfig(config).then(() => {
         hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in setting config, data->${JSON.stringify(config)}`);
       }).catch((err: BusinessError) => {
         hilog.error(DOMAIN, 'testTag', `Failed to set config. Code: ${err.code}, message: ${err.message}`);
       })
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L127-L153" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

6. 可以查询指定日历账户。

   ```
   calendarMgr?.getCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
     hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN, 'testTag', `Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L158-L164" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

7. 也可以查询默认日历账户，默认日历账户是日历存储首次运行时创建的，若创建日程时不关注归属哪个账户，则无须单独创建日历账户，可以直接使用默认日历账户。

   ```
   calendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {
     hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN, 'testTag', `Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L169-L175" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

8. 获取当前应用所有创建的日历账户及默认日历账户Calendar对象。

   由于涉及数据隐私安全，进行了权限管控的应用无法获取其他应用创建的账户信息。

   ```
   calendarMgr?.getAllCalendars().then((data: calendarManager.Calendar[]) => {
     hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);
     data.forEach((calendar) => {
       const account = calendar.getAccount();
       hilog.info(DOMAIN, 'testTag', '%{public}s', `account -> ${JSON.stringify(account)}`);
     })
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN, 'testTag', `Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L180-L190" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

9. 删除指定的日历账户，删除账户后，该账户下的所有日程会全部删除。

   ```
   if (!calendar || calendar === null) {
     hilog.error(DOMAIN, 'testTag', 'Failed to delete calendar. calendar is null');
     return;
   }
   calendarMgr?.deleteCalendar(calendar).then(() => {
     hilog.info(DOMAIN, 'testTag', '%{public}s', 'Succeeded in deleting calendar');
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN, 'testTag', `Failed to delete calendar. Code: ${err.code}, message: ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Calendar/CalendarManager/entry/src/main/ets/pages/Index.ets#L195-L205" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
