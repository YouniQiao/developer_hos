---
title: "分包加载"
original_url: /docs/dev/game-dev/games-quickgame-subpackage-0000002317894828
format: md
upstream_id: dev/game-dev/games-quickgame-subpackage-0000002317894828
last_sync: 2026-06-07
sync_hash: f17d4949
---
对于包内资源较为丰富的快游戏，华为提供了分包策略。华为的分包策略是将**不超过30MB**的快游戏包体按照一定的规则拆分为一个主包和若干分包，玩家进入快游戏时仅下载、加载主包，游戏过程中再按需触发其它分包的下载，而不必将所有整包内容一次性下载、加载，目的是为了缩短玩家进入游戏的时间，减少下载快游戏包体的流量。

![](./img/c2ef1f24.png)

若打包后的快游戏包体**大于30M****B**，请先使用**游戏引擎**提供的分包模式，将各分包内的资源文件放至远程服务器，缩小包体体积，例如[Cocos](https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/bundle.html)提供的分包策略、[LayaAir](https://ldc2.layabox.com/doc/?nav=zh-ts-5-9-2)提供的分包策略。

## 分包加载包体大小的限制

* 快游戏总包体大小**不超过30MB**（不区分是否接入华为支付）。
* 主包体大小**不超过4MB**。
* 单个普通分包不限制大小。

![](./img/2ee2197a.png)

已在架快游戏目前仅要求包体大小**超过20MB**的包体必须分包。

## 分包建议

* 建议将一个游戏场景所需要的代码逻辑、资源文件等单独存放。
* 请勿在一次游戏操作过程中重复加载同一个分包，除非上一次加载失败。即使您重复加载，此分包并不会重复下载，更不会重复执行该分包下的game.js入口文件。
* 使用指定分包内的资源前，请先确保分包资源已成功下载、加载，否则快游戏上架后可能会出现“子包资源找不到”的异常情况。

## 开发指导

### 配置manifest.json

快游戏分包后的目录结构以如下为例：

```
├── assets
├── image
     └── icons.png
     └── 1.png
├── jsb-adapter
├── src
├── subpackages              // 分包文件夹
      └── subpackageName1    // 分包1
             └── game.js     // 分包1入口文件，且分包入口文件只能命名为game.js
             └── main.js
      └── subpackageName2    // 分包2
             └── config.3dbbc.json
             └── game.js     // 分包2入口文件，且分包入口文件只能命名为game.js
├── game.js                  // 主包入口文件
├── manifest.json            // 配置文件
```

![](./img/620bbedd.png)

* 分包内可以有若干个js文件，但分包入口文件只能命名为**game.js**，且game.js文件不能单独作为一个分包。
* 分包内的game.js引入当前包内其它js文件时，路径需从根目录开始算起，例如subpackageName1分包内的game.js引入当前包内的main.js需写成require("subpackageName1/main.js")。

manifest.json文件中分包对应的配置项如下：

```
{
   ...
   "subpackages":[
     {
       "name":"subpackageName1",     // 分包1名称
       "resource":"subpackageName1"  // 分包1路径
     },{
       "name":"subpackageName2",     //分包2名称
       "resource":"subpackageName2"  //分包2路径
     }
   ]
   ...
}
```

![](./img/ee1c5252.png)

配置在subpackages中的文件，将按配置打包成若干个**分包**，没有配置在subpackages中的目录文件，将会统一打包成**主包**。

### 调用接口

在主包入口文件game.js中调用[qg.loadSubpackage](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-subpackage-0000002399796697#section477118231426)下载指定分包并加载game.js文件。

```
var task = qg.loadSubpackage({
        subpackage: 'subpackageName1',
        success : function () {
               console.log("loadSubpackage success");
        },
        fail:function(){
                console.log("loadSubpackage fail");
         },
        complete:function() {
                console.log("loadSubpackage complete");
        }
});
mycallback(res){
      console.log("onProgress" +JSON.stringify(res));
}
task.onprogress=this.mycallback
```

## 运行调试

建议上架前在最新版本的快游戏开发者工具中运行/调试分包后的快游戏。

1. 将导出的RPK文件后缀改为zip，并进行解压缩。
2. 在快游戏开发者工具中打开项目后运行调试分包场景，运行调试的详细流程请参见[调试](/docs/dev/game-dev/games-quickgame-tool-debug-0000002351933789)。

## 相关链接

### FAQ

[快游戏分包加载时，偶现分包加载不成功，如何处理？](/docs/dev/game-dev/games-quickgame-faq-others-0000002425293774#section171009538613)

### 案例

* [华为快游戏分包报错，提示“run root entry script error”或“can not find root script”](/docs/dev/game-dev/games-quickgame-case-0000002318064148#section3577105910514)
* [华为快游戏分包无进度条回调](/docs/dev/game-dev/games-quickgame-case-0000002318064148#section183611211610)
* [快游戏中使用分包无法加载资源](/docs/dev/game-dev/games-quickgame-case-0000002318064148#section099995492111)
