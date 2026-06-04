---
displayed_sidebar: appDevSidebar
title: "显示自定义地图"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-style
---

## 场景介绍

本章节将向您介绍如何在应用中添加自定义样式的地图。

![](./img/cbe80eb9.jpg "点击放大")

## 接口说明

自定义样式功能主要由[CustomMapStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#custommapstyleoptions)、[setCustomMapStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#setcustommapstyle)提供，更多接口及使用方法请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#setcustommapstyle)。

| 接口名 | 描述 |
| --- | --- |
| [CustomMapStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#custommapstyleoptions) | 自定义样式参数。 |
| [setCustomMapStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#setcustommapstyle)(customMapStyleOptions: [mapCommon.CustomMapStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#custommapstyleoptions)): Promise<void> | 将地图样式修改为自定义样式。 |

## 开发步骤

Map Kit提供两种方法设置自定义地图样式：

* 设置样式ID：使用[Petal Maps Studio](https://developer.petalmaps.com/console/studio/)管理地图样式，并使用样式ID将它们链接到您的地图上。您可以在[Petal Maps Studio](https://developer.petalmaps.com/console/studio/)上创建新样式，或导入现有样式定义。样式一旦发布，使用此样式的应用都会自动应用新样式。
* 设置样式内容：通过传入自定义JSON更改地图样式，JSON的定义参见[样式参考](#样式参考)。

### 设置样式ID

1. 导入相关模块。

   ```
   import { MapComponent, mapCommon, map } from '@kit.MapKit';
   import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
   ```
2. 创建样式ID。

   a.登录[Petal Maps Studio](https://developer.petalmaps.com/console/studio/)。

   ![](./img/58c207ed.png)

   b.点击“Create map”创建自定义样式。

   ![](./img/f5fc1bf9.png)

   c.导入JSON样式文件，点击“Import”。

   ![](./img/1284e0aa.png)

   d.在编辑器里修改样式。

   ![](./img/cc3ae06f.png)

   e.点击“SAVE”生成预览ID，预览ID在编辑样式时会重新生成，您可以通过预览ID测试样式效果。点击“PUBLISH”发布生成样式ID，样式ID是唯一ID，一旦发布生效不会变化。

   ![](./img/e80f59af.png)

   ![](./img/b3eefa60.png)
3. Map Kit提供两种方法设置样式ID：

   * 在创建地图后设置样式ID

     ```
     @Entry
     @Component
     struct CustomMapStyleDemo {
       private TAG = "CustomMapStyleDemo";
       private mapOptions?: mapCommon.MapOptions;
       private mapController?: map.MapComponentController;
       private callback?: AsyncCallback<map.MapComponentController>;

       aboutToAppear(): void {
         // 地图初始化参数
         this.mapOptions = {
           position: {
             target: {
               latitude: 31.984410259206815,
               longitude: 118.76625379397866
             },
             zoom: 15
           }
         };
         this.callback = async (err, mapController) => {
           if (!err) {
             this.mapController = mapController;
             // 自定义样式参数，styleId需要替换为您自己的样式ID或者预览ID，样式ID或者预览ID可在Petal Maps Studio平台上创建
             let param: mapCommon.CustomMapStyleOptions = {
                styleId: "XXX"
             };
             // 设置自定义样式
             await this.mapController.setCustomMapStyle(param).then(() => {
               console.info(this.TAG + `setCustomMapStyle OK`);
             }).catch((error: BusinessError) => {
               console.error(this.TAG + `Failed in getting CustomMapStyle, code is：${error.code},message is ${error.message}`);
             })
           } else {
             console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);
           }
         };
       }

       build() {
         Stack() {
           Column() {
             MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });
           }.width('100%')
         }.height('100%')
       }
     }
     ```
   * 在初始化地图时设置样式ID

     ```
     @Entry
     @Component
     struct CustomMapStyleDemo {
       private mapOptions?: mapCommon.MapOptions;
       private mapController?: map.MapComponentController;
       private callback?: AsyncCallback<map.MapComponentController>;

       aboutToAppear(): void {
         // 地图初始化参数
         this.mapOptions = {
           position: {
             target: {
               latitude: 31.984410259206815,
               longitude: 118.76625379397866
             },
             zoom: 15
           },
           // 自定义样式参数，styleId需要替换为您自己的样式ID或者预览ID，样式ID或者预览ID可在Petal Maps Studio平台上创建
           styleId: "XXX"
         };
         this.callback = async (err, mapController) => {
           if (!err) {
             this.mapController = mapController;
           } else {
             console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);
           }
         };
       }

       build() {
         Stack() {
           Column() {
             MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });
           }.width('100%')
         }.height('100%')
       }
     }
     ```

     设置样式ID之后效果如下：

     ![](./img/32c039c1.jpg "点击放大")

### 设置样式内容

1. 导入相关模块。

   ```
   import { MapComponent, mapCommon, map } from '@kit.MapKit';
   import { AsyncCallback } from '@kit.BasicServicesKit';
   ```
2. 设置样式内容。

   ```
   @Entry
   @Component
   struct CustomMapStyleDemo {
     private mapOptions?: mapCommon.MapOptions;
     private mapController?: map.MapComponentController;
     private callback?: AsyncCallback<map.MapComponentController>;

     aboutToAppear(): void {
       // 地图初始化参数
       this.mapOptions = {
         position: {
           target: {
             latitude: 31.984410259206815,
             longitude: 118.76625379397866
           },
           zoom: 15
         }
       };
       this.callback = async (err, mapController) => {
         if (!err) {
           this.mapController = mapController;
           // 自定义样式参数
           let param: mapCommon.CustomMapStyleOptions = {
                  styleContent: `[{
                      "mapFeature": "landcover.natural",
                      "options": "geometry.fill",
                      "paint": {
                          "color": "#8FBC8F"
                      }},
                      {
                     "mapFeature": "water",
                     "options": "geometry.fill",
                     "paint": {
                         "color": "#4682B4"
                     }}]`
           };
           // 设置自定义样式
           await this.mapController.setCustomMapStyle(param);
         } else {
           console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);
         }
       };
     }

     build() {
       Stack() {
         Column() {
           MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });
         }.width('100%')
       }.height('100%')
     }
   }
   ```

   ![](./img/07653160.jpg "点击放大")

### 样式参考

自定义地图样式JSON内容通过下列4个元素来定义地图样式：

* mapFeature：地图要素
* options：元素选项

  + geometry.fill：几何填充
  + geometry.stroke：几何描边
  + geometry.icon：几何图标
  + labels.text.fill：文本填充
  + labels.text.stroke：文本描边
* paint：绘制属性

  + color：颜色，16进制颜色，例如“#FFFF00”
  + weight：线条宽度。整型值，[1, 24]，默认为1，大于1表示加宽
  + icon-type：图标类型，目前支持night、simple、standard
* visibility：可见属性，默认为可见

  + true：可见
  + false：不可见

下列各表将向您展示支持修改的地图元素。

![](./img/f1c25ae6.png)

* 图标类型icon-type支持范围为：standard/night/simple。

1. All

   All代表全部，即所有类别的集合，支持能力范围同其他所有列表，All仅可调整visibility（可见属性）。
2. Administrative

   | **元素类型**  **Feature type** | **填充颜色**  **Geometry.**  **fill.**  **color** | **填充宽度**  **Geometry.**  **fill.**  **weight** | **描边颜色**  **Geometry.**  **stroke.**  **color** | **描边宽度**  **Geometry.**  **stroke.**  **weight** | **填充颜色**  **Labels.**  **fill.**  **color** | **文本大小**  **Labels.**  **fill.**  **weight** | **描边颜色**  **Labels.**  **stroke.**  **color** | **描边大小**  **Labels.**  **stroke.**  **weight** | **图标类型**  **Icon.**  **icon-type** |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | Capital  首都 | - | - | - | - | ![](./img/74742a1f.png) | ![](./img/16ae8c9c.png) | ![](./img/0815382a.png) | ![](./img/29cd4e16.png) | ![](./img/9d5d38e4.png) |
   | Country  国家 | ![](./img/bc5db217.png) | ![](./img/a836e83f.png) | ![](./img/f9f25c78.png) | ![](./img/f79eb4b2.png) | ![](./img/696c0764.png) | ![](./img/b319ab28.png) | ![](./img/c8056125.png) | ![](./img/28eb4398.png) | - |
   | District  区/县 | - | - | - | - | ![](./img/ee5c038d.png) | ![](./img/1200aebe.png) | ![](./img/728680a8.png) | ![](./img/02b3e22b.png) | ![](./img/53f53061.png) |
   | Locality  乡村、城镇 | - | - | - | - | ![](./img/556f67db.png) | ![](./img/2222c821.png) | ![](./img/ee27107a.png) | ![](./img/7e14fd6b.png) | ![](./img/b1ed35fb.png) |
   | Major-city  1-4级城市 | - | - | - | - | ![](./img/4f3f4d17.png) | ![](./img/56806c2e.png) | ![](./img/db337cbf.png) | ![](./img/ec6a3121.png) | ![](./img/09cee50e.png) |
   | Province  省 | ![](./img/2d0f66fc.png) | ![](./img/5621f174.png) | ![](./img/7febabc6.png) | ![](./img/bcc62ede.png) | ![](./img/95e3f503.png) | ![](./img/08ac790b.png) | ![](./img/555a605e.png) | ![](./img/a9bcbe74.png) | - |
3. Landcover

   | 元素类型  Feature type | 填充颜色  Geometry.  fill.  color | 描边颜色  Geometry.  stroke.  color | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight | 描边颜色  Labels.  stroke.  color | 描边大小  Labels.  stroke.  weight |
   | --- | --- | --- | --- | --- | --- | --- |
   | Attraction  游乐场、动植物园等 | ![](./img/c106945a.png) | - | ![](./img/72c5480c.png) | ![](./img/ea248098.png) | ![](./img/c254bb98.png) | ![](./img/cf8da1d6.png) |
   | Business  购物中心、商业区等 | ![](./img/8c378409.png) | - | ![](./img/c28de641.png) | ![](./img/e06c18df.png) | ![](./img/0e0826a9.png) | ![](./img/7448cdfd.png) |
   | College  学校 | ![](./img/9ce614be.png) | - | ![](./img/e7dc1edb.png) | ![](./img/81511952.png) | ![](./img/cc470e6f.png) | ![](./img/2569c55b.png) |
   | Hospital  医院 | ![](./img/871eb3d4.png) | - | ![](./img/e9d342fa.png) | ![](./img/e153e8be.png) | ![](./img/b2c10792.png) | ![](./img/bba94c33.png) |
   | Human-made  聚集区、小区、工业区、监狱地面等 | ![](./img/6670445c.png) | ![](./img/76c1696b.png) | ![](./img/2e843c9e.png) | ![](./img/8334aab7.png) | ![](./img/545f79a3.png) | ![](./img/e3a2a927.png) |
   | Human-made  建筑物 | ![](./img/e4c51870.png) | ![](./img/fae728f2.png) | - | - | - | - |
   | Natural  陆地、岛屿、海滩、冰川等 | ![](./img/45f9fa1a.png) | - | ![](./img/c5e95078.png) | ![](./img/f3e0334f.png) | ![](./img/ad897318.png) | ![](./img/40cfebd6.png) |
   | Parkland  森林、公园、荒地、高尔夫球场等 | ![](./img/a0666174.png) | - | ![](./img/ad944107.png) | ![](./img/a30afd34.png) | ![](./img/faf2775e.png) | ![](./img/59b9779b.png) |
4. Poi

   | 元素类型  Feature type | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight | 描边颜色  Labels.  stroke.  color | 描边大小  Labels.  stroke.  weight | 图标类型  Icon.  icon-type |
   | --- | --- | --- | --- | --- | --- |
   | Airport  飞机场 | ![](./img/499a010a.png) | ![](./img/d3cd73f2.png) | ![](./img/907d3c90.png) | ![](./img/e4aabfeb.png) | ![](./img/1a933a79.png) |
   | Automotive  汽修、充电桩、洗车等 | ![](./img/42981e00.png) | ![](./img/73936f74.png) | ![](./img/c581fe01.png) | ![](./img/7cdeb57b.png) | ![](./img/b2bc336b.png) |
   | Beauty  美容中心 | ![](./img/bd5ba5df.png) | ![](./img/c19dcf1e.png) | ![](./img/732703b8.png) | ![](./img/3b9e1370.png) | ![](./img/f4e8eb92.png) |
   | Business  公司、商业楼等 | ![](./img/9c3cff11.png) | ![](./img/b51c3a2b.png) | ![](./img/8f696a20.png) | ![](./img/bf282371.png) | ![](./img/bc98c8e1.png) |
   | Eating&drinking  饮食快餐 | ![](./img/ac8b0fa4.png) | ![](./img/33a7a205.png) | ![](./img/58db8071.png) | ![](./img/fdd4c94d.png) | ![](./img/582988c3.png) |
   | Health-care  医院、诊所、药店等 | ![](./img/1471249a.png) | ![](./img/9314b722.png) | ![](./img/00996135.png) | ![](./img/994b205e.png) | ![](./img/e5e511b7.png) |
   | Leisure  休闲娱乐 | ![](./img/b4ac70e1.png) | ![](./img/a051d807.png) | ![](./img/c3d71550.png) | ![](./img/9ee1adb5.png) | ![](./img/64d7ada6.png) |
   | Lodging  酒店、住宿点 | ![](./img/5350bb0c.png) | ![](./img/20af0abc.png) | ![](./img/e99a501e.png) | ![](./img/2e97d06b.png) | ![](./img/7734d632.png) |
   | Miscellaneous  自然地物 | ![](./img/74aa0c59.png) | ![](./img/1cdfad6a.png) | ![](./img/84dd559d.png) | ![](./img/842058fe.png) | ![](./img/486e9fbc.png) |
   | Natural  山峰、森林等 | ![](./img/db4886b5.png) | ![](./img/52499420.png) | ![](./img/274c3d66.png) | ![](./img/34209a1c.png) | ![](./img/95e0949e.png) |
   | Public-service  医院、诊所、药店等 | ![](./img/5c4494fa.png) | ![](./img/f514d0ba.png) | ![](./img/f12eb7ea.png) | ![](./img/da617983.png) | ![](./img/4f008f9f.png) |
   | Railway  铁路 | ![](./img/b48308bd.png) | ![](./img/5316aeca.png) | ![](./img/31fb72f8.png) | ![](./img/57584174.png) | ![](./img/935e8bc3.png) |
   | Shopping  购物中心、市场等 | ![](./img/dd7f4fc3.png) | ![](./img/20430031.png) | ![](./img/3752d568.png) | ![](./img/d6a41859.png) | ![](./img/e341a59e.png) |
   | Sports-outdoor  户外运动、爬山、骑车等 | ![](./img/ebe1434b.png) | ![](./img/6984bf57.png) | ![](./img/be8c7aa2.png) | ![](./img/cdfc2fb3.png) | ![](./img/7f81bb32.png) |
   | Tourism  旅游景点、历史遗迹、教堂等 | ![](./img/ef22c179.png) | ![](./img/828851db.png) | ![](./img/ded545dc.png) | ![](./img/f84b2fea.png) | ![](./img/18885e38.png) |
5. Road

   | 元素类型  Feature type | 填充颜色  Geometry.  fill.  color | 填充宽度  Geometry.  fill.  weight | 描边颜色  Geometry.  stroke.  color | 描边宽度  Geometry.  stroke.  weight | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight | 描边颜色  Labels.  stroke.  color | 描边大小  Labels.  stroke.  weight | 图标类型  Icon.  icon-type |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | City-arterial  城市主干道 | ![](./img/7932e5f5.png) | ![](./img/c0371ecd.png) | ![](./img/d34d5d9d.png) | ![](./img/5d34a00b.png) | ![](./img/936ff9dc.png) | ![](./img/67a58a2c.png) | ![](./img/7b83a67b.png) | ![](./img/8a4f3607.png) | ![](./img/2b42db45.png) |
   | Highway  城市高速 | ![](./img/a34a251d.png) | ![](./img/8040cd83.png) | ![](./img/ac41b83a.png) | ![](./img/29fc14b0.png) | ![](./img/e5301ce9.png) | ![](./img/994a6112.png) | ![](./img/249f2426.png) | ![](./img/e0498bfe.png) | ![](./img/5d3d816a.png) |
   | Minor-road  市区内支线等 | ![](./img/d68c0845.png) | ![](./img/5c02dc00.png) | ![](./img/1c04424c.png) | ![](./img/3868797b.png) | ![](./img/f02af625.png) | ![](./img/b3548302.png) | ![](./img/359b9b70.png) | ![](./img/282af59d.png) | - |
   | National  国道 | ![](./img/aa605e2a.png) | ![](./img/7a86b944.png) | ![](./img/e24c6fbb.png) | ![](./img/6d661b00.png) | ![](./img/6becdb4c.png) | ![](./img/2bee9beb.png) | ![](./img/5969e4b6.png) | ![](./img/19300030.png) | ![](./img/77007272.png) |
   | Province  省道 | ![](./img/93b3a80c.png) | ![](./img/030bf7f1.png) | ![](./img/33aaf5e2.png) | ![](./img/39c54afc.png) | ![](./img/db8a4ed3.png) | ![](./img/6578b8da.png) | ![](./img/114888a0.png) | ![](./img/32259aa2.png) | ![](./img/ab13e4fa.png) |
   | Sidewalk  人行道 | ![](./img/edee994c.png) | ![](./img/db6ef374.png) | ![](./img/00ecfa50.png) | ![](./img/da266c6d.png) | ![](./img/eb6ff134.png) | ![](./img/95642585.png) | ![](./img/e7881ed1.png) | ![](./img/2161d51e.png) | - |
6. Trafficinfo

   | 元素类型  Feature type | 填充颜色  Geometry.  fill.  color | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight |
   | --- | --- | --- | --- |
   | Closed  封路 | ![](./img/9697b4cb.png) | ![](./img/e9e12db6.png) | ![](./img/46812668.png) |
7. Transit

   | 元素类型  Feature type | 填充颜色  Geometry.  fill.  color | 填充宽度  Geometry.  fill.  weight | 描边颜色  Geometry.  stroke.  color | 描边宽度  Geometry.  stroke.  weight | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight | 描边颜色  Labels.  stroke.  color | 描边大小  Labels.  stroke.  weight | 图标类型  Icon.  icon-type |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | Airport  机场 | ![](./img/21036626.png) | - | - | - | ![](./img/8e37a1c4.png) | ![](./img/e5f62ce2.png) | ![](./img/ac30c796.png) | ![](./img/a49eedab.png) | ![](./img/463e53e2.png) |
   | Airport Runway  机场跑道 | ![](./img/906aa0b4.png) | ![](./img/f9eed66b.png) | ![](./img/8b840bde.png) | ![](./img/90ee48fe.png) | - | - | - | - | - |
   | Airport Runway Taxiway  机场跑道滑行道 | ![](./img/d68de715.png) | ![](./img/d6a64eab.png) | ![](./img/9e14b540.png) | ![](./img/f5529a65.png) | - | - | - | - | - |
   | Bus  公交 | - | - | - | - | ![](./img/a2f11243.png) | ![](./img/1c4b8ab6.png) | ![](./img/3c4e21f0.png) | ![](./img/aef641e1.png) | ![](./img/ecb70469.png) |
   | Ferry-line  航线 | ![](./img/b443a1e6.png) | - | - | - | ![](./img/a912e0e2.png) | ![](./img/e1f314cd.png) | ![](./img/baaf2abb.png) | ![](./img/f00d6208.png) | - |
   | Ferry-terminal  港口 | ![](./img/e52c73b9.png) | - | - | - | ![](./img/6da52e3a.png) | ![](./img/1555a1cb.png) | ![](./img/e740fae4.png) | ![](./img/f984dab7.png) | ![](./img/67ff97d1.png) |
   | Other  出租车、  出入口等 | - | - | - | - | ![](./img/eb4be1c6.png) | ![](./img/39bc8faa.png) | ![](./img/4c587a8f.png) | ![](./img/c0917d2e.png) | ![](./img/a5a395f4.png) |
   | Rail-station  火车站、  高铁站 | ![](./img/a5636c41.png) | - | - | - | ![](./img/b4bbbf3b.png) | ![](./img/2717e56a.png) | ![](./img/d762cc99.png) | ![](./img/718b4219.png) | ![](./img/3e1964cf.png) |
   | Railway  铁路线、  高铁线 | ![](./img/415f5c8b.png) | ![](./img/02383d85.png) | ![](./img/8ae6e4d7.png) | ![](./img/01dd22cd.png) | - | - | - | - | - |
   | Subway  地铁 | ![](./img/fa23db39.png) | ![](./img/36406de7.png) | ![](./img/15c88eb3.png) | ![](./img/c719fbc5.png) | ![](./img/e28788f5.png) | ![](./img/41679052.png) | ![](./img/774fc5a3.png) | ![](./img/fc935f30.png) | ![](./img/91e0bfce.png) |
   | Traffic\_light  交通灯 | - | - | - | - | - | - | - | - | ![](./img/0ffa463f.png) |
8. Water

   | 元素类型  Feature type | 填充颜色  Geometry.  fill.  color | 填充颜色  Labels.  fill.  color | 文本大小  Labels.  fill.  weight |
   | --- | --- | --- | --- |
   | Ocean  水系、海洋、湖泊、河流 | ![](./img/52452b72.png) | ![](./img/bf7dcfa5.png) | ![](./img/076e4d3f.png) |
