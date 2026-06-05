---
title: "测试及验证收益"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-binary-optimization-test-verification-0000002342950456
has_merged_cells: true
format: md
---


二进制优化主要优化SoC系统级芯片、DDR，优化后的效果体现在游戏过程中手机性能、功耗。游戏完成二进制优化后，您可以测试游戏、验证优化收益。

## 测试游戏

* 测试优化后游戏场景的功耗、性能。
* 测试游戏整体的稳定性、安全性、兼容性。

## 验证优化收益

验证整个游戏优化收益的步骤如下：

1. 获取**底电流**。请把游戏优化场景截图当手机桌面壁纸，关闭手机所有的后台任务，调整屏幕亮度至最高并保持亮屏，由此测出无游戏运行时的系统底电流。

   ![](./img/e1db7146.png)

   因系统功耗影响因素较多，尤其是显示功耗影响较大，因此在收益测试过程中可以选择排除干扰。
2. 使用开源性能工具，例如[HiSmartPerf-Editor](https://developer.huawei.com/consumer/cn/doc/games-guides/games-hismartperf-tool-0000002287085461)，分别抓取整个游戏优化前、后的数据指标。请保持相同配置项、使用相同场景进行优化前、后的对比测试，抓取并填写[游戏优化效果验收报告](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260323192543.59320459698024649371655222566833%3A20260603105723%3A2800%3A439BC0D35D27D89191D955276384F7F33E1291EE2FEDD503F5B68675D466DD59.xlsx?needInitFileName=true)中的数据指标。您可以优先选取**性能**和**功耗**相关指标作为主要测试指标，**CPU**、**GPU**、**DDR**相关指标作为参考数值。
3. 验收报告将会自动计算优化后的效果和收益。优化差异/效果计算公式如下：

   | 优化数据 | | 计算公式 |
   | --- | --- | --- |
   | 优化差异绝对值 | | ![](./img/aa601297.png) |
   | 优化效果 | 帧率 | - |
   | 功率/电流 | ![](./img/ece47d98.png) |
   | 单帧功率 | ![](./img/7a9a9309.png "点击放大") |
   | CPU、GPU、DDR核心参数 | ![](./img/7f826b0b.png) |
