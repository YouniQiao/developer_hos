---
title: "未成年人内容过滤"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/new_minors_protection-0000002266453325
---

## 场景介绍

本示例在阅读类应用中，为不同年龄分段的用户提供差异化的可浏览内容，具体场景如下：

1. 适配系统自带健康使用手机模式：基于[minorsProtection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection)提供的未成年人模式，当用户在应用中开启未成年人模式时，引导至系统界面进行设置，并依据系统提供的用户年龄信息来实现内容过滤。
2. 应用自定义未成年人模式：开启未成年人模式即引导用户至应用未成年人守护设置界面进行相关设置，并依据应用提供的用户年龄信息进行内容过滤。应用未成年人模式功能包含：未成年人浏览内容过滤、未成年人模式密码设置以及密码更新、修改未成年人设置时拉起密码验证。

## 效果预览

![](./img/9e83c231.webp "点击放大")

## 实现思路

本节主要介绍应用自定义未成年人模式：

1. 应用启动时完成未成年人模式的相关设置初始化：注册未成年人模式相关监听事件、初始化年龄限制等状态变量。

   ```
   // 注册未成年人模式相关监听事件
   MinorsProtectionUtils.initMinorsProtection();
   // 初始化应用状态，包括未成年人模式的开关状态、用户信息等
   let isMinorsOn = MinorsProtectionUtils.isAppMinorsModeOpen();
   AppStorage.setOrCreate('minorsModeOn', isMinorsOn);
   AppStorage.setOrCreate('systemTimeLimitOn', isMinorsOn);
   let userInfo: UserInfo = DataPreferenceUtils.getValue('userInfo', MYSELF) as UserInfo;
   AppStorage.setOrCreate('userInfo', userInfo);
   if (!AppStorage.has('minorsAgeLimit')) {
     if (isMinorsOn && (typeof userInfo.age === 'number' && userInfo.age < 18)) {
       AppStorage.setOrCreate('minorsAgeLimit', getAgeLimit(userInfo.age));
     } else {
       AppStorage.setOrCreate('minorsAgeLimit', 'All');
     }
   }
   ```
2. 定义未成年人模式开关事件、使用时间限制开关事件及跟随系统设置开关事件，并通过[Emitter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-emitter)监听以上三个事件。

   ```
   // 监听应用未成年人模式开关事件
   emitter.on({ eventId: MinorsConstant.MINORS_MODE_EVENT_ID }, this.minorsEventCallback);
   // 监听使用时间限制开关
   emitter.on({ eventId: MinorsConstant.TIME_LIMIT_EVENT_ID }, this.timeEventCallback);
   // 监听跟随系统设置开关事件
   emitter.on({ eventId: MinorsConstant.FOLLOW_SYSTEM_EVENT_ID }, (eventData: emitter.EventData) => {});
   ```

3. 首次开启未成年人模式时，设置未成年人模式管理密码，验证完成后开启未成年人模式，并更新年龄限制等状态变量。

   ```
   // 进入密码设置页，设置应用的未成年人模式验证密码
   this.pathStack.pushPath({
     name: 'MinorsPassPage', param: 0, onPop: (info: PopInfo) => {
       if (!info.result) {
         return;
       }
       let res = info.result as string;
       if (res === CommonConstant.TRUE_RESULT) {
         // 设置成功后开启未成年人模式
         MinorsProtectionUtils.openMinorsMode(this.ctx);
       }
     }
   });
   ```
4. 遍历内容列表，比较用户年龄是否大于等于内容的限制年龄，若满足要求，则该内容可见。

   ```
   // 对内容列表进行过滤
   this.articles.forEach((article) => {
     if (article.ageLimit === 'All') {
       article.visible = true;
     } else if (typeof article.ageLimit === 'number' && article.ageLimit < this.minorAgeLimit) {
       article.visible = true;
     } else {
       article.visible = false;
     }
     articleRes = articleRes || article.visible;
   });
   this.rankArticles.forEach((rankArticle) => {
     if (rankArticle.ageLimit === 'All') {
       rankArticle.visible = true;
     } else if (typeof rankArticle.ageLimit === 'number' && rankArticle.ageLimit < this.minorAgeLimit) {
       rankArticle.visible = true;
     } else {
       rankArticle.visible = false;
     }
     rankArticleRes = rankArticleRes || rankArticle.visible;
   });
   ```
5. 关闭未成年人模式后，还原应用状态和年龄限制，将所有内容设置为可见。

   ```
   // 取消年龄限制
   AppStorage.setOrCreate('minorsAgeLimit', 'All');
   // 还原内容列表
   this.articles.forEach((article) => {
     article.visible = true;
   });
   this.rankArticles.forEach((rankArticle) => {
     rankArticle.visible = true;
   });
   this.articles.change();
   this.rankArticles.change();
   this.haveArticle = true;
   this.haveRankArticle = true;
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──component
│  │  ├──CommonComponent.ets                     // 通用组件
│  │  └──MinorsModeConfirm.ets                   // 未成年人模式开启选项
│  ├──constants
│  │  └──CommonConstant.ets                      // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets                        // 程序入口类
│  ├──model
│  │  ├──DataModel.ets                           // 页面数据模型
│  │  └──ObservedArray.ets                       // 用于监听数组数据变化的数组
│  ├──pages
│  │  ├──Index.ets                               // 首页，主要包含可浏览内容
│  │  ├──MinorGuardianPage.ets                   // 未成年人守护页
│  │  ├──MinorsPassPage.ets                      // 密码设置页
│  │  ├──OriginPage.ets                          // 起始页
│  │  ├──UserInfoPage.ets                        // 用户信息页
│  │  └──VerifyPassDialogPage.ets                // 密码验证页
│  └──view
│     ├──HomeView.ets                            // 首页视图
│     └──MineView.ets                            // 我的页面视图
├──entry/src/main/resources                      // 应用资源目录
├──feature/minorsabilities/src/main/ets          // 未成年人模式功能模块
│  ├──constants
│  │  └──MinorsConstant.ets                      // 未成年人设置常量
│  ├──model
│  │  └──UserDataModel.ets                       // 用户数据模型
│  └──utils
│     ├──DataPreferenceUtils.ets                 // 首选项管理工具类
│     └──MinorsProtectionUtils.ets               // 未成年人模式工具类
└──feature/minorsabilities/src/main/resources
```

## 参考文档

[minorsProtection（华为账号未成年人模式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection)

[@ohos.events.emitter(Emitter)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-emitter)

## 代码下载

[未成年人内容过滤示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225161637.00430644789126427944593470506496%3A50001231000000%3A2800%3AF3CA30DFC0E565BFD079B5666322AB1EE13CEAEE237FC8AB57B1DD37B673B889.zip?needInitFileName=true)
