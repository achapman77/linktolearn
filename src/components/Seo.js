import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// References
//Images from blogs
// https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
//Site image
// https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

function Seo({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  //Images from blogs
  // https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
  // const image =
  //     metaImage && metaImage.description
  //       ? `${site.siteMetadata.siteURL}${metaImage.src}`
  //       : null

  //Site image
  // https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet
  const image = site.siteMetadata.image
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null 
  const keywords = site.siteMetadata.keywords
  // console.info(site.siteMetadata)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name:"kewords",
          content: keywords
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      // .concat(
      //   metaImage
      //     ? [
      //         {
      //           property: "og:image",
      //           content: image,
      //         },
      //         {
      //           property: "og:image:width",
      //           content: metaImage.width,
      //         },
      //         {
      //           property: "og:image:height",
      //           content: metaImage.height,
      //         },
      //         {
      //           name: "twitter:card",
      //           content: "summary_large_image",
      //         },
      //       ]
      //     : [
      //         {
      //           name: "twitter:card",
      //           content: "summary",
      //         },
      //     ]
      // )
      .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  // image: PropTypes.shape({
  //   src: PropTypes.string.isRequired,
  //   height: PropTypes.number.isRequired,
  //   width: PropTypes.number.isRequired,
  // }),
  image: PropTypes.string,
  pathname: PropTypes.string,
}

export default Seo
