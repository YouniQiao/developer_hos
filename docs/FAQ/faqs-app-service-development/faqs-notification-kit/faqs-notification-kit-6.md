---
format: md
title: "requestEnableNotification接口申请通知权限的机制是怎样的"
original_url: /docs/FAQ/faqs-app-service-development/faqs-notification-kit/faqs-notification-kit-6
---


* 首次执行requestEnableNotification时，会弹出通知权限申请弹窗，该接口的回调与用户授权状态无关。
* 当requestEnableNotification非首次执行时，不会弹出通知权限申请弹窗，并且无论是否拥有通知权限，都会直接返回 success。
