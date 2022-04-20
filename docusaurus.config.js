// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProBot Docs',
  tagline: 'Docs for ProBot.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FnrDev', // Usually your GitHub org/user name.
  projectName: 'discord-wiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/FnrDev/probot-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/FnrDev/probot-docs/tree/main/',
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
      navbar: {
        title: 'ProBot Docs',
        logo: {
          alt: 'ProBot Logo',
          src: 'https://beta.probot.io/static/logo2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          { to: '/blog/introduction', label: 'Blog', position: 'left' },
        ],
        hideOnScroll: true,
        style: 'dark'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ProBotDiscord',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/probot'
              },
              {
                label: 'Discord Server',
                href: 'https://discord.gg/ProBot'
              }
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
                href: 'https://github.com/FnrDev/probot-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProBot, Inc.`,
        logo: {
          alt: 'ProBot Logo',
          src: 'https://beta.probot.io/static/logo2.svg',
          href: 'https://discord.gg/probot',
          width: 150,
          height: 51,
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript'
      },
    }),
};

module.exports = config;
