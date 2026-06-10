---
title: "资源与多设备适配入门"
---

HarmonyOS 应用需要运行在手机、平板、车机、手表等多种设备上。不同设备的屏幕尺寸、系统能力各不相同，HarmonyOS 提供了资源限定符和系统能力（SysCap）机制来帮助开发者一套代码适配多设备。

## 资源分类与限定符

应用资源（字符串、图片、布局等）存放在 `resources/` 目录下，通过**限定符子目录**区分不同设备形态：

```
resources/
├── base/          # 默认资源
│   ├── element/   # 字符串、颜色等
│   └── media/     # 图片、音频
├── dark/          # 深色模式
├── phone/         # 手机专属
├── tablet/        # 平板专属
└── car/           # 车机专属
```

系统会根据当前设备自动匹配最合适的资源，无需在代码中判断设备类型。详细说明见[资源分类与访问](/docs/dev/app-dev/getting-started/resource-access/resource-categories-and-access)。

## 系统能力 SysCap

不同的 HarmonyOS 设备支持的系统能力不同——比如手表可能不支持摄像头，车机可能不支持某些传感器。系统提供了 **SysCap（System Capability）** 机制来查询设备能力。

### 使用 canIUse 查询

```ts
// 检查设备是否支持某个系统能力
if (canIUse('SystemCapability.Multimedia.Camera.Core')) {
  // 安全使用相机
  camera.takePicture()
} else {
  // 降级处理：显示提示或隐藏功能
  this.showUnsupportedHint = true
}
```

### 最佳实践

- **启动时检查**：在应用初始化阶段查询关键能力，决定功能开关
- **条件编译**：对能力差异较大的模块，使用条件编译隔离代码
- **优雅降级**：不支持某项能力时，提供替代方案而非直接崩溃

## 布局适配

除了资源和能力适配，UI 布局也需要适配不同屏幕：

| 技术 | 适用场景 |
|---|---|
| 响应式布局（`@State` + 断点） | 根据屏幕宽度切换布局 |
| 栅格系统（`GridRow` / `GridCol`） | 复杂多列布局 |
| 自适应拉伸（`layoutWeight`） | 组件按比例分配空间 |
| 分栏布局（`Navigation` + split） | 平板/折叠屏双栏模式 |

多设备布局的详细实践，见[多设备开发](/docs/dev/app-dev/multi-device/bpta-multi-device-start)。

## 下一步

- 完整 SysCap 能力集列表：见[多设备开发 > 系统能力 SysCap](../multi-device/syscap)（即将上线）
- 多设备典型案例：[多设备开发实践](/docs/dev/app-dev/multi-device/bpta-multi-device-start)
