module.exports = {
  siteMetadata: {
    siteTitle: `cy.br/dys.top.ia`,
    defaultTitle: `cy.br/dys.top.ia`,
    siteTitleShort: `cy.br/dys.top.ia`,
    siteDescription: `cy.br/dys.top.ia RPG website`,
    siteUrl: `https://tatooka.github.io`,
    siteAuthor: `@tatooka`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cy.br/dys.top.ia`,
        short_name: `cy.br/dys.top.ia`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tatooka.github.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
