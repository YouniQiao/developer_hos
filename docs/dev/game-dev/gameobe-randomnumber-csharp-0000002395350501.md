---
title: "伪随机数生成器"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-randomnumber-csharp-0000002395350501
format: md
---


联机对战SDK内部实现了线性同余（linear congruential）伪随机数生成器。在对战游戏中，双方对战经常涉及到随机掉落物品，攻击暴击等，帧同步服务器需要能够确保对战双方的随机数相同，即掉落物品相同、暴击伤害相同等。因此，需要SDK提供一个随机数种子，客户端通过调用随机数生成器，可以确保在整个战斗过程中，每次触发随机数产生的结果相同。

## 开发步骤

1. 初始化伪随机数生成器，并传入一个正整数作为参数，这个参数称为随机数种子。

   ```
   RandomUtils.InitSeed(1234);// 1234：随机数种子
   ```
2. 调用[RandomUtils.GetRandom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-randomutils-csharp-0000002361516116#section173715455354)方法返回一个0~1之间的浮点数。

   ![](./img/5d7d5737.png)

   使用相同随机数种子进行初始化，生成的随机数序列相同。

   ```
   double random = RandomUtils.GetRandom();
   ```
