---
title: "管理队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-managegroup-csharp-0000002395190573
---

通过队伍信息查询，可获取当前所处队伍的相关信息。同时，队长还可以通过修改队伍名称、队长身份、队伍自定义属性等队伍相关属性，更新队伍相关信息。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。
* 更新队伍信息时，玩家需为队长身份。

## 查询队伍信息

1. 调用[Group.GetGroupDetail](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#section13774175719619)方法查询玩家所在队伍的信息。

   ```
   Group group = Global.group; // 通过Global类的group属性获取Group对象
   group.GetGroupDetail(response => {
   	if (response.RtnCode == 0) {
   		// 查询成功逻辑
   	} else {
   		if (response.RtnCode == 101302)
   		{
   			// 队伍不存在
   		}
   		// 其他失败逻辑
   	}
   });
   ```

## 修改队伍信息

1. 调用[Group.ModifyGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#section149471253318)方法更新队伍的信息。

   ```
   ModifyGroupConfig modifyGroupConfig = new ModifyGroupConfig {
   	GroupId = "{GroupId}",
   	GroupName = "{GroupName}",
   	OwnerId = "{OwnerId}",
   	CustomGroupProperties = "{CustomGroupProperties}",
   	IsLock = 0
   };
   Group group = Global.group; // 通过Global类的group属性获取Group对象
   group.ModifyGroup(modifyGroupConfig, response => {
   	if (response.RtnCode == 0) {
   		// 查询成功逻辑
   	} else {
   		if (response.RtnCode == 101302)
   		{
   			// 队伍不存在
   		}
   		// 其他失败逻辑
   	}
   });
   ```
2. 当队长更新当前队伍信息时，可通过实现[Group.OnUpdate](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p1767019111311)委托监听该事件。

   ![](./img/3817919e.png)

   当监听到队伍信息更新事件后，队长即成功更新当前队伍信息。

   ```
   Global.Group.OnUpdate = OnUpdate; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnUpdate(GroupInfo groupInfo){
      // 更新队伍信息
   }
   ```
