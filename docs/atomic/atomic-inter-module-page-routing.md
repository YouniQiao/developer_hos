---
title: "跨模块页面路由"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-inter-module-page-routing
---

当Navigation跳转的目标NavDestination在不同的hsp分包且该hsp包未被主包依赖时，由于首次运行元服务只会下载安装主包，需要使用NavPushPathHelper的接口进行路由跳转。NavPushPathHelper对Navigation路由栈NavPathStack的所有路由跳转接口进行了封装，在NavPushPathHelper中持有一个NavPathStack对象，在封装的跳转接口中去判断子包是否存在，如果不存在则进行动态下载子包，等结果返回后调用NavPathStack的相应的接口将指定的NavDestination页面信息入栈。

## 页面跳转操作

以跳转到product分包的ProductList.ets中的NavDestination为例：

1. 在ProductList组件中创建NavPathStack并在NavDestination的onReady事件中获取NavDestination所属的NavPathStack对其进行初始化。

   ```
   @Component
   struct ProductList {
     pathStack: NavPathStack = new NavPathStack()

     build() {
       NavDestination() {
         Text('产品列表')
       }
       .title('产品列表')
       .onReady((context: NavDestinationContext) => {
         this.pathStack = context.pathStack
       })
     }
   }
   ```
2. 在ProductList.ets文件中创建入口Builder函数ProductListBuilder，在ProductListBuilder中返回ProductList组件。

   ```
   @Builder
   export function ProductListBuilder() {
     ProductList()
   }

   @Component
   struct ProductList {
     pathStack: NavPathStack = new NavPathStack()

     build() {
       NavDestination() {
         Text('产品列表')
       }
       .title('产品列表')
       .onReady((context: NavDestinationContext) => {
         this.pathStack = context.pathStack
       })
     }
   }
   ```
3. 在product分包的resources/base/profile中创建route\_map.json文件并添加如下配置信息。

   ```
   {
     "routerMap": [
       {
         "name": "ProductList",
         "pageSourceFile": "src/main/ets/pages/ProductList.ets",
         "buildFunction": "ProductListBuilder",
         "data": {
           "description" : "this is ProductList"
         }
       }
     ]
   }
   ```
4. 在product分包module.json5配置文件的module标签中定义[routerMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#routermap标签)字段，指向定义的路由表配置文件route\_map.json。

   ```
   "routerMap": "$profile:route_map"
   ```

   ![](./img/9d9fc1d3.png)

   module标签中原有的"pages": "$profile:main\_pages"这行配置必须删除，否则上架后运行，路由跳转会出现异常导致白屏。
5. 在其他分包中需要进行跳转到ProductList的ets文件中导入NavPushPathHelper，然后以NavPathStack实例为参数调用NavPushPathHelper的构造方法生成NavPushPathHelper实例。

   ```
   import { NavPushPathHelper } from '@kit.ArkUI'

   pathStack: NavPathStack = new NavPathStack()
   //以NavPathStack的实例为参数生成NavPushPathHelper实例
   helper: NavPushPathHelper = new NavPushPathHelper(this.pathStack)
   ```

   ![](./img/67621e60.png)

   主包或者需要跳转到其他分包的分包，不需要直接依赖跳转目标页面所在的分包。
6. 调用NavPushPathHelper 的页面跳转方法跳转到ProductList.ets中的子页面。

   ```
   this.helper.pushPath('product', { name: 'ProductList' }, false)
     .then(() => {
       console.error('[pushPath]success.');
     })
     .catch((error: BusinessError) => {
       console.error(`[pushPath]failed, error code = ${error.code}, error.message = ${error.message}.`);
     });
   ```

   ![](./img/e526bbd8.png)

   由于主包并没有直接依赖要跳转的目标页面所在的分包，运行/调试的时候DevEco Studio不会自动把跳转的目标页面所在分包也安装到手机上，需要单击“Run &gt; Edit Configurations &gt; entry &gt; Deploy Multi Hap”，勾选“Deploy Multi Hap Packages”并选择加载目标页面所在的分包。

## 页面其他操作

分包内的页面返回、页面替换、页面删除、参数获取、路由拦截等操作，直接使用NavPathStack相应的方法，具体使用请参考相应的[API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)。
