---
title: "scroll-view"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/components-scroll-view
format: md
---


可滚动视图区域，相当于web中设置了overflow属性的div元素。

**起始版本：** 1.0.0

## 约束与限制

使用竖向滚动时，需要通过CSS设置height，给scroll-view一个固定高度。组件属性的长度单位默认为px。

## 属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| enhanced | boolean | false | 否 | 是否启用scroll-view增强特性，启用后可通过[ScrollViewContext](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-scroll#scrollviewcontext)操作scroll-view。  **起始版本：** 1.0.23 |
| scroll-x | boolean | false | 否 | 允许横向滚动。 |
| scroll-y | boolean | false | 否 | 允许纵向滚动。 |
| upper-threshold | number|string | 50 | 否 | 距顶部/左边多远时，触发 scrolltoupper 事件。 |
| lower-threshold | number|string | 50 | 否 | 距底部/右边多远时，触发 scrolltolower 事件。 |
| scroll-top | number|string | - | 否 | 设置竖向滚动条位置。 |
| scroll-left | number|string | - | 否 | 设置横向滚动条位置。 |
| scroll-into-view | string | - | 否 | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素。 |
| scroll-with-animation | boolean | false | 否 | 在设置滚动条位置时使用动画过渡。 |
| show-scrollbar | boolean | true | 否 | 滚动条显隐控制。 |
| refresher-enabled | boolean | false | 否 | 开启自定义下拉刷新。 |
| refresher-threshold | number | 45 | 否 | 设置自定义下拉刷新阈值。 |
| refresher-default-style | string | "black" | 否 | 设置自定义下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式。 |
| refresher-background | string | - | 否 | 设置自定义下拉刷新区域背景颜色，默认为透明。 |
| refresher-triggered | boolean | false | 否 | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发。 |

### 下拉刷新自定义内容

refresher-default-style设置为none时，在[/topic/body/section/p/scroll-view \&#123;""\&#125;) 下声明slot="refresher"的节点，可实现下拉刷新自定义内容，具体参考下面的示例2（下拉刷新自定义内容）。 (scroll-view]

**起始版本：** 1.0.23

## 事件

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| bindscrolltoupper | event | 滚动到顶部/左边时触发。 |
| bindscrolltolower | event | 滚动到底部/右边时触发。 |
| bindscroll | event | 滚动时触发。 |
| bindrefresherpulling | eventhandle | 自定义下拉刷新控件被下拉。 |
| bindrefresherrefresh | eventhandle | 自定义下拉刷新被触发。 |
| bindrefresherrestore | eventhandle | 自定义下拉刷新被复位。 |
| bindrefresherabort | eventhandle | 自定义下拉刷新被中止。 |

## 示例

**示例1（scroll-view组件）：**

hxml文件

```
<scroll-view
  scroll-y="{{scrollY}}"
  style="height: 50px"
  upper-threshold="50"
  lower-threshold="30px"
  bindscrolltoupper="scrollToUpperEvent"
  bindscrolltolower="scrollToLowerEvent"
  bindscroll="scrollEvent"
  bindrefresherpulling="refresherPullingEvent"
  bindrefresherrefresh="refresherRefreshEvent"
  bindrefresherrestore="refresherRestoreEvent"
  bindrefresherabort="refresherAbortEvent">
  <view id="demo1" class="scroll-view-item demo-text-1">1</view>
  <view id="demo2" class="scroll-view-item demo-text-2">2</view>
  <view id="demo3" class="scroll-view-item demo-text-3">3</view>
</scroll-view>
<view>自定义下拉刷新事件</view>
<scroll-view
  class="page-section page-section-gap"
  scroll-y="{{scrollY}}"
  refresher-enabled="{{true}}"
  style="height: 500px"
  upper-threshold="50"
  lower-threshold="30px"
  bindscrolltoupper="scrollToUpperEvent"
  bindscrolltolower="scrollToLowerEvent"
  bindscroll="scrollEvent"
  bindrefresherpulling="refresherPullingEvent"
  bindrefresherrefresh="refresherRefreshEvent"
  bindrefresherrestore="refresherRestoreEvent"
  bindrefresherabort="refresherAbortEvent">
  <view id="demo1" class="scroll-view-item demo-text-1">3</view>
  <view id="demo2" class="scroll-view-item demo-text-2">4</view>
  <view id="demo3" class="scroll-view-item demo-text-3">5</view>
</scroll-view>
```

js文件：

```
Page({
  data: {
    scrollY: true,
    height: 50
  },
  scrollToUpperEvent(event) {
    // event.detail内容举例为：{"direction":""}
    console.info('scroll-view组件滚动到顶部/左边时触发，携带值为：', event.detail);
  },
  scrollToLowerEvent(event) {
    // event.detail内容举例为：{"direction":""}
    console.info('scroll-view组件滚动到底部/右边时触发，携带值为：', event.detail);
  },
  scrollEvent(event) {
    // event.detail内容举例为：{"scrollTop":0,"scrollLeft":0,"scrollWidth":0,"scrollHeight":0,"deltaY":0,"deltaX":0}
    console.info('scroll-view组件滚动时触发，携带值为：', event.detail);
  },
  refresherPullingEvent(event) {
    // event.detail内容举例为：{"dy":0}
    console.info('scroll-view组件自定义下拉刷新控件被下拉触发，携带值为：', event.detail);
  },
  refresherRefreshEvent(event) {
    // event.detail内容举例为：{"dy":0}
    console.info('scroll-view组件自定义下拉刷新被触发，携带值为：', event.detail);
  },
  refresherRestoreEvent(event) {
    // event.detail内容举例为：{"dy":0}
    console.info('scroll-view组件自定义下拉刷新被复位触发，携带值为：', event.detail);
  },
  refresherAbortEvent(event) {
    // event.detail内容举例为：{"dy":0}
    console.info('scroll-view组件自定义下拉刷新被中止触发，携带值为：', event.detail);
  }
});
```

**示例2（下拉刷新自定义内容）：**

hxml文件：

```
<view>
  <scroll-view
    style="width: 100%; height: 100vh"
    scroll-y="{{scrollY}}"
    refresher-enabled="{{refresherEnabled}}"
    refresher-threshold="{{refresherThreshold}}"
    refresher-default-style="{{refresherDefaultStyle}}"
    refresher-triggered="{{refresherTriggered}}"
    bindrefresherrefresh="refresherRefreshEvent">
    <view slot="refresher" class="custom-refresher">
      <view class="refresher-text">
        <text>下拉刷新中...</text>
      </view>
    </view>
    <view>
      <view class="scroll-view-item">列表内容1</view>
      <view class="scroll-view-item">列表内容2</view>
      <view class="scroll-view-item">列表内容3</view>
    </view>
  </scroll-view>
</view>
```

js文件：

```
Page({
  data: {
    scrollY: true,
    refresherEnabled: true,
    refresherThreshold: 45,
    refresherDefaultStyle: 'none',
    refresherTriggered: false
  },
  timeoutId: null,

  refresherRefreshEvent() {
    this.setData({
      refresherTriggered: true
    });
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    // 模拟内容刷新
    this.timeoutId = setTimeout(() => {
      this.setData({
        refresherTriggered: false
      });
      this.timeoutId = null;
    }, 2000);
  }
});
```

css文件：

```
.custom-refresher {
    width: 100%;
    height: 45px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.refresher-text {
    font-size: 28rpx;
    color: white;
    font-weight: 500;
}

.scroll-view-item {
    padding: 50rpx;
}
```
