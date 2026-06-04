---
title: "房源图片预览"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/easylife_demo_vrhouse-0000002349301462
---

## 场景介绍

房源图片预览是便捷生活类应用中的典型场景之一，如用户需要切换查看不同房源的图片详情。

本示例基于[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)实现滑动、点击切换不同类型的分组图片预览功能。

## 效果预览

![](./img/7f721651.png "点击放大")

## 实现思路

1. 点击改变当前房间类型id，通过idMap关联该类第一张房间图片id，实现点击房源类型预览该类第一张图片的效果。

   ```
   Swiper(this.swiperctr) {
     ForEach(this.house?.categorys, (category: Category, index: number) => {
       Column() {
         Text(category.name + '(' + category.details.length + ')');
         Line();
       }
       .onClick(() => {
         this.categoryId = index;
         let arr: Array<[number, number]> = Array.from(this.idMap.entries());
         this.photoId = arr[this.categoryId][0];
         this.swiperctr.changeIndex(this.photoId);
       });
     }, (index: number) => JSON.stringify(index));
   }
   .onChange((index: number) => {
     this.categoryId = index;
   });
   ```
2. 监听[onChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#onchange)事件，改变当前预览图片id，判断id所属的房间类型，实现房间图片切换触发所属类型标题联动改变。

   ```
   Swiper(this.swiperctr) {
     ForEach(this.house?.categorys, (category: Category) => {
       ForEach(category.details, (detail: Detail) => {
         Image(detail.image)
         .objectFit(ImageFit.Cover)
         .height(300)
         .width(400);
       }, (index: number) => JSON.stringify(index));
     }, (index: number) => JSON.stringify(index));
   }
   .indicator(false)
   .onChange((index: number) => {
     this.photoId = index;
     let id = 0;
     this.idMap.forEach((v: number, k: number) => {
       if (this.photoId >= k && this.photoId <= v) {
         this.categoryId = id;
       }
       id += 1;
     });
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  └──Constants.ets                   // 常量
│  ├──components
│  │  ├──HomeComponent.ets               // 主页组件
│  │  └──PhoneLineComponent.ets          // 电话组件
│  ├──entryability
│  │  └──EntryAbility.ets                // 沉浸式设置
│  ├──models
│  │  └──HouseModel.ets                  // 房子数据类
│  └──pages
│     ├──HomePage.ets                    // 主页
│     ├──HouseImagePage.ets              // 房子预览页
│     └──HouseInfoPage.ets               // 房子详情页
└──entry/src/main/resources              // 资源文件目录
```

## 参考文档

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

## 代码下载

[房源图片预览示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310114506.62904964156959511671482608899463%3A20260604122327%3A2800%3AF8C59E463AD08FA852DFB6B8A1BB8C339F74E11FF05B127D420368A1A4CB489D.zip?needInitFileName=true)
