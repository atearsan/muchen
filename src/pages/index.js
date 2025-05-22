import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * 生成随机图片路径
 * @returns img path
 */
function randomImg() {
  const MIN_NUM = 1;
  const MAX_NUM = 10;
  // 生成随机数
  let randomNum = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;
  // 拼接文件名
  let fileName = randomNum.toString().padStart(2, '0') + '.svg';
  // 输出文件名
  //console.log(fileName);
  return "/img/car/" + fileName;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // 使用 useState 来管理图片路径
  const [imageSrc, setImageSrc] = useState(randomImg());

  // 点击事件处理函数
  const handleImageClick = () => {
    setImageSrc(randomImg());
  };

  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     {/* <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div> */}
    //   </div>
    // </header>
    <div className="hero">
      <div className={styles.welcome_intro}>
        <h1 className={styles.hero_title}>
          muchen的秘密基地 
          <span style={{ color: 'var(--ifm-color-primary)', display: 'block'}}>
            嗷呜~
          </span>
        </h1>
        <p className="hero__subtitle">
          🚒 🚗 🚕 🚙 🚌 🚎 🚓 🚑 🚐 🚚 🚛
        </p>
      </div>
      <div className={styles.welcome_svg}>
        {/* 添加 onClick 事件，并使用 state 中的 imageSrc */}
        <img src={useBaseUrl(imageSrc)} onClick={handleImageClick} alt="Random Car" />
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
