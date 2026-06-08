---
title: "绑定手势方法"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding
last_sync: 2026-06-07
sync_hash: e1e812d3
---
通过给各个组件绑定不同的手势事件，并设计事件的响应方式，当手势识别成功时，ArkUI框架将通过事件回调通知组件手势识别的结果。

![](./img/2390a54e.png)

gesture、priorityGesture和parallelGesture当前不支持使用三目运算符（条件? 表达式1 : 表达式2）切换手势绑定。

## gesture（常规手势绑定方法）

```
.gesture(gesture: GestureType, mask?: GestureMask)
```

gesture为通用的一种手势绑定方法，可以将手势绑定到对应的组件上。

例如，可以将点击手势TapGesture通过gesture方法将手势绑定到Text组件上。

```
// xxx.ets
@Entry
@Component
struct RegularBinding {
  build() {
    Column() {
      Text('Gesture').fontSize(28)
      // 采用gesture手势绑定方法绑定TapGesture
        .gesture(
          TapGesture()
            .onAction(() => {
              console.info('TapGesture is onAction');
            }))
    }
    .height(200)
    .width(250)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/GestureBinding/entry/src/main/ets/pages/Gesture.ets#L18-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Gesture.ets</a></div>


## priorityGesture（带优先级的手势绑定方法）

```
.priorityGesture(gesture: GestureType, mask?: GestureMask)
```

priorityGesture是带优先级的手势绑定方法，可以在组件上绑定优先识别的手势。

在默认情况下，当父组件和子组件均使用gesture绑定相同类型手势时，子组件优先识别通过gesture绑定的手势。当父组件使用priorityGesture绑定与子组件同类型的手势时，父组件优先识别通过priorityGesture绑定的手势。

对于绑定了长按手势的组件，可以设置触发长按的最短时间[duration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesturehandler#longpressgesturehandleroptions)。触发长按时，系统将优先响应触发长按时间最短的组件，忽略priorityGesture设置。

例如，当父组件Column和子组件Text同时绑定TapGesture手势时，父组件以带优先级手势priorityGesture的形式进行绑定时，优先响应父组件绑定的TapGesture。

```
// xxx.ets
@Entry
@Component
struct PriorityBinding {
  build() {
    Column() {
      Text('Gesture').fontSize(28)
        .gesture(
          TapGesture()
            .onAction(() => {
              hilog.info(DOMAIN, TAG,'Text TapGesture is onAction');
            }))
    }
    .height(200)
    .width(250)
    // 设置为priorityGesture时，点击文本区域会忽略Text组件的TapGesture手势事件，优先响应父组件Column的TapGesture手势事件
    .priorityGesture(
      TapGesture()
        .onAction(() => {
          hilog.info(DOMAIN, TAG,'Column TapGesture is onAction');
        }), GestureMask.IgnoreInternal)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/GestureBinding/entry/src/main/ets/pages/PriorityGesture.ets#L18-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PriorityGesture.ets</a></div>


## parallelGesture（并行手势绑定方法）

```
.parallelGesture(gesture: GestureType, mask?: GestureMask)
```

parallelGesture是并行的手势绑定方法，可以在父子组件上绑定可以同时响应的相同手势。

在默认情况下，手势事件为非冒泡事件，当父子组件绑定相同的手势时，父子组件绑定的手势事件会发生竞争，最多只有一个组件的手势事件能够获得响应。而当父组件绑定了并行手势parallelGesture时，父子组件相同的手势事件都可以触发，实现类似冒泡效果。

```
// xxx.ets
@Entry
@Component
struct ParallelBinding {
  build() {
    Column() {
      Text('Gesture').fontSize(28)
        .gesture(
          TapGesture()
            .onAction(() => {
              hilog.info(DOMAIN, TAG,'Text TapGesture is onAction');
            }))
    }
    .height(200)
    .width(250)
    // 设置为parallelGesture时，点击文本区域会同时响应父组件Column和子组件Text的TapGesture手势事件
    .parallelGesture(
      TapGesture()
        .onAction(() => {
          hilog.info(DOMAIN, TAG,'Column TapGesture is onAction');
        }), GestureMask.Normal)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/GestureBinding/entry/src/main/ets/pages/ParallelGesture.ets#L19-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ParallelGesture.ets</a></div>
