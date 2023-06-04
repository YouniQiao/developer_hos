import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import {
  AngularIcon,
  // ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge">核心技术理念</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            鸿蒙生态应用的核心技术理念
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
           
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">一次开发，多端部署</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
            “一次开发，多端部署”指的是一套代码，一次开发上架，多端按需部署。目的是为了支撑开发者高效地开发多种终端设备上的应用。为了实现这一目的，鸿蒙系统提供了几个核心能力，包括多端开发环境，多端开发能力以及多端分发机制。
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>开发能力</h4>
            <p className="text-sm leading-relaxed text-text-400">
            应用如需在多个设备上运行，需要适配不同的屏幕尺寸和分辨率、不同的交互方式（如触摸和键盘等）、不同的硬件能力（如内存差异和外设差异等），开发成本较高。因此，多端开发能力的核心目标是降低多设备应用的开发成本。
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="/" Icon={ReactIcon} label="多端UI适配" />
                </li>
                <li>
                  <SDKLink
                    href="/"
                    Icon={AngularIcon}
                    label="事件交互归一"
                  />
                </li>
                <li>
                  <SDKLink
                    href="/"
                    Icon={HTMLIcon}
                    label="设备能力抽象"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>多端开发及分发</h4>
            <p className="text-sm leading-relaxed text-text-400">
            DevEco Studio 面向全场景多设备，支持多端双向实时预览、分布式调优调测、超级终端模拟等能力，帮助开发者降低成本。开发多设备应用，只需要一套代码，一次打包出多个 HAP， 统一上架，即可根据设备类型按需进行分发。
            </p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={JSIcon} label="多端双向预览" />
              </li>
              <li>
                <SDKLink href="/" Icon={ReactIcon} label="分布式调试调优" />
              </li>
              <li>
                <SDKLink href="/" Icon={ReactIcon} label="多设备多入口分发" />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">可分可合，自由流转</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
            鸿蒙生态下，鸿蒙原生支持元服务开发，开发者无需维护多套版本，通过业务解耦将应用分解为若干元服务独立开发，按需根据场景组合成复杂应用。元服务是支持可分可合，自由流转的轻量化程序实体，帮助开发者的服务更快触达用户。
            </p>
            {/* <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link> */}
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>可分可合</h4>
            <p className="text-sm leading-relaxed text-text-400">
            在开发态，开发者通过业务解耦，把不同的业务拆分为多个模块。在部署态，开发者可以将一个或多个模块自由组合，打包成一个 App Pack 统一上架。在分发运行态，每个 HAP 都可以单独分发满足用户单一使用场景，也可以多个 HAP 组合分发满足用户更加复杂的使用场景。
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={KotlinIcon} label="服务按需组合为应用" />
              </li>
              <li>
                <SDKLink href="/" Icon={SwiftIcon} label="服务和应用统一上架" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>自由流转</h4>
            <p className="text-sm leading-relaxed text-text-400">
            鸿蒙系统提供了自由流转的能力，使得开发者可以方便地开发出跨越多个设备的应用。自由流转可分为跨端迁移和多端协同两种情况，它们分别是时间上的串行交互和时间上的并行交互。自由流转不仅带给用户全新的交互体验，也为开发者搭建了一座从单设备时代通往多设备时代的桥梁。
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="/"
                  Icon={KotlinIcon}
                  label="跨端迁移"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="多端协同"
                  href="/"
                />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">统一生态，原始智能</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
            鸿蒙系统倡导应用生态统一、多方共建，支持开发者根据自身的业务场景，自由选择原生框架、三方跨平台框架来进行鸿蒙生态应用开发。同时为了满足日益增长的应用智能化诉求，鸿蒙系统内置了多层次、丰富的 AI 开放能力，对开发者提供简洁易用的 API，帮助开发者快速集成API，助力应用智能化。
            </p>
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>统一生态</h4>
            <p className="text-sm leading-relaxed text-text-400">
            鸿蒙系统支持业界主流跨平台开发框架，通过多层次的开放能力提供统一接入标准，实现三方框架快速接入，支持快速丰富鸿蒙生态应用、原子化服务。
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={KotlinIcon} label="多应用生态共享" />
              </li>
              <li>
                <SDKLink href="/" Icon={SwiftIcon} label="统一接入标准" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>原始智能</h4>
            <p className="text-sm leading-relaxed text-text-400">
            鸿蒙系统提供开箱即用的原生 AI 能力,降低智能应用的开发门槛，帮助开发者快速实现应用智能化。也提供软硬芯协同优化的系统级推理框架并预留扩展。
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="/"
                  Icon={KotlinIcon}
                  label="服务能力开放"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="应用能力开放"
                  href="/"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="芯片能力开放"
                  href="/"
                />
              </li>
            </ul>
          </div>

        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-4xl font-semibold">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      
    </section>
  );
}
