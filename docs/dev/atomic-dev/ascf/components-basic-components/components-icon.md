---
title: "icon"
original_url: /docs/dev/atomic-dev/ascf/components-basic-components/components-icon
format: md
---


图标组件。

**起始版本：** 1.0.0

## 约束与限制

组件属性的长度单位默认为px，支持传入单位（rpx/px）。

## 属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | string | - | 是 | icon 类型，有效值：success，success\_no\_circle，success\_circle，safe\_success，safe\_warn，info，info\_circle，warn，waiting，waiting\_circle，circle，cancel，download，search，clear。 |
| size | number|string | 23 | 否 | icon的大小，支持传入单位（rpx/px），默认单位：px。 |
| color | string | - | 否 | icon 颜色，同 CSS 色值。 |

## 示例

```
<icon class="icon-box-img" type="warn" color="#C9C9C9" size="{{100}}"/>
```
