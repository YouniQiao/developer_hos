---
title: "天气数据刷新命令&lt;RefreshWeatherCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/refreshweathercommand-0000001194207227
format: md
---


# 天气数据刷新命令&lt;RefreshWeatherCommand&gt;

## 功能概述

RefreshWeatherCommand主要在需要手动刷新[天气变量](https://developer.huawei.com/consumer/cn/doc/content/weather-0000001079515110)的值时使用。

## 应用示例

示例：通过点击事件刷新当天的数据。

```
<Weather>
	<Var name="Weather.today.weatherid" expression="999" type="int"/>
	<Var name="Weather.today.aqivaluetext" expression="'bbb'" type="string"/>
	<Var name="Weather.today.currentTem" expression="222" type="int"/>
	<Var name="Weather.today.maxtemp" expression="333" type="int"/>
	<Var name="Weather.today.mintemp" expression="444" type="int"/>
</Weather>

<Image x="600" y="500" h="250" w = "260" src="bj.jpg"  />
<Button x="600" y="500" h="250" w="260">
	<Trigger action="down">
		<RefreshWeatherCommand />
	</Trigger>
</Button>
```