---
title: "对接激励场景解决方案"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_connect-incentive-scenario-0000001599894408
format: md
---



#### 前提条件

已联系华为运营配置媒体的激励场景权限。

#### 修改展示位开启激励发放

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，修改展示位配置，开启激励发放功能，具体请参见[开启激励发放](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_creat-media-display-position-0000001246432546#ZH-CN_TOPIC_0000001246432546__li13789310300)。

#### 重新请求广告并下载

1. 重新通过API请求，获取最新的**downloadLink**信息。
2. 使用13.2.1版本或后继版本的应用市场，通过**downloadLink**或者**clickDeepLink**下载应用。

#### 客户端获取激励事件

原有的媒体通过**downloadLink**进行下载，是不涉及客户端代码的。

如果需使用本次激励场景方案，则需要增加客户端对激励事件的监听代码。

| 广播名称 | 描述 | 参数 |
| --- | --- | --- |
| REWARD\_ACTION = “com.huawei.appmarket.broadcast.action.REWARD” | 激励发放Action | 13.2.1版本新增激励场景解决方案，需要在展示位上配置激励发放。 |

监听代码示例如下：

```
	public static void register(Context context, BroadcastReceiver receiver) {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction(REWARD_ACTION);
	    context.registerReceiver(receiver, filter);
	}

	private BroadcastReceiver receiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        if (null == intent) {
	            return;
	        }
	        String action = intent.getAction();
	         if (REWARD_ACTION.equals(action)) {
	            String downloadPkg = intent.getStringExtra("pkg"); // 下载应用包名
	            String mediaPkg = intent.getStringExtra("mediaPkg"); // 媒体包名
	            Log.i(TAG,"REWARD_ACTION: downloadPkg= " + downloadPkg + ", mediaPkg= "+ mediaPkg);
	            // TODO
	        }
	    }
	};
```
