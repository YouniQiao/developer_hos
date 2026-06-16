---
title: "AtomicServiceEnhancedWeb组件开发指南"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/develop-atomicserviceenhancedweb
---

[AtomicServiceEnhancedWeb](https://developer.huawei.com/consumer/cn/doc/atomic-guides/components-atomicserviceenhancedweb)用于在元服务中嵌入网页内容，它作为一个容器，能够将网页内容直接集成到元服务的界面中，使得用户可以在不离开元服务的情况下浏览网页，为用户提供无缝的浏览体验。AtomicServiceEnhancedWeb不需要注入ASCF框架即可运行，请按照此指南进行配置开发。

## 环境搭建

1. 在entry的oh-package.json5配置文件中添加依赖：

   ```
   "dependencies": {
     "@atomicservice/ascfapi": "^1.0.12"
   }
   ```
2. 在entry的module.json5配置文件中添加依赖和网络权限声明：

   ```
   "requestPermissions": [
     {
       "name": "ohos.permission.INTERNET"
     }
   ]
   ```
3. 在hvigor/hvigor-config.json5配置文件中添加依赖，Sync更新依赖：

   ```
   "dependencies": {
     "@atomicservice/ascf-toolkit-hvigor-plugin": "~1.0.8-alpha.0 ||~1.0.8-beta.0 || ~1.0.8"
   }
   ```
4. 在hvigorfile.ts文件中添加插件配置：

   ```
   import { appTasks } from '@ohos/hvigor-ohos-plugin';
   import { ascfHspPlugin } from '@atomicservice/ascf-toolkit-hvigor-plugin';
   export default {
     system: appTasks,
     plugins:[
       ascfHspPlugin(),
     ]
   }
   ```

## 开发准备

1. 开始开发前，请确保已完成[业务域名配置](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-business-domain)。
2. 需要在H5工程下安装JS SDK，以便于在H5中调用相关接口，具体方法请参照[JS SDK](#js-sdk)。

## JS SDK

**获取安装**

可以通过NPM方式，将JS SDK集成到工程。

**安装方法**

在目标路径下打开cmd命令窗口，并执行以下npm命令，获得对应的js文件。

```
npm install @atomicservice/aseweb-sdk
```

**使用方法**

**es6**

```
import has from '@atomicservice/aseweb-sdk';

has.asWeb.getEnv({
  callback: (err, res) => {
    console.log('success: ', res);
  }
});
```

**umd**

```
<script src="../dist/aseweb-sdk.umd.js"></script>
<script>
  has.asWeb.getEnv({
    callback: (err, res) => {
      console.log('success: ', res);
    }
  });
</script>
```

在命令行中看到打印成功的结果，则说明已成功安装sdk，可以开发使用AtomicServiceEnhancedWeb组件。

![](./img/459e9b9e.png)

复制npm安装包里面的aseweb-sdk.umd.js文件，放到项目的静态资源目录后，需要将上述示例中script的src引用的目录改为对应的路径。
