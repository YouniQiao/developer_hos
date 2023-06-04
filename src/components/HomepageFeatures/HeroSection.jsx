import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/landing-page/hero-light.png" />
        <link rel="prefetch" href="/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            开发鸿蒙应用
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
          学习 HarmonyOS 系统能力、设计指导、开发指导、API参考等，
          利用 DevEco Studio 开发工具，为不同的设备开发鸿蒙应用，为用户带来优秀的全场景体验。
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/docs/guides/intro"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              快速开始
            </Link>
            <Link
              href="https://developer.harmonyos.com/cn/develop/deveco-studio#download"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              下载 DevEco Studio
            </Link>
          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: '/landing-page/hero-light.png',
              dark: '/landing-page/hero-dark.png',
            }}
            alt="Preview of HarmonyOS Developer"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
