---
displayed_sidebar: appDevSidebar
title: "subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明"
original_url: /docs/dev/app-dev/application-services/iap-kit-guide/iap-faq/iap-faq-20
format: md
upstream_id: dev/app-dev/application-services/iap-kit-guide/iap-faq/iap-faq-20
last_sync: 2026-06-07
sync_hash: c890c5fe
---
* subGroupId(订阅组ID)标识一个订阅组，一个订阅组下存在多个自动续期订阅商品。
* subGroupGenerationId(订阅组的代ID)是标识用户在同一订阅组下连续订阅的唯一ID。用户首次订阅时生成，在同一订阅组内切换其它订阅商品该ID不会改变，在订阅失效且超出[保留期](/docs/dev/app-dev/application-services/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#保留期)后，用户重新购买商品时改变。
* subscriptionId(订阅ID)标识用户对订阅组中的一个商品存在订阅关系。
