// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '嵌入式学习记录',
  tagline: 'C/C++ · STM32 · RTOS · Linux 学习笔记',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://starz0275.github.io',
  baseUrl: '/',
  organizationName: 'starz0275',
  projectName: 'starz0275.github.io',
  trailingSlash: false,

  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/starz0275/starz0275.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/starz0275/starz0275.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Nie Xujing的博客',
        logo: {
          alt: '嵌入式学习记录',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '项目记录',
          },
          {to: '/resume', label: '简历', position: 'left'},
          {to: '/docs/category/面试复盘', label: '面试复盘', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/starz0275/starz0275.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
            items: [
              {label: '项目记录', to: '/docs/intro'},
              {label: '简历', to: '/resume'},
              {label: '面试复盘', to: '/docs/category/面试复盘'},
              {label: '博客', to: '/blog'},
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/starz0275/starz0275.github.io',
              },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/niexujing',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/%E6%97%AD%E6%99%B6-%E8%81%82-2696a53a1/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 聂旭晶. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
