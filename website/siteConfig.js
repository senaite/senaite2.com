/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    name: 'BECHEM Lubrication Technology',
    caption: 'BECHEM Lubrication Technology',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/bechem.svg',
    infoLink: 'https://bechem.de',
    pinned: true,
  },
  {
    name: 'CERMEL',
    caption: 'Centre de Recherches Médicales de Lambaréné',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/cermel.png',
    infoLink: 'https://cermel.org',
    pinned: true,
  },
  {
    name: 'LISCON',
    caption: 'Umwelt Ingenieurservice',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/liscon.jpg',
    infoLink: 'http://liscon.de/',
    pinned: true,
  },
  {
    name: 'Caribbean Public Health Agency',
    caption: 'Caribbean Public Health Agency (CARPHA)',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/carpha.jpg',
    infoLink: 'http://carpha.org',
    pinned: true,
  },
  {
    name: 'Ministry of Health and Child Care',
    caption: 'Ministry of Health and Child Care Zimbabwe',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/mhcc_zim.jpg',
    infoLink: '#',
    pinned: true,
  },
  {
    name: 'Botswana Harvard AIDS Institute Partnership',
    caption: 'Botswana Harvard AIDS Institute Partnership',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/logos/bhp.png',
    infoLink: 'https://www.botswanaharvardpartnership.org/',
    pinned: true,
  }
];

const home_buttons = [
  {
    title: "Try it out",
    href: "https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/senaite/senaite.docker/master/stack.yml",
  }, {
    title: "Community Forum",
    href: "https://community.senaite.org",
  }, {
    title: "Gitter Chat",
    href: "https://gitter.im/senaite/Lobby",
  }, {
    title: "GitHub Repository",
    href: "https://github.com/senaite",
  }

]

const siteConfig = {
  title: 'SENAITE LIMS', // Title for your website.
  tagline: 'Enterprise Open-Source Laboratory Information Management System',
  url: 'https://documentation.senaite.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'senaite',
  organizationName: 'SENAITE',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Documentation'},
    // {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  // If you have home_buttons set above, you add it here:
  home_buttons,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#d6dbdc',
    secondaryColor: '#293333',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2017-${new Date().getFullYear()} SENAITE Professional Service Providers`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/senaite/senaite.core',

  // Twitter
  twitterUsername: 'senaitelims',
};

module.exports = siteConfig;
