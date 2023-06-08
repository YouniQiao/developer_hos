import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/HomepageFeatures/HeroSection';
import SDKsSection from '../components/HomepageFeatures/SDKsSection';
import ResourcesSection from '../components/HomepageFeatures/ResourcesSection';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <main>
        <HeroSection />
        <SDKsSection />

        <div className="z-0 bg-secondary-800 dark:bg-secondary-900">
        <ResourcesSection />
        </div>



      </main>
    </Layout>
  );
}
