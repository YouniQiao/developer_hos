---
title: "同步方式动态加载Native模块"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/js-apis-load-native-module
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/js-apis-load-native-module
last_sync: 2026-06-07
sync_hash: 96d472a9
---
[loadNativeModule (同步动态加载系统库接口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-common-load-native-module)用于同步动态加载Native模块，目的是按需加载所需要的模块。使用该接口会增加加载so文件的时间，开发者需评估其对功能的影响。

## 函数说明

```
loadNativeModule(moduleName: string): Object;
```

| 参数 | 说明 |
| --- | --- |
| moduleName | 加载的模块名。 |

![](./img/65c14ac3.png)

loadNativeModule加载的模块名是指依赖方oh-package.json5文件的dependencies中的名字。

loadNativeModule必须在UI主线程中调用。

该接口在加载常量字符串或变量表达式作为参数时，需要配置依赖。

## loadNativeModule支持的场景

| 场景 | 示例 |
| --- | --- |
| 系统库模块 | 加载@ohos.或@system. |
| 应用内Native模块 | 加载libNativeLibrary.so |

## 使用示例

* **HAP加载系统库模块**

```
// HAP加载系统库模块
let hilog: ESObject = loadNativeModule('@ohos.hilog');
hilog.info(0, 'testTag', 'loadNativeModule ohos.hilog success');
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSRuntime/ArkTSModule/JsApisLoadNativeModule/entry/src/main/ets/pages/Index.ets#L27-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


* **HAP加载Native库**

libentry.so的index.d.ts文件如下：

```
export const add: (a: number, b: number) => number;
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSRuntime/ArkTSModule/JsApisLoadNativeModule/entry/src/main/cpp/types/libentry/index.d.ts#L16-L18" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：index.d.ts</a></div>


1.加载本地so库时，需要在oh-package.json5文件中配置dependencies项。

```
"dependencies": {
  "libentry.so": "file:./src/main/cpp/types/libentry"
},
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSRuntime/ArkTSModule/JsApisLoadNativeModule/entry/oh-package.json5#L23-L27" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：oh-package.json5</a></div>


2.在build-profile.json5中进行配置。

```
"buildOption": {
  "arkOptions": {
    "runtimeOnly": {
      "packages": [
        "libentry.so"
      ]
    }
  },
  // ...
},
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSRuntime/ArkTSModule/JsApisLoadNativeModule/entry/build-profile.json5#L18-L39" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：build-profile.json5</a></div>


3.使用loadNativeModule加载libentry.so，并调用add函数。

```
//HAP加载Native库
let module: ESObject = loadNativeModule('libentry.so');
let sum: number = module.add(1, 2);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSRuntime/ArkTSModule/JsApisLoadNativeModule/entry/src/main/ets/pages/Index.ets#L39-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
