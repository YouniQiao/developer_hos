---
format: md
title: "如何解决Mac电脑不能识别hdc命令的问题"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-42
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-42
last_sync: 2026-06-07
sync_hash: 16725906
---
1. 环境变量因素的解决方法参考如下：
   1. 点击屏幕左上角的苹果图标，转到系统设置中的“用户与群组”。
   2. 按住Ctrl键，点击左侧窗格中的用户账户名称，然后选择“高级选项”。
   3. 点击"Login Shell"下拉框，然后选择"/bin/bash"以将Bash作为默认shell。

      ![](./img/f8bb8e0f.png "点击放大")
2. 非环境变量因素的解决方法参见：
   1. 打开终端，输入 cd ~。
   2. 使用 sudo vim .bash\_profile 命令编辑文件。
   3. 在文档底部输入：

      export PATH=$\{PATH\}:Sdk/default/base/toolchains

      按下Esc键退出，然后在下方输入:wq保存并退出。
   4. 运行 source .bash\_profile 命令以加载环境变量。
   5. 输入 hdc -v，显示版本信息即表示可用。

   **参考链接：**

   [常见问题](/docs/dev/app-dev/system/hdc#常见问题)
