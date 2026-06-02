---
title: "text"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/components-text
---

文本。

**起始版本：** 1.0.0

## 约束与限制

text 组件内只支持 text 嵌套，嵌套其他的组件无效。

## 属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| user-select | boolean | false | 否 | 是否可选。 |
| space | string | emsp | 否 | 以何种方式显示连续空格。有效值如下：  - nbsp：根据字体设置的空格大小。  - ensp：中文字符空格一半大小。  - emsp：中文字符空格大小。  设置非以上有效值时，组件直接显示开发者输入的空格。 |
| decode | boolean | false | 否 | 是否解码。例如&lt;会显示为\&lt;。  可以解析&apos;，&gt;，&lt;，&amp;，&ensp;， &emsp;， &nbsp; 。 |

## 示例

```
<view>
  <view class="text-box">
    <text user-select="{{true}}">这是一段文本，可以选中。</text>
  </view>
  <view class="text-box">
    <text space="ensp">这是ensp 空格</text>
  </view>
  <view class="text-box">
    <text space="emsp">这是emsp 空格</text>
  </view>
  <view class="text-box">
    <text space="nbsp">这是nbsp 空格</text>
  </view>
</view>
```
