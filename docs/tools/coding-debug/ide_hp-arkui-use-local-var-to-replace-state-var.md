---
title: "@performance/hp-arkui-use-local-var-to-replace-state-var"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_hp-arkui-use-local-var-to-replace-state-var
format: md
upstream_id: tools/coding-debug/ide_hp-arkui-use-local-var-to-replace-state-var
last_sync: 2026-06-07
sync_hash: 9e422593
---
# @performance/hp-arkui-use-local-var-to-replace-state-var

т╗║У««Сй┐ућеСИ┤ТЌХтЈўжЄЈТЏ┐ТЇбуіХТђЂтЈўжЄЈсђѓ

жђџућеСИбтИДтю║ТЎ»СИІ№╝їт╗║У««С╝ўтЁѕС┐«Тћ╣сђѓ

#### УДётѕЎжЁЇуй«

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-use-local-var-to-replace-state-var": "warn",
  }
}
```

#### жђЅжА╣

У»ЦУДётѕЎТЌажюђжЁЇуй«жбЮтцќжђЅжА╣сђѓ

#### ТГБСЙІ

```
@Entry
@Component
struct MyComponent {
  @State message: string = '';
  appendMsg(newMsg: string) {
      let message = this.message;
      message += newMsg;
      message += ";";
      message += "<br/>";
      this.message = message;
  }
  build() {
    // СИџтіАС╗БуаЂ...
  }
}
```

#### тЈЇСЙІ

```
@Entry
@Component
struct MyComponent {
  @State message: string = '';
  appendMsg(newMsg: string) {
      this.message += newMsg;
      this.message += ";";
      this.message += "<br/>";
  }
  build() {
    // СИџтіАС╗БуаЂ...
  }
}
```

#### УДётѕЎжЏє

```
plugin:@performance/recommended
plugin:@performance/all
```

Code LinterС╗БуаЂТБђТЪЦУДётѕЎуџёжЁЇуй«ТїЄт»╝У»итЈѓУђЃ[Code LinterС╗БуаЂТБђТЪЦ](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)сђѓ
