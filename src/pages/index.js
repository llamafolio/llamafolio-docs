import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="LlamaFolio docs">
      <HomepageHeader />

      <main>
        <div className="container text--center">
          <div className="row margin-bottom--lg">
            <div className="col" />

            <div className="col">
              <img
                alt="LlamaFolio full image"
                className={styles.llamaFull}
                src={useBaseUrl("/img/llama-full.svg")}
                width="300"
                height="400"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
