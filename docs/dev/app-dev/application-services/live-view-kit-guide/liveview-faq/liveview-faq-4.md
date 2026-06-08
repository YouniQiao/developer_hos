---
displayed_sidebar: appDevSidebar
title: "关于实况窗模板使用的问题"
original_url: /docs/dev/app-dev/application-services/live-view-kit-guide/liveview-faq/liveview-faq-4
format: md
upstream_id: dev/app-dev/application-services/live-view-kit-guide/liveview-faq/liveview-faq-4
last_sync: 2026-06-07
sync_hash: 187f3967
---
## 采用进度可视化模板并且indicatorType为INDICATOR\_TYPE\_OVERLAY时，图片较宽，无法完全覆盖进度条

当indicatorType=INDICATOR\_TYPE\_OVERLAY时，图标区域为64\*56vp，图片较宽时会按比例进行缩放。应用需要自己修改图片大小和样式来达到想要的效果。

理想效果图 ![](./img/350c3684.png)

## 如何修改 "实况窗左上角图标"

除导航模板通过[currentNavigationIcon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#navigationlayout)设置左上角图标外，其他模板不支持修改实况窗左上角图标，默认展示为应用Logo图标。
