---
title: "获取用户信息"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-account2-0000001128438068
format: md
---

# 获取用户信息

调用该API接口，可以在您登录鲸鸿动能广告平台后查询并展示您的华为账号的基本信息。

- <strong>请求示例</strong>

  =========================================================================================================

  POST /rest.php HTTP/1.1

  Host: account.cloud.huawei.com

  Content-Type: application/x-www-form-urlencoded

  nsp\_svc=GOpen.User.getInfo&access\_token=<strong>CV7GpkaEz8wYeXW2%2fra%2fJ5%2bjn5H9Y%2ftaxWLHl5ijevHMr4NzNnTIfkD6El9u\*\*\*\*\*\*YYT6KN02YhMenGQ2%2f2y7vYJ8Xd9D94xC2ztKK%2bI%2bfjl1TEfFMNDf3kacE%3d</strong>&getNickName=1

  ==========================================================================================================

  将加粗部分替换成获取到的access\_token
- <strong>响应样例</strong>

  ==========================================================================================================HTTP/1.1 200 OK

  Content-Type: text/html;charset=UTF-8

  Cache-Control: no-store

  \\{"displayName":"137\*\*\*\*\*\*38","openID":"MDFAMTAzODA3NDJANWNiaYTZiaZWNkYTcxOWFlY2E4N2M3ZDZmMDJkMGM4MGRAMjBjZWNlN2YyMGFmZGIxZWRmOTg3MDI2Nzk1OGEyY2IwMmE0MjAwYjA1ZGY3ZGUxNmJjN2Qw","headPictureURL":"https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0610086200300000245.20200521231532.PwhgOVhUxTCLzd8vfvjVKnx9bmWtlUBG.1000.66140D63E80FF9D81F381F49462E30FF90C37B86EDD06CCAFF19CFC3C3C98921.png"\\}

  ==========================================================================================================

  displayName：您的昵称

  headPictureURL：您的头像
