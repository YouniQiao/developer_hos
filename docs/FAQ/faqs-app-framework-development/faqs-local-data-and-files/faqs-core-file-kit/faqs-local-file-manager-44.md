---
title: "如何读取指定文件内容，并转为具体对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-44
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-44
last_sync: 2026-06-07
sync_hash: 14add8fb
---
可以使用[getRawFileContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9)方法，参考代码如下：

```
import { Context } from '@kit.AbilityKit';
import { buffer } from '@kit.ArkTS';

@Entry
@Component
struct Index {
  private context: Context | undefined = this.getUIContext().getHostContext();
  private str: string = '';

  getRawFile(): ESObject {
    //Call the getRawFileContent interface to retrieve the content of a JSON file and read it as a string
    this.getUIContext().getHostContext()!.resourceManager.getRawFileContent('test.json', (err, data) => {
      try {
        this.str = buffer.from(data.buffer).toString();
        console.info(JSON.stringify(this.str));
      } catch (e) {
        console.info(JSON.stringify(e));
      }
    })
    //You can also call the getRawFileContentSync interface to retrieve the content of the JSON file and read it as a string
    try {
      let data: Uint8Array = this.context!.resourceManager.getRawFileContentSync('test.json');
      this.str = buffer.from(data.buffer).toString();
    } catch (e) {
      console.info(JSON.stringify(e));
    }
    // Convert string to ESObject
    let obj: ESObject = JSON.parse(this.str);
    console.info('ESObject', JSON.stringify(obj));
    return obj;
  }

  build() {
    Column() {
      Button('get')
        .onClick(() => {
          this.getRawFile();
        })
    }.width('100%')
  }
}
```
