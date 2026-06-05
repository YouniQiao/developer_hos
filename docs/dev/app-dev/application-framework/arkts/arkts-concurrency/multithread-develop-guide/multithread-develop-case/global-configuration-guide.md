---
title: "全局配置项功能场景"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/global-configuration-guide
format: md
---


对于需要使用进程单例的场景，例如不同并发实例间需要数据保持一致的全局配置项功能，可以采用[共享模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable-module)来实现。

以下示例展示了只有在Wi-Fi打开且用户登录的情况下才能进行下载的功能，具体步骤如下。

1. 编写全局配置文件。

   ```
   import { ArkTSUtils } from '@kit.ArkTS';

   'use shared'

   @Sendable
   class Config {
     public lock: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();
     public isLogin: boolean = false;
     public loginUser?: string;
     public wifiOn: boolean = false;

     async login(user: string) {
       return this.lock.lockAsync(() => {
         this.isLogin = true;
         this.loginUser = user;
       }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)
     }

     async logout(user?: string) {
       return this.lock.lockAsync(() => {
         this.isLogin = false;
         this.loginUser = '';
       }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)
     }

     async getIsLogin(): Promise<boolean> {
       return this.lock.lockAsync(() => {
         return this.isLogin;
       }, ArkTSUtils.locks.AsyncLockMode.SHARED)
     }

     async getUser(): Promise<string> {
       return this.lock.lockAsync(() => {
         return this.loginUser!;
       }, ArkTSUtils.locks.AsyncLockMode.SHARED)
     }

     async setWifiState(state: boolean) {
       return this.lock.lockAsync(() => {
         this.wifiOn = state;
       }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)
     }

     async isWifiOn() {
       return this.lock.lockAsync(() => {
         return this.wifiOn;
       }, ArkTSUtils.locks.AsyncLockMode.SHARED)
     }
   }

   export let config = new Config();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCases/entry/src/main/ets/managers/Config.ets#L16-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Config.ets</a></div>

2. UI主线程及子线程访问全局配置项。

   ```
   import { config } from './Config';
   import { taskpool } from '@kit.ArkTS';

   @Concurrent
   async function download() {
     if (!await config.isWifiOn()) {
       console.info('wifi is off');
       return false;
     }
     if (!await config.getIsLogin()) {
       console.info('not login');
       return false;
     }
     console.info(`User[${await config.getUser()}] start download ...`);
     return true;
   }

   @Entry
   @Component
   struct Index {
     @State message: string = 'not login';
     @State wifiState: string = 'wifi off';
     @State downloadResult: string = '';
     input: string = '';

     build() {
       Row() {
         Column() {
           Text(this.message)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
           TextInput({ placeholder: '请输入用户名' })
             .id('textInput')
             .fontSize(20)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onChange((value) => {
               this.input = value;
             })
           Text('login')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               if (!await config.getIsLogin() && this.input) {
                 this.message = 'login: ' + this.input;
                 try {
                   config.login(this.input);
                 } catch (e) {
                   console.error('login failed');
                 }
               }
             })
             .backgroundColor(0xcccccc)
           Text('logout')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               if (await config.getIsLogin()) {
                 this.message = 'not login';
                 try {
                   config.logout();
                 } catch (e) {
                   console.error('logout failed');
                 }
               }
             })
             .backgroundColor(0xcccccc)
           Text(this.wifiState)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
           Toggle({ type: ToggleType.Switch })
             .onChange(async (isOn: boolean) => {
               await config.setWifiState(isOn)
               this.wifiState = isOn ? 'wifi on' : 'wifi off';
             })
           Text('download')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               let ret = await taskpool.execute(download);
               this.downloadResult = ret ? 'download success' : 'download fail';
             })
           Text(this.downloadResult)
             .fontSize(20)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCases/entry/src/main/ets/managers/GlobalConfigurationGuide.ets#L16-L135" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GlobalConfigurationGuide.ets</a></div>
