import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// References
//Images from blogs
// https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
//Site image
// https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

function Seo({ title, description, keywords, lang, meta, image: metaImage, pathname }) {
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
  const pageTitle = title 
  const siteTitle = site.siteMetadata.title
  const titleTemplate = pageTitle && pageTitle !== 'Home' ? `${pageTitle} | ${siteTitle}` : `${metaDescription}} | ${siteTitle}`
  const metaKeywords = keywords || site.siteMetadata.keywords

  
  const image = metaImage && metaImage.description ? `${site.siteMetadata.siteUrl}${metaImage.src}` : site.siteMetadata.image
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null 
  
  // console.info({ pageTitle, siteTitle  })
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={titleTemplate}
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
          content: metaKeywords
        },
        {
          property: `og:title`,
          content: titleTemplate,
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
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
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
