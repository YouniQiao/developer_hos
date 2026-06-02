---
title: "测试及验证收益"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pga-test-verification-0000002083371437
---

PGA通过将C#代码转换成更为高效的本地代码（自研毕昇编译器），解决手机游戏中可能存在的响应速度慢、动作不流畅、画面卡顿等性能、功耗问题。游戏使用PGA完成优化后，您可以测试游戏、验证优化收益。

## 测试游戏

* 测试优化后游戏场景的功耗、性能。
* 测试游戏整体的稳定性、安全性、兼容性。

## 验证优化收益

验证整个游戏优化收益的步骤如下：

1. 获取**底电流**。请把游戏优化场景截图当手机桌面壁纸，关闭手机所有的后台任务，调整屏幕亮度至最高并保持亮屏，由此测出无游戏运行时的系统底电流。

   ![](./img/9b30712a.png)

   因系统功耗影响因素较多，尤其是显示功耗影响较大，因此在收益测试过程中可以选择排除干扰。
2. 使用开源性能工具，例如[HiSmartPerf](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-0000001873208929)，分别抓取整个游戏优化前、后的数据指标。请保持相同配置项、使用相同场景进行优化前、后的对比测试，抓取并填写[游戏优化效果验收报告](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260323192543.77017238611887944425852777286723%3A20260603105644%3A2800%3A7B2D0B4B7B603AC9483B81AE238C9ED26EFD54C749359664E110AEBFED799394.xlsx?needInitFileName=true)中的数据指标。您可以优先选取**性能**和**功耗**相关指标作为主要测试指标，**CPU**、**GPU**、**DDR**相关指标作为参考数值。验收报告将会自动计算优化后的效果和收益。
