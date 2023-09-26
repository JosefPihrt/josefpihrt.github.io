import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img width="128 px" height="128 px" src="img/logo-large.png" alt="Josef Pihrt"></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          <img src="https://raw.githubusercontent.com/dotnet/roslynator/main/images/roslynator-logo-small.png"></img>
          <img src="https://raw.githubusercontent.com/josefpihrt/dotmarkdown/main/images/dotmarkdown-logo-small.png"></img>
          <img src="https://raw.githubusercontent.com/josefpihrt/snippetica/main/images/snippetica-logo-small.png"></img>
          <img src="https://raw.githubusercontent.com/josefpihrt/orang/main/images/orang-logo-small.png"></img>
          <img src="https://raw.githubusercontent.com/josefpihrt/gitalias/main/images/gitalias-logo-small.png"></img>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
