/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://static.wixstatic.com/media/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png/v1/fill/w_60,h_13,al_c,usm_0.66_1.00_0.01/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png',
    infoLink: 'https://wix.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Sample OSS Project Website and Documentation' /* title for your website */,
  tagline: 'OSS docosaurus template for wix.com OSS prjects',
  url: 'https://wix-incubator.github.io' /* your website url */,
  baseUrl: '/oss-docosaurus-template-draft/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'oss-docosaurus-template-draft',
  organizationName: 'wix-incubator',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'Dev Portal'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: '<img id="comp-jh4j8a6aimgimage" alt="" data-type="image" style="width: 60px; height: 13px; object-fit: cover;" src="https://static.wixstatic.com/media/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png/v1/fill/w_60,h_13,al_c,usm_0.66_1.00_0.01/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png">',
  footerIcon: '<img id="comp-jh4j8a6aimgimage" alt="" data-type="image" style="width: 60px; height: 13px; object-fit: cover;" src="https://static.wixstatic.com/media/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png/v1/fill/w_60,h_13,al_c,usm_0.66_1.00_0.01/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png">',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Wix.com ltd ',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: '<img id="comp-jh4j8a6aimgimage" alt="" data-type="image" style="width: 60px; height: 13px; object-fit: cover;" src="https://static.wixstatic.com/media/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png/v1/fill/w_60,h_13,al_c,usm_0.66_1.00_0.01/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png">',
  twitterImage: '<img id="comp-jh4j8a6aimgimage" alt="" data-type="image" style="width: 60px; height: 13px; object-fit: cover;" src="https://static.wixstatic.com/media/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png/v1/fill/w_60,h_13,al_c,usm_0.66_1.00_0.01/dae918_d3cfc86cf6194f50a9b10dfdfac0afaa~mv2.png">',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
