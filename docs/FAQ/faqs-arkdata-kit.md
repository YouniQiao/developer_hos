---
format: md
title: "本地数据库管理"
original_url: /docs/FAQ/faqs-arkdata-kit
---


* **[如何将PixelMap的数据存储到数据库中](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-3)**
* **[多个相同BundleName的HAP包，使用preference数据如何共享](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-4)**
* **[关于数据库存储的位置，以及存储的区别](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-5)**
* **[卡片开发中如何实现数据持久化](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-6)**
* **[如何从数据库中获得特定类型的文件列表](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-7)**
* **[如何使用Sqlite全文检索能力](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-9)**
* **[如何获知SQLite支持版本](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-10)**
* **[通过RdbStore.query()获取resultSet对象，出现resultSet的rowCount返回结果为-1](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-11)**
* **[如何读取本地/预制数据库](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-12)**
* **[用sqlite开发时，怎么保证数据库同一时间只能支持一个写操作？怎么创建索引](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-14)**
* **[数据库查询失败 14800007](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-15)**
* **[RdbStore多线程安全注意事项](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-16)**
* **[如何通过谓词查询方式获取数据](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-17)**
* **[数据库batchInsert和单个事务insert效率问题](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-18)**
* **[如果需要保存多张表，是创建一个数据库保存多张表还是创建多个数据库，每个数据库只保存一张表？使用的原则是什么](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-19)**
* **[relationalStore.getRdbStore 执行多次，参数相同，获得的是同一个数据库对象吗](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-20)**
* **[是否可以创建一个单例，一直持有数据库对象？这样有没有性能影响](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-21)**
* **[应用的数据库db文件的目录的绝对路径](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-22)**
* **[关系型数据库RDB支持哪些搜索能力](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-23)**
* **[创建KVManager时bundleName必须是本应用的包名吗](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-24)**
* **[分布式对象必须将默认对象的每个属性值初始化为undefined，以防止数据倒灌](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-26)**
* **[setSessionId加入组网和on启动监听前后设置的区别](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-27)**
* **[@ohos.data.preferences在App退出重启后，持久化数据丢失](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-28)**
* **[非UI页面使用用户首选项时context如何获取](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-29)**
* **[如何实现同步方式调用数据库接口](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-30)**
* **[首选项错误码：code:"401" err: Error: Parameter error. The type of 'value' must be ValueType. 如何排查问题](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-31)**
* **[如何查看或导出持久化数据](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-32)**
* **[如何获知数据存储沙箱路径](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-33)**
* **[插入数据之后，RDB数据库的WAL文件体积异常](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-34)**
* **[用户首选项是线程安全的吗](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-35)**
* **[为什么在关系型数据库中调用deleteRdbStore函数后并未真实删除数据库，对数据库的操作依旧可用](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-36)**
* **[HarmonyOS应用数据存储仍采用沙箱机制，各个APP有自己数据可见范围，为什么不将各APP产生的数据统一存储（同一个目录或者DB下）](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-37)**
* **[数据存储方案如何选择](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-38)**
* **[跨模块、跨进程时如何保证正常读取首选项中数据](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-39)**
* **[数据管理如何保证数据安全](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-40)**
* **[relationalStore是线程安全的吗](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-42)**
* **[App更新版本后，之前的首选项数据是否保留](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-43)**
* **[ArkData StoreConfig.customDir配置不生效](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-44)**
* **[如何将数据库数据内置到App](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-45)**
* **[@ohos.data.distributedKVStore接口中的deleteKVStore，第一个参数appId需要传递什么值](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-46)**
* **[关于对relationalStore.RdbStore的使用问题：如何查询数据库，需要开一个子线程吗](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-47)**
* **[ValuesBucket是否有可动态添加字段的方式](/docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-48)**
