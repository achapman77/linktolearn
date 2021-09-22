module.exports = {
  //Change Site Metadata
  siteMetadata: {
    title: `Gatsby Netlify CMS Template`,
    description: `Gatsby Template integrated with Netlify CMS for dynamic site content and blogs`,
    author: `Steep Line Design`,
    siteUrl: `http://localhost:8000`,
    keywords: `keyword_1, keyword_2, keyword_3`,
    image: `src/assets/images/travel-1.jpg`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx (filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
              nodes {
                id
                slug  
                excerpt(pruneLength: 160)
                rawBody
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                  primary_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "rawBody"],
        store: ["id", "slug", "date", "title", "excerpt", "description", "primary_image"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.slug,
            rawBody: node.rawBody,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: node.frontmatter.date,
            primary_image: node.frontmatter.primary_image
          })),
      },
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
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
        name: `uploads`,
        path: `${__dirname}/content/images/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-data`,
        path: `${__dirname}/content/site-data/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-vscode`,
          // },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          // {
          //   resolve: `gatsby-remark-smartypants`,
          // },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: false,
      },
    },
    // Update Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // edit below
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // Update Manifest name, short_name, colors.  Make sure icons match exported.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Netlify CMS Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        cache_busting_mode: 'none',
        icon: `src/assets/favicons/maskable_icon.png`, 
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `/assets/favicons/maskable_icon_x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/assets/favicons/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`, `/faq/`],
      }
    },
    // `gatsby-plugin-remove-serviceworker`
  ],
}
