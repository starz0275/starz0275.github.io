import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* 主标题，默认读取配置文件里的 title  */}
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/* 👇 修改这里的副标题 */}
        <p className="hero__subtitle">嵌入式学习 | C/C++ • STM32 • RTOS • Linux</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            // 👇 修改按钮点击跳转的路径，指向你的笔记入口
            to="/docs/intro">
            🔎查看笔记
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
