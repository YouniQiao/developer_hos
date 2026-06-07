---
title: "游戏登录"
original_url: /docs/dev/game-dev/games-quickgame-runtime-account-kit-0000002351893461
format: md
---


华为账号服务为您提供了简单、安全的登录授权功能，方便用户快捷登录。用户不必输入账号、密码和繁琐验证，就可以通过“华为账号登录”方式快速登录，即刻打开您的快游戏。使用“华为账号登录”快游戏应遵守国家新闻出版署的相关规定。

## 前提条件

* 已[注册开发者账号](/docs/dev/game-dev/games-quickgame-registration-account-0000002351933629)。
* 已[创建项目和快游戏](/docs/dev/game-dev/games-quickgame-create-quickgame-0000002317894816)。
* 已[打开游戏服务API开关](/docs/dev/game-dev/games-quickgame-enable-game-kit-0000002351893445#ZH-CN_TOPIC_0000002382054097__zh-cn_topic_0000001113292730_li1450624175912)、[打开华为账号API开关](/docs/dev/game-dev/games-quickgame-enable-game-kit-0000002351893445#ZH-CN_TOPIC_0000002382054097__zh-cn_topic_0000001113292730_li9525185314593)。
* 已[配置免授权登录](/docs/dev/game-dev/games-quickgame-authorization-free-0000002351893449)。

## 开发指导

1. 快游戏启动时调用[qg.gameLoginWithReal](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-account-0000002365996984#section73325514166)发起防沉迷登录，并处理不同的登录结果。

   ```
   gamelogin(){
       console.log("Sign-in");
       qg.gameLoginWithReal({
           forceLogin:1,
           appid:"103***5",
           success:function(data){
               // 登录成功后，可以存储账号信息。
               console.log(" game login with real success:" + JSON.stringify(data));
           },
           fail:function(data,code){
               console.log("game login with real fail:" + data + ", code:" + code);
               //根据状态码处理游戏的逻辑。
               //状态码为7004或者2012，表示玩家取消登录。
               //此时，建议返回游戏界面，可以让玩家重新进行登录操作。
               if(code ==7004||code ==2012){
                   console.log("玩家取消登录，返回游戏界面让玩家重新登录。")
               }
               //状态码为7021表示玩家取消实名认证。
               //在中国大陆的情况下，此时需要禁止玩家进入游戏。
               if(code ==7021){
                   console.log("The player has canceled identity verification. Forbid the player from entering the game.")
               }
           }
       });
   },
   ```
2. 登录成功后，快游戏调用[localStorage.getItem](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-localstorage-0000002399796701#section731992621014)对比最新版本的《用户协议》、《隐私声明》与用户已签署的是否一致。仅当用户未签署协议、或用户签署旧协议时，快游戏出示协议条款让用户手动签署。

   ```
   if (!localStorage.getItem('isAgree')) {
       // 游戏方自行实现：用户未签署协议、或用户签署旧协议，快游戏需展示隐私协议或声明弹框，让用户手动签署协议。
       showToast()
       // 游戏方自行实现：用户手动同意后，存储数据
       if (getUserAgree) {
            window.localStorage.setItem('isAgree', 'true')
       }
   }
   ```

   ![](./img/ea14a58c.png)

   玩家登录成功后建议调用[校验登录签名接口](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-server-login-signature-0000002399796769)对登录结果进行校验。

## 相关链接

### FAQ

* [调用登录接口时，出现“auth fail -1”的错误，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section185371850113113)
* [调用登录接口时，出现6004的错误码，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section1246451233210)
* [登录游戏出现7001的错误码，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section1564051214322)
* [校验登录签名时返回404错误，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section188083127328)
* [登录时提示7005错误码，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section1598431212326)
* [取消安装HMS Core后，收到玩家登录失败错误码code=13，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section18192161393215)
* [未登录可以玩游戏吗？用户登录时，选择退出，游戏要如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section5352181313216)
* [登录校验成功进入游戏，在下次断线重连的时候再拿之前登录成功的数据去校验， 获得30001错误码，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section47849137321)
* [调用游戏登录接口时，出现3001错误，例如：response:\&#123;"rtnCode":3001,"errMsg":"param [ts:1564034573508] should between [1564034852866,1564035452866] ."\&#125;，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section1592891311324)
* [登录游戏时返回7错误码（game login fail:Login FAIL, code:7），如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section680171473210)
* [账号登录验签失败，rtncode报-1，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section19240181433213)
* [校验登录签名时返回-1，\&#123;"errMsg":"[4001]can not find publicKey of the cp:xxxxxx"\&#125;，如何处理？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section163871441173812)
* [账号登录接口的forceLogin设置为1，接口调用成功，但是为什么返回结果为空？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section1754441433211)
* [登录华为账号时，弹出账号授权界面为什么不显示icon？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section172684441800)
* [游戏开通强制实名认证的流程是怎样的？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section16357429203813)
* [如何控制未成年人的支付限额？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section721104111535)
* [如何判断玩家是否已成年？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section84120685413)
* [如何查询玩家游戏时长？](/docs/dev/game-dev/games-quickgame-faq-account-0000002425293754#section973820511555)
* [调用qg.gameLoginWithReal 接口出错，如何处理？](/docs/dev/game-dev/games-quickgame-faq-api-0000002425293762#section1060163816219)
* [qg.gameLoginWithReal和qg.gameLogin相比成功回调结果中没有isAuth参数，那么每次登录还需要校验签名吗？](/docs/dev/game-dev/games-quickgame-faq-api-0000002425293762#section1171113013380)
* [快游戏在调用华为账号登录前需要先取得授权么？ AppGallery Connect提交的证书指纹怎么生成？](/docs/dev/game-dev/games-quickgame-faq-others-0000002425293774#section328205212614)

### 其他

[一文教你区分华为账号unionId、openId和游戏playerId](https://developer.huawei.com/consumer/cn/forum/topic/0203573539863840013?fid=0101271690375130218)
