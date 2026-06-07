---
title: "缓存读写"
original_url: /docs/dev/game-dev/gameobe-cache-real-time-server-0000002361670592
format: md
---


您可以使用ActionArgs.SDK相关方法实现一些缓存读写的业务逻辑，包括设置、获取以及删除缓存信息等使用场景。

## 设置缓存信息

* 方式一：使用[ActionArgs.SDK.setCache](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section20832175815133)方法，不论所设置的键是否存在，都会设置或修改缓存信息。

  ```
  args.SDK.setCache('roomOwner', 'playerId', 86400).then(()=> {
      // 设置缓存成功
  }).catch( err => {
      // 设置缓存失败
  });
  ```
* 方式二：使用[ActionArgs.SDK.setCacheIfNotExist](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section956117522479)方法，只有当所设置的键不存在才会设置缓存信息，否则会抛出异常，返回错误信息“set fail, key is already existed”。

  ```
  args.SDK.setCacheIfNotExist('roomOwner', 'playerId', 86400).then(() => {
      args.SDK.log.info('setCacheIfNotExist success');
  }).catch(err => {
      args.SDK.log.error('setCacheIfNotExist fail: ' + err);
  });
  ```

## 获取缓存信息

例如，当需要获取缓存信息时，服务端可通过[ActionArgs.SDK.getCache](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section1157002150)方法进行相关查询。

```
args.SDK.getCache('example').then( value => {
    // 获取缓存成功
}).catch( err => {
    // 获取缓存失败
});
```

## 删除缓存信息

例如，当监听到客户端销毁房间事件时，服务端可通过[ActionArgs.deleteCache](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section201995412171)方法对房间中的已缓存信息进行删除。

```
args.SDK.deleteCache('example').then( () => {
    // 删除缓存成功
}).catch( err => {
    // 删除缓存失败
});
```
