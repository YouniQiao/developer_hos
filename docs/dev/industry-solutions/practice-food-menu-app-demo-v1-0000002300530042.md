---
title: "菜谱应用模板"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-food-menu-app-demo-v1-0000002300530042
---

## 简介

菜谱搜索与管理是美食类应用高频使用的场景之一，本模板为美食菜谱类应用提供了常用功能开发样例，如按名称搜索、按类别搜索、收藏菜谱、加入菜篮子等功能。

本模板主要分首页、分类、热量计算和我的四个模块：

* 首页：展示菜谱信息，支持按名称、类别搜索菜谱。
* 分类：按类别展示菜谱，支持查看详情、收藏菜谱、加入菜篮子和管理菜篮子。
* 热量计算：展示每日热量和每周热量，支持按时间段增加饮食计划，展示计划饮食的热量。
* 我的：展示账号相关信息，展示我的菜谱和上传菜谱，展示收藏的菜谱，展示浏览记录，以及设置等功能。

## 软件视图

产品定制层：只涉及手机端，设计为一个HAP，包含页面框架、导航等。

基础特性层：“分类”、“我的” 等功能模块打包为HAR包，被上层产品组件引用。

公共能力层：将“工具”、“网络交互”等基础公共模块打包为HAR包被上层业务组件引用。

![](./img/aa5e6a6c.png "点击放大")

## 效果预览

![](./img/c6628735.gif "点击放大")

## 实现思路

1. 菜谱列表展示通过[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)组件实现瀑布流布局，采用懒加载实现性能调优，实现数据按需加载。

   ```
   WaterFlow() {
       this.uploadBuilderParam()
       LazyForEach(this.dishesList, (item: RecipeBriefInfo) => {
           FlowItem() {
             // 根据数据渲染菜谱卡片
           }
       }, (item: RecipeBriefInfo) => item.id.toString())
   }
   .columnsGap(8)
   .rowsGap(8)
   .columnsTemplate('1fr 1fr');
   ```

