---
format: md
title: "应用打包成.app时其中的HAP包没有签名"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-51
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-51
last_sync: 2026-06-07
sync_hash: ed03b2d1
---
上架时应用市场会拆包并重新签名，对应用签名后即可上架。应用市场在验证应用签名后，会解压获取所有HAP，再对HAP进行签名，因此无需在DevEco Studio中签名。
