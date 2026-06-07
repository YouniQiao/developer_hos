---
title: "API"
original_url: /docs/dev/game-dev/games-quickgame-faq-api-0000002425293762
format: md
---


## 帧率

### 快游戏如何修改帧率？

快游戏不推荐在游戏引擎里调用其原生方法修改帧率。推荐使用华为提供的[qg.setPreferredFramesPerSecond](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-frame-0000002366156860#section15639134185411)接口修改帧率。

## 账号、支付

### 调用qg.gameLoginWithReal 接口出错，如何处理？

如果调用后没有任何响应，请检查manifest.json文件中的minPlatformVersion是否配置为1065及以上版本，如果获取到7013的错误码，建议将传入参数forceLogin设置为1，即强制弹出华为账号登录框。

### qg.gameLoginWithReal和qg.gameLogin相比成功回调结果中没有isAuth参数，那么每次登录还需要校验签名吗？

gameLoginWithReal不强制校验签名，由开发者自行决定。

## 文件

### 调用FileSystemManager.rmdir删除目录，执行返回成功，但实际上并没有清除缓存，如何处理？

由于登录账号前后，对文件操作会存放在不同区域，建议登录账号后再对文件进行操作，不登录的话可能出现无法找到文件的问题。

### 快游戏使用 FileSystemManager.readfile 读文件，日志显示file operate success，但没打印数据，如何处理？

使用[FileSystemManager.readFile](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-file-0000002399676805#section1364511142512)，若指定编码方式encoding为binary或者不指定，返回数据为ArrayBuffer数组类型，此时无法直接把数据打印在日志或用json.stringify转换。当指定编码方式encoding为utf8时，可以使用json.stringify转换数据打印在日志中。

### 调用FileSystemManager.rmdirSync时出现“no such file or directory”的错误，如何处理？

传入参数dirPath直接设置用户目录路径，不需要加后缀/ 。

### 调用FileSystemManager.copyFile将文件写入缓存，出现“no such file or directory”，如何处理？

如果调用接口使用的源文件是临时文件，则该接口目前不支持此场景。需要先调用[FileSystemManager.saveFile](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-file-0000002399676805#section177563353918)接口将临时文件保存到本地，然后再调用copyFile接口写入缓存。

![](./img/e338e83f.png)

调用copyFile时传入的源文件路径应该是调用saveFile返回值中的uri。

详细示例代码如下：

```
var fileSystemManager = qg.getFileSystemManager();
var savedFilePath = '',
fileSystemManager.saveFile({
    tempFilePath: 'temp file path',
filePath: 'target file path',
    success : function(res) {
        console.log("saveFile success res = " + JSON.stringify(res));
savedFilePath = res;
    },
    fail : function(data) {
        console.log("saveFile fail " + JSON.stringify(data));
    },
    complete : function() {
        console.log("saveFile complete" );
    }
})
fileSystemManager.copyFile({
    srcPath : 'savedFilePath',  //源文件路径，填写saveFile函数success回调的地址
    destPath : 'target path',
    success : function() {
        console.log("copy success" );
    },
    fail : function(data) {
        console.log("copy fail " + JSON.stringify(data));
    },
    complete : function() {
        console.log("copy complete" );
    }
})
```

### 调用FileSystemManager.saveFile接口时出现“\&#123;"errCode":6,"errMsg":"the maximum size of the file storage limit is exceeded"\&#125;”的错误，如何处理？

本地数据缓存的总大小限制为10MB，单次存入缓存中的数据大小限制为1MB，超过大小则会报如上错误，建议控制单次文件写入时的大小。

## 横竖屏切换

### 快游戏有提供屏幕横竖屏切换的API吗？

暂时没有，当前只能通过在manifest文件中预设orientation属性控制，支持三种属性：

* portrait：竖屏
* landscape：横屏
* auto(1070+)：随系统横竖屏设置（受系统自动旋转开关的控制）
