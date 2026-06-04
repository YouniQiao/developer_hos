---
title: "类自定义转换装饰器"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/mapstructapplication-0000002546469863
---

## 场景介绍

[状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview)是ArkUI中非常重要的机制，如帮助用户在有交互的界面，通过交互更改参数，UI得到重新渲染。

本装饰器是一个对象转换工具，适用于将一个对象实例转换成另一个对象实例，本装饰器主要针对复杂对象赋值代码冗余严重，缺乏易用性和拓展性的现状做了优化。在HarmonyOS开发V2版本组件时，可快速将另一对象实例深度克隆给@ObservedV2装饰器修饰的对象，无需显式初始化后挨个属性赋值。

## 效果预览

![](./img/6b8168a9.png "点击放大")

## 实现思路

* 基础原理：广度遍历对象所有属性，将其值赋值给目标对象，对象的内部结构可模拟成树结构，基础类型（string，number）作为叶子节点。
* 实现思路：
  1. 源对象到目标对象的深拷贝和属性映射；

     ```
     function deepClone(source: object, target: object, attributes: MappingAttribute[]) {
       // 使用栈结构实现非递归遍历
       const attributeList: Array<object> = [source] // 存储待处理的对象属性
       const attributeNameList: string[] = [''] // 存储属性路径前缀
       const targetAttributeNameObjectMap: HashMap<string, object> = new HashMap() // 目标对象属性路径映射

       while (attributeList.length > 0) {
         const attribute: object = attributeList.pop()!;
         if (!attribute) {
           continue
         }

         const attributeNamePrefix: string = attributeNameList.pop()!;

         // 遍历当前对象的所有属性（包括Symbol），处理并应用映射配置
         Reflect.ownKeys(attribute).forEach(key => {
         });
       }
     }
     ```
  2. 实现对象属性映射的装饰器工厂函数。

     ```
     function mapping(attributes: MappingAttribute[]) {
       return (target: object, key: string, descriptor: PropertyDescriptor) => {
         const originalMethod: Function = descriptor.value // 保存原始方法引用
         // 重写被装饰方法的行为
         descriptor.value = (...args: Object[]) => {
           // 参数校验：至少需要传入源对象参数
           if (args.length < 1) {
             throw new Error('The parameters do not meet the requirements')
           }

           const sourceInstance: object = args as object // 获取第一个参数作为源对象
           const result = originalMethod(...args) as object // 执行原始方法获取目标对象

           deepClone(sourceInstance, result, attributes) // 执行深度克隆和属性映射
           return result // 返回处理后的目标对象
         }
         return descriptor
       }
     }
     ```

## 约束与限制

* 本示例支持API Version 12 Release及以上版本。
* 本示例支持HarmonyOS 5.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 5.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupablility
│  │  └──EntryBackupAbility.ets
│  ├──mapstruct
│  │  └──ParamMapstruct.ets               // 转换器装饰器使用
│  ├──model
│  │  └──PersonDo.ets                     // Do实例对象
│  ├──pages
│  │  └──Index.ets                        // 主页面
│  └──viewmodel
│     └──PersonVo.ets                     // Vo实例对象
├──entry/src/main/resources               // 应用资源目录
└──Mapstruct/src/main/ets                 // 代码区
   └──mapstruct
      ├──MappingAttribute.ets             // 映射属性
      └──Mapstruct.ets                    // 深度克隆实现
```

## 参考文档

[@pura/harmony-utils](https://ohpm.openharmony.cn/#/cn/detail/@pura%2Fharmony-utils)

## 代码下载

[类自定义转换装饰器示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100053.99421131837195226886637586902001%3A50001231000000%3A2800%3AA3D6DFC89EB3CCFFAE614ED83A2059647BE868D846A1494577B631A68175DFC9.zip?needInitFileName=true)
