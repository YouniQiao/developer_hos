---
displayed_sidebar: appDevSidebar
title: "使用DocumentViewPicker拿到的uri通过openPreview打开显示预览失败"
original_url: /docs/dev/app-dev/application-services/preview-kit-guide/preview-faq/preview-faq-2
format: md
---


DocumentViewPicker拿到的文件uri应用仅有临时权限，该权限无法分享给预览，导致预览失败。可先对uri[持久化权限](/docs/dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/file-persistpermission)，然后再采用openPreview打开文件；或者可以先将文件拷贝至应用沙箱内，再预览沙箱内文件。
