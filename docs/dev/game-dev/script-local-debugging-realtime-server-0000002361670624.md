---
title: "脚本示例"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/script-local-debugging-realtime-server-0000002361670624
---

在本地实时服务器[代码调试](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-local-debugging-realtime-server-0000002395350541#ZH-CN_TOPIC_0000002395350541__li1747133282214)环节，您可以在解压后的实时服务器SDK的目录中，创建client.js和server.js脚本，自行实现调用[GOBERTS.localServerMethodRoute](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-localservermethodroute-server-ts-0000002395356097)接口，完成[SDK初始化](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-localservermethodroute-server-ts-0000002395356097#section98321185316)、[查询房间列表](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-localservermethodroute-server-ts-0000002395356097#section1359195983413)和[加入房间](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-localservermethodroute-server-ts-0000002395356097#section979417124212)等操作。

## client.js脚本

参考样例如下：

```
var httpClient = require('http'); // 建议启用https监听，本样例为了保持代码简洁，使用了http监听
var listenIp = '127.0.0.1'; // 可以部署在测试节点，使用对应的ip或域名
var listenPort = 8888;
function sendRequest(url) {
    const requestOptions = {
        hostname: listenIp,
        port: listenPort,
        path: url
    };
    const request = httpClient.request(requestOptions, requestOnResponse);
    request.end();
    function requestOnResponse(message) {
        if (message.statusCode === 200) {
            // xxxx
        }
    }
}
function getRoomList(roomType) {
    sendRequest(`/getRoomList?roomType=${roomType}`);
}
function joinRoom(roomCode, roomId) {
    sendRequest(`/joinRoom?roomId=${roomId}&roomCode=${roomCode}`);
}
function main() {
    const [,,oper,args,args1,args2, args3] = process.argv;
    switch(oper) {
        case 'getRoomList':
            if (args) {
                const [argName, argValue] = args.split('=');
                getRoomList(argValue);
            }
            break;
        case 'joinRoom':
            if (args) {
                const [argName, argValue] = args.split('=');
                joinRoom(argValue, null); // joinRoom(null, argValue);
            }
            break;
    }
}
main()
```

## server.js脚本

参考样例如下：

```
var http = require('http');
var GOBERTS = require("./GOBERTS.js"); // 引用实时服务器SDK
var url = require("url"); //
var globalAppId = '{globalAppId}'; // 应用ID,具体获取请参见准备游戏信息
var globalClientId = '{globalClientId}'; // 客户端ID,具体获取请参见准备游戏信息
var globalClientSecret = '{globalClientSecret}'; // 客户端密钥,具体获取请参见准备游戏信息
/*
  测试房间类型roomType的默认值。参与测试的App客户端在创建房间时，使用roomType需要和此处保持一致。主要用于：
  1、区别于现网房间roomType值，不影响现网玩家。
  2、查询测试房间列表。如果已提前获取到roomId或者roomCode，可跳过查询步骤。
 */
var defaultRoomType = '{RoomType}';
async function route(paramsObj) {
    var methodName = paramsObj.pathname.replace("/", "");
    var queryObj = paramsObj.query;
    switch (methodName) {
        case 'getRoomList':
            response = await GOBERTS.localServerMethodRoute[methodName](queryObj.roomType ? queryObj.roomType : defaultRoomType);
            break;
        case 'joinRoom':
            response = await GOBERTS.localServerMethodRoute[methodName](queryObj.roomCode, queryObj.roomId);
            break;
    }
    return response;
}
http.createServer(function (request, response) {
    var paramsObj = url.parse(request.url, true);
    route(paramsObj).then(res => {
        // 发送响应数据 xxxx
    });
}).listen(8888);
GOBERTS.localServerMethodRoute.init(globalAppId, globalClientId, globalClientSecret).then(response => {
    console.log(`Server running at http://${listenIp}:${listenPort}/`);
    GOBERTS.Logger.level = GOBERTS.LogLevel.DEBUG;
});
```
