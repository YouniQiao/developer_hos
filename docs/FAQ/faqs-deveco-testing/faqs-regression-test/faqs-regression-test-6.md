---
format: md
title: "生成回归测试包时报错提示“测试包中需包含单个用例（json及对应的py文件），请校验setup-regression.py文件后重试”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-regression-test-6
---

如果setup-regression.py文件构建的工程包中不含用例，会出现提示。回归测试要求工程包中必须包含单个用例，请检查setup-regression.py文件，并使用python setup-regression.py sdist --formats=zip进行本地验证，确保构建的工程包中仅包含单个用例。
