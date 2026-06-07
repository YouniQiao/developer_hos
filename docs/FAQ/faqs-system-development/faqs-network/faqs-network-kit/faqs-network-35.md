---
format: md
title: "三方库@ohos/axios中发起post请求，如何以queryParams形式传递参数"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-35
---


* 方式一：使用axios.post接口时，Url.URLParams需要转换为字符串并拼接到URL后面。

  ```
  let params: url.URLParams = new url.URLParams()
  params.append('fod' ,'1')
  params.append('bard','2')
  axios.post('https://developer.mozilla.org/?' + params.toString()).then((res: AxiosResponse) => {
    let message = "request result: " + JSON.stringify(res.data);
  }).catch((err:AxiosError) => {
    let message = "request error: " + err.message;
  })
  ```
* 方式二：使用axios接口，请求参数写在config对象的params中。

  ```
  axios({ url: 'https://developer.mozilla.org/?', method: 'post', params: { fod: '1', bard: '2', } }).then((res: AxiosResponse) => {
    let message = "request result: " + JSON.stringify(res.data);
  }).catch((err:AxiosError) => {
    let message = "request error: " + err.message;
  })
  ```

**参考链接**

[URLParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-url#urlparams9)
