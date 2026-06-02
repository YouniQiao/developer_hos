---
title: "模块内页面路由"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-intra-module-page-routing
---

模块内Navigation页面的路由都是基于页面栈[NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10)提供的方法进行，每个Navigation都需要创建并传入一个NavPathStack对象，用于进行页面的路由操作，主要涉及页面跳转、页面返回、页面替换、页面删除、参数获取、路由拦截等功能。

```
@Entry
@Component
struct Index {
  // 创建一个页面栈对象
  pathStack: NavPathStack = new NavPathStack()

  build() {
    //把页面栈对象传入Navigation
    Navigation(this.pathStack) {
    }
    .title('Main')
  }
}
```

## 页面跳转操作

页面跳转是路由最常用的能力，可以通过创建自定义路由表或系统路由表，然后使用NavPathStack的跳转方法实现Navigation的页面跳转。

### 系统路由表

![](./img/6dc27ecc.png)

系统路由表的方式，不需要引入子页面的ets文件，解除了各个页面之间的耦合；此外路由跳转通过配置文件配置方式实现，降低了代码的复杂度。建议使用系统路由表的方式实现页面的跳转。

以路由到ShoppingCar.ets中的NavDestination为例：

1. 在/ets/pages/ShoppingCar.ets的ShoppingCar组件中创建NavPathStack对象并在NavDestination的onReady事件中使用NavDestination所属的NavPathStack对其初始化。

   ```
   @Component
   struct ShoppingCar {
     pathStack: NavPathStack = new NavPathStack()

     build() {
       NavDestination() {
         Text('购物车')
       }
       .title('购物车')
       .onReady((context: NavDestinationContext) => {
         this.pathStack = context.pathStack
       })
     }
   }
   ```
2. 在/ets/pages/ShoppingCar.ets中创建入口Builder函数ShoppingCarBuilder，在ShoppingCarBuilder中返回ShoppingCar组件。

   ```
   @Builder
   export function ShoppingCarBuilder() {
     ShoppingCar()
   }
   @Component
   struct ShoppingCar {
     pathStack: NavPathStack = new NavPathStack()

     build() {
       NavDestination() {
         Text('购物车')
       }
       .title('购物车')
       .onReady((context: NavDestinationContext) => {
         this.pathStack = context.pathStack
       })
     }
   }
   ```
3. 在resources/base/profile中创建route\_map.json文件并添加如下配置信息。

   ```
   {
     "routerMap": [
       {
         "name": "ShoppingCar",
         "pageSourceFile": "src/main/ets/pages/ShoppingCar.ets",
         "buildFunction": "ShoppingCarBuilder",
         "data": {
           "description" : "this is ShoppingCar"
         }
       }
     ]
   }
   ```
4. 在module.json5配置文件的module标签中定义[routerMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#routermap标签)字段，指向定义的路由表配置文件route\_map.json。

   ```
   "routerMap": "$profile:route_map"
   ```
5. 调用NavPathStack的页面跳转方法跳转到ShoppingCar.ets中的子页面。

   ```
   this.pathStack.pushPathByName('ShoppingCar', null, false)
   ```

### 自定义路由表

![](./img/9590cf2d.png)

自定义路由表的方式，需要导入每个子页面的ets文件，耦合性比较强；此外还需要在路由表Builder方法中增加相应路由返回代码，可扩展性不好，不建议使用。

以路由到Mine.ets中的NavDestination为例：

1. 在/ets/pages/Mine.ets的Mine组件中创建NavPathStack对象并在NavDestination的onReady事件中获取NavDestination所属的NavPathStack对其进行初始化。

   ```
   @Component
   export struct Mine {
     pathStack: NavPathStack = new NavPathStack()

     build() {
       NavDestination() {
         Column(){
           Text('我的页面')
         }
         .justifyContent(FlexAlign.Center)
         .width('100%')
       }
       .title('我的')
       .onReady((context: NavDestinationContext) => {
         this.pathStack = context.pathStack
       })
     }
   }
   ```
2. 在/ets/pages/Index.ets中构建路由表方法pageMap，该方法需要通过@Builder进行修饰，然后通过navDestination属性方法传给Navigation。pageMap根据传入的pageName参数值，返回Mine.ets中的NavDestination。

   ```
   import { Mine } from './Mine'

   @Entry
   @Component
   struct Index {
     // 创建一个页面栈对象
     pageStack: NavPathStack = new NavPathStack()

     @Builder
     pageMap(pageName: string) {
       if (pageName === 'Mine') {
         Mine()
       }
     }

     build() {
       //把页面栈对象传入Navigation
       Navigation(this.pageStack) {
       }
       .title('Main')
       .navDestination(this.pageMap)
     }
   }
   ```
3. 调用NavPathStack的页面跳转方法跳转到Mine.ets中的子页面。

   ```
   this.pathStack.pushPathByName('Mine', null, false)
   ```

## 页面其他操作

页面返回、页面替换、页面删除、参数获取、路由拦截等操作，直接使用NavPathStack相应的方法，具体使用请参考相应的[API](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)。
