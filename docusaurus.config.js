// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'muchen的秘密基地 嗷呜~',
  tagline: 'imuchen.com 嗷呜~ / 🚒 / 🚗 🚕 🚙 🚌 🚎 🚓 🚑 🚐 🚚 🚛',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: '老路的秘密基地, OpenAI, ChatGPT, Midjourney, Web3, 区块链, 撸空投'}],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'muchen的秘密基地',
        logo: {
          alt: '嗷呜~',
          src: 'img/logo-car.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   to: '/about',
          //   label: '关于',
          //   position: 'left'
          // },
          {
            type: 'docSidebar',
            sidebarId: 'chatgptlSidebar',
            position: 'left',
            label: 'ChatGPT',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
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
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43032102000257" style="color:#fff; display:inline-block;text-decoration:none;height:20px;line-height:20px;">
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    scripts: [
      // 添加百度统计
      {src: 'https://hm.baidu.com/hm.js?ca30861e15dc2ef4efb043543fbdb33c',  async: true}
    ]
};

module.exports = config;
