import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { animateScroll as scroll } from "react-scroll"


const NavLogo = () => {
    const data = useStaticQuery(graphql`
        query {
          markdownRemark {
            frontmatter {
              logos {
                alt
                logo_dark {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                logo_light {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
    `)
  // let logoDark = getImage(data.markdownRemark.frontmatter.logos.logo_dark)
  let logoLight = getImage(data.markdownRemark.frontmatter.logos.logo_light)
  let logoAltText = data.markdownRemark.frontmatter.logos.alt

  const toggleHome = () => {
    scroll.scrollToTop()
  }
    return (
        <LogoContainer to="/" onClick={toggleHome}>
          {/* <LogoImage image={logoDark} alt={logoAltText} loading="eager"/> */}
          <LogoImage image={logoLight} alt={logoAltText} loading="eager"/>
        </LogoContainer>
    )
}

export default NavLogo


const LogoContainer = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  cursor: pointer;
  width: fit-content;
`
const LogoImage = styled(GatsbyImage)`
  max-width: 300px;
`