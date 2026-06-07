---
title: "测试验证及上线"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/harmonyosnextceshiyanzhengjishangxian-0000002185706917
format: md
---



商业上架前需进行广告的测试验证，包括媒体自测和鲸鸿动能验收两个步骤。

#### 1. 自测

1. 自测阶段请使用测试ID，并对照[《HarmonyOS NEXT媒体接入自检表》](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250728162801.65416921790452263306031284137910%3A50001231000000%3A2800%3A4312DC33121CEB57DF63552E29F43871E2E5F10589229DBE38170DF9A1381502.xlsx?needInitFileName=true)交付件中的“自检项”核对检查；
2. 务必检查确认关于用户隐私声明的要求，媒体需以自身的名义发布用户隐私声明，禁止以华为或鲸鸿动能等名义发布用户隐私声明，详情参考《业务规范》- [《隐私声明》](/docs/monetize/monetization/yinsishengming-0000001085219712)的要求；
3. 各广告位规则：请参照《业务规范》-[《广告规范》](/docs/monetize/monetization/guanggaoguifan-0000001132278781)；
4. 自测完成后，填写《HarmonyOS NEXT媒体接入自检表》，其中涉及广告位信息和转测自检项，保证清晰描述广告位调用逻辑，转测自检项全部通过。

#### 2. 鲸鸿动能验收

1. 提交以下信息给客服验收：测试包，《HarmonyOS NEXT媒体接入自检表》交付件，二者以“APPID+应用名+公司名”规范命名打包。
2. 客服联系方式：可登陆鲸鸿动能媒体服务平台后在页面上方“客服”获取或咨询企点账号800183590。
3. 若需要导出自测日志，获取日志方式如下。

![](./img/harmonyosnextceshiyanzhengjishangxian-0000002185706917_0.png)

在windows CMD命令行中执行hdc shell hilog -b D命令打开debug日志：

* # 路径可以改为想要保存日志内容的文件路径
* 开始测试业务前执行命令，hdc hilog > D:\hilog.log
* 结束业务测试后，使用 Ctrl + C 终止脚本以停止抓取

#### 3. 商业上线

鲸鸿动能验收通过后，将通知您商业上架。请将测试ID替换为正式ID，联系鲸鸿动能运营配置广告。