2. 菜谱分类通过[二级联动](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-common-list-flows#section323632114913)列表实现左右列表页数据联动更新，并且给左侧导航列表添加点击事件，右侧分类详情列表添加[onScrollIndex()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#onscrollindex)事件，实现导航列表和分类详情数据的联动效果。

   ```
   // 左侧分类导航数据
   List({ space: 8, scroller: this.titleItemScroller }) {
       ForEach(this.recipeCategoryList, (item: RecipeCategory, index: number) => {
           ListItem() {
               // 根据数据渲染菜谱分类
           }
       }, (item: RecipeCategory, index: number) => item.name + index)
   }
   .width(92)
   .height('100%')
   .backgroundColor('#F1F3F5')
   .listDirection(Axis.Vertical) // 排列方向
   .scrollBar(BarState.Off)
   .contentStartOffset(12)
   .contentEndOffset(12)
   // 右侧分类内容数据
   List({ space: 12, scroller: this.scroller }) {
       ForEach(this.recipeCategoryList, (item: RecipeCategory) => {
           ListItemGroup({
               header: this.listTitleBuilder(item.name),
               space: 12,
           }) {
               ListItem() {
                   Grid() {
                       ForEach(item.recipeList, (listItem: RecipeBriefInfo) => {
                           GridItem() {
                               // 根据数据渲染菜谱卡片
                           }.onClick(() => {
                               this.onRecipeClick(listItem)
                           })
                       }, (listItem: RecipeBriefInfo) => `${item.id}${listItem.id}`)
                   }
                   .rowsGap(8)
                   .columnsGap(8)
                   .columnsTemplate('1fr 1fr 1fr')
               }
           }
       }, (item: RecipeCategory) => item.id.toString())
   }
   .layoutWeight(1)
   .height('100%')
   .margin({ left: 8, right: 16 })
   .scrollBar(BarState.Off)
   .sticky(StickyStyle.None)
   .contentStartOffset(12)
   .contentEndOffset(12)
   .onScrollIndex((start: number) => this.currentIndexChangeAction(start, false))
   // 自定义下标索引处理事件
   currentIndexChangeAction(index: number, isClassify: boolean): void {
       if (this.currentIndex !== index) {
           this.changeCurrentIndex(index);
           if (isClassify) {
               this.scroller.scrollToIndex(index);
           } else {
               this.titleItemScroller.scrollToIndex(index);
           }
       }
   }
   ```

## 约束与限制

* 本示例支持HarmonyOS 5.0.0 Release SDK及以上版本。

* 本示例需要使用DevEco Studio 5.0.0 Release及以上版本进行编译运行。

![](./img/92a0b6b6.png)

本示例已集成华为账号服务，只需做少量配置和定制即可快速实现华为账号的登录等功能。

## 权限说明

获取网络权限：ohos.permission.INTERNET。

## 工程目录

```
Recipes
  ├─commons/commonlib/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─BaseHeader.ets                 // 一级页面标题组件
  │  │  │  ├─BuildTitleBar.ets              // 二级页面标题组件
  │  │  │  ├─HeaderMenuBuilder.ets          // 标题菜单内容组件
  │  │  │  └─MenuItemBuilder.ets            // 下拉菜单选项
  │  │  ├─constants
  │  │  │  ├─CommonContants.ets             // 公共常量
  │  │  │  └─CommonEnums.ets                // 公共枚举值
  │  │  ├─types
  │  │  │  └─Types.ets                      // 公共抽象类
  │  │  └─utils
  │  │     ├─AccountUtil.ets                // 账号工具类
  │  │     ├─DialogUtil.ets                 // 弹窗工具类
  │  │     ├─FormatUtil.ets                 // 格式化工具类
  │  │     ├─Logger.ets                     // 日志工具类
  │  │     ├─PermissionUtil.ets             // 权限获取工具类
  │  │     ├─PreferenceUtil.ets             // 数据持久化工具类
  │  │     ├─RouterModule.ets               // 路由工具类
  │  │     └─WindowUtil.ets                 // 窗口管理工具类
  │  └─resources
  ├─commons/network/src/main
  │  ├─ets
  │  │  ├─apis
  │  │  │  ├─APIList.ets                    // 网络请求API
  │  │  │  └─HttpRequest.ets                // 网络请求
  │  │  ├─mocks
  │  │  │  ├─MockData
  │  │  │  │  ├─Calories.ets                // 热量mock数据
  │  │  │  │  ├─Mine.ets                    // 我的mock数据
  │  │  │  │  ├─Notice.ets                  // 通知mock数据
  │  │  │  │  └─RecipeList.ets              // 菜谱mock数据
  │  │  │  ├─AxiosMock.ets                  // mock请求
  │  │  │  └─RequestMock.ets                // mock API
  │  │  └─types
  │  │     ├─Calories.ets                   // 热量抽象类
  │  │     ├─Member.ets                     // 会员抽象类
  │  │     ├─Notice.ets                     // 通知抽象类
  │  │     └─Recipe.ets                     // 菜谱抽象类
  │  └─resources
  │─components/aggregated_ads/src/main
  │  ├─ets
  │  │  ├─common
  │  │  │  └─Constant.ets                   // 常量类
  │  │  ├─components
  │  │  │  ├─AdServicePage.ets              // 广告服务组件
  │  │  │  └─HwAdService.ets                // 华为广告
  │  │  ├─util
  │  │  │  └─UIUtil.ets                     // UI工具类
  │  │  └─viewmodel
  │  │     └─AggregatedAdVM.ets             // 广告页面数据模型
  │  └─resources
  │─components/aggregated_login/src/main
  │  ├─ets
  │  │  ├─common
  │  │  │  ├─Constant.ets                   // 常量类
  │  │  │  └─Logger.ets                     // 日志类
  │  │  ├─components
  │  │  │  ├─AgreementDialog.ets            // 协议弹窗组件
  │  │  │  └─LoginService.ets               // 登录组件
  │  │  ├─model
  │  │  │  ├─Index.ets                      // 数据类型
  │  │  │  └─WXApiWrap.ets                  // 微信登录数据类型
  │  │  └─viewmodel
  │  │     └─AggregatedLoginVM.ets          // 登录组件数据模型
  │  └─resources
  │─components/aggregated_payment/src/main
  │  ├─ets
  │  │  ├─common
  │  │  │  └─Constant.ets                   // 常量类
  │  │  ├─components
  │  │  │  └─AggregatedPaymentPicker.ets    // 支付组件
  │  │  ├─model
  │  │  │  ├─Index.ets                      // 数据类型
  │  │  │  └─WXApiWrap.ets                  // 微信支付数据类型
  │  │  └─viewmodel
  │  │     └─AggregatedPaymentVM.ets        // 支付组件数据模型
  │  └─resources
  │─components/base_ui/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  └─BaseTabs.ets                   // Tabs组件
  │  │  └──types
  │  │     └─Index.ets                      // 数据类型
  │  └─resources
  │─components/calorie_calculation/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─BarChart.ets                   // 协议弹窗组件
  │  │  │  ├─CalorieCalculation.ets         // 热量计算组件
  │  │  │  ├─CaloriesSummary.ets            // 热量汇总组件
  │  │  │  └─FoodDiary.ets                  // 饮食计划组件
  │  │  ├─types
  │  │  │  └─Index.ets                      // 数据类型
  │  │  └─viewModels
  │  │     └─CaloriesSummaryVM.ets          // 热量计算数据模型
  │  └─resources
  │─components/featured_recipes/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─FeaturedRecipes.ets            // 菜谱瀑布流组件
  │  │  │  └─RecommendedCard.ets            // 菜谱卡片
  │  │  │─types
  │  │  │  └─Index.ets                      // 数据类型
  │  │  └─utils
  │  │     ├─LazyDataSource.ets             // 懒加载对象
  │  │     ├─Logger.ets                     // 日志工具
  │  │     └─ObservedArray.ets              // 数组监听工具
  │  └─resources
  │─components/home_search/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─HomeSearch.ets                 // 搜索组件
  │  │  │  ├─SearchKeys.ets                 // 热搜词组件
  │  │  │  └─SearchResult.ets               // 搜索结果组件
  │  │  └─types
  │  │     └─Index.ets                      // 数据类型
  │  └─resources
  │─components/link_category/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  └─LinkCategory.ets               // 分类列表组件
  │  │  └─types
  │  │     └─Index.ets                      // 数据类型
  │  └─resources
  │─components/personal_homepage/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─BloggerInformation.ets         // 个人介绍组件
  │  │  │  └─PersonalHomepage.ets           // 个人中心组件
  │  │  └─types
  │  │     └─Index.ets                      // 数据类型
  │  └─resources
  │─components/shopping_basket/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─IngredientList.ets             // 用料列表
  │  │  │  ├─PurchaseIngredients.ets        // 用料组件
  │  │  │  └─ShoppingBasket.ets             // 菜篮子组件
  │  │  └─types
  │  │     └─Index.ets                      // 数据类型
  │  └─resources
  │─components/upload_recipe/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  └─UploadRecipe.ets               // 上传菜谱组件
  │  │  ├─types
  │  │  │  └─Index.ets                      // 数据类型
  │  │  └─viewmodel
  │  │     └─UploadRecipeVM.ets             // 上传菜谱数据模型
  │  └─resources
  │─features/calories/src/main
  │  ├─ets
  │  │  ├─pages
  │  │  │  ├─CaloriesPage.ets               // 热量页面
  │  │  │  ├─DietPlanPage.ets               // 饮食计划食物列表页面
  │  │  │  └─SearchFoodPage.ets             // 食物搜索页面
  │  │  ├─types
  │  │  │  └─Index.ets                      // 数据对象
  │  │  └─viewModels
  │  │     ├─CaloriesPageVM.ets             // 热量页面数据模型
  │  │     ├─DietPlanPageVM.ets             // 食物列表页面数据模型
  │  │     └─SearchFoodPageVM.ets           // 食物搜索页面数据模型
  │  └─resources
  │─features/classification/src/main
  │  ├─ets
  │  │  ├─constants
  │  │  │  └─Enums.ets                      // 枚举数据
  │  │  ├─pages
  │  │  │  ├─ClassificationPage.ets         // 分类页面
  │  │  │  ├─DishesPage.ets                 // 菜谱详情页面
  │  │  │  └─ShoppingBasketPage.ets         // 菜篮子页面
  │  │  ├─types
  │  │  │  └─Index.ets                      // 菜谱数据对象
  │  │  └─viewModels
  │  │     ├─ClassificationVM.ets           // 分类页面数据模型
  │  │     └─DishesVM.ets                   // 菜谱详情页面数据模型
  │  └─resources
  │─features/home/src/main
  │  ├─ets
  │  │  ├─pages
  │  │  │  ├─BloggerProfilePage.ets         // 博主信息页面
  │  │  │  ├─FollowersPage.ets              // 博主关注页面
  │  │  │  ├─HomePage.ets                   // 首页页面
  │  │  │  └─SearchPage.ets                 // 搜索页面
  │  │  ├─types
  │  │  │  └─Index.ets                      // 首页数据对象
  │  │  └─viewModels
  │  │     ├─BloggerProfilePageVM.ets       // 博主信息页面数据模型
  │  │     ├─FollowersPageVM.ets            // 博主关注页面数据模型
  │  │     ├─HomePageVM.ets                 // 首页页面数据模型
  │  │     └─SearchPageVM.ets               // 搜索页面数据模型
  │─features/mine/src/main
  │  ├─ets
  │  │  ├─components
  │  │  │  ├─ConfirmDialogComponent.ets     // 确认弹窗组件
  │  │  │  └─Recipes.ets                    // 菜谱卡片组件
  │  │  ├─mapper
  │  │  │  └─Index.ets                      // 数据映射
  │  │  ├─model
  │  │  │  └─Index.ets                      // 数据类型
  │  │  ├─pages
  │  │  │  ├─BrowsingHistory.ets            // 浏览历史页面
  │  │  │  ├─MemberCenterPage.ets           // 会员中心页面
  │  │  │  ├─MinePage.ets                   // 我的页面
  │  │  │  ├─MyCollection.ets               // 我的收藏页面
  │  │  │  ├─NoticeCenterPage.ets           // 通知中心页面
  │  │  │  ├─NoticeDetailPage.ets           // 通知详情页面
  │  │  │  ├─PersonalInfo.ets               // 个人信息页面
  │  │  │  ├─PrivacyPolicyDetailPage.ets    // 用户协议页面
  │  │  │  ├─QuickLoginPage.ets             // 一键登录页面
  │  │  │  ├─SettingsPage.ets               // 设置页面
  │  │  │  ├─SideBarPage.ets                // 服务菜单页面
  │  │  │  ├─TermsOfServicePage.ets         // 隐私政策页面
  │  │  │  └─UploadRecipe.ets               // 上传菜谱页面
  │  │  ├─types
  │  │  │  └─Index.ets                      // 抽象类
  │  │  ├─util
  │  │  │  ├─MockApi.ets                    // 支付mock数据
  │  │  │  ├─OrderInfoUtil.ets              // 支付mock参数工具
  │  │  │  └─SignUtils.ets                  // 支付mock签名工具
  │  │  └─viewModels
  │  │     ├─BrowsingHistoryVM.ets          // 浏览历史页面数据模型
  │  │     ├─MemberCenterPageVM.ets         // 会员中心页面数据模型
  │  │     ├─MinePageVM.ets                 // 我的页面数据模型
  │  │     ├─MyCollectionVM.ets             // 我的收藏页面数据模型
  │  │     ├─MyRecipeVM.ets                 // 我的菜谱页面数据模型
  │  │     ├─NoticeCenterPageVM.ets         // 通知中心页面数据模型
  │  │     ├─SettingsPageVM.ets             // 设置页面数据模型
  │  │     └─UploadRecipeVM.ets             // 上传菜谱页面数据模型
  │  └─resources
  └─products/entry/src/main
     ├─ets
     │  ├─entryability
     │  │  └─EntryAbility.ets               // 应用程序入口
     │  ├─entryformability
     │  │  └─EntryFormAbility.ets           // 卡片程序入口
     │  ├─pages
     │  │  ├─Index.ets                      // 入口页面
     │  │  ├─LaunchAdPage.ets               // 广告页面
     │  │  ├─LaunchPage.ets                 // 开屏页面
     │  │  ├─MainEntry.ets                  // 主页面
     │  │  └─PrivacyPolicyPage.ets          // 隐私协议页面
     │  ├─types
     │  │  └─Types.ets                      // 抽象类
     │  ├─viewModels
     │  │  └─MainEntryVM.ets                // 入口页面数据
     │  └─widget/pages
     │     └─WidgetCard.ets                 // 卡片页面
     └─resources
```

## 代码下载

[菜谱应用模板示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260319113732.27963358428085616054252897452106%3A20260604154000%3A2800%3A08133FA02EC56E9FA0B4381DDD46EA09D2949608855B9ADCEDDD4BE596183375.zip?needInitFileName=true)
