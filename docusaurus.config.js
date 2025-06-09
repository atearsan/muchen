// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'muchen的秘密基地 嗷呜~',
  tagline: 'imuchen.com 嗷呜~ / 🚒 / 🚗 🚕 🚙 🚌 🚎 🚓 🚑 🚐 🚚 🚛',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://imuchen.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // feedOptions: {
          //   type: ['rss', 'atom'],
          //   xslt: true,
          // },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          // onInlineTags: 'warn',
          // onInlineAuthors: 'warn',
          // onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-ZWTFES0MZH',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [{name: 'keywords', content: '老路的秘密基地, AI, Web3, 区块链, 撸空投'}],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'muchen的秘密基地',
        logo: {
          alt: '嗷呜~',
          src: 'img/logo-car.png',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'aiSidebar',
            position: 'left',
            label: 'AI',
          },
          {
            type: 'docSidebar',
            sidebarId: 'web3Sidebar',
            position: 'left',
            label: 'Web3',
          },
          {
            type: 'docSidebar',
            sidebarId: 'productManagerSidebar',
            position: 'left',
            label: '产品经理',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/488689081',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/atearsan',
              },
            ],
          },
        ],
        copyright: `
        <footer>
          <p> 
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo" style="color:#fff; display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <img src="/img/beian.png" style="float:left;"/>湘公网安备 43032102000257号
            </a>
            <a style="color:#fff; margin-left: 15px; text-decoration:none;" target="_blank" rel="noopener" href="http://beian.miit.gov.cn/">
                湘ICP备2023000577号-1
            </a>
          </p>
        </footer>
        Copyright © ${new Date().getFullYear()} imuchen, Inc. Built with Docusaurus.
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['r', 'bash'], // 支持R代码高亮
      },
    }),
    scripts: [
      // 添加百度统计
      {src: 'https://hm.baidu.com/hm.js?ca30861e15dc2ef4efb043543fbdb33c',  async: true}
    ]
};

export default config;
