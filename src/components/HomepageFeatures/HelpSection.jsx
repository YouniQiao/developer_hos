import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
        工欲善其事,必先利其器
        </h2>
        <p className="text-text-400" align="center">
          开发鸿蒙应用的语言和IDE工具使用指导。 <br />
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/icons/arkts.png" alt="arkts" width="48" height="48" />
            <h3 className="my-3">ArkTS</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            ArkTS是HarmonyOS优选的主力应用开发语言，其在TypeScript（简称TS）基础上做了进一步扩展，继承了TS的所有特性，是TS的超集。
            </p>
            <Link
              href="/docs/arkts/intro"
              className="text-primary dark:text-primary-100"
            >
              了解 ArkTS &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/icons/studio.png" alt="studio" width="48" height="48" />
            <h3 className="my-3">DevEco Studio（官方）</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            DevEco Studio 是基于IntelliJ IDEA Community开源版本打造，为开发HarmonyOS应用和服务提供一站式的开发平台。
            </p>
            <Link
              href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-tools-overview-V5"
              className="text-primary dark:text-primary-100"
            >
              了解 DevEco Studio &rarr;
            </Link>
          </div>
          
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/icons/service.png" alt="service" width="48" height="48" />
            <h3 className="my-3">DevEco Service（暂停）</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            DevEco Service 是 HarmonyOS 开发者云端服务中心，汇聚了丰富的资源和服务，共建共享开发资源，并提供7×24小时远程实验室环境和多维度应用、设备测试服务。
            </p>
            <Link href="https://devecostudio.huawei.com/cn/" className="text-primary dark:text-primary-100">
              了解 DevEco Service &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
