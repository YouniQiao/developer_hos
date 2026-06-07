---
title: "日志打印"
original_url: /docs/dev/game-dev/gameobe-log-real-time-server-0000002361510728
format: md
---


您可以使用ActionArgs.SDK相关方法实现一些日志管理的业务逻辑，包括打印日志信息等使用场景。

## 打印日志信息

例如，当获取缓存信息成功或失败时，服务端可通过[ActionArgs.SDK.log](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section331212595574)相关方法打印日志信息。

```
args.SDK.getCache('example').then( value => {
    args.SDK.log.info('getCache success');
}).catch( err => {
    args.SDK.log.error('getCache fail' + err);
});
```
