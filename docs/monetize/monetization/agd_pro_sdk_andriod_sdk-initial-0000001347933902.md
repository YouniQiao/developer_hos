---
title: "SDK初始化"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_andriod_sdk-initial-0000001347933902
format: md
---



#### 全局初始化

```
// 建议在Application#onCreate方法中调用
AgdAdApi.init(this,                 // application context
     new AgdAdConfig.Builder()
        .debug(false) // 默认false, debug版本可传入true用于问题调试
        .userId("测试媒体ID") // 可选，媒体传入身份标识，用于激励发放
        .build()
     , new InitCallback() {
	@Override
	public void onInitSuccess() {
            // 初始化成功回调
	}

	@Override
	public void onInitFail(int code, String msg) {
            // 初始化失败回调

	}
     });
```

**AgdAdConfig**参数说明如下表所示。

| 参数 | 是否必选 | 数据类型 | 描述 |
| --- | --- | --- | --- |
| debug | 否 | boolean | 默认false, debug版本可传入true用于问题调试。 |
| userId | 否 | `String` | 媒体传入身份标识。  注意：  此参数仅用于接入激励视频广告。其他广告无需设置此参数。  SDK将它透传给SDK服务端，SDK服务端再传给媒体服务端，用于激励发放校验。如果媒体不选择云端校验，则可以不传。 |

**初始化失败错误码****具体说明如下表所示。**

| 参数 | 描述 | 错误码 |
| --- | --- | --- |
| AgdAdConstant.ERROR\_FAIL\_QUICK\_CARD | 快卡SDK初始化错误 | 1001 |
