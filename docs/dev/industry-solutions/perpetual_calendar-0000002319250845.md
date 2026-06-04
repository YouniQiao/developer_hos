---
title: "日历常用功能及黄历查询"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/perpetual_calendar-0000002319250845
---

## 场景介绍

日历（万年历或黄历）查询是便捷生活应用的高频使用场景之一，如日期、节日、节气、今日宜、今日忌等内容查询。

本示例基于日历应用常用功能，提供万年历、黄历和我的三大模块开发示例和参考。

* 万年历：主要提供日历服务查询、吉日工具查询、日期查询、节日节气查询等。
* 黄历：根据选择日历展示黄历内容，支持切换日期查看今日宜以及今日忌。
* 我的：展示个人信息、华为账号一键登录、切换主题等。

## 效果预览

![](./img/3cca640e.gif "点击放大")

## 实现思路

1. 日历组件展示通过[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件实现左右滑动查看，使用[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)布局实现日历7列多行展示，行数根据月份动态计算，最大7行。

   ```
   Swiper(this.swiperController) {
     // 使用懒加载渲染数据
     LazyForEach(this.vm.dateListSource, (item: DateModelList) => {
       Grid() {
         ForEach(item, (item: DateModel) => {
           GridItem() {
            // 根据数据渲染日期
           }
         });
       }
       .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')
       .maxCount(7)
       .columnsGap(0)
       .rowsGap(0)
       .padding({ bottom: 20 })
     });
   }
   .cachedCount(0)
   .indicator(false)
   .loop(false)
   .itemSpace(0)
   .effectMode(EdgeEffect.None)
   ```
2. 一次性请求前后2个月的数据，采用懒加载实现性能调优，懒加载数据，并动态计算行数。

   ```
   getDateList(param: number) {
     const baseDate = dayjs().add(param, 'month');
     // 计算当月首尾日期
     const firstDate = baseDate.startOf('month');
     const afterDate = baseDate.endOf('month');
     // 计算日历起始日（考虑周起始）
     const firstDateDay = firstDate.day();
     const weekStart = this.weekStart % 7;
     const frontPadding = (firstDateDay - weekStart + 7) % 7;
     const showFirstDay = firstDate.subtract(frontPadding, 'day');
     // 计算基础显示天数（包含前后缓冲）
     const baseDays = afterDate.diff(showFirstDay, 'day') + 1;
     // 计算需要的行数（向上取整）
     const rowsNeeded = Math.ceil(baseDays / 7);
     // 确保至少有5行
     const totalRows = Math.max(5, rowsNeeded);
     // 计算总单元格数
     const totalCells = totalRows * 7;
     // 生成日期数据
     let dateList: DateModel[] = [];
     for (let i = 0; i < totalCells; i++) {
       const dayjsObj = showFirstDay.add(i, 'day');
       // 月份判断（精确到月份）
       const isCurrentMonth = dayjsObj.isSame(firstDate, 'month');
       // 农历信息计算
       const lunarDate = Lunar.fromDate(dayjsObj.toDate());
       let lunarDay = this.getLunarInfo(lunarDate)[0];
       let lunarColor = this.getLunarInfo(lunarDate)[1];
       // 创建日期模型
       const dateModel = new DateModel(
         dayjsObj,
         dayjsObj.date(),
         lunarDay,
         isCurrentMonth,
         lunarColor,
         dayjsObj.format('YYYY-M-D')
       );
       // 记录当天信息
       if (dayjsObj.isSame(this.selectDate, 'day')) {
         this.todayInfo = dateModel;
       }
       dateList.push(dateModel);
     }
     return dateList;
   }
   ```

3. 抛出日历句柄。

   ```
   // 日历日期切换以及获取今日宜今日忌信息
   class CalendarController {
     public static vm: CalendarVM = CalendarVM.instance;
     public setSelectDate(date: Date) {
       CalendarController.vm.changeDate(date)
     }
     public getTodayYiJi() {
       CalendarController.vm.getTodayYiJi()
     }
   }
   ```

4. 使用日历句柄。

   ```
   // 切换日期
   this.calendarController.setSelectDate(new Date(date))
   ```

## 约束与限制

* 本示例支持API Version 16 Release及以上版本。
* 本示例支持HarmonyOS 5.0.4 Release SDK及以上。
* 本示例需要使用DevEco Studio 5.0.4 Release及以上版本进行编译运行。

![](./img/e105c08d.png)

* 本示例均提供的是模拟数据，所有服务跳转到的页面均为本地mock页面或者lunar三方库提供的数据，实际开发中请以具体业务为准。
* 本示例登录中获取验证码获取场景为模拟场景，真实场景以业务实际场景为准。
* 本示例在未配置华为账号一键登录的情况下为保证正常使用本模版，均采用模拟用户信息登录，实际开发中请按照业务为准。

## 权限说明

获取网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──commons                                       // 公共能力层
│  ├──common/src/main/ets                        // 基础能力
│  │  ├──components                              // 公共组件
│  │  │  ├──NavigationTitle.ets                  // 导航标题
│  │  │  └──ServiceTitle.ets                     // 服务标题
│  │  ├──constants
│  │  │  └──Constants.ets                        // 常量
│  │  ├──model                                   // 模型
│  │  │  ├──CommonModel.ets                      // 常量模型
│  │  │  ├──Constants.ets                        // 常量
│  │  │  ├──DividerTmp.ets                       // 分隔符临时
│  │  │  ├──ThemeModel.ets                       // 主题模型
│  │  │  ├──UserStateModel.ets                   // 用户状态模型
│  │  │  └──WeekModel.ets                        // 一周模型
│  │  ├──style
│  │  │  └──CommonStyle.ets                      // 常量风格
│  │  ├──utils
│  │  │  └──CalculateDate.ets                    // 日历日期
│  │  ├──viewmodels
│  │  │  └──CalendarVM.ets                       // 日历VM
│  │  └──web
│  │     └──WebView.ets                          // Web页
│  ├──router_module/src/main/ets/routerModule
│  │  └──RouterModule.ets                        // 跳转模块
│  └──router_module
│     ├──BuildProfile.ets                        // 构建配置文件
│     └──Index.ets                               // 主页
├──components
│  ├──base_apis/src/main/ets
│  │  ├──apis
│  │  │  ├──ActionSheet.ets                      // 操作表单
│  │  │  └──Toast.ets                            // 弹窗
│  │  ├──components
│  │  │  ├──sliderSwitch
│  │  │  │  ├──Index.type.ets
│  │  │  │  └──SliderSwitch.ets                  // 滑动开关
│  │  │  ├──yijiCell
│  │  │  │  ├──Style.ets                         // 样式
│  │  │  │  └──YiJiCell.ets
│  │  │  ├──BaseCell.ets                         // 基础
│  │  │  ├──BaseCustomTabBar.ets                 // 基础自定义标签栏
│  │  │  ├──BaseDatePicker.ets                   // 基础日期选择器
│  │  │  ├──BaseLunarCard.ets                    // 基础卡
│  │  │  ├──BaseNavTitle.ets
│  │  │  ├──BasePickerOperation.ets
│  │  │  ├──BaseTextPicker.ets
│  │  │  └──BaseTimerPicker.ets                  // 基础时间选择
│  │  ├──model
│  │  │  ├──DividerTmp.ets
│  │  │  ├──Model.ets
│  │  │  └──TextStyleModifier.ets
│  │  └──utils
│  │     └──Utils.ets
│  ├──base_apis
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──base_calendar/src/main/ets
│  │  ├──constants
│  │  │  └──Constants.ets
│  │  ├──https
│  │  │  └──Https.ets
│  │  ├──mock
│  │  │  └──DataMock.ets
│  │  ├──model
│  │  │  ├──CalendarDataSource.ets
│  │  │  ├──CalendarModel.ets
│  │  │  ├──CommonModel.ets
│  │  │  ├──DateModel.ets
│  │  │  ├──HolidayModel.ets
│  │  │  └──LunarModel.ets
│  │  ├──viewModel
│  │  │  ├──CalendarVM.ets
│  │  │  └──HolidayVM.ets
│  │  └──views
│  │     └──Calendar.ets
│  ├──base_apis
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──base_almanac/src/main/ets
│  │  ├──components
│  │  │  ├──dateToogle
│  │  │  │  └──Constants.ets
│  │  │  ├──fiveElementsClashElements
│  │  │  │  └──FiveElementsClashElements.ets
│  │  │  └──taboosAccordPengZu
│  │  │     └──TaboosAccordPengZu.ets
│  │  ├──viewModel
│  │  │  └──ViewModel.ets
│  │  └──views
│  │     └──CalendarAlmanac.ets
│  ├──base_almanac
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──base_events/src/main/ets
│  │  ├──components
│  │  │  ├──common
│  │  │  │  ├──CalendarNavTitle.ets
│  │  │  │  ├──CalendarSheetHeader.ets
│  │  │  │  ├──DistanceToday.ets
│  │  │  │  ├──ListEndSwiperAction.ets
│  │  │  │  ├──RemindSheet.ets
│  │  │  │  └──TodoListBox.ets
│  │  │  ├──eventList
│  │  │  │  ├──BirthdayRememberDetails.ets
│  │  │  │  ├──BirthdayRememberList.ets
│  │  │  │  ├──CalendarEventFooter.ets
│  │  │  │  ├──ScheduleDetails.ets
│  │  │  │  ├──ScheduleList.ets
│  │  │  │  ├──TodoDetails.ets
│  │  │  │  └──TodoList.ets
│  │  │  ├──CalendarBirRem.ets
│  │  │  ├──CalendarEventAllList.ets
│  │  │  ├──CalendarEventList.ets
│  │  │  ├──CalendarReminder.ets
│  │  │  ├──CalendarSchedule.ets
│  │  │  └──CalendarTodo.ets
│  │  ├──constants
│  │  │  └──Constants.ets
│  │  ├──model
│  │  │  └──UserEventModel.ets
│  │  ├──utils
│  │  │  ├──CalendarEvent.ets
│  │  │  ├──Countdown.ets
│  │  │  ├──EventDispatcher.ets
│  │  │  └──Utils.ets
│  │  ├──viewmodel
│  │  │  ├──ThemeController.ets
│  │  │  └──ViewModel.ets
│  │  └──views
│  │     ├──CalendarEventMain.ets
│  │     └──CalendarEvents.ets
│  ├──base_events
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──date_calculation/src/main/ets
│  │  ├──components
│  │  │  ├──dateCalculation
│  │  │  │  └──DateCalculation.ets
│  │  │  ├──dateInterval
│  │  │  │  └──DateInterval.ets
│  │  │  └──yinYangConversion
│  │  │     └──YinYangConversion.ets
│  │  ├──constants
│  │  │  └──Index.ets
│  │  ├──model
│  │  │  └──model.ets
│  │  ├──utils
│  │  │  └──Utils.ets
│  │  └──views
│  │     └──DateToolsCalculate.ets
│  ├──date_calculation
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──festival_solar/src/main/ets
│  │  ├──components
│  │  │  ├──publicFestival
│  │  │  │  └──PublicFestival.ets
│  │  │  ├──publicHolidays
│  │  │  │  └──PublicHolidays.ets
│  │  │  └──solarTerms
│  │  │     └──SolarTerms.ets
│  │  ├──model
│  │  │  └──model.ets
│  │  ├──utils
│  │  │  └──Utils.ets
│  │  └──views
│  │     └──FestivalSolar.ets
│  ├──festival_solar
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──login_info/src/main/ets
│  │  ├──components
│  │  │  ├──LoginWithHuaweiID
│  │  │  │  └──LoginWithHuaweiID.ets
│  │  │  ├──baseLogin
│  │  │  │  └──BaseLogin.ets
│  │  │  ├──personInfo
│  │  │  │  └──PersonInfo.ets
│  │  │  ├──AvatarFunctionButton.ets
│  │  │  ├──PrivacyPolicyPage.ets
│  │  │  └──TermsOfServicePage.ets
│  │  ├──model
│  │  │  └──Model.ets
│  │  ├──utils
│  │  │  └──Utils.ets
│  │  ├──viewModel
│  │  │  └──ThemeController.ets
│  │  └──views
│  │     └──LoginInfo.ets
│  ├──login_info
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──today_history/src/main/ets
│  │  ├──components
│  │  │  ├──HistoryMore.ets
│  │  │  └──TodayHistoryCard.ets
│  │  ├──model
│  │  │  └──Model.ets
│  │  ├──viewModel
│  │  │  └──ThemeController.ets
│  │  └──views
│  │     └──TodayHistory.ets
│  ├──today_history
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──traffic_restriction/src/main/ets
│  │  ├──constants
│  │  │  └──Constants.ets
│  │  ├──model
│  │  │  └──Model.ets
│  │  ├──utils
│  │  │  ├──LocationPermission.ets
│  │  │  └──Utils.ets
│  │  └──views
│  │     └──TrafficRestriction.ets
│  ├──traffic_restriction
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──vip_center/src/main/ets
│  │  ├──components
│  │  │  ├──ServiceAgreement.ets
│  │  │  ├──VipBenefits.ets
│  │  │  ├──VipNavTitle.ets
│  │  │  ├──VipOpen.ets
│  │  │  ├──VipOperation.ets
│  │  │  └──VipPackage.ets
│  │  ├──model
│  │  │  └──Model.ets
│  │  ├──utils
│  │  │  ├──MockApi.ets
│  │  │  ├──OrderInfoUtil.ets
│  │  │  ├──SignUtils.ets
│  │  │  └──Utils.ets
│  │  └──vipCenter
│  │     └──VipCenter.ets
│  ├──vip_center
│  │   ├──BuildProfile.ets
│  │   └──Index.ets
│  ├──yiji_query/src/main/ets
│  │  ├──components/yiJi_Query
│  │  │  ├──JiDayDetail.ets
│  │  │  └──JiDayDetailCard.ets
│  │  ├──constants
│  │  │  └──Constants.ets
│  │  ├──model
│  │  │  └──Model.ets
│  │  ├──utils
│  │  │  ├──EventDispatcher.ets
│  │  │  └──Utils.ets
│  │  └──views
│  │     └──VipCenter.ets
│  └──yiji_query
│      ├──BuildProfile.ets
│      └──Index.ets
├──features                                      // 基础特性层
│  ├──almanac/src/main/ets                       // 黄历
│  │  ├──components
│  │  │  ├──almanacVernacular
│  │  │  │  ├──utils
│  │  │  │  │  └──utils
│  │  │  │  ├──AlmanacVernacular.ets
│  │  │  │  └──Model.ets
│  │  │  ├──Vernacular.ets
│  │  │  └──VernacularContainer.ets
│  │  ├──pages
│  │  │  └──AlmanacView.ets                     // 黄历入口
│  │  ├──BuildProfile.ets
│  │  └──Index.ets
│  ├──mine                                      // 我的（包含一键登录）
│  │  ├──Index.ets                              // 对外接口类
│  │  ├──BuildProfile.ets
│  │  └──src/main
│  │     ├──ets
│  │     │  ├──components                       // 我的页面入口
│  │     │  │  ├──Login.ets
│  │     │  │  ├──LoginWithHuaweiID.ets
│  │     │  │  ├──PersonInformation.ets
│  │     │  │  ├──PrivacyPolicyPage.ets
│  │     │  │  ├──SettingLevel.ets
│  │     │  │  ├──TermsOfServicePage.ets
│  │     │  │  └──ThemeToggleBuilder.ets
│  │     │  └──pages
│  │     │     └──MinePage.ets                  // 登录
│  │     └──resources                           // 应用资源目录
│  └──perpetual                                 // 万年历
│    ├──Index.ets                               // 对外接口类
│    ├──BuildProfile.ets
│    └──src/main
│       ├──ets
│       │  ├──components                        // 万年历组件
│       │  │  ├──BaseCalendar.ets
│       │  │  ├──CalculationDate.ets
│       │  │  ├──CalculationInterval.ets
│       │  │  ├──CalendarTools.ets
│       │  │  ├──DateCalculation.ets
│       │  │  ├──FestivalDetails.ets
│       │  │  ├──FestivalSolar.ets
│       │  │  ├──JiDayDetail.ets
│       │  │  └──QueryJiDay.ets
│       │  └──pages
│       │     └──PerpetualCalendar.ets          // 万年历组件入口
│       └──resources                            // 应用资源目录
├──sdk/aggregated_payment/entry/src
│  ├──main/ets
│  │  ├──common
│  │  │  └──Constants.ets
│  │  ├──components
│  │  │  └──AggregatedPaymentPicker.ets         // 应用程序入口
│  │  ├──model
│  │  │  ├──Index.ets
│  │  │  └──WXApiWrap.ets
│  │  └──viewmodel
│  │     └──AggregatedPaymentVM.ets
│  ├──BuildProfile.ets
│  └──Index.ets
└──product/entry/src/main
   ├──ets
   │  ├──calendarwidget/pages
   │  │  └──CalendarWidgetCard.ets
   │  ├──entryability
   │  │  └──EntryAbility.ets                    // 应用程序入口
   │  ├──entryformability
   │  │  └──EntryFormAbility.ets
   │  └──pages
   │     ├──FilesPage.ets
   │     ├──Index.ets
   │     └──TabContainer.ets
   └──resources                                 // 应用资源目录
```

## 参考文档

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)

## 代码下载

[日历常用功能及黄历查询示例代码](https://gitee.com/appgallery_connect/agc-template-market-harmonyos-demos/tree/main/LifestyleAndServiceTemplate/Calendar)
