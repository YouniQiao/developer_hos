---
format: md
title: "ArkTS中globalThis无法使用该如何替换"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-54
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-54
last_sync: 2026-06-07
sync_hash: 9cc4f254
---
ArkTS不支持动态更改对象布局，也不支持全局作用域和globalThis。请参考以下替换方案：

1. 通过单例map做中转：

   ```
   import { common } from '@kit.AbilityKit';

   // Construct singleton objects
   export class GlobalThis {
     private constructor() {};
     private static instance: GlobalThis;
     private _uiContexts = new Map<string, common.UIAbilityContext>();
     private value = '';

     public static getInstance(): GlobalThis {
       if (!GlobalThis.instance) {
         GlobalThis.instance = new GlobalThis();
       }
       return GlobalThis.instance;
     }

     getContext(key: string): common.UIAbilityContext | undefined {
       return this._uiContexts.get(key);
     }

     setContext(key: string, value: common.UIAbilityContext): void {
       this._uiContexts.set(key, value);
     }

     setValue(value:string){
       this.value = value
     }

     getValue():string{
       return this.value;
     }
   }
   ```
2. 使用：

   ```
   import { GlobalThis } from '../utils/globalThis';

   @Entry
   @Component
   struct Index {
     @State value: string = GlobalThis.getInstance().getValue();

     build() {
       Row() {
         Column() {
           Text(this.value)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
           Button("setValue")
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(() => {
               GlobalThis.getInstance().setValue("TEST");
             })
           Button("getValue")
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(() => {
               this.value = GlobalThis.getInstance().getValue();
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

**参考链接**

[arkts-no-globalthis](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-more-cases#arkts-no-globalthis)
