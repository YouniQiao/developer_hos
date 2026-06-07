---
title: "概述"
original_url: /docs/distribute/agc/agc-help-credential-0000002415263317/agc-help-credential-overview-0000002381784018
format: md
---


使用模拟器调试时，若应用/元服务需访问Cloud Foundation Kit等开放服务，需在AGC云侧注册调试凭据，以保护应用/元服务对华为开放服务的访问。

应用/元服务在模拟器中启动时，该模拟器下会生成调试凭据并输出到日志，将生成的调试凭据注册到AGC云侧，即可在模拟器中调试应用/元服务。

一个团队账号下最多允许注册100个调试凭据。一个应用/元服务可以注册多个调试凭据，但一个调试凭据仅能绑定一个应用/元服务。
