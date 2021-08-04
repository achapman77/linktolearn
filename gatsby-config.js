module.exports = {
  siteMetadata: {
    title: `Gatsby Template +++`,
    description: `Gatsby Template that improves on Brian Design's tutorial with Netlify CMS, Theme Variables, Media Query Mixins, Sticky color-changing header`,
    author: `@biz_social_media_handle`,
    siteUrl: `https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/`,
    keywords: `keyword_1, keyword_2, keyword_3`,
    image: `src/assets/images/travel-1.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
