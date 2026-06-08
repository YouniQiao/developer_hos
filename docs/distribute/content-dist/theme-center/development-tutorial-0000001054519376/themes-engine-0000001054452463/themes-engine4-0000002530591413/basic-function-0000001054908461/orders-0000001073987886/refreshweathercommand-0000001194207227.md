---
title: "天气数据刷新命令&lt;RefreshWeatherCommand&gt;"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/orders-0000001073987886/refreshweathercommand-0000001194207227
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/orders-0000001073987886/refreshweathercommand-0000001194207227
last_sync: 2026-06-07
sync_hash: 2fe2ffbe
---
# 天气数据刷新命令&lt;RefreshWeatherCommand&gt;

## 功能概述

RefreshWeatherCommand主要在需要手动刷新[天气变量](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/data-open1-0000001694307045/weather-0000001079515110)的值时使用。

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