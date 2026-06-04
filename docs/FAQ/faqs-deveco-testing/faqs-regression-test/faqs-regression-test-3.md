---
title: "生成回归测试包时，如果出现“setup-regression.py解析失败，请检查setup-regression.py的写法是否规范”的错误提示，应如何处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-regression-test-3
---

若setup-regression.py编写不规范，会出现提示。编写setup-regression.py文件时，需去除注释，参数以“参数名=参数值”的形式设置。

```
 # setup-regression.py example of file writing
from setuptools import setup
setup(
      name='hypiumTest',
      version='1.0.0.0',
      author='xxx',
      # py_modules Specify the hypium use case py file that needs to be packaged
      py_modules=['testcases.Example'],
      include_package_data=True
      )
```
