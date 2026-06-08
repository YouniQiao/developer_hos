---
title: "使用方舟异常信息增强检测"
original_url: /docs/quality/stability-ark-exception-detection
format: md
upstream_id: /docs/quality/stability-ark-exception-detection
last_sync: 2026-06-07
sync_hash: 6136b15b
---
# 使用方舟异常信息增强检测

## 概述

在进行ArkTS项目开发中可能存在需要加载native模块的场景，开启方舟native模块加载异常信息增强功能后，可以丰富ArkTS项目中因加载native模块导致的报错信息，以便更准确地进行native问题定位。

## 启用方舟native模块加载异常信息增强

可以通过以下两种方式启用方舟native模块加载异常信息增强

* 方式一

  点击**Run > Edit Configurations >** **Diagnostics**，勾选**Enhanced Error Info**。

  ![](./img/e1601349.png)

* 方式二

  通过命令行开启。

  ```
  aa start {abilityName} {bundleName} -E
  ```

## 启用方舟native模块加载异常信息增强

1. 运行或调试当前应用。
2. 当程序出现因native模块加载导致的报错信息时，会显示更详细准确的错误信息。

   ![](./img/1fd01914.png)
