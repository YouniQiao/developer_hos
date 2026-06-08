---
title: "XML生成"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation
last_sync: 2026-06-07
sync_hash: 49d3d608
---
XML可以作为数据交换格式，被各种系统和应用程序支持。例如Web服务，可以将结构化数据以XML格式进行传递。

XML还可以作为消息传递格式，用于分布式系统中不同节点的通信。

## 注意事项

* XML标签必须成对出现，生成开始标签就要生成结束标签。
* XML标签对大小写敏感，开始标签与结束标签大小写要一致。

## 开发步骤

XML模块提供XmlSerializer及XmlDynamicSerializer类来生成XML数据，使用XmlSerializer需传入固定长度的ArrayBuffer或DataView对象作为输出缓冲区，用于存储序列化后的XML数据。

XmlDynamicSerializer类动态扩容，程序根据实际生成的数据大小自动创建ArrayBuffer。

调用不同的方法写入不同的内容，如startElement(name: string)写入元素开始标记，setText(text: string)写入标签值。

XML模块的API接口可以参考[@ohos.xml](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-xml)的详细描述，按需求调用相应的函数可以生成一份完整的XML数据。

使用XmlSerializer生成XML示例如下：

1. 引入模块。

   ```
   import { xml, util } from '@kit.ArkTS';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlSerializer.ets#L16-L18" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlSerializer.ets</a></div>

2. 创建缓冲区，构造XmlSerializer对象。可以基于ArrayBuffer构造XmlSerializer对象，也可以基于DataView构造XmlSerializer对象。

   方式1：基于ArrayBuffer构造XmlSerializer对象

   ```
   let arrayBuffer: ArrayBuffer = new ArrayBuffer(2048); // 创建一个2048字节的缓冲区
   let serializer: xml.XmlSerializer = new xml.XmlSerializer(arrayBuffer); // 基于ArrayBuffer构造XmlSerializer对象
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlSerializer.ets#L22-L25" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlSerializer.ets</a></div>


   方式2：基于DataView构造XmlSerializer对象

   ```
   let arrayBuffer: ArrayBuffer = new ArrayBuffer(2048); // 创建一个2048字节的缓冲区
   let dataView: DataView = new DataView(arrayBuffer); // 创建一个DataView
   let serializer: xml.XmlSerializer = new xml.XmlSerializer(dataView); // 基于DataView构造XmlSerializer对象
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlSerializer.ets#L56-L60" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlSerializer.ets</a></div>

3. 调用XML元素生成函数。

   ```
   serializer.setDeclaration(); // 写入XML的声明
   serializer.startElement('bookstore'); // 写入元素开始标记
   serializer.startElement('book'); // 嵌套元素开始标记
   serializer.setAttributes('category', 'COOKING'); // 写入属性及其属性值
   serializer.startElement('title');
   serializer.setAttributes('lang', 'en');
   serializer.setText('Everyday'); // 写入标签值
   serializer.endElement(); // 写入结束标记
   serializer.startElement('author');
   serializer.setText('Giana');
   serializer.endElement();
   serializer.startElement('year');
   serializer.setText('2005');
   serializer.endElement();
   serializer.endElement();
   serializer.endElement();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlSerializer.ets#L26-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlSerializer.ets</a></div>

4. 使用Uint8Array操作ArrayBuffer，并调用TextDecoder对Uint8Array解码后输出。

   ```
   let uint8Array: Uint8Array = new Uint8Array(arrayBuffer); // 使用Uint8Array读取arrayBuffer的数据
   let textDecoder: util.TextDecoder = util.TextDecoder.create(); // 调用util模块的TextDecoder类
   let result: string = textDecoder.decodeToString(uint8Array); // 对uint8Array解码
   console.info(result);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlSerializer.ets#L44-L49" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlSerializer.ets</a></div>


   输出结果如下：

   ```
   <?xml version="1.0" encoding="utf-8"?><bookstore>
     <book category="COOKING">
       <title lang="en">Everyday</title>
       <author>Giana</author>
       <year>2005</year>
     </book>
   </bookstore>
   ```

使用XmlDynamicSerializer生成XML示例如下：

1. 引入模块。

   ```
   import { xml, util } from '@kit.ArkTS';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlDynamicSerializer.ets#L16-L18" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlDynamicSerializer.ets</a></div>

2. 调用XML元素生成函数。

   ```
   let dySerializer = new xml.XmlDynamicSerializer('utf-8');
   dySerializer.setDeclaration(); // 写入XML的声明
   dySerializer.startElement('bookstore'); // 写入元素开始标记
   dySerializer.startElement('book'); // 嵌套元素开始标记
   dySerializer.setAttributes('category', 'COOKING'); // 写入属性及其属性值
   dySerializer.startElement('title');
   dySerializer.setAttributes('lang', 'en');
   dySerializer.setText('Everyday'); // 写入标签值
   dySerializer.endElement(); // 写入结束标记
   dySerializer.startElement('author');
   dySerializer.setText('Giana');
   dySerializer.endElement();
   dySerializer.startElement('year');
   dySerializer.setText('2005');
   dySerializer.endElement();
   dySerializer.endElement();
   dySerializer.endElement();
   let arrayBuffer = dySerializer.getOutput();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlDynamicSerializer.ets#L22-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlDynamicSerializer.ets</a></div>

3. 使用Uint8Array操作ArrayBuffer，并调用TextDecoder对Uint8Array解码后输出。

   ```
   let uint8Array: Uint8Array = new Uint8Array(arrayBuffer);
   let result: string = util.TextDecoder.create().decodeToString(uint8Array);
   console.info(result);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsCommonLibrary/XmlGenerationParsingAndConversion/XMLGeneration/entry/src/main/ets/pages/XmlDynamicSerializer.ets#L42-L46" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XmlDynamicSerializer.ets</a></div>


   输出结果如下：

   ```
   <?xml version="1.0" encoding="utf-8"?>
   <bookstore>
     <book category="COOKING">
       <title lang="en">Everyday</title>
       <author>Giana</author>
       <year>2005</year>
     </book>
   </bookstore>
   ```
