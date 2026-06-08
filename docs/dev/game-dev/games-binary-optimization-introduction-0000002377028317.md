---
title: "业务概述"
original_url: /docs/dev/game-dev/games-binary-optimization-introduction-0000002377028317
format: md
upstream_id: dev/game-dev/games-binary-optimization-introduction-0000002377028317
last_sync: 2026-06-07
sync_hash: adca45a2
---
|  |  |
| --- | --- |
| 为了解决手机游戏中可能存在的响应速度慢、动作不流畅、画面卡顿等性能、功耗问题，华为推出了“二进制优化服务”，该服务主要运用程序的时间/空间局部性原理、结合处理器动态运行信息对C++编译的二进制程序（加壳/加密程序除外）进行优化，优化过程中无需修改任何源码，即可改善程序的CPU性能与功耗。 |  |

## 实现流程

华为支持构建完整流程的二进制优化方案，具体的优化步骤如下：

* 首次优化，或本次游戏版本较上次版本的改动较大

  | 步骤 | 操作 | 说明 |
  | --- | --- | --- |
  | 1 | [准备工作](/docs/dev/game-dev/games-binary-optimization-agc-works-0000002342950440) | 为了保证优化工作的顺利开展，您需要提前做好准备工作。 |
  | 2 | [执行二进制插桩](/docs/dev/game-dev/games-binary-optimization-gather-0000002342950452) | 通过接口调用的方式，在未加壳的so文件中插入代码段，以此收集程序运行时的动态信息。 |
  | 3 | [选择游戏场景](/docs/dev/game-dev/games-binary-optimization-select-scene-0000002377148269) | 二进制优化可以针对易造成手机发热、性能要求高的游戏场景进行优化。为了获得更好的优化收益，您需要选择典型的、易卡顿的游戏场景，例如打斗、团战、闯关。 |
  | 4 | [采集profile数据](/docs/dev/game-dev/games-binary-optimization-profile-0000002377028345) | profile数据是二进制优化的输入数据，主要作为优化时判断程序运行热点代码的依据，对二进制优化的影响较大。您可以在游戏运行时使用工具包中的trigger采集profile数据。 |
  | 5 | [执行二进制优化](/docs/dev/game-dev/games-binary-optimization-execution-0000002343110260) | 通过接口调用的方式，对so文件执行二进制优化操作。 |
  | 6 | [测试及验证收益](/docs/dev/game-dev/games-binary-optimization-test-verification-0000002342950456) | + 测试优化后游戏场景的功耗、性能；测试游戏整体的稳定性、安全性、兼容性。 + 使用开源性能工具抓取整个游戏优化前、后的数据指标，量化优化产生的效果，例如[HiSmartPerf-Editor](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-editor-0000002081118460)。 |

* 本次游戏版本较上次版本的改动较小（已进行过首次或大版本变动的优化）

  | 步骤 | 操作 | 说明 |
  | --- | --- | --- |
  | 1 | [准备工作](/docs/dev/game-dev/games-binary-optimization-agc-works-0000002342950440) | 为了保证优化工作的顺利开展，您需要提前做好准备工作。 |
  | 2 | [执行二进制优化](/docs/dev/game-dev/games-binary-optimization-execution-0000002343110260) | 使用最近的大版本profile文件，通过接口调用的方式，对so文件执行二进制优化操作。 |
  | 3 | [测试及验证收益](/docs/dev/game-dev/games-binary-optimization-test-verification-0000002342950456) | + 测试优化后游戏场景的功耗、性能；测试游戏整体的稳定性、安全性、兼容性。 + 使用开源性能工具抓取整个游戏优化前、后的数据指标，量化优化产生的效果，例如[HiSmartPerf-Editor](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-editor-0000002081118460)。 |

## 相关概念

| 名称 | 描述 |
| --- | --- |
| 加壳 | “加壳”是一种常用的保护文件手段，全称是“可执行程序资源压缩”。它是通过一系列数学运算，将可执行程序文件或动态链接库文件的编码进行改变，以达到缩小文件体积或加密程序编码的目的。 |
| 插桩 | “插桩”指在保证原有程序逻辑完整性的基础上，在程序中插入探针，通过探针采集代码中的信息，在特定的位置插入代码段，从而收集程序运行时的动态上下文信息。二进制插桩即在二进制层面完成程序插桩，我们实现了业界首个无需源码支持的AARCH64二进制静态插桩。 |
