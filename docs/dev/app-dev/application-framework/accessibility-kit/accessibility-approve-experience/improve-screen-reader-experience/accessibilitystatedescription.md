---
title: "自定义控件播报状态的场景"
original_url: /docs/dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/accessibilitystatedescription
format: md
upstream_id: dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/accessibilitystatedescription
last_sync: 2026-06-07
sync_hash: e93895dc
---
## 设计场景

可切换状态的控件可以处于“已选中”或“未选中”状态，屏幕朗读功能可以从控件的语义属性中推导出默认状态说明标签。在某些情况下，推导出的默认状态说明标签不能完全适用于应用场景，此时可以通过[accessibilityStateDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility)指定状态说明标签进行判断。屏幕朗读模式下，若指定了可点击控件的状态说明标签，当用户聚焦控件或执行双击操作后，屏幕朗读会播报指定的状态说明标签。

## accessibilityStateDescription说明

* [description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility)：指定组件的状态说明标签，支持string类型和Resource类型，默认值为空。

## 开发实例

如下示例实现一个收藏按钮，点击可切换状态，播报指定的状态说明标签：

```
@Entry
@Component
struct Rule_2_1_14 {
  title: string = 'Rule 2.1.14';
  // 收藏按钮状态，表示是否被选中
  @State private isSelected: boolean = false;

  build() {
    NavDestination() {
      Column() {
        Button() {
          // 根据状态显示不同的图标
          Image(this.isSelected ? $r('app.media.favorIcon') : $r('app.media.unfavorIcon'))
            .width(30)
            .height(30)
        }
        // 指定按钮的状态说明标签，"已收藏"或"未收藏"
        .accessibilityStateDescription(this.isSelected ? "已收藏" : "未收藏")
         // 设置按钮的选中状态
        .accessibilitySelected(this.isSelected)
         // 按钮点击事件处理程序，切换选中状态
        .onClick(() => {
          this.isSelected = !this.isSelected;
        })
      }
      .width('100%')
      .height('100%')
    }
    .title(this.title)
  }
}
```
