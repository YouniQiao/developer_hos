// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const releaseNotesSidebar = [
  {
    type: 'category',
    label: "版本说明",
    collapsed: true,
    items: [
      { type: 'link', label: "所有HarmonyOS版本", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion' },
      {
        type: 'category',
        label: "HarmonyOS 6.1.1(24) Beta",
        collapsed: true,
        items: [
          { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-611' },
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-611' },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6111' },
                  { type: 'link', label: "App Gallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-6111' },
                  { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6111' },
                  { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6111' },
                  { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6111' },
                  { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6111' },
                  { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6111' },
                  { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6111' },
                  { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6111' },
                  { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6111' },
                  { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6111' },
                  { type: 'link', label: "Call Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callservicekit-6111' },
                  { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6111' },
                  { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6111' },
                  { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6111' },
                  { type: 'link', label: "Core Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corespeechkit-6111' },
                  { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-6111' },
                  { type: 'link', label: "Desktop Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-desktopextensionkit-6111' },
                  { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6111' },
                  { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-6111' },
                  { type: 'link', label: "Enterprise DataGuard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisedataguardkit-6111' },
                  { type: 'link', label: "Enterprise Threat Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisethreatprotectionkit-6111' },
                  { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6111' },
                  { type: 'link', label: "Health Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-healthservicekit-6111' },
                  { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6111' },
                  { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-6111' },
                  { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6111' },
                  { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6111' },
                  { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6111' },
                  { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6111' },
                  { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-6111' },
                  { type: 'link', label: "NearLink Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-nearlinkkit-6111' },
                  { type: 'link', label: "Network Boost Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkboostkit-6111' },
                  { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6111' },
                  { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6111' },
                  { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-6111' },
                  { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6111' },
                  { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6111' },
                  { type: 'link', label: "Screen Time Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-screentimeguardkit-6111' },
                  { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-6111' },
                  { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6111' },
                  { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6111' },
                  { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-6111' },
                  { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-6111' },
                  { type: 'link', label: "Wear Engine Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-wearengine-6111' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-611' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 6.1.0(23)",
        collapsed: true,
        items: [
          { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-610' },
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-610' },
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-610' },
                  { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-6101' }
                ]
              },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  {
                    type: 'category',
                    label: "6.1.0(23) Beta2引入的变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6102' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6102' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6102' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6102' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6102' },
                      { type: 'link', label: "IPC Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ipckit-6102' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-6102' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6102' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6102' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6102' },
                      { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-6102' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6102' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6102' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6102' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.1.0(23) Beta1引入的变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6101' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-6101' },
                      { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-6101' },
                      { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-6101' },
                      { type: 'link', label: "AR Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arengine-6101' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6101' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6101' },
                      { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-6101' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6101' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6101' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6101' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6101' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6101' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6101' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6101' },
                      { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-6101' },
                      { type: 'link', label: "Call Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callservicekit-6101' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6101' },
                      { type: 'link', label: "Cloud Foundation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cloudfoundationkit-6101' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6101' },
                      { type: 'link', label: "Contacts Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-contactskit-6101' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6101' },
                      { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-6101' },
                      { type: 'link', label: "Data Augmentation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataaugmentationkit-6101' },
                      { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-6101' },
                      { type: 'link', label: "Desktop Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-desktopextensionkit-6101' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-6101' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6101' },
                      { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-6101' },
                      { type: 'link', label: "Enterprise Space Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisespacekit-6101' },
                      { type: 'link', label: "File Manager Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-filemanagerservicekit-6101' },
                      { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6101' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-6101' },
                      { type: 'link', label: "Graphics Accelerate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-graphicsacceleratekit-6101' },
                      { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-6101' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6101' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6101' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-6101' },
                      { type: 'link', label: "IPC Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ipckit-6101' },
                      { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-6101' },
                      { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-6101' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-6101' },
                      { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6101' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6101' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6101' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6101' },
                      { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-6101' },
                      { type: 'link', label: "NearLink Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-nearlinkkit-6101' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6101' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6101' },
                      { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-6101' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-6101' },
                      { type: 'link', label: "Pen kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-6101' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6101' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6101' },
                      { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-6101' },
                      { type: 'link', label: "Service Collaboration Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-servicecollaborationkit-6101' },
                      { type: 'link', label: "Spatial Recon Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-spatialreconkit-6101' },
                      { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-6101' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6101' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6101' },
                      { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-6101' },
                      { type: 'link', label: "Weather Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-weatherservicekit-6101' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-610' }
            ]
          },
          {
            type: 'category',
            label: "DevEco Testing",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-testing-releasenotes-610' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 6.0.2(22)",
        collapsed: true,
        items: [
          { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-602' },
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-602' },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6021' },
                  { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-6021' },
                  { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6021' },
                  { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6021' },
                  { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-6021' },
                  { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6021' },
                  { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6021' },
                  { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6021' },
                  { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6021' },
                  { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6021' },
                  { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6021' },
                  { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6021' },
                  { type: 'link', label: "Call Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callservicekit-6021' },
                  { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6021' },
                  { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6021' },
                  { type: 'link', label: "Contacts Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-contactskit-6021' },
                  { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-6021' },
                  { type: 'link', label: "Desktop Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-desktopextensionkit-6021' },
                  { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-6021' },
                  { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6021' },
                  { type: 'link', label: "Enterprise Space Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisespacekit-6021' },
                  { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6021' },
                  { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-6021' },
                  { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6021' },
                  { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6021' },
                  { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-6021' },
                  { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-6021' },
                  { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6021' },
                  { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6021' },
                  { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6021' },
                  { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6021' },
                  { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6021' },
                  { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6021' },
                  { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-6021' },
                  { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6021' },
                  { type: 'link', label: "Scan Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scankit-6021' },
                  { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-6021' },
                  { type: 'link', label: "Screen Time Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-screentimeguardkit-6021' },
                  { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-6021' },
                  { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6021' },
                  { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6021' },
                  { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-6021' },
                  { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6021' },
                  { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-6021' },
                  { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-6021' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-602' }
            ]
          },
          {
            type: 'category',
            label: "DevEco Testing",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-testing-releasenotes-602' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 6.0.1(21)",
        collapsed: true,
        items: [
          { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-601' },
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-601' },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  {
                    type: 'category',
                    label: "6.0.1(21) Release引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6012' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6012' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6012' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6012' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6012' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6012' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6012' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6012' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6012' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.1(21) Beta1引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6011' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-6011' },
                      { type: 'link', label: "Agent Framework Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-agentframeworkkit-6011' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6011' },
                      { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-6011' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6011' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6011' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6011' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6011' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6011' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6011' },
                      { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-6011' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6011' },
                      { type: 'link', label: "Cloud Foundation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cloudfoundationkit-6011' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6011' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6011' },
                      { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-6011' },
                      { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-6011' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-6011' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6011' },
                      { type: 'link', label: "Enterprise Space Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisespacekit-6011' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-6011' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6011' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-6011' },
                      { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6011' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6011' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6011' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6011' },
                      { type: 'link', label: "NearLink Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-nearlinkkit-6011' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6011' },
                      { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-6011' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-6011' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6011' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6011' },
                      { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-6011' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6011' },
                      { type: 'link', label: "Spatial Recon Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-spatialreconkit-6011' },
                      { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-6011' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6011' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6011' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-601' }
            ]
          },
          {
            type: 'category',
            label: "DevEco Testing",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-testing-releasenotes-601' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 6.0.0(20)",
        collapsed: true,
        items: [
          { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-600' },
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-600' },
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-600' },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta5引入的行为变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-6004' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta3引入的行为变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-6003' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta2引入的行为变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-6002' },
                      { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-6002' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta1引入的行为变更",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-6001' },
                      { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-6001' }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta5引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ads Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-6004' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6004' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6004' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6004' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6004' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6004' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6004' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6004' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6004' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6004' },
                      { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-6004' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6004' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6004' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6004' },
                      { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-6004' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta3引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6003' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-6003' },
                      { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-6003' },
                      { type: 'link', label: "Agent Framework Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-agentframeworkkit-6003' },
                      { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-6003' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6003' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6003' },
                      { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-6003' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6003' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6003' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6003' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6003' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6003' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6003' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6003' },
                      { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-6003' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6003' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6003' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6003' },
                      { type: 'link', label: "Data Augmentation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataaugmentationkit-6003' },
                      { type: 'link', label: "Desktop Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-desktopextensionkit-6003' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-6003' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6003' },
                      { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-6003' },
                      { type: 'link', label: "Enterprise Data Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisedataguardkit-6003' },
                      { type: 'link', label: "Enterprise Space Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisespacekit-6003' },
                      { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6003' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-6003' },
                      { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-6003' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6003' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6003' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-6003' },
                      { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-6003' },
                      { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-6003' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-6003' },
                      { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6003' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6003' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6003' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6003' },
                      { type: 'link', label: "Network Boost Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkboostkit-6003' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6003' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6003' },
                      { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-6003' },
                      { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-6003' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6003' },
                      { type: 'link', label: "Push Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pushkit-6003' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6003' },
                      { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-6003' },
                      { type: 'link', label: "Service Collaboration Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-servicecollaborationkit-6003' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6003' },
                      { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-6003' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6003' },
                      { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-6003' },
                      { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-6003' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta2引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6002' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-6002' },
                      { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-6002' },
                      { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-6002' },
                      { type: 'link', label: "AR Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arengine-6002' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6002' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6002' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6002' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6002' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6002' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6002' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6002' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6002' },
                      { type: 'link', label: "Call Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callservicekit-6002' },
                      { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-6002' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6002' },
                      { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-6002' },
                      { type: 'link', label: "Data Augmentation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataaugmentationkit-6002' },
                      { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-6002' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6002' },
                      { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-6002' },
                      { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6002' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-6002' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6002' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6002' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-6002' },
                      { type: 'link', label: "Intents Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-intentskit-6002' },
                      { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-6002' },
                      { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-6002' },
                      { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-6002' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6002' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6002' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6002' },
                      { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-6002' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-6002' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-6002' },
                      { type: 'link', label: "Pen Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-6002' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6002' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6002' },
                      { type: 'link', label: "Screen Time Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-screentimeguardkit-6002' },
                      { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-6002' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6002' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-6002' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6002' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "6.0.0(20) Beta1引入的API",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6001' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-6001' },
                      { type: 'link', label: "AR Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arengine-6001' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-6001' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-6001' },
                      { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-6001' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-6001' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-6001' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-6001' },
                      { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit-6001' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-6001' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-6001' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-6001' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-6001' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-6001' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-6001' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-6001' },
                      { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-6001' },
                      { type: 'link', label: "Data Augmentation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataaugmentationkit-6001' },
                      { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-6001' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-6001' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-6001' },
                      { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-6001' },
                      { type: 'link', label: "Enterprise Space Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisespacekit-6001' },
                      { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-6001' },
                      { type: 'link', label: "Graphics Accelerate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-graphicsacceleratekit-6001' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-6001' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-6001' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-6001' },
                      { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-6001' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-6001' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-6001' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-6001' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-6001' },
                      { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-6001' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-6001' },
                      { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-6001' },
                      { type: 'link', label: "Pen kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-6001' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-6001' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-6001' },
                      { type: 'link', label: "Screen Time Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-screentimeguardkit-6001' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-6001' },
                      { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-6001' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-6001' },
                      { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-6001' },
                      { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-6001' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-600' },
              { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/change-description-600-beta1' }
            ]
          },
          {
            type: 'category',
            label: "DevEco Testing",
            collapsed: true,
            items: [
              { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-testing-releasenotes-600' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "历史版本",
        collapsed: true,
        items: [
          {
            type: 'category',
            label: "HarmonyOS 5.1.1(19)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-511-beta1' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-511-beta1' },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      {
                        type: 'category',
                        label: "5.1.1(19) Release引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-5112' },
                          { type: 'link', label: "AREngine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arengine-5112' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5112' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-5112' },
                          { type: 'link', label: "Intents Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-intentskit-5112' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-5112' },
                          { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-5112' },
                          { type: 'link', label: "Pen Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-5112' },
                          { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-5112' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "5.1.1(19) Beta1引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-5111' },
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-5111' },
                          { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-5111' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-5111' },
                          { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-5111' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-5111' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5111' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-5111' },
                          { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-5111' },
                          { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-5111' },
                          { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-5111' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-5111' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-5111' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-5111' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-5111' },
                          { type: 'link', label: "Core Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corespeechkit-5111' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-5111' },
                          { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-5111' },
                          { type: 'link', label: "Driver Development Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-driverdevelopmentkit-5111' },
                          { type: 'link', label: "Enterprise Data Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisedataguardkit-5111' },
                          { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-5111' },
                          { type: 'link', label: "Graphics Accelerate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-graphicsacceleratekit-5111' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-5111' },
                          { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-5111' },
                          { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-5111' },
                          { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-5111' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-5111' },
                          { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-5111' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-5111' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-5111' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-5111' },
                          { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-5111' },
                          { type: 'link', label: "Pen Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-5111' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-5111' },
                          { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-5111' },
                          { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-5111' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-5111' }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-511' }
                ]
              },
              {
                type: 'category',
                label: "DevEco Testing",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-testing-releasenotes-511' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.1.0(18)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-510' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "OS新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-510' },
                  {
                    type: 'category',
                    label: "OS平台行为变更说明",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-510' },
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-5101' },
                      { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-5101' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-510' },
                      { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-510' },
                      { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-510' },
                      { type: 'link', label: "AR Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arengine-510' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-510' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-510' },
                      { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-510' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-510' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-510' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-510' },
                      { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit-510' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-510' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-510' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-510' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-510' },
                      { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-510' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-510' },
                      { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-510' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-510' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-510' },
                      { type: 'link', label: "Core Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corespeechkit-510' },
                      { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-510' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-510' },
                      { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-510' },
                      { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-510' },
                      { type: 'link', label: "Driver Development Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-driverdevelopmentkit-510' },
                      { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-510' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-510' },
                      { type: 'link', label: "Graphics Accelerate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-graphicsacceleratekit-510' },
                      { type: 'link', label: "Health Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-healthservicekit-510' },
                      { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-510' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-510' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-510' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-510' },
                      { type: 'link', label: "IPC Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ipckit-510' },
                      { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-510' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-510' },
                      { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-510' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-510' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-510' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-510' },
                      { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-510' },
                      { type: 'link', label: "NearLink Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-nearlinkkit-510' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-510' },
                      { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-510' },
                      { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-510' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-510' },
                      { type: 'link', label: "Pen kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-510' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-510' },
                      { type: 'link', label: "Push Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pushkit-510' },
                      { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-510' },
                      { type: 'link', label: "Scan Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scankit-510' },
                      { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-510' },
                      { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-510' },
                      { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-510' },
                      { type: 'link', label: "Status Bar Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-statusbarextensionkit-510' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-510' },
                      { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-510' },
                      { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-510' },
                      { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-510' },
                      { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-510' },
                      { type: 'link', label: "Wear Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-wearengine-510' }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-510-release' },
                  { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/change-description-510-release' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.5(17)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-505-release' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-505' },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-5051' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-5051' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5051' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-5051' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-5051' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-5051' },
                      { type: 'link', label: "File Manager Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-filemanagerservicekit-5051' },
                      { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-5051' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-5051' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-5051' },
                      { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-5051' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-5051' },
                      { type: 'link', label: "Preview Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-previewkit-5051' }
                    ]
                  }
                ]
              },
              { type: 'link', label: "DevEco Studio", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features' }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.4(16)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-504' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-504' },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ads Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-504' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-504' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-504' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-504' },
                      { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-504' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-504' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-504' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-504' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-504' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-504' },
                      { type: 'link', label: "Reader Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-readerkit-504' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-504' }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-504-release' },
                  { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-changelogs-504-release' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.3(15)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-503' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-503' },
                  {
                    type: 'category',
                    label: "OS平台行为变更说明",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-503' },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Release引入的行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-5033' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Beta2引入的行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-5032' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-5032' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Beta1引入的行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-5031' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-5031' }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Release引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5033' },
                          { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit-5033' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-5033' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Beta2引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-5032' },
                          { type: 'link', label: "App Gallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-5032' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-5032' },
                          { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-5032' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5032' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-5032' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-5032' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-5032' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-5032' },
                          { type: 'link', label: "Contacts Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-contactskit-5032' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-5032' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-5032' },
                          { type: 'link', label: "Enterprise DataGuard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisedataguardkit-5032' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-5032' },
                          { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-5032' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-5032' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-5032' },
                          { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-5032' },
                          { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-5032' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-5032' },
                          { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-5032' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-5032' },
                          { type: 'link', label: "Multimodal Awareness Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-multimodalawarenesskit-5032' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-5032' },
                          { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-5032' },
                          { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-5032' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.3(15) Beta1引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-5031' },
                          { type: 'link', label: "Ads Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-5031' },
                          { type: 'link', label: "AppGallery Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-appgallerykit-5031' },
                          { type: 'link', label: "App Linking Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-applinkingkit-5031' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-5031' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-5031' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-5031' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-5031' },
                          { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-5031' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-5031' },
                          { type: 'link', label: "Cloud Foundation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cloudfoundationkit-5031' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-5031' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-5031' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-5031' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-5031' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-5031' },
                          { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-5031' },
                          { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-5031' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-5031' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-5031' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-5031' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-5031' },
                          { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-5031' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-5031' }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: 'link', label: "DevEco Studio", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-503-release' }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.2(14)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-502-release' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-502' },
                  {
                    type: 'category',
                    label: "OS平台行为变更说明",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-502-beta1' },
                      { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b123sp16' },
                      { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b123sp16' }
                    ]
                  },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b123sp18' },
                      { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b123sp18' },
                      { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-b123sp18' },
                      { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b123sp18' },
                      { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b123sp18' },
                      { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b123sp18' },
                      { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit-b123sp18' },
                      { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-b123sp18' },
                      { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-b123sp18' },
                      { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b123sp18' },
                      { type: 'link', label: "Call Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callservicekit-b123sp18' },
                      { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b123sp18' },
                      { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-b123sp18' },
                      { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-b123sp18' },
                      { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-b123sp18' },
                      { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-b123sp18' },
                      { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-b123sp18' },
                      { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-b123sp18' },
                      { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-b123sp18' },
                      { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-b123sp18' },
                      { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-b123sp18' },
                      { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-b123sp18' },
                      { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-b123sp18' },
                      { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-b123sp18' },
                      { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b123sp18' },
                      { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b123sp18' },
                      { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-b123sp18' },
                      { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-b123sp18' },
                      { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-b123sp18' },
                      { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-b123sp18' },
                      { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-b123sp18' },
                      { type: 'link', label: "Push Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pushkit-b123sp18' },
                      { type: 'link', label: "Scan Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scankit-b123sp18' },
                      { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-b123sp18' },
                      { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-b123sp18' },
                      { type: 'link', label: "Status Bar Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-statusbarextensionkit-b123sp18' },
                      { type: 'link', label: "Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-storekit-b123sp18' },
                      { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-b123sp18' },
                      { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-b123sp18' },
                      { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-b123sp18' },
                      { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-b123sp18' },
                      { type: 'link', label: "Weather Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-weatherservicekit-b123sp18' }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-502' },
                  { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-changelogs-502' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.1(13)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-501' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature' },
                  {
                    type: 'category',
                    label: "OS平台行为变更说明",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelog-overview' },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.1(13) Release引入的行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b112' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b112' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.1(13) Beta3引入的行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "OS平台API行为的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b106' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b106' }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.1(13) Release引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b112' },
                          { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-b112' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b112' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-b112' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b112' },
                          { type: 'link', label: "Natural Language Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-naturallanguagekit-b112' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS 5.0.1(13) Beta3引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b105' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b105' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-b105' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b105' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b105' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b105' },
                          { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-b105' },
                          { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-b105' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b105' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b105' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-b105' },
                          { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-b105' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-b105' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-b105' },
                          { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-b105' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-b105' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b105' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b105' },
                          { type: 'link', label: "NearLink Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-nearlinkkit-b105' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-b105' },
                          { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-b105' },
                          { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-b105' },
                          { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-b105' },
                          { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-b105' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-b105' },
                          { type: 'link', label: "Wallet Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-walletkit-b105' }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-501-release' },
                  { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-changelogs-501' }
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "HarmonyOS 5.0.0(12)",
            collapsed: true,
            items: [
              { type: 'link', label: "版本概览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-500' },
              {
                type: 'category',
                label: "OS平台能力",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/os-new-feature-500' },
                  {
                    type: 'category',
                    label: "接口行为变更说明",
                    collapsed: true,
                    items: [
                      { type: 'link', label: "总览", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-overview-release' },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Release引入的接口行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b071' },
                          { type: 'link', label: "针对API 12应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-targeting-api12-b071' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b071' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Beta引入的接口行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b065' },
                          { type: 'link', label: "针对API 12应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-targeting-api12-b065' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta5引入的接口行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b060' },
                          { type: 'link', label: "针对API 12应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-targeting-api12-b060' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b060' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta3引入的接口行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b035' },
                          { type: 'link', label: "针对API 12应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-targeting-api12-b035' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b035' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta2引入的接口行为变更",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "针对所有应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-for-all-apps-b031' },
                          { type: 'link', label: "针对API 12应用的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-targeting-api12-b031' },
                          { type: 'link', label: "UX样式或效果的变更", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/changelogs-ux-b031' }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'category',
                    label: "API变更清单",
                    collapsed: true,
                    items: [
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Beta引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b065' },
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-b065' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b065' },
                          { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-b065' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b065' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b065' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b065' },
                          { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-b065' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b065' },
                          { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-b065' },
                          { type: 'link', label: "Call Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callkit-b065' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b065' },
                          { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-b065' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-b065' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-b065' },
                          { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-b065' },
                          { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-b065' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-b065' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-b065' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-b065' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b065' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b065' },
                          { type: 'link', label: "Natural Language Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-naturallanguagekit-b065' },
                          { type: 'link', label: "Network Boost Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkboostkit-b065' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-b065' },
                          { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-b065' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-b065' },
                          { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-b065' },
                          { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-b065' },
                          { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-b065' },
                          { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-b065' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-b065' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta6引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-b061' },
                          { type: 'link', label: "Ark Data", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b061' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-b061' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b061' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b061' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b061' },
                          { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-b061' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b061' },
                          { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-b061' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-b061' },
                          { type: 'link', label: "Pen Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-b061' },
                          { type: 'link', label: "Service Collaboration Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-servicecollaborationkit-b061' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta5引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b060' },
                          { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-b060' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b060' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b060' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b060' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b060' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b060' },
                          { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-b060' },
                          { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-b060' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-b060' },
                          { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-b060' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b060' },
                          { type: 'link', label: "Natural Language Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-naturallanguagekit-b060' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta3引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b035' },
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-b035' },
                          { type: 'link', label: "Ads Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-b035' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b035' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-b035' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b035' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b035' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b035' },
                          { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit-b035' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b035' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-b035' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-b035' },
                          { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-b035' },
                          { type: 'link', label: "Driver Development Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-driverdevelopmentkit-b035' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-b035' },
                          { type: 'link', label: "Intents Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-intentskit-b035' },
                          { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-b035' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-b035' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b035' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b035' },
                          { type: 'link', label: "MindSpore Lite Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mindsporelitekit-b035' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-b035' },
                          { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-b035' },
                          { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-b035' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-b035' },
                          { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-b035' },
                          { type: 'link', label: "Ringtone Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ringtonekit-b035' },
                          { type: 'link', label: "Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-storekit-b035' },
                          { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-b035' },
                          { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-b035' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-b035' },
                          { type: 'link', label: "Wear Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-wearengine-b035' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta2引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-b031' },
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-b031' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-b031' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-b031' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-b031' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-b031' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-b031' },
                          { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-b031' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-b031' },
                          { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-b031' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-b031' },
                          { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-b031' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-b031' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-b031' },
                          { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-b031' },
                          { type: 'link', label: "Data Protection Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-dataprotectionkit-b031' },
                          { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-b031' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-b031' },
                          { type: 'link', label: "DRM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-drmkit-b031' },
                          { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-b031' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-b031' },
                          { type: 'link', label: "Health Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-healthservicekit-b031' },
                          { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-b031' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-b031' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-b031' },
                          { type: 'link', label: "IPC Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ipckit-b031' },
                          { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-b031' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-b031' },
                          { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-b031' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-b031' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-b031' },
                          { type: 'link', label: "Network Boost Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkboostkit-b031' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-b031' },
                          { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-b031' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-b031' },
                          { type: 'link', label: "Scan Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scankit-b031' },
                          { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-b031' },
                          { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-b031' },
                          { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-b031' },
                          { type: 'link', label: "Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-storekit-b031' },
                          { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-b031' },
                          { type: 'link', label: "UI Design Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-uidesignkit-b031' },
                          { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-b031' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-b031' },
                          { type: 'link', label: "Wallet Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-walletkit-b031' },
                          { type: 'link', label: "Wear Engine", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-wearengine-b031' },
                          { type: 'link', label: "Weather Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-weatherservicekit-b031' }
                        ]
                      },
                      {
                        type: 'category',
                        label: "HarmonyOS NEXT Developer Beta1引入的API",
                        collapsed: true,
                        items: [
                          { type: 'link', label: "Ability Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-hdc' },
                          { type: 'link', label: "Accessibility Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accessibilitykit-hdc' },
                          { type: 'link', label: "Account Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-accountkit-hdc' },
                          { type: 'link', label: "Ads Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-hdc' },
                          { type: 'link', label: "ArkData", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkdata-hdc' },
                          { type: 'link', label: "ArkGraphics 2D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics2d-hdc' },
                          { type: 'link', label: "ArkGraphics 3D", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-hdc' },
                          { type: 'link', label: "ArkTS", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkts-hdc' },
                          { type: 'link', label: "ArkUI", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkui-hdc' },
                          { type: 'link', label: "ArkWeb", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkweb-hdc' },
                          { type: 'link', label: "Asset Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-assetstorekit' },
                          { type: 'link', label: "Audio Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-audiokit-hdc' },
                          { type: 'link', label: "AVSession Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-avsessionkit-hdc' },
                          { type: 'link', label: "Background Tasks Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-backgroundtaskskit-hdc' },
                          { type: 'link', label: "Basic Services Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-basicserviceskit-hdc' },
                          { type: 'link', label: "Calendar Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-calendarkit-hdc' },
                          { type: 'link', label: "Call Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-callkit-hdc' },
                          { type: 'link', label: "Camera Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-camerakit-hdc' },
                          { type: 'link', label: "Car Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-carkit-hdc' },
                          { type: 'link', label: "Cloud Foundation Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cloudfoundationkit-hdc' },
                          { type: 'link', label: "Connectivity Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-connectivitykit-hdc' },
                          { type: 'link', label: "Contacts Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-contactskit-hdc' },
                          { type: 'link', label: "Core File Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corefilekit-hdc' },
                          { type: 'link', label: "Core Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corespeechkit-hdc' },
                          { type: 'link', label: "Core Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-corevisionkit-hdc' },
                          { type: 'link', label: "Crypto Architecture Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-cryptoarchitecturekit-hdc' },
                          { type: 'link', label: "Data Loss Prevention Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-datalosspreventionkit-hdc' },
                          { type: 'link', label: "Device Certificate Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicecertificatekit-hdc' },
                          { type: 'link', label: "Device Security Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-devicesecuritykit-hdc' },
                          { type: 'link', label: "Distributed Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-distributedservicekit-hdc' },
                          { type: 'link', label: "Driver Development Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-driverdevelopmentkit-hdc' },
                          { type: 'link', label: "DRM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-drmkit-hdc' },
                          { type: 'link', label: "Enterprise Data Guard Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-enterprisedataguardkit-hdc' },
                          { type: 'link', label: "Form Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-formkit-hdc' },
                          { type: 'link', label: "Game Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-gameservicekit-hdc' },
                          { type: 'link', label: "Health Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-healthservicekit-hdc' },
                          { type: 'link', label: "IAP Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-iapkit-hdc' },
                          { type: 'link', label: "Image Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imagekit-hdc' },
                          { type: 'link', label: "IME Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-imekit-hdc' },
                          { type: 'link', label: "Input Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-inputkit-hdc' },
                          { type: 'link', label: "Intents Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-intentskit-hdc' },
                          { type: 'link', label: "IPC Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-ipckit-hdc' },
                          { type: 'link', label: "Live View Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-liveviewkit-hdc' },
                          { type: 'link', label: "Localization Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-localizationkit-hdc' },
                          { type: 'link', label: "Location Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-hdc' },
                          { type: 'link', label: "Map Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mapkit-hdc' },
                          { type: 'link', label: "MDM Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mdmkit-hdc' },
                          { type: 'link', label: "Media Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mediakit-hdc' },
                          { type: 'link', label: "Media Library Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-medialibrarykit-hdc' },
                          { type: 'link', label: "MindSpore Lite Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-mindsporelitekit-hdc' },
                          { type: 'link', label: "Natural Language Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-naturallanguagekit-hdc' },
                          { type: 'link', label: "Network Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-networkkit-hdc' },
                          { type: 'link', label: "Notification Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-notificationkit-hdc' },
                          { type: 'link', label: "Online Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-onlineauthenticationkit-hdc' },
                          { type: 'link', label: "Payment Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-paymentkit-hdc' },
                          { type: 'link', label: "PDF Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pdfkit-hdc' },
                          { type: 'link', label: "Pen Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-penkit-hdc' },
                          { type: 'link', label: "Performance Analysis Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-performanceanalysiskit-hdc' },
                          { type: 'link', label: "Preview Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-previewkit-hdc' },
                          { type: 'link', label: "Push Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-pushkit-hdc' },
                          { type: 'link', label: "Remote Communication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-remotecommunicationkit-hdc' },
                          { type: 'link', label: "Scan Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scankit-hdc' },
                          { type: 'link', label: "Scenario Fusion Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-scenariofusionkit-hdc' },
                          { type: 'link', label: "Sensor Service Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sensorservicekit-hdc' },
                          { type: 'link', label: "Service Collaboration Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-servicecollaborationkit-hdc' },
                          { type: 'link', label: "Share Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-sharekit-hdc' },
                          { type: 'link', label: "Speech Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-speechkit-hdc' },
                          { type: 'link', label: "Status Bar Extension Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-statusbarextensionkit-hdc' },
                          { type: 'link', label: "Store Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-storekit-hdc' },
                          { type: 'link', label: "Telephony Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-telephonykit-hdc' },
                          { type: 'link', label: "Test Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-testkit-hdc' },
                          { type: 'link', label: "Universal Keystore Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-universalkeystorekit-hdc' },
                          { type: 'link', label: "User Authentication Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-userauthenticationkit-hdc' },
                          { type: 'link', label: "Vision Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-visionkit-hdc' },
                          { type: 'link', label: "Wallet Kit", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-walletkit-hdc' }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: 'category',
                label: "DevEco Studio",
                collapsed: true,
                items: [
                  { type: 'link', label: "新增和增强特性", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/deveco-studio-new-features-500-release' },
                  { type: 'link', label: "变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-changelog-500-release' }
                ]
              }
            ]
          }
        ]
      },
      { type: 'link', label: "已解决和已知的问题", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/known-issues-baseline' },
      {
        type: 'category',
        label: "应用兼容性说明",
        collapsed: true,
        items: [
          { type: 'link', label: "关于应用兼容性的介绍", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-intro' },
          { type: 'link', label: "影响应用兼容性的关键信息", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-influence-factor' },
          {
            type: 'category',
            label: "应用开发中的兼容性场景开发指导",
            collapsed: true,
            items: [
              {
                type: 'category',
                label: "API兼容性保护和告警屏蔽",
                collapsed: true,
                items: [
                  { type: 'link', label: "ArkTS API兼容性保护", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/arkts-api-compatibility-warning-elim' },
                  { type: 'link', label: "C API兼容性保护", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/c-api-compatibility-warning-elim' },
                  { type: 'link', label: "兼容性告警屏蔽", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/compatibility-warning-suppress' }
                ]
              },
              { type: 'link', label: "CAPI兼容性保护高阶用法", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/c-api-compatibility-warning' },
              { type: 'link', label: "应用升级targetSDKVersion兼容低版本指导", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-upgrade' },
              { type: 'link', label: "应用集成三方库（har包）的兼容性指导", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-third-har' },
              { type: 'link', label: "应用集成“集成态hsp”的兼容性指导", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-share-hsp' },
              { type: 'link', label: "UI自定义组件兼容性指导", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility-ui-component' }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "应用升级适配指导-向6.0.0(20)升级",
        collapsed: true,
        items: [
          { type: 'link', label: "应用升级适配简介", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-upgrade-intro' },
          { type: 'link', label: "开发工具链升级", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/upgrade-tool-chain' },
          { type: 'link', label: "评估API版本变化的影响并适配", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/adapt-api-changes' },
          { type: 'link', label: "在历史版本设备上进行应用的兼容性验证", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/compatibility-verification' },
          { type: 'link', label: "发布最新编译的应用到应用市场", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/publish-new-app' },
          { type: 'link', label: "问题反馈渠道", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/issue-report' }
        ]
      },
      { type: 'link', label: "存量设备API版本使用数量参考", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/sdk-version-percentage' },
      { type: 'link', label: "各版本支持设备型号清单", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/support-device' },
      { type: 'link', label: "文档变更说明", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/doc-updates' },
      { type: 'link', label: "获取支持与帮助", href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/support' }
    ]
  }
];

module.exports = { releaseNotesSidebar };