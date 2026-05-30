---
title: "创建HarmonyOS标签"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-create-0000002382856341
---

#### еҠҹиғҪд»Ӣз»Қ

жӯӨжҺҘеҸЈз”ЁдәҺдёәHarmonyOS NEXTеә”з”ЁжҲ–е…ғжңҚеҠЎеҲӣе»әHarmonyOSж ҮзӯҫгҖӮ

#### дҪҝз”ЁзәҰжқҹ

жҺҘеҸЈи°ғз”ЁиҖ…зҡ„и§’иүІпјҡиҙҰеҸ·жҢҒжңүиҖ…гҖҒз®ЎзҗҶе‘ҳгҖҒAPPз®ЎзҗҶе‘ҳгҖҒиҝҗиҗҘгҖӮ

#### жҺҘеҸЈеҺҹеһӢ

|  |  |
| --- | --- |
| жүҝиҪҪеҚҸи®® | HTTPS POST |
| жҺҘеҸЈж–№еҗ‘ | ејҖеҸ‘иҖ…жңҚеҠЎеҷЁ -> еҚҺдёәжңҚеҠЎеҷЁ |
| жҺҘеҸЈURL | https://connect-api.cloud.huawei.com/api/shs/v1/hmcode |
| ж•°жҚ®ж јејҸ | иҜ·жұӮпјҡContent-Type: application/json  е“Қеә”пјҡContent-Type: application/json |

#### иҜ·жұӮеҸӮж•°

#### [h2]Header

![](../img/agc-help-harmonyoslabel-api-create-0000002382856341_0.png)

жң¬жҺҘеҸЈж”ҜжҢҒдҪҝз”ЁService Accountж–№ејҸе’ҢAPIе®ўжҲ·з«Ҝж–№ејҸпјҢдәҢиҖ…еҢәеҲ«иҜ·еҸӮи§Ғ[иҺ·еҸ–жңҚеҠЎз«ҜAPIжҺҲжқғ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617)гҖӮ

**Service Account****ж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{JWT}`*вҖқгҖӮJWTдёә[йҖҡиҝҮService Accountж–№ејҸиҺ·еҸ–жҺҲжқғ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617#section104621343151212)дёӯиҺ·еҸ–зҡ„йүҙжқғд»ӨзүҢгҖӮ |
| appId | M | Integer(64) | еә”з”ЁIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)гҖӮ |
| productId | M | String | йЎ№зӣ®IDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)гҖӮ |

**APIе®ўжҲ·з«Ҝж–№ејҸпјҡ**

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| client\_id | M | String | е®ўжҲ·з«ҜIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[еҲӣе»әAPIе®ўжҲ·з«Ҝ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617#section14162113625516)гҖӮ |
| Authorization | M | String | и®ӨиҜҒдҝЎжҒҜпјҢж јејҸдёәвҖңAuthorization: Bearer *\\$`{access\_token}`*вҖқгҖӮaccess\_tokenдёә[иҺ·еҸ–Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section12242154616187)дёӯиҺ·еҸ–зҡ„access\_tokenгҖӮ |
| appId | M | Integer(64) | еә”з”ЁIDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)гҖӮ |
| productId | M | String | йЎ№зӣ®IDпјҢиҺ·еҸ–ж–№жі•еҸӮиҖғ[жҹҘзңӢеә”з”ЁдҝЎжҒҜ](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)гҖӮ |

#### [h2]Body

иҜ·жұӮBodyдёӯдҪҝз”ЁJSONж јејҸжҗәеёҰHarmonyOSж ҮзӯҫеҶ…е®№пјҢеҸӮж•°еҰӮдёӢиЎЁжүҖзӨәгҖӮ

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| codeName | M | String | HarmonyOSж ҮзӯҫеҗҚз§°пјҢеҚіеә”з”ЁеҹҹеҗҚеҗҚз§°жҲ–иҖ…е…ғжңҚеҠЎй“ҫжҺҘеҗҚз§°гҖӮ |
| linkingUrl | M | String | * еҰӮжһңжҳҜеә”з”ЁпјҢеҲҷдёәеҹҹеҗҚй“ҫжҺҘ+и·Ҝеҫ„+еҸӮж•°пјҢзӨәдҫӢпјҡhttps://domain/path1/path2?key1=value1&key2=value2 * еҰӮжһңжҳҜе…ғжңҚеҠЎпјҢеҲҷдёәй“ҫжҺҘпјҢзӨәдҫӢпјҡhttps://atomicservicetest.lfdlatest01cn.hwcloudtest.cn/u1po |
| customParameters | O | String | иҮӘе®ҡд№үеҸӮж•°пјҢзӨәдҫӢпјҡkey1=value1&key2=value2 |
| servicePath | O | String | жңҚеҠЎи·Ҝеҫ„пјҢзӨәдҫӢпјҡ/path1/path2  еҝ…йЎ»д»ҘвҖң/вҖқејҖеӨҙпјҢз»“е°ҫдёҚе…Ғи®ёжңүвҖң/вҖқгҖӮ |
| codeType | M | Integer | HarmonyOSж Үзӯҫзұ»еһӢгҖӮ  еҸ–еҖјиҢғеӣҙпјҡ   * 1пјҡзў°жү«еҗҲдёҖ * 2пјҡзў°дёҖзў° * 3пјҡжү«дёҖжү« |
| airtouchConfig | O | [AirtouchConfig](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-airtouchconfig-0000002349016176) | AirTouchй…ҚзҪ®дҝЎжҒҜгҖӮ  иҜҙжҳҺпјҡ  codeTypeеҸ–еҖјдёә1пјҲзў°жү«еҗҲдёҖпјүжҲ–иҖ…2пјҲзў°дёҖзў°пјүж—¶пјҢжӯӨеҸӮж•°еҝ…еЎ«гҖӮ |

#### иҜ·жұӮзӨәдҫӢ

```
POST /api/shs/v1/hmcode HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*******7168
Authorization: Bearer *******
appId: **********
productid: *******
{
    "codeName": "е°ҸеҶ°зі–",
    "linkingUrl": "https://linking.xiaobingtang.cn",
    "customParameters": "key1=value1&Key2=value2",
    "servicePath": "/path1/path2",
    "codeType": "3"
}
```

#### е“Қеә”еҸӮж•°

| еҸӮж•°еҗҚз§° | еҝ…йҖү(M)/еҸҜйҖү(O) | зұ»еһӢ | еҸӮж•°иҜҙжҳҺ |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-connectret-0000002382896625) | еҢ…еҗ«иҝ”еӣһз ҒеҸҠжҸҸиҝ°дҝЎжҒҜзҡ„з»“жһңгҖӮ |

#### е“Қеә”зӨәдҫӢ

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  }
}
```

#### и°ғз”ЁзӨәдҫӢ

```
public static void createHmCode(String domain,String clientId, String token, String appId, String productId){
    HttpPost post = new HttpPost(domain + "/api/shs/v1/hmcode");
    post.setHeader("Authorization", "Bearer " + token);
    post.setHeader("client_id", clientId);
    post.setHeader("appId", appId);
    post.setHeader("productId", productId);
    JSONObject keyString = new JSONObject();
    keyString.put("codeName", "е°ҸеҶ°зі–");
    keyString.put("linkingUrl", "https://linking.xiaobingtang.cn");
    keyString.put("customParameters", "key1=value1&Key2=value2");
    keyString.put("servicePath", "/path1/path2");
    keyString.put("codeType", 3);
    StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
    entity.setContentEncoding("UTF-8");
    entity.setContentType("application/json");
    post.setEntity(entity);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(post);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();
			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
}
```
