---
title: "测试验证及上线"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/ceshiyanzhengjishangxian-0000001085219714
format: md
---



商业上架前需进行广告的测试验证，包括媒体自测和鲸鸿动能验收两个步骤。

#### 1. 自测

1. 自测阶段请使用测试ID，并对照[《APK广告位信息表》](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250126143004.57674612390235179740608504366798%3A50001231000000%3A2800%3ADF8B3DC1E96D15FBC3DA9A72F259E8C868BEE9C6D53D0DD1752B232EF7327940.xlsx?needInitFileName=true)和[《RPK广告位信息表》](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250126143005.48761029842675587495577107352905%3A50001231000000%3A2800%3AF8CBBB999BBCC376F8EAF6577632F22B6CD9DE7EA46AB7BB27E4D28AB5A8E6FD.xlsx?needInitFileName=true)交付件中的“转测自检项”核对检查；
2. SDK自助测试工具

   您可以通过SDK自助测试工具检测自己的App是否正确集成了SDK、广告请求和广告返回是否成功、广告展示是否正常以及广告事件是否正常上报。如果广告请求异常或未正确获取广告，SDK自助测试工具会提供相应的解决建议。具体详情请扫描下方二维码或点击链接下载APK。

   | 类型 | 二维码 | APK下载 |
   | --- | --- | --- |
   | APK | ![](./img/ceshiyanzhengjishangxian-0000001085219714_0.png "点击放大") | [下载](https://h5hosting.dbankcdn.com/cch5/pps-jssdk/app/HuaweiSdk-Helper-release.apk) |
3. 极速开屏无需自测，直接提交鲸鸿动能测试验收，但需填写信息表。
4. 请务必检查确认关于用户隐私声明的要求，媒体需以自身的名义发布用户隐私声明，禁止以华为或鲸鸿动能等名义发布用户隐私声明，详情参考《业务规范》- [《隐私声明》](/docs/monetize/monetization/yinsishengming-0000001085219712)的要求；
5. 各广告位规则：请参照《业务规范》-[《广告规范》](/docs/monetize/monetization/guanggaoguifan-0000001132278781)；
6. 自测完成后，填写《APK广告位信息表》和《RPK广告位信息表》，其中涉及广告位信息和转测自检项，保证清晰描述广告位调用逻辑，转测自检项全部通过。

#### 2. 鲸鸿动能验收

1. 提交以下信息给客服验收：自测日志，《广告位信息表》交付件，二者以“APPID+应用名+公司名”规范命名打包。
2. 客服联系方式：可登陆鲸鸿动能媒体服务平台后在页面上方“客服”获取或咨询企点账号800183590。
3. 自测后导出日志，获取日志方式如下。

![](./img/ceshiyanzhengjishangxian-0000001085219714_1.png)

方式1：打开手机【文件管理】App > 浏览 > 内部存储 > Android > data > com.huawei.hwid > files > Log > HiAdKitLog.log

方式2：使用ADB命令：adb pull /sdcard/Android/data/com.huawei.hwid/files/Log/HiAdKitLog.log

#### 3. 商业上线

鲸鸿动能验收通过后，将通知您商业上架。请将测试ID替换为正式ID，联系鲸鸿动能运营配置广告。
