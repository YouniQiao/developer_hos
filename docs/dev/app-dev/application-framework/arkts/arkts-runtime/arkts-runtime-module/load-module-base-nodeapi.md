---
title: "基于Node-API加载模块"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi
last_sync: 2026-06-07
sync_hash: a20bed21
---
Node-API中有多种方式支持开发者在C++侧加载工程内模块及文件。推荐使用napi\_load\_module\_with\_info接口。

## napi\_load\_module\_with\_info

在主线程或子线程内加载hap/hsp/har/native模块，使用时必须标记所加载的包的信息，支持多种场景。

具体参考：[napi\_load\_module\_with\_info](/docs/dev/ndk-dev/use-napi-load-module-with-info)。

## napi\_load\_module

在主线程内加载hap/hsp/har/native模块，参数传递简便。加载场景有限制，例如无法在子线程中使用该接口。

具体参考：[napi\_load\_module](/docs/dev/ndk-dev/use-napi-load-module)。
