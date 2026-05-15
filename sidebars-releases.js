// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const releaseNotesSidebar = [
  'dev/release-notes/overview',
  'dev/release-notes/overview-allversion',
  {
    type: 'category',
    label: "HarmonyOS 6.1.1(24) Beta",
    collapsed: true,
    items: [
      'dev/release-notes/overview-611',
      {
        type: 'category',
        label: "OS平台能力",
        collapsed: true,
        items: [
          'dev/release-notes/os-new-feature-611',
          {
            type: 'category',
            label: "API变更清单",
            collapsed: true,
            items: [
              'dev/release-notes/js-apidiff-abilitykit-6111',
              'dev/release-notes/js-apidiff-appgallerykit-6111',
              'dev/release-notes/js-apidiff-arkdata-6111',
              'dev/release-notes/js-apidiff-arkgraphics2d-6111',
              'dev/release-notes/js-apidiff-arkts-6111',
              'dev/release-notes/js-apidiff-arkui-6111',
              'dev/release-notes/js-apidiff-arkweb-6111',
              'dev/release-notes/js-apidiff-audiokit-6111',
              'dev/release-notes/js-apidiff-avsessionkit-6111',
              'dev/release-notes/js-apidiff-backgroundtaskskit-6111',
              'dev/release-notes/js-apidiff-basicserviceskit-6111',
              'dev/release-notes/js-apidiff-callservicekit-6111',
              'dev/release-notes/js-apidiff-camerakit-6111',
              'dev/release-notes/js-apidiff-connectivitykit-6111',
              'dev/release-notes/js-apidiff-corefilekit-6111',
              'dev/release-notes/js-apidiff-corespeechkit-6111',
              'dev/release-notes/js-apidiff-dataprotectionkit-6111',
              'dev/release-notes/js-apidiff-desktopextensionkit-6111',
              'dev/release-notes/js-apidiff-devicesecuritykit-6111',
              'dev/release-notes/js-apidiff-distributedservicekit-6111',
              'dev/release-notes/js-apidiff-enterprisedataguardkit-6111',
              'dev/release-notes/js-apidiff-enterprisethreatprotectionkit-6111',
              'dev/release-notes/js-apidiff-formkit-6111',
              'dev/release-notes/js-apidiff-healthservicekit-6111',
              'dev/release-notes/js-apidiff-imagekit-6111',
              'dev/release-notes/js-apidiff-liveviewkit-6111',
              'dev/release-notes/js-apidiff-mapkit-6111',
              'dev/release-notes/js-apidiff-mdmkit-6111',
              'dev/release-notes/js-apidiff-mediakit-6111',
              'dev/release-notes/js-apidiff-medialibrarykit-6111',
              'dev/release-notes/js-apidiff-multimodalawarenesskit-6111',
              'dev/release-notes/js-apidiff-nearlinkkit-6111',
              'dev/release-notes/js-apidiff-networkboostkit-6111',
              'dev/release-notes/js-apidiff-networkkit-6111',
              'dev/release-notes/js-apidiff-notificationkit-6111',
              'dev/release-notes/js-apidiff-paymentkit-6111',
              'dev/release-notes/js-apidiff-performanceanalysiskit-6111',
              'dev/release-notes/js-apidiff-remotecommunicationkit-6111',
              'dev/release-notes/js-apidiff-screentimeguardkit-6111',
              'dev/release-notes/js-apidiff-speechkit-6111',
              'dev/release-notes/js-apidiff-telephonykit-6111',
              'dev/release-notes/js-apidiff-uidesignkit-6111',
              'dev/release-notes/js-apidiff-universalkeystorekit-6111',
              'dev/release-notes/js-apidiff-visionkit-6111',
              'dev/release-notes/js-apidiff-wearengine-6111'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "DevEco Studio",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-studio-new-features-611'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: "HarmonyOS 6.1.0(23)",
    collapsed: true,
    items: [
      'dev/release-notes/overview-610',
      {
        type: 'category',
        label: "OS平台能力",
        collapsed: true,
        items: [
          'dev/release-notes/os-new-feature-610',
          {
            type: 'category',
            label: "OS平台行为变更说明",
            collapsed: true,
            items: [
              'dev/release-notes/changelogs-overview-610',
              'dev/release-notes/changelogs-for-all-apps-6101'
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
                  'dev/release-notes/js-apidiff-abilitykit-6102',
                  'dev/release-notes/js-apidiff-arkui-6102',
                  'dev/release-notes/js-apidiff-basicserviceskit-6102',
                  'dev/release-notes/js-apidiff-connectivitykit-6102',
                  'dev/release-notes/js-apidiff-corefilekit-6102',
                  'dev/release-notes/js-apidiff-ipckit-6102',
                  'dev/release-notes/js-apidiff-locationkit-6102',
                  'dev/release-notes/js-apidiff-mdmkit-6102',
                  'dev/release-notes/js-apidiff-medialibrarykit-6102',
                  'dev/release-notes/js-apidiff-networkkit-6102',
                  'dev/release-notes/js-apidiff-paymentkit-6102',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6102',
                  'dev/release-notes/js-apidiff-sharekit-6102',
                  'dev/release-notes/js-apidiff-telephonykit-6102'
                ]
              },
              {
                type: 'category',
                label: "6.1.0(23) Beta1引入的变更",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-6101',
                  'dev/release-notes/js-apidiff-accessibilitykit-6101',
                  'dev/release-notes/js-apidiff-accountkit-6101',
                  'dev/release-notes/js-apidiff-appgallerykit-6101',
                  'dev/release-notes/js-apidiff-arengine-6101',
                  'dev/release-notes/js-apidiff-arkdata-6101',
                  'dev/release-notes/js-apidiff-arkgraphics2d-6101',
                  'dev/release-notes/js-apidiff-arkgraphics3d-6101',
                  'dev/release-notes/js-apidiff-arkts-6101',
                  'dev/release-notes/js-apidiff-arkui-6101',
                  'dev/release-notes/js-apidiff-arkweb-6101',
                  'dev/release-notes/js-apidiff-audiokit-6101',
                  'dev/release-notes/js-apidiff-avsessionkit-6101',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6101',
                  'dev/release-notes/js-apidiff-basicserviceskit-6101',
                  'dev/release-notes/js-apidiff-calendarkit-6101',
                  'dev/release-notes/js-apidiff-callservicekit-6101',
                  'dev/release-notes/js-apidiff-camerakit-6101',
                  'dev/release-notes/js-apidiff-cloudfoundationkit-6101',
                  'dev/release-notes/js-apidiff-connectivitykit-6101',
                  'dev/release-notes/js-apidiff-contactskit-6101',
                  'dev/release-notes/js-apidiff-corefilekit-6101',
                  'dev/release-notes/js-apidiff-cryptoarchitecturekit-6101',
                  'dev/release-notes/js-apidiff-dataaugmentationkit-6101',
                  'dev/release-notes/js-apidiff-dataprotectionkit-6101',
                  'dev/release-notes/js-apidiff-desktopextensionkit-6101',
                  'dev/release-notes/js-apidiff-devicecertificatekit-6101',
                  'dev/release-notes/js-apidiff-devicesecuritykit-6101',
                  'dev/release-notes/js-apidiff-distributedservicekit-6101',
                  'dev/release-notes/js-apidiff-enterprisespacekit-6101',
                  'dev/release-notes/js-apidiff-filemanagerservicekit-6101',
                  'dev/release-notes/js-apidiff-formkit-6101',
                  'dev/release-notes/js-apidiff-gameservicekit-6101',
                  'dev/release-notes/js-apidiff-graphicsacceleratekit-6101',
                  'dev/release-notes/js-apidiff-iapkit-6101',
                  'dev/release-notes/js-apidiff-imagekit-6101',
                  'dev/release-notes/js-apidiff-imekit-6101',
                  'dev/release-notes/js-apidiff-inputkit-6101',
                  'dev/release-notes/js-apidiff-ipckit-6101',
                  'dev/release-notes/js-apidiff-liveviewkit-6101',
                  'dev/release-notes/js-apidiff-localizationkit-6101',
                  'dev/release-notes/js-apidiff-locationkit-6101',
                  'dev/release-notes/js-apidiff-mapkit-6101',
                  'dev/release-notes/js-apidiff-mdmkit-6101',
                  'dev/release-notes/js-apidiff-mediakit-6101',
                  'dev/release-notes/js-apidiff-medialibrarykit-6101',
                  'dev/release-notes/js-apidiff-multimodalawarenesskit-6101',
                  'dev/release-notes/js-apidiff-nearlinkkit-6101',
                  'dev/release-notes/js-apidiff-networkkit-6101',
                  'dev/release-notes/js-apidiff-notificationkit-6101',
                  'dev/release-notes/js-apidiff-paymentkit-6101',
                  'dev/release-notes/js-apidiff-pdfkit-6101',
                  'dev/release-notes/js-apidiff-penkit-6101',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6101',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6101',
                  'dev/release-notes/js-apidiff-sensorservicekit-6101',
                  'dev/release-notes/js-apidiff-servicecollaborationkit-6101',
                  'dev/release-notes/js-apidiff-spatialreconkit-6101',
                  'dev/release-notes/js-apidiff-speechkit-6101',
                  'dev/release-notes/js-apidiff-telephonykit-6101',
                  'dev/release-notes/js-apidiff-uidesignkit-6101',
                  'dev/release-notes/js-apidiff-universalkeystorekit-6101',
                  'dev/release-notes/js-apidiff-weatherservicekit-6101'
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
          'dev/release-notes/deveco-studio-new-features-610'
        ]
      },
      {
        type: 'category',
        label: "DevEco Testing",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-testing-releasenotes-610'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: "HarmonyOS 6.0.2(22)",
    collapsed: true,
    items: [
      'dev/release-notes/overview-602',
      {
        type: 'category',
        label: "OS平台能力",
        collapsed: true,
        items: [
          'dev/release-notes/os-new-feature-602',
          {
            type: 'category',
            label: "API变更清单",
            collapsed: true,
            items: [
              'dev/release-notes/js-apidiff-abilitykit-6021',
              'dev/release-notes/js-apidiff-appgallerykit-6021',
              'dev/release-notes/js-apidiff-arkdata-6021',
              'dev/release-notes/js-apidiff-arkgraphics2d-6021',
              'dev/release-notes/js-apidiff-arkgraphics3d-6021',
              'dev/release-notes/js-apidiff-arkts-6021',
              'dev/release-notes/js-apidiff-arkui-6021',
              'dev/release-notes/js-apidiff-arkweb-6021',
              'dev/release-notes/js-apidiff-audiokit-6021',
              'dev/release-notes/js-apidiff-avsessionkit-6021',
              'dev/release-notes/js-apidiff-backgroundtaskskit-6021',
              'dev/release-notes/js-apidiff-basicserviceskit-6021',
              'dev/release-notes/js-apidiff-callservicekit-6021',
              'dev/release-notes/js-apidiff-camerakit-6021',
              'dev/release-notes/js-apidiff-connectivitykit-6021',
              'dev/release-notes/js-apidiff-contactskit-6021',
              'dev/release-notes/js-apidiff-cryptoarchitecturekit-6021',
              'dev/release-notes/js-apidiff-desktopextensionkit-6021',
              'dev/release-notes/js-apidiff-devicecertificatekit-6021',
              'dev/release-notes/js-apidiff-devicesecuritykit-6021',
              'dev/release-notes/js-apidiff-enterprisespacekit-6021',
              'dev/release-notes/js-apidiff-formkit-6021',
              'dev/release-notes/js-apidiff-gameservicekit-6021',
              'dev/release-notes/js-apidiff-imagekit-6021',
              'dev/release-notes/js-apidiff-imekit-6021',
              'dev/release-notes/js-apidiff-inputkit-6021',
              'dev/release-notes/js-apidiff-liveviewkit-6021',
              'dev/release-notes/js-apidiff-mapkit-6021',
              'dev/release-notes/js-apidiff-mdmkit-6021',
              'dev/release-notes/js-apidiff-mediakit-6021',
              'dev/release-notes/js-apidiff-medialibrarykit-6021',
              'dev/release-notes/js-apidiff-networkkit-6021',
              'dev/release-notes/js-apidiff-notificationkit-6021',
              'dev/release-notes/js-apidiff-pdfkit-6021',
              'dev/release-notes/js-apidiff-performanceanalysiskit-6021',
              'dev/release-notes/js-apidiff-scankit-6021',
              'dev/release-notes/js-apidiff-scenariofusionkit-6021',
              'dev/release-notes/js-apidiff-screentimeguardkit-6021',
              'dev/release-notes/js-apidiff-sensorservicekit-6021',
              'dev/release-notes/js-apidiff-sharekit-6021',
              'dev/release-notes/js-apidiff-telephonykit-6021',
              'dev/release-notes/js-apidiff-testkit-6021',
              'dev/release-notes/js-apidiff-uidesignkit-6021',
              'dev/release-notes/js-apidiff-universalkeystorekit-6021',
              'dev/release-notes/js-apidiff-userauthenticationkit-6021'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "DevEco Studio",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-studio-new-features-602'
        ]
      },
      {
        type: 'category',
        label: "DevEco Testing",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-testing-releasenotes-602'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: "HarmonyOS 6.0.1(21)",
    collapsed: true,
    items: [
      'dev/release-notes/overview-601',
      {
        type: 'category',
        label: "OS平台能力",
        collapsed: true,
        items: [
          'dev/release-notes/os-new-feature-601',
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
                  'dev/release-notes/js-apidiff-abilitykit-6012',
                  'dev/release-notes/js-apidiff-arkui-6012',
                  'dev/release-notes/js-apidiff-arkweb-6012',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6012',
                  'dev/release-notes/js-apidiff-basicserviceskit-6012',
                  'dev/release-notes/js-apidiff-connectivitykit-6012',
                  'dev/release-notes/js-apidiff-medialibrarykit-6012',
                  'dev/release-notes/js-apidiff-notificationkit-6012',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6012'
                ]
              },
              {
                type: 'category',
                label: "6.0.1(21) Beta1引入的API",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-6011',
                  'dev/release-notes/js-apidiff-accessibilitykit-6011',
                  'dev/release-notes/js-apidiff-agentframeworkkit-6011',
                  'dev/release-notes/js-apidiff-arkgraphics2d-6011',
                  'dev/release-notes/js-apidiff-arkgraphics3d-6011',
                  'dev/release-notes/js-apidiff-arkui-6011',
                  'dev/release-notes/js-apidiff-arkweb-6011',
                  'dev/release-notes/js-apidiff-audiokit-6011',
                  'dev/release-notes/js-apidiff-avsessionkit-6011',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6011',
                  'dev/release-notes/js-apidiff-basicserviceskit-6011',
                  'dev/release-notes/js-apidiff-calendarkit-6011',
                  'dev/release-notes/js-apidiff-camerakit-6011',
                  'dev/release-notes/js-apidiff-cloudfoundationkit-6011',
                  'dev/release-notes/js-apidiff-connectivitykit-6011',
                  'dev/release-notes/js-apidiff-corefilekit-6011',
                  'dev/release-notes/js-apidiff-cryptoarchitecturekit-6011',
                  'dev/release-notes/js-apidiff-dataprotectionkit-6011',
                  'dev/release-notes/js-apidiff-devicecertificatekit-6011',
                  'dev/release-notes/js-apidiff-devicesecuritykit-6011',
                  'dev/release-notes/js-apidiff-enterprisespacekit-6011',
                  'dev/release-notes/js-apidiff-gameservicekit-6011',
                  'dev/release-notes/js-apidiff-imekit-6011',
                  'dev/release-notes/js-apidiff-locationkit-6011',
                  'dev/release-notes/js-apidiff-mapkit-6011',
                  'dev/release-notes/js-apidiff-mdmkit-6011',
                  'dev/release-notes/js-apidiff-mediakit-6011',
                  'dev/release-notes/js-apidiff-medialibrarykit-6011',
                  'dev/release-notes/js-apidiff-nearlinkkit-6011',
                  'dev/release-notes/js-apidiff-networkkit-6011',
                  'dev/release-notes/js-apidiff-onlineauthenticationkit-6011',
                  'dev/release-notes/js-apidiff-pdfkit-6011',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6011',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6011',
                  'dev/release-notes/js-apidiff-scenariofusionkit-6011',
                  'dev/release-notes/js-apidiff-sharekit-6011',
                  'dev/release-notes/js-apidiff-spatialreconkit-6011',
                  'dev/release-notes/js-apidiff-speechkit-6011',
                  'dev/release-notes/js-apidiff-telephonykit-6011',
                  'dev/release-notes/js-apidiff-uidesignkit-6011'
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
          'dev/release-notes/deveco-studio-new-features-601'
        ]
      },
      {
        type: 'category',
        label: "DevEco Testing",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-testing-releasenotes-601'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: "HarmonyOS 6.0.0(20)",
    collapsed: true,
    items: [
      'dev/release-notes/overview-600',
      {
        type: 'category',
        label: "OS平台能力",
        collapsed: true,
        items: [
          'dev/release-notes/os-new-feature-600',
          {
            type: 'category',
            label: "OS平台行为变更说明",
            collapsed: true,
            items: [
              'dev/release-notes/changelogs-overview-600',
              {
                type: 'category',
                label: "6.0.0(20) Beta5引入的行为变更",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-for-all-apps-6004'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta3引入的行为变更",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-for-all-apps-6003'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta2引入的行为变更",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-for-all-apps-6002',
                  'dev/release-notes/changelogs-ux-6002'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta1引入的行为变更",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-for-all-apps-6001',
                  'dev/release-notes/changelogs-ux-6001'
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
                  'dev/release-notes/js-apidiff-adskit-6004',
                  'dev/release-notes/js-apidiff-arkdata-6004',
                  'dev/release-notes/js-apidiff-arkui-6004',
                  'dev/release-notes/js-apidiff-arkweb-6004',
                  'dev/release-notes/js-apidiff-basicserviceskit-6004',
                  'dev/release-notes/js-apidiff-camerakit-6004',
                  'dev/release-notes/js-apidiff-connectivitykit-6004',
                  'dev/release-notes/js-apidiff-corefilekit-6004',
                  'dev/release-notes/js-apidiff-mdmkit-6004',
                  'dev/release-notes/js-apidiff-mediakit-6004',
                  'dev/release-notes/js-apidiff-multimodalawarenesskit-6004',
                  'dev/release-notes/js-apidiff-networkkit-6004',
                  'dev/release-notes/js-apidiff-notificationkit-6004',
                  'dev/release-notes/js-apidiff-telephonykit-6004',
                  'dev/release-notes/js-apidiff-userauthenticationkit-6004'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta3引入的API",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-6003',
                  'dev/release-notes/js-apidiff-accessibilitykit-6003',
                  'dev/release-notes/js-apidiff-accountkit-6003',
                  'dev/release-notes/js-apidiff-agentframeworkkit-6003',
                  'dev/release-notes/js-apidiff-appgallerykit-6003',
                  'dev/release-notes/js-apidiff-arkdata-6003',
                  'dev/release-notes/js-apidiff-arkgraphics2d-6003',
                  'dev/release-notes/js-apidiff-arkgraphics3d-6003',
                  'dev/release-notes/js-apidiff-arkts-6003',
                  'dev/release-notes/js-apidiff-arkui-6003',
                  'dev/release-notes/js-apidiff-arkweb-6003',
                  'dev/release-notes/js-apidiff-audiokit-6003',
                  'dev/release-notes/js-apidiff-avsessionkit-6003',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6003',
                  'dev/release-notes/js-apidiff-basicserviceskit-6003',
                  'dev/release-notes/js-apidiff-calendarkit-6003',
                  'dev/release-notes/js-apidiff-camerakit-6003',
                  'dev/release-notes/js-apidiff-connectivitykit-6003',
                  'dev/release-notes/js-apidiff-corefilekit-6003',
                  'dev/release-notes/js-apidiff-dataaugmentationkit-6003',
                  'dev/release-notes/js-apidiff-desktopextensionkit-6003',
                  'dev/release-notes/js-apidiff-devicecertificatekit-6003',
                  'dev/release-notes/js-apidiff-devicesecuritykit-6003',
                  'dev/release-notes/js-apidiff-distributedservicekit-6003',
                  'dev/release-notes/js-apidiff-enterprisedataguardkit-6003',
                  'dev/release-notes/js-apidiff-enterprisespacekit-6003',
                  'dev/release-notes/js-apidiff-formkit-6003',
                  'dev/release-notes/js-apidiff-gameservicekit-6003',
                  'dev/release-notes/js-apidiff-iapkit-6003',
                  'dev/release-notes/js-apidiff-imagekit-6003',
                  'dev/release-notes/js-apidiff-imekit-6003',
                  'dev/release-notes/js-apidiff-inputkit-6003',
                  'dev/release-notes/js-apidiff-liveviewkit-6003',
                  'dev/release-notes/js-apidiff-localizationkit-6003',
                  'dev/release-notes/js-apidiff-locationkit-6003',
                  'dev/release-notes/js-apidiff-mapkit-6003',
                  'dev/release-notes/js-apidiff-mdmkit-6003',
                  'dev/release-notes/js-apidiff-mediakit-6003',
                  'dev/release-notes/js-apidiff-medialibrarykit-6003',
                  'dev/release-notes/js-apidiff-networkboostkit-6003',
                  'dev/release-notes/js-apidiff-networkkit-6003',
                  'dev/release-notes/js-apidiff-notificationkit-6003',
                  'dev/release-notes/js-apidiff-onlineauthenticationkit-6003',
                  'dev/release-notes/js-apidiff-paymentkit-6003',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6003',
                  'dev/release-notes/js-apidiff-pushkit-6003',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6003',
                  'dev/release-notes/js-apidiff-scenariofusionkit-6003',
                  'dev/release-notes/js-apidiff-servicecollaborationkit-6003',
                  'dev/release-notes/js-apidiff-sharekit-6003',
                  'dev/release-notes/js-apidiff-testkit-6003',
                  'dev/release-notes/js-apidiff-uidesignkit-6003',
                  'dev/release-notes/js-apidiff-universalkeystorekit-6003',
                  'dev/release-notes/js-apidiff-userauthenticationkit-6003'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta2引入的API",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-6002',
                  'dev/release-notes/js-apidiff-accessibilitykit-6002',
                  'dev/release-notes/js-apidiff-accountkit-6002',
                  'dev/release-notes/js-apidiff-appgallerykit-6002',
                  'dev/release-notes/js-apidiff-arengine-6002',
                  'dev/release-notes/js-apidiff-arkdata-6002',
                  'dev/release-notes/js-apidiff-arkgraphics2d-6002',
                  'dev/release-notes/js-apidiff-arkts-6002',
                  'dev/release-notes/js-apidiff-arkui-6002',
                  'dev/release-notes/js-apidiff-arkweb-6002',
                  'dev/release-notes/js-apidiff-audiokit-6002',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6002',
                  'dev/release-notes/js-apidiff-basicserviceskit-6002',
                  'dev/release-notes/js-apidiff-callservicekit-6002',
                  'dev/release-notes/js-apidiff-carkit-6002',
                  'dev/release-notes/js-apidiff-corefilekit-6002',
                  'dev/release-notes/js-apidiff-corevisionkit-6002',
                  'dev/release-notes/js-apidiff-dataaugmentationkit-6002',
                  'dev/release-notes/js-apidiff-dataprotectionkit-6002',
                  'dev/release-notes/js-apidiff-devicesecuritykit-6002',
                  'dev/release-notes/js-apidiff-distributedservicekit-6002',
                  'dev/release-notes/js-apidiff-formkit-6002',
                  'dev/release-notes/js-apidiff-gameservicekit-6002',
                  'dev/release-notes/js-apidiff-imagekit-6002',
                  'dev/release-notes/js-apidiff-imekit-6002',
                  'dev/release-notes/js-apidiff-inputkit-6002',
                  'dev/release-notes/js-apidiff-intentskit-6002',
                  'dev/release-notes/js-apidiff-liveviewkit-6002',
                  'dev/release-notes/js-apidiff-localizationkit-6002',
                  'dev/release-notes/js-apidiff-mapkit-6002',
                  'dev/release-notes/js-apidiff-mdmkit-6002',
                  'dev/release-notes/js-apidiff-mediakit-6002',
                  'dev/release-notes/js-apidiff-medialibrarykit-6002',
                  'dev/release-notes/js-apidiff-multimodalawarenesskit-6002',
                  'dev/release-notes/js-apidiff-networkkit-6002',
                  'dev/release-notes/js-apidiff-pdfkit-6002',
                  'dev/release-notes/js-apidiff-penkit-6002',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6002',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6002',
                  'dev/release-notes/js-apidiff-screentimeguardkit-6002',
                  'dev/release-notes/js-apidiff-sensorservicekit-6002',
                  'dev/release-notes/js-apidiff-sharekit-6002',
                  'dev/release-notes/js-apidiff-telephonykit-6002',
                  'dev/release-notes/js-apidiff-uidesignkit-6002'
                ]
              },
              {
                type: 'category',
                label: "6.0.0(20) Beta1引入的API",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-6001',
                  'dev/release-notes/js-apidiff-accessibilitykit-6001',
                  'dev/release-notes/js-apidiff-arengine-6001',
                  'dev/release-notes/js-apidiff-arkdata-6001',
                  'dev/release-notes/js-apidiff-arkgraphics2d-6001',
                  'dev/release-notes/js-apidiff-arkgraphics3d-6001',
                  'dev/release-notes/js-apidiff-arkts-6001',
                  'dev/release-notes/js-apidiff-arkui-6001',
                  'dev/release-notes/js-apidiff-arkweb-6001',
                  'dev/release-notes/js-apidiff-assetstorekit-6001',
                  'dev/release-notes/js-apidiff-audiokit-6001',
                  'dev/release-notes/js-apidiff-avsessionkit-6001',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-6001',
                  'dev/release-notes/js-apidiff-basicserviceskit-6001',
                  'dev/release-notes/js-apidiff-camerakit-6001',
                  'dev/release-notes/js-apidiff-connectivitykit-6001',
                  'dev/release-notes/js-apidiff-corefilekit-6001',
                  'dev/release-notes/js-apidiff-cryptoarchitecturekit-6001',
                  'dev/release-notes/js-apidiff-dataaugmentationkit-6001',
                  'dev/release-notes/js-apidiff-dataprotectionkit-6001',
                  'dev/release-notes/js-apidiff-devicecertificatekit-6001',
                  'dev/release-notes/js-apidiff-devicesecuritykit-6001',
                  'dev/release-notes/js-apidiff-distributedservicekit-6001',
                  'dev/release-notes/js-apidiff-enterprisespacekit-6001',
                  'dev/release-notes/js-apidiff-formkit-6001',
                  'dev/release-notes/js-apidiff-graphicsacceleratekit-6001',
                  'dev/release-notes/js-apidiff-imagekit-6001',
                  'dev/release-notes/js-apidiff-imekit-6001',
                  'dev/release-notes/js-apidiff-inputkit-6001',
                  'dev/release-notes/js-apidiff-localizationkit-6001',
                  'dev/release-notes/js-apidiff-locationkit-6001',
                  'dev/release-notes/js-apidiff-mdmkit-6001',
                  'dev/release-notes/js-apidiff-mediakit-6001',
                  'dev/release-notes/js-apidiff-medialibrarykit-6001',
                  'dev/release-notes/js-apidiff-multimodalawarenesskit-6001',
                  'dev/release-notes/js-apidiff-notificationkit-6001',
                  'dev/release-notes/js-apidiff-onlineauthenticationkit-6001',
                  'dev/release-notes/js-apidiff-penkit-6001',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-6001',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-6001',
                  'dev/release-notes/js-apidiff-screentimeguardkit-6001',
                  'dev/release-notes/js-apidiff-sharekit-6001',
                  'dev/release-notes/js-apidiff-testkit-6001',
                  'dev/release-notes/js-apidiff-uidesignkit-6001',
                  'dev/release-notes/js-apidiff-universalkeystorekit-6001',
                  'dev/release-notes/js-apidiff-userauthenticationkit-6001'
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
          'dev/release-notes/deveco-studio-new-features-600',
          'dev/release-notes/change-description-600-beta1'
        ]
      },
      {
        type: 'category',
        label: "DevEco Testing",
        collapsed: true,
        items: [
          'dev/release-notes/deveco-testing-releasenotes-600'
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
          'dev/release-notes/overview-511-beta1',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-511-beta1',
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
                      'dev/release-notes/js-apidiff-accountkit-5112',
                      'dev/release-notes/js-apidiff-arengine-5112',
                      'dev/release-notes/js-apidiff-arkui-5112',
                      'dev/release-notes/js-apidiff-connectivitykit-5112',
                      'dev/release-notes/js-apidiff-intentskit-5112',
                      'dev/release-notes/js-apidiff-mediakit-5112',
                      'dev/release-notes/js-apidiff-multimodalawarenesskit-5112',
                      'dev/release-notes/js-apidiff-penkit-5112',
                      'dev/release-notes/js-apidiff-sensorservicekit-5112'
                    ]
                  },
                  {
                    type: 'category',
                    label: "5.1.1(19) Beta1引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-5111',
                      'dev/release-notes/js-apidiff-accountkit-5111',
                      'dev/release-notes/js-apidiff-appgallerykit-5111',
                      'dev/release-notes/js-apidiff-arkgraphics2d-5111',
                      'dev/release-notes/js-apidiff-arkgraphics3d-5111',
                      'dev/release-notes/js-apidiff-arkts-5111',
                      'dev/release-notes/js-apidiff-arkui-5111',
                      'dev/release-notes/js-apidiff-arkweb-5111',
                      'dev/release-notes/js-apidiff-audiokit-5111',
                      'dev/release-notes/js-apidiff-avsessionkit-5111',
                      'dev/release-notes/js-apidiff-backgroundtaskskit-5111',
                      'dev/release-notes/js-apidiff-basicserviceskit-5111',
                      'dev/release-notes/js-apidiff-camerakit-5111',
                      'dev/release-notes/js-apidiff-connectivitykit-5111',
                      'dev/release-notes/js-apidiff-corefilekit-5111',
                      'dev/release-notes/js-apidiff-corespeechkit-5111',
                      'dev/release-notes/js-apidiff-devicesecuritykit-5111',
                      'dev/release-notes/js-apidiff-distributedservicekit-5111',
                      'dev/release-notes/js-apidiff-driverdevelopmentkit-5111',
                      'dev/release-notes/js-apidiff-enterprisedataguardkit-5111',
                      'dev/release-notes/js-apidiff-formkit-5111',
                      'dev/release-notes/js-apidiff-graphicsacceleratekit-5111',
                      'dev/release-notes/js-apidiff-imekit-5111',
                      'dev/release-notes/js-apidiff-liveviewkit-5111',
                      'dev/release-notes/js-apidiff-localizationkit-5111',
                      'dev/release-notes/js-apidiff-locationkit-5111',
                      'dev/release-notes/js-apidiff-mapkit-5111',
                      'dev/release-notes/js-apidiff-mdmkit-5111',
                      'dev/release-notes/js-apidiff-mediakit-5111',
                      'dev/release-notes/js-apidiff-medialibrarykit-5111',
                      'dev/release-notes/js-apidiff-networkkit-5111',
                      'dev/release-notes/js-apidiff-paymentkit-5111',
                      'dev/release-notes/js-apidiff-penkit-5111',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-5111',
                      'dev/release-notes/js-apidiff-telephonykit-5111',
                      'dev/release-notes/js-apidiff-uidesignkit-5111',
                      'dev/release-notes/js-apidiff-visionkit-5111'
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
              'dev/release-notes/deveco-studio-new-features-511'
            ]
          },
          {
            type: 'category',
            label: "DevEco Testing",
            collapsed: true,
            items: [
              'dev/release-notes/deveco-testing-releasenotes-511'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.1.0(18)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-510',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-510',
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-overview-510',
                  'dev/release-notes/changelogs-for-all-apps-5101',
                  'dev/release-notes/changelogs-ux-5101'
                ]
              },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-510',
                  'dev/release-notes/js-apidiff-accessibilitykit-510',
                  'dev/release-notes/js-apidiff-accountkit-510',
                  'dev/release-notes/js-apidiff-arengine-510',
                  'dev/release-notes/js-apidiff-arkdata-510',
                  'dev/release-notes/js-apidiff-arkgraphics2d-510',
                  'dev/release-notes/js-apidiff-arkgraphics3d-510',
                  'dev/release-notes/js-apidiff-arkts-510',
                  'dev/release-notes/js-apidiff-arkui-510',
                  'dev/release-notes/js-apidiff-arkweb-510',
                  'dev/release-notes/js-apidiff-assetstorekit-510',
                  'dev/release-notes/js-apidiff-audiokit-510',
                  'dev/release-notes/js-apidiff-avsessionkit-510',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-510',
                  'dev/release-notes/js-apidiff-basicserviceskit-510',
                  'dev/release-notes/js-apidiff-calendarkit-510',
                  'dev/release-notes/js-apidiff-camerakit-510',
                  'dev/release-notes/js-apidiff-carkit-510',
                  'dev/release-notes/js-apidiff-connectivitykit-510',
                  'dev/release-notes/js-apidiff-corefilekit-510',
                  'dev/release-notes/js-apidiff-corespeechkit-510',
                  'dev/release-notes/js-apidiff-cryptoarchitecturekit-510',
                  'dev/release-notes/js-apidiff-devicecertificatekit-510',
                  'dev/release-notes/js-apidiff-devicesecuritykit-510',
                  'dev/release-notes/js-apidiff-distributedservicekit-510',
                  'dev/release-notes/js-apidiff-driverdevelopmentkit-510',
                  'dev/release-notes/js-apidiff-formkit-510',
                  'dev/release-notes/js-apidiff-gameservicekit-510',
                  'dev/release-notes/js-apidiff-graphicsacceleratekit-510',
                  'dev/release-notes/js-apidiff-healthservicekit-510',
                  'dev/release-notes/js-apidiff-iapkit-510',
                  'dev/release-notes/js-apidiff-imagekit-510',
                  'dev/release-notes/js-apidiff-imekit-510',
                  'dev/release-notes/js-apidiff-inputkit-510',
                  'dev/release-notes/js-apidiff-ipckit-510',
                  'dev/release-notes/js-apidiff-localizationkit-510',
                  'dev/release-notes/js-apidiff-locationkit-510',
                  'dev/release-notes/js-apidiff-mapkit-510',
                  'dev/release-notes/js-apidiff-mdmkit-510',
                  'dev/release-notes/js-apidiff-mediakit-510',
                  'dev/release-notes/js-apidiff-medialibrarykit-510',
                  'dev/release-notes/js-apidiff-multimodalawarenesskit-510',
                  'dev/release-notes/js-apidiff-nearlinkkit-510',
                  'dev/release-notes/js-apidiff-networkkit-510',
                  'dev/release-notes/js-apidiff-notificationkit-510',
                  'dev/release-notes/js-apidiff-onlineauthenticationkit-510',
                  'dev/release-notes/js-apidiff-pdfkit-510',
                  'dev/release-notes/js-apidiff-penkit-510',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-510',
                  'dev/release-notes/js-apidiff-pushkit-510',
                  'dev/release-notes/js-apidiff-remotecommunicationkit-510',
                  'dev/release-notes/js-apidiff-scankit-510',
                  'dev/release-notes/js-apidiff-scenariofusionkit-510',
                  'dev/release-notes/js-apidiff-sensorservicekit-510',
                  'dev/release-notes/js-apidiff-sharekit-510',
                  'dev/release-notes/js-apidiff-statusbarextensionkit-510',
                  'dev/release-notes/js-apidiff-telephonykit-510',
                  'dev/release-notes/js-apidiff-testkit-510',
                  'dev/release-notes/js-apidiff-uidesignkit-510',
                  'dev/release-notes/js-apidiff-userauthenticationkit-510',
                  'dev/release-notes/js-apidiff-visionkit-510',
                  'dev/release-notes/js-apidiff-wearengine-510'
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              'dev/release-notes/deveco-studio-new-features-510-release',
              'dev/release-notes/change-description-510-release'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.5(17)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-505-release',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-505',
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-5051',
                  'dev/release-notes/js-apidiff-arkdata-5051',
                  'dev/release-notes/js-apidiff-arkui-5051',
                  'dev/release-notes/js-apidiff-avsessionkit-5051',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-5051',
                  'dev/release-notes/js-apidiff-connectivitykit-5051',
                  'dev/release-notes/js-apidiff-filemanagerservicekit-5051',
                  'dev/release-notes/js-apidiff-iapkit-5051',
                  'dev/release-notes/js-apidiff-imekit-5051',
                  'dev/release-notes/js-apidiff-mediakit-5051',
                  'dev/release-notes/js-apidiff-paymentkit-5051',
                  'dev/release-notes/js-apidiff-pdfkit-5051',
                  'dev/release-notes/js-apidiff-previewkit-5051'
                ]
              }
            ]
          },
          'dev/release-notes/deveco-studio-new-features'
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.4(16)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-504',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-504',
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-adskit-504',
                  'dev/release-notes/js-apidiff-arkui-504',
                  'dev/release-notes/js-apidiff-arkweb-504',
                  'dev/release-notes/js-apidiff-avsessionkit-504',
                  'dev/release-notes/js-apidiff-backgroundtaskskit-504',
                  'dev/release-notes/js-apidiff-connectivitykit-504',
                  'dev/release-notes/js-apidiff-inputkit-504',
                  'dev/release-notes/js-apidiff-locationkit-504',
                  'dev/release-notes/js-apidiff-medialibrarykit-504',
                  'dev/release-notes/js-apidiff-networkkit-504',
                  'dev/release-notes/js-apidiff-readerkit-504',
                  'dev/release-notes/js-apidiff-telephonykit-504'
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              'dev/release-notes/ide-504-release',
              'dev/release-notes/ide-changelogs-504-release'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.3(15)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-503',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-503',
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-overview-503',
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.3(15) Release引入的行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-5033'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.3(15) Beta2引入的行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-5032',
                      'dev/release-notes/changelogs-ux-5032'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.3(15) Beta1引入的行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-5031',
                      'dev/release-notes/changelogs-ux-5031'
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
                      'dev/release-notes/js-apidiff-arkui-5033',
                      'dev/release-notes/js-apidiff-assetstorekit-5033',
                      'dev/release-notes/js-apidiff-imekit-5033'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.3(15) Beta2引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-5032',
                      'dev/release-notes/js-apidiff-appgallerykit-5032',
                      'dev/release-notes/js-apidiff-arkdata-5032',
                      'dev/release-notes/js-apidiff-arkgraphics3d-5032',
                      'dev/release-notes/js-apidiff-arkui-5032',
                      'dev/release-notes/js-apidiff-arkweb-5032',
                      'dev/release-notes/js-apidiff-basicserviceskit-5032',
                      'dev/release-notes/js-apidiff-camerakit-5032',
                      'dev/release-notes/js-apidiff-connectivitykit-5032',
                      'dev/release-notes/js-apidiff-contactskit-5032',
                      'dev/release-notes/js-apidiff-corefilekit-5032',
                      'dev/release-notes/js-apidiff-devicesecuritykit-5032',
                      'dev/release-notes/js-apidiff-enterprisedataguardkit-5032',
                      'dev/release-notes/js-apidiff-gameservicekit-5032',
                      'dev/release-notes/js-apidiff-iapkit-5032',
                      'dev/release-notes/js-apidiff-imagekit-5032',
                      'dev/release-notes/js-apidiff-imekit-5032',
                      'dev/release-notes/js-apidiff-inputkit-5032',
                      'dev/release-notes/js-apidiff-localizationkit-5032',
                      'dev/release-notes/js-apidiff-mapkit-5032',
                      'dev/release-notes/js-apidiff-mdmkit-5032',
                      'dev/release-notes/js-apidiff-medialibrarykit-5032',
                      'dev/release-notes/js-apidiff-multimodalawarenesskit-5032',
                      'dev/release-notes/js-apidiff-networkkit-5032',
                      'dev/release-notes/js-apidiff-remotecommunicationkit-5032',
                      'dev/release-notes/js-apidiff-speechkit-5032'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.3(15) Beta1引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-5031',
                      'dev/release-notes/js-apidiff-adskit-5031',
                      'dev/release-notes/js-apidiff-appgallerykit-5031',
                      'dev/release-notes/js-apidiff-applinkingkit-5031',
                      'dev/release-notes/js-apidiff-arkdata-5031',
                      'dev/release-notes/js-apidiff-arkgraphics2d-5031',
                      'dev/release-notes/js-apidiff-arkui-5031',
                      'dev/release-notes/js-apidiff-arkweb-5031',
                      'dev/release-notes/js-apidiff-backgroundtaskskit-5031',
                      'dev/release-notes/js-apidiff-basicserviceskit-5031',
                      'dev/release-notes/js-apidiff-cloudfoundationkit-5031',
                      'dev/release-notes/js-apidiff-connectivitykit-5031',
                      'dev/release-notes/js-apidiff-corefilekit-5031',
                      'dev/release-notes/js-apidiff-gameservicekit-5031',
                      'dev/release-notes/js-apidiff-imagekit-5031',
                      'dev/release-notes/js-apidiff-imekit-5031',
                      'dev/release-notes/js-apidiff-liveviewkit-5031',
                      'dev/release-notes/js-apidiff-mdmkit-5031',
                      'dev/release-notes/js-apidiff-mediakit-5031',
                      'dev/release-notes/js-apidiff-medialibrarykit-5031',
                      'dev/release-notes/js-apidiff-networkkit-5031',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-5031',
                      'dev/release-notes/js-apidiff-sharekit-5031',
                      'dev/release-notes/js-apidiff-visionkit-5031'
                    ]
                  }
                ]
              }
            ]
          },
          'dev/release-notes/deveco-studio-new-features-503-release'
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.2(14)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-502-release',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-502',
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-overview-502-beta1',
                  'dev/release-notes/changelogs-for-all-apps-b123sp16',
                  'dev/release-notes/changelogs-ux-b123sp16'
                ]
              },
              {
                type: 'category',
                label: "API变更清单",
                collapsed: true,
                items: [
                  'dev/release-notes/js-apidiff-abilitykit-b123sp18',
                  'dev/release-notes/js-apidiff-arkdata-b123sp18',
                  'dev/release-notes/js-apidiff-arkgraphics2d-b123sp18',
                  'dev/release-notes/js-apidiff-arkts-b123sp18',
                  'dev/release-notes/js-apidiff-arkui-b123sp18',
                  'dev/release-notes/js-apidiff-arkweb-b123sp18',
                  'dev/release-notes/js-apidiff-assetstorekit-b123sp18',
                  'dev/release-notes/js-apidiff-audiokit-b123sp18',
                  'dev/release-notes/js-apidiff-avsessionkit-b123sp18',
                  'dev/release-notes/js-apidiff-basicserviceskit-b123sp18',
                  'dev/release-notes/js-apidiff-callservicekit-b123sp18',
                  'dev/release-notes/js-apidiff-camerakit-b123sp18',
                  'dev/release-notes/js-apidiff-connectivitykit-b123sp18',
                  'dev/release-notes/js-apidiff-corefilekit-b123sp18',
                  'dev/release-notes/js-apidiff-corevisionkit-b123sp18',
                  'dev/release-notes/js-apidiff-devicecertificatekit-b123sp18',
                  'dev/release-notes/js-apidiff-gameservicekit-b123sp18',
                  'dev/release-notes/js-apidiff-iapkit-b123sp18',
                  'dev/release-notes/js-apidiff-imagekit-b123sp18',
                  'dev/release-notes/js-apidiff-imekit-b123sp18',
                  'dev/release-notes/js-apidiff-inputkit-b123sp18',
                  'dev/release-notes/js-apidiff-liveviewkit-b123sp18',
                  'dev/release-notes/js-apidiff-locationkit-b123sp18',
                  'dev/release-notes/js-apidiff-mdmkit-b123sp18',
                  'dev/release-notes/js-apidiff-mediakit-b123sp18',
                  'dev/release-notes/js-apidiff-medialibrarykit-b123sp18',
                  'dev/release-notes/js-apidiff-networkkit-b123sp18',
                  'dev/release-notes/js-apidiff-onlineauthenticationkit-b123sp18',
                  'dev/release-notes/js-apidiff-paymentkit-b123sp18',
                  'dev/release-notes/js-apidiff-pdfkit-b123sp18',
                  'dev/release-notes/js-apidiff-performanceanalysiskit-b123sp18',
                  'dev/release-notes/js-apidiff-pushkit-b123sp18',
                  'dev/release-notes/js-apidiff-scankit-b123sp18',
                  'dev/release-notes/js-apidiff-scenariofusionkit-b123sp18',
                  'dev/release-notes/js-apidiff-speechkit-b123sp18',
                  'dev/release-notes/js-apidiff-statusbarextensionkit-b123sp18',
                  'dev/release-notes/js-apidiff-storekit-b123sp18',
                  'dev/release-notes/js-apidiff-telephonykit-b123sp18',
                  'dev/release-notes/js-apidiff-testkit-b123sp18',
                  'dev/release-notes/js-apidiff-userauthenticationkit-b123sp18',
                  'dev/release-notes/js-apidiff-visionkit-b123sp18',
                  'dev/release-notes/js-apidiff-weatherservicekit-b123sp18'
                ]
              }
            ]
          },
          {
            type: 'category',
            label: "DevEco Studio",
            collapsed: true,
            items: [
              'dev/release-notes/deveco-studio-new-features-502',
              'dev/release-notes/ide-changelogs-502'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.1(13)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-501',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature',
              {
                type: 'category',
                label: "OS平台行为变更说明",
                collapsed: true,
                items: [
                  'dev/release-notes/changelog-overview',
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.1(13) Release引入的行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b112',
                      'dev/release-notes/changelogs-ux-b112'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.1(13) Beta3引入的行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b106',
                      'dev/release-notes/changelogs-ux-b106'
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
                      'dev/release-notes/js-apidiff-arkui-b112',
                      'dev/release-notes/js-apidiff-audiokit-b112',
                      'dev/release-notes/js-apidiff-camerakit-b112',
                      'dev/release-notes/js-apidiff-imagekit-b112',
                      'dev/release-notes/js-apidiff-mediakit-b112',
                      'dev/release-notes/js-apidiff-naturallanguagekit-b112'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS 5.0.1(13) Beta3引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-b105',
                      'dev/release-notes/js-apidiff-arkdata-b105',
                      'dev/release-notes/js-apidiff-arkgraphics2d-b105',
                      'dev/release-notes/js-apidiff-arkts-b105',
                      'dev/release-notes/js-apidiff-arkui-b105',
                      'dev/release-notes/js-apidiff-arkweb-b105',
                      'dev/release-notes/js-apidiff-avsessionkit-b105',
                      'dev/release-notes/js-apidiff-backgroundtaskskit-b105',
                      'dev/release-notes/js-apidiff-basicserviceskit-b105',
                      'dev/release-notes/js-apidiff-camerakit-b105',
                      'dev/release-notes/js-apidiff-connectivitykit-b105',
                      'dev/release-notes/js-apidiff-devicecertificatekit-b105',
                      'dev/release-notes/js-apidiff-gameservicekit-b105',
                      'dev/release-notes/js-apidiff-imagekit-b105',
                      'dev/release-notes/js-apidiff-inputkit-b105',
                      'dev/release-notes/js-apidiff-mapkit-b105',
                      'dev/release-notes/js-apidiff-mediakit-b105',
                      'dev/release-notes/js-apidiff-medialibrarykit-b105',
                      'dev/release-notes/js-apidiff-nearlinkkit-b105',
                      'dev/release-notes/js-apidiff-networkkit-b105',
                      'dev/release-notes/js-apidiff-notificationkit-b105',
                      'dev/release-notes/js-apidiff-onlineauthenticationkit-b105',
                      'dev/release-notes/js-apidiff-paymentkit-b105',
                      'dev/release-notes/js-apidiff-remotecommunicationkit-b105',
                      'dev/release-notes/js-apidiff-visionkit-b105',
                      'dev/release-notes/js-apidiff-walletkit-b105'
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
              'dev/release-notes/deveco-studio-new-features-501-release',
              'dev/release-notes/ide-changelogs-501'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: "HarmonyOS 5.0.0(12)",
        collapsed: true,
        items: [
          'dev/release-notes/overview-500',
          {
            type: 'category',
            label: "OS平台能力",
            collapsed: true,
            items: [
              'dev/release-notes/os-new-feature-500',
              {
                type: 'category',
                label: "接口行为变更说明",
                collapsed: true,
                items: [
                  'dev/release-notes/changelogs-overview-release',
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Release引入的接口行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b071',
                      'dev/release-notes/changelogs-targeting-api12-b071',
                      'dev/release-notes/changelogs-ux-b071'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Beta引入的接口行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b065',
                      'dev/release-notes/changelogs-targeting-api12-b065'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta5引入的接口行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b060',
                      'dev/release-notes/changelogs-targeting-api12-b060',
                      'dev/release-notes/changelogs-ux-b060'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta3引入的接口行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b035',
                      'dev/release-notes/changelogs-targeting-api12-b035',
                      'dev/release-notes/changelogs-ux-b035'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta2引入的接口行为变更",
                    collapsed: true,
                    items: [
                      'dev/release-notes/changelogs-for-all-apps-b031',
                      'dev/release-notes/changelogs-targeting-api12-b031',
                      'dev/release-notes/changelogs-ux-b031'
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
                      'dev/release-notes/js-apidiff-abilitykit-b065',
                      'dev/release-notes/js-apidiff-accountkit-b065',
                      'dev/release-notes/js-apidiff-arkdata-b065',
                      'dev/release-notes/js-apidiff-arkgraphics3d-b065',
                      'dev/release-notes/js-apidiff-arkts-b065',
                      'dev/release-notes/js-apidiff-arkui-b065',
                      'dev/release-notes/js-apidiff-arkweb-b065',
                      'dev/release-notes/js-apidiff-audiokit-b065',
                      'dev/release-notes/js-apidiff-basicserviceskit-b065',
                      'dev/release-notes/js-apidiff-calendarkit-b065',
                      'dev/release-notes/js-apidiff-callkit-b065',
                      'dev/release-notes/js-apidiff-camerakit-b065',
                      'dev/release-notes/js-apidiff-carkit-b065',
                      'dev/release-notes/js-apidiff-connectivitykit-b065',
                      'dev/release-notes/js-apidiff-corefilekit-b065',
                      'dev/release-notes/js-apidiff-corevisionkit-b065',
                      'dev/release-notes/js-apidiff-cryptoarchitecturekit-b065',
                      'dev/release-notes/js-apidiff-devicesecuritykit-b065',
                      'dev/release-notes/js-apidiff-imagekit-b065',
                      'dev/release-notes/js-apidiff-mapkit-b065',
                      'dev/release-notes/js-apidiff-mediakit-b065',
                      'dev/release-notes/js-apidiff-medialibrarykit-b065',
                      'dev/release-notes/js-apidiff-naturallanguagekit-b065',
                      'dev/release-notes/js-apidiff-networkboostkit-b065',
                      'dev/release-notes/js-apidiff-networkkit-b065',
                      'dev/release-notes/js-apidiff-onlineauthenticationkit-b065',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-b065',
                      'dev/release-notes/js-apidiff-scenariofusionkit-b065',
                      'dev/release-notes/js-apidiff-sharekit-b065',
                      'dev/release-notes/js-apidiff-telephonykit-b065',
                      'dev/release-notes/js-apidiff-universalkeystorekit-b065',
                      'dev/release-notes/js-apidiff-visionkit-b065'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta6引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-accountkit-b061',
                      'dev/release-notes/js-apidiff-arkdata-b061',
                      'dev/release-notes/js-apidiff-arkgraphics2d-b061',
                      'dev/release-notes/js-apidiff-arkts-b061',
                      'dev/release-notes/js-apidiff-arkui-b061',
                      'dev/release-notes/js-apidiff-arkweb-b061',
                      'dev/release-notes/js-apidiff-avsessionkit-b061',
                      'dev/release-notes/js-apidiff-camerakit-b061',
                      'dev/release-notes/js-apidiff-iapkit-b061',
                      'dev/release-notes/js-apidiff-imekit-b061',
                      'dev/release-notes/js-apidiff-penkit-b061',
                      'dev/release-notes/js-apidiff-servicecollaborationkit-b061'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta5引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-b060',
                      'dev/release-notes/js-apidiff-accessibilitykit-b060',
                      'dev/release-notes/js-apidiff-arkdata-b060',
                      'dev/release-notes/js-apidiff-arkts-b060',
                      'dev/release-notes/js-apidiff-arkui-b060',
                      'dev/release-notes/js-apidiff-basicserviceskit-b060',
                      'dev/release-notes/js-apidiff-camerakit-b060',
                      'dev/release-notes/js-apidiff-carkit-b060',
                      'dev/release-notes/js-apidiff-corevisionkit-b060',
                      'dev/release-notes/js-apidiff-devicesecuritykit-b060',
                      'dev/release-notes/js-apidiff-localizationkit-b060',
                      'dev/release-notes/js-apidiff-medialibrarykit-b060',
                      'dev/release-notes/js-apidiff-naturallanguagekit-b060'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta3引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-b035',
                      'dev/release-notes/js-apidiff-accountkit-b035',
                      'dev/release-notes/js-apidiff-adskit-b035',
                      'dev/release-notes/js-apidiff-arkdata-b035',
                      'dev/release-notes/js-apidiff-arkgraphics2d-b035',
                      'dev/release-notes/js-apidiff-arkts-b035',
                      'dev/release-notes/js-apidiff-arkui-b035',
                      'dev/release-notes/js-apidiff-arkweb-b035',
                      'dev/release-notes/js-apidiff-assetstorekit-b035',
                      'dev/release-notes/js-apidiff-basicserviceskit-b035',
                      'dev/release-notes/js-apidiff-connectivitykit-b035',
                      'dev/release-notes/js-apidiff-corefilekit-b035',
                      'dev/release-notes/js-apidiff-corevisionkit-b035',
                      'dev/release-notes/js-apidiff-driverdevelopmentkit-b035',
                      'dev/release-notes/js-apidiff-gameservicekit-b035',
                      'dev/release-notes/js-apidiff-intentskit-b035',
                      'dev/release-notes/js-apidiff-locationkit-b035',
                      'dev/release-notes/js-apidiff-mapkit-b035',
                      'dev/release-notes/js-apidiff-mediakit-b035',
                      'dev/release-notes/js-apidiff-medialibrarykit-b035',
                      'dev/release-notes/js-apidiff-mindsporelitekit-b035',
                      'dev/release-notes/js-apidiff-networkkit-b035',
                      'dev/release-notes/js-apidiff-notificationkit-b035',
                      'dev/release-notes/js-apidiff-pdfkit-b035',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-b035',
                      'dev/release-notes/js-apidiff-remotecommunicationkit-b035',
                      'dev/release-notes/js-apidiff-ringtonekit-b035',
                      'dev/release-notes/js-apidiff-storekit-b035',
                      'dev/release-notes/js-apidiff-uidesignkit-b035',
                      'dev/release-notes/js-apidiff-universalkeystorekit-b035',
                      'dev/release-notes/js-apidiff-visionkit-b035',
                      'dev/release-notes/js-apidiff-wearengine-b035'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta2引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-b031',
                      'dev/release-notes/js-apidiff-accountkit-b031',
                      'dev/release-notes/js-apidiff-arkdata-b031',
                      'dev/release-notes/js-apidiff-arkgraphics2d-b031',
                      'dev/release-notes/js-apidiff-arkts-b031',
                      'dev/release-notes/js-apidiff-arkui-b031',
                      'dev/release-notes/js-apidiff-arkweb-b031',
                      'dev/release-notes/js-apidiff-audiokit-b031',
                      'dev/release-notes/js-apidiff-basicserviceskit-b031',
                      'dev/release-notes/js-apidiff-calendarkit-b031',
                      'dev/release-notes/js-apidiff-camerakit-b031',
                      'dev/release-notes/js-apidiff-carkit-b031',
                      'dev/release-notes/js-apidiff-connectivitykit-b031',
                      'dev/release-notes/js-apidiff-corefilekit-b031',
                      'dev/release-notes/js-apidiff-corevisionkit-b031',
                      'dev/release-notes/js-apidiff-dataprotectionkit-b031',
                      'dev/release-notes/js-apidiff-devicecertificatekit-b031',
                      'dev/release-notes/js-apidiff-devicesecuritykit-b031',
                      'dev/release-notes/js-apidiff-drmkit-b031',
                      'dev/release-notes/js-apidiff-formkit-b031',
                      'dev/release-notes/js-apidiff-gameservicekit-b031',
                      'dev/release-notes/js-apidiff-healthservicekit-b031',
                      'dev/release-notes/js-apidiff-iapkit-b031',
                      'dev/release-notes/js-apidiff-imagekit-b031',
                      'dev/release-notes/js-apidiff-imekit-b031',
                      'dev/release-notes/js-apidiff-ipckit-b031',
                      'dev/release-notes/js-apidiff-liveviewkit-b031',
                      'dev/release-notes/js-apidiff-mapkit-b031',
                      'dev/release-notes/js-apidiff-mdmkit-b031',
                      'dev/release-notes/js-apidiff-mediakit-b031',
                      'dev/release-notes/js-apidiff-medialibrarykit-b031',
                      'dev/release-notes/js-apidiff-networkboostkit-b031',
                      'dev/release-notes/js-apidiff-networkkit-b031',
                      'dev/release-notes/js-apidiff-notificationkit-b031',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-b031',
                      'dev/release-notes/js-apidiff-scankit-b031',
                      'dev/release-notes/js-apidiff-scenariofusionkit-b031',
                      'dev/release-notes/js-apidiff-sharekit-b031',
                      'dev/release-notes/js-apidiff-speechkit-b031',
                      'dev/release-notes/js-apidiff-storekit-b031',
                      'dev/release-notes/js-apidiff-telephonykit-b031',
                      'dev/release-notes/js-apidiff-uidesignkit-b031',
                      'dev/release-notes/js-apidiff-userauthenticationkit-b031',
                      'dev/release-notes/js-apidiff-visionkit-b031',
                      'dev/release-notes/js-apidiff-walletkit-b031',
                      'dev/release-notes/js-apidiff-wearengine-b031',
                      'dev/release-notes/js-apidiff-weatherservicekit-b031'
                    ]
                  },
                  {
                    type: 'category',
                    label: "HarmonyOS NEXT Developer Beta1引入的API",
                    collapsed: true,
                    items: [
                      'dev/release-notes/js-apidiff-abilitykit-hdc',
                      'dev/release-notes/js-apidiff-accessibilitykit-hdc',
                      'dev/release-notes/js-apidiff-accountkit-hdc',
                      'dev/release-notes/js-apidiff-adskit-hdc',
                      'dev/release-notes/js-apidiff-arkdata-hdc',
                      'dev/release-notes/js-apidiff-arkgraphics2d-hdc',
                      'dev/release-notes/js-apidiff-arkgraphics3d-hdc',
                      'dev/release-notes/js-apidiff-arkts-hdc',
                      'dev/release-notes/js-apidiff-arkui-hdc',
                      'dev/release-notes/js-apidiff-arkweb-hdc',
                      'dev/release-notes/js-apidiff-assetstorekit',
                      'dev/release-notes/js-apidiff-audiokit-hdc',
                      'dev/release-notes/js-apidiff-avsessionkit-hdc',
                      'dev/release-notes/js-apidiff-backgroundtaskskit-hdc',
                      'dev/release-notes/js-apidiff-basicserviceskit-hdc',
                      'dev/release-notes/js-apidiff-calendarkit-hdc',
                      'dev/release-notes/js-apidiff-callkit-hdc',
                      'dev/release-notes/js-apidiff-camerakit-hdc',
                      'dev/release-notes/js-apidiff-carkit-hdc',
                      'dev/release-notes/js-apidiff-cloudfoundationkit-hdc',
                      'dev/release-notes/js-apidiff-connectivitykit-hdc',
                      'dev/release-notes/js-apidiff-contactskit-hdc',
                      'dev/release-notes/js-apidiff-corefilekit-hdc',
                      'dev/release-notes/js-apidiff-corespeechkit-hdc',
                      'dev/release-notes/js-apidiff-corevisionkit-hdc',
                      'dev/release-notes/js-apidiff-cryptoarchitecturekit-hdc',
                      'dev/release-notes/js-apidiff-datalosspreventionkit-hdc',
                      'dev/release-notes/js-apidiff-devicecertificatekit-hdc',
                      'dev/release-notes/js-apidiff-devicesecuritykit-hdc',
                      'dev/release-notes/js-apidiff-distributedservicekit-hdc',
                      'dev/release-notes/js-apidiff-driverdevelopmentkit-hdc',
                      'dev/release-notes/js-apidiff-drmkit-hdc',
                      'dev/release-notes/js-apidiff-enterprisedataguardkit-hdc',
                      'dev/release-notes/js-apidiff-formkit-hdc',
                      'dev/release-notes/js-apidiff-gameservicekit-hdc',
                      'dev/release-notes/js-apidiff-healthservicekit-hdc',
                      'dev/release-notes/js-apidiff-iapkit-hdc',
                      'dev/release-notes/js-apidiff-imagekit-hdc',
                      'dev/release-notes/js-apidiff-imekit-hdc',
                      'dev/release-notes/js-apidiff-inputkit-hdc',
                      'dev/release-notes/js-apidiff-intentskit-hdc',
                      'dev/release-notes/js-apidiff-ipckit-hdc',
                      'dev/release-notes/js-apidiff-liveviewkit-hdc',
                      'dev/release-notes/js-apidiff-localizationkit-hdc',
                      'dev/release-notes/js-apidiff-locationkit-hdc',
                      'dev/release-notes/js-apidiff-mapkit-hdc',
                      'dev/release-notes/js-apidiff-mdmkit-hdc',
                      'dev/release-notes/js-apidiff-mediakit-hdc',
                      'dev/release-notes/js-apidiff-medialibrarykit-hdc',
                      'dev/release-notes/js-apidiff-mindsporelitekit-hdc',
                      'dev/release-notes/js-apidiff-naturallanguagekit-hdc',
                      'dev/release-notes/js-apidiff-networkkit-hdc',
                      'dev/release-notes/js-apidiff-notificationkit-hdc',
                      'dev/release-notes/js-apidiff-onlineauthenticationkit-hdc',
                      'dev/release-notes/js-apidiff-paymentkit-hdc',
                      'dev/release-notes/js-apidiff-pdfkit-hdc',
                      'dev/release-notes/js-apidiff-penkit-hdc',
                      'dev/release-notes/js-apidiff-performanceanalysiskit-hdc',
                      'dev/release-notes/js-apidiff-previewkit-hdc',
                      'dev/release-notes/js-apidiff-pushkit-hdc',
                      'dev/release-notes/js-apidiff-remotecommunicationkit-hdc',
                      'dev/release-notes/js-apidiff-scankit-hdc',
                      'dev/release-notes/js-apidiff-scenariofusionkit-hdc',
                      'dev/release-notes/js-apidiff-sensorservicekit-hdc',
                      'dev/release-notes/js-apidiff-servicecollaborationkit-hdc',
                      'dev/release-notes/js-apidiff-sharekit-hdc',
                      'dev/release-notes/js-apidiff-speechkit-hdc',
                      'dev/release-notes/js-apidiff-statusbarextensionkit-hdc',
                      'dev/release-notes/js-apidiff-storekit-hdc',
                      'dev/release-notes/js-apidiff-telephonykit-hdc',
                      'dev/release-notes/js-apidiff-testkit-hdc',
                      'dev/release-notes/js-apidiff-universalkeystorekit-hdc',
                      'dev/release-notes/js-apidiff-userauthenticationkit-hdc',
                      'dev/release-notes/js-apidiff-visionkit-hdc',
                      'dev/release-notes/js-apidiff-walletkit-hdc'
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
              'dev/release-notes/deveco-studio-new-features-500-release',
              'dev/release-notes/ide-changelog-500-release'
            ]
          }
        ]
      }
    ]
  },
  'dev/release-notes/known-issues-baseline',
  {
    type: 'category',
    label: "应用兼容性说明",
    collapsed: true,
    items: [
      'dev/release-notes/app-compatibility-intro',
      'dev/release-notes/app-compatibility-influence-factor',
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
              'dev/release-notes/arkts-api-compatibility-warning-elim',
              'dev/release-notes/c-api-compatibility-warning-elim',
              'dev/release-notes/compatibility-warning-suppress'
            ]
          },
          'dev/release-notes/c-api-compatibility-warning',
          'dev/release-notes/app-compatibility-upgrade',
          'dev/release-notes/app-compatibility-third-har',
          'dev/release-notes/app-compatibility-share-hsp',
          'dev/release-notes/app-compatibility-ui-component'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: "应用升级适配指导-向6.0.0(20)升级",
    collapsed: true,
    items: [
      'dev/release-notes/app-upgrade-intro',
      'dev/release-notes/upgrade-tool-chain',
      'dev/release-notes/adapt-api-changes',
      'dev/release-notes/compatibility-verification',
      'dev/release-notes/publish-new-app',
      'dev/release-notes/issue-report'
    ]
  },
  'dev/release-notes/sdk-version-percentage',
  'dev/release-notes/support-device',
  'dev/release-notes/doc-updates',
  'dev/release-notes/support'
];

module.exports = { releaseNotesSidebar };