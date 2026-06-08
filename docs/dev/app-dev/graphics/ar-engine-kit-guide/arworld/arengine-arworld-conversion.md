---
displayed_sidebar: appDevSidebar
title: "命中检测介绍"
original_url: /docs/dev/app-dev/graphics/ar-engine-kit-guide/arworld/arengine-arworld-conversion
format: md
upstream_id: dev/app-dev/graphics/ar-engine-kit-guide/arworld/arengine-arworld-conversion
last_sync: 2026-06-07
sync_hash: 193ad8e9
---
AR Engine通过命中检测（Hit Testing）技术，将终端设备屏幕上的兴趣点映射为现实环境中的兴趣点。命中检测以现实环境中的兴趣点为源，发出一条射线连接到摄像头所在位置，返回射线与平面、稀疏点云、Mesh的交点。

用户可以在平面上放置虚拟物体，实现虚拟和现实的融合。

通过命中检测能力，用户可以点击终端设备屏幕，在虚拟世界中放置虚拟物体，用于虚拟家具试用等，实现虚拟与现实世界融合。

**图1** 命中检测示意图

![](./img/0a37290c.jpg)
