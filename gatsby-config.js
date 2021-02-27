module.exports = {
  siteMetadata: {
    title: `zak.dog`,
    description: `The most radical web page on the internet.`,
    author: `zak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/art/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/music/`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/code/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zak.dog`,
        short_name: `zak.dog`,
        start_url: `/`,
        background_color: `#0b0c1d`,
        theme_color: `#0b0c1d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
};
